import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage/>} />
         {/* <Route path ="/page/:userId" element = {<ProjectPage/>}/>
          <Route path ="/public/:userId" element = {<PublicPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
