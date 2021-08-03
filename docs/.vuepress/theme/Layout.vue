<template>
  <div class="container" :class="containerClass">
    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'

export default defineComponent({
  name: 'Layout',
  setup() {
    const page = usePageData()
    const frontmatter = usePageFrontmatter<any>()

    // classes
    const containerClass = computed(() => [
      frontmatter.value.pageClass,
    ])

    return {
      page,
      frontmatter,
      containerClass
    }
  }
})
</script>


<style lang="scss" scoped>
</style>