export type Article = {
  id: string;
  title: string;
  subtitle?: string;
  publishedAt: string; // ISO date
  imageUrl?: string;
  excerpt?: string;
  body: string;
};

export const articles: Article[] = [
  {
    id: 'getting-into-stem',
    title: 'Getting Into STEM: A Practical Guide for High School Students',
    subtitle: 'Strategies, resources, and mindsets to start strong',
    publishedAt: '2024-07-14T00:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Explore actionable steps to build your STEM foundation—from choosing courses to joining competitions.',
    body: `<p>Launching a STEM journey can feel overwhelming. In this article, we break down a step-by-step plan: course selection, clubs and competitions, and building a project portfolio.</p>
          <p>Focus on fundamentals, practice consistently, and seek feedback. Over time, you will compound your skills.</p>`,
  },
  {
    id: 'sat-strategy',
    title: 'SAT Strategy: How to Use Practice Tests Effectively',
    publishedAt: '2024-06-30T00:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Turn practice into progress with deliberate review cycles and timing drills.',
    body: `<p>Practice tests are most valuable when paired with structured review. Track mistakes by category, re-test your weak areas, and iterate weekly.</p>`,
  },
  {
    id: 'college-essays',
    title: 'Writing College Essays That Stand Out',
    subtitle: 'Personal stories, not clichés',
    publishedAt: '2024-05-22T00:00:00.000Z',
    excerpt: 'Admissions officers value authenticity. Here is a framework to find and shape your narrative.',
    body: `<p>Your story matters. Start by listing defining experiences, extract themes, and draft multiple angles before choosing.</p>`,
  },
  {
    id: 'math-habits',
    title: 'Math Habits That Compound Over Time',
    publishedAt: '2024-04-10T00:00:00.000Z',
    imageUrl: 'https://images.unsplash.com/photo-1520975682031-a98b5f7c7b3b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Daily problem-solving, spaced repetition, and reflective error logs build durable mastery.',
    body: `<p>Mastery is built on habits. Keep a simple log of mistakes and revisit them weekly to prevent repeat errors.</p>`,
  },
  {
    id: 'study-systems',
    title: 'Build a Study System You Can Stick To',
    publishedAt: '2024-03-15T00:00:00.000Z',
    excerpt: 'A lightweight system beats a perfect one you never use.',
    body: `<p>Design for consistency: fixed time blocks, minimal friction, and weekly reflection.</p>`,
  },
];
