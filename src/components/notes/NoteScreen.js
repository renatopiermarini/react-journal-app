import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../actions/notes";

import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content  nimate__animated animate__fadeIn animate__faster">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          name="body"
          placeholder="'What happened today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              src="https://img.freepik.com/vector-gratis/escena-naturaleza-rio-colinas-bosque-montana-ilustracion-estilo-dibujos-animados-planos-paisaje_1150-37326.jpg?size=626&ext=jpg&ga=GA1.2.1352958084.1641772800"
              alt="imagen"
            />
          </div>
        )}
      </div>
      <button className="btn btn-danger" onClick={handleDelete}>
        delete note
      </button>
    </div>
  );
};
