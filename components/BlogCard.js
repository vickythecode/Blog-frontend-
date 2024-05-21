
import Link from 'next/link';

const BlogCard = ({ blog,metaDesc}) => (
  <div className="border p-4 my-4">
    <h2 className="text-xl font-bold">{blog.title}</h2>
    <p className="my-4">{metaDesc}</p>
    <p className="text-gray-500 mb-2">Author: {blog.author}</p>
    <Link href={"/blogpost/"+blog.slug} passHref legacyBehavior>
      <a className="text-blue-500 hover:underline">Read More</a>
    </Link>
  </div>
);

export default BlogCard;
