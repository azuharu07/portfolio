<template>
    <ContentComponent title="Contact">
        <template>
            <div class="contact">
                <a class="contact__link" href="https://github.com/azuharu07">
                    <img src="@/assets/images/github-logo.png" width="60px" alt="github-logo" />
                    <label>GitHub</label>
                </a>
                <a class="contact__link" href="https://twitter.com/azuharu07">
                    <img src="@/assets/images/twitter-logo.png" width="60px" alt="github-logo" />
                    <label>Twitter</label>
                </a>
            </div>
        </template>
    </ContentComponent>
</template>

<script>
import ContentComponent from "@/components/items/ContentComponent.vue";

export default {
    name: "Contact",
    components: { ContentComponent },
};
</script>

<style lang="scss" scoped>
.contact {
    display: flex;
    justify-content: center;
    &__link {
        margin: 0 1em;
        display: flex;
        flex-direction: column;
        color: black;
    }
}
</style>
