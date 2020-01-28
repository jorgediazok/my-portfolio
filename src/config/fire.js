import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAKl4l3fgiiWRrbxqIbCK_boJYYn2iYjm8',
  authDomain: 'portfolio-react-cd413.firebaseapp.com',
  databaseURL: 'https://portfolio-react-cd413.firebaseio.com',
  projectId: 'portfolio-react-cd413',
  storageBucket: 'portfolio-react-cd413.appspot.com',
  messagingSenderId: '452492282975',
  appId: '1:452492282975:web:077fccc8242da0646d5fea'
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
