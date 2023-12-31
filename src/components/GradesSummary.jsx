/* eslint-disable react/prop-types */
import { Colors } from "./subs/Colors";

import { Data } from "../assets/data";

export const GradesSummary = () => {
  return (
    <>
      {Data.map((result, i) => {
        const { category, score, icon } = result;
        return (
          <div
            className="categories-ctn"
            key={i}
            style={{ backgroundColor: Colors[i].bgColor }}
          >
            <div className="category">
              <img src={icon} alt={category} />
              <p style={{ color: Colors[i].color }}>{category}</p>
            </div>
            <div className="category-grade">
              <p>
                <span className="grade">{score}</span> / 100
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
