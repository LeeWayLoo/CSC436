import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchApiComponent } from './search-api/search-api.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchHistoryService } from './services/search-history.service';

const routes: Routes = [
	{ path: 'search', component: SearchApiComponent },
	{ path: 'history', component: SearchHistoryComponent },
	{ path: '**', redirectTo: 'search', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
	SearchApiComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	FormsModule,
	HttpModule
  ],
  providers: [SearchHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
