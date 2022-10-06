import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: Auth
  ) { }

  async login({email, password}:any){
    try {
      const user = await  signInWithEmailAndPassword(
        this.auth,
        email,
        password
       );
       return user;
    } catch (error) {
      return null;
    }
  }

  logOut(){
    return signOut(this.auth);
  }


}//fin
