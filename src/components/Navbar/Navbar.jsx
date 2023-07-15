import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { AiFillHome, AiOutlineInfoCircle, AiOutlinePhone, AiOutlineCheckSquare } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';

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
          <NavItem to="/" icon={<AiFillHome />} exact>
            Home
          </NavItem>
          <NavItem to="/about" icon={<AiOutlineInfoCircle />}>
            About
          </NavItem>
          <NavItem to="/contact" icon={<AiOutlinePhone />}>
            Contact
          </NavItem>
          <NavItem to="/todo" icon={<AiOutlineCheckSquare />}>
            Todo
          </NavItem>
          <NavItem to="/product" icon={<BsFillBagFill />}>
            Product
          </NavItem>
          <NavItem to="/cart" icon={<BsFillBagFill />}>
            Cart
          </NavItem>
        </Flex>
      </Flex>
    </Box>
  );
};

const NavItem = ({ to, icon, children, ...rest }) => {
  return (
    <Box as="li" marginLeft="4">
      <Link
        as={NavLink}
        to={to}
        display="flex"
        alignItems="center"
        fontSize="20px"
        fontWeight="bold"
        _hover={{ textDecoration: 'none' }}
        activeClassName="active"
        {...rest}
      >
        <Box marginRight="4">{icon}</Box>
        <span>{children}</span>
      </Link>
    </Box>
  );
};

export default Navbar;
