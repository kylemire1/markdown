import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function About({ data }) {
  return (
    <div>
      <Layout>
        <h1>Characters of {data.site.siteMetadata.title}</h1>
        <h3>Geralt of Rivia</h3>
        <p>
          Geralt of Rivia was a legendary witcher of the School of the Wolf
          active throughout the 13th century. He loved the sorceress Yennefer,
          considered the love of his life despite their tumultuous relationship,
          and became Ciri's adoptive father.
        </p>
        <StaticImage
          src="https://i.pinimg.com/originals/37/96/eb/3796ebefb26c38d7bfa1ae0097a02916.jpg"
          alt="Geralt"
          width={335}
          height={500}
        />
        <h3>Ciri</h3>
        <p>
          Ciri was born in Skellige in Belleteyn of the following year[6] and
          initially, Calanthe ordered her advisor Mousesack to kill Geralt,[7]
          wishing to break free from the Law of Surprise. Mousesack was ready to
          go, as nobody simply refused the queen, but when he was summoned a
          short time later Calanthe retracted the order without explanation.
        </p>
        <StaticImage
          src="https://cdnb.artstation.com/p/assets/images/images/016/392/543/medium/astor-alexander-ciri-2100px.jpg?1551981786"
          alt="Ciri"
          width={335}
          height={500}
        />
        <h3>Yennefer</h3>
        <p>
          Born in 1173, Yennefer had a rough childhood from the moment she was
          born due to her congenital hunchback. Her father immediately detested
          her due to this deformity and blamed Yennefer's mother for it,
          claiming it was through her side, with mages and elven blood, not to
          mention her having had an abortion before, that caused the deformity.
        </p>
        <StaticImage
          src="https://cdna.artstation.com/p/assets/images/images/016/392/546/medium/astor-alexander-yennefer-2100px.jpg?1551981792"
          alt="Yennefer"
          width={335}
          height={500}
        />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
