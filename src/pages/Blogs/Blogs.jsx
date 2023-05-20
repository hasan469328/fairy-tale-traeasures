import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";
import useTitle from "../../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  const blogs = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-5xl mb-10">FAQ</h1>
      <div className="mb-10">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
