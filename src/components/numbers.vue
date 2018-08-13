<template>

    <div class="vsp-pagination__numbers" :class="align">

        <arrow
            v-if="withSideArrows"
            type="prev"
            class="transparent"
            :isDisabled="page === 1"
            :color="color"
            @click.native="page > 1 ? $emit('to', page - 1) : null">
        </arrow>

        <div class="vsp-pagination__numbers__state" :style="{color}">{{page}} / {{pages}}</div>

        <arrow
            v-if="withSideArrows"
            type="next"
            class="transparent"
            :isDisabled="page === pages"
            :color="color"
            @click.native="page < pages ? $emit('to', page + 1) : null">
        </arrow>

    </div>

</template>

<script>

    import Arrow from './../misc/arrow'

    const props = {
        pages: {
            type: Number,
            default: 0
        },

        page: {
            type: Number,
            default: 1
        },

        withSideArrows: {
            type: Boolean,
            default: true,
        },

        color: {
            type: String,
            default: null
        },

        align: {
            type: String,
            default: 'null'
        }
    };

    export default {
        props,
        components: {Arrow},

    }
</script>

<style scoped lang="scss">

    .vsp-pagination {
        &__numbers {
            display: flex;
            align-items: center;
            height: 25px;

            &__state {
                font-size: 13px;
                padding: 0 10px;
                cursor: default;
                user-select: none;
            }

            &.left {
                justify-content: flex-start;
            }

            &.center {
                justify-content: center;
            }

            &.right {
                justify-content: flex-end;
            }
        }
    }

</style>
