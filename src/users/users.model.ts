import {Column, Table, DataType, Model, BelongsToMany, HasMany} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../roles/user-role.model";
import {Role} from "../roles/role.model";
import {Post} from "../posts/post.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({
    tableName: "users"
})
export class User extends Model<User, UserCreationAttrs> {
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
        example: 'example@gmail.com',
        description: "User email"
    })
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;

    @ApiProperty({
        example: '123456',
        description: "User password"
    })
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ApiProperty({
        example: 'true || false',
        description: "Baned || Dont Banned"
    })
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    banned: boolean;

    @ApiProperty({
        example: 'lorem ipsum',
        description: "Ban Reason Description"
    })
    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    banReason: string;


    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(()=>Post)
    posts:Post[]
}