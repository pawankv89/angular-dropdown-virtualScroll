import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  loading: boolean = false;
  listItems : any = [];

constructor(private http: HttpClient){}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.loadRecords();
  }

loadRecords(){
  this.loading = true;
  this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(items => {
    this.listItems = items;
    this.loading = false;
  });
}

onScroll(event: any){
  console.log('onScroll ');
}

onScrollToEnd(){
  console.log('onScrollToEnd');
  this.fetchMore();
}

fetchMore(){
  this.loadRecords();
}
}
