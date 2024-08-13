export interface Albums {
    id: string;
    ref: string;
    name: string;
    title: string;
    description: string;
    duration: number;
    status: string;
    url?: string;
    like?: string;
    tags?: Array<string>;
}


export interface List {
    id: string;
  list: string[];
}

export class Aside {

  constructor ( 
    public id: string,
    public  ref: string,
    public  name: string,
    public  title: string,
    public  description: string,
    public  duration: number,
    public  status: string,
    public  url?: string,
    public  like?: string,
 public     tags?: Array<string>,) {}
  

}