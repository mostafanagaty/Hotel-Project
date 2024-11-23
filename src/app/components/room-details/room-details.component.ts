import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Room } from '../../models/room';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { RouterLink } from '@angular/router';
import { MultiplyPipe } from '../../pipes/multiply.pipe';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule,MultiplyPipe,RouterLink],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css',
})
export class RoomDetailsComponent {
  recievedDetailsRoom:Room[]=[]
  constructor(private _ApiProductsService:ApiProductsService){
  }
  ngOnInit() {
    this._ApiProductsService.getRoomByID(this._ApiProductsService.idRoom).subscribe(
      {
        next:(res)=>{
          this.recievedDetailsRoom=res
        }
      }
    )
  }

}
