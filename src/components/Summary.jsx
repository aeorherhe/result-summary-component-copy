/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { Colors } from "./subs/Colors";
const dataPath = "../src/assets/data.json";

export const Summary = () => {
  const [results, setResults] = useState([]);

  const FetchData = async () => {
    const resp = await fetch(dataPath);
    const data = await resp.json();
    setResults(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <section className="summary-stn">
      <h2>Summary</h2>
      <GradesSummary results={results} />
      <button className="btn">Continue</button>
    </section>
  );
};

const GradesSummary = ({ results }) => {
  return (
    <>
      {results.map((result, i) => {
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
