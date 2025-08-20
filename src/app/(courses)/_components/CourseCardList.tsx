import { CourseSummary } from "@/types/course-summary.interface";
import CourseCard from "./CourseCard";

type CourseCardListProps = {
  courses: CourseSummary[];
};

const CourseCardList = ({ courses }: CourseCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {courses.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};

export default CourseCardList;
