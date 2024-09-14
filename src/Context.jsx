import { createContext, useContext, useState } from "react"
import PropTypes from "prop-types"

const DataContext = createContext({
  links: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
})

const Home = { title: "Home", href: "/", icon: "home" }
const Services = { title: "Services", href: "/services", icon: "services" }
const Pricing = { title: "Pricing", href: "/pricing", icon: "pricing" }
const Blog = { title: "Blog", href: "/blog", icon: "blog" }
const Profile = { title: "Profile", href: "/profile", icon: "profile" }

export function DataProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const login = () => setLoggedIn(true)
  const logout = () => setLoggedIn(false)
  const links = [Home, Services, Pricing, Blog].concat(
    isLoggedIn ? [Profile] : []
  )
  const value = { isLoggedIn, login, logout, links }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
