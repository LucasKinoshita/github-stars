import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./pages/List";
import { Search } from "./pages/Search";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/explorer-repositories/:username" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};
