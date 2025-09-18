import { Component } from '@angular/core';
import { GitIco } from "../../shared/icons/git";
import { UserQuestionIco } from "../../shared/icons/user-question";
import { CuidaIco } from "../../shared/icons/cuida";
import { UsersIco } from "../../shared/icons/users";

@Component({
  selector: 'app-services',
  imports: [GitIco, UserQuestionIco, CuidaIco, UsersIco],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
