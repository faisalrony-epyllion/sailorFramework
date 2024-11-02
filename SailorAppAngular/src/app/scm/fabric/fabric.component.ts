import { Component, OnInit,inject,AfterViewInit} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { GridComponentComponent } from '../../shared/common/grid-component/grid-component.component';
import { CommonModule } from '@angular/common';
import { PoEntity,dynamicHeader } from '../../scm/Model/fabricModel';
import { ScmServiceService  } from '../../scm/service/scm-service.service';

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

  getFabricPO() {
    this.service.getFabicPO().subscribe(
      (result) => {
        this.poData = result;
        this.initializeDataTable();
      },
      (error) => {
        console.error(error);
      }
    )
  }

  initializeDataTable() {
    $('#datatable-responsive').DataTable({
      paging: true,
      searching: true,
      responsive: true
    });
}


}
