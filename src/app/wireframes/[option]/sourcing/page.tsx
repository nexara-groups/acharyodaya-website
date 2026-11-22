import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { SourcingView } from "@/modules/wireframes/presentation/pages/SourcingView";

export default async function WireframeSourcingPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="sourcing" />
      <main>
        <SourcingView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
