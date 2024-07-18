import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import NavLink from '@/components/navbar/NavLink';

const TopNav = () => {
  return (
    <Navbar
      maxWidth={'xl'}
      className={'bg-black'}
      classNames={{ item: ['text-xl', 'text-white', 'uppercase', 'data-[active=true]:text-cyan-300'] }}
    >
      <NavbarBrand>
        <div className={'font-extrabold text-4xl flex text-white font-mono'}>
          <span>Next</span>
          <span>Match </span>
        </div>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'></NavbarContent>
      </NavbarBrand>
      <NavbarContent justify={'center'}>
        <NavLink href={'/members'} label={'Matches'} />
        <NavLink href={'/lists'} label={'Lists'} />
        <NavLink href={'/messages'} label={'Messages'} />
      </NavbarContent>
      <NavbarContent justify={'end'}>
        <Button as={Link} href={'/login'} variant={'bordered'} className={'text-white'}>
          Login
        </Button>
        <Button as={Link} href={'/register'} variant={'bordered'} className={'text-white'}>
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNav;
