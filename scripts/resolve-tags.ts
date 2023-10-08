import fs from 'fs-extra'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { resolvePath } from './utils'
import { slugify } from '.'

export function resolveTags(routes: any[]) {
  const tagMap: { [key: string]: { path: string; blogs: string[] } } = {}

  routes
    .filter(item => item.meta?.layout === 'post')
    .forEach((item) => {
      item.meta.frontmatter.tags?.forEach((tag: string) => {
        if (tag in tagMap) { tagMap[tag].blogs.push(item.path) }
        else {
          tagMap[tag] = {
            path: `/posts/tags/${slugify(tag)}`,
            blogs: [item.path],
          }
        }
      })
    })

  return routes.map((item) => {
    if (item.path === '/posts' || item.path.startsWith('/posts/tags/')) {
      if (!item.meta)
        item.meta = {}
      item.meta.tagMap = tagMap
    }
    return item
  })
}

export async function getTagPathsFromFiles(
  sourceDir: string,
  exclude?: string[],
) {
  sourceDir = resolvePath(sourceDir)

  const files = await fg('**/*.md', { cwd: sourceDir, ignore: exclude })
  const tags: Set<string> = new Set()

  await Promise.all(
    files.map(async (f) => {
      const raw = await fs.readFile(`${sourceDir}/${f}`)
      const { data } = matter(raw)
      data.tags?.forEach((tag: string) =>
        tags.add(`/posts/tags/${slugify(tag)}`),
      )
    }),
  )

  return [...tags]
}
