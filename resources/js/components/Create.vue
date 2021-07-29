<template>
    <div>
        <div class="container">
            <h2> Insert Data</h2>
            <form action="/users">
                <div class="form-group">
                    <label>ชื่อ :</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label>ผู้ใช้:</label>
                    <input type="text" class="form-control" v-model="actor">
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" v-on:click="addNewUser()">INSERT</button>
                </div>
            
            </form>
        </div>
    </div>

</template>
<script>
export default {
    data(){
        return{
            name:'',
            actor:''
        }
    },
     methods:{
        addNewUser(){
            axios.post('/api/users',{
                name:this.name,
                actor:this.actor
            });
            //console.log(this.name);
           // console.log(this.actor);
            
        }
    }
}
</script>