import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {FilesService} from "../files/files.service";
import { CreatePostDto } from './dto/createPost.dto';
import { Post } from './post.model';

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                private fileService: FilesService) {}

    async create(dto: CreatePostDto, image: any) {
        console.log("+++++++++++++++++++++++++++++++++++++++")
        const fileName = await this.fileService.createFile(image);
        const post = await this.postRepository.create({...dto, image: fileName})
        return post;
    }
}