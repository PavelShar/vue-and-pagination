<template>

    <div class="pagination-with-numbers">

        <pagination v-bind="$data">

            <template slot-scope="{scope, page}">

                <div class="item" v-for="(c, k) in scope" :key="k">
                    <div class="item__title">{{c.title}}</div>
                    <div class="item__meta">
                        <div>{{c.country}}</div>
                        <div>{{c.tz}}</div>
                    </div>
                </div>

            </template>
        </pagination>

    </div>

</template>

<script>


    import Pagination from './../../../src'
    import items from './../mocks/cities'

    export default {
        name: "PaginationWithNumbers",
        components: {Pagination},
        data() {
            return {
                items,
                limit: 1,
                controlsOnTop: true,
                controlsOnBottom: false,
                controlsType: 'Numbers',
                controlsAlign: 'right',
                useKeyboard: false,
                from: 5,
                color: '#42b883',
            }
        },
    }
</script>

<style scoped lang="scss">

    .pagination-with-numbers {
        margin: 20px 0;

        .item {
            margin-bottom: 5px;
            border: 1px solid #eaeaea;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 12px;
            user-select: none;

            &__title {
                font-size: 18px;
            }

            &__meta {
                color: #a8a8a8;
                display: flex;
                align-items: center;

                > div {
                    display: flex;
                    align-items: center;

                    &:after {
                        content: "";
                        width: 5px;
                        height: 5px;
                        margin: 0 7px;
                        border-radius: 50%;
                        background: #eaeaea;
                    }

                    &:last-child {
                        &:after {
                            content: none;
                        }
                    }
                }
            }
        }
    }

</style>
