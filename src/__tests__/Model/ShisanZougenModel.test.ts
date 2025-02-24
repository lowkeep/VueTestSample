import { addAndWrite } from "../../Model/ShisanZougenModel"
import { ShisanZougenForm } from "../../ViewModel/ShisanZougenViewModel"

test("ゼロから加算", () => {
    // テストデータ準備
    let data: ShisanZougenForm = {
        company: "",
        sales: 0,
        repurchases: 0,
        redemptions: 0,
        amountOfAssetsFlows: 0,
        profitDistributions: 0,
        amountOfManagementResults: 0,
        comparedWithPreviousTerm: 0,
        totalNetAssets: 0
    };
    // テスト対象メソッド呼び出し
    addAndWrite(data);
    // 結果確認
    expect(data.amountOfAssetsFlows).toBe(1);
    console.log("テスト実行中！");
}
);


test("ゼロ以外から加算を２回", () => {
    // テストデータ準備
    let data: ShisanZougenForm = {
        company: "",
        sales: 0,
        repurchases: 0,
        redemptions: 0,
        amountOfAssetsFlows: 11,
        profitDistributions: 0,
        amountOfManagementResults: 0,
        comparedWithPreviousTerm: 0,
        totalNetAssets: 0
    };
    // テスト対象メソッド呼び出し
    addAndWrite(data);
    // 結果確認
    expect(data.amountOfAssetsFlows).toBe(12);
    // テスト対象メソッド呼び出し
    addAndWrite(data);
    // 結果確認
    expect(data.amountOfAssetsFlows).toBe(13);
}
);
