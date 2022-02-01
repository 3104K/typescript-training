/**
 * 関数
 */

/** 基本 */
function greet() {
  console.log('Hello World!');
}
// greet(); // Hello World!undefined

// ==============================================================

/** function 関数名(仮引数名: データ型): 返り値の型 */
function greet2(name: string): void {
  // voidは書かなくても問題ないが、複数の引数がある時はvoidと記述する方がわかりやすい
  console.log(`Hello World!${name}`);
}
// 引数がないため警告が出る
// greet2(); // Hello World!undefined
// greet2('test'); // Hello World!test

// ==============================================================

/** 引数省略可能にするのは？をつけること */
function greet3(name?: string): void {
  console.log(`Hello World!${name}`);
}
// 警告が出ない。但しundefinedになる
// greet3(); // Hello World!undefined

// ==============================================================

/** 初期値の設定 */
function greet4(name: string = '初期値'): void {
  console.log(`Hello World!${name}`);
}
// greet4(); //Hello World!初期値
// greet4('ちゃんと反映されるよ'); // Hello World!ちゃんと反映されるよ

// ==============================================================

/** 可変長引数 */
// 配列の場合
function sumCat(...values: number[]): number {
  return values.reduce(function (prev, current) {
    // reduceは配列を繰り返す関数(returnされた値, 配列から取り出した値)
    return prev + current;
  });
}
// console.log(sumCat(1, 3, 5, 9));

// オブジェクトの場合エラーとなる
// function sumObj(...values: object): number {} // must be arrayの警告が出る

// ==============================================================

/**
 * アロー関数
 */
// 通常の関数よりシンプルに記載できる
// 厳密にはアロー関数と普通の関数は異なる
// () => { 処理 }

/** 基本系。使用方法は普通の関数と変わらない */
let add = (x1: number, x2: number): number => {
  return x1 + x2;
};
// console.log(add(1, 3)); // 4

/** returnは処理が一文になる場合、省略可能 */
// 長い時は普通に省略せずにした方が良い
// returnと{}なし
let hello = (name: string): string => `Hello!${name}`;

/** データ型は省略できる */
let hello2 = (name2) => `Hello!${name2}`;

/** 引数が一つもない時は()を省略できない */
// let getValue = (): number => {
//   return document
//     .getElementById('app')
//     .getElementsByTagName('div')
//     .firstChild.getAttribute('value')
//     .toFixed(2);
// };

/** thisの扱いが普通の関数とアロー関数で異なる */
// 使い道
// thisの使い方を意識しない(おすすめ): アロー関数
// 定義前の関数を呼び出ししたい： function関数

// // 普通用の関数のthis:このイベントで使用されている要素を参照する
// document.getElementById('button1').addEventListener('click', function () {
//   console.log(this); // <button></button>;
// });

// // アロー関数のthis:関数が定義された場所をthisとする
// document.getElementById('button1').addEventListener('click', () => {
//   console.log(this); // Windowオブジェクト
// });
