# Nova PageBuilder Field.

This field allows you to build custom styled web pages, using https://github.com/artf/grapesjs

## Installation

You can install the package via composer:

```bash
composer require sustainablebrands/nova-page-builder-field
```

You can publish the required assets with:

```shell
php artisan vendor:publish --provider="SustainableBrands\PageBuilderField\FieldServiceProvider" --tag=public
```

## Usage (in your Nova model)

```php
use SustainableBrands\PageBuilderField\PageBuilderField;
// ....

PageBuilderField::make('page'),

```

## Images
Form field
![gjs-form](https://user-images.githubusercontent.com/41853913/49926239-d62ab100-fec3-11e8-8433-8b5b2db59bb0.PNG)

Detail field
![gjs-view](https://user-images.githubusercontent.com/41853913/49926241-d6c34780-fec3-11e8-872b-75d1af080288.PNG)
