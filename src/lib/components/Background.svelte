<div class="background">
  <div class="background__layer"></div>
</div>

<style lang="scss">
  .background {
    // background-color: rgba(red, .5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
  }
  
  .background__layer {
    background: linear-gradient($background, $background),
                url('$lib/assets/images/background-1.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
</style>
