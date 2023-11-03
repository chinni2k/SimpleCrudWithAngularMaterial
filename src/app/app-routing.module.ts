import { Injectable, NgModule } from '@angular/core';
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notFound/notFound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  }, {
    path: 'about',
    component: AboutComponent,
    title: 'About Us'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact',
  }, 
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found.',
  },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  override updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      document.title = `RMS - ${title}`;
    } else {
      document.title = `RMS - Home`;
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule { }
