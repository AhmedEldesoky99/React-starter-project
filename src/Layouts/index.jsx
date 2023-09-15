import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="custom-container">
      <Outlet />
    </div>
  );
};
