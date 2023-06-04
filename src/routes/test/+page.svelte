<main class="d-flex flex-column align-items-center my-5">
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
    <div class="p-100"></div>
    <div class="p-200"></div>
    <div class="p-300"></div>
    <div class="p-400"></div>
    <div class="p-500"></div>
    <div class="p-600"></div>
    <div class="p-700"></div>
    <div class="p-800"></div>
    <div class="p-900"></div>
  </section>
  <section class="d-flex flex-wrap">
    <div class="a-100"></div>
    <div class="a-200"></div>
    <div class="a-300"></div>
    <div class="a-400"></div>
    <div class="a-500"></div>
    <div class="a-600"></div>
    <div class="a-700"></div>
    <div class="a-800"></div>
    <div class="a-900"></div>
  </section>
</main>

<style lang="scss">
  @each $color, $value in $grays {
    .g-#{$color} { background-color: $value; }
  }

  @each $color, $value in $primarys {
    .p-#{$color} { background-color: $value; }
  }

  @each $color, $value in $accents {
    .a-#{$color} { background-color: $value; }
  }

  div {
    width: 120px;
    height: 120px;
  }
</style>