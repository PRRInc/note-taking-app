import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { destroyNote, getOneNote } from "../../api/fetch";

import "./Note.css";

import ErrorMessage from "../errors/ErrorMessage.jsx";

function Note() {
  const [note, setNote] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();

  let navigate = useNavigate();

  function handleDelete() {
    destroyNote(id)
      .then(() => navigate("/notes"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  useEffect(() => {
    getOneNote(id)
      .then((response) => {
        setNote(response);
        if (Object.keys(response).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);



  return (
    <section className="notes-note-wrapper">
      <h2>{note.title}</h2>
      <section className="notes-note">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Priority:</span> {note.priority}
              </p>
              <p>
                <span>Category:</span> {note.category}
              </p>
              <p>
                <span>Tags:</span> {note.tags}
              </p>
              <p>
                <span>Date Added:</span> {note.dateAdded}
              </p>
            </aside>
            <article>
              <p>{note.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(note.id)}>
                Remove note
              </button>
              <Link to={`/notes/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Note;
