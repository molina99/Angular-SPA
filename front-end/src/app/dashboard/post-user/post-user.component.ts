import {Component, HostListener, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {

  user: User = {
    names: '',
    lastNames: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      return this.user;
    }
  }

  postUser() {
    if (this.user.names && this.user.lastNames && this.user.email && this.user.password) {
      console.log(this.user);
      this.userService.postUser(this.user)
        .subscribe(
          res => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario registrado',
              showConfirmButton: false,
              timer: 1500
            });
            this.router.navigate(['/dashboard/users']);
          },
          err => {
            console.error(err);
          }
        );
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Debe completar todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.code === 'Enter') {
      event.preventDefault();
      this.postUser();
    }
  }
}
