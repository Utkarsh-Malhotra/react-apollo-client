import React from "react";
import CharacterSubList from "./CharacterSubList";


export default function CharacterList() {
  // const { error,loading,data } = useCharacters();
  // console.log(error,loading,data);
  // if(loading) return <div>spinner......</div>
  // if(error) return <div>Something went wrong</div>
  // return <div className="CharacterList">
  //   {data.characters.results.map(character => {
  //     return <div>
  //       <img src={character.image} alt="" />
  //       <h2>{character.name}</h2>
  //     </div>
  //   })}
  // </div>
  return <div>
    <CharacterSubList />
    <CharacterSubList />
    <CharacterSubList />
  </div>
}