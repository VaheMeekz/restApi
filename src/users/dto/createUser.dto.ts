import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({
        example:'example@gmail.com',
        description:"User email"
    })
    @IsString({message:"Must be string"})
    @IsEmail({},{message:"Incorect email"})
    readonly email:string;
    @ApiProperty({
        example:'123456',
        description:"User password"
    })
    @IsString({message:"Must be string"})
    @Length(4,8,{message:"Password length must me 4-8"})
    readonly password:string;
}