<script setup lang="ts">
const { getPosts } = useBlog()
const { data: posts, pending, error } = await getPosts()
const localePath = useLocalePath()
</script>

<template>
  <div class="blog-index">
    <h1>{{ $t('blog.title') }}</h1>
    <p class="subtitle">{{ $t('blog.subtitle') }}</p>

    <div v-if="pending" class="loading">{{ $t('blog.loading') }}</div>
    <div v-else-if="error" class="error">{{ $t('blog.error', { message: error.message }) }}</div>
    
    <div v-else class="posts-grid">
      <div v-for="post in posts" :key="post.slug" class="post-card">
        <NuxtLink :to="localePath(`/blog/${post.slug}`)" class="post-link">
          <h2>{{ post.title }}</h2>
          <div class="meta">
            <span class="date">{{ new Date(post.date).toLocaleDateString() }}</span>
            <span v-if="post.tags" class="tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
            </span>
          </div>
          <p class="description">{{ post.description }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-index {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.subtitle {
  color: #666;
  margin-bottom: 2rem;
}
.posts-grid {
  display: grid;
  gap: 2rem;
}
.post-card {
  border: 1px solid #eee;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
}
.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.post-link {
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
}
.post-link h2 {
  margin: 0 0 0.5rem 0;
  color: #333;
}
.meta {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.tag {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
.description {
  color: #555;
  line-height: 1.5;
}
.loading, .error {
  text-align: center;
  padding: 2rem;
  color: #666;
}
.error {
  color: #d32f2f;
}
</style>
