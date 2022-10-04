import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { createClient } from "@supabase/supabase-js";
import { useHistory } from "react-router-dom";

function NewMeetup() {
  // history is a React hook that allows us to redirect the user to a different page
  const history = useHistory();
  // create a new client
  const supabaseUrl = "https://itfqisbmsktbfvumjmdw.supabase.co";
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Supabase request
  const addMeetupHandler = async (meetupData) => {
    try {
      // insert the meetup data into the meetups table
      const { data, error } = await supabase.from("meetups").insert(meetupData);
      console.log("data", data);
      // redirect the user to the AllMeetups page
      history.replace("/");
      if (error) {
        throw error;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
