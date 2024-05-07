import Game from "@/components/Game"

type Game  = {
  id:number,
  background_image:string
  rating:number,
  name:string
}

const getGames = async (): Promise<Game[]> =>{
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}`) 
  if(!res.ok){
    throw new Error('failed to fetch')
  }

  await new Promise((resolve)=>setTimeout(resolve, 2000))
  const data = await res.json()
  return data.results
}


export default async function Home() {
  const games = await getGames()

  return (
    <main className="m-24 rounded-md grid-cols-4 gap-12">
{
  games.map((game)=>(
   <Game
   id={game.id}
   name={game.name}
   rating={game.rating}
   image={game.background_image}/>
  ))
}
    </main>
  );
}
