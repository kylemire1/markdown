import React from "react"
import { Global, css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      {/* Any good styling library will come with a way to make Global styles.
      Here's how we do it in @emotion, but it's similar with Styled Components too.
      You import the provided "Global" component and write CSS in the "styles" prop that it expects.
      Notice it's "styles" versus the "style" prop we put on normal html elements. 
      They just happen to be named similarly. (This is one reason i prefer Styled Components) 
      Here's a concise article about how to do it in Styled Components: https://scalablecss.com/styled-components-global-styles/
      */}
      <Global
        styles={css`
          h1 {
            display: inline-block;
            border-bottom: 1px solid;
          }

          main a {
            color: white;
            :hover {
              color: red;
            }
          }
        `}
      />
      {/* I refactored the markup here because I wanted to show how you could
      accomplish the same layout with less repetitive CSS.

      In general, if you find yourself reaching for css "float", you can
      probably achieve what you're going for much easier with display: flex. */}
      <header
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;

          nav {
            ul {
              list-style: none;
              display: flex;
              align-items: center;
            }
            li + li {
              margin-left: 20px;
            }
            a {
              color: red;
              font-style: italic;
            }
          }
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              font-style: italic;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        {/* Made changes to the markup to make the HTML more semantic
        Added a <header></header> wrapper and wrapped the nav links in
        a <nav></nav>. This provides more context to screen readers
        for accessibility */}
        <nav>
          <ul>
            <li>
              <Link to={`/locations/`}>Locations</Link>
            </li>
            <li>
              <Link to={`/monsters/`}>Monsters</Link>
            </li>
            <li>
              <Link to={`/about/`}>Characters</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}
