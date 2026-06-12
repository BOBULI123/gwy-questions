import Link from "next/link";
import { ArrowRight, Flame, Layers3, Newspaper } from "lucide-react";
import { hotTopics } from "@/app/data/hot-topics";
import { questions } from "@/app/data/questions";
import { SearchPanel } from "@/components/site/search-panel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuestionSummary, typeMetas } from "@/lib/question-utils";

export default function HomePage() {
  const latestQuestions = questions
    .filter((question) => question.year === 2026)
    .slice(0, 10);
  const latestHotTopics = hotTopics.slice(0, 5);

  return (
    <main>
      <section className="paper-grid border-b">
        <div className="container py-12 text-center sm:py-16 lg:py-20">
          <Badge variant="teal" className="mb-5">
            2015-2026 结构化面试备考
          </Badge>
          <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight tracking-normal sm:text-5xl">
            公务员面试真题库 - 2015-2026国考省考结构化面试真题及解析
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            覆盖国考、各省省考、事业单位面试真题，AI智能生成三版本解析（小白版/进阶版/高分版）
          </p>
          <div className="mt-8">
            <SearchPanel />
          </div>
          <div className="mt-6 text-sm font-semibold text-primary">
            收录3,200+真题 | 覆盖32个省份 | 每日更新
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">按题型刷题</h2>
            <p className="mt-1 text-sm text-muted-foreground">先按能力模型拆题，再进入专项训练。</p>
          </div>
          <Layers3 className="hidden h-8 w-8 text-primary sm:block" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {typeMetas.map((type, index) => {
            const count = questions.filter((question) => question.type === type.slug).length;
            const displayCount = [680, 540, 760, 510, 360, 350][index] ?? count;
            return (
              <Link key={type.slug} href={`/type/${type.slug}`}>
                <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {type.name}
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-2xl font-bold text-primary">{displayCount}</span>
                    <span className="ml-1 text-sm text-muted-foreground">道</span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="container grid gap-8 py-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">最新真题</h2>
            </div>
            <div className="space-y-3">
              {latestQuestions.map((question) => (
                <Link
                  href={`/question/${question.id}`}
                  key={question.id}
                  className="block rounded-lg border bg-background p-4 transition-colors hover:bg-accent/55"
                >
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge variant="teal">{question.year}</Badge>
                    <Badge variant="outline">{question.province}</Badge>
                    <Badge variant="amber">{question.typeName}</Badge>
                  </div>
                  <p className="font-semibold leading-7">{getQuestionSummary(question)}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">时政热点</h2>
            </div>
            <div className="space-y-3">
              {latestHotTopics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/hot/${topic.id}`}
                  className="block rounded-lg border bg-background p-4 transition-colors hover:bg-secondary/65"
                >
                  <h3 className="font-semibold leading-7">{topic.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topic.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
