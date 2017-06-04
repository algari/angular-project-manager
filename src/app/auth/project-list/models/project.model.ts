/**
 * Created by agalvis on 04/06/2017.
 */
export class Project{
  /** ?: es para campos opcionales*/
  id ?: number;
  title: string;
  slug: string;
  description ?:string;
  user_id:number;
  created_at?:string;
  updated_at?:string;
}
