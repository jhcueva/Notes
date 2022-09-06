import { Route, Routes, BrowserRouter} from "react-router-dom"
import { Header } from "./components/Header"
import { NotesList } from "./pages/NotesList"
import { NotePage } from "./pages/NotePage"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/note/:id" element={ <NotePage/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
