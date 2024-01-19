import { useState } from "react"
import { Menu, CrossIcon, Divide } from "lucide-react"

import "./Navbar.css"


export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={`${isOpen ? "navbar_expand" : "navbar_normal"} navbar`}>
      <h2>Robotix Club</h2>

      {isOpen ? (
        <CrossIcon onClick={() => setOpen(false)} className="menu_icons cross_icon" />
      ) : (
        <Menu onClick={() => setOpen(true)} className="menu_icons" />
      )}
    </nav>
  )
}
