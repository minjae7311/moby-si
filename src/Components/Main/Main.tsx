/** @format */

import * as React from "react";



const Main: React.SFC = () => {
  return (
    <div>
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
