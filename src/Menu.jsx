import MenuItem from "./MenuItem"

function Menu() {
  return (
    <nav>
      <ul className="menu">
        <MenuItem href="#" icon="home">
          Home
        </MenuItem>
        <MenuItem href="#" icon="services">
          Services
        </MenuItem>
        <MenuItem href="#" icon="pricing">
          Pricing
        </MenuItem>
        <MenuItem href="#" icon="blog">
          Blog
        </MenuItem>
      </ul>
    </nav>
  )
}

export default Menu
