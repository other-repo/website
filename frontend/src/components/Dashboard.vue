<template>
  <div class="flex h-screen bg-gray-100">
    <!-- 侧边栏 -->
    <aside class="w-64 overflow-y-auto bg-white shadow container mx-auto">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- 更多菜单项 -->
      </el-menu>
    </aside>

    <!-- 主内容区 -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- 顶部菜单 -->
      <header class="flex justify-between items-center p-4 shadow bg-white">
        <div class="flex items-center">
          <h1 class="text-xl font-semibold">后台管理系统</h1>
        </div>
        <div class="overflow-x-auto whitespace-nowrap">
          <!-- 顶部菜单内容 -->
          <el-button>按钮1</el-button>
          <el-button>按钮2</el-button>
          <!-- 更多按钮... -->
        </div>
      </header>

      <!-- 动态加载的组件内容区 -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <component :is="currentComponent" />
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AdminDashboard',
  setup() {
    const currentComponent = ref('DefaultComponent');

    // 处理菜单打开的事件
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };

    // 处理菜单关闭的事件
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    // 切换当前活跃的组件
    const switchComponent = (componentName) => {
      currentComponent.value = componentName;
    };

    // 返回所有需要在模板中使用的响应式变量和方法
    return {
      currentComponent,
      handleOpen,
      handleClose,
      switchComponent,
    };
  },
};
</script>

<style scoped>
/* 此处添加一些基础样式 */
</style>

