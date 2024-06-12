import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/primary/Footer/Footer";
import Header from "./components/primary/Header/Header";
import CarPage from "./pages/CarsPage/CarPage";
import "./styles/global.scss";
import AnimalsPage from "./pages/AnimalsPage/AnimalsPage";
import CelebrityPage from "./pages/CelebrityPage/CelebrityPage";

export default function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />

        <Routes>
          <Route path="/test" element={<h1>test page</h1>} />
          <Route path="/user" element={<h1>User page</h1>} />
          <Route path="/animals" element={<AnimalsPage/>} />
          <Route path="/home" element={<h1>home page</h1>} />
          <Route path="/about" element={<h1>about page</h1>} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/celebrity" element={<CelebrityPage />} />


        </Routes>

        
      </main>
    </BrowserRouter>
  );
}
