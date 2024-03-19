import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import firestore from '@react-native-firebase/firestore';



function App() {

  const [mydata, setMydata] = useState(null)

  useEffect(() => {
    getdatabase();
  }, []);


const getdatabase = async () => {

    try {
      const data = await firestore().collection("gsgsg").doc("s00HnqcLCAgW9yQGi9yQ").get();
      // console.log(data);
      setMydata(data._data)
}


    catch (err) {
      console.log(err); s
    }
  }


return(

  <View>
    <Text>
      name:{mydata?madata.name:"loading"}
      
      </Text>

      <Text>roll :{mydata?mydata.roll:"loading"}</Text>
    </View>

);



}




export default App;
