import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./../../components/template/header/header.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private headersService: HeaderService) {
    headersService.headerData = {
      title: "Home",
      icon: "home",
      routeUrl: "",
    };
  }

  ngOnInit(): void {}
}
