import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Browse } from "./Pages/Browse";
import { Profiles } from "./Pages/Profiles";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Browse /> } />
        <Route path="/profile" element={ <Profiles /> } />
      </Routes>
    </BrowserRouter>
  )
}
