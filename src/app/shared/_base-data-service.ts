import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export enum ApiVersion {
  V1 = '1'
}

export class DataService {

  protected httpOptions(serviceKey: string, queryParams?: HttpParams, contentType?: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType ? contentType : 'application/json',
        'ServiceKey': serviceKey
      }),
      params: queryParams ? queryParams : new HttpParams()
    };
  }


  protected httpOptionsWithBody(serviceKey: string, body: any, queryParams?: HttpParams, contentType?: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': contentType ? contentType : 'application/json',
        'ServiceKey': serviceKey
      }),
      params: queryParams ? queryParams : new HttpParams(),
      body: body
    };
  }

  protected getPagingSortingQueryParams(httpParams: HttpParams, pagingSortingParams: any): HttpParams {
    if (pagingSortingParams) {
      httpParams = httpParams.set('PageSize', pagingSortingParams.pageSize.toString())
        .set('PageNumber', pagingSortingParams.offset.toString())
        .set('Sort', (pagingSortingParams.sortColumn || ''));
    }
    return httpParams;
  }


}
