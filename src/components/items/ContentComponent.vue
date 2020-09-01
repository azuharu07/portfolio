<template>
    <div class="section">
        <h1 class="title">{{ title }}</h1>
        <slot> </slot>
    </div>
</template>

<script>
export default {
    name: "ContentComponent",
    props: {
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss">
.title {
    margin-top: 1em;
}
</style>
