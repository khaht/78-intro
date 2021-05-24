import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { ACCESS_TOKEN_KEY } from 'core/constants';
// axios
axios.defaults.headers.post['Content-Type'] = 'application/json';

export interface ServiceOptions {
  namespace?: string;
}

export default class Service {
  private axios: AxiosInstance;
  private headers: any;
  private defaultOptions: ServiceOptions = {
    namespace: undefined,
  };
  /**
   * Creates an instance of Service.
   *
   * @memberOf Service
   */
  constructor(options?: ServiceOptions) {
    this.defaultOptions = { ...this.defaultOptions, ...options };
    const { namespace = null } = this.defaultOptions;
    // Accept */*
    axios.defaults.headers.common.Accept = '*/*';
    const endpoint = (window as any).service_endpoint || '';
    const baseURL = endpoint + (namespace ? `/${namespace}/` : '/');
    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  public withHeader(headers: any): Service {
    this.headers = headers;
    return this;
  }

  public toQueryString(obj: any) {
    const parts = [];
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
      }
    }
    return parts.join('&');
  }

  /**
   * Call a service action via REST API
   *
   * @param {any} action  name of action
   * @param {any} params  parameters to request
   * @returns  {Promise}
   *
   * @memberOf Service
   */
  public async rest(
    action: string,
    params?: any,
    options = {
      headers: {},
      method: 'post',
    },
  ) {
    const { headers } = options;
    try {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);

      const opts: AxiosRequestConfig = {
        url: action,
        method: options.method as Method,
        data: params,
        headers: {
          ...(this.headers || {}),
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      };
      const response = await this.axios.request(opts);
      return response.data;
    } catch (err) {
      // console.log(err);
      throw err.response;
    }
  }

  public postFromData(action: string, data: any) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    return this.rest(action, data, {
      method: 'post',
      headers,
    });
  }

  public get(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options;
    const query = this.toQueryString(params);
    const path = query ? `${action}?${query}` : action;
    return this.rest(
      path,
      {},
      {
        method: 'get',
        headers,
      },
    );
  }

  public post(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options;
    return this.rest(action, params, {
      method: 'post',
      headers,
    });
  }

  public downloadFile(action: string) {
    return axios({
      url: action,
      method: 'GET',
      responseType: 'blob', // important
    });
  }
}
