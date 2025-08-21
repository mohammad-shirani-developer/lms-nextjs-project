import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import React from "react";
import BlogPostCard from "./BlogPostCard";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};

const BlogPostCardList = ({ posts }: BlogPostCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {posts?.map((post) => (
        <BlogPostCard key={`blog-post-${post.slug}`} {...post} />
      ))}
    </div>
  );
};

export default BlogPostCardList;
