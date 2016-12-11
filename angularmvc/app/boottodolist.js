"use strict";
var platform_browser_1 = require('@angular/platform-browser');
var app_service_todolist_1 = require('./services/app.service.todolist');
var http_1 = require('@angular/http');
var todolist_component_1 = require('./components/todolist/todolist.component');
//enableProdMode();
platform_browser_1.platformBrowser().bootstrapModule(todolist_component_1.TodoListComponent, [http_1.HttpModule, app_service_todolist_1.AppServiceTodoList]);
//# sourceMappingURL=boottodolist.js.map