import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { serviceBySlug, serviceSlugs } from "@/lib/content/services";
import { ServiceDetailView } from "../components/ServiceDetailView";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: service.path,
    keywords: service.keywords,
    image: service.media === "image" ? service.image : "/hero2.jpg",
    imageAlt: service.imageAlt,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetailView service={service} />;
}
