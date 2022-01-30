// /**
//  * 変数定義
//  */

// /** varとletの違い */
// // ・ブロックスコープの影響範囲が異なる

// // var→if文内の変数は参照可能
// {
//   var foo = 'foo';
// }
// console.log(foo); // foo

// // letはブロック内でしか使用できない
// {
//   let hoge = 'hoge';
// }
// // console.log(hoge); // errorとなる
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// // console.log(i); // errorとなる

// // ・関数の巻き上げが起こるかどうか
// // varは関数の巻き上げが起こる
// var varHoge = 'varのHoge！';
// function logVarHoge() {
//   // 以下の関数と同様
//   console.log(varHoge); // undefined
//   var varHoge = 'new varのHoge！';
//   console.log(varHoge); // new varのHoge！
// }
// logVarHoge();

// // function logVarHoge() {
// //   var varHoge;
// //   console.log(varHoge);
// //   varHoge = 'new varのHoge！';
// //   console.log(varHoge);
// // }

// // ・letは変数の巻き上げが起こらない
// var letHoge = 'letのHoge!';
// function logLetHoge() {
//   // console.log(letHoge); // 変数が下に宣言されているので、errorとなる。
//   let letHoge = 'new letのHoge!';
//   console.log(letHoge);
// }
// logLetHoge();
// // 関数の巻き上げがない方が素直なプログラミングとなる。JSの柔軟さがエラーの原因。
// // 積極的にletを使用していく

// // =====================================================

// /** 定数 */
// const constHoge: string = '定数';
// const PI = Math.PI; // 円周率
// console.log(PI);
