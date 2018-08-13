<template>

    <div
        class="vsp-pagination__arrow"
        v-html="direction"
        :class="{'is-disabled' : isDisabled, 'prev' : type === 'prev', 'next': type === 'next'}" >
    </div>

</template>

<script>

    const props = {

        isDisabled: {
            type: Boolean,
            default: false
        },

        type: {
            type: String,
            default: null
        },


        color: {
            type: String,
            default: null
        }
    };

    export default {
        props,
        computed: {


            /**
             * Get fill color
             *
             * @returns {string}
             */
            fill() {
              return this.isDisabled ? '#a8a8a8' : this.color;
            },


            /**
             * Detect arrow direction
             *
             * @returns {*}
             */
            direction() {
                switch (this.type) {
                    case 'prev':
                        return `
                         <svg  class="svg" width="12px" fill="${this.fill}" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                            </path>
                        </svg>`;


                    case 'next':
                        return `
                        <svg width="12px" fill="${this.fill}" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>`;


                    default:
                        return null;
                }
            }

        }

    }
</script>

<style scoped lang="scss">

    $color-accent: #eaeaea;

    .vsp-pagination {
        &__arrow {
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
            min-height: 20px;

            &:hover {
                color: $color-accent;
            }

            &.prev {
                margin-right: 5px;
            }

            &.next {
                margin-left: 5px;
            }


            &.transparent {
                background: transparent;
            }

            &.is-disabled {
                background: #eaeaea;
                cursor: not-allowed;
            }


        }
    }


</style>
