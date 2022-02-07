import React from "react";
import { useCharacter } from "../hooks/useCharacters";


export default function Character() {

  const {data,loading,error} = useCharacter(4);
  console.log(data);
  return <div>asdadadad</div>
} 