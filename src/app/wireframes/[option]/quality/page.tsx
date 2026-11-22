import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { QualityView } from "@/modules/wireframes/presentation/pages/QualityView";

export default async function WireframeQualityPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="quality" />
      <main>
        <QualityView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
