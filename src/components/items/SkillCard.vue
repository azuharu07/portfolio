<template>
    <div class="card skill-card">
        <header class="card-header">
            <!--<img :src="image" />-->
            <p class="card-header-title flex-center">
                {{ title }}
            </p>
        </header>
        <div class="card-content">
            <StarRating
                :item-size="25"
                :show-rating="false"
                :increment="0.5"
                :rating="level"
                :read-only="true"
                :inline="true"
            ></StarRating>
            <p class="mt1">{{ description }}</p>
        </div>
    </div>
</template>

<script>
import { StarRating } from "vue-rate-it";

export default {
    name: "SkillCard",
    components: {
        StarRating,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
        level: {
            type: Number,
            default: 0,
        },
        description: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss"></style>
