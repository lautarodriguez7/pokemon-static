import { pokeApi } from "@/api"
import { Layout } from "@/components/layouts"
import { Pokemon, PokemonListResponse } from "@/interfaces/pokemon-list"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { NextPage } from "next";

interface Props {
  pokemons: Pokemon[]
}


const Home: NextPage<Props> = ({ pokemons }) => {
   console.log(pokemons)
  return (
    <div>
      <Layout title="Home" description="Listado de Pokemons" />
      
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {pokemons.map((pokemon: any) => (
        <Card shadow="sm" key={pokemon.id} isPressable onPress={() => alert(pokemon.name.toUpperCase())}>
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={pokemon.name}
              src={pokemon.img}
            />
          </CardBody>
          <CardFooter className="text-medium justify-center">

            <b>{pokemon.id} </b>- {pokemon.name.toUpperCase()}
            {/* <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
      ))}
    </div>
      
    </div>
  )
}
export default Home
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props

export async function getStaticProps(ctx: any) {
  
  const resp = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log({ resp })
  const pokemons: any[] = resp.data.results.map((poke: any, index: number) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }
    ))
  console.log({ pokemons })
  return {
    props: {
      pokemons: pokemons
    },
  }
}