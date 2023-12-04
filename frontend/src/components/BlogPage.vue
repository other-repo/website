<template>
  <div class="blog-container">
    <h1 class="text-4xl font-bold text-center my-10">Blog</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- 博客文章列表 -->
      <div class="blog-post" v-for="post in posts" :key="post.id">
        <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
        <p>{{ post.summary }}</p>
        <!-- 更多博客内容... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      posts: [
        // 假设的博客数据
        { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1...' },
        // 更多博客文章...
      ],
    };
  },
};
</script>

<style scoped>
.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.blog-post {
  background: #f7f7f7;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
</style>

