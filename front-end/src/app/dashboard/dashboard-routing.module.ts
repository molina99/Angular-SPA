import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardsComponent} from './cards/cards.component';
import {PostUserComponent} from './post-user/post-user.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: 'cards', component: CardsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'postUser', component: PostUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
