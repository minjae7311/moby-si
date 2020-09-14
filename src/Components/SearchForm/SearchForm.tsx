import * as React from "react";
// import "../../main.css";

const Search: React.FC = () => {
	return (
		<div style={{ marginLeft: "40%", marginBottom: "1%", width: "1500px" }}>
			<form>
				<input type="text" className="search_input" name="search" placeholder="검색어를 입력해주세요." />
				<input type="submit" value="검색" className="serach_submit" />
			</form>
		</div>
	);
};

export default Search;
