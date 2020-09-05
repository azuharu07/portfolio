<template>
    <ContentComponent title="Skills">
        <template>
            <div class="tile is-vertical">
                <div class="tile is-horizontal">
                    <SkillCard title="JavaScript" level="4.5"></SkillCard>
                    <SkillCard title="PHP" level="4"></SkillCard>
                    <SkillCard title="Java" level="3.5"></SkillCard>
                </div>
                <div class="tile is-horizontal">
                    <SkillCard title="Python" level="2"></SkillCard>
                    <SkillCard title="SQL" level="3.5"></SkillCard>
                    <SkillCard title="Vue.js" level="4"></SkillCard>
                </div>
            </div>
        </template>
    </ContentComponent>
</template>

<script>
import ContentComponent from "@/components/items/ContentComponent.vue";
import SkillCard from "@/components/items/SkillCard.vue";

export default {
    name: "Skills",
    components: { ContentComponent, SkillCard },
};
</script>

<style lang="scss" scoped></style>
