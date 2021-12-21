<template>
    <center>
        <h2>Register</h2>
    
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <AuthRegister />
                <br>
                <button @click="$router.push({name: 'Login'})" class="card-link">Already member?</button>
                &nbsp;&nbsp;
                <button @click="$router.push({name: 'Home'})" class="card-link">Home</button>
            </div>
        </div>
        
    </center>
</template>

<script>
import AuthRegister from '@/components/AuthRegister';
export default {
    name: 'Register',
    components: {
        AuthRegister
    },
    created() {
        console.log('Register view created');
    }
}
</script>