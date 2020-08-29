<template>
    <b-navbar type="is-dark" :fixed-top="true">
        <template slot="brand">
            <b-navbar-item tag="div">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#" @click="clickSmoothScroll(`#introduction`)">
                Introduction
            </b-navbar-item>
            <b-navbar-item href="#" @click="clickSmoothScroll(`#skills`)">
                Skills
            </b-navbar-item>
            <b-navbar-item href="#" @click="clickSmoothScroll(`#works`)">
                Works
            </b-navbar-item>
            <b-navbar-item href="#" @click="clickSmoothScroll(`#contact`)">
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
