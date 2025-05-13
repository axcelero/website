export type FeatureTab = {
  id: string;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  imageDark: string;
  bullets?: string[];
  sections?: {
    subtitle: string;
    text: string;
    bullets: string[];
  }[];
};
