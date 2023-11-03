// import { Component, Inject, OnInit, inject } from '@angular/core';
// import {
//   FormBuilder,
//   FormGroup,
//   Validators
// } from '@angular/forms';
// import {
//   MAT_DIALOG_DATA,
//   MatDialogRef
// } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { EmployeeModel } from 'src/app/Models/EmployeeModel';
// import { EmployeeService } from 'src/app/services/employee.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-addEmployee',
//   templateUrl: './addEmployee.component.html',
//   styleUrls: ['./addEmployee.component.css'],
// })
// export class AddEmployeeComponent implements OnInit {
//   employeeForm!: FormGroup;
//   isActive: boolean = false;
//   department: string[] = [
//     'Software Developer',
//     'Data Engineering',
//     'Cloud Engineer',
//     'Support Engineer',
//     'Software Tester',
//   ];
//   selectedDepartment: string = ''
//   readonly numberP = /^[0-9]\d+$/;

//   dialog = inject(MatDialogRef);
//   route = inject(Router);
//   employeeService = inject(EmployeeService);
//   isEditMode: boolean = false;

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private form: FormBuilder,
//     private ref: MatDialogRef<AddEmployeeComponent>
//   ) { }

//   ngOnInit() {
//     this.employeeForm = this.form.group({

//       name: [this.data?.employee?.name || '', Validators.required],
//       department: [this.data?.employee?.department || '', Validators.required],
//       salary: [this.data?.employee?.salary || '', Validators.required],
//     });
//   }

//   onCloseDialog() {
//     this.ref.close();
//   }

//   // onSubmit() {
//   //   if (this.employeeForm.valid) {
//   //     const employee = this.employeeForm.value;

//   //     this.employeeService.addData(employee).subscribe({
//   //       next: (data) => {
//   //         console.log(data);
//   //         this.employeeForm.reset();
//   //         this.ref.close('save');
//   //       },
//   //     });
//   //     Swal.fire({
//   //       icon: 'success',
//   //       title: 'Submitted Successfully ',

//   //     })
//   //   }
//   //   if (this.employeeForm.invalid)
//   //     Swal.fire({
//   //       icon: 'error',
//   //       title: 'Oops...',
//   //       text: 'Please enter the Details..'
//   //     })
//   // }


//   // onSubmit() {
//   //   if (this.employeeForm.valid) {
//   //     const employee = this.employeeForm.value;
//   //     if (this.isEditMode) {
//   //       // Perform update operation
//   //       // Assuming your EmployeeService has an updateData method, similar to the addData method for adding new employees
//   //       this.employeeService.updateData(employee).subscribe({
//   //         next: (data) => {
//   //           console.log(data);
//   //           this.employeeForm.reset();
//   //           this.ref.close('save');
//   //           Swal.fire({
//   //             icon: 'success',
//   //             title: 'Updated Successfully ',
//   //           });
//   //         },
//   //       });
//   //     } else {
//   //       // Perform add operation
//   //       this.employeeService.addData(employee).subscribe({
//   //         next: (data) => {
//   //           console.log(data);
//   //           this.employeeForm.reset();
//   //           this.ref.close('save');
//   //           Swal.fire({
//   //             icon: 'success',
//   //             title: 'Submitted Successfully ',
//   //           });
//   //         },
//   //       });
//   //     }
//   //   } else {
//   //     Swal.fire({
//   //       icon: 'error',
//   //       title: 'Oops...',
//   //       text: 'Please enter the Details..'
//   //     });
//   //   }
//   // }



//   onSubmit() {
//     if (this.employeeForm.valid) {
//       const employee: EmployeeModel = this.employeeForm.value;
//       if (this.data && this.data.employee) {
//         const id = this.data.employee.id;
//         this.employeeService.updateData({ ...employee, id }).subscribe({
//           next: (data) => {
//             this.dialog.close('update');
//           },
//         });
//       } else { 
//         this.employeeService.addData(employee).subscribe({
//           next: (data) => {
//             this.dialog.close('save'); 
//           },
//         });

//       }
//       Swal.fire({
//         icon: 'success',
//         title: 'Submitted Successfully ',

//       })
//     }
//     if (this.employeeForm.invalid)
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please enter the Details..'
//       })
//   }
// }

// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { EmployeeModel } from 'src/app/Models/EmployeeModel';
// import { EmployeeService } from 'src/app/services/employee.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-addEmployee',
//   templateUrl: './addEmployee.component.html',
//   styleUrls: ['./addEmployee.component.css'],
// })
// export class AddEmployeeComponent implements OnInit {
//   employeeForm!: FormGroup;
//   department: string[] = [
//     'Software Developer',
//     'Data Engineering',
//     'Cloud Engineer',
//     'Support Engineer',
//     'Software Tester',
//   ];
//   readonly numberP = /^[0-9]\d+$/;
//   isEditMode: boolean = false;
//   editEmployee: EmployeeModel | undefined;

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public data: any,
//     private form: FormBuilder,
//     private dialogRef: MatDialogRef<AddEmployeeComponent>,
//     private employeeService: EmployeeService
//   ) { }

//   ngOnInit() {
//     this.employeeForm = this.form.group({
//       name: ['', Validators.required],
//       department: ['', Validators.required],
//       salary: ['', Validators.required],
//     });

//     if (this.data && this.data.employee) {
//       this.isEditMode = true;
//       this.editEmployee = { ...this.data.employee };
//       const { name, department, salary } = this.editEmployee!;
//       this.employeeForm.setValue({
//         name: name || '',
//         department: department || '',
//         salary: salary || '',
//       });
//     }
//   }


//   onCloseDialog() {
//     this.dialogRef.close();
//   }

//   onSubmit() {
//     if (this.employeeForm.valid) {
//       const employee: EmployeeModel = this.employeeForm.value;
//       if (this.isEditMode) {
//         this.updateEmployee(employee);
//       } else {
//         this.addEmployee(employee);
//       }
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Please enter the Details..',
//       });
//     }
//   }

//   private addEmployee(employee: EmployeeModel) {
//     this.employeeService.addData(employee).subscribe(() => {
//       this.dialogRef.close('save');
//       Swal.fire({
//         icon: 'success',
//         title: 'Added Successfully!',
//       });
//     });
//   }

//   private updateEmployee(employee: EmployeeModel) {
//     if (this.editEmployee) {
//       const id = this.editEmployee.id;
//       this.employeeService.updateData({ ...employee, id }).subscribe(() => {
//         this.dialogRef.close('update');

//       });
//     }
//   }
// }

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/Models/EmployeeModel';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addEmployee',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  initialFormValue: any;
  department: string[] = [
    'Software Developer',
    'Data Engineering',
    'Cloud Engineer',
    'Support Engineer',
    'Software Tester',
  ];
  readonly numberP = /^[0-9]\d+$/;
  isEditMode: boolean = false;
  editEmployee: EmployeeModel | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private form: FormBuilder,
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private employeeService: EmployeeService
  ) { 

  }

  ngOnInit() {
    this.employeeForm = this.form.group({
      name: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });

    if (this.data && this.data.employee) {
      this.isEditMode = true;
      this.editEmployee = { ...this.data.employee };
      const { name, department, salary } = this.editEmployee!;
      this.employeeForm.setValue({
        name: name || '',
        department: department || '',
        salary: salary || '',
      });
    }

    this.initialFormValue = this.employeeForm.value;
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  // onSubmit() {
  //   if (this.employeeForm.valid) {
  //     const employee: EmployeeModel = this.employeeForm.value;
  //     if (this.isEditMode) {
  //       if (employee) {
  //         this.updateEmployee(employee);
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Updated Successfully ',

  //         })
  //       }
  //       else if (!employee) {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Nothing is Changed'
  //         })
  //       }

  //     } else {
  //       this.addEmployee(employee);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Submitted Successfully ',

  //       })
  //     }

  //   }
  //   if (this.employeeForm.invalid)
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Please enter the Details..'
  //     })
  // }
  // onSubmit() {
  //   if (this.employeeForm.valid) {
  //     const employee: EmployeeModel = this.employeeForm.value;
  //     if (this.isEditMode) {
  //       if (employee) {
  //         this.updateEmployee(employee);
  //         Swal.fire({
  //           icon: 'success',
  //           title: 'Updated Successfully',
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: 'error',
  //           title: 'Nothing is Changed'
  //         });
  //       }
  //     } else {
  //       this.addEmployee(employee);
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Submitted Successfully',
  //       });
  //     }
  //   } else {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Please enter the Details..'
  //     });
  //   }
  // }


  onSubmit() {
    if (this.employeeForm.valid) {
      const employee: EmployeeModel = this.employeeForm.value;
      if (this.isEditMode) {
        if (this.isFormChanged()) {
           
          this.updateEmployee(employee);
          Swal.fire({
            icon: 'success',
            title: 'Updated Successfully',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Nothing is Changed'
          });
        }
      } else {
        this.addEmployee(employee);
        this.dialogRef.close("save")
        Swal.fire({
          icon: 'success',
          title: 'Submitted Successfully',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter the Details..'
      });
    }
  }


  private isFormChanged(): boolean {
    const currentValue = this.employeeForm.value;
    return JSON.stringify(currentValue) !== JSON.stringify(this.initialFormValue);
  }

  private addEmployee(employee: EmployeeModel) {
    this.employeeService.addData(employee).subscribe(() => {
      this.dialogRef.close('save');
      // setTimeout(() => {
      //   Swal.fire({
      //     icon: 'success',
      //     title: 'Added',
      //     text: 'Successfully Added..',
      //     timer: 5000,
      //     timerProgressBar: true,
      //     toast: true,
      //     position: 'top-right',
      //     showConfirmButton: false,
      //     showCloseButton: true,
      //     customClass: {
      //       container: 'alert-container',
      //     },
      //   });
      // }, 10000);
    });
  }

  private updateEmployee(employee: EmployeeModel) {
    if (this.editEmployee) {
      const id = this.editEmployee.id;
      this.employeeService.updateData({ ...employee, id }).subscribe(() => {
        this.dialogRef.close('update');
        //   setTimeout(() => {
        //     Swal.fire({
        //       icon: 'success',
        //       title: 'Updated',
        //       text: 'Successfully Updated..',
        //       timer: 5000,
        //       timerProgressBar: true,
        //       toast: true,
        //       position: 'top-right',
        //       showConfirmButton: false,
        //       showCloseButton: true,
        //       customClass: {
        //         container: 'alert-container',
        //       },
        //     });
        //   });
      });
    }
  }
}
