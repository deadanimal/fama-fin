import { Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementComponent } from './management/management.component';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'analytics',
                component: AnalyticsComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'management',
                component: ManagementComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'audit',
                component: AuditComponent
            },
            {
                path: 'general-ledger',
                component: GeneralLedgerComponent
            },
            {
                path: 'investment',
                component: InvestmentComponent
            },
            {
                path: 'payroll',
                component: PayrollComponent
            },
            {
                path: 'cashbook',
                component: CashbookComponent
            },
            {
                path: 'payables',
                component: PayablesComponent
            },
            {
                path: 'purchasing',
                component: PurchasingComponent
            },
            {
                path: 'accounting',
                component: AccountingComponent
            },
            {
                path: 'stock',
                component: StockComponent
            },
            {
                path: 'claim',
                component: ClaimComponent
            },
            {
                path: 'deposit',
                component: DepositComponent
            },
            {
                path: 'trading',
                component: TradingComponent
            },
            {
                path: 'budget',
                component: BudgetComponent
            }
        ]
    }
]