import Link from 'next/link'
import React from 'react'

const getCharacter = async (id) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const response = await res.json();
  return response
}

const page = async ({ params }) => {

  const character = await getCharacter(params.id)
  console.log(character)
  return (
	<div>
    <Link href='/'>Home</Link>
    <h1>{character.name}</h1>
    <img src={character.image}></img>
    <h4>Status: {character.status}</h4>
    <h4>Species: {character.species}</h4>
    <h4>Gender: {character.gender}</h4>
    <h4>Origin: {character.origin.name}</h4>
    <h4>Location: {character.location.name}</h4>
  </div>
  )
}

export default page