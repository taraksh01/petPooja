import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="m-5">
      <h1 className="text-5xl leading-normal">Oops!!!</h1>
      <p className="text-2xl leading-tight">Something went wrong</p>
      <p className="text-xl leading-tight">Please check your internet or try again later</p>

      <h2 className="text-3xl font-medium my-3 leading-normal">{error.status} {error.statusText}</h2>
    </div>
  );
};
export default Error;
