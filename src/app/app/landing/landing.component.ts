import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "../../footer/footer.component";
import {Hoja1Component} from "../hoja1/hoja1.component";
import {NavComponent} from "../../nav/nav.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FooterComponent, Hoja1Component, NavComponent, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
