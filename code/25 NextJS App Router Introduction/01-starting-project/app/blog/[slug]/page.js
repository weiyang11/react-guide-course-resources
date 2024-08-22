export default function BlogPostPage({params}) {
  return (
    <main>
      <h1>Blog Post</h1>
      <p>This is a {params.slug} </p>
    </main>
  );
}
