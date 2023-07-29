import "../Pokemon/pokemon.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Pokemon() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [name]);

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h1 className="title">Pokemons</h1>

      <div className="pokemon">
        <div className="link-card">
          <div>{name}</div>

          <img src={data.sprites.front_default} alt="poke img" />
        </div>

        <div className="type-flex">
          {data.types.map((typeTab) => {
            return (
              <Link
                className="type-box"
                to={`/type/${typeTab.type.name}`}
                key={typeTab.type.name}
              >
                {typeTab.type.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
