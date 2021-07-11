import React,{useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'


const InputText = props => {

    const [enteredText, setEnteredText] = useState('');

    const textInputHandler = (enteredText) =>{
        setEnteredText(enteredText);
      };

      const addText = () =>{
        props.onAddText(enteredText);
        setEnteredText('');

      }


    return (
      <Modal visible={props.visible} animationType="slide">
             <View style={styles.inputContainer}>
            <TextInput placeholder="Enter text here"
                style={styles.textInput}                    // react native stylesheet
                onChangeText={textInputHandler}            // onChangeText execute function on keyStroke
                value={enteredText}                       // binding the value property  
            />
           <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="CANCLE" color="red" onPress={props.onCancle} /></View>
            <View style={styles.button}><Button title="ADD" onPress={addText} /></View>
           </View>
        </View>
      </Modal>
    )

};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'50%'
    },
    button:{
        width:'40%'
    }
});

export default InputText;