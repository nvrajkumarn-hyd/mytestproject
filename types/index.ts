export type DeliveryType='Same Day'|'Express'|'Standard'|'Fixed Time'|'Midnight';
export interface Product {id:string;slug:string;sku:string;name:string;description:string;category:string;image:string;images:string[];price:number;originalPrice:number;rating:number;reviewCount:number;personalizable:boolean;deliveryTypes:DeliveryType[];featured:boolean;newArrival?:boolean;recipients:string[];occasions:string[];tags:string[];}
export interface CartItem {product:Product;quantity:number;personalization?:{name?:string;text?:string;photoName?:string};deliveryDate?:string;deliverySlot?:string;}
