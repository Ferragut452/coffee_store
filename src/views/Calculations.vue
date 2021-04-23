<template>
  <div class="wrap">
    <div class="calculations">
      <h2>Calculations</h2>
      <ul class="client__heading">
        <li>Name</li>
        <li>Orders</li>
        <li>Payment</li>
        <li>Balance</li>
        <li>Owed</li>
      </ul>
      <ul class="clients">
        <li :key="key" v-for="(order, key) in orders">
          <div class="client">
            <ul class="client__info">
              <li>{{ key }}</li>
              <li>{{ order.sum }}</li>
              <li>{{ order.paymentSum }}</li>
              <li>{{ order.balance }}</li>
              <li>{{ owed(order.owed) }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Calculations",
  computed: {
    ...mapState("calculations", ["orders"]),
  },
  methods: {
    ...mapActions("calculations", ["getOrders"]),
    owed(el) {
      return el ? "yes" : "no";
    },
  },
  mounted() {
    this.getOrders();
  },
};
</script>

<style lang="scss" scoped>
.clients {
  border: 1px solid #eeeeee;
  & > li:nth-child(even) {
    background-color: #eeeeee;
  }
}
.client {
  &__heading,
  &__info {
    display: flex;
    li {
      width: 20%;
      padding: 5px;
    }
  }

  &__heading {
    background-color: #42b983;
    color: #fff;
  }
}
</style>
