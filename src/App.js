import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="Jethro" heroName="destroyerOfWorlds">
        <p> Jethro's children! </p>
      </Greet>
      <Welcome name="Jethro" heroName="yo mama!">
        {" "}
      </Welcome>
    </div>
  );
}

export default App;
