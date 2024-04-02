import React from 'react'
import { useRouteError } from "react-router-dom";

type ErrorMessage = { statusText: string, message: string }

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as ErrorMessage).statusText || (error as ErrorMessage).message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;