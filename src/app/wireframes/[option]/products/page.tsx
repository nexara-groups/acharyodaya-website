import { notFound } from "next/navigation";
import { isWireframeOptionId } from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { ProductsView } from "@/modules/wireframes/presentation/pages/ProductsView";

export default async function WireframeProductsPage({
  params,
}: {
  params: Promise<{ option: string }>;
}) {
  const { option } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="products" />
      <main>
        <ProductsView option={option} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
