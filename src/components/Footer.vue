<template>
  <footer text="16px center" mt-20 w-52vw mx-auto slide-enter animate-delay-800 flex items-center justify-between lt-md:justify-center>
    <div text-c-lighter>
      © Cosmoscatts 2023 <span lt-md:hidden>· Just infected with a disease called curiosity.</span>
    </div>
    <div flex items-center gap-3 lt-md:hidden>
      <a text-c op-50 hover:op-100 flex items-center cursor-pointer href="https://github.com/cosmoscatts/cosmoscatts.github.io" title="Code" target="_blank" rel="noopener noreferrer">
        <div i-carbon-code mr-1 />
        Code
      </a>
      <a text-c op-50 hover:op-100 flex items-center cursor-pointer href="/feed.xml" title="RSS" target="_blank" rel="noopener noreferrer">
        <div i-jam:rss-feed mr-1 />
        RSS
      </a>
    </div>
  </footer>
</template>
