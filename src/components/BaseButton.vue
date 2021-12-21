<template>
    <button
        v-bind="$attrs"
        :class="class"
    >
        {{ label }}
    </button>
</template>
<script>
    export default {
        props: {
            id: {
                type: [String,Number],
                default: null
            },
            class: {
                type: [String,Number],
                default:'btn'
            },
            label: {
                type: [String,Number],
                default:null
            }
        }
    }
</script>