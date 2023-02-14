<template>
<img class="logo" alt="resto logo" src="../assets/logo.png" />
<h3>Sign Up</h3>
<div class="register">
    <input type="text" v-model="name" name="name" placeholder="name" />
    <input type="text" v-model="email" name="email" placeholder="email" />
    <input type="password" v-model="password" name="password" placeholder="password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
        <router-link to="/login">login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            console.log(this.name, this.email, this.password);
            let res = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            });
            console.log(res)
            if (res.status == 201) {
                alert("Successfully SignUp your Data");
                localStorage.setItem('user-info', JSON.stringify(res.data))
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
