import { useRouter } from "next/router";

function BlogsPostPage(params) {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
}

export default BlogsPostPage;
