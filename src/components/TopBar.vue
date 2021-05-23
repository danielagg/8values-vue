<template>
  <main>
    <div class="wrapper">
      <div class="content">
        <h1>8Values</h1>
        <h2>
          Az 8values önmagában egy politikai kvíz ami százalékokat próbál
          rendelni 8 különböző politikai értékrendhez.
        </h2>
        <p>
          Különböző megállapításokat, kijelentéseket fogsz kapni amelyeket az
          alapján kell értékelned hogy mennyire értesz egyet a Kifejezetten
          egyetértek vagy Kifejezetten nem értek egyet vagy azok közé eső
          értékek egyikét kiválasztva. Minden válasz hatással lesz a pontjaidra.
          A kvíz végén kapsz egy százalékértéket azt illetően hogy melyik érték
          áll hozzád a legközelebb.
        </p>
        <h3>Válaszolj őszintén 70 kérdésre!</h3>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

main::before {
  content: "";
  width: 500px;
  height: 500px;
  background: white;
  opacity: 8%;
  display: block;
  position: absolute;
  border-radius: 100%;
  top: -180px;
  left: -130px;
}

main {
  color: white;

  background: rgb(82, 55, 195);
  background: linear-gradient(
    315deg,
    rgba(82, 55, 195, 1) 0%,
    rgba(32, 146, 249, 1) 100%
  );

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    margin: 1rem 0;
  }

  h2,
  h3 {
    margin: 1.4rem 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
  }

  .wrapper {
    padding: 2rem 0;
    width: 70%;
    margin: 0 auto;
  }

  .content {
    width: 60%;
  }

  .startTest {
    margin-top: 3rem;
  }
}
</style>
