import Link from 'next/link'

function NewsPage() {
  return (
    <>
      <h1>The New Page</h1>
      <ul>
        <li><Link href="/news/nextjs-is-great-framework">NextJS is great framework </Link></li>
        <li><Link href="/news/nextjs-is-react-framework">NextJS is react framework </Link></li>
      </ul>
    </>

  )
}

export default NewsPage
