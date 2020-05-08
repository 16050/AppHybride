import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  url = 'http://laboweb.ecam.be/notepad_s4/public/index.php/api/notes'

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('error');
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  findAll(): Observable<any> {
    return this.http.get(this.url,httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  findOne(id: string): Observable<any> {
    return this.http.get(this.url + '/' + id, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  newNotice(data): Observable<any> {
    return this.http.post(this.url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteNotice(id): Observable<any> {
    return this.http.delete(this.url + '/' + id, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editNotice(id, data): Observable<any> {
    return this.http.put(this.url + '/' + id, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
