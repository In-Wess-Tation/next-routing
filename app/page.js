import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <h1>Here is Landing page</h1>
      <nav>
        <ul className="flex gap-2">
          <li><Link href={`/`}>Home</Link></li>
          <li><Link href={`/blog`}>Blog</Link></li>
          <li><Link href={`/contact`}>Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main className="">
      




    </main>
    <footer>

    </footer>
    </>
  )
}
