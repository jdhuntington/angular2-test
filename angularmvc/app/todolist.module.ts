import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppServiceTodoList } from './services/app.service.todolist';
import { TodoListComponent } from './components/todolist/todolist.component';
//import { HttpHelpers } from './utils/HttpHelpers';

@NgModule({
    id: 'ToDoList',
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [TodoListComponent/*, HttpHelpers*/ ],
    providers: [AppServiceTodoList ],
    bootstrap: [TodoListComponent ]
})
export class TodoListModule { }