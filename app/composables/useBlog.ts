export const useBlog = () => {
  const getPosts = async () => {
    return await useFetch<BlogPost[]>('/api/blog')
  }

  const getPost = async (slug: string) => {
    return await useFetch<BlogPost>(`/api/blog/${slug}`)
  }

  return {
    getPosts,
    getPost
  }
}
