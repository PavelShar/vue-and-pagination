<template>

    <div class="pagination__pages">
        <div
            class="page prev"
            v-if="withSideArrows"
            :class="{'is-disabled' : page === 1}"
            @click="page > 1 ? $emit('to', page - 1) : null">

            <svg width="12px" :fill="color" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                </path>
            </svg>
        </div>


        <div class="page"
             v-for="(p,k) in previous"
             :key="`prev_${k}`"
             :style="{color}"
             @click="$emit('to', p)">
            {{p}}
        </div>

        <div :style="{background: color}" class="page is-active">{{ page }}</div>

        <div class="page"
             v-for="(p,k) in next"
             :key="`next_${k}`"
             :style="{color}"
             @click="$emit('to', p)">
            {{p}}
        </div>

        <div
            class="page next"
            v-if="withSideArrows"
            :class="{'is-disabled' : page === pages}"
            @click="page < pages ? $emit('to', page + 1) : null">

            <svg width="12px" :fill="color" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                </path>
            </svg>

        </div>
    </div>

</template>

<script>

    const props = {
        page: {
            type: Number,
            default: null
        },

        pages: {
            type: Number,
            default: null
        },

        previous: {
            type: Array,
            default: []
        },

        next: {
            type: Array,
            default: []
        },

        color: {
            type: String,
            default: null
        },

        withSideArrows: {
            type: Boolean,
            default: true,
        }

    };

    export default {
        props,
    }


</script>
<style scoped lang="scss">

    $color-accent: #eaeaea;

    .pagination {
        &__pages {
            display: flex;
            width: auto;
            min-height: 30px;
            border-radius: 3px;
            justify-content: center;
            user-select: none;

            .page {
                width: 30px;
                background: white;
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #a8a8a8;
                font-size: 13px;
                margin: 0 2px;
                cursor: pointer;
                transition: .2s ease;
                border: 1px solid transparent;
                box-sizing: border-box;
                user-select: none;

                &:hover {
                    color: $color-accent;
                }

                &.prev {
                    margin-right: 5px;
                }

                &.next {
                    margin-left: 5px;
                }

                &.is-active {
                    background: $color-accent;
                    color: white;

                }

                &.is-disabled {
                    background: #eaeaea;
                    cursor: not-allowed;

                    svg {
                        fill: #a8a8a8 !important;
                    }
                }
            }
        }

    }

</style>
