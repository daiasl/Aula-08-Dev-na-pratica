import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators/';
import { throwError } from 'rxjs';

export class EntityService<T> {

  constructor(
    protected http: HttpClient,
    protected entityUrl: string,
  ) {
    this.http = http;
    this.entityUrl = entityUrl;
  }

  public list() {
    return this.http.get<T[]>(this.entityUrl, {}).pipe(this.defaultCatch());
  }

  public get(id: any) {
    return this.http.get<T[]>(`${this.entityUrl}/${id}`, {}).pipe(this.defaultCatch());
  }

  public insert(entity: T) {
    return this.http.post<T[]>(this.entityUrl, entity).pipe(this.defaultCatch());
  }

  public update(id: any, entity: T) {
    return this.http.put<T[]>(`${this.entityUrl}/${id}`, entity).pipe(this.defaultCatch());
  }

  public delete(id: any) {
    return this.http.delete<T[]>(`${this.entityUrl}/${id}`, {}).pipe(this.defaultCatch());
  }

  public defaultCatch() {
    return catchError((err: any) => {
      if (err) {
        const summary =  err.status ? String(err.status) : 'Error';
        const detail = (err.error && err.error.message) || err.statusText || err.message || 'Error';
        console.log(summary, detail);
      }
      return throwError(err);
    });
  }
}

