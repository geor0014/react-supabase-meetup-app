import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
