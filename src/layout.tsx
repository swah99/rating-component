import { NavLink, Outlet } from "react-router-dom";
function RouterLayout() {
  return (
    <>
      <NavLink to="/" />
      <NavLink to="/thank-you" />
      <Outlet />
    </>
  );
}
export default RouterLayout;
