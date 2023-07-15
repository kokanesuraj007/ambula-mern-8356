import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      as="nav"
      height="80px"
      bg={useColorModeValue('teal.500', 'teal.700')}
      color="white"
      px={{ base: '4', md: '8' }}
    >
      <Flex alignItems="center" justifyContent="space-between" height="full">
        <Link as={NavLink} to="/" fontWeight="bold" fontSize="24px">
          Ambula
        </Link>
        <Flex as="ul" listStyleType="none" alignItems="center" flexGrow="1" justifyContent="flex-end">
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/todo">Todo</NavItem>
          <NavItem to="/product">Product</NavItem>
          <NavItem to="/cart">Cart</NavItem>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <Box as="li" marginLeft="4">
      <Link
        as={NavLink}
        to={to}
        fontSize="20px"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
        activeClassName="active"
      >
        {children}
      </Link>
    </Box>
  );
};

export default Navbar;
