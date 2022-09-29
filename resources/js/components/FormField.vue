<template>
    <div id="editor"></div>
</template>

<script>

import grapesjs from 'grapesjs';
import basicBlocks from 'grapesjs-blocks-basic';
import pluginNavbar from 'grapesjs-navbar';
import pluginCountdown from 'grapesjs-component-countdown';
import pluginForms from 'grapesjs-plugin-forms';
import pluginExport from 'grapesjs-plugin-export';
// import pluginAviary from 'grapesjs-aviary';
// import pluginFilestack from 'grapesjs-plugin-filestack';
import custom from '../plugins/custom';
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {

    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            editor: null
        }
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            let newValue = '<style>' + this.editor.getCss() + '</style><div>' + this.editor.getHtml() + '</div>';
            formData.append(this.field.attribute, newValue || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },

    mounted() {
        this.editor = grapesjs.init({
            container: '#editor',
            storageManager: { autoload: 0 },
            width: '100%',
             plugins: [
                 basicBlocks,
                 // pluginAviary,
                 pluginExport,
                 pluginCountdown,
                 // pluginFilestack,
                 pluginForms,
                 pluginNavbar,
                 custom
             ],
            styleManager : {
                sectors: [
                    {
                        name: 'General',
                        open: false,
                        buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
                    },{
                        name: 'Flex',
                        open: false,
                        properties: [
                        {
                            name: 'Flex Container',
                            property: 'display',
                            type: 'select',
                            defaults: 'block',
                            list: [
                            {value: 'block', name: 'Disable'},
                            {value: 'flex', name: 'Enable'}
                            ],
                        },
                        {
                            name: 'Flex Parent',
                            property: 'label-parent-flex',
                            type: 'integer',
                        },
                        {
                            name: 'Direction',
                            property: 'flex-direction',
                            type: 'radio',
                            defaults: 'row',
                            list: [
                            {
                                value: 'row',
                                name: 'Row',
                                className: 'icons-flex icon-dir-row',
                                title: 'Row',
                            },
                            {
                                value: 'row-reverse',
                                name: 'Row reverse',
                                className: 'icons-flex icon-dir-row-rev',
                                title: 'Row reverse',
                            },
                            {
                                value: 'column',
                                name: 'Column',
                                title: 'Column',
                                className: 'icons-flex icon-dir-col',
                            },
                            {
                                value: 'column-reverse',
                                name: 'Column reverse',
                                title: 'Column reverse',
                                className: 'icons-flex icon-dir-col-rev',
                            }
                            ],
                        },
                        {
                            name: 'Justify',
                            property: 'justify-content',
                            type: 'radio',
                            defaults: 'flex-start',
                            list: [
                            {
                                value: 'flex-start',
                                className: 'icons-flex icon-just-start',
                                title: 'Start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-just-end',
                            },
                            {
                                value: 'space-between',
                                title: 'Space between',
                                className: 'icons-flex icon-just-sp-bet',
                            },
                            {
                                value: 'space-around',
                                title: 'Space around',
                                className: 'icons-flex icon-just-sp-ar',
                            },
                            {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-just-sp-cent',
                            }
                            ],
                        },
                        {
                            name: 'Align',
                            property: 'align-items',
                            type: 'radio',
                            defaults: 'center',
                            list: [
                            {
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            },
                            {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            },
                            {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }
                            ],
                        },
                        {
                            name: 'Flex Children',
                            property: 'label-parent-flex',
                            type: 'integer',
                        },
                        {
                            name: 'Order',
                            property: 'order',
                            type: 'integer',
                            defaults: 0,
                            min: 0
                        },
                        {
                            name: 'Flex',
                            property: 'flex',
                            type: 'composite',
                            properties: [
                            {
                                name: 'Grow',
                                property: 'flex-grow',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            },
                            {
                                name: 'Shrink',
                                property: 'flex-shrink',
                                type: 'integer',
                                defaults: 0,
                                min: 0
                            },
                            {
                                name: 'Basis',
                                property: 'flex-basis',
                                type: 'integer',
                                units: ['px', '%', ''],
                                unit: '',
                                defaults: 'auto',
                            }
                            ],
                        },
                        {
                            name: 'Align',
                            property: 'align-self',
                            type: 'radio',
                            defaults: 'auto',
                            list: [
                            {
                                value: 'auto',
                                name: 'Auto',
                            },
                            {
                                value: 'flex-start',
                                title: 'Start',
                                className: 'icons-flex icon-al-start',
                            },
                            {
                                value: 'flex-end',
                                title: 'End',
                                className: 'icons-flex icon-al-end',
                            },
                            {
                                value: 'stretch',
                                title: 'Stretch',
                                className: 'icons-flex icon-al-str',
                            },
                            {
                                value: 'center',
                                title: 'Center',
                                className: 'icons-flex icon-al-center',
                            }
                            ],
                        }
                        ]
                    },{
                        name: 'Dimension',
                        open: false,
                        buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
                    },{
                        name: 'Typography',
                        open: false,
                        buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
                    },{
                        name: 'Decorations',
                        open: false,
                        buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
                    },{
                        name: 'Extra',
                        open: false,
                        properties: ['opacity', 'transition', 'transform']
                    }
                ],
            },
        });
        this.editor.setComponents(this.field.value);
    }
}
</script>
