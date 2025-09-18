import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./sections/header/header";
import { Hero } from "./sections/hero/hero";
import { Cards } from "./sections/cards/cards";
import { Info } from "./sections/info/info";
import { Form } from "./sections/form/form";
import { Footer } from "./sections/footer/footer";
import { Banner } from "./sections/banner/banner";
import { Services } from "./sections/services/services";
import { Breadcrumbs } from "./shared/breadcrumbs/breadcrumbs";
import { AccordionComponent } from "./sections/acordion/acordion";
import { TagsInfo } from "./sections/tags-info/tags-info";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Cards, Info, Form, Footer, Banner, Services, Breadcrumbs, AccordionComponent, TagsInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pruebaTecnica';
}
