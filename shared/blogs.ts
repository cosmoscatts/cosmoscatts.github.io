import dayjs from 'dayjs'
import type { RouteMeta } from 'vue-router'
import type { ReadingTime } from '../scripts/blog'

export interface BlogFrontmatter {
  title: string
}

export interface BlogType {
  path: string
  title: string
  lang: string
  date: string
  excerpt?: string
}

export interface BlogMeta extends RouteMeta {
  frontmatter: BlogFrontmatter
  layout: 'post'
  date: string
  excerpt: string
  readingTime: ReadingTime
  lastUpdated: string
  prev: BlogType | null
  next: BlogType | null
}

export function getBlogs(
  routes: any[],
  options?: {
    tag?: string
  }): BlogType[] {
  return routes
    // is blog
    .filter((item: any) => item.meta?.layout === 'post' && !!item.name)
    // check tags
    .filter((item: any) =>
      options?.tag ? item.meta.frontmatter.tags?.includes(options.tag) : true,
    )
    .map(
      (item: any): BlogType => ({
        path: item.path,
        title: item.meta.frontmatter.title,
        lang: item.meta.frontmatter?.lang ?? 'zh',
        date: item.meta.date,
        excerpt: item.meta.frontmatter?.excerpt ?? '',
      }),
    )
    // sort by date (reverse order)
    .sort((a, b) => dayjs(b.date).unix() - dayjs(a.date).unix())
}
