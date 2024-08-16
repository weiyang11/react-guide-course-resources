// import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

function NewEventsPage(){

  return (
    <div>
      <EventForm method='post'/>
    </div>
  );
}

export default NewEventsPage;
