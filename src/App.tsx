import { useEffect, useState } from "react";
import { CharacterCard } from "./components/CharacterCard";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { Api } from "./service/api";

interface ApiData {
  id: number;
  name: string;
  image: string;
  url: string;
  species: string;
}

export function App() {
  const [characters, setCharacters] = useState<ApiData[]>([]);
  const [filteredCharecter, setFilteredCharacter] = useState("");

  const getData = () => {
    Api.get("/character")
      .then((res) => {
        setCharacters(res.data.results);
        // console.log(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    setFilteredCharacter(event.target.value);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavBar />

      <main
        className="px-[8%]
      xl:mx-auto xl:max-w-7xl"
      >
        <div className="search flex flex-col items-center justify-center gap-12 mt-24">
          <img src="src/assets/logo.png" alt="" />
          <input
            className="w-3/4 rounded-2xl text-black text-center bg-gray-300 p-2 placeholder:text-black font-semibold border border-cyan-500"
            placeholder="Search for your character..."
            type="text"
            value={filteredCharecter}
            onChange={handleSearchInput}
          />
        </div>
        <ul className="grid grid-cols-2 my-14 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {characters
            .filter((character) =>
              character.name
                .toLowerCase()
                .includes(filteredCharecter.toLowerCase())
            )
            .map((character) => {
              return (
                <li className="h-auto " key={character.id}>
                  <CharacterCard
                    name={character.name}
                    image={character.image}
                    species={character.species}
                  />
                </li>
              );
            })}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
