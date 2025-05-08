import { Component } from '@angular/core';
import '@nectary/components/card-v2';

@Component({
  selector: 'uncontrolled-form-component',
  templateUrl: './UncontrolledForm.component.html',
  styles: [`
    :host {
      display: contents;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 300px;
    }
  `]
})
export class UncontrolledFormComponent {
  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');
    const checkboxDefault = formData.get('checkbox-default');
    const checkboxValue = formData.get('checkbox-value');
    const radio = formData.get('radio');
    const selectMenu = formData.getAll('select-menu');
    const datePicker = formData.get('date');
    const textarea = formData.get('textarea');

    const detail = {
      email,
      password,
      checkboxDefault,
      checkboxValue,
      radio,
      selectMenu,
      datePicker,
      textarea,
    };

    window.dispatchEvent(new CustomEvent('uncontrolled-form-submit', { detail }));
  }
}
