import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //Login metodo
  login(email: string, contraseña: string) {
    this.fireauth.signInWithEmailAndPassword(email, contraseña).then(() => {
      localStorage.setItem('token', 'true')
      this.router.navigate(['dasbhboard'])
    }, err => {
      alert('ALGO A SALIDO MAL')
      this.router.navigate(['/login'])
    })
  }


  // Registro metodo
  registro(email: string, contraseña: string) {
    this.fireauth.createUserWithEmailAndPassword(email, contraseña).then
      (() => {
        alert('Registrado')
        this.router.navigate(['/login'])
      }, err => {
        alert('ALGO A SALIDO MAL')
        this.router.navigate(['/register'])
      })
  }


  // sing out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }, err => {
      alert('ALGO A SALIDO MAL')

    })
  }



}
