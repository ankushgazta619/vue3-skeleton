<template>
    <label :for="label">{{ label }}</label>
    <input
        v-bind="$attrs"
        :id="id"
        :value="inputValue"
        :placeholder="label"
        @change="$emit('update:inputValue', $event.target.value)"
        class="form-control"
    >
</template>
<script>
    export default {
        props: {
            id: {
                type: [String,Number],
                default: null
            },
            label: {
                type: String,
                default:null
            },
            inputValue: {
                type: [String,Number],
                default: null
            }
        }
    }
</script>