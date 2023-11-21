import { Observable } from "rxjs"

export interface Iusers {
    userName:string,
    userId:string,
    editStatus:string
}


export interface Iproducts {
    prodName:string,
    prodId :string,
    ProdStatus:IprodStatus,
    canReturn:number
}

export enum IprodStatus {
    InProcess = 'InProcess',
    Dispatched  = 'Dispatched',
    Delivered ='Delivered'
}

export interface IcanDeactivate{
    canDeactivate : () => boolean | Promise<boolean> | Observable<boolean>
} 