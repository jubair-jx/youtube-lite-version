import React, { useState } from "react";
import navSeacrh from "../../../assets/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../../features/filterSlice/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
      <form onSubmit={handleSubmit}>
        <input
          class="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <img class="inline h-4 cursor-pointer" src={navSeacrh} alt="Search" />
      </form>
    </div>
  );
};

export default Search;
