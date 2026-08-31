import { extraServiceBySlug } from "@/lib/extra-services";
import { ExtraServiceView } from "@/app/components/ExtraServiceView";
import { pageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const SLUG = "extensions";
const service = extraServiceBySlug(SLUG);

export const metadata = pageMetadata({
  title: service?.seoTitle ?? "Extensions",
  description: service?.seoDescription ?? "",
  path: service?.path ?? "/diensten/extensions",
});

export default function Page() {
  if (!service) notFound();
  return <ExtraServiceView service={service} />;
}
