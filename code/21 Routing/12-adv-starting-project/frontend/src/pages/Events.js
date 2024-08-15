import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {

  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;

  return (
    <>
    <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader(){
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return {isError: true, message: 'Something went wrong!'};
    throw {message: 'Something went wrong!'};
    //...
  } else {
    // const resData = await response.json();
    // // const res = new Response('any data', {state: 20});
    // return resData.events;
    return response;
  }
}
