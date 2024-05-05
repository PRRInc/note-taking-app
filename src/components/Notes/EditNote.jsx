import { useEffect, useState } from "react";
import "./NotesForm.css";
import { updateNote, getOneNote } from "../../api/fetch";
import { useNavigate, useParams } from "react-router-dom";

export default function EditNote() {
  const [note, setNote] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  let navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneNote(id)
      .then((response) => {
        setNote(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function handleTextChange(event) {
    setNote({
      ...note,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    updateNote(id, note)
      .then(() => {
        navigate(`/notes/${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={note.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={note.description}
        onChange={handleTextChange}
      />

      {/* <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={note.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={note.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={note.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={note.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={note.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={note.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={note.dateAdded}
        onChange={handleTextChange}
      /> */}

      <br />

      <input type="submit" />
    </form>
  );
}