import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Title</label>
          <input type="url" required id="image"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Title</label>
          <input type="text" required id="address"></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Title</label>
          <textarea type="text" required rows="5" id="description"></textarea>
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
