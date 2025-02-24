// ViewModelの役割
//   Viewで表示するデータの宣言と保持
//   Viewで発生するイベントのバインド
// つまり、Viewに表示する項目の増減がないorイベントで行う処理が変わらない場合、
// ViewModelに修正は発生しない
// （Viewに表示する項目の型が変わったら修正だね）
// イベントで行う処理が変わらない場合
// →厳密にいうとModelの呼び出しの増減がなければ

import { reactive } from 'vue'
// イベントの処理で呼び出すModelの処理をインポート
import { addAndWrite } from "../Model/ShisanZougenModel"

// 画面に表示するデータの宣言
export interface ShisanZougenForm {
    company: string, // 投資信託会社
    sales: number, // 設定額
    repurchases: number, // 解約額
    redemptions: number, // 償還額
    amountOfAssetsFlows: number, // 資金増減額
    profitDistributions: number, // 収益分配額
    amountOfManagementResults: number, // 運用増減額
    comparedWithPreviousTerm: number, // 純資産増減額
    totalNetAssets: number, // 純資産総額
}

// 画面に表示するデータの実態を宣言し初期化
export const formData: ShisanZougenForm = reactive({
    company: '', // 投資信託会社
    sales: 0, // 設定額
    repurchases: 0, // 解約額
    redemptions: 0, // 償還額
    amountOfAssetsFlows: 0, // 資金増減額
    profitDistributions: 0, // 収益分配額
    amountOfManagementResults: 0, // 運用増減額
    comparedWithPreviousTerm: 0, // 純資産増減額
    totalNetAssets: 0, // 純資産総額


}
)

// 
export const companyList = [
    {value: '野　村', label: '野　村'},
    {value: '日　興', label: '日　興'},
    {value: '大　和', label: '大　和'},
    {value: 'ＳＢＩ岡三', label: 'ＳＢＩ岡三'},
    {value: 'Ｔ＆Ｄ', label: 'Ｔ＆Ｄ'},
    {value: '明治安田', label: '明治安田'},
    {value: 'ＪＰモルガン', label: 'ＪＰモルガン'},
    {value: 'インベスコ', label: 'インベスコ'},
    {value: 'シュローダー', label: 'シュローダー'},
    {value: 'アバディーン', label: 'アバディーン'},
    {value: '農中全共', label: '農中全共'},
    {value: 'ニッセイ', label: 'ニッセイ'},
    {value: 'フィデリティ', label: 'フィデリティ'},
    {value: 'ベアリングス', label: 'ベアリングス'},
    {value: 'ドイチェ', label: 'ドイチェ'},
    {value: 'ゴールドマン', label: 'ゴールドマン'},
    {value: 'アライアンス', label: 'アライアンス'},
    {value: 'パインブリジ', label: 'パインブリジ'},
    {value: '三菱ＵＡＭ', label: '三菱ＵＡＭ'},
    {value: 'ピクテ', label: 'ピクテ'},
    {value: 'ＳＯＭＰＯ', label: 'ＳＯＭＰＯ'},
    {value: 'ＡＭ－Ｏｎｅ', label: 'ＡＭ－Ｏｎｅ'},
    {value: 'ＢＲＪ', label: 'ＢＲＪ'},
    {value: '東京海上', label: '東京海上'},
    {value: 'ＵＢＳ', label: 'ＵＢＳ'},
    {value: 'ＨＳＢＣ', label: 'ＨＳＢＣ'},
    {value: 'フランクリン', label: 'フランクリン'},
    {value: 'ステート', label: 'ステート'},
    {value: 'アムンディ', label: 'アムンディ'},
    {value: 'しんきんＡＭ', label: 'しんきんＡＭ'},
    {value: 'ＢＮＰパリバ', label: 'ＢＮＰパリバ'},
    {value: '三井住友ＴＡ', label: '三井住友ＴＡ'},
    {value: 'ラッセル', label: 'ラッセル'},
    {value: '朝日ライフ', label: '朝日ライフ'},
    {value: 'さわかみ', label: 'さわかみ'},
    {value: '日立投資顧問', label: '日立投資顧問'},
    {value: '三井住友ＤＳ', label: '三井住友ＤＳ'},
    {value: 'スパークス', label: 'スパークス'},
    {value: 'イーストスプ', label: 'イーストスプ'},
    {value: 'ＢＮＹＭ', label: 'ＢＮＹＭ'},
    {value: 'ＳＢＩアセッ', label: 'ＳＢＩアセッ'},
    {value: 'シンプレクス', label: 'シンプレクス'},
    {value: 'ベイビュー', label: 'ベイビュー'},
    {value: 'ありがとう', label: 'ありがとう'},
    {value: 'トラノテック', label: 'トラノテック'},
    {value: 'キャピタル', label: 'キャピタル'},
    {value: 'セゾン投信', label: 'セゾン投信'},
    {value: 'ペイペイＡＭ', label: 'ペイペイＡＭ'},
    {value: 'ＣＡＭ', label: 'ＣＡＭ'},
    {value: 'レオス', label: 'レオス'},
    {value: 'パリミキａｍ', label: 'パリミキａｍ'},
    {value: '楽天', label: '楽天'},
    {value: 'マニュライフ', label: 'マニュライフ'},
    {value: 'ユニオン投信', label: 'ユニオン投信'},
    {value: 'コモンズ投信', label: 'コモンズ投信'},
    {value: '鎌倉投信', label: '鎌倉投信'},
    {value: '中銀ＡＭ', label: '中銀ＡＭ'},
    {value: 'カレラ', label: 'カレラ'},
    {value: 'ポトフォリア', label: 'ポトフォリア'},
    {value: 'ファイブスタ', label: 'ファイブスタ'},
    {value: 'ＧＣＩ', label: 'ＧＣＩ'},
    {value: 'いちよしＡＭ', label: 'いちよしＡＭ'},
    {value: 'あおぞら投信', label: 'あおぞら投信'},
    {value: 'ちばぎんＡＭ', label: 'ちばぎんＡＭ'},
    {value: 'スカイオーシ', label: 'スカイオーシ'},
    {value: 'りそなＡＭ', label: 'りそなＡＭ'},
    {value: 'ＪＰ投信', label: 'ＪＰ投信'},
    {value: 'ＭＡＭ', label: 'ＭＡＭ'},
    {value: 'ワイエムＡＭ', label: 'ワイエムＡＭ'},
    {value: 'お金デザイン', label: 'お金デザイン'},
    {value: 'ティー・ロウ', label: 'ティー・ロウ'},
    {value: 'ＨＣアセット', label: 'ＨＣアセット'},
    {value: 'ａｕアセット', label: 'ａｕアセット'},
    {value: 'ＮＶＩＣ', label: 'ＮＶＩＣ'},
    {value: 'グローバルＸ', label: 'グローバルＸ'},
    {value: 'ＳＵＳＴＥＮ', label: 'ＳＵＳＴＥＮ'},
    {value: 'バーテックス', label: 'バーテックス'},
    {value: 'なかのＡＭ', label: 'なかのＡＭ'},
    {value: 'ファンドＮ', label: 'ファンドＮ'},
    ]

// ボタンクリックイベント
export const clickButton = () => {
    console.log('clickButton called');
   // こういう風にしない。ここで直接データの操作を行うのではなく、Modelの処理を呼び出す。
   formData.sales = formData.sales + 1;
    return;
}

// 変更イベントイベント
export const changeSelect = () => {
    // ここで直接データの操作を行うのではなく、Modelの処理を呼び出す。
    console.log('changeSelect called');
    addAndWrite(formData);
    //formData.amountOfAssetsFlows = formData.amountOfAssetsFlows + 1;
    return;
}