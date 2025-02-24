import { addAndWrite } from "../../Model/ShisanZougenModel"
import { ShisanZougenForm } from "../../ViewModel/ShisanZougenViewModel"

test("check", () => {
    console.log("テスト実行中！");
}
);


test("check2", () => {
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
}
);
