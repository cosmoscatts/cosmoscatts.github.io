import fs from 'fs-extra'
import matter from 'gray-matter'
import { type BlogMeta, getBlogs } from '../shared'
import { lastUpdated, readingTime } from './blog'
import { resolvePath } from './utils'

function isBlog(route: any) {
  return route.path.startsWith('/posts')
  && route.path !== '/posts'
  && !route.path.startsWith('/posts/tags')
}

export function resolveBlogFile(route: any) {
  if (!isBlog(route))
    return

  const path = resolvePath(route.component.slice(1))
  const md = fs.readFileSync(path, 'utf-8')
  const { content, data } = matter(md)

  route.meta = Object.assign(route.meta || {}, {
    frontmatter: data,
    layout: 'post',
    date: route.path.substring(7, 17),
    readingTime: readingTime(content),
    lastUpdated: lastUpdated(path),
  } as BlogMeta)

  return route
}

export function resolveBlogList(routes: any[]) {
  const blogs = getBlogs(routes)

  return routes
    .filter(item => isBlog(item))
    .map((item) => {
      const i = blogs.findIndex(blog => blog.path === item.path)

      item.meta = {
        ...item.meta,
        prev: i < blogs.length ? blogs[i + 1] : null,
        next: i > 0 ? blogs[i - 1] : null,
      } satisfies BlogMeta

      return item
    })
}
