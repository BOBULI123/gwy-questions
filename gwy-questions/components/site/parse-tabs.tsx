"use client";

import { useEffect, useState } from "react";
import { Download, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { canViewParse, type Question } from "@/lib/question-utils";

type Level = "basic" | "advanced" | "expert";

const levelLabels: Record<Level, string> = {
  basic: "小白解析",
  advanced: "进阶解析",
  expert: "高分解析"
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function readViewedIds() {
  const raw = localStorage.getItem("gwy-parse-limit");
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as { date: string; ids: string[] };
    return parsed.date === todayKey() ? parsed.ids : [];
  } catch {
    return [];
  }
}

function writeViewedIds(ids: string[]) {
  localStorage.setItem("gwy-parse-limit", JSON.stringify({ date: todayKey(), ids }));
}

function basicParse(question: Question) {
  return [
    `答题思路：第一步，先表明这道题的核心是“${question.typeName}”能力；第二步，抓住题干里的矛盾点，别急着站队；第三步，给出能落地的处理办法；第四步，用一句简短的话收尾。`,
    `完整答案：我认为这道题要从实际效果出发。面对“${question.title}”，首先要理解背后的出发点，多数公共政策或基层事务都是为了解决真实问题。其次，也要看到执行中可能出现的信息不对称、群众不理解或流程不顺畅。我的做法是先把情况了解清楚，再用群众听得懂的话解释政策和安排，同时推动相关部门把细节做实。这样既能解决眼前问题，也能让工作更有温度。`,
    "金句标注：把群众的小事当作自己的大事。"
  ].join("\n\n");
}

export function ParseTabs({ question }: { question: Question }) {
  const [content, setContent] = useState<Record<Level, string>>({
    basic: basicParse(question),
    advanced: "",
    expert: ""
  });
  const [loading, setLoading] = useState<Level | null>(null);
  const [notice, setNotice] = useState("");
  const [viewedCount, setViewedCount] = useState(0);

  useEffect(() => {
    setViewedCount(readViewedIds().length);
  }, []);

  async function loadParse(level: Level) {
    if (content[level]) {
      return;
    }

    const viewedIds = readViewedIds();
    if (!canViewParse(viewedIds, question.id)) {
      setNotice("今日免费解析次数已用完（3/3），订阅会员解锁无限查看+PDF下载，首月仅需29.9元");
      return;
    }

    setLoading(level);
    setNotice("");

    try {
      const response = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: question.id,
          questionText: question.content,
          type: question.typeName,
          level
        })
      });

      if (!response.ok) {
        const error = (await response.json()) as { error?: string };
        throw new Error(error.error || "解析生成失败");
      }

      const data = (await response.json()) as { parsedContent: string };
      setContent((current) => ({ ...current, [level]: data.parsedContent }));

      if (!viewedIds.includes(question.id)) {
        const nextViewedIds = [...viewedIds, question.id];
        writeViewedIds(nextViewedIds);
        setViewedCount(nextViewedIds.length);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "解析生成失败";
      setNotice(message);
    } finally {
      setLoading(null);
    }
  }

  function renderContent(level: Level) {
    if (!content[level]) {
      return (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <Lock className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold">{levelLabels[level]}尚未生成</p>
              <p className="mt-1 text-sm text-muted-foreground">今日已查看 {Math.min(viewedCount, 3)}/3 道免费解析</p>
            </div>
            <Button onClick={() => loadParse(level)} disabled={loading === level}>
              <Sparkles className="h-4 w-4" />
              {loading === level ? "生成中..." : "查看解析"}
            </Button>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="prose prose-slate max-w-none whitespace-pre-line leading-8">
        {content[level].split("\n").map((line, index) => {
          const isQuote = line.includes("金句") || line.includes("升华");
          return (
            <p key={`${level}-${index}`} className={isQuote ? "gold-highlight font-semibold" : ""}>
              {line}
            </p>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid h-auto w-full grid-cols-3">
          <TabsTrigger value="basic">小白解析</TabsTrigger>
          <TabsTrigger value="advanced">进阶解析</TabsTrigger>
          <TabsTrigger value="expert">高分解析</TabsTrigger>
        </TabsList>
        <TabsContent value="basic">{renderContent("basic")}</TabsContent>
        <TabsContent value="advanced">{renderContent("advanced")}</TabsContent>
        <TabsContent value="expert">{renderContent("expert")}</TabsContent>
      </Tabs>
      {notice ? <div className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">{notice}</div> : null}
      <Button
        variant="outline"
        onClick={() => setNotice("会员功能，即将上线")}
        className="w-full sm:w-auto"
      >
        <Download className="h-4 w-4" />
        导出PDF
      </Button>
    </div>
  );
}
