import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { ExportsView } from "@/modules/wireframes/presentation/pages/ExportsView";

export default async function WireframeExportsPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="exports" />
      <main>
        <ExportsView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
