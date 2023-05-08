const baseUrl = 'https://swapi.dev/api'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  const data = await res.json()
  return data.results
}

export async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}