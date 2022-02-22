import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  message!: string;
  displayName!: string;
  email!: string;
  age!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      displayName: new FormControl(null),
      age: new FormControl(null),
    })
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe((user) : void => {
        this.displayName = user.displayName;
        this.email = user.email;
        this.age = user.age;
      });
  }

  submit(): void {
    if (this.form.invalid) return;

    this.submitted = true;

    const user: UserModel = {
      email: this.form.value.email,
      displayName: this.form.value.displayName,
      age: this.form.value.age,
    };

    this.userService.updateUser(user).subscribe(() => {
      setTimeout(() => { this.submitted = false }, 1500)
    })
  }
}
