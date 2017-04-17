import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {ArticleComponent} from './pages/article/article.component';

const appRoutes: Routes =[
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'article',
        component: ArticleComponent
    },
    { path: 'article/:id', component: ArticleComponent
    /*,
        children: [
        { path: '', redirectTo: 'child-one', pathMatch: 'full' },
        { path: 'child-two', component: ChildTwo,
            children: [
            { path: '', redirectTo: 'child-one', pathMatch: 'full' },
            { path: 'child-one', component: ChildOne },
            { path: 'child-two-nested', component: ChildTwoNested }
            ]
        }
        ]*/
    }

]

// tslint:disable-next-line:eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);