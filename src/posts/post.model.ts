import {Column, Table, DataType, Model, BelongsTo, ForeignKey} from "sequelize-typescript";
import {User} from "../users/users.model";


interface PostCreationAttrs {
    title: string;
    content: string;
    image: string;
    userId:number;
}

@Table({
    tableName: "posts"
})
export class Post extends Model<Post,PostCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    content: string;

    @Column({
        type: DataType.STRING,
    })
    image: string;
    @ForeignKey(()=>User)
    @Column({
        type:DataType.INTEGER,
        allowNull: false
    })
    userId:number
    @BelongsTo(()=>User)
    author:User

}