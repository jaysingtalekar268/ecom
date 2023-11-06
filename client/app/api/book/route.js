import { NextResponse } from "next/server";


export async function GET(req) {
    return NextResponse.json({ text: "thsif is book" })
}