<script  setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const postDetails = ref('')
async function getData()
{
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${parseInt(route.params.id)}`)
        if(response.status ==200 )
        {
            postDetails.value = await response.json()
        } else 
        {
            console.log('API error')
        }
        
    } catch (error) {
        alert('Error the message'.error)
    }
}
onBeforeMount(()=>{
    getData()
})
</script>

<template>
    <h1>this is the user page</h1>
    post id == {{  postDetails.id }} <br/>
    post title == {{  postDetails.title }}
    <router-view></router-view>
</template>

<style  scoped>
    
</style>
