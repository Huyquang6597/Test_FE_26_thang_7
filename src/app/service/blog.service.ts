import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blog} from "../model/blog";

const API_URL = environment.apiUrl + '/blogs';
@Injectable({
  providedIn: 'root'
})
export class BlogService{
  constructor(private httpClient: HttpClient) {
  }
  findAllPublicStatus(): Observable<Blog[]> {
    // @ts-ignore
    return this.httpClient.get(API_URL + '/find-all-public-status');
  }

  findAll(): Observable<Blog[]> {
    // @ts-ignore
    return this.httpClient.get(API_URL);
  }

  findAllByUserId(id: string): Observable<Blog[]> {
    // @ts-ignore
    return this.httpClient.get(API_URL + '/search-by-user-id?id=' + id);
  }

  add(blog: any): any {
    return this.httpClient.post(API_URL, blog);
  }
}
