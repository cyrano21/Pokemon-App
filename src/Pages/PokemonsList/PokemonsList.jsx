import "../PokemonsList/pokemonsList.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonsList() {
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response.data);
        setList(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h1 className="title">Pokemons</h1>

      <div className="main-div">
        {list.map((pokemon, index) => {
          // console.log(pokemon);
          // console.log(pokemon.url);
          // console.log(pokemon.url.split("/")[6]);
          const url = pokemon.url.split("/")[6];
          return (
            <Link to={`/pokemon/${pokemon.name}`} key={index}>
              <div className="link-card">
                <div>{pokemon.name}</div>

                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
