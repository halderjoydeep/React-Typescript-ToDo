import { useState } from "react";
import React from "react";
import Todo from "../models/todo";

type createContextType = {
  items: Todo[];
  addTodo: (item: Todo) => void;
  deleteTodo: (item: Todo) => void;
};

const TodoContext = React.createContext<createContextType>({
  items: [],
  addTodo: (item) => {},
  deleteTodo: (item) => {},
});

type propsType = {
  children: React.ReactNode;
};

export const TodoContextProvider = (props: propsType) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function onAddTodoHandler(newTodo: Todo) {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }

  function onDeleteTodoHandler(item: Todo) {
    setTodos((prev) => {
      const updatedTodos = [...prev].filter((todo) => todo !== item);
      return updatedTodos;
    });
  }

  const contextValue = {
    items: todos,
    addTodo: onAddTodoHandler,
    deleteTodo: onDeleteTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
