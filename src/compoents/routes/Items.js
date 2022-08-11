import React from "react"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import axios from "axios"
import apiUrl from "../../apiConfig"
export default function Items() {
  const [items, setItems] = useState([])

  async function fetchData() {
    try {
      const response = await axios(`${apiUrl}/items`)
      console.log(response)
      setItems(response.data.items)
    } catch (err) {
      console.error(err)
    }
  }

  const itemsData = items.map((item) => {
    return (
      <li key={item._id}>
        <NavLink to={`/items/${item._id}`}>{item.title}</NavLink>
      </li>
    )
  })

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h4>Items</h4>
      <ul>{itemsData}</ul>
    </div>
  )
}
