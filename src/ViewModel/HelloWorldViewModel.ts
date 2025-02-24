import { ref } from 'vue'
import type { Ref } from 'vue'
/**
 * テキストボックスとバインドする変数
 * @type {number}
 */
export const count: Ref<number> = ref(0);

/**
 * ｓｓｓｓとバインドする変数
 * @type {string}
 */
export const input = ref('');

// exportすることで他のファイルにも使用できるようにする
/**
 * xxボタンクリック時の処理を行う関数
 * @argument なし
 * @returns なし
 */
export const test = () => {
    //let count = 0;
    //const testShow = () => { 
        console.log('const test called');
        count.value++;
    //}
}