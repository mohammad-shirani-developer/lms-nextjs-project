import { CourseSummary } from "@/types/course-summary.interface";
import HomeHeroSection from "./_components/homeHeroSection/HomeHeroSection";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  console.log(newestCourses[0].title);

  return (
    <>
      <HomeHeroSection />
      {newestCourses.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </>
  );
}
