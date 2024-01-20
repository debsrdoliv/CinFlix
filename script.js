var listaFilmes = ['https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg', 'https://m.media-amazon.com/images/M/MV5BYWRkMzE5MDAtMTNjNS00ZmRhLWEyZTYtMTQyMGQ4NmFjNTU0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY1200_CR90,0,630,1200_AL_.jpg', 'https://upload.wikimedia.org/wikipedia/pt/3/33/A_Fuga_das_Galinhas.jpg','https://pbs.twimg.com/media/F5Q-UfZbQAAkarf.jpg'];//
​
//desafio 2 - adicionar itens na lista usando o .push
​
listaFilmes.push('https://cdn.awsli.com.br/600x700/1610/1610163/produto/177685420/poster-wandavision-b-bcac2f10.jpg', 'https://m.media-amazon.com/images/M/MV5BMTYxMDA3Mzg5NV5BMl5BanBnXkFtZTgwNDIxOTcwMDI@._V1_FMjpg_UX1000_.jpg', 'https://img.elo7.com.br/product/original/26A89C8/big-poster-serie-friends-lo02-tamanho-90x60-cm-presente-geek.jpg');
​
var nomefilmes = ['Marriage Story', 'Tio Frank', ' A Fuga das Galinhas', 'A Fuga das Galinhas 2', 'WandaVision', '2 Broke Girls', 'Friends'];
​
document.write('<div class="container_todosFilmes">')
​
var i=0;
​
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomefilmes[i] +'</p>'); //desafio 4 - colocar titulos embaixo da imagem
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')