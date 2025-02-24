<script setup lang="ts">
    //import { ref } from 'vue'
    import { clickButton, changeSelect, companyList, formData } from "../ViewModel/ShisanZougenViewModel"
    //import type { FormItemProps } from 'element-plus'
    //const itemLabelPosition = ref<FormItemProps['labelPosition']>('top')
</script>

<template>
    <h1>投資信託会社別資産増減状況（実額）</h1>
        <el-form>
            <el-form-item label="投資信託会社" label-position="top">
                <el-select
                    v-model="formData.company"
                    placeholder="投資信託会社"
                    size="default"
                    style="width: 240px"
                    @change="changeSelect()"
                >
                    <el-option
                        v-for="item in companyList"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-form-item label="設定額" label-position="top">
                <el-input
                    label="設定額"
                    v-model="formData.sales"
                    style="width: 240px;"
                    size="default"
                    placeholder="設定額"
                    type="text"    />
            </el-form-item>
            <el-form-item label="解約額" label-position="top">
                <el-input
                v-model="formData.repurchases"
                style="width: 240px;"
                size="default"
                placeholder="Please Input"
                type="text"    />
            </el-form-item>
            <el-form-item label="償還額" label-position="top">
                <el-input
                v-model="formData.redemptions"
                style="width: 240px;"
                size="default"
                placeholder="Please Input"
                type="text"    />
            </el-form-item>
            <el-form-item label="資金増減額" label-position="top">
                <el-input
                    v-model="formData.amountOfAssetsFlows"
                    style="width: 240px;"
                    size="default"
                    placeholder="Please Input"
                    type="text"    />
            </el-form-item>
            <el-form-item label="収益分配額" label-position="top">
                <el-input
                    v-model="formData.profitDistributions"
                    style="width: 240px;"
                    size="default"
                    placeholder="Please Input"
                    :rows="3"
                    type="text"    />
            </el-form-item>
            <el-form-item label="運用増減額" label-position="top">
                <el-input
                    v-model="formData.amountOfManagementResults"
                    style="width: 240px;"
                    size="default"
                    placeholder="Please Input"
                    :rows="3"
                    type="text"    />
            </el-form-item>
            <el-form-item label="純資産増減額" label-position="top">
                <el-input
                    v-model="formData.comparedWithPreviousTerm"
                    style="width: 240px;"
                    size="default"
                    placeholder="Please Input"
                    :rows="3"
                    type="text"    />
            </el-form-item>
            <el-form-item label="純資産総額" label-position="top">
                <el-input
                    v-model="formData.totalNetAssets"
                    style="width: 240px;"
                    size="default"
                    placeholder="Please Input"
                    type="text"    />
            </el-form-item>
            <el-form-item>
                <el-button  @click="clickButton()" type="primary">Primary</el-button>
            </el-form-item>
        </el-form>
</template>

