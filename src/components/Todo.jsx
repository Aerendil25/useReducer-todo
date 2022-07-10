import { useEffect } from "react";
import { actionsObj } from "../actions";
export default function Todo({
  list,
  dispatch,
  edit,
  setEdit,
  setValue,
  value
}) {
  const handleCompleted = (id) => {
    dispatch({
      type: actionsObj.COMPLETEDLIST,
      payload: { id }
    });
  };

  const handleEdit = (id) => {
    setEdit(list.find((m) => m.id === id));
    if (edit) {
      dispatch({
        type: actionsObj.EDITLIST,
        payload: { id, text: value }
      });
    }
  };
  useEffect(() => {
    if (edit) setValue(edit.text);
    else setValue("");
  }, [edit, setValue]);

  const handleRemove = (id) => {
    dispatch({
      type: actionsObj.DELETEDLIST,
      payload: { id }
    });
  };
  return (
    <div className="content">
      <ul>
        {list.map((m) => (
          <li key={m.id}>
            <span style={{ textDecoration: m.completed && "line-through" }}>
              {m.text}
            </span>
            <button onClick={() => handleCompleted(m.id)}>
              <i class="fa-solid fa-circle-check" />
            </button>
            <button onClick={() => handleEdit(m.id)}>
              <i className="fa-solid fa-pencil" />
            </button>
            <button onClick={() => handleRemove(m.id)}>
              <i className="fa-solid fa-circle-xmark" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
