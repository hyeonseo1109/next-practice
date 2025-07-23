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
            description: "잘 익은 어른 상어",

        },
        { 
            id: 3, 
            name: "아기상어",
            image: "/images/babyShark.png",
            description: "왜인지 화가 난 듯한 모양새..",
        },
        { 
            id: 4, 
            name: "피크민",
            image: "/images/pikmin.png",
            description: "웅씌웅씌",
        },
        { 
            id: 5, 
            name: "대굴레오",
            image: "/images/ddegulLeo.png", 
            description: "두꺼운 지방에 둘러싸인 완벽하게 둥근 몸을 가졌다. 걷는 것보다 굴러가는 게 더 빠르다.",
        },
    ];

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    })
    
}