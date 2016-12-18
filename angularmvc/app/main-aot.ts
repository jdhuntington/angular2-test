import { platformBrowser } from '@angular/platform-browser';
import { TodoListModuleNgFactory } from '../aot/app/todolist.module.ngfactory';
platformBrowser().bootstrapModuleFactory(TodoListModuleNgFactory);