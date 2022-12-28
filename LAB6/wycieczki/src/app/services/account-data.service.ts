import { Injectable } from '@angular/core';
import { account } from '../Iaccount';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Router, TitleStrategy } from '@angular/router';
import { Trip } from '../Trip';
import { BoughtTrip } from '../IBoughtTrip';
import { setDoc, doc, arrayUnion, arrayRemove, increment } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  accountRef = this.db.collection('account')
  presistenceRef = this.db.collection('presitence')
  userData: Observable<any>
  currUserID!: string
  currRole!: any
  loggedUser!: any
  users!: account[]
  presistance!: any
  ifLogged!: boolean
  userBasket!: any
  userBought!: any


  constructor(private db : AngularFirestore, private angularFA : AngularFireAuth, private router : Router) { 
    this.userData = angularFA.authState;
    this.userData.subscribe((user : any) => {
      console.log(user?.uid)
      this.currUserID = user?.uid
      this.accountRef.doc(this.currUserID + '').valueChanges().subscribe(user => {
        this.currRole = (user) ? (user as account).role : undefined
        console.log(this.currRole)
        this.loggedUser = (user) ? (user as account).fname + (user as account).lname.slice(0, 1) : undefined
        this.userBasket = (user) ? (user as account).basket : undefined
        this.userBought = (user) ? (user as account).bought : undefined
      })
    })
    this.isLogged()
    console.log(this.ifLogged)
    this.presistenceRef.doc('0').valueChanges().subscribe(change => {
      this.presistance = (change as {current: any}).current
    })
   }

   getUsers() : Observable<any>{
    return this.accountRef.valueChanges()
   }


   SignUp(acc : any) {
    this.angularFA
    .createUserWithEmailAndPassword(acc.email, acc.password)
    .then(res => {
      this.accountRef.doc(res.user?.uid).set({
          uid: res.user?.uid,
          fname: acc.fname,
          lname: acc.lname,
          email: acc.email,
          password: acc.password,
          role: 'customer',
          isBanned: false,
          basket: [],
          bought: [],
      } as account)
    this.router.navigate(['/'])
    window.alert("Rejestracja przebiegła poprawnie!")
    })
    .catch(err => {
      window.alert(err.message)
      console.log(err.message)
    })
   }
   addToUserBasket(trip : Trip, cnt : number) {
    let tmp =  this.findIds(trip.id, cnt)
    console.log('tmp', tmp)
    if (tmp > 0) {
      trip.reserved = tmp
      console.log(trip)
      this.accountRef.doc(this.currUserID).update({
        basket: arrayUnion({ id: trip.id, trip})
      })
    } else {
      this.deleteFromUserBasket({ id: trip.id, trip})
    }
   }

   findIds(id : number, cnt : number) { //popraw to
    console.log(this.userBasket)
    let tmp = 0
    for (let item of this.userBasket) {
      if (item.id === id) {
        // this.deleteFromUserBasket(item)
        tmp = item.trip.reserved + cnt
        this.deleteFromUserBasket(item)
        if (cnt === 0) {
          return -1
        } else {
          return tmp
        }
      }
    }
    return cnt
   }

   deleteFromUserBasket(trip : any) {
    this.accountRef.doc(this.currUserID).update({
      basket: arrayRemove(trip)
    })
   }

   getUserInfo() : Observable<any>{
    return this.accountRef.doc(this.currUserID + '').valueChanges()
   }


   addToUserHistory(trip : any) {
    this.accountRef.doc(this.currUserID).update({
      bought: arrayUnion(trip)
    })
   }

   deleteFromUserHistory(trip : any) {
    this.accountRef.doc(this.currUserID).update({
      bought: arrayRemove(trip)
    })
   }

   changeRevieved(tripName: string | undefined) {
    let cnt = 0
    this.getUserInfo().subscribe(change => {
      console.log(change.bought)
      for (let item of change.bought) {
        let tmp
        if (tripName === item.name && item.reviewed === false) {
          console.log(item.reviewed, item.name)
          tmp = item
          this.deleteFromUserHistory(item)
          console.log(cnt)
          tmp.reviewed = true
          this.addToUserHistory(tmp)
        }
      }
    })
   }

   changeBanned(banned : boolean) {
    this.accountRef.doc(this.currUserID).update({
      isBanned: banned
    })
   }

   changeRoles(roles : any) {
    this.accountRef.doc(this.currUserID).update({
      role: roles.toString()
    })
   }

   LogIn(email : string, password : string) {
    this.angularFA.setPersistence(this.presistance).then(() => {
      this.angularFA
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate([''])
        window.alert("Udało ci się zalogować!")
      })
      .catch(err => {
        window.alert("Logowanie nie przebiegło po naszej myśli ;/")
        console.log(err.message)
      })
    })
   }

   SignOut() {
    this.angularFA
    .signOut()
    this.router.navigate([''])
   }

   isLogged(){
    this.userData.subscribe((user : any) => {
      if (user != null) 
        this.ifLogged = true;
      else
        this.ifLogged = false;
    })
   }

   ChangePresistence(updatedPresistence : any) {
    this.presistance = updatedPresistence
    this.presistenceRef.doc(0 + '').update({current: this.presistance})
    this.angularFA.setPersistence(this.presistance)
    console.log(updatedPresistence)
   }


}

