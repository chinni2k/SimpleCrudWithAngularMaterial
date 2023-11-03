
import { Observable } from 'rxjs';
import { posts } from 'src/app/Models/post';

export interface IGenericService {
  getAllPost(): Observable<posts[]>;
}
