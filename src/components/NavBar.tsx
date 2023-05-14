import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import Searchinput from './Searchinput';

const NavBar = () => {
  return (
    <HStack padding='15px'>
      <Image src={logo} boxSize='60px' />
      <Searchinput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
