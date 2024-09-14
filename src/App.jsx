import Menu from "./Menu"
import "./style.css"
import { DataProvider } from "./Context"
import MainBody from "./MainBody"

function App() {
  return (
    <DataProvider>
      <header>
        <Menu />
      </header>
      <MainBody />
      <footer>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">React Quickly 2E</a>
      </footer>
    </DataProvider>
  )
}

export default App
