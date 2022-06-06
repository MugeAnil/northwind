import { Product } from "./product";
import { ResponseModule } from "./responseModel";

export interface ProductResponseModel extends ResponseModule {
    data:Product[]
}