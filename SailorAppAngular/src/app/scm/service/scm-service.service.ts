import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { PoEntity } from '../../scm/Model/fabricModel';

@Injectable({
  providedIn: 'root'
})
export class ScmServiceService {

  constructor(private http:HttpClient) { }
  getFabicPO(){
 
    return this.http.get<PoEntity[]>("https://localhost:7102/api/FabricPo/GetAllFabricPO");
  }
}
