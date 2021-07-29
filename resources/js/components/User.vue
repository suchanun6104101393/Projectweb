<template>
    <div>
        <div class="container">
            <h2>แสดงข้อมูล</h2>
            <table class="table table-bordered">
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>ผู้ใช้</th>
                    <th>แก้ไข</th>
                    <th>ลบ</th>
                </tr>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{user.id}}</td>
                     <td>{{user.name}}</td>
                     <td>{{user.actor}}</td>
                     <td><a :href="'/users/'+user.id+'/edit'" class="btn btn-warning">Edit</a> </td>
                     <td><a href="javascript:;" class="btn btn-danger" v-on:click="deleteUser(user.id,index)">Delete</a> </td>
                </tr>

            </table>
             <a href="/users/create" class="btn btn-primary">Insert</a>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.getUserData();
    },
    methods:{
        getUserData(){
            axios.get('api/users').then(response=>{
                this.users=response.data;
            });
        }
    },
    data(){
        return{
            users:[],
            user:{
                id:0,
                name:'',
                actor:''
            }
        }
    }
    
}
</script>