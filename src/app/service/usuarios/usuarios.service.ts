import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dataEdit = new BehaviorSubject<Users>(null);
  botaoEdit = this.dataEdit.asObservable();


  constructor() { }

  getUsersList(usuarios: Users){
    this.dataEdit.next(usuarios);
  }
}
