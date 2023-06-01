<section class="d-flex flex-wrap">
  <div class="g-100"></div>
  <div class="g-200"></div>
  <div class="g-300"></div>
  <div class="g-400"></div>
  <div class="g-500"></div>
  <div class="g-600"></div>
  <div class="g-700"></div>
  <div class="g-800"></div>
  <div class="g-900"></div>
</section>
<section class="d-flex flex-wrap">
  <div class="p"></div>
</section>

<style lang="scss">
  div {
    width: 120px;
    height: 120px;
  }

  @each $color, $value in $grays {
    .g-#{$color} { background-color: $value; }
  }

  .p {
    background-color: $primary;
  }
</style>