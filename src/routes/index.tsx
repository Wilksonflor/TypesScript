import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { DashBoard } from "../pages";

export const RoutesService = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={DashBoard} />

        <Route path="*" Component={() => <Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
