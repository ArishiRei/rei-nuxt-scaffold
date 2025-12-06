import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export default defineEventHandler(async (event) => {
  const slugParam = getRouterParam(event, 'slug')
  // slugParam might be a string (if single segment) or just the param content. 
  // In Nuxt 4 / Nitro, [...slug] results in the captured string, usually slash separated if it was caught by catch-all?
  // Actually, let's verify how getRouterParam works with [...slug].
  // Usually it returns the string. If I need array I might need to split.
  // But wait, getRouterParam returns the value of the parameter.
  
  if (!slugParam) {
    throw createError({ statusCode: 400, statusMessage: 'Missing slug' })
  }

  // Sanitize path to prevent directory traversal
  const safeSlug = slugParam.replace(/\.\./g, '')
  const filePath = path.join(process.cwd(), 'posts', 'blog', `${safeSlug}.md`)

  if (!fs.existsSync(filePath)) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Post not found'
    })
  }

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)
    const renderedContent = md.render(content)

    return {
      slug: safeSlug,
      title: data.title || safeSlug,
      date: data.date,
      description: data.description,
      tags: data.tags,
      content: renderedContent,
      raw: content
    }
  } catch (error) {
    console.error(`Error reading post ${safeSlug}:`, error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error'
    })
  }
})
