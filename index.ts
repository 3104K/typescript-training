/** データ型 */

// 文字列
var title: string = 'Angular';
title = 'AngularTest';

// 数値型
var n: number = 3104;

// 真偽値
var isOpen: boolean = true;

// 配列型
var keywords: string[] = ['name', 'test', 'email'];

// 配列型(パイプ)
var keywords2: (string | number)[] = ['name', 'test', 9];

// ダブル型(指定した順番でしかデータ型の入力ができない&数も指定した分だけ)
var payment: [number, string, number] = [0, 'ダブル型', 8];
// 以下は3つのデータまでしか入らないのでエラー
// var payment: [number, string, number] = [0, 'ダブル型', 8, 'テスト'];

// オブジェクト型(キー・バリューを組として複数持つもの) keyとvalueの型定義が可能
var Kuwahara: { [key: string]: string } = {
  name: 'Satoshi',
  id: 'test',
};
var post: object = [{ id: 12, contetnt: 'contentString' }];

// 共用型(Union型)
// パイプでつなぐ
var kyoyu: string | number | Object;
kyoyu = 'test';
kyoyu = 1;
kyoyu = { id: 1, name: '名前' };
// kyoyu = true; // パイプで指定していないのでエラーとなる

// enum型
// 定数の列挙を行う = 定数のグルーピングを行う
enum KeyCode {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
}
console.log(KeyCode.Enter);
// 使い道：HTTPレスポンスのエラーコードなど
enum ErrorCode {
  OK = 200,
  BAD_RESPONSE = 400,
  // BAD_RESPONSE = '400', // 文字列にするとUNKNOWNがエラーとなる = 自動挿入される場合は型の一貫性が必要
  UNKNOWN, // 自動でBAD_RESPONSE＋１の値になる  // 401
}
console.log(ErrorCode.OK);
console.log(ErrorCode.BAD_RESPONSE);
console.log(ErrorCode.UNKNOWN);

// any型
// Typescriptのメリットがなくなる ＝ 使わない方が良い

// null, undefined型
var el: Element | null = document.querySelector('#app'); // Element型が存在する = HTMLの要素型
var foo: undefined = undefined; // undefined型しか入らない

// 型なしの場合自動で型推論される
var hoge = 'string';
// hoge = 9; // errorとなる
