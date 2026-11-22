import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  WIREFRAME_OPTIONS,
  isWireframeOptionId,
} from "@/modules/wireframes/domain/wireframe-data";
import { WireframeToolbar } from "@/modules/wireframes/presentation/WireframeToolbar";

export function generateStaticParams() {
  return WIREFRAME_OPTIONS.map((o) => ({ option: o.id }));
}

export default async function WireframeOptionLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;

  if (!isWireframeOptionId(option)) {
    notFound();
  }

  return (
    <div className={`theme-${option}`}>
      <WireframeToolbar currentOption={option} />
      {children}
    </div>
  );
}
