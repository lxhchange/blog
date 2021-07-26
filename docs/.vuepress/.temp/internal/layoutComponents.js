import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/klook/Documents/GitHub/blog/docs/.vuepress/theme/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/klook/Documents/GitHub/blog/docs/.vuepress/theme/Layout.vue")),
}
