import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { AboutView } from "@/modules/wireframes/presentation/pages/AboutView";

export default async function WireframeAboutPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="about" />
      <main>
        <AboutView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
