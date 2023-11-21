import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagr-not-found',
  templateUrl: './pagr-not-found.component.html',
  styleUrls: ['./pagr-not-found.component.scss']
})
export class PagrNotFoundComponent implements OnInit {
  public mgsErr !:string;
  constructor(private _routes:ActivatedRoute) { }

  ngOnInit(): void {
console.log( this._routes.snapshot.data);

   this.mgsErr = this._routes.snapshot.data['msg']
  }

}
