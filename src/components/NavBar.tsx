import { HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='15px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
