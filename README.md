# ng-event-bus

Nothing special event bus for Angular

> will still work even if broadcast comes first than listener

## Install

`bower install ng-event-bus --save`

## Usage

`angular.module('myApp', ['ngEventBus'])` then an `EventBus` service will be available for your app

## API

`EventBus.on(channel, listener)`

`EventBus.emit(channel, [arguments])`

`EventBus.broadcast` is api-equivalent to `emit`
