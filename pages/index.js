import Head from 'next/head'
import { Wrapper } from '../layout/Wrapper'

export default function Home() {
  return (
    <>

    <Wrapper>
      <section>
          <h1>Coders Agora</h1>
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
