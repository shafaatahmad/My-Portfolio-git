import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { Main } from "./main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
