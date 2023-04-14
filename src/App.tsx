import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonThumnail from './component/PokemonThumnail';

// interface dataType {
//  count : number,
//  next: string,
//  previous  : any,
//  results: any[]
// }
interface pokemonType{
  id:number,
  name:string,
  sprites:{
    other:{
      dream_world:{
        front_default:string
      }
    }
  },
  types :{
    type :{
      name : string
    }
  }[]
}
function App() {

  const [allPokemons, setAllPokemons] = useState<pokemonType[]>([]);
  const [loadMore, setLoadMore] = useState<string>('http://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllPokemons = async ()=>{
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    // console.log(data);  

    function createPokemonObject (result:any[]){
      result.forEach(async (pokemon:any)=>{
        const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
      // console.log(data)

      setAllPokemons(currentList =>[...currentList,data])
      })
    }

     createPokemonObject(data.results);
    //  await console.log(allPokemons);
  }

  useEffect (()=>{
    getAllPokemons();
  },[]);
  
  return (
    <div className="all-container">
      <h1>Pokemon Evolution</h1>
      <div className= "pokemon-container">
         <div className="all-container">
           {allPokemons.map((pokemon,index:number) => 
             <PokemonThumnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
             />
            )} 
        </div> 
        <button className='load-more' onClick={()=>getAllPokemons()}> Load More</button>
      </div>
    </div>
  );
}

export default App;
