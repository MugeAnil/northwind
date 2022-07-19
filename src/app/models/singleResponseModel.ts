import { ResponseModel } from "./responseModel";

//arreysiz versiyonu bu,token için oluşturduk
export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}