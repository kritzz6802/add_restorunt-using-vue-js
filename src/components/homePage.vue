<template>
<img class="logo" alt="resto logo" src="../assets/logo.png" />
<h1>hello {{name}}, Wellcome at home page</h1>
<table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Adress</th>
        <th>Contact</th>
        <th>Actions</th>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.rname}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/update/'+item.id">Update</router-link>
            <button v-on:click="deleteresto(item.id)">Delete</button>

        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios'
export default {
    name: 'homePage',
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    methods: {
        async deleteresto(id) {
            let res = await axios.delete(`http://localhost:3000/restarunt/${id}`);
            if (res.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');

            if (!user) {
                this.$router.push({
                    name: 'loginPage'
                })
            } else {
                this.name = JSON.parse(user).name;
                let res = await axios.get('http://localhost:3000/restarunt');
                // console.log(res)
                this.restaurant = res.data;
            }
        }
    },
    mounted() {
        this.loadData()
    }
}
</script>
