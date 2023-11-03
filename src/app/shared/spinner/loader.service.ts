import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";
import {NgxSpinnerService } from "ngx-spinner";

  
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(private spinner: NgxSpinnerService) { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //NgxSpinnerService.show()
      this.spinner.show();
      return next.handle(req).pipe(
        finalize(() => this.spinner.hide())
      );
    }

  


}
