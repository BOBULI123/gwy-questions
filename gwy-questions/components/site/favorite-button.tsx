"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const KEY = "gwy-favorite-question-ids";

export function FavoriteButton({ questionId }: { questionId: string }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem(KEY) || "[]") as string[];
    setFavorite(ids.includes(questionId));
  }, [questionId]);

  function toggleFavorite() {
    const ids = JSON.parse(localStorage.getItem(KEY) || "[]") as string[];
    const next = ids.includes(questionId)
      ? ids.filter((id) => id !== questionId)
      : [...ids, questionId];
    localStorage.setItem(KEY, JSON.stringify(next));
    setFavorite(next.includes(questionId));
  }

  return (
    <Button variant={favorite ? "default" : "outline"} onClick={toggleFavorite}>
      <Heart className={favorite ? "h-4 w-4 fill-current" : "h-4 w-4"} />
      {favorite ? "已收藏" : "收藏"}
    </Button>
  );
}
