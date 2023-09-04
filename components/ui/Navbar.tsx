import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Spacer} from "@nextui-org/react";

export default function NavbarPage() {

  return (
      // <div>
       <Navbar className='bg-gradient-to-tr from-violet-400 to-gray-900 shadow-lg'>
      <NavbarBrand>
        <Image
      width={100}
        alt="NextUI hero Image"
        src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/132.png"
        />
        <h1 style={{color: 'white'}}>P</h1>
        <h3 style={{color: 'white'}}>okemon</h3>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} color="danger" href="#" variant="flat">
        Favorito
      </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    // </div>
  )
}
