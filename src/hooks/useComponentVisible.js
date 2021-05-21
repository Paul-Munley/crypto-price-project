import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/search-slice";

export default function useComponentVisible() {
  const dispatch = useDispatch();
  // const [isComponentVisible, setIsComponentVisible] =
  //   useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.className !== "input"
    ) {
      dispatch(searchActions.toggleSearch());
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref };
}
