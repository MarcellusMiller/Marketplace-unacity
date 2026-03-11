export default interface UserRegister {
    name: string;
    email: string;
    password: string;
    rule: "buyer" | "seller"
}
