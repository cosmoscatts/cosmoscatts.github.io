import type { ComputedRef } from 'vue'
import { type BlogType, getBlogs } from '../../shared'

export function useBlog(tag?: ComputedRef<string | undefined>) {
  const router = useRouter()

  const blogs = computed<BlogType[]>(() =>
    getBlogs(router.getRoutes(), { tag: tag?.value }),
  )

  const yearToBlog = computed(() => {
    const map: Record<string, BlogType[]> = {}

    for (const b of blogs.value) {
      const y = b.date.substring(0, 4)
      map[y] ? map[y].push(b) : (map[y] = [b])
    }

    return map
  })

  return { blogs, yearToBlog }
}
