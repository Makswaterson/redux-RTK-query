import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          onChange={(e) => dispatch(setFilter(e.target.value))}
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
    </div>
  );
};
