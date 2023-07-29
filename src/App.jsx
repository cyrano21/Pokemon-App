import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Pokemon from "./Pages/Pokemon/Pokemon";
import PokemonsList from "./Pages/PokemonsList/PokemonsList";
import PokemonsTypes from "./Pages/PokemonsTypes/PokemonsTypes";
import Type from "./Pages/Type/Type";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemons" element={<PokemonsList />} />
            <Route path="/types" element={<PokemonsTypes />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/type/:type" element={<Type />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
