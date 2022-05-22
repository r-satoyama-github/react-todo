import "./styles.css";
import React from "react";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incompleate-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li className="list-row">
            <p>AAAA</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="list-row">
            <p>BBBB</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="compleate-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li className="list-row">
            <p>CCCC</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
