import { baseService } from "./baseService";

export class UserService extends baseService {

    constructor(){
        super();
    }

    getUser = (keyWord) => {
        
       return this.get(`/Users/getUser?kewword=${keyWord}`);
    }


}


export const userService = new UserService();
