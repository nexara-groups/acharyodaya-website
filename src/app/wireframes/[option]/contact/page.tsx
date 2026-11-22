import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { ContactView } from "@/modules/wireframes/presentation/pages/ContactView";

export default async function WireframeContactPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="contact" />
      <main>
        <ContactView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
