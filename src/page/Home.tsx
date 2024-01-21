import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box mt={8}>
      <Tabs size="lg" variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>タスク</Tab>
          <Tab>ルーチン</Tab>
          <Tab>レビュー</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
