import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: any ) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ message: "News Not Found" }, { status: 404 });
    }
    return NextResponse.json({ message: `News ID: ${id}` });
}