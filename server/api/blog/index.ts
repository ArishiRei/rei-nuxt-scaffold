import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export default defineEventHandler(async (event) => {
  const postsDir = path.join(process.cwd(), 'posts', 'blog')
  
  try {
    if (!fs.existsSync(postsDir)) {
      return []
    }

    const files = fs.readdirSync(postsDir).filter(file => file.endsWith('.md'))
    
    const posts = files.map(file => {
      const filePath = path.join(postsDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(fileContent)
      const slug = file.replace('.md', '')
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || '',
        tags: data.tags || []
      }
    })

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})
