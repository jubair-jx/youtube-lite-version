import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tagRemoved,
  tagSeleted,
} from "../../../features/filterSlice/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);
  const isSeletected = selectedTags.includes(title) ? true : false;
  const handleSelected = () => {
    if (isSeletected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSeleted(title));
    }
  };
  const style = isSeletected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <>
      <div onClick={handleSelected} className={style}>
        {title}
      </div>
    </>
  );
};

export default Tag;
