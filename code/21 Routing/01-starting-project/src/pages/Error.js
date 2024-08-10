import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Something went wrong!</h1>
        <p>
          This page does not exist. Please go back to the
        </p>
      </main>
    </>
  )
}

export default ErrorPage;
