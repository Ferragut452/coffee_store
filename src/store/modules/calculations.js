const calculations = {
  namespaced: true,
  state: {
    orders: [],
    payments: [],
    prices: [],
  },
  getters: {},
  mutations: {
    setOrders(state, payload) {
      state.orders = payload
    },
    setPayments(state, payload) {
      state.payments = payload
    },
    setPrices(state, payload) {
      state.prices = payload
    },
  },
  actions: {
    async getPrices({ commit }) {
      return fetch("http://localhost:5000/prices")
        .then((res) => res.json())
        .then((data) => {
          commit("setPrices", data)
          return data
        })
    },

    async getPayments({ commit }) {
      return fetch("http://localhost:5000/payments")
        .then((res) => res.json())
        .then((data) => {
          let holder = {}

          data.forEach(function(d) {
            if (holder.hasOwnProperty(d.user)) {
              holder[d.user] = holder[d.user] + d.amount
            } else {
              holder[d.user] = d.amount
            }
          })

          let obj2 = []

          for (let prop in holder) {
            obj2.push({ user: prop, paymentSum: holder[prop] })
          }

          commit("setPayments", obj2)

          return obj2
        })
    },

    async getOrders({ state, commit, dispatch }) {
      await dispatch("getPrices")
      await dispatch("getPayments")
      return fetch("http://localhost:5000/orders")
        .then((res) => res.json())
        .then((data) => {
          function groupArrayOfObjects(list, key) {
            return list.reduce(function(rv, x) {
              ;(rv[x[key]] = rv[x[key]] || []).push(x)
              return rv
            }, {})
          }

          let groupedPeople = groupArrayOfObjects(data, "user")

          for (let key in groupedPeople) {
            groupedPeople[key] = groupedPeople[key].map((el) => {
              state.prices.forEach((price) => {
                if (price.drink_name == el.drink) {
                  var price = { price: price.prices[el.size] }
                  el = { ...el, ...price }

                  return el
                }
              })

              return el
            })

            let sum = groupedPeople[key].reduce(
              (accumulator, current) => accumulator + current.price,
              0
            )
            groupedPeople[key] = {
              ...{ purchases: groupedPeople[key] },
              ...{ sum: sum },
            }

            Object.keys(state.payments).forEach((pay) => {
              if (state.payments[pay].user == key) {
                let peymentSum = {
                  paymentSum: state.payments[pay].paymentSum,
                  balance:
                    state.payments[pay].paymentSum - groupedPeople[key].sum,
                  owed:
                    state.payments[pay].paymentSum < groupedPeople[key].sum
                      ? true
                      : false,
                }
                groupedPeople[key] = { ...groupedPeople[key], ...peymentSum }
                return groupedPeople[key]
              }
            })
          }
          commit("setOrders", groupedPeople)
          return groupedPeople
        })
    },
  },
}

export default calculations
