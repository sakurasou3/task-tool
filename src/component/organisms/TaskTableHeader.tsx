import React from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';

export const TaskTableHeader = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={2} mt={5} mb={3} mx={3}>
      <GridItem colSpan={1} textAlign="center">
        <CheckIcon />
      </GridItem>
      <GridItem colSpan={5} textAlign="center">
        タスク
      </GridItem>
      <GridItem colSpan={1} textAlign="center">
        見積
      </GridItem>
      <GridItem colSpan={1} textAlign="center">
        実績
      </GridItem>
      <GridItem colSpan={2} textAlign="center">
        開始
      </GridItem>
      <GridItem colSpan={2} textAlign="center">
        終了
      </GridItem>
    </Grid>
  );
};
