<template>
  <div class="home">
    <div class="m-auto">
      <Game />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Game from "@/components/Game.vue";

export default {
  name: "home",
  components: {
    Game
  }
};
</script>
