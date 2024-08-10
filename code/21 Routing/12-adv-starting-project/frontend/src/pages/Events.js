import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
  },
];

function EventsPage(){
  return (
    <>
      <h1>Event Page</h1>

      <ul>
        {DUMMY_EVENTS.map(event => <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>)}
      </ul>
    </>
  );
}

export default EventsPage;
