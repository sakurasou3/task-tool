import React from 'react';
import { Flex, Heading, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon, TimeIcon } from '@chakra-ui/icons';
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      bg="teal.600"
      py={4}
      px={16}>
      <Flex alignItems="center">
        <TimeIcon boxSize={6} color="teal.50" />
        <Heading textAlign="center" ml={2} color="teal.50">
          TimeLog
        </Heading>
      </Flex>
      <IconButton
        aria-label="toggleTheme"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};
