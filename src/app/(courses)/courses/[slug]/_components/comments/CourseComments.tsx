"use client";

import { Alert } from "@/app/_components/alert";
import { Button } from "@/app/_components/button";
import { Comment } from "@/app/_components/comment";
import { IconRefresh } from "@/app/_components/icons/icons";
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
    isFetching,
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

  if (error) {
    return (
      <>
        <Alert variant="error">خطا در برقراری ارتباط با سرور</Alert>
        <div className="text-center mt-3">
          <Button
            variant="neutral"
            className="font-semibold"
            isOutline={true}
            shape="wide"
            onClick={() => refetch()}
          >
            <IconRefresh />
            تلاش مجدد
          </Button>
        </div>
      </>
    );
  }

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

      {(isFetching || hasNextPage) && (
        <div ref={ref}>
          <TextPlaceholder />
        </div>
      )}
    </>
  );
};

export default CourseComments;
