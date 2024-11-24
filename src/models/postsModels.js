import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

async function getTodosPosts(){
    const db = conexao.db("imersao-alura");
    console.log(await db.listCollections().toArray())
    const colecao = db.collection("posts");
    return await colecao.find({}).toArray();
}

async function criarPost(novoPost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
}

async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-alura");
    const colecao = db.collection("posts");
    const objetoID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objetoID)}, {$set: novoPost})
}

export {getTodosPosts, criarPost, atualizarPost}