import axios from 'axios';
import Service from 'core/service';

export class PageService extends Service {
  public ping() {
    return axios.head('/api/ping');
  }
}
