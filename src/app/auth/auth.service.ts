import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const PROTOCOL = environment.protocol;
const PORT = environment.port;
const HOST = environment.host;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${PROTOCOL}://${HOST}:${PORT}/`;
  authToken: { success: boolean, token: string } = null;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get IsAuthenticated(): boolean {
    return this.authToken.success;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    const body = { name: user, password: pass };
    return this.http.post<{ success: boolean, token: string }>(this.baseUrl + 'login', body, this.httpOptions)
      .pipe(map(response => {
        this.authToken.token = response.success ? response.token : null;
        return response.success;
      }));
  }

  clear(): void {
    this.authToken = null;
  }
}
