import { Component, OnInit,inject} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { GridComponentComponent } from '../../shared/common/grid-component/grid-component.component';
import { CommonModule } from '@angular/common';
import { PoEntity } from '../../scm/fabric/fabricModel';


@Component({
  selector: 'app-fabric',
  standalone: true,
  imports: [GridComponentComponent,CommonModule],
  templateUrl: './fabric.component.html',
  styleUrl: './fabric.component.css'
})
export class FabricComponent {
  
  public poData: PoEntity[] = []
  public apiUrl: string = 'https://localhost:7102/api/FabricPo/GetAllFabricPO';
  isShowSaveButton = false;
  isShowUpdateBtn = false;
  public headTitle: string = 'Fabric PO Data.';
 
  private http = inject(HttpClient);
  ngOnInit() {
    this.getFabricPO();
  }
  dispalyStyle = "none";

  getFabricPO() {
    debugger;
    this.http.get<PoEntity[]>(this.apiUrl).subscribe(
      (result) => {
        this.poData = result;
        
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
