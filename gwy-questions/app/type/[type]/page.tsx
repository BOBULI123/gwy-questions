import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { questions } from "@/app/data/questions";
import { QuestionListClient } from "@/components/site/question-list-client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getTypeMeta, typeMetas } from "@/lib/question-utils";

type Props = {
  params: { type: string };
};

export function generateStaticParams() {
  return typeMetas.map((type) => ({ type: type.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const type = getTypeMeta(params.type);
  if (!type) {
    return {};
  }

  return {
    title: `${type.name}面试真题大全_公务员国考省考`,
    description: `2015-2026年${type.name}公务员面试真题，覆盖国考、省考、事业单位结构化面试，支持年份和省份筛选。`
  };
}

export default function TypePage({ params }: Props) {
  const type = getTypeMeta(params.type);
  if (!type) {
    notFound();
  }

  const typedQuestions = questions.filter((question) => question.type === params.type);

  return (
    <main className="container py-8 sm:py-10">
      <div className="mb-6">
        <Badge variant="teal" className="mb-3">
          专项题库
        </Badge>
        <h1 className="text-3xl font-bold leading-tight">{type.name}面试真题大全_公务员国考省考</h1>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
          {type.description}专项训练，支持按 2015-2026 年份和省份筛选，每题可展开快速预览。
        </p>
      </div>
      <Card className="mb-5 bg-primary text-primary-foreground">
        <CardContent className="grid gap-4 p-5 sm:grid-cols-3">
          <div>
            <div className="text-2xl font-bold">{typedQuestions.length}</div>
            <div className="text-sm opacity-85">当前演示题量</div>
          </div>
          <div>
            <div className="text-2xl font-bold">20题/页</div>
            <div className="text-sm opacity-85">移动端友好分页</div>
          </div>
          <div>
            <div className="text-2xl font-bold">3版本解析</div>
            <div className="text-sm opacity-85">详情页生成</div>
          </div>
        </CardContent>
      </Card>
      <QuestionListClient questions={questions} type={params.type} />
    </main>
  );
}
