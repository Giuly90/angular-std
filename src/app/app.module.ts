import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from "./components/cards/cards.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { EmployeeService } from './services/employee.service';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, CardsComponent, CreateEmployeeComponent, EmployeeListComponent, EmployeeDetailsComponent, UpdateEmployeeComponent],
  bootstrap: [AppComponent],
  providers: [EmployeeService]
})
export class AppModule {}
