export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceBenefit = {
  title: string;
  desc: string;
};

export type ServiceStep = {
  title: string;
  body: string;
};

export type ServiceMediaKind = "image" | "video";

export type HubLayout = "featured" | "standard";

export type ServiceContent = {
  slug: string;
  path: string;
  title: string;
  hubTitle: string;
  hubBlurb: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  keywords?: string;
  intro: string;
  whatIs: string;
  howItWorks: string;
  process?: ServiceStep[];
  priceLabel: string;
  priceFrom?: string;
  duration?: string;
  holds?: string;
  image: string;
  imageAlt: string;
  media: ServiceMediaKind;
  hubLayout: HubLayout;
  benefits: ServiceBenefit[];
  aftercare?: string[];
  faqs: ServiceFaq[];
  includeFaqSchema: boolean;
  showLocalLinks?: boolean;
};
