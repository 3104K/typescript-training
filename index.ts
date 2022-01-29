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

// オブジェクト型(キー・バリューが)
var object:{}

