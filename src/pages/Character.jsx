import React from "react";
import { useCharacter } from "../hooks/useCharacters";
import { GET_CHARACTERS } from "../queries/gqlQueries";
import { useParams } from 'react-router-dom';
import client from "../apollo-configs";
export default function Character() {

  const { id } = useParams();

  console.log("got the id.............",id);
  const {data,loading,error} = useCharacter(id);
  console.log(data);
  return <div>asdadadad</div>
} 