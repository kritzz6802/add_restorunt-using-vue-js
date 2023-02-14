<template>
<!-- <img alt="Vue logo" src="./assets/logo8.png"> -->
<HeaderPage />
<router-view />
<!-- <SignUp/> -->
</template>

<script>
// import SignUp from './components/signUp.vue';

import HeaderPage from './components/headerPage.vue';

export default {
    name: "App",
    components: {
        HeaderPage
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    padding: 0;
    margin: 0;
}

table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

td,
th {
    border: 1px solid black;
    width: 160px;
    height: 40px;
}

.register input,
.login input,
.add input ,
.update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid green;
}

.register button,
.login button,
.add button ,
.update button {
    width: 320px;
    height: 40px;
    border: 1px solid green;
    color: white;
    background: green;
    cursor: pointer;
}
</style>
