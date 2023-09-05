import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  return (
    <>
      <h1>Hey I am from HomeLayout. Whassup?</h1>
      <Outlet />
    </>
  );
};

export default HomeLayout;
