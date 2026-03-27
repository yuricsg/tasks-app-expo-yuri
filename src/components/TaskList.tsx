import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';
import { TaskItem as TaskItemType } from '../utils/handle-api';

interface TaskListProps {
  tasks: TaskItemType[];
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TaskItem
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.listContent}
      scrollEnabled={true}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 24,
  },
});

export default TaskList;

