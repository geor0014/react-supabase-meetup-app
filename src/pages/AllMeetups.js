import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  // create a new client
  const supabaseUrl = "https://itfqisbmsktbfvumjmdw.supabase.co";
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    setIsLoading(true);
    // get data from supabase
    const fetchMeetups = async () => {
      try {
        const { data, error } = await supabase.from("meetups").select();
        if (error) {
          throw error;
        }
        setLoadedMeetups(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
