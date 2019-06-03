import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.scss']
})
export class PopupWindowComponent implements OnInit {
  public submitted: boolean;
  public createThemeForm: FormGroup = this.formBuilder.group({
    themeName: [''],
    shortDescription: ['']
  });

constructor(
    private dialogRef: MatDialogRef<PopupWindowComponent>,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.submitted = false;
  }

  onClose() {
    this.dialogRef.close();
  }

  get form() {
    return this.createThemeForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    console.log('--- PopupWindowComponent: themeName', this.createThemeForm.value.themeName);
    console.log('--- PopupWindowComponent: shortDescription', this.createThemeForm.value.shortDescription);

    const theme = {
      name: this.createThemeForm.value.themeName,
      description: this.createThemeForm.value.shortDescription
    };

    this.localStorageService.setThemeInLocalStorage(theme);

    this.dialogRef.close();
  }
}
