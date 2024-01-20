<template>
  <div>
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
// 使用 defineProps 定义接收的 props
const props = defineProps({
  // xlink:href 属性的前缀
  prefix: {
    type: String,
    default: "#icon-",
  },
  // 使用的图标名称
  name: {
    type: String,
    required: true,
  },
  // 接受父组件传递的颜色
  color: {
    type: String,
    default: "",
  },
});
</script>

<style>
/* 您可以在这里添加样式 */
</style>
