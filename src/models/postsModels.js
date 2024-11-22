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

export {getTodosPosts, criarPost}