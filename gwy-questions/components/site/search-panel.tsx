"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { questions } from "@/app/data/questions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { filterQuestions, getQuestionSummary } from "@/lib/question-utils";

export function SearchPanel() {
  const [keyword, setKeyword] = useState("");

  const results = useMemo(() => {
    if (!keyword.trim()) {
      return [];
    }
    return filterQuestions(questions, { keyword }).slice(0, 8);
  }, [keyword]);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex flex-col gap-3 rounded-lg border bg-card p-2 shadow-soft sm:flex-row">
        <Input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="搜索真题关键词，如'应急应变''人际关系'..."
          className="h-12 border-0 bg-transparent text-base shadow-none focus-visible:ring-0"
        />
        <Button className="h-12 sm:w-32">
          <Search className="h-4 w-4" />
          搜索
        </Button>
      </div>
      {results.length > 0 ? (
        <div className="mt-3 rounded-lg border bg-card p-3 text-left shadow-soft">
          <div className="mb-2 text-sm font-medium text-muted-foreground">找到 {results.length} 条相关真题</div>
          <div className="space-y-2">
            {results.map((question) => (
              <Link
                key={question.id}
                href={`/question/${question.id}`}
                className="block rounded-md border p-3 transition-colors hover:bg-accent/60"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="teal">{question.year}</Badge>
                  <Badge variant="outline">{question.province}</Badge>
                  <Badge variant="amber">{question.typeName}</Badge>
                </div>
                <p className="text-sm font-medium leading-6">{getQuestionSummary(question, 72)}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
