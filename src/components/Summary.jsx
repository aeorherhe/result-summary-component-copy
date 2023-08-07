import { Colors } from "./subs/Colors";

const dataPath = "../src/assets/data.json";

const FetchData = async () => {
  const resp = await fetch(dataPath);
  const data = await resp.json();
  return data;
};

const SummaryData = await FetchData();

export const Summary = () => {
  return (
    <section className="summary-stn">
      <h2>Summary</h2>
      <GradesSummary />
      <button className="btn">Continue</button>
    </section>
  );
};

const GradesSummary = () => {
  return (
    <>
      {SummaryData.map((summary, i) => {
        const { category, score, icon } = summary;
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
