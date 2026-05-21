import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
import { RouteError } from "./uiInt";

function Error() {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Something went wrong 😢</h1>

      <p>
        {error.data || error.message || error.statusText || "Unknown error"}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
