import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

// For store the counts
export async function POST(req: Request) {
  // increament the counter
  const count = await redis.incr("total_visits");

  // optionally log the visits, that i can monitor
  await redis.lpush(
    "total_visits",
    JSON.stringify({
      ip: req.headers.get("x-forwarded-for"),
      time: new Date().toISOString,
    })
  );

  return NextResponse.json({
    visits: count,
  });
}

export async function GET() {
  // get the count
  const count = await redis.get<number>("total_visits");
  return NextResponse.json({ visits: count || 0 });
}
