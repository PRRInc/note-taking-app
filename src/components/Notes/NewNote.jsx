import "./NewNote.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../../api/fetch";

export default function NewNote(){

        const [note, setNote] = useState({
            category: "",
            title: "",
            dateAdded: "",
            description: "",
            tags: "",
            priority: "",
          });
        
          let navigate = useNavigate();
        
          function handleTextChange(event) {
            setNote({
              ...note,
              [event.target.id]: event.target.value,
            });
          }
        
          function handleSubmit(event) {
            event.preventDefault();
            const date = new Date();
            let hours = date.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert hour to 12-hour format
            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} ${hours}:${date.getMinutes()}:${date.getSeconds()} ${ampm}`;
            createNote({
              ...note,
              dateAdded: formattedDate,
            })
              .then((response) => {
                console.log(response,"here")
                navigate(`/notes/${response.id}`);
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
    )
}
