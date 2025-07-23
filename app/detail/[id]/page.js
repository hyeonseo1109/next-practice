"use client";

import { useDataStore } from "@/store/useDataStore";

export default function Detail ({params}) {
    const {id} = params;
    const card = useDataStore( (state) => state.cards.find((c) => String(c.id) === id));

    return (
        <main className="border bg-[gray]">
            {card ? ( <>
                {card.name}
                <img src={card.image}/>

                </>) : <h1>상품을 찾을 수 없습니다.</h1>}
        </main>
    )
}