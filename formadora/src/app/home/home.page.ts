import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  catImageUrl: string = ''; // Inicializando com uma string vazia

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.getCat();
  }

  getCat() {
    this.catService.getCat().subscribe((data) => {
      this.catImageUrl = data[0].url; // Armazena a URL da imagem do gato
    });
  }
}
