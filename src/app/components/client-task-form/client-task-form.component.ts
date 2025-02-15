import { Component, Injectable, Input, OnInit } from '@angular/core';
import {
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/models/users';
import { UserDataService } from 'src/app/services/user-data.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ClientDataService } from 'src/app/services/client-data.service';
import { CTask } from 'src/app/models/client-tasks';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-client-task-form',
  templateUrl: './client-task-form.component.html',
  styleUrls: ['./client-task-form.component.css'],
})
export class ClientTaskFormComponent implements OnInit {
  @Input() user: User;

  model1: string;
  model2: string;
  currentClient: any;
  title: string = 'We have got your request.';
  addTaskForm: FormGroup;
  tasksCollection: AngularFirestoreCollection<CTask>;

  constructor(
    public userDataService: UserDataService,
    public clientDataService: ClientDataService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      helpType: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      comments: new FormControl('', Validators.required),
      isUrgent: new FormControl(''),
    });

    let loggedUser = JSON.parse(localStorage.getItem('user')!);
    this.userDataService.getAllUserData().subscribe((users) => {
      users.forEach((user) => {
        if (user.uid === loggedUser['uid']) {
          this.currentClient = user;
        }
        return this.currentClient;
      });
    });
  }

  addToClientTask() {
    if (this.addTaskForm.invalid) {
      return this.addTaskForm.markAllAsTouched();
    }
    this.clientDataService.sendTaskData(this.addTaskForm.value);
    this.addTaskForm.reset();
    this.modalService.open();
  }
}
