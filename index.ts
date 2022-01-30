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
