---
socials:
  - icon: i-eva:github-outline
    link: https://github.com/cosmoscatts
  - icon: i-ri:twitter-fill
    link: https://github.com/cosmoscatts
    alias: 'twitter'
  - icon: i-ant-design:zhihu-outlined
    link: https://www.zhihu.com/people/ling-yun-81-14-57
    alias: 'zhihu'
  - icon: i-ri-bilibili-fill
    link: https://space.bilibili.com/434559284?spm_id_from=333.1007.0.0
    alias: 'bilibili'
---

<div flex justify-between items-end>
  <div text-2xl sm:text-4xl font-bold>
    <div>Hi, I'm <span text-c-dark>Cosmoscatts</span>👋。</div>
    <div flex>A Full Stack <Developer ml-3 /></div>
    <Links :links="frontmatter.socials" mt-5/>
  </div>
  <div 
    class="p-1 mb-1 border border-c rounded-full hidden md:block"
    shadow="[inset_0_0_10px_#000000] slate-200 dark:slate-800"
  >
    <FlipImage class="!w-40" src="/avatar.jpg" alt="avatar" />
  </div>
</div>

---

<div grid="~ cols-4" gap-3 lt-md:grid-cols-3>
  <div lt-md:hidden flex justify-center items-center col-span-1>
    <img rounded-md w-160px src="/images/home/hello.png" alt="hello">
  </div>
  <p col-span-3>
    I am a software developer living in Nanjing, currently engaged in back-end research and development. I also have a strong interest in front-end development, and I am also trying to write some front-end toys in my spare time. I like making interesting projects. <br/><br/>
    Here, I will record my thoughts and ideas, feel free to browse around.
  </p>
</div>

![](/images/home/bg.jpg)

## Information

You can use the following information to present me:

<div grid="~ cols-[max-content_1fr] gap-1" border-c-dark border-1 p-3 rounded-md>
  <div text-right pr2 op50 font-bold>Name</div>
  <TextCopy>Cosmoscatts</TextCopy>

  <div text-right pr2 op50 font-bold>Avatar</div>
  <div><a href="https://cosmoscatts.ren/avatar.jpg" target="_blank">https://cosmoscatts.ren/avatar.jpg</a></div>

  <div text-right pr2 op50 font-bold>Introduction</div>
  <TextCopy>A full stack developer. Just infected with a disease called curiosity.</TextCopy>

  <div text-right pr2 op50 font-bold>Location</div>
  <TextCopy>Nanjing, China</TextCopy>

  <div text-right pr2 op50 font-bold>Company</div>
  <TextCopy>Undefined</TextCopy>

  <div text-right pr2 op50 font-bold>Website</div>
  <TextCopy><a href="https://cosmoscatts.ren" target="_blank">cosmoscatts.ren</a></TextCopy>

  <div text-right pr2 op50 font-bold>GitHub</div>
  <TextCopy><a href="https://github.com/cosmoscatts" target="_blank">@cosmoscatts</a></TextCopy>
</div>

## Miscellaneous

- 🚀 This [personal website](https://github.com/cosmoscatts/cosmoscatts.github.io) is built on [Vitesse](https://github.com/antfu/vitesse), with the power of [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite) and [UnoCSS](https://github.com/antfu/unocss).

- 🤣 I'm cosmoscatts 🧑🏻‍💻.

- 👾 `Java` crud boy, sometimes maybe `切图仔`.

- 🚀 Learning `TypeScript`, `Vue` and `Spring Cloud`.

- 🕹️ Currently interested in constructing buildings in vue.

- 🍔 A dream come true: `while(true) { money++; }`.

<route lang="yaml">
meta: 
  layout: about
</route>

