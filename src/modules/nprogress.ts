import NProgress from 'nprogress'
import type { RouteLocationNormalized } from 'vue-router'
import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient) return

  router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    if (to.path !== from.path) {
      NProgress.start()
    }
  })
  router.afterEach(() => NProgress.done())
}
