import { useState, useEffect } from "react";
import fetchPost from "../../utils/fetchPost";
import BlogCard from "../shared/BlogCard";
import "../Blog.css";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  // fetch all posts from backend
  useEffect(() => {
    fetchPost(setPosts);
  }, []);
  return (
    <div className="container box">
      <h1>Welcome to Blog List</h1>

      <div className="my-4">
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            content={post.content.slice(0, 300) + "..."}
            imgUrl={post.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
