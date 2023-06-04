import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function(res){
  // 得体の知れないものがある場合は型推論がanyとなる

  // 新たに型を定義する
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[] = res.data;
  data = [
    {
      id: 1,
      title: 'aaa',
      description: 'afa'
    }
  ]
  console.log(data);
});
