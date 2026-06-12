import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { hotTopics } from "@/app/data/hot-topics";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: { id: string };
};

function findTopic(id: string) {
  return hotTopics.find((topic) => topic.id === id);
}

export function generateStaticParams() {
  return hotTopics.map((topic) => ({ id: topic.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const topic = findTopic(params.id);
  if (!topic) {
    return {};
  }

  return {
    title: `${topic.title}_公务员面试时政热点`,
    description: `${topic.title}背景、面试预测题和答题角度提示。`
  };
}

export default function HotDetailPage({ params }: Props) {
  const topic = findTopic(params.id);
  if (!topic) {
    notFound();
  }

  return (
    <main className="container py-8 sm:py-10">
      <nav className="mb-5 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          首页
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/hot" className="hover:text-foreground">
          时政热点
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{topic.title}</span>
      </nav>

      <div className="mb-6">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge variant="teal">{topic.date}</Badge>
          {topic.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl font-bold leading-tight">{topic.title}</h1>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <Card>
          <CardHeader>
            <CardTitle>热点背景</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-8 text-muted-foreground">{topic.background}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>预测角度</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.predictions.map((prediction) => (
              <div key={prediction.angle} className="rounded-md border bg-muted/35 p-3 font-medium">
                {prediction.angle}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>面试预测题</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topic.predictions.map((prediction, index) => (
              <div key={prediction.question} className="rounded-md border p-4 leading-7">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-bold text-primary">预测{index + 1}</span>
                  <Badge variant="teal">{prediction.angle}</Badge>
                </div>
                {prediction.question}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
