import { useEffect } from "react";
import { Api } from "../service/api";

interface CharacterProps {
  name: string;
  image: string;
  species: string;
}

export function CharacterCard({ image, name, species }: CharacterProps) {
  return (
    <div className="flex w-full flex-col bg-gray-100 border rounded-2xl hover:scale-105 hover:border hover:border-cyan-500">
      <div className="img w-full">
        <img src={image} alt="" className="w-full rounded-t-2xl" />
      </div>

      <div className="info p-4">
        <h2 className="font-bold">{name}</h2>
        <p className="font-semibold">{species}</p>
      </div>
    </div>
  );
}
