"use client";

import { ThemeProvider } from "next-themes";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange={false}
    >
      <LenisProvider>{children}</LenisProvider>
    </ThemeProvider>
  );
}
