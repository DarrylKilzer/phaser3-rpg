<template>
  <div id="game-container" v-if="downloaded" />
  <div class="placeholder text-white" v-else>Downloading ...</div>
</template>


<script>
export default {
  name: "Game",
  data() {
    return {
      downloaded: false
    };
  },
  async mounted() {
    const game = await import(/* webpackChunkName: "game" */ "@/game/game");
    this.downloaded = true;
    this.$nextTick(() => game.launch());
  }
};
</script>


<style scoped>
.placeholder {
  font-size: 2rem;
  font-family: "Courier New", Courier, monospace;
}
</style>