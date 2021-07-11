import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredText, setEnteredGoal] = useState('');
  const [inputText, processText] = useState([]);


  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };

  const addTextHandler = () =>{
    processText(currentText => [
      ...currentText,                                          // anonymous function  always works
      {id: Math.random().toString(), value : enteredText}]);  // 


    //processText([...inputText, enteredText]); // spread operator
   // console.log(enteredText);
  };


  return (
    <View style={styles.screen}>
       {/* child one */}
      <View style={styles.inputContainer}>

       <TextInput placeholder="Enter text here" 
       style={styles.textInput}                    // react native stylesheet
       onChangeText={goalInputHandler}            // onChangeText execute function on keyStroke
       value={enteredText}                       // binding the value property  
       />
       <Button title="ADD" onPress={addTextHandler} />

      </View>
       {/* child one ends */}
     

      {/* child two */}
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={inputText} 
      renderItem={itemData =>(
        <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
        </View>
      )}

      />
      {/* child two ends */}

      
      <StatusBar style="auto" />

    </View>
 
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50,
    marginTop:250

    
  },
  inputContainer:{
  flexDirection: 'row', 
  justifyContent:'space-between', 
  alignItems:'center'
},
  textInput:{
    width:'80%', 
    borderColor:'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem:{
    padding:10,
    marginVertical:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1
  }


});

