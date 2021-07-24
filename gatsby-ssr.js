import React from "react"
import "./src/styles/app.scss"
import "normalize.css"
import Layout from "./src/components/Layout"

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <>{element}</>
}
