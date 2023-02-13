import React, { useRef, useContext } from "react";
import Todo from "../models/todo";
import TodoContext from "../store/todo-context";

import classes from "./NewTodo.module.css";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoCtx = useContext(TodoContext);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim() === "") {
      return;
    }
    const newTodo = new Todo(enteredText);
    todoCtx.addTodo(newTodo);

    inputRef.current!.value = "";
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Add Todo</label>
      <input type="text" id="text" ref={inputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
