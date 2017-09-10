import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class LottoService {

    constructor(private http: Http) {   }

    getData() {
        let url = 'http://lotto-res.s3-website-us-west-2.amazonaws.com/lotto.json';

        return this.http.get(url)
            .map(res => res.json())
            .catch(this.handleError);        
    }


    private handleError(error: any) {
        return Observable.throw(error.json());
    }



}