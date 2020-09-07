import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.scss"],
})
export class ProductCreateComponent implements OnInit {
  atributoLegal = "Estpu vendo coisas novas";

  constructor() {}

  ngOnInit(): void {}

  fazeralgo() {
    console.log("Fazendo algo novo.");
  }
}
