import express from 'express'


const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        img: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        img: "https://placekitten.com/400/200",
      },
      {
        id: 3,
        descricao: "Paisagem montanhosa",
        img: "https://picsum.photos/seed/picsum/600/400",
      },
];


const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Aberto");
});

app.get('/posts',  (req, res) => {
    res.status(200).json(posts);
});

function buscarId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get('/posts/:id',  (req, res) => {
    const index = buscarId(req.params.id)
    res.status(200).json(posts[index]);
});