import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
// import Todoitem from "./Todoitem";

export default function App() {
  return (
    <div className="wrapper">
      <h2>TODO APP USING LOCALSTORAGE</h2>
      <div className="form-and-todo-box">
        <AddTodoForm />
      </div>
    </div>
  );
}
