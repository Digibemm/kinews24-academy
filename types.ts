import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface CaseStudyProps {
  company: string;
  problem: string;
  solution: string;
  result: string;
  quote: string;
  author: string;
}
