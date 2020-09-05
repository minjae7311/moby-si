/** @format */

import * as React from "react";

const style: React.CSSProperties = {
  width: "98%",
  border: "solid 1px #ccc",
  margin: "1%",
  borderRadius: "4px",
  display: 'flow-root',
};

const Main: React.SFC = () => {
  return (
    <div style={style}>
      <ul>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
        <li>DATA</li>
      </ul>
      <div>
        <form>
          <input
            type="text"
            className="search_input"
            name="search"
            placeholder="검색어를 입력해주세요."
          />
          <input type="submit" value="검색" className="serach_submit" />
        </form>
      </div>
    </div>
  );
};

export default Main;