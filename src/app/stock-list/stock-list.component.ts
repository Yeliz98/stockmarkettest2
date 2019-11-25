import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import {UserStoreService} from '../services/user-store.service';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  //public stocks: Stock[];
  public stocks$: Observable<Stock[]>;
  private page = 1;
  constructor(private stockService: StockService,
              private userStore: UserStoreService,
              private router:Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    /**this.stockService.getStocks()
        .subscribe(stocks => {
          this.stocks = stocks;
    });*/
    //this.stocks$ = this.stockService.getStocks();
    console.log('Page No.: ',
                this.route.snapshot.queryParamMap.get('page'));
    this.route.queryParams.subscribe((params) => {
      console.log('Page: ', params.page);
    this.stocks$ = this.stockService.getStocks();
    });
   
  }

  nextPage() {
    this.router.navigate([], {
      queryParams: {
        page: ++this.page
      }
    })
  }
/*
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }
*/
}
