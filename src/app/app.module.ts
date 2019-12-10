import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CardsComponent } from "./components/cards/cards.component";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { EmployeeService } from './services/employee.service';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CardsComponent, CreateEmployeeComponent, EmployeeListComponent, EmployeeDetailsComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule {}
