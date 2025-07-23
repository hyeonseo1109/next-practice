"use client";

import { useDataStore } from "@/store/useDataStore";
import { useEffect } from "react";
import Link from "next/link";


export default function Main() {
  const cards = useDataStore( (state) => (state.cards));
  const fetchCards = useDataStore( (state) => state.fetchCards);

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="flex gap-[20px] flex-row">
      {cards.map((card) => (
        <Link key={card.id} href={`/detail/${card.id}`}>
          <div >{card.name}</div>
        </Link>
      ))}
    </div>
  );
}
