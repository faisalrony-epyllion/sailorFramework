import { HttpClient  } from '@angular/common/http';
import { Component, OnInit,inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

interface PoData {
  po_no: string;
  pr_no: string;
  po_date: Date;
  supplier_name: string;

}
@Component({
    templateUrl: './fabricPO.component.html',
    standalone: true,
    imports: [
        CommonModule
        ]
})
export class AppComponentFabric implements OnInit {
  public poData: PoData[] = [];
  public apiUrl: string = 'https://localhost:7102/api/FabricPo/GetAllFabricPO';
  isShowSaveButton = false;
  isShowUpdateBtn = false;

  private http = inject(HttpClient);

  ngOnInit() {
    this.getFabricPO();
  }
  dispalyStyle = "none";

  openPopUp() {
    this.dispalyStyle = "block";
    this.isShowSaveButton = true;
    this.isShowUpdateBtn = false;
    (document.getElementById("ProductModalLabel") as HTMLInputElement).innerHTML = "Save PO";
  }

  openPopupUpdate() {
    this.dispalyStyle = "block";
    this.isShowSaveButton = false;
    this.isShowUpdateBtn = true;
    (document.getElementById("ProductModalLabel") as HTMLInputElement).innerHTML = "Update PO";
  }

  closePopUp() {
    this.dispalyStyle = "none";
  }

  
//   getFabricPO() {
//     debugger;
//     this.http.get<PoData[]>(this.apiUrl).subscribe(
//       (result) => {
//         this.poData = result;
//       },
//       (error) => {
//         console.error(error);
//       }
//     )
//   }

getFabricPO() {
    debugger;
    this.http.get<PoData[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Observable error:', error); 
        return of([]); 
      })
    ).subscribe(
      (result) => {
        console.log('API response:', result);
        this.poData = result;
      }
    );
  }

  getPObyId(val: any) {
    this.isShowSaveButton = false;
    this.isShowUpdateBtn = true;
    this.http.get<PoData>(this.apiUrl + '/' + val).subscribe(
      (result) => {
        (document.getElementById("POId") as HTMLInputElement).value = result.po_no.toString();
        (document.getElementById("Name") as HTMLInputElement).value = result.po_no;
        (document.getElementById("PO") as HTMLInputElement).value = result.po_no.toString();
      },
      (error) => {
        console.error(error)
      }
    )
  }

  updatePO() {
    let PO = {
      id: (document.getElementById("ProductId") as HTMLInputElement).value,
      name: (document.getElementById("ProductName") as HTMLInputElement).value,
      price: (document.getElementById("Price") as HTMLInputElement).value
    }

    return this.http.put(this.apiUrl, PO).subscribe(
      response => {
        if (response) {
          alert("PO is Updated")
        }
        else {
          alert("PO Updation Failed")
        }
      }
    )
  }

  deletePO(val: any) {
    return this.http.delete(this.apiUrl + '/' + val).subscribe(
      res => {
        if (res) {
          alert("PO is Deleted")
        }
        else {
          alert("PO is not Deleted")
        }
      }
    )
  }

  createPO() {
    let PO = {
      name: (document.getElementById("POName") as HTMLInputElement).value,
      price: (document.getElementById("PO") as HTMLInputElement).value
    }

    return this.http.post(this.apiUrl, PO).subscribe(res => {
      if (res) {
        alert("PO is Saved");
      }
      else {
        alert("PO is not Saved");
      }
    })
  }

  title = 'angularapp.client';
}
