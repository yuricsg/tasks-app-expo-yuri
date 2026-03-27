import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { TaskItem as TaskItemType } from '../utils/handle-api';

interface TaskItemProps {
  item: TaskItemType;
  onUpdate: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ item, onUpdate, onDelete }) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => onUpdate(item._id, item.text)}>
          <Feather name="edit" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(item._id)}>
          <AntDesign name="delete" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#000',
    opacity: 10,
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    gap: 16,
    marginLeft: 16,
  },
  icon: {
    padding: 2,
  },
});

export default TaskItem;
