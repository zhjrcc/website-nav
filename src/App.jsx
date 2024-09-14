import Menu from "./Menu"
import "./style.css"
import Context from "./Context"

function App() {
  const links = [
    { title: "Home", href: "/", icon: "home" },
    { title: "Services", href: "/services", icon: "services" },
    { title: "Pricing", href: "/pricing", icon: "pricing" },
    { title: "Blog", href: "/blog", icon: "blog" },
  ]
  return (
    <Context.Provider value={links}>
      <header>
        <Menu />
      </header>
      <main>
        <h1>Welcome to this website</h1>
      </main>
      <footer>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">React Quickly 2E</a>
      </footer>
    </Context.Provider>
  )
}

export default App
