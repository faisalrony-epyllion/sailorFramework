import { Component, OnInit,inject,AfterViewInit} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { GridComponentComponent } from '../../shared/common/grid-component/grid-component.component';
import { CommonModule } from '@angular/common';
import { PoEntity,dynamicHeader } from '../../scm/Model/fabricModel';
import { ScmServiceService  } from '../../scm/service/scm-service.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

declare var $: any;
@Component({
  selector: 'app-fabric',
  standalone: true,
  imports: [GridComponentComponent,CommonModule],
  templateUrl: './fabric.component.html',
  styleUrl: './fabric.component.css'
})
export class FabricComponent {
  
  public poData: PoEntity[] = []
  public tableHeaders = dynamicHeader;
  public headTitle: string = 'Fabric PO Data.';
  isShowSaveButton = false;
  isShowUpdateBtn = false;
  
 
  private http = inject(HttpClient);
  constructor (private  service:ScmServiceService){}

  ngOnInit() {
    this.getFabricPO();
  }
  dispalyStyle = "none";

  // getFabricPO() {
  //   debugger;
  //   this.service.getFabicPO().subscribe(
  //     (result) => {
  //       this.poData = result;
  //       this.initializeDataTable();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   )
  // }

  getFabricPO() {
    debugger;
    this.service.getFabicPO().pipe(
      tap((result) => {
        this.poData = result;
      }),
      tap(() => this.initializeDataTable()), 
      catchError((error) => {
        console.error('Error fetching Fabric PO data:', error);
        return of([]); 
      })
    ).subscribe();
  }

  initializeDataTable() {
    $('#datatable-responsive').DataTable({
      paging: true,
      searching: true,
      responsive: true
    });
}


}
