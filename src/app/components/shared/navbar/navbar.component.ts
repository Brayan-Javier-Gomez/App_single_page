import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
buscarHeroe(termino: string){
console.log(termino);
this.route.navigate(['/search', termino]);
}

}
