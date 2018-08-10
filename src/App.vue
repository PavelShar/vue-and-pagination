<template>
    <div id="app">

        <pagination v-bind="$data">

            <template slot-scope="{scope, page}">

                <div class="notification" v-for="(i, k) in scope" :key="k">
                    <h2 class="title is-4">{{i.title}}</h2>
                    <p>{{i.body}}</p>
                </div>

            </template>

        </pagination>


    </div>
</template>

<script>

    import Pagination from './index'
    import items from './items'

    export default {
        name: 'VueSimplePagination',
        components: {
            Pagination
        },

        data() {
            return {
                items,
                limit: 5,
                controlsOnTop: true,
                controlsOnBottom: true,
                /*page: 1,*/
                /*from: 5,*/
                sidePagesNumber: 2,
                withSideArrows: true,
                controlsType: 'Pages',
                /*color: 'blue',*/
            }
        }
    }


</script>

<style lang="scss">

    @import "~bulma/sass/utilities/_all";
    @import "~bulma/sass/elements/title";
    @import "~bulma/sass/elements/notification";

    html {
        height: 100%;

        body {
            background: #f0f0f0;

            #app {
                width: 50%;
                margin: 0 auto;

            }
        }

    }

</style>
