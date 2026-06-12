"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";
import { quoteGroups } from "@/app/data/quotes";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuoteLibrary() {
  const [openTheme, setOpenTheme] = useState(quoteGroups[0]?.theme ?? "");

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {quoteGroups.map((group) => {
        const isOpen = openTheme === group.theme;
        return (
          <Card key={group.theme} className="overflow-hidden">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-primary" />
                  {group.theme}
                </CardTitle>
                <Badge variant="teal" className="mt-3">
                  {group.count} 条金句
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenTheme(isOpen ? "" : group.theme)}
                aria-label={isOpen ? "收起金句" : "展开金句"}
              >
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CardHeader>
            {isOpen ? (
              <CardContent className="space-y-3">
                {group.quotes.map((quote) => (
                  <div key={quote.content} className="rounded-md border bg-muted/30 p-3">
                    <p className="font-semibold leading-7">{quote.content}</p>
                    <p className="mt-2 text-sm text-muted-foreground">适用场景：{quote.scene}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">使用示例：{quote.example}</p>
                  </div>
                ))}
              </CardContent>
            ) : null}
          </Card>
        );
      })}
    </div>
  );
}
