import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import GamePage from "./GamePage";
import Home from "./HomePage";
import LoginPage from "./LoginPage";
import MenuPage from "./MenuPage";
import Support from "./SupportPage";

 function MyRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}>
          <Route index element={<Home />} />
          <Route path="game" element={<GamePage />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function RouterTestMain2() {
  return <MyRoute></MyRoute> ;
}

export default RouterTestMain2;
