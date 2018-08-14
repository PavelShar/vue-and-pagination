<template>

    <div class="vsp-pagination">

        <slot name="controls" v-bind="configuration" v-if="controlsOnTop">
            <slot name="top-controls" v-bind="configuration">
                <component
                    class="vsp-pagination__controls top"
                    v-bind="configuration"
                    v-if="pages > 1"
                    :is="controlsType"
                    :color="color"
                    :withSideArrows="withSideArrows"
                    :align="controlsAlign"
                    @to="follow">
                </component>
            </slot>
        </slot>


        <slot :scope="scope" v-bind="configuration"/>


        <slot name="controls" v-bind="configuration" v-if="controlsOnBottom">
            <slot name="bottom-controls" v-bind="configuration">
                <component
                    class="vsp-pagination__controls bottom"
                    v-bind="configuration"
                    v-if="pages > 1"
                    :is="controlsType"
                    :color="color"
                    :withSideArrows="withSideArrows"
                    :align="controlsAlign"
                    @to="page = $event">
                </component>
            </slot>
        </slot>

    </div>

</template>

<script>

    import Pages from './pages'
    import Numbers from './numbers'

    const props = {

        items: {
            type: Array,
            default: () => []
        },

        limit: {
            type: Number,
            default: 10
        },

        controlsOnTop: {
            type: Boolean,
            default: false
        },

        controlsOnBottom: {
            type: Boolean,
            default: true
        },


        controlsType: {
            type: String,
            default: 'Pages'
        },

        controlsAlign: {
            type: String,
            default: 'center'
        },

        from: {
            type: Number,
            default: 1
        },

        useKeyboard: {
            type: Boolean,
            default: true,
        },

        value: {
            type: Number,
            default: null
        },


        color: {
            type: String,
            default: '#35495e'
        },

        sidePagesNumber: {
            type: Number,
            default: 3
        },

        withSideArrows: {
            type: Boolean,
            default: true,
        }
    };

    export default {
        props,
        components: {
            Pages,
            Numbers,
        },

        data() {
            return {
                page: this.from || this.value || 1,
            }
        },

        computed: {


            /**
             * Get parts part for selected page
             *
             * @returns {[]}
             */
            scope() {
                let items = this.items;
                return items.slice((this.page - 1) * this.limit, this.page * this.limit);
            },


            /**
             * Count page number
             *
             * @returns {number}
             */
            pages() {
                let items = this.items;
                return Math.ceil((items instanceof Array ? items.length : 0) / this.limit);
            },


            /**
             * Get previous pages
             *
             * @returns {*[]}
             */
            previous() {
                let pages = [];
                for (let i = this.page - 1; i >= this.page - this.sidePagesNumber; i--) if (i >= 1) pages.push(i);
                return pages.reverse();
            },


            /**
             * Get next pages
             * @returns {Array}
             */
            next() {
                let pages = [];
                for (let i = this.page + 1; i <= this.page + this.sidePagesNumber; i++) if (i <= this.pages) pages.push(i);
                return pages;
            },


            /**
             * Get current configuration
             *
             * @returns {{}}
             */
            configuration() {
                return {
                    page: this.page,
                    pages: this.pages,
                    previous: this.previous,
                    next: this.next,
                }
            }

        },


        methods: {


            /**
             * Follow to provided page
             * Check if page exists
             *
             * @returns void
             */
            follow(page) {
                (this.next.includes(page) || this.previous.includes(page)) ? this.page = page : null;
            },


            /**
             * Emit keyboard event
             *
             * @param e
             * @returns void
             */
            keyboardEmitter(e) {

                const key = e.which || e.keyCode;

                if (key === 37 && this.useKeyboard) this.follow(this.page - 1);
                if (key === 39 && this.useKeyboard) this.follow(this.page + 1);

            },


        },

        watch: {

            page: {
                immediate: true,
                handler(p) {
                    this.$emit('input', p)
                }
            },

            value: {
                handler(p) {
                    if (this.page !== p) this.page = p;
                }
            }
        },


        mounted() {
            // Listen keyboard events
            window.addEventListener('keydown', this.keyboardEmitter, true);
        },


        beforeDestroy() {
            // Remove keyboard listener
            window.removeEventListener('keydown', this.keyboardEmitter, true);
        }

    }

</script>

<style lang="scss" scoped>

    .vsp-pagination {
        &__controls {
            &.bottom {
                margin-top: 20px;
            }

            &.top {
                margin-bottom: 20px;
            }
        }
    }

</style>
