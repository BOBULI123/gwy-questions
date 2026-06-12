import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="分页">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="上一页"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="flex max-w-[220px] items-center gap-1 overflow-x-auto sm:max-w-none">
        {pages.map((item) => (
          <button
            key={item}
            className={cn(
              "h-9 min-w-9 rounded-md border px-3 text-sm font-medium transition-colors",
              item === page
                ? "border-primary bg-primary text-primary-foreground"
                : "border-input bg-background hover:bg-accent"
            )}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="下一页"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  );
}
