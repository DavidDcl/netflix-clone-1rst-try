import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCgyEVA7t-qrSaLFL2c9rvecvlVK0S_cz4',
  authDomain: 'nextflix-clone-358b1.firebaseapp.com',
  projectId: 'nextflix-clone-358b1',
  storageBucket: 'nextflix-clone-358b1.appspot.com',
  messagingSenderId: '357796191401',
  appId: '1:357796191401:web:e8272ed6112c4011121db8',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
