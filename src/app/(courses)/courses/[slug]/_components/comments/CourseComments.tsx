"use client";

import { Comment } from "@/app/_components/comment";
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
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}
    </>
  );
};

export default CourseComments;
