import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="leading-normal bg-theme-main">
      <Outlet />
    </main>
  );
}

export default Layout;
