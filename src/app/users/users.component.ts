import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UsersService } from '../services/users.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'doc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<UserModel>;
  selectedUser: FormControl;
  newUser: UserModel;
  fcName: FormControl;
  fcEmail: FormControl;
  mensajes: Array<string>;
  isModif: boolean;
  modifyUser: UserModel;

  constructor(private userService: UsersService) { }

  async ngOnInit() {
    this.getUsers();
    this.selectedUser = new FormControl();
    this.fcName = new FormControl();
    this.fcEmail = new FormControl();
    this.mensajes = ['Para añadir usuarios selecciona la opcion vacia'];
    this.isModif = false;
  }

  private async getUsers() {
    this.users = await this.userService.readAll();
  }

  private onSelectUser() {
    console.log(this.selectedUser.value);
  }

  private async btnAdd() {
    if (this.fcName.value && this.fcEmail.value) {
      this.newUser = await this.userService.create(new UserModel(null, this.fcName.value, this.fcEmail.value));
      console.log(this.newUser);
      this.getUsers();
      this.resetFcValues();
    }
  }

  private async onModifyUser() {
    if (this.selectedUser.value || isNaN(+this.selectedUser.value.id)) {
      this.modifyUser = await this.userService.update(+this.selectedUser.value.id,
         new UserModel(null, this.fcName.value, this.fcEmail.value));
      // this.isModif = false;
      // this.resetFcValues();
      this.getUsers();
    }
  }

  private onDeleteUser() {
    if (this.selectedUser.value || isNaN(+this.selectedUser.value.id)) {
      // Mirar porque no lo actualiza bien (await seguramente)
      this.userService.delete(+this.selectedUser.value.id);
      this.getUsers();
    }

  }

  private onModifyBtn() {
    this.isModif = true;
    this.fcName.setValue(this.selectedUser.value.name);
    this.fcEmail.setValue(this.selectedUser.value.email);
  }

  private resetFcValues() {
    this.fcName.setValue('');
    this.fcEmail.setValue('');
  }

}
