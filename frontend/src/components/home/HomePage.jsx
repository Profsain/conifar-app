import { useState, useEffect } from "react";
import fetchPost from "../../utils/fetchPost";
import CarouselCom from "./Carousel";
import BlogCard from "../shared/BlogCard";



const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // fetch all posts from backend
  useEffect(() => {
    fetchPost(setPosts);
  }, []);

  return (
    <main>
        <CarouselCom />
      <div className="container marketing ">
       
        <hr className="featurette-divider" />

        {posts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            content={post.content.slice(0, 300) + "..."}
            imgUrl={post.imgUrl}
          />
        ))
        }

      </div>

      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017–2023 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </main>
  );
}

export default HomePage