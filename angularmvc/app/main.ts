
//import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TodoListModule } from './todolist.module';

//enableProdMode();
platformBrowserDynamic().bootstrapModule(TodoListModule);

