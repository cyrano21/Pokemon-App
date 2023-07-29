import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../PokemonsTypes/pokmonsTypes.css";

export default function PokemonsTypes() {
  const [pokemonType, setPokemonType] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        console.log(response.data);
        setPokemonType(response.data.results);
        setIsloading(false);
      } catch (error) {
        console.log("catch error", error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading || !pokemonType ? (
    <div>Loading...</div>
  ) : (
    <div className="all-type">
      {pokemonType.map((types) => {
        return (
          <Link
            className="type-box"
            to={`/type/${types.name}`}
            key={types.name}
          >
            {types.name}
          </Link>
        );
      })}
    </div>
  );
}
