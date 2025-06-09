import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../css/style.css";

const DiamondSearch = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [query, setQuery] = useState({ cut: "", color: "", shape: "" });

  const handleChange = e => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSearch = async () => {
    const params = new URLSearchParams(query);
    const res = await axios.get(`http://localhost:5000/api/diamond/search?${params}`);
    console.log(res.data)
    setDiamonds(res.data);
  };

  const handleClick = async (diamondId) => {
    await axios.post("http://localhost:5000/api/diamond/click", { diamondId });
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <input name="cut" placeholder="Cut" value={query.cut} onChange={handleChange} />
        <input name="color" placeholder="Color" value={query.color} onChange={handleChange} />
        <input name="shape" placeholder="Shape" value={query.shape} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul className="grid grid-cols-2 gap-4">
        {diamonds.map(diamond => (
          <li key={diamond._id} className="border p-4 shadow">
            <p><b>Shape:</b> {diamond.shape}</p>
            <p><b>Cut:</b> {diamond.cut}</p>
            <p><b>Color:</b> {diamond.color}</p>
            <p><b>Carat:</b> {diamond.carat}</p>
            <p><b>Price:</b> ${diamond.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-2 py-1" onClick={() => handleClick(diamond._id)}>
              Click to Track
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiamondSearch;
