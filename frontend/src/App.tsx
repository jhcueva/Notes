import { Route, Routes, BrowserRouter} from "react-router-dom"
import { Header } from "./components/Header"
import { NotesList } from "./pages/NotesList"
import { NotePage } from "./pages/NotePage"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/note/:id" element={ <NotePage/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/register" element={ <Register/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
