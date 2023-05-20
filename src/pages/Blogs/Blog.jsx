import { Card } from "flowbite-react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <Card className="mb-5" href="#">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {question}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {answer}
      </p>
    </Card>
  );
};

export default Blog;
