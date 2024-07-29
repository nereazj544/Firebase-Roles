# FirebaseRoles

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

# UserAdmin

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

# ROLES DE USUARIOS CON FIREBASE

# PASO A SEGUIR

1. Crear el projecto: ``ng new [nombre]``
    - Abrirlo en el editor que se va a editar
2. Entrear en FireBase y se crea un proyecto
    - Selecionar el modulo que se va a usar
    - Registrar la app
3. En la terminal se entra en el projecto que se creo y se escribe: ``ng add @angular/fire``
    - Se seleciona ``Firestore``, ``Authentication``
    - si no se tiene _environments_ para eso se crea: `` ng g environments ``
4. En el archivo de _environments_ se añade lo que te genera FireBase en el segundo paso.
5. En _app.module.ts_
    - ``import { AngularFireModule } from '@angular/fire/compat';``
    - ``import { environment } from 'src/environments/environment';``
    - en los imports:
     - ``AngularFireModule.initializeApp(environment.firebase)``
6. Crear: ``ng g s shared/auth``
    - 

> [!IMPORTANT]
> https://youtu.be/O0uVYhRE850?list=PL1UHgDbN7Tm4SZ6yLE9yDI-YDtf02uc7d