import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios/usuarios.service';
import { Users } from '../models/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: Users[];
  collection = {count: 10, data: []};
  constructor(public usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.populationUsers();
  }

  populationUsers(){
    for(let i = 0; i < this.collection.count; i++){
      this.collection.data.push({
        id: i,
        name: 'teste' +i,
        email: 'email' + i + '@contactura.com',
        admin: 'teste' + i,
      });
    }
    this.usersList = this.collection.data;
    console.log(this.usersList);
  }

  editUsuarios(usuarios: Users){
    console.log('edit esta funcionando', usuarios);
    this.usuariosService.getUsersList(usuarios);
    this.router.navigate(['/cadastro-usuarios']);
  }

  deleteUsers(usuarios: Users){
    Swal.fire({
      title: 'Você tem certeza?',
      text: 'Deseja mesmo deletar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Deletado com sucesso!',
        );
      }
    })
  }

}
