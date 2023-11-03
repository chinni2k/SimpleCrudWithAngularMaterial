import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { AddEmployeeComponent } from '../addEmployee/addEmployee.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('TABLE') table!: ElementRef;
  employee: EmployeeModel[] = [];

  displayedColumns: string[] = ['id', 'name', 'department', 'salary', 'actions'];

  filteredEmployee: EmployeeModel[] = this.employee;

  user$!: Observable<EmployeeModel[]>; // Assuming this is the Observable to fetch employee data

  constructor(
    private _employeeService: EmployeeService,
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllData();
    this.user$ = this._employeeService.getAll();
  }

  openDialog() {
    this._dialog
      .open(AddEmployeeComponent)
      .afterClosed()
      .subscribe((value) => {
        if (value === 'save') {
          this.getAllData();
        }
      });
  }

  getAllData() {
    this._employeeService.getAll().subscribe({
      next: (data) => {
        this.employee = data;

        console.log(...data);
        
        this.filteredEmployee = data; // Initially set filteredEmployee to all employee data
      },
    });
  }

  onEdit(employee: EmployeeModel) {
    Swal.fire({
      icon: 'question',
      title: 'Are you sure you want to update the file?',
      showCancelButton: true,
      confirmButtonText: 'Yes, update it',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        const dialogRef: MatDialogRef<AddEmployeeComponent> = this._dialog.open(
          AddEmployeeComponent,
          {
            data: {
              employee: { ...employee },
            },
          }
        );

        this._employeeService.updateData(employee).subscribe((data) => {
          console.log(data);
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result === 'update') {
            this.getAllData();
          }
        });
      }
    });
  }

  onDelete(employee: EmployeeModel) {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it',
        cancelButtonText: 'No, cancel',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          let Token = employee.id;
          this._employeeService.deleteData(Token).subscribe((data) => {
            console.log(data);
            this.getAllData();
          });

          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // Handling dismissals if needed
        }
      });
  }

  // doFilter(filterValue: string) {
  //   // Convert the filter value to lowercase for case-insensitive filtering
  //   const filterText = filterValue.toLowerCase();
  //   this.filteredEmployee = this.employee.filter(
  //     (emp) =>
  //       emp.name.toLowerCase().includes(filterText) ||
  //       emp.department.toLowerCase().includes(filterText)
  //   );
  // }


  // exportExcel() {
  //   // Use SweetAlert2 to get the file name
  //   Swal.fire({
  //     title: 'Enter file name:',
  //     input: 'text',
  //     inputPlaceholder: 'Enter a file name...',
  //     showCancelButton: true,
  //     confirmButtonText: 'Export',
  //     cancelButtonText: 'Cancel',
  //     inputValidator: (value) => {
  //       if (!value) {
  //         return 'Please enter a file name';
  //       }
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const fileName = result.value || 'SheetJS';

  //       // Export the data
  //       const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
  //       const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //       /* save to file */
  //       XLSX.writeFile(wb, `${fileName}.xlsx`);
  //     }
  //   });
  // }

  // exportExcel() {
  //   const columnsToExclude: string[] = ['actions']; // Add any column names you want to exclude here

  //   // Temporarily remove the "Actions" column for export
  //   const originalDisplayedColumns = [...this.displayedColumns];
  //   this.displayedColumns = this.displayedColumns.filter((column) => !columnsToExclude.includes(column));

  //   // Use SweetAlert2 to get the file name
  //   Swal.fire({
  //     title: 'Enter file name:',
  //     input: 'text',
  //     inputPlaceholder: 'Enter a file name',
  //     showCancelButton: true,
  //     confirmButtonText: 'Export',
  //     cancelButtonText: 'Cancel',
  //     inputValidator: (value) => {
  //       if (!value || value.trim().length === 0) {
  //         return 'Please enter a valid file name';
  //       }
  //       return null; // Return null for valid input
  //     },
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const fileName = result.value || 'SheetJS';

  //       // Export the data
  //       const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
  //       const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //       // Restore the original displayed columns
  //       this.displayedColumns = originalDisplayedColumns;

  //       /* save to file */
  //       XLSX.writeFile(wb, `${fileName}.xlsx`);
  //     } else {
  //       // If the user clicks Cancel, restore the original displayed columns
  //       this.displayedColumns = originalDisplayedColumns;
  //     }
  //   });
  // }
  exportExcel() {
    const columnsToExclude: string[] = ['actions']; // Add any column names you want to exclude here

    // Temporarily remove the "Actions" column for export
    const originalDisplayedColumns = [...this.displayedColumns];
    this.displayedColumns = this.displayedColumns.filter((column) => !columnsToExclude.includes(column));

    // Use SweetAlert2 to get the file name
    Swal.fire({
      title: 'Enter file name:',
      input: 'text',
      inputPlaceholder: 'Enter a file name...',
      showCancelButton: true,
      confirmButtonText: 'Export',
      cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (!value || value.trim().length === 0) {
          return 'Please enter a valid file name';
        }
        return null; // Return null for valid input
      },
      customClass: {
        input: 'custom-swal2-input', // Add the custom CSS class to the input element
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const fileName = result.value || 'SheetJS';

        // Export the data
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        // Restore the original displayed columns
        this.displayedColumns = originalDisplayedColumns;

        /* save to file */
        XLSX.writeFile(wb, `${fileName}.xlsx`);
      } else {
        // If the user clicks Cancel, restore the original displayed columns
        this.displayedColumns = originalDisplayedColumns;
      }
    });
  }



}
