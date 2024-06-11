import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Provider as PaperProvider, Appbar, TextInput, Button, List, IconButton } from 'react-native-paper';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = (taskKey) => {
    setTasks(tasks.map(task => 
      task.key === taskKey ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="To-Do List" />
        </Appbar.Header>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Enter Task"
            value={task}
            onChangeText={setTask}
            style={styles.input}
          />
          <Button mode="contained" onPress={addTask} style={styles.addButton}>
            Add
          </Button>
        </View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <List.Item
              title={item.value}
              left={props => (
                <IconButton
                  {...props}
                  icon={item.completed ? "check-circle" : "checkbox-blank-circle-outline"}
                  color={item.completed ? "green" : "grey"}
                  onPress={() => toggleTaskCompletion(item.key)}
                />
              )}
              right={props => (
                <IconButton
                  {...props}
                  icon="delete"
                  color="red"
                  onPress={() => deleteTask(item.key)}
                />
              )}
              titleStyle={item.completed ? styles.completedTaskText : null}
              style={item.completed ? styles.completedTask : styles.task}
            />
          )}
          keyExtractor={item => item.key}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    justifyContent: 'center',
    backgroundColor: '#7FFF00'
  },
  task: {
    backgroundColor: '#A9A9A9',
  },
  completedTask: {
    backgroundColor: '#d3d3d3',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
});
