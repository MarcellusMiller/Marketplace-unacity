import UserRegister from "../Interfaces/UserRegisterInterface";
class UsersService {
    async create(body: UserRegister) {
        if(!body) {
            throw new Error("Informações insuficientes")
        }
    }
}

export default UsersService;