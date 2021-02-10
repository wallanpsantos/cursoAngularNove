import { Component, OnInit } from "@angular/core";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private headersService: HeaderService) {}

  ngOnInit(): void {}

  get title(): string {
    return this.headersService.headerData.title;
  }

  get icon(): string {
    return this.headersService.headerData.icon;
  }

  get routeUrl(): string {
    return this.headersService.headerData.routeUrl;
  }
}
