export const dynamic = 'force-static';
export const dynamicParams = false;

import SectionClient from '../../src/components/SectionClient';

const VALID_SECTIONS = [
  'about',
  'testimonials',
  'achievements',
  'courses',
  'our-team',
  'faq',
  'contact',
] as const;

export function generateStaticParams() {
  return VALID_SECTIONS.map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  return <SectionClient section={params.section} />;
}
