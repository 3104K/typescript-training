/**
 * スプレット演算子
 */

// メリット：concatなどを使用しなくても簡単に書けて、可読性が高くなる
let categories = ['a', 'b', 'c'];
// console.log(...categories); // a b c

// ===================================================

/** 複製 */
let copyCat = [...categories];
// console.log(copyCat); // 以下の出力
// ["a", "b", "c"]
// 0: "a"
// 1: "b"
// 2: "c"

// 別のオプジェクトとして判断される = 値の参照ではなく、新しく配列が生成されているイメージ
// console.log(copyCat === categories); // false

// ===================================================

/** 連結 */

// 前で連結
let frontCat = ['x', ...categories];
// console.log(frontCat); // ["x", "a", "b", "c"]

// 後ろで連結
let backCat = [...categories, 'y'];
// console.log(backCat); // ["a", "b", "c", "y"]

// 途中に挿入
let insertCat = ['t', ...categories, 's'];
// console.log(insertCat); // ["t", "a", "b", "c", "s"]

// 2つの配列のマージ
let mergeCat = [...frontCat, ...insertCat, ...backCat];
// console.log(mergeCat); // ["x", "a", "b", "c", "t", "a", "b", "c", "s", "a", "b", "c", "y"]

// ===================================================

/** オブジェクトも配列同様に使用できる */
let post = {
  id: 1,
  content: 'dummy',
  created: '2022-01-01',
};

// 配列との違いは括弧が異なるだけ
let copyObj = { ...post };
// console.log(copyObj); // {id: 1, content: "dummy", created: "2022-01-01"}

// 後ろに追加
let backObj = { ...post, flg: false };
// console.log(backObj); // {id: 1, content: "dummy", created: "2022-01-01", flg: false…}

// 存在すkey名の場合は上書きされる
// 後ろが上書きする側
let saveBackObj = { ...post, id: 99 }; // id:1は上書きされて88になる
// console.log(saveBackObj); // {id: 99, content: "dummy", created: "2022-01-01"}

// 前は上書きされる側
let saveFrontObj = { id: 88, ...post }; // id:８８は上書きされて１になる
// console.log(saveFrontObj); // {id: 1, content: "dummy", created: "2022-01-01"}

// ===================================================

/** 配列とオブジェクトを混合で使用する場合 */

// 配列にオブジェクトを代入
let objInCat = {};
// let testCat = [...objInCat]; // errorとなる

// オブジェクトに配列を代入
let catInObj = ['g', 1];
// index値がkey,中身がvalueとなるオブジェクトを生成する
let testObj = { ...catInObj, name: 'takeshi' }; // errorにならない
console.log(testObj); // {0: "g", 1: 1, name: "takeshi"}
