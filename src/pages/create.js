import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "cover":
        setCover(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;

      default:
    }
  };

  const handleOnChangeFile = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            Title
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
        </div>
        <div>
          <div>
            Author
            <input
              type="text"
              name="author"
              onChange={handleChange}
              value={author}
            />
          </div>
        </div>
        <div>
          <div>
            Cover
            <input type="file" name="cover" onChange={handleOnChangeFile} />
            <div></div>
          </div>
          <div>
            <div>
              Introduction
              <input
                type="text"
                name="intro"
                onChange={handleChange}
                value={intro}
              />
            </div>
            <div>
              Completed
              <input
                type="checkbox"
                name="completed"
                onChange={handleChange}
                value={completed}
              />
            </div>
            <div>
              Review
              <input
                type="text"
                name="review"
                onChange={handleChange}
                value={review}
              />
            </div>
          </div>
        </div>
        <input type="submit" value="Register book" />
      </form>
    </div>
  );
};

export default Create;
