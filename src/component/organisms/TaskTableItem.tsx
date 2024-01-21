import React from 'react';
import { CheckIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';

type Props = {
  status: boolean;
  title: string;
  estimatedTime: string;
  actualTime: string;
  startTime: string;
  endTime: string;
};
export const TaskTableItem = (props: Props) => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={2} mt={5} mb={3} mx={3}>
      <GridItem colSpan={1} textAlign="center">
        <CheckIcon />
      </GridItem>
      <GridItem colSpan={5} textAlign="center">
        {props.title}
      </GridItem>
      <GridItem colSpan={1} textAlign="center">
        {props.estimatedTime}
      </GridItem>
      <GridItem colSpan={1} textAlign="center">
        {props.actualTime}
      </GridItem>
      <GridItem colSpan={2} textAlign="center">
        {props.startTime}
      </GridItem>
      <GridItem colSpan={2} textAlign="center">
        {props.endTime}
      </GridItem>
    </Grid>
  );
};
