import Link from "next/link"
import { use } from 'react'

async function getCharacters() {
	return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export default function Home() {

	const characters = use(getCharacters())
	return (
		<div>
			<h1>RICK AND MORTY API</h1> 
			{characters?.results?.map(c =>
				<ul key={c}>
					<Link href={`/id/${c.id}`}>
						<li>
							{c.name}
						</li>
					</Link>
				</ul>
			)}
		</div>
	)
}



