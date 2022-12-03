import React from "react";
import styles from "./styles.module.css";

export function CatagoryList({ catagories = [], onClick, activeCatagory }) {
  return (
    <div className={styles.photoCatagoryList}>
      {catagories.map((catagory, index) => {
        const currCat = catagory.toLowerCase();
        return (
          <button
            key={`catagory-btn-${index}`}
            onClick={() => onClick(catagory)}
            className={currCat === activeCatagory ? styles.active : null}
          >
            {catagory}
          </button>
        );
      })}
    </div>
  );
}
