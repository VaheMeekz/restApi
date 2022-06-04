import {Column, Table, DataType, Model} from "sequelize-typescript";
import {} from "sequelize-typescript/dist/browser";

@Table({
    tableName: "users"
})
export class User extends Model<User> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false
    })
    banned: boolean;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    banReason: string;
}