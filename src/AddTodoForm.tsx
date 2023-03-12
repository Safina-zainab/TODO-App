import React, { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/feather/plus";
import { edit2 } from "react-icons-kit/feather/edit2";
import { trash } from "react-icons-kit/feather/trash";

const getTodo = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(getTodo());
  const submitTodo = (e: any) => {
    e.preventDefault();
    // create ID for each Todo
    const date = new Date();
    const time = date.getTime();

    // create object for TODO
    let todoObject = {
      ID: time,
      todoValue: todo,
      completed: false,
    };
    setTodos([...todos, todoObject]);
    setTodo("");
  };
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete=(id : any)=>{
    // console.log(id);
    const filtered = todos.filter((todo :any)=>{
      return todo.ID !== id;
    })
    setTodos(filtered);
  }

  return (
    <div className="form">
      <form autoComplete="off" onSubmit={submitTodo}>
        <div className="input-and-button">
          <input
            type="text"
            placeholder="Add an Item"
            required
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <div className="button">
            <button type="submit">
              <Icon icon={plus} size={20} />
            </button>
          </div>
        </div>
      </form>
      {todos.length > 0 && (
        <>
          {todos.map((individualTodo: any, index: any) => (
            <div className="todo" key={individualTodo.ID}>
              {/* checkbox and value div   */}
              <div>
                <input type="checkbox" />
                <span>{individualTodo.todoValue}</span>
              </div>

              {/* edit and delete icon div */}
              <div className="edit-and-delete">
                {/* <div style={{ marginRight: 7 + "px" }}>
                  <Icon icon={edit2} size={18} />
                </div> */}
                <div onClick={()=>handleDelete(individualTodo.ID)}>
                  <Icon icon={trash} size={18} />
                </div>
              </div>
            </div>
          ))}
           <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <button 
                    onClick={()=>setTodos([])}
                    className='delete-all'>DELETE ALL</button>
                  </div>
        </>
      )}
    </div>
  );
}
