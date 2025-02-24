// ModelはViewModelから呼び出され、引数として画面のデータを受け取る。
// （データはViewModelでリアクティブに宣言されるので、データの変更は即時に画面に反映される）
// それをもとに処理を行う
// →単体テストがしやすくなる

// ViewModelから画面に表示するデータの型をインポート
import { ShisanZougenForm } from "../ViewModel/ShisanZougenViewModel"

// ViewModelから呼び出される。引数で画面に入力されたデータを受け取る（リアクティブで宣言されてる）。
export const addAndWrite = (formData: ShisanZougenForm) => {
    console.log('changeSelect called');
    formData.amountOfAssetsFlows = formData.amountOfAssetsFlows + 1;
    return;
}
