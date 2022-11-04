import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoragesService } from '../storages.service';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  ide : String;
  lista = [];

  constructor(private route: ActivatedRoute, 
    private apiRest: ApirestService) { }

  ngOnInit() {
    this.ide = this.route.snapshot.paramMap.get('id');
    this.apiRest.getComments(this.ide);
    this.lista = this.apiRest.listado;
    //console.log(this.ide);
    //console.log(this.lista);
  }

}
