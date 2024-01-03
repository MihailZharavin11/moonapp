import {inject, injectable} from "tsyringe";
import type RefreshTokenRepository from "../../repositories/RefreshTokenRepository/refreshTokenRepository";
import UserRepository from "../../repositories/UserRepository/user.repository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import type {UserWithoutPasswordDto} from "../../repositories/UserRepository/dto/UserWithoutPassword.dto";

@injectable()
export class AuthService {
    constructor(
        @inject('RefreshTokenRepository') readonly refreshTokenRepository: RefreshTokenRepository,
        @inject('UserRepository') readonly userRepository: UserRepository
    ) {

    }


    async login(dto: { email: string, password: string }) {

        const user = await this.userRepository.getUserByEmail(dto.email);
        if (!user || !(await bcrypt.compare(dto.password, user.password))) {
            return {error: 'Invalid credentials'};
        }
        const token = jwt.sign(this.composeAccessToken(user), process.env.JWT_SECRET || 'secret', {
            expiresIn: (process.env.JWT_ACCESS_TOKEN_LIFETIME_MINS || '1440') + 'm'
        });

        const refreshToken = await this.refreshTokenRepository.set(user.id)

        if (!refreshToken) {
            throw new Error('An error occurred, try again later');
        }

        return token;
    }

    composeAccessToken = (user: UserWithoutPasswordDto) => {
        const {id, email, name} = user;

        return {id, email, name};
    };
}