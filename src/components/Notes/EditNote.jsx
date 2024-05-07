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
        
              <label htmlFor="category">Catergory:</label>
              <input
                type="text"
                id="category"
                value={note.category}
                onChange={handleTextChange}
              />
        
              <label htmlFor="tags">Tags:</label>
              <input
                type="text"
                id="tags"
                value={note.tags}
                onChange={handleTextChange}
              />
        
              <label htmlFor="priority">Priority:</label>
              <input
                type="text"
                id="priority"
                value={note.priority}
                onChange={handleTextChange}
              />
              <label htmlFor="dateAdded">Date added:</label>
              <input
                type="text"
                id="dateAdded"
                value={note.dateAdded}
                onChange={handleTextChange}
              />

      <br />

      <input type="submit" />
    </form>
  );
}