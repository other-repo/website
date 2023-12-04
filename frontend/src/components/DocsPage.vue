<template>
  <div class="docs-container flex">
    <!-- 目录 -->
    <div class="toc-container border-r border-gray-200" style="width: 20%;">
      <ul class="toc">
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`">{{ section.title }}</a>
        </li>
      </ul>
    </div>
    <!-- 文档内容 -->
    <div class="content-container" style="width: 80%;">
      <div v-for="section in sections" :key="section.id" :id="section.id">
        <h2 class="text-2xl font-semibold">{{ section.title }}</h2>
        <p>{{ section.content }}</p>
        <!-- 更多文档内容... -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsPage',
  data() {
    return {
      sections: [
        // 假设的文档数据
        { id: 'section1', title: 'Section 1', content: 'Content of section 1...' },
        // 更多文档部分...
      ],
    };
  },
};
</script>

<style scoped>
.toc-container {
  padding: 2rem;
}

.content-container {
  padding: 2rem;
}

.toc li {
  margin-bottom: 0.5rem;
}
</style>

