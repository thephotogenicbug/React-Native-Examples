import React from 'react';
import {StyleSheet, View, Text, Touchable, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
const TextItem = props =>{

    {/* activeOpacity={0.9} */}

    return (
     <TouchableNativeFeedback  onPress={props.onDelete.bind(this, props.id)}>
          <View style={styles.listItem}>
          <Text>{props.title}</Text>
          </View>
     </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }
})

export default TextItem;