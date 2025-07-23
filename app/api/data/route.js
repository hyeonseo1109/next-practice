export async function GET() {
    const data = [
        { 
            id: 1, 
            name: "보노보노",
            image: "/images/bonobono.png",
        },
        { 
            id: 2, 
            name: "아기상어",
            image: "/images/babyShark.png",
        },
        { 
            id: 3, 
            name: "피크민",
            image: "/images/pikmin.png",
        },
        { 
            id: 4, 
            name: "degulLeo",
            image: "/images/degulLeo.png",
        },
    ];

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    })
    
}