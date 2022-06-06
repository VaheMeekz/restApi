import {Column, Table, DataType, Model, BelongsToMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-role.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({
    tableName: "roles"
})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({
        example: '1',
        description: "Unique id"
    })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;
    @ApiProperty({
        example: 'ADMIN',
        description: "Role Value"
    })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    value: string;
    @ApiProperty({
        example: 'Administration',
        description: "Role description"
    })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;


    @BelongsToMany(()=>User,()=>UserRoles)
    users:User[];
}