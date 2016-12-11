import { NgModule } from '@angular/core';
import { AppServiceTodoList } from './services/app.service.todolist';
import { HttpModule } from '@angular/http';
import { TodoListComponent } from './components/todolist/todolist.component';

@NgModule({
    imports: [HttpModule],
    declarations: [TodoListComponent ],
    providers: [AppServiceTodoList ],
    bootstrap: [TodoListComponent ]
})
export class TodoListModule { }