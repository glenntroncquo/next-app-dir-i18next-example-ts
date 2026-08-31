import { extraServiceBySlug } from "@/lib/extra-services";
import { ExtraServiceView } from "@/app/components/ExtraServiceView";
import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const SLUG = "brushing";
const service = extraServiceBySlug(SLUG);

export const metadata = pageMetadata({
  title: service?.seoTitle ?? "Brushing",
  description: service?.seoDescription ?? "",
  path: service?.path ?? "/diensten/brushing",
});

export default function Page() {
  if (!service) notFound();
  return <ExtraServiceView service={service} />;
}
