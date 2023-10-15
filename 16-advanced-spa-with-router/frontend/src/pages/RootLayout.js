import { Outlet, useNavigation } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export const RootLayout = () => {
  const navigation = useNavigation();
  const state = navigation.state // "idle" | "loading" | "submitting"
  return (
    <>
      <MainNavigation />
      <main>
        {state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};
