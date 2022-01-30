// /**
//  * 分割代入
//  */

// // メリット:配列の番号を記載しなくてもよい

// // ==============================================================
// // 配列の場合は要素順に変数名が割与えられる
// let company = ['au', 'softbank', 'docomo', 'other'];

// let [a, b] = company;
// // console.log(a, b); // au softbank

// // 0,1,3の要素だけ変数名が与えられる = docomoをスキップする
// let [c, d, , e] = company;
// // console.log(c, d, e); // au softbank other

// // 途中でスプレッド構文を使用すると残りをまとめてくれる
// let [x, y, ...z] = company;
// // console.log(x, y, z); // au softbank["docomo", "other"]

// // 初期値の利用
// // 配列の長さが特定できない場合におすすめ
// let [one = 1, two = 2] = [9];
// // console.log(one, two); // 9 2;

// function testFuncCat([n, ...m]) {
//   console.log(n, m);
// }
// // 型がanyとstringでデータ型が一致していないと警告が出るが、実行は可能
// // testFuncCat(company); // au ['softbank', 'docomo', 'other'];

// // ==============================================================

// // オブジェクトの場合
// // 深い階層のデータを参照する際に可読性が上がる。使用頻度は多い。
// // ex) const {id, name} = user.acountInfo.data;

// let media = { mediaName: 'Twitter', genre: 'SNS', free: true, term: 'forever' };

// // const { mediaName } = media;
// // let { mediaName } = media; // letでも問題なし
// // console.log(mediaName); // twitter

// const { mediaName, free: noMoney } = media;
// // console.log(free); // 参照できずerrorとなる
// // console.log(noMoney); // true

// // 関数の引数にオブジェクトが渡ってくる場合も使用可能
// // ※key名は引数のそのオブジェクトに存在しないといけない
// // function testFuncObj({ a, b, c }) { // これはmediaにa,b,cのkey名がないのでエラーとなる
// function testFuncObj({ mediaName, genre, term }) {
//   console.log(mediaName, genre, term);
// }
// // testFuncObj(media); // Twitter SNS forever
