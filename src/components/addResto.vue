<template>
<img class="logo" alt="resto logo" src="../assets/logo.png" />
<h1>Hellow {{ name }},Wellcome on Add restuarant page</h1>
<div class="add">
    <input type="text" v-model="restaurant.rname" name="rname" placeholder="name" />
    <input type="text" v-model="restaurant.address" name="address" placeholder="address" />
    <input type="number" v-model="restaurant.contact" name="contact" placeholder="contact" />
    <button type="button" v-on:click="addResto">Add New Restaurunt</button>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'addResto',
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
      async addResto() {
            let res = await axios.post('http://localhost:3000/restarunt', {
                rname: this.restaurant.rname,
                address: this.restaurant.address,
                contact: this.restaurant.contact,
            });
            // console.log(res);
            if (res.status == 201) {
                alert("Successfully Added your Data");
                // localStorage.setItem('restaurant-info', JSON.stringify(res.data))
                this.$router.push({
                    name: 'homePage'
                })
            }
        }

    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'loginPage'
            })
        } else {
            this.name = JSON.parse(user).name;

        }
    }
}
</script>
