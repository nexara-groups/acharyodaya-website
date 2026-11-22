import { notFound } from "next/navigation";
import {
  SAMPLE_PRODUCTS,
  WIREFRAME_OPTIONS,
  isWireframeOptionId,
} from "@/modules/wireframes/domain/wireframe-data";
import {
  WireframeFooter,
  WireframeHeader,
} from "@/modules/wireframes/presentation/WireframePrimitives";
import { ProductDetailView } from "@/modules/wireframes/presentation/pages/ProductDetailView";

export function generateStaticParams() {
  return WIREFRAME_OPTIONS.flatMap((o) =>
    SAMPLE_PRODUCTS.map((p) => ({ option: o.id, slug: p.slug })),
  );
}

export default async function WireframeProductDetailPage({
  params,
}: {
  params: Promise<{ option: string; slug: string }>;
}) {
  const { option, slug } = await params;
  if (!isWireframeOptionId(option)) notFound();

  return (
    <>
      <WireframeHeader option={option} activeSegment="products" />
      <main>
        <ProductDetailView option={option} slug={slug} />
      </main>
      <WireframeFooter option={option} />
    </>
  );
}
