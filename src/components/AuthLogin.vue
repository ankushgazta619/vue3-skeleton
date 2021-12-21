<template>
    <form @submit.prevent="login()">
        <div class="row">
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Email"
                    type="email"
                    v-model="user.email"
                />
            </div>
            <div class="form-group col-sm-12" >
                <BaseInput
                    label="Password"
                    type="password"
                    v-model="user.password"
                />
            </div>
            <div class="form-group col-sm-12 mt-2" >
                <BaseButton 
                    class="btn btn-primary form-control"
                    type="submit"
                    label="Login"
                />
            </div>
        </div>
    </form>
</template>

<script>

import { ref } from 'vue'
import API from '@/config/api'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'

export default {
    name: 'AuthLogin',
    components: {
        BaseInput,BaseButton
    },
    setup() {

        const user = ref({
            email:null,
            password:null
        })

        const login = async () => {
            try {
                let response = await API.get('/todos/1');
                console.log(response);
            } catch(err) {
                console.log(err);
            }
            
        }
        return {user,login};
    }
}
</script>