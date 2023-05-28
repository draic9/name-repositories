import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listItems: string[] = [];
  secondListItems: string[] = [];

  addItem() {
    // Logic to handle form submission and add the item to the listItems array
    const firstNameInput = (document.getElementById('firstName') as HTMLInputElement);
    const lastNameInput = (document.getElementById('lastName') as HTMLInputElement);

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    // const fullName = firstName + ' ' + lastName;
    // this.listItems.push(fullName);

    // Check if the submission is not empty
    if (firstName !== '' && lastName !== '') {
      const fullName = firstName + ' ' + lastName;
      this.listItems.push(fullName)
    }

    // Clear the form fields
    (document.getElementById('firstName') as HTMLInputElement).value = '';
    (document.getElementById('lastName') as HTMLInputElement).value = '';
  }
  title = 'name-bulletin';

  deleteItem(index: number) {
    this.listItems.splice(index, 1);
  }

  moveItem(index: number) {
    const itemToMove = this.listItems[index];
    this.secondListItems.push(itemToMove);
    this.deleteItem(index);
  }
}


