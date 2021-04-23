<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Prices</router-link>
      <router-link to="/calculations">Calculations</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  background-color: #ccf5ff;
}

button {
  font-family: "Cairo", sans-serif;
}

h2 {
  font-size: 22px;
  border-left: 2px solid #000;
  padding-left: 10px;
}

a {
  text-decoration: none;
  display: block;
  color: #000;
}

img {
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

#app {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1180px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  position: relative;
}

.wrap {
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
}

.main-nav {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
  }
}

#nav {
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
