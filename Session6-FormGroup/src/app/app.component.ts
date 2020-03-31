import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Session6-FormGroup';

  fullname = '';
  emailaddress = '';
  password = '';
  conpassword = '';
  housenumber = '';
  street = '';
  city = '';

  required(requiredForm) {
    console.log(requiredForm);
  }
}
