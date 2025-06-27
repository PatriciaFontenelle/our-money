import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="bg-light-gray h-[100dvh] p-8">
      <Outlet />
    </div>
  );
};

export default Layout;
