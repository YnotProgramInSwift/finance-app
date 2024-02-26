import { Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
];
