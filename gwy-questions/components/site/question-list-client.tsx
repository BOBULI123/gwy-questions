"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Question } from "@/lib/question-utils";
import { filterQuestions, getQuestionSummary, paginate, provinces, years } from "@/lib/question-utils";

type Props = {
  questions: Question[];
  type: string;
};

export function QuestionListClient({ questions, type }: Props) {
  const [year, setYear] = useState("all");
  const [province, setProvince] = useState("全部");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filterQuestions(questions, {
        type,
        year: year === "all" ? "all" : Number(year),
        province
      }),
    [questions, province, type, year]
  );

  const paged = paginate(filtered, page, 20);

  function resetFilter(next: () => void) {
    next();
    setPage(1);
    setExpandedId(null);
  }

  return (
    <div className="space-y-5">
      <Card>
        <CardContent className="grid gap-3 pt-5 sm:grid-cols-2">
          <Select value={year} onValueChange={(value) => resetFilter(() => setYear(value))}>
            <SelectTrigger aria-label="年份筛选">
              <SelectValue placeholder="年份" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">全部年份</SelectItem>
              {years.map((item) => (
                <SelectItem value={String(item)} key={item}>
                  {item}年
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={province} onValueChange={(value) => resetFilter(() => setProvince(value))}>
            <SelectTrigger aria-label="省份筛选">
              <SelectValue placeholder="省份" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="全部">全部省份</SelectItem>
              {provinces.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>共 {filtered.length} 道真题</span>
        <span>
          第 {paged.page} / {paged.totalPages} 页
        </span>
      </div>

      <div className="space-y-3">
        {paged.items.map((question, index) => {
          const isExpanded = expandedId === question.id;
          return (
            <Card key={question.id} className="overflow-hidden">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 min-w-9 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                    {(paged.page - 1) * 20 + index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Badge variant="teal">{question.year}</Badge>
                      <Badge variant="outline">{question.province}</Badge>
                      <Badge variant="amber">{question.typeName}</Badge>
                    </div>
                    <button
                      className="text-left text-base font-semibold leading-7 hover:text-primary"
                      onClick={() => setExpandedId(isExpanded ? null : question.id)}
                    >
                      {getQuestionSummary(question, 86)}
                    </button>
                    {isExpanded ? (
                      <div className="mt-4 rounded-md border bg-muted/40 p-4">
                        <p className="leading-7 text-muted-foreground">{question.content}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button asChild>
                            <Link href={`/question/${question.id}`}>
                              <FileText className="h-4 w-4" />
                              查看完整解析
                            </Link>
                          </Button>
                          <Button variant="outline" onClick={() => setExpandedId(null)}>
                            收起预览
                          </Button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setExpandedId(isExpanded ? null : question.id)}
                    aria-label={isExpanded ? "收起预览" : "展开快速预览"}
                  >
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Pagination page={paged.page} totalPages={paged.totalPages} onPageChange={setPage} />
    </div>
  );
}
