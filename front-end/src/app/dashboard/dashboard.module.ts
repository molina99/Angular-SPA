import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {ChatComponent} from './chat/chat.component';
import {CardsComponent} from './cards/cards.component';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {UsersComponent} from './users/users.component';
import {PostUserComponent} from './post-user/post-user.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ChatComponent,
    CardsComponent,
    UsersComponent,
    PostUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class DashboardModule {
}
