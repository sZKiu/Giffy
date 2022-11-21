import Gifs from "./components/Gifs";
import "./App.css";
import { Link } from "wouter"

function App() {
  return (
    <div>
      <h1><Link className="h1" to={"/"} >Giffy</Link></h1>
      <Gifs></Gifs>
    </div>
  );
}

export default App;
