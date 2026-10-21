import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const validIds = new Set(links.map((link) => link.id));

const noDbResponse = () =>
  NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }
  if (typeof id !== "string" || !validIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) return noDbResponse();

  await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}

// 링크별 클릭 수 조회
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) return noDbResponse();

  const docs = await clicks.find().toArray();
  const counts: Record<string, number> = Object.fromEntries(links.map((link) => [link.id, 0]));
  for (const doc of docs) counts[doc._id] = doc.count;
  return NextResponse.json(counts);
}
