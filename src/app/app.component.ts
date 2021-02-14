import { Component } from '@angular/core';
import firebase  from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblio';

  constructor(){
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDqxxy-QJ8KpShkzf48T5x2NyEI7O23UWE",
      authDomain: "biblio-99bd0.firebaseapp.com",
      projectId: "biblio-99bd0",
      storageBucket: "biblio-99bd0.appspot.com",
      messagingSenderId: "402780131919",
      appId: "1:402780131919:web:8cb5256af803c05dc5d03a",
      measurementId: "G-3C6NGLVKJ7"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
