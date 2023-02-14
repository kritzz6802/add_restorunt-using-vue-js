<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'headerPage',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: 'loginPage'
            })
        }
    }
}
</script>

<style>
.nav {
    background-color: green;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right: 4px;
}

.nav a:hover {
    background-color: #ddd;
    color: #222;
}
</style>
