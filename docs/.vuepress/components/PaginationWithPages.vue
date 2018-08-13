<template>

    <div class="pagination-with-pages">

        <pagination v-bind="{items,limit, color, from}">

            <template slot-scope="{scope, page}">

                <div class="item" v-for="(c, k) in scope" :key="k">
                    <div class="item__title">{{c.title}}</div>
                    <div class="item__meta">
                        <div>{{c.year}}</div>
                        <div>{{c.vin}}</div>
                        <div>{{c.color}}</div>
                    </div>
                </div>

            </template>
        </pagination>

    </div>

</template>

<script>


    import Pagination from './../../../src'
    import items from './../mocks/cars'

    const props = {
        limit: {
            type: Number,
            default: 5,
        },

        color: {
            type: String,
            default: '#35495e',
        },

        from: {
            type: Number,
            default: 1,
        }
    };

    export default {
        props,
        name: "PaginationWithPages",
        components: {Pagination},
        data() {
            return {
                items,
            }
        },
    }
</script>

<style scoped lang="scss">

    .pagination-with-pages {
        margin-bottom: 20px;

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
