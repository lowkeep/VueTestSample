<template>
    <el-menu router>
        <el-menu-item index="home" :route="{ name: 'nameHome' }">ほーむ</el-menu-item>
        <el-menu-item index="search" :route="{ name: 'nameSearch' }">投資信託会社別資産増減状況（実額）</el-menu-item>
    </el-menu>
    <!--
    <router-link to="/">Home</router-link><BR />
    <router-link to="/search">Search</router-link>
-->
</template>