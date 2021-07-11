import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TextItem from './Components/TextItem';
import InputText from './Components/TextInput';



export default function App() {
  const [inputText, processText] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('RE-RENDERING COMPONENT');
  console.log(inputText);


   // Add Function 
  const AddText = textTitle =>{
    if(textTitle.length === 0){
      return;
    }
    processText(currentText => [
      ...currentText,                                          // anonymous function  always works
      {id: Math.random().toString(), value : textTitle}
    ]); 
    setIsAddMode(false);
   // console.log(enteredText);
  };


   // Delete Function
  const DeleteText = textId => {
    console.log('To be deleted' + textId);
    console.log(inputText);
    processText(currentText =>{
         return currentText.filter( (text) => text.id !== textId);
      });
  }

   const Cancle = () =>{
     setIsAddMode(false);
   };


  
  return (
    <View style={styles.screen}>
       <Button title="Add New Text" onPress={()=> setIsAddMode(true)}   />
       <InputText visible={isAddMode} onAddText={AddText} onCancle={Cancle} />


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
    padding:20,
    marginTop:250
  },
  
});


   //processText([...inputText, enteredText]); // spread operator
