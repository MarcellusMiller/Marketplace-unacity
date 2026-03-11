import UserRegister from "./UserRegisterInterface";
export interface UserEntity extends UserRegister {
    id: string;
    createdAt: Date;
}