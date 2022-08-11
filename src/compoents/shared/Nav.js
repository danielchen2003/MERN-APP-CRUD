import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/create-item">Create Item</NavLink>
      </nav>
    </div>
  )
}
