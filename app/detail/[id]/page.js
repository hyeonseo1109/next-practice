"use client";

import { useDataStore } from "@/store/useDataStore";

export default function Detail ({params}) {
    const {id} = params;
    const card = useDataStore( (state) => state.cards.find((c) => String(c.id) === id));

    return (
        <>
            {card ? (
                <>
                    <img
                        className="h-[150px] m-[15px]"
                        src={card.image} />
                    {card.description}
                </>
            ) : <h1>상품을 찾을 수 없습니다.</h1>}
        </>
    )
}

