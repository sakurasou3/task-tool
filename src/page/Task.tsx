import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';
import { TaskTableHeader } from '../component/organisms/TaskTableHeader';
import { dateToString } from '../util/formatDate';
import { TaskTableItem } from '../component/organisms/TaskTableItem';

type TaskData = {
  status: boolean;
  title: string;
  estimatedTime: string;
  actualTime: string;
  startTime: string;
  endTime: string;
};
export const Task = () => {
  const date = new Date();
  return (
    <Box px={2}>
      <Text textAlign="center">{dateToString(date)}</Text>
      <TaskTableHeader />
      <Divider borderWidth={2} />
      <TaskTableItem
        status
        title="読書"
        estimatedTime="25分"
        actualTime=""
        startTime="10:00"
        endTime="11:00"
      />
      <TaskTableItem
        status
        title="test"
        estimatedTime="30分"
        actualTime=""
        startTime="10:00"
        endTime="11:00"
      />
    </Box>
  );
};
