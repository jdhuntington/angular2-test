import {enableProdMode} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import {AppServiceTodoList} from './services/app.service.todolist';
import {HttpModule} from '@angular/http';
import {TodoListComponent} from './components/todolist/todolist.component';

//enableProdMode();
platformBrowser().bootstrapModule(TodoListComponent, [HttpModule, AppServiceTodoList]);
