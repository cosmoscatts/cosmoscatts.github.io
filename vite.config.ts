import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import Unocss from 'unocss/vite'
import generateSitemap from 'vite-ssg-sitemap'
import {
  generateRSS,
  getTagPathsFromFiles,
  installMarkdownPlugins,
  resolveBlogFile,
  resolveBlogList,
  resolveTags,
  shiki,
} from './scripts'
import {
  author,
  description,
  hostname,
  shikiTheme,
  title,
} from './shared'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      pagesDir: 'pages',
      extensions: ['vue', 'md'],
      extendRoute: (route) => {
        resolveBlogFile(route)
      },
      onRoutesGenerated: (routes) => {
        resolveBlogList(routes)
        resolveTags(routes)
      },
    }),
    Layouts(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dirs: ['src/composables'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Unocss(),
    Markdown({
      wrapperClasses: (_id, code) => code.includes('@layout-full-width')
        ? ''
        : 'prose prose-lg m-auto text-left slide-enter-content',
      headEnabled: true,
      markdownItOptions: {
        highlight: await shiki(shikiTheme),
      },
      markdownItSetup: installMarkdownPlugins,
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished: () => {
      generateSitemap({
        hostname,
      })
      generateRSS({
        hostname,
        title,
        description,
        author,
        sourceDir: 'pages/posts',
        exclude: ['index.md', 'tags/*'],
      })
    },
    includedRoutes: async (paths) => {
      const p = paths.filter(
        i => !['/:all(.*)*', '/posts/tags/:all(.*)', ''].includes(i),
      )
      const tags = await getTagPathsFromFiles('pages/posts', [
        'index.md',
        'tags/*',
      ])
      return p.concat(tags)
    },
  },
})
