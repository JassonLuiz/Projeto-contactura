import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.putEventsMenu();
  }

  ngOnDestroy(): void{
    this.reloadBar();
  }

  putEventsMenu(){
    const menuDesktop = document.getElementById('menu-desktop');
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.addEventListener('click', function(){
      menuDesktop.classList.toggle('active');
    });
  }

   logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  reloadBar(){
    window.location.reload();
  }

}
