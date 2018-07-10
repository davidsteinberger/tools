/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/utils/flush.js
 */

/// <reference path="boot.d.ts" />


/**
 * Adds a `Debouncer` to a list of globally flushable tasks.
 */
declare function enqueueDebouncer(debouncer: Debouncer): void;


/**
 * Forces several classes of asynchronously queued tasks to flush:
 * - Debouncers added via `enqueueDebouncer`
 * - ShadyDOM distribution
 */
declare function flush(): void;
