"use client";

import { useParams } from "next/navigation";
import { useCourseComment } from "../../_api/get-comments";

const CourseComments = () => {
  const { slug } = useParams();
  const { data: comments } = useCourseComment({
    params: {
      slug: slug as string,
      page: 1,
    },
  });
  return (
    <>
      {comments?.data.map((comment) => (
        <div key={comment.id} className="mb-8">
          <p>{comment.commentText}</p>
        </div>
      ))}
    </>
  );
};

export default CourseComments;
