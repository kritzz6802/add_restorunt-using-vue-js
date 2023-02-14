<template>
<img class="logo" alt="resto logo" src="../assets/logo.png" />
<h1>Hellow {{ name }},Wellcome on Update restuarant page</h1>
<div class="update">
    <input type="text" v-model="restaurant.rname" name="rname" placeholder="name" />
    <input type="text" v-model="restaurant.address" name="address" placeholder="address" />
    <input type="number" v-model="restaurant.contact" name="contact" placeholder="contact" />
    <button type="button" v-on:click="updateResto">Update Restaurunt</button>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'updateResto',
    data() {
        return {
            name: '',
            restaurant: {
                rname: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
       async updateResto() {
            let res = await axios.put(`http://localhost:3000/restarunt/${this.$route.params.id}`, {
                rname: this.restaurant.rname,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            // console.log(res);
            if (res.status == 200) {
                alert("Successfully Updated your Data");
                // localStorage.setItem('restaurant-info', JSON.stringify(res.data))
                this.$router.push({
                    name: 'homePage'
                })
            }
            // console.log('update',this.restaurant)
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'loginPage'
            })
        } else {
            this.name = JSON.parse(user).name;
            // console.warn(this.$route.params.id)
            const res = await axios.get(`http://localhost:3000/restarunt/${this.$route.params.id}`)
            // console.log(res.data)
            this.restaurant = res.data
        }
    }
}
</script>
