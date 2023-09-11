import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import { Card, Image } from '@nextui-org/react';
import { pokeApi } from '@/api';
import { PokemonCard } from '../../components/pokemon/PokemonCard';
import { Pokemon } from '@/interfaces';

interface Props {
  pokemon: Pokemon;
}
const PokemonPage: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title='Algun pokemon'>
      <h1>{pokemon.name}</h1>
      <Card>
        <Image
          src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
          alt={pokemon.name}
          width={200}
          height={200}
        />
    </Card>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );
  
    return {
      paths: pokemons151.map( id => ({
        params: { id }
      })),
      // fallback: false
      fallback: 'blocking'
    }
  }
  
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
  
  
    return {
      props: {
        pokemon: data
      },
    }
  }
  
  

export default PokemonPage