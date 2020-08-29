<template>
    <div id="app">
        <Header></Header>
        <Introduction id="introduction"></Introduction>
        <Skills id="skills"></Skills>
        <Works id="works"></Works>
        <Contact id="contact"></Contact>
    </div>
</template>

<script>
import Header from "./components/Header.vue";
import Introduction from "./components/Introduction.vue";
import Skills from "./components/Skills.vue";
import Works from "./components/Works.vue";
import Contact from "./components/Contact.vue";

export default {
    name: "App",
    components: {
        Header,
        Introduction,
        Skills,
        Works,
        Contact,
    },
};
</script>

<style lang="scss">
@import "./assets/styles/app.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
