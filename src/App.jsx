import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [inCompleteTodos, setIncCompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setIncCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);
    setIncCompleteTodos(newTodos);
  };

  const onClickCompleate = (index) => {
    const newInCompleteTodos = [...inCompleteTodos];
    newInCompleteTodos.splice(index, 1);
    setIncCompleteTodos(newInCompleteTodos);

    const newTodos = [...completeTodos, inCompleteTodos[index]];
    setCompleteTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newTodos = [...inCompleteTodos, completeTodos[index]];
    setIncCompleteTodos(newTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incompleate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickCompleate(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="compleate-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
