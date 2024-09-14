import MenuItem from "./MenuItem"
import PropTypes from "prop-types"

function Menu({ links }) {
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

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Menu
