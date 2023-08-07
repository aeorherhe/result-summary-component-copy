/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { GradesSummary } from "./GradesSummary";

export const Summary = () => {
  // const [results, setResults] = useState([]);

  // const FetchData = async () => {
  //   const resp = await fetch(dataPath);
  //   const data = await resp.json();
  //   setResults(data);
  // };

  // useEffect(() => {
  //   FetchData();
  // }, []);

  return (
    <section className="summary-stn">
      <h2>Summary</h2>
      <GradesSummary />
      <button className="btn">Continue</button>
    </section>
  );
};
