import 'reflect-metadata';
import {UserService} from "./core/services/UserService/user.service";
import {UserController} from "./infrastucture/controllers/User/user.controller";
import UserRepository from "./core/repositories/UserRepository/user.repository";
import {container, Lifecycle} from "tsyringe";
import {AuthService} from "./core/services/AuthService/auth.service";
import {AuthController} from "./infrastucture/controllers/Auth/auth.controller";
import RefreshTokenRepository from "./core/repositories/RefreshTokenRepository/refreshTokenRepository";

container.register('UserRepository', {useClass: UserRepository});
container.register('UserService', {useClass: UserService});
container.register('UserController', {useClass: UserController});
container.register('AuthController', {useClass: AuthController});
container.register('AuthService', {useClass: AuthService}, {lifecycle: Lifecycle.Transient});
container.register('RefreshTokenRepository', {useClass: RefreshTokenRepository});

