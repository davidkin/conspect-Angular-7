import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Injectable()
export class PopupService {
  constructor(
    private dialog: MatDialog
  ) {}

  createPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    return dialogConfig;
  }
}
