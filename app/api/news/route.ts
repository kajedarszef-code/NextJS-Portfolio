import { NextResponse } from "next/server";


export async  function GET() {
    const news = [
        {
            id: 1,
            title: "Nowy film wkrótce!",
            content: "Pracujemy nad nowym filmem, który będzie dostępny już wkrótce. Śledź nas, aby być na bieżąco!"
        },
        {
            id: 2,
            title: "Aktualizacja strony",
            content: "Wprowadziliśmy kilka poprawek i ulepszeń na naszej stronie. Sprawdź je już teraz!"
        }
    ];
    return NextResponse.json(news);
} 

export async function POST(Request: Request) {
    const { title, content } = await Request.json();

    return NextResponse.json({ received: { title, content } });
    
} 