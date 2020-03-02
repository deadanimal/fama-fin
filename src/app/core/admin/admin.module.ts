import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule, 
  BsDatepickerModule,
  ModalModule
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as mapbox from 'mapbox-gl';
(mapbox as any).accessToken = environment.mapbox.accessToken

import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ManagementComponent } from './management/management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ReportComponent } from './report/report.component';
import { AuditComponent } from './audit/audit.component';
import { GeneralLedgerComponent } from './general-ledger/general-ledger.component';
import { InvestmentComponent } from './investment/investment.component';
import { PayrollComponent } from './payroll/payroll.component';
import { CashbookComponent } from './cashbook/cashbook.component';
import { PayablesComponent } from './payables/payables.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { AccountingComponent } from './accounting/accounting.component';
import { StockComponent } from './stock/stock.component';
import { ClaimComponent } from './claim/claim.component';
import { DepositComponent } from './deposit/deposit.component';
import { TradingComponent } from './trading/trading.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementComponent,
    AnalyticsComponent,
    ReportComponent,
    AuditComponent,
    GeneralLedgerComponent,
    InvestmentComponent,
    PayrollComponent,
    CashbookComponent,
    PayablesComponent,
    PurchasingComponent,
    AccountingComponent,
    StockComponent,
    ClaimComponent,
    DepositComponent,
    TradingComponent,
    BudgetComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    HttpClientModule,
    LeafletModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
