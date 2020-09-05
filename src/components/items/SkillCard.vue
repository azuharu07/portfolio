<template>
    <div class="card skill-card">
        <header class="card-header">
            <img :src="image" />
            <p class="card-header-title skill-card__title">
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
            ></StarRating>
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
    },
};
</script>

<style lang="scss">
.skill-card {
    margin: 1em auto;

    &__title {
        justify-content: center;
    }
}
</style>
