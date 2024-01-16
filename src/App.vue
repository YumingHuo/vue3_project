<template>
  <div>
    <h1>我是app</h1>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="small" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <Test> </Test>
  </div>
</template>

<script setup lang="ts">
//引入图标组件
import { Plus, Edit, Delete } from "@element-plus/icons-vue";
import Test from "@/components/test.vue";
</script>

<style></style>
