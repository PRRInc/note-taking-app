import "./NewNote.css"

export default function NewNote(){

        // const [note, setNote] = useState({
        //     category: "",
        //     title: "",
        //     country: "",
        //     dateAdded: "",
        //     description: "",
        //     tags: "",
        //     priority: "",
        //   });
        
        //   let navigate = useNavigate();
        
        //   function handleTextChange(event) {
        //     setNote({
        //       ...show,
        //       [event.target.id]: event.target.value,
        //     });
        //   }
        
        //   function handleSubmit(event) {
        //     event.preventDefault();
        //     createNote(note)
        //       .then((response) => {
        //         navigate(`/shows/${response.id}`);
        //       })
        //       .catch((error) => {
        //         console.error(error);
        //       });
        //   }
        
          return (
            <form >
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                // value={show.title}
                // onChange={handleTextChange}
              />
        
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                // value={show.description}
                // onChange={handleTextChange}
              />
        
              <label htmlFor="type">Catergory:</label>
              <input
                type="text"
                id="type"
                // value={show.type}
                // onChange={handleTextChange}
              />
        
              <label htmlFor="rating">Tags:</label>
              <input
                type="text"
                id="rating"
                // value={show.rating}
                // onChange={handleTextChange}
              />
        
              <label htmlFor="listedIn">Priority:</label>
              <input
                type="text"
                id="listedIn"
                // value={show.listedIn}
                // onChange={handleTextChange}
              />
              <label htmlFor="dateAdded">Date added:</label>
              <input
                type="text"
                id="dateAdded"
                // value={show.dateAdded}
                // onChange={handleTextChange}
              />
        
              <br />
        
              <input type="submit" />
            </form>
    )
}
