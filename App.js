// import React, { useState, useCallback, useEffect } from "react";
// import { GiftedChat } from "react-native-gifted-chat";
// import db from "./firebase";
// import firebase from "firebase/app"

// export default function App() {
//   const [messages, setMessages] = useState([]);

//   // useEffect(() => {
//   //   setMessages([
//   //     {
//   //       _id: 2, //message ID
//   //       text: 'How are you today?',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2, //user ID
//   //         name: 'Mikasa',
//   //         avatar: 'https://i1.wp.com/78.media.tumblr.com/b7359a8c6c29751233a74e40072f522d/tumblr_nvpeib6Mxk1stg31so4_250.png',
//   //       },
//   //     },
//   //     {
//   //       _id: 1, //message ID
//   //       text: 'Hello Sasha',
//   //       createdAt: new Date(),
//   //       user: {
//   //         _id: 2, //user ID
//   //         name: 'Mikasa',
//   //         avatar: 'https://i1.wp.com/78.media.tumblr.com/b7359a8c6c29751233a74e40072f522d/tumblr_nvpeib6Mxk1stg31so4_250.png',
//   //       },
//   //     },
//   //   ])
//   // }, [])

  
//   useEffect(() => {
//     let unsubscribeFromNewSnapshots = db
//       .collection("Chats")
//       .doc("myfirstchat")
//       .onSnapshot((snapshot) => {
//         console.log("New Snapshot!");
//         setMessages(snapshot.data().messages);
//       });
  
//     return function cleanupBeforeUnmounting() {
//       unsubscribeFromNewSnapshots();
//     };
//   }, []);

//   const onSend = useCallback((messages = []) => {
//     db.collection("Chats")
//       .doc("myfirstchat")
//       .update({
//         // arrayUnion appends the message to the existing array
//         messages: firebase.firestore.FieldValue.arrayUnion(messages[0]),
//       });
//     setMessages((previousMessages) =>
//       GiftedChat.append(previousMessages, messages)
//     );
//   }, []);
  
//   return (
//     <GiftedChat
//       placeholder="Say some"
//       alwaysShowSend={true}
//       messages={messages}
//       onSend={(messages) => onSend(messages)}
//       user={{ //current blue bubble user
//         _id: 1,
//         name: "Sam",
//         avatar: "https://i.pinimg.com/originals/74/fc/ce/74fccefb448a7642ca3d2885fdf7a7b5.jpg",
//       }}
//       inverted={true}
//       showUserAvatar={true}
//       renderUsernameOnMessage={true} //idk if that works/ what it means
//     />
//   );
// }

// import React from "react";
// import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import ChatScreen from "./screens/ChatScreen";
// import HomeScreen from "./screens/HomeScreen";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Chat" component={ChatScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;

// import { StatusBar } from "expo-status-bar";
// import React, { useState, useCallback, useEffect } from "react";
// import { StyleSheet, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import ChatScreen from "./screens/ChatScreen";
// import LoginScreen from "./screens/LoginScreen";
// import SignupScreen from "./screens/SignupScreen";
// import BottomTabNavigator from "./navigation/BottomTabNavigator";
// import firebase from "@firebase/app";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Tabs">
//           <>
//             <Stack.Screen name="Tabs" component={BottomTabNavigator} />
//             <Stack.Screen name="Chat" component={ChatScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//           </>
//         </Stack.Navigator>
//         <StatusBar style="auto" />
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// });

// export default App;

import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import firebase from "@firebase/app";

const Stack = createStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    firebase.auth().currentUser ? true : false
  );

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(user ? true : false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={BottomTabNavigator} />
              <Stack.Screen name="Chat" component={ChatScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Signup" component={SignupScreen} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;