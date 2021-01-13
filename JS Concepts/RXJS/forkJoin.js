import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/first';

var tasks$ = [];
tasks$.push(Observable.timer(1000).first());
tasks$.push(Observable.timer(3000).first());
tasks$.push(Observable.timer(10000).first());
Observable.forkJoin(...tasks$).subscribe(results => { console.log(results); });