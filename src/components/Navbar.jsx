import { useState } from "react";

function Navbar({ handleSetData }) {
  const [id, setId] = useState("");

  const handleSearch = async () => {
    if (id.trim() === "") {
      return;
    }

    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await res.json();
    console.log(data);
    handleSetData(data);
  };

  return (
    <nav className="navbar">
      <span className="navbar-title">Assignment</span>
      <span className="navbar-input">
        <input
          type="text"
          placeholder="Search by Id number ..."
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>{" "}
      </span>
      <span>
        <a className="navbar-link" href="https://github.com/Dhananjay-12">
          Github
        </a>
      </span>
    </nav>
  );
}

export default Navbar;
