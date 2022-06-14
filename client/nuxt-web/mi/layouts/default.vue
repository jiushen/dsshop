<template>
  <div class="body">
    <Header v-if="!isDemo" />
    <template v-if="!isDev">
      <Nuxt keep-alive/>
    </template>
    <template v-else>
      <Nuxt/>
    </template>

    <Footer v-if="!isDemo"/>
    <el-backtop v-if="!isDemo"/>
  </div>
</template>

<style lang='scss' scoped>
  @import "./scss/default";
</style>

<script>
import js from './js/default'
export default js
</script>
