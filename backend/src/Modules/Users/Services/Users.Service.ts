import UserRegister from "../Interfaces/UserRegisterInterface";
class UsersService {
    async create(body: UserRegister) {
        if(!body) {
            throw new Error("Informações insuficientes")
        } 
        if(body.rule === "buyer") {
            
        } else if(body.rule === "seller") {

        }
    }
}

export default UsersService;