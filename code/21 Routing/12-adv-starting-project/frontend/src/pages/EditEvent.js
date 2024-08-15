import {useRouteLoaderData} from 'react-router-dom';
import EventForm from '../components/EventForm';

function EditEventPage(){
  const data = useRouteLoaderData('event-detail');

  return (
    <div>
      <EventForm  event= {data.event}/>
    </div>
  );
}

export default EditEventPage;
