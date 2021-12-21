<template>
    <form @submit.prevent="register()">
        <div class="row">
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Name"
                    type="text"
                    v-model="user.name"
                />
            </div>
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Email"
                    type="email"
                    v-model="user.email"
                />
            </div>
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Mobile"
                    type="text"
                    v-model="user.mobile"
                />
            </div>
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Password"
                    type="password"
                    v-model="user.password"
                />
            </div>
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Confirm Password"
                    type="password"
                    v-model="user.confirm_password"
                />
            </div>
            <div class="form-group col-sm-12 mt-2" >
                <BaseButton 
                    class="btn btn-primary form-control"
                    type="submit"
                    label="Register"
                />
            </div>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import BaseInput from'@/components/BaseInput'
import BaseButton from'@/components/BaseButton'

export default {
    name: 'AuthRegister',
    components: {
        BaseInput,BaseButton
    },
    setup() {
      
        const user = ref({
            name:null,
            email:null,
            mobile:null,
            password:null,
            confirm_password:null
        })

        const login = () => {
            console.log('Login submited');
        }
        return {user,login};
    }
}
</script>