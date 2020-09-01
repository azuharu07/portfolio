<template>
    <ContentComponent title="Introduction">
        <template>
            <div class="tile is-ancester introduction">
                <div class="tile">
                    <img src="../../assets/images/azuharu07.png" width="300" alt="azuharu07@ntogawa" />
                </div>
                <div class="tile">
                    自己紹介
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
    data() {
        return {
            introductionData: [
                { id: 1, first_name: "Jesse", last_name: "Simmons", date: "2016-10-15 13:43:27", gender: "Male" },
                { id: 2, first_name: "John", last_name: "Jacobs", date: "2016-12-15 06:00:53", gender: "Male" },
                { id: 3, first_name: "Tina", last_name: "Gilbert", date: "2016-04-26 06:26:28", gender: "Female" },
                { id: 4, first_name: "Clarence", last_name: "Flores", date: "2016-04-10 10:28:46", gender: "Male" },
                { id: 5, first_name: "Anne", last_name: "Lee", date: "2016-12-06 14:38:38", gender: "Female" },
            ],
            columns: [
                {
                    field: "id",
                    label: "ID",
                    width: "40",
                    numeric: true,
                },
                {
                    field: "first_name",
                    label: "First Name",
                },
                {
                    field: "last_name",
                    label: "Last Name",
                },
                {
                    field: "date",
                    label: "Date",
                    centered: true,
                },
                {
                    field: "gender",
                    label: "Gender",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.introduction {
    // display: flex;
}
</style>
