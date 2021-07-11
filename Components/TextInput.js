import React,{useState} from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'
const InputText = props => {

    const [enteredText, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
      };


    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Enter text here"
                style={styles.textInput}                    // react native stylesheet
                onChangeText={goalInputHandler}            // onChangeText execute function on keyStroke
                value={enteredText}                       // binding the value property  
            />
            <Button title="ADD" onPress={props.onAddText.bind(this, enteredText)} />
        </View>
    )

};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default InputText;