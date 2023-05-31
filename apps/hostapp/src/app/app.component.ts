import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@mobileapp/shared/data-access-user';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'mobileapp-ng-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `
})
export class AppComponent implements OnInit {
  title = 'hostapp';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.isLoggedIn$.pipe(distinctUntilChanged()).subscribe(async (loggedIn) => {
      // Queue the navigation after initialNavigation blocking is completed
      setTimeout(() => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
    });
  }
}
