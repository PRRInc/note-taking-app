import {Link} from 'react-router-dom'
import "./NoteListing.css";

export default function NoteListing({ note }) {
  return (
    <article className="note">
      <h3 className="title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h3>
      <p className="description">{note.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {note.catogery}
        </p>
        <p>
          <span>Date Added:</span> {note.dateAdded}
        </p>
      </aside>
    </article>
  );
}
