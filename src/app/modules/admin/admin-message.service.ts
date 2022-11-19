import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {


  messages: Array<string> = [];
  subject = new Subject<Array<string>>; //Subject to specjalny typ Observable (mozna sie zapisywac aby odczytywac nowe zdarzenia(wiadomosci))

  constructor() { }

  add(message: string): void {
    this.clear();
    this.messages.push(message); // dodaje komunikat do listy komunikatów
    this.subject.next(this.messages) //tym polecenie wysyłamy nową wiadomosć do obserwujących suuject
  }

  clear() {
    this.messages = [];
  }
  addSpringErrors(error: any): void {
    this.clear();
    this.extractMessage(error);
    this.subject.next(this.messages);
  }

  private extractMessage(error: any) {
    if (error.errors?.length > 0) {
      for (let message of error.errors) {
        this.messages.push("Pole: " + message.field + " -> " + message.defaultMessage);
      }
    } else {
      this.messages.push(error.message);
    }
  }
}
