import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = 'Error occured';
  let message = 'Sorry, an error occured!';

  if (error.status === 500){
    message = error.data.message;
  }

  if (error.status === 404){
    title = 'Not Found';
    message = 'The page you are looking for does not exist!';
  }

  return (
    <>
    <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
