// import { useState } from "react";

import { Results } from "./components/Results";
import { Summary } from "./components/Summary";

import { MyProfile } from "./components/subs/MyProfile";

function App() {
  // const [results, setResults] = useState(0);

  return (
    <main className="main">
      <Results />
      <Summary />
      <MyProfile />
    </main>
  );
}

export default App;
