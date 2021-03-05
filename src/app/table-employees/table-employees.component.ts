import {Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {Router} from '@angular/router';

@Component({
    selector: 'app-table-employees',
    templateUrl: './table-employees.component.html',
    styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit, AfterViewInit {

    elements2: any = [
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },
        {
            id: 1,
            name: 'Mark',
            email: 'lucas@gmail.com',
            cpf: 'Otto',
            company: 'Virtus',
            jobRole: '@mdo',
            salary: 'R$ 1000',
            permission: 'USER',
            util: 'editar/deletar'
        },

    ];

    @ViewChild(MdbTablePaginationComponent, {static: true}) mdbTablePagination: MdbTablePaginationComponent;
    @ViewChild(MdbTableDirective, {static: true}) mdbTable: MdbTableDirective;
    previous: any = [];
    headElements2 = ['ID', 'Nome', 'Email', 'CPF', 'Empresa', 'Cargo', 'Salário', 'Permissão', ''];

    constructor(private cdRef: ChangeDetectorRef, private router: Router) {
    }

    ngOnInit(): void {
        this.mdbTable.setDataSource(this.elements2);
        this.elements2 = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
    }

    ngAfterViewInit(): void {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(8);
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    }

    goBack = () => {
        this.router.navigate(['home']);
    }
}
