import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { questions } from "@/app/data/questions";
import { FavoriteButton } from "@/components/site/favorite-button";
import { ParseTabs } from "@/components/site/parse-tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuestionSummary } from "@/lib/question-utils";

type Props = {
  params: { id: string };
};

function findQuestion(id: string) {
  return questions.find((question) => question.id === id);
}

export function generateStaticParams() {
  return questions.map((question) => ({ id: question.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const question = findQuestion(params.id);
  if (!question) {
    return {};
  }

  return {
    title: `${question.year}国考面试真题_${question.typeName}_${question.title.slice(0, 18)}`,
    description: getQuestionSummary(question, 110)
  };
}

export default function QuestionPage({ params }: Props) {
  const question = findQuestion(params.id);
  if (!question) {
    notFound();
  }

  const recommendations = questions
    .filter((item) => item.id !== question.id && (item.type === question.type || item.year === question.year))
    .slice(0, 3);

  return (
    <main className="container py-8 sm:py-10">
      <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          首页
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href={`/type/${question.type}`} className="hover:text-foreground">
          {question.typeName}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="max-w-[220px] truncate sm:max-w-md">{question.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-5 sm:p-7">
              <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="teal">{question.year}</Badge>
                <Badge variant="outline">{question.province}</Badge>
                <Badge variant="amber">{question.typeName}</Badge>
                <Badge variant="secondary">难度：{question.difficulty}</Badge>
              </div>
              <h1 className="text-2xl font-bold leading-10 sm:text-3xl">{question.title}</h1>
              <p className="mt-5 leading-8 text-muted-foreground">{question.content}</p>
              <div className="mt-6">
                <FavoriteButton questionId={question.id} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI 三版本解析</CardTitle>
            </CardHeader>
            <CardContent>
              <ParseTabs question={question} />
            </CardContent>
          </Card>
        </div>

        <aside className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">相关推荐</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recommendations.map((item) => (
                <Link
                  key={item.id}
                  href={`/question/${item.id}`}
                  className="block rounded-md border p-3 transition-colors hover:bg-accent/55"
                >
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge variant="outline">{item.year}</Badge>
                    <Badge variant="teal">{item.typeName}</Badge>
                  </div>
                  <p className="text-sm font-medium leading-6">{getQuestionSummary(item, 62)}</p>
                </Link>
              ))}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
