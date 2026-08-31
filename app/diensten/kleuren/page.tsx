import { extraServiceBySlug } from "@/lib/extra-services";
import { ExtraServiceView } from "@/app/components/ExtraServiceView";
import { pageMetadata } from "@/lib/metadata";
import { getImageUrl } from "@/lib/imageUrl";
import { notFound } from "next/navigation";

const SLUG = "kleuren";

const service = extraServiceBySlug(SLUG);

export const metadata = pageMetadata({
  title: service?.seoTitle ?? "Haarkleuren",
  description: service?.seoDescription ?? "",
  path: service?.path ?? "/diensten/kleuren",
  image: service ? getImageUrl(service.image) : undefined,
});

export default function Page() {
  if (!service) notFound();
  return <ExtraServiceView service={service} />;
}
