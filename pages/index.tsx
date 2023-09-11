import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { PokemonCard } from "@/components/pokemon";
import { SmallPokemon, PokemonListResponse } from "@/interfaces/pokemon-list"
import { GetStaticProps, NextPage, GetStaticPaths } from "next";

interface Props {
  pokemons: SmallPokemon[]
}


const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <div>
      <Layout title="Home" description="Listado de Pokemons" />
      <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
        {       pokemons.map( ( pokemon ) => (
          <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
        </div>
    </div>
  )
}
export default Home
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  return {
    props: {
      pokemons
    }
  }
}