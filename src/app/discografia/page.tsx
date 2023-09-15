async function getData () {
  const albumIds = ['12ZdnejkLo9VOaeXgGhF9l', '5fbylN9WC3Z3dLRnD2Bw8V', '5PwloThwcrPj6CcoJb4MB9', '59aqwqsEXt7l0wbZFAjl4e', '1H4DxODxVZvoYDXNBHQlBB']
  const res = await fetch(`https://api.spotify.com/v1/albums?ids=${albumIds.join(',')}`, {
    headers: {
      Authorization: 'Bearer 3cbb752379cf40e5b05bcda755900484'
    }
  })
  // La recomendación es manejar errores
  if (!res.ok) {
    // Esto activará el `error.js` Error Boundary más cercano
    throw new Error('Fallo al buscar datos')
  }
  return res.json()
}

export default async function Home () {
  const data = await getData()
  const albums = data.albums
  return (
    <div>
      {albums.map((album: any) => (
        <div key={album.id}>
          <h2>{album.name}</h2>
        </div>
      ))}
    </div>
  )
}
