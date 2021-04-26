import React from "react"
import { css } from "@emotion/react"
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
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: italic;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>

      <Link
        to={`/about/`}
        css={css`
          float: right;
          color: red;
          font-style: italic;
        `}
      >
        Characters
      </Link>

      <Link
        to={`/monsters/`}
        css={css`
          float: right;
          padding-right: 20px;
          color: red;
          font-style: italic;
        `}
      >
        Monsters
      </Link>

      <Link
        to={`/locations/`}
        css={css`
          float: right;
          padding-right: 20px;
          color: red;
          font-style: italic;
        `}
      >
        Locations
      </Link>

      {children}
    </div>
  )
}
