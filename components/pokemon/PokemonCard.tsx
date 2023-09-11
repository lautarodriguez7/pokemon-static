import { SmallPokemon } from "@/interfaces/pokemon-list";
import { FC } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemon: SmallPokemon
}


export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id }`)
  }

  {/* <Card shadow="sm" key={pokemon.id} isPressable onClick={onClick}>
    <CardBody className="overflow-visible">
      <Image
        isZoomed
        width="100%"
        alt={pokemon.name}
        src={pokemon.img}
        height={140}
      />
    </CardBody>
    <CardFooter className="text-medium justify-between">
      <b>{pokemon.name.toUpperCase()} </b>#{pokemon.id}
    </CardFooter>
  </Card> */}
  return (
    <div className="flex flex-col items-center justify-center"> 
       <Card
        radius="lg"
        className="border-none"
        key={pokemon.id}
        isPressable onClick={onClick}
        >
      <Image
        className="object-cover"
        height={240}
        alt={pokemon.name}
        src={pokemon.img}       
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{pokemon.name.toUpperCase()}</p>
        <p className="text-tiny text-white/80">#{pokemon.id}</p>
      </CardFooter>
    </Card>
    </div>  )
}
