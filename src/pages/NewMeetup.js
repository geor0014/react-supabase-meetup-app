import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  // Supabase request
  const addMeetupHandler = async (meetupData) => {};

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
