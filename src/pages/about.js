import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export default function About() {
  return (
    <Layout>
      <Link
        to="/"
        style={{
          color: `#000000`,
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      {" | "}
      <Link
        to="/covid/"
        style={{
          color: `#000000`,
          textDecoration: "none",
        }}
      >
        Covid
      </Link>
      {" | "}
      <Link
        to="/about/"
        style={{
          color: `#000000`,
          textDecoration: "none",
        }}
      >
        About
      </Link>
      <Header headerText="Information Desk - " />
      <h1>About</h1>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}
