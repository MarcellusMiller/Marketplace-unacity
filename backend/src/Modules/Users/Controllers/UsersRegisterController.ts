import { Request, Response } from "express";
import  UsersService  from "../Services/Users.Service"
import UserRegister from "../Interfaces/UserRegisterInterface";
export default class UserController {
    constructor(private readonly UsersService: UsersService) {}

    async create(req: Request, res: Response) {
        const body = req.body as UserRegister;

        try {
            if(!body || !body.email || !body.name || !body.password || !body.rule) {
                res.status(400).json({message: "Informações insuficientes"});
                return
            }
            const user = await this.UsersService.create(body);
            res.status(201).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Erro ao Criar Úsuario"});
        }
    }
 }
