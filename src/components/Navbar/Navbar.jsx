import { useState } from "react"
import { Menu, CrossIcon, Divide } from "lucide-react"
import { Link } from 'react-router-dom';
import "./Navbar.css"


export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={`${isOpen ? "navbar_expand" : "navbar_normal"} navbar`}>
      <div className="flexbox">
      <h2 >Robotix Club</h2>
      <div className={`${isOpen ? "display" : "displayno"} navbar`}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/events">event</Link>
      <Link to="/project">project</Link>
      <Link to="/teams">Team</Link>
      </div></div>
      {isOpen ? (
        <CrossIcon onClick={() => setOpen(false)} className="menu_icons cross_icon" />
      ) : (
        <Menu onClick={() => setOpen(true)} className="menu_icons" />
      )}
    </nav>
  )
}
