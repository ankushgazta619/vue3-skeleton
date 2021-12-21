<template>
    <center>
        <h2>Login</h2>
    
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <AuthLogin />
                <br>
                <button @click="$router.push({name: 'Register'})" class="card-link">Create an account</button>
                &nbsp;&nbsp;
                <button @click="$router.push({name: 'Home'})" class="card-link">Home</button>
            </div>
        </div>
        
    </center>
</template>

<script>
import AuthLogin from '@/components/AuthLogin';
export default {
    name: 'Login',
    components: {
        AuthLogin
    },
    created() {
        console.log('Login view created');
    }
}
</script>
