import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';
import Navbar from '../ui/Navbar';
 
interface Props extends PropsWithChildren {
    title?: string;
    description?: string;
}
 
export const Layout: FC<Props> = ({ title, children, description }) => {
  return (
    <>
        <Head>z
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Lautaro Rodriguez" />
            <meta name="description" content={description} />
            <meta name="keywords" content="XXXXX, pokemon, pokedex" />
        </Head>
 
       <Navbar />
 
        <main>
            { children }
        </main>
    </>
  )
}