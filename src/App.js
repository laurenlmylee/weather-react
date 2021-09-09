import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to your weather app🔮</h1>
        <Weather city="Tokyo" />
      </header>
    </div>
  );
}

export default App;
