"use client";

import { Comment } from "@/app/_components/comment";
import { TextPlaceholder } from "@/app/_components/placholders";
import { useParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCourseComment } from "../../_api/get-comments";

const CourseComments = () => {
  const { ref, inView } = useInView({});
  const { slug } = useParams();
  const {
    data: comments,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComment({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      {comments?.pages.map((currentPage) => (
        <Fragment key={`comment-page-${currentPage}`}>
          {currentPage.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}

      {(isFetchingNextPage || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </>
  );
};

export default CourseComments;
