import MenuItem from "./MenuItem"
import { useContext } from "react"
import Context from "./Context"

function Menu() {
  const links = useContext(Context)
  return (
    <nav>
      <ul className="menu">
        {links.map(({ title, ...props }) => (
          <MenuItem key={title} {...props}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
