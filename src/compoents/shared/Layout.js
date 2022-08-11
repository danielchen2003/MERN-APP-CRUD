import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"

export default function Layout(props) {
  return (
    <div>
      <h1>Items App</h1>
      <Nav></Nav>
      {props.children}
      <Footer></Footer>
    </div>
  )
}
