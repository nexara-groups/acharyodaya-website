import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { HomeView } from "@/modules/wireframes/presentation/pages/HomeView";

export default async function WireframeHomePage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="" />
      <main>
        <HomeView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
