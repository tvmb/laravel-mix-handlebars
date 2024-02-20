/**
 * Handlebars plugin for Laravel WebpackMix
 */
const mix = require('laravel-mix');

mix.extend(
    'handlebars',
    new class {

        name () {
            return 'Handlebars';
        }

        register(src, dist, variables = {}, helpers = []) {
            const HandlebarTask = require('./render');
            Mix.addTask(
                new HandlebarTask({src, dist, variables, helpers})
            )
        }

        dependencies() {
            this.requiresReload = true;
            return ['glob', 'handlebars', 'handlebars-layouts']
        }
    }()
);
