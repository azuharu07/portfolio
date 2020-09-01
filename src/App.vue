<template>
    <div id="app">
        <div>
            画像貼りたい
        </div>
        <Header></Header>
        <div class="main">
            <Introduction id="introduction"></Introduction>
            <Skills id="skills"></Skills>
            <Works id="works"></Works>
            <Contact id="contact"></Contact>
        </div>
    </div>
</template>

<script>
import Header from "@/components/items/Header.vue";
import Introduction from "@/components/contents/Introduction.vue";
import Skills from "@/components/contents/Skills.vue";
import Works from "@/components/contents/Works.vue";
import Contact from "@/components/contents/Contact.vue";

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

.main {
    max-width: 50em;
    margin: auto;
}
</style>
