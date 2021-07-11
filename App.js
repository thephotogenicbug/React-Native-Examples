import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TextItem from './Components/TextItem';
import InputText from './Components/TextInput';
export default function App() {

  const [inputText, processText] = useState([]);


   // Add Function 
  const AddText = textTitle =>{
    processText(currentText => [
      ...currentText,                                          // anonymous function  always works
      {id: Math.random().toString(), value : textTitle}
    ]); 
   // console.log(enteredText);
  };


   // Delete Function
  const DeleteText = textId => {
    processText(currentText =>{
         return currentText.filter( (text) => text.id !== textId);
      });
  }


  
  return (
    <View style={styles.screen}>
       <InputText  onAddText={AddText} />


      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={inputText} 
      renderItem={itemData => <TextItem 
        id={itemData.item.id} 
        onDelete={DeleteText} 
        title={itemData.item.value} 
        />
      } 
      />

      
      <StatusBar style="auto" />
    </View>
 
  );
}



const styles = StyleSheet.create({
  screen:{
    padding:50,
    marginTop:250
  },
  



});


   //processText([...inputText, enteredText]); // spread operator
