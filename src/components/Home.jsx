
import { Link } from "react-router-dom";
import { getAllNotes } from "../api/fetch";
import ErrorMessage from "./errors/ErrorMessage";
import { useEffect, useState } from "react";
import NoteListing from "./Notes/NoteListing";

import "./Notes/NoteIndex.css";


export default function Home() {
  const [loadingError, setLoadingError] = useState(false);
  const [notes, setNotes] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterNotes(title, allNotes) : allNotes;
  
    setSearchTitle(title);
    setNotes(result);
  }

  function filterNotes(search, notes) {
    return notes.filter((note) => {
      return note.title.toLowerCase().match(search.toLowerCase());
    });
  }

  useEffect(() => {
    getAllNotes()
      .then((response) => {
        setAllNotes(response);
        setNotes(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, []);

  console.log(notes);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="notes-index-wrapper">
          <h2>All Notes</h2>
          <button>
            <Link to="/notes/new">Add a new note</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Notes:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="notes-index">
            {notes.map((note) => {
              return <NoteListing note={note} key={note.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}
