// Notes
const URL = import.meta.env.VITE_APP_API_BASE_URL;

// Create
export function createNote(note) {
  const options = {
    method: "POST",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/notes/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyNote(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/notes/${id}`, options);
}

// Index/Get all
export function getAllNotes() {
  return fetch(`${URL}/notes`).then((response) => response.json());
}

// Note/Get one
export function getOneNote(id) {
  return fetch(`${URL}/notes/${id}`).then((response) => response.json());
}

// Update
export function updateNote(id, note) {
  const options = {
    method: "PUT",
    body: JSON.stringify(note),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/notes/${id}`, options).then((response) => {
    return response.json();
  });
}