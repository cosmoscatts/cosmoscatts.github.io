import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer'

// @ts-expect-error missing types
import container from 'markdown-it-container'

type ContainerArgs = [typeof container, string, { render: RenderRule }]

function createContainer(clazz: string,
  defaultTitle: string,
  md: MarkdownIt): ContainerArgs {
  return [
    container,
    clazz,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(clazz.length).trim()
        if (token.nesting !== 1) return clazz === 'details' ? '</details>\n' : '</div>\n'
        const title = md.renderInline(info || defaultTitle)
        if (clazz === 'details') {
          return `<details class="${clazz} custom-block"><summary>${title}</summary>\n`
        }
        return `<div class="${clazz} custom-block"><p class="custom-block-title">${title}</p>\n`
      },
    },
  ]
}

function createPubContainer(): ContainerArgs {
  return [
    container,
    'pub',
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(3).trim()
        if (token.nesting !== 1) return '</div></div>\n'
        if (info !== '') {
          const images
            = `<div>${
             info
              .split(' ')
              .map((src) => {
                const alt = src.match(/(?=[^\/]+$).*(?=\.)/)
                return `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" />`
              })
              .join('')
             }</div>`
          return `<div class="pub-block"><div class="pub-images">${images}</div><div class="pub-details">\n`
        }
        return '<div class="pub-block"><div class="pub-images no-image"></div><div class="pub-details">\n'
      },
    },
  ]
}

function containerPlugin(md: MarkdownIt) {
  md.use(...createContainer('tip', 'TIP', md))
    .use(...createContainer('info', 'INFO', md))
    .use(...createContainer('warning', 'WARNING', md))
    .use(...createContainer('danger', 'DANGER', md))
    .use(...createContainer('details', 'Details', md))
    .use(...createPubContainer())
}

export default containerPlugin
