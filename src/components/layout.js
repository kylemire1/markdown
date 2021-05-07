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
