import Link from 'next/link'
import { Wrapper } from '../layout/Wrapper'
import {Hero} from '../components/Hero'

export default function Home() {
  return (
    <>

    <Wrapper>
      <section>
          <Hero></Hero>
          {/**Ruteado con link */}
          <Link href='/Blog'>
            <a> Blog</a>
          </Link>
      </section>
    </Wrapper>
    <style jsx>{`
      h1 {
        font-size: 5rem;
      }

      .wrapper {
        display: grid;
        grid-template-colums: 1fr min(1200px, 180%) 1fr;
      }

      .content {
        grid-column-start: 2;
      }
    `}</style>
    </>
  )
}
