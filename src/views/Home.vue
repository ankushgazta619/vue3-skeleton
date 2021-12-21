<template>
    <div>
        <h1 class="container d-flex justify-content-center" style="margin-top:100px">Welcome</h1>
        <div class="container mt-4 d-flex justify-content-center">
            <button @click="$router.push({name: 'Login'})" class="btn btn-primary">Login</button>
            &nbsp;&nbsp;&nbsp;
            <button @click="$router.push({name: 'Register'})" class="btn btn-primary">Register</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created() {
        console.log('Home view created');
    }
}
</script>
