// import { useState } from "react";

import { Results } from "./components/Results";
import { Summary } from "./components/Summary";

function App() {
  // const [results, setResults] = useState(0);

  return (
    <main className="main">
      <Results />
      <Summary />
    </main>
  );
}

export default App;
