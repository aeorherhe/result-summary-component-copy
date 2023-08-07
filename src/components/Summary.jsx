/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { GradesSummary } from "./GradesSummary";
<<<<<<< HEAD
const dataPath = ".././src/assets/data.json";
=======
const dataPath = "../assets/data.json";
>>>>>>> 1b8a901 (path)

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
