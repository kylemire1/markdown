import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <h1>Overview of {data.site.siteMetadata.title}</h1>
        <p>
          A monster hunter for hire embarks on an epic journey to find his
          former apprentice before The Wild Hunt can capture her and bring about
          the destruction of the world. The witcher Geralt of Rivia in the
          search for his fellow lover the sorceress Yennefer of Vengerberg
          learns that his former witcher apprentice Cirilla who disappeared
          years ago has returned to Temeria and is being chased by The Wild
          Hunt, a group of riders of the night which pressence brings omen of
          death and destruction to anything that crosses their path. Geralt then
          sets on a quest to find Cirilla before The Wild Hunt gets to her
          first.
        </p>
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
