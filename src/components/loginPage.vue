<template>

<img class="logo" alt="resto logo" src="../assets/logo.png" />
<h3>Login Page</h3>
<div class="login">
    <input type="text" v-model="email" name="email" placeholder="email" />
    <input type="password" v-model="password" name="password" placeholder="password" />
    <button v-on:click="login">Login</button>
    <p>
        <router-link to="/signUp">SignUp</router-link>
    </p>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            console.log(this.email, this.password);
            let res = await axios.get(`http://localhost:3000/users?email=${this.email}&&password=${this.password}`, {
                email: this.email,
                password: this.password,
            });
            console.log(res)
            if (res.status == 200&& res.data.length>0) {
                alert("Your Login Successfully");
                localStorage.setItem('user-info', JSON.stringify(res.data[0]))
                this.$router.push({
                    name: 'homePage'
                })
            }

        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'homePage'
            })
        }
    }

}
</script>
