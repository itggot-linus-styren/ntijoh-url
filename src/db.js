import firebase from 'firebase/app'
import config from './dbConfig.js'
import 'firebase/database'

// Get a realtime database instance
export default firebase
  .initializeApp(config)
  .database()
