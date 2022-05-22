import "./styles.css";
import React, { useState } from "react";

export const App = () => {
  const [inCompleateTodos, setIncCompleateTodos] = useState([]);
  const [compleateTodos, setCompleateTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleateTodos, todoText];
    setIncCompleateTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...inCompleateTodos];
    newTodos.splice(index, 1);
    setIncCompleateTodos(newTodos);
  };

  const onClickCompleate = (index) => {
    const newInCompleateTodos = [...inCompleateTodos];
    newInCompleateTodos.splice(index, 1);
    setIncCompleateTodos(newInCompleateTodos);

    const newTodos = [...compleateTodos, inCompleateTodos[index]];
    setCompleateTodos(newTodos);
  };

  const onClickBack = (index) => {
    const newCompleateTodos = [...compleateTodos];
    newCompleateTodos.splice(index, 1);
    setCompleateTodos(newCompleateTodos);

    const newTodos = [...inCompleateTodos, compleateTodos[index]];
    setIncCompleateTodos(newTodos);
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
          {inCompleateTodos.map((todo, index) => {
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
          {compleateTodos.map((todo, index) => {
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
