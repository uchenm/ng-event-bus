# ng-event-bus

Nothing special event bus for Angular

## Install

`bower install ng-event-bus --save`

## Usage

`angular.module('myApp', ['ngEventBus'])` then an `EventBus` service will be available for your app

## API

`EventBus.on(channel, listener)`

`EventBus.emit(channel, [arguments])`

`EventBus.broadcast(channel, [arguments])` is api-equivalent to `emit`
