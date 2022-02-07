import { useCharacters } from "../hooks/useCharacter";
import './CharacterList.css';

export default function CharacterSubList() {
  const { error,loading,data } = useCharacters();
  console.log(error,loading,data);
  if(loading) return <div>spinner......</div>
  if(error) return <div>Something went wrong</div>
  return <div className="CharacterList">
    {data.characters.results.map(character => {
      return <div>
        <img src={character.image} alt="" />
        <h2>{character.name}</h2>
      </div>
    })}
  </div>
}