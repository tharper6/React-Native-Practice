import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
  
    const goalInputHandler = (enteredtext) => {
      setEnteredGoal(enteredtext);
    }

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    return(
      <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Course Goal"
            style={styles.textInput}
            onChange={event => goalInputHandler(event.nativeEvent.text)}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color="red" onPress={props.onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
      },
      textInput: {
        borderBottomColor: 'black', 
        borderBottomWidth: 3, 
        marginBottom: 3, 
        padding: 3, 
        width: '75%'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
      },
      button: {
        width: '40%'
      }
})

export default GoalInput;