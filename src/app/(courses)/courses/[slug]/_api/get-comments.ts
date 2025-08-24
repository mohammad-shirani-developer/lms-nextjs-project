import { readData } from "@/core/http-service/http-sevice";
import { useQuery } from "@tanstack/react-query";
import { CourseCommentList } from "../_types/course-comment.interface";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComment = ({ params }: GetCommentsOptions) => {
  const { data } = useQuery({
    queryKey: ["courseComment"],
    queryFn: () => getComments({ params }),
    staleTime: 5 * 60 * 60 * 1000,
    gcTime: 6 * 60 * 60 * 1000,
  });
  return { data };
};
