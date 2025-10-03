import { prisma } from '../lib/prisma';

export type UICourse = {
  id: string; // slug
  title: string;
  description: string;
  detailedDescription?: string;
  currentSchedule?: string;
  image?: string; // normalized from imageUrl
  duration: string;
  level: string;
  price?: string;
  features: string[];
  color: string;
};

function toUICourse(row: {
  id: string;
  title: string;
  description: string;
  detailedDescription: string | null;
  currentSchedule: string | null;
  imageUrl: string | null;
  duration: string;
  level: string;
  price: string | null;
  features: string[];
  color: string;
}): UICourse {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    detailedDescription: row.detailedDescription ?? undefined,
    currentSchedule: row.currentSchedule ?? undefined,
    image: row.imageUrl ?? undefined,
    duration: row.duration,
    level: row.level,
    price: row.price ?? undefined,
    features: row.features,
    color: row.color,
  };
}

export async function getAllCourses(): Promise<UICourse[]> {
  const rows = await prisma.course.findMany({
    orderBy: { title: 'asc' },
    select: {
      id: true,
      title: true,
      description: true,
      detailedDescription: true,
      currentSchedule: true,
      imageUrl: true,
      duration: true,
      level: true,
      price: true,
      features: true,
      color: true,
    },
  });
  return rows.map(toUICourse);
}

export async function getCourseById(id: string): Promise<UICourse | null> {
  const row = await prisma.course.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      description: true,
      detailedDescription: true,
      currentSchedule: true,
      imageUrl: true,
      duration: true,
      level: true,
      price: true,
      features: true,
      color: true,
    },
  });
  return row ? toUICourse(row) : null;
}

