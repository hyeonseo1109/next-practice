export async function GET() {
    const data = [
        { 
            id: 1, 
            name: "보노보노",
            image: "/images/bonobono.png",
            description: "너부리는 내일 나한테 까만 돌멩이를 줄 거야..",
        },
        { 
            id: 2, 
            name: "어른상어",
            image: "/images/adultShark.png",
            description: "잘 익은 어른 상어입니다.",

        },
        { 
            id: 3, 
            name: "아기상어",
            image: "/images/babyShark.png",
            description: "어쩐지 화가 난 듯한 모양새..",
        },
        { 
            id: 4, 
            name: "피크민",
            image: "/images/pikmin.png",
            description: "웅씌웅씌",
        },
        { 
            id: 5, 
            name: "데굴레오",
            image: "/images/degulLeo.png",
            description: "너부리는 내일 나한테 까만 돌멩이를 줄 거야..",
        },
    ];

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    })
    
}