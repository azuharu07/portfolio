<template>
    <ContentComponent title="Introduction">
        <template>
            <div class="tile is-ancester introduction">
                <div class="tile introduction__account">
                    <img src="../../assets/images/azuharu07.png" width="300" alt="azuharu07@ntogawa" />
                </div>
                <div class="tile introduction__article">
                    <div class="introduction__article-title">はじめまして！あずは@ntogawaです。</div>
                    <div class="introduction__article-article">
                        2018年に入社し、Javaを使ったバックエンドエンジニアとして働いでいました。<br />
                        現在は自社製品の設計開発・インフラ・営業・マーケティングまで手掛けてています。
                        少数精鋭のチームのかなり自由なポジションで、イベント企画等も経験しています。<br />
                        プログラミング言語は主にVue.jsとPHPを使っており、他にもJava、Kotlin、Python等を経験しました。<br />
                        今はAWSとアーキテクチャを勉強しています。よりユーザーのニーズにあった提案ができるように知識を広めたいと思っています。
                    </div>
                </div>
            </div>
        </template>
    </ContentComponent>
</template>

<script>
import ContentComponent from "@/components/items/ContentComponent.vue";

export default {
    name: "Introduction",
    components: { ContentComponent },
};
</script>

<style lang="scss" scoped>
.introduction {
    &__account {
        margin: auto;
        max-width: 300px;
        max-height: 300px;
    }

    &__article {
        flex-direction: column;

        &-title {
            font-weight: bold;
            margin-bottom: 1em;
        }

        &-article {
            text-align: left;
        }
    }
}
</style>
