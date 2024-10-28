import { Component, OnInit,inject} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { GridComponentComponent } from '../../shared/common/grid-component/grid-component.component';
import { CommonModule } from '@angular/common';
import { PoEntity } from '../../scm/Model/fabricModel';
import { ScmServiceService  } from '../../scm/service/scm-service.service';


@Component({
  selector: 'app-fabric',
  standalone: true,
  imports: [GridComponentComponent,CommonModule],
  templateUrl: './fabric.component.html',
  styleUrl: './fabric.component.css'
})
export class FabricComponent {
  
  public poData: PoEntity[] = []
  isShowSaveButton = false;
  isShowUpdateBtn = false;
  public headTitle: string = 'Fabric PO Data.';
 
  private http = inject(HttpClient);
  constructor (private  service:ScmServiceService){}

  ngOnInit() {
    this.getFabricPO();
  }
  dispalyStyle = "none";

  

  getFabricPO() {
    debugger;
    this.service.getFabicPO().subscribe(
      (result) => {
        this.poData = result;
        
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
