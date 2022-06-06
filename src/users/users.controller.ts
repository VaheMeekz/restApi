import {Body, Controller, Post, Get, UseGuards, UsePipes} from '@nestjs/common';
import {CreateUserDto} from "./dto/createUser.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles.decorator";
import { RolesGuard } from 'src/auth/roles.guard';
import {AddRoleDto} from "./dto/addRole.dto";
import {BanUserDto} from "./dto/banUser.dto";
import {ValidationPipe} from "../pipes/validation.pipe";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private userService:UsersService) {
    }
    @ApiOperation({summary:"Create new user"})
    @ApiResponse({
        status:200,type:User
    })
    @Post()
    createUser(@Body() userDto:CreateUserDto){
        return this.userService.createUser(userDto)
    }
    @ApiOperation({summary:"Get users"})
    @ApiResponse({
        status:200,type:[User]
    })
    @UseGuards(RolesGuard)
    @Roles("ADMIN")
    @Get()
    getAll(){
        return this.userService.getUsers()
    }


    @ApiOperation({summary:"Set Role"})
    @ApiResponse({
        status:200
    })
    @UseGuards(RolesGuard)
    @Roles("ADMIN")
    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.userService.addRole(dto)
    }


    @ApiOperation({summary:"Bane User"})
    @ApiResponse({
        status:200
    })
    @UseGuards(RolesGuard)
    @Roles("ADMIN")
    @Post('/ban')
    ban(@Body() dto:BanUserDto){
        return this.userService.ban(dto)
    }
}
