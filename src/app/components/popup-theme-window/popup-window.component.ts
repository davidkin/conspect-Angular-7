import { ThemeService } from './../../shared/services/theme.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
    private themeService: ThemeService
  ) {}

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

    const theme = {
      name: this.createThemeForm.value.themeName,
      description: this.createThemeForm.value.shortDescription
    };

    this.themeService.addNewTheme(theme);

    this.dialogRef.close();
  }
}
