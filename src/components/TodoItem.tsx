import { useContext } from "react";
import Todo from "../models/todo";
import TodoContext from "../store/todo-context";
import classes from "./TodoItem.module.css";

type propsType = {
  item: Todo;
};

const TodoItem = (props: propsType) => {
  const todoCtx = useContext(TodoContext);
  function clickHandler() {
    todoCtx.deleteTodo(props.item);
  }
  return (
    <li className={classes.item} onClick={clickHandler}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
