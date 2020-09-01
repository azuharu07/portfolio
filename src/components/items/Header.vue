<template>
    <b-navbar :fixed-top="true" type="is-dark">
        <template slot="start">
            <b-navbar-item href="#introduction">
                Introduction
            </b-navbar-item>
            <b-navbar-item href="#skills">
                Skills
            </b-navbar-item>
            <b-navbar-item href="#works">
                Works
            </b-navbar-item>
            <b-navbar-item href="#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: "Header",
    methods: {
        clickSmoothScroll(target) {
            event.preventDefault();
            this.$SmoothScroll(document.querySelector(target), 1000, null, null, "y");
        },
    },
};
</script>

<style lang="scss"></style>
