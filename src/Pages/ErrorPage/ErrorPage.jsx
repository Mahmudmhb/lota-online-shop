import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-5/6 mx-auto flex items-center text-center h-screen justify-center">
      <div>
        <h1>Page not found</h1>
        <Link to="/" className="btn my-5 btn-secondary">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
