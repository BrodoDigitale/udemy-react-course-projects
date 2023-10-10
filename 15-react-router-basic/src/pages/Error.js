import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
        <h1>An error occured!</h1>
        <p>This page does not exist</p>
      </main>
    </>
  );
};
