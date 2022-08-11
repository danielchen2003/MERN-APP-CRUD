import "./App.css"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./compoents/routes/Home"
import Item from "./compoents/routes/Item"
import ItemCreate from "./compoents/routes/ItemCreate"
import Items from "./compoents/routes/Items"
import ItemEdit from "./compoents/routes/ItemEdit"

function App() {
  const location = useLocation
  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="/create-item" element={<ItemCreate />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/items/:id/edit" element={<ItemEdit />} />
      </Routes>
    </div>
  )
}

export default App
