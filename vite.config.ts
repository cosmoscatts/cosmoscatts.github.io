import { resolve } from 'path'
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
  installMarkdownPlugins,
  resolvePostFile,
  resolvePostList,
} from './scripts'

export default defineConfig({
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
      extendRoute: route => resolvePostFile(route),
      onRoutesGenerated: routes => resolvePostList(routes),
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
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
    }),
    Unocss(),
    Markdown({
      wrapperClasses: 'prose prose-lg m-auto text-left',
      headEnabled: true,
      markdownItSetup: md => installMarkdownPlugins(md),
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished: () => generateSitemap(),
  },
})
