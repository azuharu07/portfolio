<template>
    <div class="section contents">
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
.contents {
    margin-bottom: 30em;
    .title {
        margin-top: 1em;
    }
}
</style>
