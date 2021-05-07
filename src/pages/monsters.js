import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default function Monsters({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Beastiary
        </h1>
        <p>
          The Witcher's code roughly categorizes monsters as creatures of no
          sentience who are deemed a threat to human society. Because of that, a
          monster slayer has to attempt to reason with an opposing creature that
          bears any form of intelligence before he attempts to remove it. It's
          not unheard of a Witcher resolving issues with aggressive creatures by
          reasoning with them, nor is it rare for them to engage in mortal
          combat with entities that exhibited advanced intelligence simply
          because the parties in question where malicious and threatened human
          lives.
        </p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                ></span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/monster/" } }) {
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
