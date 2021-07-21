// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button,
//     Image,
//     Alert,
//   } from "react-native";
  
//   import React, { useState, useEffect } from "react";
//   import firebase from "@firebase/app";
//   import Colors from "../constants/Colors";
  
//   export default function SignupScreen({ navigation }) {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const onPressCreate = async () => {
//       const user = {
//         name: name,
//         email: email,
//         password: password,
        
//       };
  
//       await firebase
//         .auth()
//         .createUserWithEmailAndPassword(user.email, user.password)
//         .then(onSuccess, onFailure);
//     };
  
//     const onSuccess = async () => {
//       //Signed in
//       alert("Account created! Please log in.");
//     };
  
//     const onFailure = async () => {
//       alert("Failure! Please try again.");
//     };
  
//     return (
//       <View>
//         <Text style={styles.title}>Email:</Text>
//         <TextInput style={styles.nameInput} onChangeText={setEmail} />
//         <Text style={styles.title}>Password (6+ characters):</Text>
//         <TextInput style={styles.nameInput} secureTextEntry={true} onChangeText={setPassword} />
//         <Text style={styles.title}>Name:</Text>
//         <TextInput style={styles.nameInput} onChangeText={setName} />
  
//         <Button
//           onPress={onPressCreate}
//           title="Sign up"
//           color={Colors.snapblue}
//           accessibilityLabel="Sign up"
//         />
//       </View>
//     );
//   }
  
//   const offset = 16;
//   const styles = StyleSheet.create({
//     title: {
//       marginTop: offset,
//       marginLeft: offset,
//       fontSize: offset,
//     },
//     nameInput: {
//       height: offset * 2,
//       margin: offset,
//       paddingHorizontal: offset,
//       borderColor: "#111111",
//       borderWidth: 1,
//       fontSize: offset,
//     },
//     buttonText: {
//       marginLeft: offset,
//       fontSize: 42,
//     },
//   });

import { Text, View, TextInput, Button } from "react-native";
import firebase from "@firebase/app";
import Colors from "../constants/Colors";
import React, { useState, useEffect } from "react";
export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onPressCreate = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(onSuccess, onFailure);
  };
  const onSuccess = (userCredential) => {
    console.log("SUCCESS");
    var curr_user = userCredential.user;
    curr_user.updateProfile({
      displayName: name,
    });
  };
  const onFailure = () => {
    alert("Sign up failure. Please try again.");
  };
  return (
    <View>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} />
      <Text>Password (6+ characters):</Text>
      <TextInput onChangeText={setPassword} secureTextEntry={true} />
      <Text>Name:</Text>
      <TextInput onChangeText={setName} />
      <Button
        onPress={onPressCreate}
        title="Sign up"
        color={Colors.snapblue}
        accessibilityLabel="Sign up"
      />
    </View>
  );
}