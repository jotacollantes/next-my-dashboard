'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {

  // si no se hace el Object.values, el state devuelve:
  // {
  //   '1': { id: 1, name: 'bulbasaur' },
  //   '2': { id: 2, name: 'bulbasaur' },
  // }
  // con  Object.values() se devuelve un array de objetos:
  // [{ id: 1, name: 'bulbasaur' },{id: 2, name: 'venosaur'}]

  
  const favoritePokemons = useAppSelector( state => Object.values( state.pokemons.favorites ) );
  // const [pokemons, setPokemons ] = useState( favoritePokemons );

  // useEffect(() => {
  //   // console.log({ favoritePokemons });
  //   // setPokemons( favoritePokemons );
  // }, [favoritePokemons])
  

  return (
    <>
        {/* <PokemonGrid pokemons={ favoritePokemons } /> */}
        {
          favoritePokemons.length === 0
            ? (<NoFavorites />)
            : (<PokemonGrid pokemons={ favoritePokemons } />)
        }    
    </>
  )
}



export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}