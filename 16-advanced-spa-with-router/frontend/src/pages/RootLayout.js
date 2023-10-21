import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";
import { useEffect } from "react";

export const RootLayout = () => {
  const navigation = useNavigation();
  const state = navigation.state // "idle" | "loading" | "submitting"
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if(token) {
      setTimeout(() => {
        submit(null, {action: "/logout", method: "post"});
      }, 1 * 60 * 60 * 1000); //1 hour in milliseconds
    }
  }, [token, submit])
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
