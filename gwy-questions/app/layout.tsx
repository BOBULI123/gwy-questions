import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { getSiteUrl } from "@/lib/site-config";
import "./globals.css";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "公务员面试真题库 - 2015-2026国考省考结构化面试真题及解析",
  description:
    "覆盖国考、各省省考、事业单位面试真题，AI智能生成三版本解析（小白版/进阶版/高分版），每日更新，助你上岸。",
  keywords: "公务员面试真题,国考面试,省考面试,结构化面试,面试真题解析,公务员面试题库",
  verification: googleVerification ? { google: googleVerification } : undefined
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
          <div className="container flex h-16 items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <BookOpenCheck className="h-5 w-5" />
              </span>
              <span className="leading-tight">公考面试真题库</span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Link className="hover:text-foreground" href="/quotes">
                金句库
              </Link>
              <Link className="hover:text-foreground" href="/hot">
                时政热点
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-card">
          <div className="container flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>公务员面试真题库，专注结构化面试练习与解析生成。</p>
            <p>AI 解析仅供备考参考，请结合官方政策与个人表达调整。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
