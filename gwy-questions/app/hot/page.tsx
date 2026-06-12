import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { hotTopics } from "@/app/data/hot-topics";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "公务员面试时政热点",
  description: "最新公务员面试时政热点，包含热点背景、预测题和答题角度提示。"
};

export default function HotPage() {
  return (
    <main className="container py-8 sm:py-10">
      <Badge variant="teal" className="mb-3">
        每月更新
      </Badge>
      <h1 className="text-3xl font-bold">公务员面试时政热点</h1>
      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
        汇总近期高频政策与社会治理主题，帮助你把热点背景转化为面试预测角度。
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {hotTopics.slice(0, 10).map((topic) => (
          <Link href={`/hot/${topic.id}`} key={topic.id}>
            <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-soft">
              <CardContent className="p-5">
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  {topic.date}
                </div>
                <h2 className="text-xl font-semibold leading-8">{topic.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
