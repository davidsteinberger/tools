/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/elements/array-selector.js
 */

/// <reference path="../../polymer-element.d.ts" />
/// <reference path="../utils/mixin.d.ts" />
/// <reference path="../utils/array-splice.d.ts" />
/// <reference path="../mixins/element-mixin.d.ts" />


/**
 * Element mixin for recording dynamic associations between item paths in a
 * master `items` array and a `selected` array such that path changes to the
 * master array (at the host) element or elsewhere via data-binding) are
 * correctly propagated to items in the selected array and vice-versa.
 *
 * The `items` property accepts an array of user data, and via the
 * `select(item)` and `deselect(item)` API, updates the `selected` property
 * which may be bound to other parts of the application, and any changes to
 * sub-fields of `selected` item(s) will be kept in sync with items in the
 * `items` array.  When `multi` is false, `selected` is a property
 * representing the last selected item.  When `multi` is true, `selected`
 * is an array of multiply selected items.
 */
declare function ArraySelectorMixin<T extends new (...args: any[]) => {}>(base: T): T & ArraySelectorMixinConstructor & ElementMixinConstructor & PropertyEffectsConstructor & TemplateStampConstructor & PropertyAccessorsConstructor & PropertiesChangedConstructor & PropertiesMixinConstructor;

interface ArraySelectorMixinConstructor {
  new(...args: any[]): ArraySelectorMixin;
}

interface ArraySelectorMixin {

  /**
   * An array containing items from which selection will be made.
   */
  items: any[]|null|undefined;

  /**
   * When `true`, multiple items may be selected at once (in this case,
   * `selected` is an array of currently selected items).  When `false`,
   * only one item may be selected at a time.
   */
  multi: boolean|null|undefined;

  /**
   * When `multi` is true, this is an array that contains any selected.
   * When `multi` is false, this is the currently selected item, or `null`
   * if no item is selected.
   */
  selected: object|object[]|null;

  /**
   * When `multi` is false, this is the currently selected item, or `null`
   * if no item is selected.
   */
  selectedItem: object|null;

  /**
   * When `true`, calling `select` on an item that is already selected
   * will deselect the item.
   */
  toggle: boolean|null|undefined;

  /**
   * Clears the selection state.
   */
  clearSelection(): void;

  /**
   * Returns whether the item is currently selected.
   *
   * @param item Item from `items` array to test
   * @returns Whether the item is selected
   */
  isSelected(item: any): boolean;

  /**
   * Returns whether the item is currently selected.
   *
   * @param idx Index from `items` array to test
   * @returns Whether the item is selected
   */
  isIndexSelected(idx: number): boolean;

  /**
   * Deselects the given item if it is already selected.
   *
   * @param item Item from `items` array to deselect
   */
  deselect(item: any): void;

  /**
   * Deselects the given index if it is already selected.
   *
   * @param idx Index from `items` array to deselect
   */
  deselectIndex(idx: number): void;

  /**
   * Selects the given item.  When `toggle` is true, this will automatically
   * deselect the item if already selected.
   *
   * @param item Item from `items` array to select
   */
  select(item: any): void;

  /**
   * Selects the given index.  When `toggle` is true, this will automatically
   * deselect the item if already selected.
   *
   * @param idx Index from `items` array to select
   */
  selectIndex(idx: number): void;
}

/**
 * Element implementing the `ArraySelector` mixin, which records
 * dynamic associations between item paths in a master `items` array and a
 * `selected` array such that path changes to the master array (at the host)
 * element or elsewhere via data-binding) are correctly propagated to items
 * in the selected array and vice-versa.
 *
 * The `items` property accepts an array of user data, and via the
 * `select(item)` and `deselect(item)` API, updates the `selected` property
 * which may be bound to other parts of the application, and any changes to
 * sub-fields of `selected` item(s) will be kept in sync with items in the
 * `items` array.  When `multi` is false, `selected` is a property
 * representing the last selected item.  When `multi` is true, `selected`
 * is an array of multiply selected items.
 *
 * Example:
 *
 * ```js
 * import {PolymerElement} from '@polymer/polymer';
 * import '@polymer/polymer/lib/elements/array-selector.js';
 *
 * class EmployeeList extends PolymerElement {
 *   static get _template() {
 *     return html`
 *         <div> Employee list: </div>
 *         <dom-repeat id="employeeList" items="{{employees}}">
 *           <template>
 *             <div>First name: <span>{{item.first}}</span></div>
 *               <div>Last name: <span>{{item.last}}</span></div>
 *               <button on-click="toggleSelection">Select</button>
 *           </template>
 *         </dom-repeat>
 *
 *         <array-selector id="selector"
 *                         items="{{employees}}"
 *                         selected="{{selected}}"
 *                         multi toggle></array-selector>
 *
 *         <div> Selected employees: </div>
 *         <dom-repeat items="{{selected}}">
 *           <template>
 *             <div>First name: <span>{{item.first}}</span></div>
 *             <div>Last name: <span>{{item.last}}</span></div>
 *           </template>
 *         </dom-repeat>`;
 *   }
 *   static get is() { return 'employee-list'; }
 *   static get properties() {
 *     return {
 *       employees: {
 *         value() {
 *           return [
 *             {first: 'Bob', last: 'Smith'},
 *             {first: 'Sally', last: 'Johnson'},
 *             ...
 *           ];
 *         }
 *       }
 *     };
 *   }
 *   toggleSelection(e) {
 *     const item = this.$.employeeList.itemForElement(e.target);
 *     this.$.selector.select(item);
 *   }
 * }
 * ```
 */
declare class ArraySelector extends
  ArraySelectorMixin(
  Polymer.Element) {
}

interface HTMLElementTagNameMap {
  "array-selector": ArraySelector;
}
