import { actionsObj } from "../actions";
import { DebounceInput } from "react-debounce-input";
export default function Input({ value, setValue, dispatch, edit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit && value !== "") {
      dispatch({
        type: actionsObj.ADDLIST,
        payload: { text: value }
      });
      setValue("");
    } else {
      dispatch({
        type: actionsObj.EDITLIST,
        payload: { id: edit.id, text: value }
      });
      setValue("");
    }
  };

  return (
    <div>
      <div className="new-task">
        <form onSubmit={handleSubmit}>
          <DebounceInput
            debounceTimeout={1000}
            value={value}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
