import { actionsObj } from "./actions";
import { nanoid } from "nanoid";

export const reducer = (list, action) => {
  switch (action.type) {
    case actionsObj.ADDLIST:
      return [
        ...list,
        { id: nanoid(), text: action.payload.text, completed: false }
      ];
    case actionsObj.COMPLETEDLIST:
      return list.map((m) =>
        m.id === action.payload.id ? { ...m, completed: !m.completed } : m
      );
    case actionsObj.DELETEDLIST:
      return list.filter((m) => m.id !== action.payload.id);
    case actionsObj.EDITLIST:
      return list.map((m) =>
        m.id === action.payload.id ? { ...m, text: action.payload.text } : m
      );
    default:
      return list;
  }
};
