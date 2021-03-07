import {Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit, Output} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeDataService} from '../employee-data/employee-data.service';

@Component({
    selector: 'app-table-employees',
    templateUrl: './table-employees.component.html',
    styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit, AfterViewInit {

    employees: any = [];

    @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;
    @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;

    headEmployees = ['ID', 'Nome', 'Email', 'Empresa', 'CPF', 'Permissão', ''];
    private previous: any = [];

    constructor(private cdRef: ChangeDetectorRef, private router: Router,
                private employeeDataService: EmployeeDataService) {
    }

    ngOnInit(): void {
        this.employeeDataService.getAllEmployee()
            .subscribe((data: any) => {
                this.employees = data;
                this.mdbTable.setDataSource(this.employees);
                this.employees = this.mdbTable.getDataSource();
                this.previous = this.mdbTable.getDataSource();
            });
    }

    ngAfterViewInit(): void {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    }

    goBackHome = () => {
        this.router.navigate(['home']);
    }

    goUpdateView = (id) => {
        this.router.navigate(['employee/' + id], {queryParams: {goBackView: 'table'}});
    }

}
