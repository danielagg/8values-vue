<template>
  <div>
    <div class="wrapper">
      <main>
        <h1>Mi az 8values által meghatározott 8 érték?</h1>
        <h2>
          Négy független tengelyt határoztunk meg, - Gazdaság, Diplomácia,
          Állam, és Társadalom - amelyekhez két-két egymással szemben álló érték
          van rendelve:
        </h2>

        <div class="categories">
          <div class="left">
            <ul>
              <li v-for="item in dataLeft" :key="item.id">
                <p class="title">
                  <span class="strong-title">{{ item.title }}</span> ({{
                    item.titleCategory
                  }})
                </p>
                <p class="desc">
                  {{ item.desc }}
                </p>
              </li>
            </ul>
          </div>

          <div class="right">
            <ul>
              <li v-for="item in dataRight" :key="item.id">
                <p class="title">
                  <span class="strong-title">{{ item.title }}</span> ({{
                    item.titleCategory
                  }})
                </p>
                <p class="desc">
                  {{ item.desc }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About8Values",
  setup() {
    return {
      dataLeft: [
        {
          id: 1,
          title: "Egyenlőség",
          titleCategory: "Gazdasági",
          desc:
            "A magasabb Egyenlőség értékkel rendelkezők általában abban hisznek hogy a vagyont egyenlően lenne érdemes elosztani a lakosságon belül. Támogatják a több kulcsos adórendszereket, a társadalmi programokat, magasabb értékeknél a szocializmust.",
        },
        {
          id: 2,
          title: "Piac",
          titleCategory: "Gazdasági",
          desc:
            "A magasabb Piac értékkel rendelkezők abban hisznek hogy a gazdaságnak a gyors gyarapodásra kell fókuszálnia. Támogatják az alacsony adókat, a privatizációt, a deregulációt, magasabb értékeknél pedig a laissez-faire kapitalizmust.",
        },
        {
          id: 3,
          title: "Nemzet",
          titleCategory: "Diplomácia",
          desc:
            "A magasabb Nemzet értékkel rendelkezők hazafiasak és nacionalisták. Gyakran a szigorú külpolitikában hisznek, nagy hangsúlyt fektetve a katonaságra, az erőre, a felségjogra, magasabb értékeknél pedig a területi terjeszkedés támogatói.",
        },
        {
          id: 4,
          title: "Föld",
          titleCategory: "Diplomácia",
          desc:
            "A magasabb Világ értékkel rendelkezők kozmopoliták és globalisták. Gyakran békés külpolitikában hisznek, magasabb értékeknél a világkormányokban, és alapvetően nagy hangsúlyt fektetve a diplomáciára, az együttműködésre, az integrációra.",
        },
      ],
      dataRight: [
        {
          id: 5,
          title: "Szabadság",
          titleCategory: "Állam",
          desc:
            "A magasabb Szabadság értékkel rendelkezők a polgári szabadságjogok elkötelezett hívei. Támogatják a demokráciát és ellenzik az állami beavatkozást az emberek magánéletébe. Megjegyzés: ez kizárólag a polgári szabadságjogokra vonatkozik, a gazdasági szabadságjogokra nem.",
        },
        {
          id: 6,
          title: "Tekintély",
          titleCategory: "Állam",
          desc:
            "A magasabb Tekintély ponttal rendelkezők az erős államok hívei. Támogatják az állam beavatkozását a magánéletbe, az állami megfigyelést, magasabb értékeknél a cenzúrát és az autokráciát.",
        },
        {
          id: 7,
          title: "Hagyomány",
          titleCategory: "Társadalom",
          desc:
            "A magasabb Hagyomány értékkel rendelkezők a hagyományos értékek és az erkölcsi szabályok szigorú betartatásának hívei. Bár nem minden esetben, de gyakran vallásosak és vagy a fennálló állapotot támogatják, vagy szeretnék visszaállítani az általuk megszokott fennálló állapotot.",
        },
        {
          id: 8,
          title: "Haladás",
          titleCategory: "Társadalom",
          desc:
            "A magasabb Haladás értékkel rendelkezők a társadalmi fejlődés és a racionalitás hívei. Bár nem minden esetben, de gyakran világi vagy ateista felfogásúak, egyúttal a környezetvédelmi cselekvések, a tudományos és technológiai kutatások támogatói.",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.wrapper {
  background: rgba(32, 146, 249, 1);
  color: white;
  padding: 3rem 0;
}

main {
  padding: 2rem 0;
  width: 70%;
  margin: 0 auto;
}

h2 {
  margin: 1.4rem 0 3rem 0;
}

.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left {
  width: 47%;
}

.right {
  width: 47%;
}

li {
  font-size: 1.2rem;
  padding-bottom: 1.6rem;
}

.title {
  margin-bottom: 0.4rem;
}

.strong-title {
  font-weight: 800;
}

.desc {
  font-size: 1rem;
}
</style>
