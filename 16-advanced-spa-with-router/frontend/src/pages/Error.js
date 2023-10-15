import React from "react";
import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <PageContent title={"Oh no!"}>
        <p>
          An error {error.status} occured: {error.message}
        </p>
      </PageContent>
    </>
  );
};
