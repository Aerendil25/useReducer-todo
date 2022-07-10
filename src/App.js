import "./styles.css";
import Todo from "./components/Todo";
import Input from "./components/Input";
import { useState, useReducer } from "react";
import { reducer } from "./reducer";

export default function App() {
  const [list, dispatch] = useReducer(reducer, []);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState("");
  console.log(list);

  return (
    <div className="container">
      <h1>useReducer</h1>
      <Input
        value={value}
        setValue={setValue}
        dispatch={dispatch}
        list={list}
        edit={edit}
        setEdit={setEdit}
      />
      <Todo
        value={value}
        setValue={setValue}
        dispatch={dispatch}
        list={list}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
}
