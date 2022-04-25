import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://127.0.0.1:8000';
  constructor(private http:HttpClient) { }

  listProjetos():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/projeto/');
  }

  getProjeto(id:any){
    return this.http.get<any>(`${this.APIUrl}/projeto/${id}/`);
  }

  addProjeto(val:any){
    return this.http.post(this.APIUrl + '/projeto/',val);
  }

  updateProjeto(id:any, projeto:any){
    return this.http.put(`${this.APIUrl}/projeto/${id}/`, projeto);
  }

  deleteProjeto(id:any){
    return this.http.delete(`${this.APIUrl}/projeto/${id}/`);
  }
}
