import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus, AccountInfo } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loginDisplay = false;
  activeAccount : AccountInfo = null;

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) { }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  getActiveAccount() : AccountInfo {
    if (this.activeAccount !== undefined)
      this.checkAndSetActiveAccount();

    return this.activeAccount ?? this.checkAndSetActiveAccount();
  }

  // getUserNamefromActiveAccount() : string {
  //   if (this.activeAccount !== undefined)
  //     this.checkAndSetActiveAccount();

  //   return this.activeAccount.username;
  // }

  // getTokenLoggedUsername() : string {
  //   if (this.activeAccount !== undefined)
  //     this.checkAndSetActiveAccount();

  //   return this.activeAccount.username;
  // }

  private checkAndSetActiveAccount() : AccountInfo {
    this.activeAccount = this.authService.instance.getActiveAccount();

    if (!this.activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      const accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }

    return this.activeAccount;
  }
}
