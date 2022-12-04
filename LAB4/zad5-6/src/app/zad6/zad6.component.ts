import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad6',
  templateUrl: './zad6.component.html',
  styleUrls: ['./zad6.component.css']
})
export class Zad6Component {
  arr: Content[] = []

  constructor() {}
  tmpNav = ''
  tmpMsg = ''

  ngOnInit(): void {
    fetch('./assets/zad6/zad6.json').then(res => res.json())
    .then(json => {
      for (let i in json["contents"]) {
        this.arr.push({
          nav: json["contents"][i]["nav"],
          txt: json["contents"][i]["txt"],
          msg: json["contents"][i]["msg"]
        } as Content)
      }
    })
  }

  consoleLog(c: Content , num: number) {
    this.tmpNav = c.nav
    this.tmpMsg = c.msg
  }
  
  displayNav() {
    return this.tmpNav
  }

  displayMsg() {
    return this.tmpMsg
  }
}

export interface Content {
  nav: string
  txt: string
  msg: string
}