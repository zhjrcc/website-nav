import PropTypes from 'prop-types'

function MenuItem({href, icon, children}) {
  return (
    <li>
      <a href={href} className="menu-link">
        <img src={`icons/${icon}.svg`} width="16"/>
        {children}
      </a>
    </li>
  )
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default MenuItem
