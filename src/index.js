import { render } from "react-dom";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);