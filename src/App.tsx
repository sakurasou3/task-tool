import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Tabs>
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
    </ChakraProvider>
  );
}

export default App;
