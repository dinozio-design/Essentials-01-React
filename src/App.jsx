import Header from "./components/Header";
import CoreCocepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";



function App() {

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <CoreCocepts/>
        <Examples/>
      </main>
    </div>
  );
}

export default App;
