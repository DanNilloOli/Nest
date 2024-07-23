import { TypeOrmModule } from "@nestjs/typeorm";
import Module from "@nestjs/common";
import { Postagem } from "./postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [],
    controllers: [],
    export: [TypeOrmModule]
})

export class PostagemModule { }