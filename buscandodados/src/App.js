import Characters from "./components/Characters";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [characterList,setCharacterList] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return response.json();
      })
      .then((response) => setCharacterList(response.results))
      .catch((error) => console.log("Error"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Characters chars={characterList}></Characters>
      </header>
    </div>
  );
}

export default App;
