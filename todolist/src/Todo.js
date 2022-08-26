import React, { useState } from "react";

export default function TodosComponent() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todo: "bake a cake",
      isCompleted: true
    },
    {
      todo: "go for a walk",
      isCompleted: false
    },
    {
      todo: "contribute a web development tutorial on Enlight",
      isCompleted: false
    }
  ]);

  function createNewTodo(currentTodo) {
    setTodos((prevtodos) => [
      ...prevtodos,
      {
        todo: currentTodo,
        isCompleted: false
      }
    ]);
  }

  function completeTodo(index) {
    const todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }
  //Down in is work like push to state the input, aswell push to array when u hit enter.
  return (
    <div>
      <input
        className="todo-input"
        value={currentTodo}
        onChange={(e) => {
          setCurrentTodo(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            createNewTodo(currentTodo);
            setCurrentTodo("");
          }
        }}
        placeholder="Type here..."
      />

      {todos.map((item, index) => (
        <div className="todo">
          <div className="checkbox" onClick={() => completeTodo(index)}>
            {item.isCompleted && <div>&#x2714;</div>}
          </div>
          <div className={item.isCompleted ? "done" : ""}>{item.todo}</div>
        </div>
      ))}
      {todos.length > 0 && `${todos.length} items`}
    </div>
  );
}
