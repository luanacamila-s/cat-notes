import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../components/modal/modal.component';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const ref = this.modalService.open(ModalComponent);
    ref.componentInstance.show();
  }
}
