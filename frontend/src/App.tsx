import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'

import { Header } from "./components/Header"
import { NotesList } from "./pages/NotesList"
import { NotePage } from "./pages/NotePage"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"

import { authenticationReducer } from './reducers/authentication'

const store = createStore(
    authenticationReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
