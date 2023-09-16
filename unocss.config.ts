import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['border-c', 'border-gray-200 dark:border-gray-600'],
    ['border-c-dark', 'border-gray-300 dark:border-gray-500'],
    ['bg-c', 'bg-white dark:bg-gray-700'],
    ['bg-item', 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-600'],
    ['text-c', 'text-[#4E5969] dark:text-[#C5C5C5]'],
    ['text-c-light', 'text-c opacity-85'],
    ['text-c-lighter', 'text-c opacity-50'],
    ['text-c-dark', 'text-black dark:text-white'],
    ['text-c-active', 'text-brand dark:text-blue-300'],
    ['nav-item', 'flex items-center space-x-1 text-c hover:text-c-dark'],
    [
      'btn',
      'flex items-center space-x-1 rounded transition-colors decoration-none text-sm !text-c bg-gray-100/90 dark:bg-gray-50/10 hover:!no-underline hover:(!bg-gray-500 !text-white !no-underline)',
    ],
    ['prose-lg', 'lg:text-lg max-w-content'],
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
  ],
  theme: {
    fontFamily: {
      sans: 'Computer Modern Sans, LXGW WenKai, HKST',
    },
    boxShadow: {
      nav: '0 1px 8px 0 rgba(27, 35, 47, .1)',
    },
    colors: {
      brand: '#1772d0',
    },
    maxWidth: {
      content: '90ch',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'sub',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        ui: 'DM Sans:400,700',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: 'prose prose-lg m-auto text-left'.split(' '),
})
