import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Locations({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        {/* I moved the header styles to a global style so we don't need to
        set the css on every page. */}
        <h1>Pretty Places</h1>
        {/* The way you were bringing in the description worked, but it was a little
        unorthodox. You can achive the same effect in a similar way by just putting
        the main description right in the template. */}
        <p>
          The game's world is divided into six open-world regions of varying
          size. These are White Orchard, the Royal Palace in Vizima, Velen and
          Novigrad, Skellige, the Kaer Morhen valley, and the duchy of
          Toussaint. These regions are independent of one another and travel
          between them is only possible by fast-travel or story progression,
          while travel within a certain region is possible by any means. Velen
          and Novigrad, while considered two distinct regions on the world map,
          are in fact combined into one large region that can be traversed
          without fast-travelling.
        </p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
// It's a good idea to name your queries (ex: "LocationDataQuery").
// The main reason is it makes it easy to know what the query
// is fetching at a glance. Important when other devs will be
// working on your code.
export const query = graphql`
  query LocationDataQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/location/" } }
      sort: { fields: excerpt }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          html
          fields {
            slug
          }
        }
      }
    }
  }
`
