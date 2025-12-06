<script setup lang="ts">
const route = useRoute()
const { getPost } = useBlog()
const localePath = useLocalePath()

const slugParam = route.params.slug
const slug = Array.isArray(slugParam) ? slugParam.join('/') : (slugParam || '')

const { data: post, pending, error } = await getPost(slug)

useHead({
  title: computed(() => post.value?.title || 'Blog Post'),
  meta: [
    { name: 'description', content: computed(() => post.value?.description || '') }
  ]
})
</script>

<template>
  <div class="blog-post-page">
    <div v-if="pending" class="loading">{{ $t('blog.loading') }}</div>
    <div v-else-if="error" class="error">
      <h1>{{ $t('blog.error', { message: error.message }) }}</h1>
      <NuxtLink :to="localePath('/blog')" class="back-link">← {{ $t('blog.back') }}</NuxtLink>
    </div>
    <article v-else class="post-content">
      <header class="post-header">
        <NuxtLink :to="localePath('/blog')" class="back-link">← {{ $t('blog.back') }}</NuxtLink>
        <h1 class="title">{{ post?.title }}</h1>
        <div class="meta">
          <time>{{ post?.date ? new Date(post.date).toLocaleDateString() : '' }}</time>
          <div class="tags" v-if="post?.tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
        </div>
      </header>
      
      <div class="markdown-body" v-html="post?.content"></div>
    </article>
  </div>
</template>

<style scoped>
.blog-post-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.post-header {
  margin-bottom: 3rem;
}
.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #666;
  text-decoration: none;
}
.back-link:hover {
  color: #00dc82;
}
.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}
.meta {
  color: #888;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.tag {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #555;
}
.markdown-body {
  line-height: 1.8;
  color: #333;
}
/* Basic Markdown Styles */
:deep(.markdown-body h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
:deep(.markdown-body p) {
  margin-bottom: 1.5rem;
}
:deep(.markdown-body pre) {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
}
:deep(.markdown-body code) {
  background: #f4f4f4;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
:deep(.markdown-body pre code) {
  background: transparent;
  padding: 0;
}
</style>
