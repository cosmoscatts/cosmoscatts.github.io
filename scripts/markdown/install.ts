import type MarkdownIt from 'markdown-it'
import LinkAttributes from 'markdown-it-link-attributes'
// @ts-expect-error missing types
import TOC from 'markdown-it-table-of-contents'
import anchor from 'markdown-it-anchor'
import { slugify } from '..'
import CodeBlock from './codeBlock'
import HighlightLines from './highlightLines'
import Container from './container'

export const installMarkdownPlugins = (md: MarkdownIt) => {
  md.use(HighlightLines)
  md.use(CodeBlock)
  md.use(Container)

  md.use(anchor, {
    slugify,
    permalink: anchor.permalink.linkInsideHeader({
      symbol: '#',
      ariaHidden: true,
    }),
  })

  md.use(LinkAttributes, {
    matcher: (link: string) => /^https?:\/\//.test(link),
    attrs: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  })

  md.use(TOC, {
    includeLevel: [2, 3],
    slugify: (s: string) => decodeURI(slugify(s)),
  })
}
