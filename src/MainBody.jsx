import { useData } from "./Context"
function MainBody() {
  const { isLoggedIn, login, logout } = useData()
  return (
    <main>
      <h1>Welcome to this website</h1>
      {isLoggedIn ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </main>
  )
}

export default MainBody
