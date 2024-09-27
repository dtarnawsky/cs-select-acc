import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/angular/standalone';


export interface SecQuestion {
  questionCd: string;
  question: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption],
})
export class HomePage implements OnInit {
  secQuestions: SecQuestion[] = [];
  constructor() { }

  ngOnInit(): void {
    this.secQuestions = [{
      question: 'What is your favorite color?',
      questionCd: '1'
    }, {
      question: 'What is your favorite animal?',
      questionCd: '2'
    },
    {
      question: 'What is your favorite food?',
      questionCd: '3'
    },
    {
      question: 'What is your favorite drink?',
      questionCd: '4'
    },
    {
      question: 'What is your favorite movie?',
      questionCd: '5'
    },
    {
      question: 'What is your favorite book?',
      questionCd: '6'
    },
    {
      question: 'What is your favorite song?',
      questionCd: '7'
    },
    {
      question: 'What is your favorite TV show?',
      questionCd: '8'
    },
    {
      question: 'What is your favorite sport?',
      questionCd: '9'
    },
    {
      question: 'What is your favorite place?',
      questionCd: '10'
    },
    {
      question: 'What is your favorite thing?',
      questionCd: '11'
    },
    {
      question: 'What is your favorite person?',
      questionCd: '12'
    },
    {
      question: 'What is your favorite animal?',
      questionCd: '13'
    },
    {
      question: 'What is your favorite beatles song?',
      questionCd: '14'
    },
    {
      question: 'What is your favorite spice girl?',
      questionCd: '15'
    },
    {
      question: 'Who is your favorite minecraft youtuber?',
      questionCd: '16'
    }
    ]
  }
}
