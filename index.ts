/**
 * クラス
 */

class Animal {
  private king: string = '王様';

  /** アクセス修飾子はコンストラクターにしか使用できない */
  constructor(public kind: string) {
    // 仮引数にアクセス修飾子(public)があるので以下は不要
    // Javaと同じ種類のアクセス修飾子がある(public, protected, private)
    // this.kind = kind
  }

  // 関数ではなくメソッド = functionは不要
  cry(): void {
    console.log(`俺は${this.kind}、全種族の${this.king}だ！`);
  }

  /** アクセサメソッド = getter,setter */
  // わりかしオブジェクト指向に近い

  // getterはメソッドの前にgetとつける
  get legs() {
    return 4;
  }

  // setterはメソッドの前にsetを使用する
  set setKing(newKing: string) {
    this.king = newKing;
  }
}
let dog = new Animal('いっぬ');
dog.cry();
