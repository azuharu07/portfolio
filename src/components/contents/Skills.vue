<template>
    <ContentComponent title="Skills">
        <template>
            <div class="tile is-ancestor aaa">
                <div class="tile is-parent is-4" v-for="(props, index) in propArray" :key="index">
                    <SkillCard class="tile is-child" v-bind="props"></SkillCard>
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
    data: () => {
        return {
            propArray: [
                {
                    title: "JavaScript",
                    level: 4.5,
                    description: "ECMAの基本構文、DOM操作、Ajax、非同期処理等への理解があります。",
                },
                {
                    title: "Vue.js",
                    level: 4,
                    description:
                        "基本的な構文、SPA、ライフサイクルへの理解があります。MVCアプリケーションのViewをVue.jsに置き換えた経験があります。",
                },
                { title: "PHP", level: 3.5, description: "5,7,8バージョンへの理解があります。" },
                { title: "HTML/CSS", level: 3, description: "デザインカンプを参考にコーディングすることができます。" },
                {
                    title: "AWS",
                    level: 2.5,
                    description: "Webアプリケーションを構築するための基本的なサービスの業務経験があります。",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.aaa {
    display: flex;
    flex-wrap: wrap;
}
</style>
