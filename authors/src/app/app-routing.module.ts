import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import * as fromAuthors from './author';

import { environment } from '../environments/environment';

const enableTracing = true && !environment.production;

const routes: Routes = [
	{
		path: '',
		redirectTo: 'authors',
		pathMatch: 'full'
	},
	{
		path: 'authors',
		children: [
			{
				path: '',
				component: fromAuthors.AuthorListComponent
			},
			{
				path: 'new',
				component: fromAuthors.AuthorNewComponent
			},
			{
				path: ':author_id',
				component: fromAuthors.AuthorEditComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		enableTracing: enableTracing
	})],
	exports: [RouterModule]
})
export class AppRoutingModule {}