<template>
  <div class="wrap">
    <div class="prices">
      <h2 v-if="prices">Prices</h2>
      <ul class="drink-list">
        <li :key="index" v-for="(drink, index) in prices" class="drink">
          <div class="name">{{ drink.drink_name }}</div>
          <ul class="types">
            <li
              :key="index"
              v-for="(price, key, index) in drink.prices"
              class="type"
            >
              {{ key }} <span class="price">{{ price }}$</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Prices",
  computed: {
    ...mapState("calculations", ["prices"]),
  },
  methods: {
    ...mapActions("calculations", ["getPrices"]),
  },
  mounted() {
    this.getPrices();
  },
};
</script>

<style lang="scss" scoped>
.drink {
  background-color: #eeeeee;
  margin-bottom: 15px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .name {
    font-weight: 800;
    text-transform: uppercase;
  }
}
.types {
  display: flex;
}

.type {
  background-color: #fff;
  border-radius: 25px;
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

.price {
  margin-left: 2px;
}
</style>
