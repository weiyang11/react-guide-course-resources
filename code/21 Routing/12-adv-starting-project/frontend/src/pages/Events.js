import { json, useLoaderData,defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {

  const {events} = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;

  // return (
  //   <>
  //   <EventsList events={events} />
  //   </>
  // );
  return(
  <Suspense fallback={<p style={{textAlign: 'center'}}>Loading</p>}>
    <Await resolve={events}>
      {(loadedEvents)=> <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>)
}

export default EventsPage;

async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    // return {isError: true, message: 'Something went wrong!'};
    // throw new Response(JSON.stringify({message: 'Something went wrong!'}), {status: 500});
    //...
    throw json({message: 'Something went wrong!'}, {status: 500});
  } else {
    // const resData = await response.json();
    // // const res = new Response('any data', {state: 20});
    // return resData.events;
    const resData= await response.json();
    return resData.events;
  }
}

export function loader(){
  return defer({
    events: loadEvents()
  })
}
