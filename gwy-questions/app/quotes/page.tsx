import type { Metadata } from "next";
import { QuoteLibrary } from "@/components/site/quote-library";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "公务员面试金句库",
  description: "按民生、创新、担当、基层、法治、生态、文化、团结、奋斗分类整理公务员面试金句。"
};

export default function QuotesPage() {
  return (
    <main className="container py-8 sm:py-10">
      <Badge variant="teal" className="mb-3">
        答题素材
      </Badge>
      <h1 className="text-3xl font-bold">公务员面试金句库</h1>
      <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
        按主题分类整理常用表达，每条包含适用场景和使用示例，适合在进阶版、高分版答案中自然嵌入。
      </p>
      <div className="mt-8">
        <QuoteLibrary />
      </div>
    </main>
  );
}
