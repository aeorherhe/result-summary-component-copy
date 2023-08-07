import { Results } from "./components/Results";
import { Summary } from "./components/Summary";
import { MyProfile } from "./components/subs/MyProfile";

// app
function App() {
  return (
    <main className="main">
      <Results />
      <Summary />
      <MyProfile />
    </main>
  );
}

export default App;
