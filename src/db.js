import firebase from 'firebase/app'
import 'firebase/database'

// Get a realtime database instance
export default firebase
  .initializeApp({ projectId: 'ntijoh-url' })
  .database()
