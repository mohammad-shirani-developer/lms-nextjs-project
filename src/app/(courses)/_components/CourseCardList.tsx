import { CourseSummary } from "@/types/course-summary.interface";
import CourseCard from "./CourseCard";
import { API_URL } from "@/configs/globals";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
    cache: "no-store",
  });

  // Introduce a 5-second delay after the fetch call
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return res.json();
}

type CourseCardListProps = {
  courses: CourseSummary[];
};

const CourseCardList = async ({ courses }: CourseCardListProps) => {
  const newestCoursesData = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};

export default CourseCardList;
