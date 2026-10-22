import { MongoClient } from "mongodb";

type ClickDoc = { _id: string; count: number };

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

// 개발 모드 핫 리로드 시 연결이 계속 늘어나지 않도록 전역에 캐시한다
function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (!globalForMongo._mongoClientPromise) {
    // 연결에 실패하면 캐시를 비워 다음 요청에서 다시 시도한다
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((error) => {
      globalForMongo._mongoClientPromise = undefined;
      throw error;
    });
  }
  return globalForMongo._mongoClientPromise;
}

// MONGODB_URI가 없으면 null을 반환한다
export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB ?? "linknamu").collection<ClickDoc>("clicks");
}
