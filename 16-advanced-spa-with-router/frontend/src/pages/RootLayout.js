import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

export const RootLayout = () => {
  const navigation = useNavigation();
  const state = navigation.state; // "idle" | "loading" | "submitting"
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token || token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration); 
  }, [token, submit]);
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
