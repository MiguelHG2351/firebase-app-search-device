import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbrfjr_CQ9IsBsJJi8PXlGCLNERAf0sHY",
    authDomain: "testing-with-firebase-5e579.firebaseapp.com",
    databaseURL: "https://testing-with-firebase-5e579.firebaseio.com",
    projectId: "testing-with-firebase-5e579",
    storageBucket: "testing-with-firebase-5e579.appspot.com",
    messagingSenderId: "29678006692",
    appId: "1:29678006692:web:0fac7308e3c3aefcc75131",
    measurementId: "G-9CBHSZYL2Y"
  };
  // Initialize Firebase
  !firebase.apps.length && firebase.initializeApp(firebaseConfig);
  

  firebase.analytics();

  const mapUserFromFirebaseAuth = (user) => {
    if(user !== null) {
      // const { additionalUserInfo } = user
        const { photoURL, displayName, email } = user
        // const { avatar_url, blog } = profile
        return {
          avatar: photoURL
        } 
    } else {
      return null
    }
  }
  
  export const authStateChange = (onChange) => {
    return firebase
      .auth()
      .onAuthStateChanged(user  => {
        const normalizedUser = mapUserFromFirebaseAuth(user)
        onChange(normalizedUser)
      })
  }

  export const loginWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
  }