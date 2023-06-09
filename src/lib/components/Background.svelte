<script>
  import backgrounds from '$lib/services/backgrounds.js'

  export let background = 0

  switch(background) {
    case "forest":
      background = 0
      break
    case "tundra":
      background = 1
      break
    case "ocean":
      background = 2
      break
  }
</script>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  
  .background__layer {
    background: linear-gradient($background, $background),
                var(--bg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
</style>

<div class="background">
  <div 
    class="background__layer"   
    style="--bg: url({backgrounds[background]});"
  ></div>
</div>
