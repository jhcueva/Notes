import { Route, Routes, BrowserRouter} from "react-router-dom"
import { Header } from "./components/Header"
import { NotesList } from "./pages/NotesList"
import { NotePage } from "./pages/NotePage"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={ <NotesList /> }/>
          <Route path="/note/:id" element={ <NotePage/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
