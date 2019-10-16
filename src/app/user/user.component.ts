import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  error='';

  ngOnInit() {
    this.findUser();
  }

  findUser() {
    //const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.userService.getUser(id).pipe(first()).subscribe(user => {
      this.user = user;
    },
    error => {
     this.error= error;
    console.log(this.error + "in errrors");
  });
}
}