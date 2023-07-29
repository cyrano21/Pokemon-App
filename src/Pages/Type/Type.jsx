import "../Type/type.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Type() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("error>>>", error.message);
      }
    };

    fetchData();
  }, [type]);

  return isLoading ? (
    <div>Chargement</div>
  ) : (
    <div>
      <h1 className="title">Type : {data.name}</h1>
      <div className="main-div">
        {data.pokemon.map((pokemon, index) => {
          // console.log(pokemon.pokemon.url.split("/")[6]);
          const url = pokemon.pokemon.url.split("/")[6];
          return (
            <Link
              key={pokemon.pokemon.name}
              to={`/pokemon/${pokemon.pokemon.name}`}
            >
              <div className="link-card">
                <div> {pokemon.pokemon.name}</div>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${url}.png`}
                  alt={pokemon.pokemon.name}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
