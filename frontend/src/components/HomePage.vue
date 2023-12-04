<template>
  <div class="min-h-screen flex flex-col">
    <!-- 顶部导航栏 -->
    <el-header class="bg-gray-200 p-4 flex justify-end items-center">
      <!-- 菜单项 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          文档<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>用户手册</el-dropdown-item>
          <el-dropdown-item>API 参考</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 更多菜单项... -->

      <el-dropdown class="ml-4">
        <span class="el-dropdown-link">
          服务<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>镜像服务</el-dropdown-item>
          <el-dropdown-item>仓库服务</el-dropdown-item>
          <!-- 更多服务... -->
        </el-dropdown-menu>
      </el-dropdown>

      <!-- 登录/注册 -->
      <el-button class="ml-4">Sign/Login</el-button>
    </el-header>

    <!-- 主内容区域 -->
    <el-main class="flex-grow">
      <div class="flex">
        <!-- 文字介绍 -->
        <div class="flex-1 p-4">
          <h1 class="text-2xl font-bold mb-4">欢迎来到 XYZ</h1>
          <p>这里是关于 XYZ 的介绍文字...</p>
        </div>
        <!-- 轮播图 -->
        <div class="flex-1 p-4">
          <el-carousel interval="5000" height="250px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="inner">轮播图 {{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-main>

    <!-- 近期动态 -->
    <el-footer class="bg-gray-100 p-4">
      <h2 class="text-lg font-semibold">近期动态</h2>
      <!-- 动态内容 -->
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #f5f5f5;
}

.inner {
  line-height: 250px;
  text-align: center;
  background-color: #d3dce6;
}
</style>

