(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react', 'react', 'kotlinx-html-js', 'kotlin-extensions', 'react-dom', 'react-dom/server'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react'), require('react'), require('kotlinx-html-js'), require('kotlin-extensions'), require('react-dom'), require('react-dom/server'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-react-dom'.");
    }if (typeof this['react-dom/server'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-dom'. Its dependency 'react-dom/server' was not found. Please, check whether 'react-dom/server' is loaded prior to 'kotlin-react-dom'.");
    }root['kotlin-react-dom'] = factory(typeof this['kotlin-react-dom'] === 'undefined' ? {} : this['kotlin-react-dom'], kotlin, this['kotlin-react'], react, this['kotlinx-html-js'], this['kotlin-extensions'], this['react-dom'], this['react-dom/server']);
  }
}(this, function (_, Kotlin, $module$kotlin_react, $module$react, $module$kotlinx_html_js, $module$kotlin_extensions, $module$react_dom, $module$react_dom_server) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var set_key = $module$kotlin_react.react.set_key_9xodow$;
  var set_ref = $module$kotlin_react.react.set_ref_d0fdtm$;
  var createElement = $module$react.createElement;
  var RBuilder = $module$kotlin_react.react.RBuilder;
  var RBuilderImpl = $module$kotlin_react.react.RBuilderImpl;
  var equals = Kotlin.equals;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unsafe = $module$kotlinx_html_js.kotlinx.html.Unsafe;
  var Unit = Kotlin.kotlin.Unit;
  var TagConsumer = $module$kotlinx_html_js.kotlinx.html.TagConsumer;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var buildElements = $module$kotlin_react.react.buildElements_zepujl$;
  var render = $module$react_dom.render;
  var createRoot = $module$react_dom.createRoot;
  var hydrate = $module$react_dom.hydrate;
  var createPortal = $module$react_dom.createPortal;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var hashCode = Kotlin.hashCode;
  var wrapFunction = Kotlin.wrapFunction;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var rawRenderToString = $module$react_dom_server.renderToString;
  var rawRenderToStaticMarkup = $module$react_dom_server.renderToStaticMarkup;
  RDOMBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RDOMBuilderImpl.prototype.constructor = RDOMBuilderImpl;
  function AriaAttributesLegacyAdapter() {
  }
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaActiveDescendant', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaActiveDescendant', function () {
      return this['aria-activedescendant'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaActiveDescendant_61zpoe$', function (value) {
      this['aria-activedescendant'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaAtomic', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaAtomic', function () {
      return this['aria-atomic'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaAtomic_6taknv$', function (value) {
      this['aria-atomic'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaAutoComplete', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaAutoComplete', function () {
      return this['aria-autocomplete'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaAutoComplete_r1ob9o$', function (value) {
      this['aria-autocomplete'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaBusy', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaBusy', function () {
      return this['aria-busy'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaBusy_6taknv$', function (value) {
      this['aria-busy'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaChecked', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaChecked', function () {
      return this['aria-checked'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaChecked_mkeg4j$', function (value) {
      this['aria-checked'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaColCount', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaColCount', function () {
      return this['aria-colcount'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaColCount_za3lpa$', function (value) {
      this['aria-colcount'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaColIndex', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaColIndex', function () {
      return this['aria-colindex'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaColIndex_za3lpa$', function (value) {
      this['aria-colindex'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaColSpan', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaColSpan', function () {
      return this['aria-colspan'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaColSpan_za3lpa$', function (value) {
      this['aria-colspan'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaControls', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaControls', function () {
      return this['aria-controls'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaControls_61zpoe$', function (value) {
      this['aria-controls'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaCurrent', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaCurrent', function () {
      return this['aria-current'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaCurrent_sxebjp$', function (value) {
      this['aria-current'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaDescribedBy', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaDescribedBy', function () {
      return this['aria-describedby'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaDescribedBy_61zpoe$', function (value) {
      this['aria-describedby'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaDetails', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaDetails', function () {
      return this['aria-details'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaDetails_61zpoe$', function (value) {
      this['aria-details'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaDisabled', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaDisabled', function () {
      return this['aria-disabled'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaDisabled_6taknv$', function (value) {
      this['aria-disabled'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaDropEffect', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaDropEffect', function () {
      return this['aria-dropeffect'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaDropEffect_6113mk$', function (value) {
      this['aria-dropeffect'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaErrorMessage', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaErrorMessage', function () {
      return this['aria-errormessage'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaErrorMessage_61zpoe$', function (value) {
      this['aria-errormessage'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaExpanded', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaExpanded', function () {
      return this['aria-expanded'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaExpanded_6taknv$', function (value) {
      this['aria-expanded'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaFlowTo', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaFlowTo', function () {
      return this['aria-flowto'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaFlowTo_61zpoe$', function (value) {
      this['aria-flowto'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaGrabbed', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaGrabbed', function () {
      return this['aria-grabbed'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaGrabbed_6taknv$', function (value) {
      this['aria-grabbed'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaHasPopup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaHasPopup', function () {
      return this['aria-haspopup'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaHasPopup_y26x8q$', function (value) {
      this['aria-haspopup'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaHidden', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaHidden', function () {
      return this['aria-hidden'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaHidden_6taknv$', function (value) {
      this['aria-hidden'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaInvalid', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaInvalid', function () {
      return this['aria-invalid'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaInvalid_sbuz65$', function (value) {
      this['aria-invalid'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaKeyShortcuts', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaKeyShortcuts', function () {
      return this['aria-keyshortcuts'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaKeyShortcuts_61zpoe$', function (value) {
      this['aria-keyshortcuts'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaLabel', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaLabel', function () {
      return this['aria-label'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaLabel_61zpoe$', function (value) {
      this['aria-label'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaLabelledBy', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaLabelledBy', function () {
      return this['aria-labelledby'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaLabelledBy_61zpoe$', function (value) {
      this['aria-labelledby'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaLevel', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaLevel', function () {
      return this['aria-level'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaLevel_za3lpa$', function (value) {
      this['aria-level'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaLive', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaLive', function () {
      return this['aria-live'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaLive_oispow$', function (value) {
      this['aria-live'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaModal', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaModal', function () {
      return this['aria-modal'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaModal_6taknv$', function (value) {
      this['aria-modal'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaMultiline', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaMultiline', function () {
      return this['aria-multiline'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaMultiline_6taknv$', function (value) {
      this['aria-multiline'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaMultiSelectable', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaMultiSelectable', function () {
      return this['aria-multiselectable'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaMultiSelectable_6taknv$', function (value) {
      this['aria-multiselectable'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaOrientation', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaOrientation', function () {
      return this['aria-orientation'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaOrientation_rvxzkc$', function (value) {
      this['aria-orientation'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaOwns', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaOwns', function () {
      return this['aria-owns'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaOwns_61zpoe$', function (value) {
      this['aria-owns'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaPlaceholder', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaPlaceholder', function () {
      return this['aria-placeholder'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaPlaceholder_61zpoe$', function (value) {
      this['aria-placeholder'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaPosInSet', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaPosInSet', function () {
      return this['aria-posinset'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaPosInSet_za3lpa$', function (value) {
      this['aria-posinset'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaPressed', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaPressed', function () {
      return this['aria-pressed'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaPressed_50ykri$', function (value) {
      this['aria-pressed'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaReadOnly', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaReadOnly', function () {
      return this['aria-readonly'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaReadOnly_6taknv$', function (value) {
      this['aria-readonly'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRelevant', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRelevant', function () {
      return this['aria-relevant'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRelevant_prj7oh$', function (value) {
      this['aria-relevant'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRequired', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRequired', function () {
      return this['aria-required'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRequired_6taknv$', function (value) {
      this['aria-required'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRoleDescription', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRoleDescription', function () {
      return this['aria-roledescription'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRoleDescription_61zpoe$', function (value) {
      this['aria-roledescription'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRowCount', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRowCount', function () {
      return this['aria-rowcount'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRowCount_za3lpa$', function (value) {
      this['aria-rowcount'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRowIndex', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRowIndex', function () {
      return this['aria-rowindex'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRowIndex_za3lpa$', function (value) {
      this['aria-rowindex'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaRowSpan', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaRowSpan', function () {
      return this['aria-rowspan'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaRowSpan_za3lpa$', function (value) {
      this['aria-rowspan'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaSelected', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaSelected', function () {
      return this['aria-selected'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaSelected_6taknv$', function (value) {
      this['aria-selected'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaSetSize', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaSetSize', function () {
      return this['aria-setsize'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaSetSize_za3lpa$', function (value) {
      this['aria-setsize'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaSort', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaSort', function () {
      return this['aria-sort'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaSort_oio4f2$', function (value) {
      this['aria-sort'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaValueMax', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaValueMax', function () {
      return this['aria-valuemax'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaValueMax_14dthe$', function (value) {
      this['aria-valuemax'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaValueMin', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaValueMin', function () {
      return this['aria-valuemin'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaValueMin_14dthe$', function (value) {
      this['aria-valuemin'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaValueNow', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaValueNow', function () {
      return this['aria-valuenow'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaValueNow_14dthe$', function (value) {
      this['aria-valuenow'] = value;
    })
  });
  Object.defineProperty(AriaAttributesLegacyAdapter.prototype, 'ariaValueText', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.get_ariaValueText', function () {
      return this['aria-valuetext'];
    }),
    set: defineInlineFunction('kotlin-react-dom.react.dom.AriaAttributesLegacyAdapter.set_ariaValueText_61zpoe$', function (value) {
      this['aria-valuetext'] = value;
    })
  });
  AriaAttributesLegacyAdapter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AriaAttributesLegacyAdapter',
    interfaces: []
  };
  function ReactHTML() {
    ReactHTML_instance = this;
  }
  Object.defineProperty(ReactHTML.prototype, 'a', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_a', function () {
      return 'a';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'abbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_abbr', function () {
      return 'abbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'address', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_address', function () {
      return 'address';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'area', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_area', function () {
      return 'area';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'article', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_article', function () {
      return 'article';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'aside', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_aside', function () {
      return 'aside';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'audio', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_audio', function () {
      return 'audio';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'b', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_b', function () {
      return 'b';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'base', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_base', function () {
      return 'base';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdi', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_bdi', function () {
      return 'bdi';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'bdo', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_bdo', function () {
      return 'bdo';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'big', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_big', function () {
      return 'big';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'blockquote', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_blockquote', function () {
      return 'blockquote';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'body', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_body', function () {
      return 'body';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'br', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_br', function () {
      return 'br';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'button', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_button', function () {
      return 'button';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'canvas', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_canvas', function () {
      return 'canvas';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'caption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_caption', function () {
      return 'caption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'cite', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_cite', function () {
      return 'cite';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'code', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_code', function () {
      return 'code';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'col', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_col', function () {
      return 'col';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'colgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_colgroup', function () {
      return 'colgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'data', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_data', function () {
      return 'data';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'datalist', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_datalist', function () {
      return 'datalist';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_dd', function () {
      return 'dd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'del', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_del', function () {
      return 'del';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'details', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_details', function () {
      return 'details';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dfn', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_dfn', function () {
      return 'dfn';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dialog', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_dialog', function () {
      return 'dialog';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'div', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_div', function () {
      return 'div';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dl', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_dl', function () {
      return 'dl';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'dt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_dt', function () {
      return 'dt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'em', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_em', function () {
      return 'em';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'embed', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_embed', function () {
      return 'embed';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'fieldset', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_fieldset', function () {
      return 'fieldset';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figcaption', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_figcaption', function () {
      return 'figcaption';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'figure', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_figure', function () {
      return 'figure';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'footer', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_footer', function () {
      return 'footer';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'form', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_form', function () {
      return 'form';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h1', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h1', function () {
      return 'h1';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h2', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h2', function () {
      return 'h2';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h3', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h3', function () {
      return 'h3';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h4', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h4', function () {
      return 'h4';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h5', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h5', function () {
      return 'h5';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'h6', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_h6', function () {
      return 'h6';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'head', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_head', function () {
      return 'head';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'header', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_header', function () {
      return 'header';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_hgroup', function () {
      return 'hgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'hr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_hr', function () {
      return 'hr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'html', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_html', function () {
      return 'html';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'i', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_i', function () {
      return 'i';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'iframe', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_iframe', function () {
      return 'iframe';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'img', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_img', function () {
      return 'img';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'input', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_input', function () {
      return 'input';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ins', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_ins', function () {
      return 'ins';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'kbd', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_kbd', function () {
      return 'kbd';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'keygen', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_keygen', function () {
      return 'keygen';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'label', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_label', function () {
      return 'label';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'legend', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_legend', function () {
      return 'legend';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'li', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_li', function () {
      return 'li';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'link', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_link', function () {
      return 'link';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'main', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_main', function () {
      return 'main';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'map', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_map', function () {
      return 'map';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'mark', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_mark', function () {
      return 'mark';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menu', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_menu', function () {
      return 'menu';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'menuitem', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_menuitem', function () {
      return 'menuitem';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meta', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_meta', function () {
      return 'meta';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'meter', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_meter', function () {
      return 'meter';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'nav', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_nav', function () {
      return 'nav';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'noscript', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_noscript', function () {
      return 'noscript';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'object', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_object', function () {
      return 'object';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ol', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_ol', function () {
      return 'ol';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'optgroup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_optgroup', function () {
      return 'optgroup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'option', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_option', function () {
      return 'option';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'output', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_output', function () {
      return 'output';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'p', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_p', function () {
      return 'p';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'param', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_param', function () {
      return 'param';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'picture', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_picture', function () {
      return 'picture';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'pre', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_pre', function () {
      return 'pre';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'progress', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_progress', function () {
      return 'progress';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'q', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_q', function () {
      return 'q';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_rp', function () {
      return 'rp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'rt', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_rt', function () {
      return 'rt';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ruby', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_ruby', function () {
      return 'ruby';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 's', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_s', function () {
      return 's';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'samp', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_samp', function () {
      return 'samp';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'slot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_slot', function () {
      return 'slot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'script', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_script', function () {
      return 'script';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'section', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_section', function () {
      return 'section';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'select', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_select', function () {
      return 'select';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'small', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_small', function () {
      return 'small';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'source', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_source', function () {
      return 'source';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'span', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_span', function () {
      return 'span';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'strong', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_strong', function () {
      return 'strong';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'style', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_style', function () {
      return 'style';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sub', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_sub', function () {
      return 'sub';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'summary', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_summary', function () {
      return 'summary';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'sup', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_sup', function () {
      return 'sup';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'table', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_table', function () {
      return 'table';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'template', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_template', function () {
      return 'template';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tbody', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_tbody', function () {
      return 'tbody';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'td', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_td', function () {
      return 'td';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'textarea', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_textarea', function () {
      return 'textarea';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tfoot', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_tfoot', function () {
      return 'tfoot';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'th', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_th', function () {
      return 'th';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'thead', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_thead', function () {
      return 'thead';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'time', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_time', function () {
      return 'time';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'title', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_title', function () {
      return 'title';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'tr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_tr', function () {
      return 'tr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'track', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_track', function () {
      return 'track';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'u', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_u', function () {
      return 'u';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'ul', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_ul', function () {
      return 'ul';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'var', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_var', function () {
      return 'var';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'video', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_video', function () {
      return 'video';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'wbr', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_wbr', function () {
      return 'wbr';
    })
  });
  Object.defineProperty(ReactHTML.prototype, 'webview', {
    configurable: true,
    get: defineInlineFunction('kotlin-react-dom.react.dom.ReactHTML.get_webview', function () {
      return 'webview';
    })
  });
  ReactHTML.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ReactHTML',
    interfaces: []
  };
  var ReactHTML_instance = null;
  function ReactHTML_getInstance() {
    if (ReactHTML_instance === null) {
      new ReactHTML();
    }return ReactHTML_instance;
  }
  function get_onCopy($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCopy($receiver, value) {
    onEvent($receiver, 'oncopy', value);
  }
  function get_onCut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCut($receiver, value) {
    onEvent($receiver, 'oncut', value);
  }
  function get_onPaste($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPaste($receiver, value) {
    onEvent($receiver, 'onpaste', value);
  }
  function get_onCompositionEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionEnd($receiver, value) {
    onEvent($receiver, 'oncompositionend', value);
  }
  function get_onCompositionStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionStart($receiver, value) {
    onEvent($receiver, 'oncompositionstart', value);
  }
  function get_onCompositionUpdate($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCompositionUpdate($receiver, value) {
    onEvent($receiver, 'oncompositionupdate', value);
  }
  function get_onFocus($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onFocus($receiver, value) {
    onEvent($receiver, 'onfocus', value);
  }
  function get_onBlur($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onBlur($receiver, value) {
    onEvent($receiver, 'onblur', value);
  }
  function get_onChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onChange($receiver, value) {
    onEvent($receiver, 'onchange', value);
  }
  function get_onBeforeInput($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onBeforeInput($receiver, value) {
    onEvent($receiver, 'onbeforeinput', value);
  }
  function get_onInput($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onInput($receiver, value) {
    onEvent($receiver, 'oninput', value);
  }
  function get_onReset($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onReset($receiver, value) {
    onEvent($receiver, 'onreset', value);
  }
  function get_onSubmit($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSubmit($receiver, value) {
    onEvent($receiver, 'onsubmit', value);
  }
  function get_onInvalid($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onInvalid($receiver, value) {
    onEvent($receiver, 'oninvalid', value);
  }
  function get_onLoad($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoad($receiver, value) {
    onEvent($receiver, 'onload', value);
  }
  function get_onError($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onError($receiver, value) {
    onEvent($receiver, 'onerror', value);
  }
  function get_onKeyDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyDown($receiver, value) {
    onEvent($receiver, 'onkeydown', value);
  }
  function get_onKeyPress($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyPress($receiver, value) {
    onEvent($receiver, 'onkeypress', value);
  }
  function get_onKeyUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onKeyUp($receiver, value) {
    onEvent($receiver, 'onkeyup', value);
  }
  function get_onAbort($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAbort($receiver, value) {
    onEvent($receiver, 'onabort', value);
  }
  function get_onCanPlay($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCanPlay($receiver, value) {
    onEvent($receiver, 'oncanplay', value);
  }
  function get_onCanPlayThrough($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onCanPlayThrough($receiver, value) {
    onEvent($receiver, 'oncanplaythrough', value);
  }
  function get_onDurationChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDurationChange($receiver, value) {
    onEvent($receiver, 'ondurationchange', value);
  }
  function get_onEmptied($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEmptied($receiver, value) {
    onEvent($receiver, 'onemptied', value);
  }
  function get_onEncrypted($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEncrypted($receiver, value) {
    onEvent($receiver, 'onencrypted', value);
  }
  function get_onEnded($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onEnded($receiver, value) {
    onEvent($receiver, 'onended', value);
  }
  function get_onLoadedData($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadedData($receiver, value) {
    onEvent($receiver, 'onloadeddata', value);
  }
  function get_onLoadedMetadata($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadedMetadata($receiver, value) {
    onEvent($receiver, 'onloadedmetadata', value);
  }
  function get_onLoadStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLoadStart($receiver, value) {
    onEvent($receiver, 'onloadstart', value);
  }
  function get_onPause($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPause($receiver, value) {
    onEvent($receiver, 'onpause', value);
  }
  function get_onPlay($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPlay($receiver, value) {
    onEvent($receiver, 'onplay', value);
  }
  function get_onPlaying($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPlaying($receiver, value) {
    onEvent($receiver, 'onplaying', value);
  }
  function get_onProgress($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onProgress($receiver, value) {
    onEvent($receiver, 'onprogress', value);
  }
  function get_onRateChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onRateChange($receiver, value) {
    onEvent($receiver, 'onratechange', value);
  }
  function get_onSeeked($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSeeked($receiver, value) {
    onEvent($receiver, 'onseeked', value);
  }
  function get_onSeeking($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSeeking($receiver, value) {
    onEvent($receiver, 'onseeking', value);
  }
  function get_onStalled($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onStalled($receiver, value) {
    onEvent($receiver, 'onstalled', value);
  }
  function get_onSuspend($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSuspend($receiver, value) {
    onEvent($receiver, 'onsuspend', value);
  }
  function get_onTimeUpdate($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTimeUpdate($receiver, value) {
    onEvent($receiver, 'ontimeupdate', value);
  }
  function get_onVolumeChange($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onVolumeChange($receiver, value) {
    onEvent($receiver, 'onvolumechange', value);
  }
  function get_onWaiting($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onWaiting($receiver, value) {
    onEvent($receiver, 'onwaiting', value);
  }
  function get_onAuxClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAuxClick($receiver, value) {
    onEvent($receiver, 'onauxclick', value);
  }
  function get_onClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onClick($receiver, value) {
    onEvent($receiver, 'onclick', value);
  }
  function get_onContextMenu($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onContextMenu($receiver, value) {
    onEvent($receiver, 'oncontextmenu', value);
  }
  function get_onDoubleClick($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDoubleClick($receiver, value) {
    onEvent($receiver, 'ondoubleclick', value);
  }
  function get_onDrag($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDrag($receiver, value) {
    onEvent($receiver, 'ondrag', value);
  }
  function get_onDragEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragEnd($receiver, value) {
    onEvent($receiver, 'ondragend', value);
  }
  function get_onDragEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragEnter($receiver, value) {
    onEvent($receiver, 'ondragenter', value);
  }
  function get_onDragExit($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragExit($receiver, value) {
    onEvent($receiver, 'ondragexit', value);
  }
  function get_onDragLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragLeave($receiver, value) {
    onEvent($receiver, 'ondragleave', value);
  }
  function get_onDragOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragOver($receiver, value) {
    onEvent($receiver, 'ondragover', value);
  }
  function get_onDragStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDragStart($receiver, value) {
    onEvent($receiver, 'ondragstart', value);
  }
  function get_onDrop($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onDrop($receiver, value) {
    onEvent($receiver, 'ondrop', value);
  }
  function get_onMouseDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseDown($receiver, value) {
    onEvent($receiver, 'onmousedown', value);
  }
  function get_onMouseEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseEnter($receiver, value) {
    onEvent($receiver, 'onmouseenter', value);
  }
  function get_onMouseLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseLeave($receiver, value) {
    onEvent($receiver, 'onmouseleave', value);
  }
  function get_onMouseMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseMove($receiver, value) {
    onEvent($receiver, 'onmousemove', value);
  }
  function get_onMouseOut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseOut($receiver, value) {
    onEvent($receiver, 'onmouseout', value);
  }
  function get_onMouseOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseOver($receiver, value) {
    onEvent($receiver, 'onmouseover', value);
  }
  function get_onMouseUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onMouseUp($receiver, value) {
    onEvent($receiver, 'onmouseup', value);
  }
  function get_onSelect($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onSelect($receiver, value) {
    onEvent($receiver, 'onselect', value);
  }
  function get_onTouchCancel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchCancel($receiver, value) {
    onEvent($receiver, 'ontouchcancel', value);
  }
  function get_onTouchEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchEnd($receiver, value) {
    onEvent($receiver, 'ontouchend', value);
  }
  function get_onTouchMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchMove($receiver, value) {
    onEvent($receiver, 'ontouchmove', value);
  }
  function get_onTouchStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTouchStart($receiver, value) {
    onEvent($receiver, 'ontouchstart', value);
  }
  function get_onPointerDown($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerDown($receiver, value) {
    onEvent($receiver, 'onpointerdown', value);
  }
  function get_onPointerMove($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerMove($receiver, value) {
    onEvent($receiver, 'onpointermove', value);
  }
  function get_onPointerUp($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerUp($receiver, value) {
    onEvent($receiver, 'onpointerup', value);
  }
  function get_onPointerCancel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerCancel($receiver, value) {
    onEvent($receiver, 'onpointercancel', value);
  }
  function get_onPointerEnter($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerEnter($receiver, value) {
    onEvent($receiver, 'onpointerenter', value);
  }
  function get_onPointerLeave($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerLeave($receiver, value) {
    onEvent($receiver, 'onpointerleave', value);
  }
  function get_onPointerOver($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerOver($receiver, value) {
    onEvent($receiver, 'onpointerover', value);
  }
  function get_onPointerOut($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onPointerOut($receiver, value) {
    onEvent($receiver, 'onpointerout', value);
  }
  function get_onGotPointerCapture($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onGotPointerCapture($receiver, value) {
    onEvent($receiver, 'ongotpointercapture', value);
  }
  function get_onLostPointerCapture($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onLostPointerCapture($receiver, value) {
    onEvent($receiver, 'onlostpointercapture', value);
  }
  function get_onScroll($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onScroll($receiver, value) {
    onEvent($receiver, 'onscroll', value);
  }
  function get_onWheel($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onWheel($receiver, value) {
    onEvent($receiver, 'onwheel', value);
  }
  function get_onAnimationStart($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationStart($receiver, value) {
    onEvent($receiver, 'onanimationstart', value);
  }
  function get_onAnimationEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationEnd($receiver, value) {
    onEvent($receiver, 'onanimationend', value);
  }
  function get_onAnimationIteration($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onAnimationIteration($receiver, value) {
    onEvent($receiver, 'onanimationiteration', value);
  }
  function get_onTransitionEnd($receiver) {
    throw IllegalStateException_init(''.toString());
  }
  function set_onTransitionEnd($receiver, value) {
    onEvent($receiver, 'ontransitionend', value);
  }
  function onEvent($receiver, type, handler) {
    $receiver.consumer.onTagEvent_azi6uv$($receiver, type, handler);
  }
  function RDOMBuilder() {
    RDOMBuilder$Companion_getInstance();
  }
  RDOMBuilder.prototype.get_g0n3bx$ = function ($receiver, name) {
    return this.domProps[name];
  };
  RDOMBuilder.prototype.set_hpg2xa$ = function ($receiver, name, value) {
    this.domProps[name] = value;
  };
  RDOMBuilder.prototype.get_defaultChecked_a2ovwx$ = function ($receiver) {
    var tmp$;
    return (tmp$ = this.get_g0n3bx$($receiver, 'defaultChecked')) != null ? tmp$ : false;
  };
  RDOMBuilder.prototype.set_defaultChecked_47da7g$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'defaultChecked', value);
  };
  RDOMBuilder.prototype.get_values_sktobr$ = function ($receiver) {
    var tmp$;
    return ((tmp$ = this.get_g0n3bx$($receiver, 'value')) != null ? tmp$ : []).toSet();
  };
  RDOMBuilder.prototype.set_values_d8zj82$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', copyToArray(value));
  };
  RDOMBuilder.prototype.get_value_sktobr$ = function ($receiver) {
    return this.get_g0n3bx$($receiver, 'value');
  };
  RDOMBuilder.prototype.set_value_g9clh3$ = function ($receiver, value) {
    this.set_hpg2xa$($receiver, 'value', value);
  };
  Object.defineProperty(RDOMBuilder.prototype, 'key', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_key(this.domProps, value);
    }
  });
  Object.defineProperty(RDOMBuilder.prototype, 'ref', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init(''.toString());
    },
    set: function (value) {
      set_ref(this.domProps, value);
    }
  });
  RDOMBuilder.prototype.create = function () {
    return createElement.apply(null, [this.attrs.tagName, this.domProps].concat(copyToArray(this.childList)));
  };
  function RDOMBuilder$Companion() {
    RDOMBuilder$Companion_instance = this;
  }
  RDOMBuilder$Companion.prototype.invoke_f6ihu2$ = function (factory) {
    return new RDOMBuilderImpl(factory);
  };
  RDOMBuilder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RDOMBuilder$Companion_instance = null;
  function RDOMBuilder$Companion_getInstance() {
    if (RDOMBuilder$Companion_instance === null) {
      new RDOMBuilder$Companion();
    }return RDOMBuilder$Companion_instance;
  }
  RDOMBuilder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RDOMBuilder',
    interfaces: [RBuilder]
  };
  var attrs = defineInlineFunction('kotlin-react-dom.react.dom.attrs_cftwgj$', function ($receiver, handler) {
    handler($receiver.attrs);
  });
  function RDOMBuilderImpl(factory) {
    RBuilderImpl.call(this);
    this.consumer_pncnru$_0 = new RDOMBuilderImpl$consumer$ObjectLiteral(this);
    this.attrs_45o9rq$_0 = factory(this.consumer);
    this.domProps_fsxk8i$_0 = {};
    var $receiver = this.attrs.attributesEntries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.key, jsStyleMarker))
        destination.add_11rb$(element);
    }
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      setProp(this, element_0.key, element_0.value);
    }
    var jsStyle = get_jsStyle(this.attrs);
    if (jsStyle != undefined) {
      setProp(this, 'style', jsStyle);
    }}
  Object.defineProperty(RDOMBuilderImpl.prototype, 'consumer', {
    configurable: true,
    get: function () {
      return this.consumer_pncnru$_0;
    }
  });
  Object.defineProperty(RDOMBuilderImpl.prototype, 'attrs', {
    configurable: true,
    get: function () {
      return this.attrs_45o9rq$_0;
    }
  });
  Object.defineProperty(RDOMBuilderImpl.prototype, 'domProps', {
    configurable: true,
    get: function () {
      return this.domProps_fsxk8i$_0;
    }
  });
  function RDOMBuilderImpl$consumer$ObjectLiteral(this$RDOMBuilderImpl) {
    this.this$RDOMBuilderImpl = this$RDOMBuilderImpl;
  }
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagAttributeChange_5n2z71$ = function (tag, attribute, value) {
    if (equals(attribute, jsStyleMarker)) {
      setProp(this.this$RDOMBuilderImpl, 'style', get_jsStyle(this.this$RDOMBuilderImpl.attrs));
    } else {
      setProp(this.this$RDOMBuilderImpl, attribute, value);
    }
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagComment_6bul2c$ = function (content) {
    throw IllegalStateException_init('Comments are not supported');
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContent_6bul2c$ = function (content) {
    this.this$RDOMBuilderImpl.unaryPlus_pdl1vz$(content.toString());
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContentEntity_ws8or7$ = function (entity) {
    this.this$RDOMBuilderImpl.unaryPlus_m8hz4t$(entity.text);
  };
  function RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(closure$sb) {
    this.closure$sb = closure$sb;
  }
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.closure$sb.append_pdl1vj$($receiver);
  };
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Unsafe]
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagContentUnsafe_kntra7$ = function (block) {
    var sb = StringBuilder_init();
    block(new RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral(sb));
    var tmp$ = this.this$RDOMBuilderImpl.domProps;
    var $receiver = {};
    $receiver.__html = sb.toString();
    tmp$.dangerouslySetInnerHTML = $receiver;
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagStart_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagEnd_tkgjla$ = function (tag) {
    throw IllegalStateException_init("Don't nest tags inside props block");
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagEvent_azi6uv$ = function (tag, event, value) {
    setProp(this.this$RDOMBuilderImpl, event, value);
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.finalize = function () {
    return Unit;
  };
  RDOMBuilderImpl$consumer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TagConsumer]
  };
  RDOMBuilderImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RDOMBuilderImpl',
    interfaces: [RBuilderImpl, RDOMBuilder]
  };
  function setProp($receiver, attribute, value) {
    var key = fixAttributeName(attribute);
    $receiver.domProps[key] = value;
  }
  function render$lambda() {
    return Unit;
  }
  function render_0(container, callback, handler) {
    if (callback === void 0)
      callback = render$lambda;
    render(buildElements(handler), container, callback);
  }
  function renderIntoRoot(container, options, handler) {
    if (options === void 0)
      options = null;
    return createRoot(container, options).render(buildElements(handler));
  }
  function hydrate$lambda() {
    return Unit;
  }
  function hydrate_0(container, callback, handler) {
    if (callback === void 0)
      callback = hydrate$lambda;
    hydrate(buildElements(handler), container, callback);
  }
  function createPortal_0(container, handler) {
    return createPortal(buildElements(handler), container);
  }
  var events;
  var attrsMap;
  function fixAttributeName(event) {
    var tmp$;
    return (tmp$ = attrsMap.get_11rb$(event)) != null ? tmp$ : event;
  }
  function StringAttr() {
    StringAttr_instance = this;
  }
  StringAttr.prototype.getValue_pt3q5s$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef.attributes.get_11rb$(property.callableName)) != null ? tmp$ : '';
  };
  StringAttr.prototype.setValue_wi26v6$ = function (thisRef, property, value) {
    var $receiver = thisRef.attributes;
    var key = property.callableName;
    $receiver.put_xwzc9p$(key, value);
  };
  StringAttr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringAttr',
    interfaces: []
  };
  var StringAttr_instance = null;
  function StringAttr_getInstance() {
    if (StringAttr_instance === null) {
      new StringAttr();
    }return StringAttr_instance;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  function get_key($receiver) {
    return key.getValue_pt3q5s$($receiver, key_metadata);
  }
  function set_key_0($receiver, key_0) {
    key.setValue_wi26v6$($receiver, key_metadata, key_0);
  }
  var defaultValue;
  var defaultValue_metadata = new PropertyMetadata('defaultValue');
  function get_defaultValue($receiver) {
    return defaultValue.getValue_pt3q5s$($receiver, defaultValue_metadata);
  }
  function set_defaultValue($receiver, defaultValue_0) {
    defaultValue.setValue_wi26v6$($receiver, defaultValue_metadata, defaultValue_0);
  }
  var defaultValue_0;
  var defaultValue_metadata_0 = new PropertyMetadata('defaultValue');
  function get_defaultValue_0($receiver) {
    return defaultValue_0.getValue_pt3q5s$($receiver, defaultValue_metadata_0);
  }
  function set_defaultValue_0($receiver, defaultValue) {
    defaultValue_0.setValue_wi26v6$($receiver, defaultValue_metadata_0, defaultValue);
  }
  var value;
  var value_metadata = new PropertyMetadata('value');
  function get_value($receiver) {
    return value.getValue_pt3q5s$($receiver, value_metadata);
  }
  function set_value($receiver, value_0) {
    value.setValue_wi26v6$($receiver, value_metadata, value_0);
  }
  function get_jsStyle($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver[jsStyleMarker]) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = {};
      tmp$_0 = $receiver_0;
    }
    var value = tmp$_0;
    set_jsStyle($receiver, value);
    return value;
  }
  function set_jsStyle($receiver, value) {
    $receiver[jsStyleMarker] = value;
    var $receiver_0 = $receiver.attributes;
    var key = jsStyleMarker;
    var value_0 = hashCode(value).toString();
    $receiver_0.put_xwzc9p$(key, value_0);
  }
  var jsStyleMarker;
  var jsStyle = defineInlineFunction('kotlin-react-dom.react.dom.jsStyle_ymsho7$', wrapFunction(function () {
    var get_jsStyle = _.react.dom.get_jsStyle_6s7ubj$;
    return function ($receiver, handler) {
      handler(get_jsStyle($receiver));
    };
  }));
  var tag = defineInlineFunction('kotlin-react-dom.react.dom.tag_usjfi1$', wrapFunction(function () {
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    return function ($receiver, block, factory) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(factory);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var a = defineInlineFunction('kotlin-react-dom.react.dom.a_nbz07b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var A_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.A;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function a$lambda(closure$href, closure$target, closure$classes) {
      return function (it) {
        return new A_init(attributesMapOf(['href', closure$href, 'target', closure$target, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, href, target, classes, block) {
      if (href === void 0)
        href = null;
      if (target === void 0)
        target = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(a$lambda(href, target, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var abbr = defineInlineFunction('kotlin-react-dom.react.dom.abbr_2pbh6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ABBR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ABBR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function abbr$lambda(closure$classes) {
      return function (it) {
        return new ABBR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(abbr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var address = defineInlineFunction('kotlin-react-dom.react.dom.address_z0z9h0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ADDRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ADDRESS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function address$lambda(closure$classes) {
      return function (it) {
        return new ADDRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(address$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var area = defineInlineFunction('kotlin-react-dom.react.dom.area_88drbb$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var AREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function area$lambda(closure$shape, closure$alt, closure$classes) {
      return function (it) {
        return new AREA_init(attributesMapOf(['Shape', closure$shape != null ? enumEncode(closure$shape) : null, 'alt', closure$alt, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, shape, alt, classes, block) {
      if (shape === void 0)
        shape = null;
      if (alt === void 0)
        alt = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(area$lambda(shape, alt, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var article = defineInlineFunction('kotlin-react-dom.react.dom.article_oyo50y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ARTICLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ARTICLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function article$lambda(closure$classes) {
      return function (it) {
        return new ARTICLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(article$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var aside = defineInlineFunction('kotlin-react-dom.react.dom.aside_d4tg9c$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var ASIDE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.ASIDE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function aside$lambda(closure$classes) {
      return function (it) {
        return new ASIDE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(aside$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var audio = defineInlineFunction('kotlin-react-dom.react.dom.audio_26aei6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var AUDIO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.AUDIO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function audio$lambda(closure$classes) {
      return function (it) {
        return new AUDIO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(audio$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var b = defineInlineFunction('kotlin-react-dom.react.dom.b_7nhtl2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var B_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.B;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function b$lambda(closure$classes) {
      return function (it) {
        return new B_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(b$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var base = defineInlineFunction('kotlin-react-dom.react.dom.base_1qtasl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BASE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BASE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function base$lambda(closure$classes) {
      return function (it) {
        return new BASE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(base$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var bdi = defineInlineFunction('kotlin-react-dom.react.dom.bdi_e0blcx$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDI;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function bdi$lambda(closure$classes) {
      return function (it) {
        return new BDI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(bdi$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var bdo = defineInlineFunction('kotlin-react-dom.react.dom.bdo_ydoj6j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BDO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BDO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function bdo$lambda(closure$classes) {
      return function (it) {
        return new BDO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(bdo$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var blockquote = defineInlineFunction('kotlin-react-dom.react.dom.blockquote_244j8j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BLOCKQUOTE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BLOCKQUOTE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function blockquote$lambda(closure$classes) {
      return function (it) {
        return new BLOCKQUOTE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(blockquote$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var body = defineInlineFunction('kotlin-react-dom.react.dom.body_qvl2vq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BODY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function body$lambda(closure$classes) {
      return function (it) {
        return new BODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(body$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var br = defineInlineFunction('kotlin-react-dom.react.dom.br_dl5xac$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var BR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function br$lambda(closure$classes) {
      return function (it) {
        return new BR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(br$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var button = defineInlineFunction('kotlin-react-dom.react.dom.button_ueq2um$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var BUTTON_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
      return function (it) {
        return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, formEncType, formMethod, type, classes, block) {
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (type === void 0)
        type = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(button$lambda(formEncType, formMethod, type, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var canvas = defineInlineFunction('kotlin-react-dom.react.dom.canvas_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(canvas$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var canvas_0 = defineInlineFunction('kotlin-react-dom.react.dom.canvas_jixbo$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CANVAS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CANVAS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function canvas$lambda(closure$classes) {
      return function (it) {
        return new CANVAS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(canvas$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var caption = defineInlineFunction('kotlin-react-dom.react.dom.caption_ix3blu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CAPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function caption$lambda(closure$classes) {
      return function (it) {
        return new CAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(caption$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var cite = defineInlineFunction('kotlin-react-dom.react.dom.cite_gtb7bp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CITE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CITE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function cite$lambda(closure$classes) {
      return function (it) {
        return new CITE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(cite$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var code = defineInlineFunction('kotlin-react-dom.react.dom.code_e1ernl$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var CODE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.CODE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function code$lambda(closure$classes) {
      return function (it) {
        return new CODE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(code$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var col = defineInlineFunction('kotlin-react-dom.react.dom.col_5agiaw$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function col$lambda(closure$classes) {
      return function (it) {
        return new COL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(col$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var colgroup = defineInlineFunction('kotlin-react-dom.react.dom.colgroup_efezmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var COLGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.COLGROUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function colgroup$lambda(closure$classes) {
      return function (it) {
        return new COLGROUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(colgroup$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var datalist = defineInlineFunction('kotlin-react-dom.react.dom.datalist_bhll8k$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DATALIST_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DATALIST;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function datalist$lambda(closure$classes) {
      return function (it) {
        return new DATALIST_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(datalist$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dd = defineInlineFunction('kotlin-react-dom.react.dom.dd_7bhhcc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dd$lambda(closure$classes) {
      return function (it) {
        return new DD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dd$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var del = defineInlineFunction('kotlin-react-dom.react.dom.del_lx3a6b$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DEL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function del$lambda(closure$classes) {
      return function (it) {
        return new DEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(del$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var details = defineInlineFunction('kotlin-react-dom.react.dom.details_dx18be$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DETAILS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DETAILS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function details$lambda(closure$classes) {
      return function (it) {
        return new DETAILS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(details$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dfn = defineInlineFunction('kotlin-react-dom.react.dom.dfn_gfa744$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DFN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DFN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dfn$lambda(closure$classes) {
      return function (it) {
        return new DFN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dfn$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dialog = defineInlineFunction('kotlin-react-dom.react.dom.dialog_r2vd0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIALOG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIALOG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dialog$lambda(closure$classes) {
      return function (it) {
        return new DIALOG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dialog$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var div = defineInlineFunction('kotlin-react-dom.react.dom.div_gtrzbd$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DIV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function div$lambda(closure$classes) {
      return function (it) {
        return new DIV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dl = defineInlineFunction('kotlin-react-dom.react.dom.dl_asxds4$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dl$lambda(closure$classes) {
      return function (it) {
        return new DL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dl$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var dt = defineInlineFunction('kotlin-react-dom.react.dom.dt_eada7w$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var DT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function dt$lambda(closure$classes) {
      return function (it) {
        return new DT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(dt$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var em = defineInlineFunction('kotlin-react-dom.react.dom.em_oqozj8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function em$lambda(closure$classes) {
      return function (it) {
        return new EM_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(em$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var embed = defineInlineFunction('kotlin-react-dom.react.dom.embed_n808k1$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var EMBED_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.EMBED;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function embed$lambda(closure$classes) {
      return function (it) {
        return new EMBED_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(embed$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var fieldset = defineInlineFunction('kotlin-react-dom.react.dom.fieldset_hp7o$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIELDSET_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIELDSET;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function fieldset$lambda(closure$classes) {
      return function (it) {
        return new FIELDSET_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(fieldset$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var figcaption = defineInlineFunction('kotlin-react-dom.react.dom.figcaption_m3xu5m$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGCAPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGCAPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function figcaption$lambda(closure$classes) {
      return function (it) {
        return new FIGCAPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(figcaption$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var figure = defineInlineFunction('kotlin-react-dom.react.dom.figure_1mq3ag$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FIGURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FIGURE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function figure$lambda(closure$classes) {
      return function (it) {
        return new FIGURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(figure$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var footer = defineInlineFunction('kotlin-react-dom.react.dom.footer_xcq26p$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var FOOTER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FOOTER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function footer$lambda(closure$classes) {
      return function (it) {
        return new FOOTER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(footer$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var form = defineInlineFunction('kotlin-react-dom.react.dom.form_7ftnwq$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var FORM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function form$lambda(closure$action, closure$encType, closure$method, closure$classes) {
      return function (it) {
        return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, action, encType, method, classes, block) {
      if (action === void 0)
        action = null;
      if (encType === void 0)
        encType = null;
      if (method === void 0)
        method = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(form$lambda(action, encType, method, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h1 = defineInlineFunction('kotlin-react-dom.react.dom.h1_quudml$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H1_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h1$lambda(closure$classes) {
      return function (it) {
        return new H1_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h2 = defineInlineFunction('kotlin-react-dom.react.dom.h2_zaswbi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H2_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h2$lambda(closure$classes) {
      return function (it) {
        return new H2_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h2$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h3 = defineInlineFunction('kotlin-react-dom.react.dom.h3_racmyp$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H3_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h3$lambda(closure$classes) {
      return function (it) {
        return new H3_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h3$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h4 = defineInlineFunction('kotlin-react-dom.react.dom.h4_iue49s$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H4_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H4;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h4$lambda(closure$classes) {
      return function (it) {
        return new H4_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h4$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h5 = defineInlineFunction('kotlin-react-dom.react.dom.h5_aeflkv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H5_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H5;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h5$lambda(closure$classes) {
      return function (it) {
        return new H5_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h5$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var h6 = defineInlineFunction('kotlin-react-dom.react.dom.h6_1yh2vy$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var H6_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H6;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function h6$lambda(closure$classes) {
      return function (it) {
        return new H6_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h6$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var head = defineInlineFunction('kotlin-react-dom.react.dom.head_elsczb$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEAD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function head$lambda(it) {
      return new HEAD_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(head$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var header = defineInlineFunction('kotlin-react-dom.react.dom.header_xi6ch$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HEADER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function header$lambda(closure$classes) {
      return function (it) {
        return new HEADER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(header$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var hr = defineInlineFunction('kotlin-react-dom.react.dom.hr_ld1ake$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var HR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function hr$lambda(closure$classes) {
      return function (it) {
        return new HR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(hr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var html = defineInlineFunction('kotlin-react-dom.react.dom.html_a3w7j2$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var HTML_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HTML;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function html$lambda(it) {
      return new HTML_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(html$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var i = defineInlineFunction('kotlin-react-dom.react.dom.i_jkw8pr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var I_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.I;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function i$lambda(closure$classes) {
      return function (it) {
        return new I_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(i$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var iframe = defineInlineFunction('kotlin-react-dom.react.dom.iframe_ft8ple$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, content) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(iframe$lambda(sandbox, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var iframe_0 = defineInlineFunction('kotlin-react-dom.react.dom.iframe_i8zf9o$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IFRAME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IFRAME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function iframe$lambda(closure$sandbox, closure$classes) {
      return function (it) {
        return new IFRAME_init(attributesMapOf(['sandbox', closure$sandbox != null ? enumEncode(closure$sandbox) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, sandbox, classes, block) {
      if (sandbox === void 0)
        sandbox = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(iframe$lambda(sandbox, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var img = defineInlineFunction('kotlin-react-dom.react.dom.img_vso3mj$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var IMG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function img$lambda(closure$alt, closure$src, closure$classes) {
      return function (it) {
        return new IMG_init(attributesMapOf(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, alt, src, classes, block) {
      if (alt === void 0)
        alt = null;
      if (src === void 0)
        src = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(img$lambda(alt, src, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var input = defineInlineFunction('kotlin-react-dom.react.dom.input_etd37n$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var INPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
      return function (it) {
        return new INPUT_init(attributesMapOf(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, type, formEncType, formMethod, name, classes, block) {
      if (type === void 0)
        type = null;
      if (formEncType === void 0)
        formEncType = null;
      if (formMethod === void 0)
        formMethod = null;
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(type, formEncType, formMethod, name, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ins = defineInlineFunction('kotlin-react-dom.react.dom.ins_x2jgqu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var INS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ins$lambda(closure$classes) {
      return function (it) {
        return new INS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ins$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var kbd = defineInlineFunction('kotlin-react-dom.react.dom.kbd_547kbf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var KBD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.KBD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function kbd$lambda(closure$classes) {
      return function (it) {
        return new KBD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(kbd$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var label = defineInlineFunction('kotlin-react-dom.react.dom.label_thtid0$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LABEL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function label$lambda(closure$classes) {
      return function (it) {
        return new LABEL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(label$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var legend = defineInlineFunction('kotlin-react-dom.react.dom.legend_jb5h3z$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LEGEND_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LEGEND;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function legend$lambda(closure$classes) {
      return function (it) {
        return new LEGEND_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(legend$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var li = defineInlineFunction('kotlin-react-dom.react.dom.li_239rhr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var LI_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function li$lambda(closure$classes) {
      return function (it) {
        return new LI_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(li$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var link = defineInlineFunction('kotlin-react-dom.react.dom.link_28p9e6$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var LINK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LINK;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function link$lambda(closure$href, closure$rel, closure$type) {
      return function (it) {
        return new LINK_init(attributesMapOf(['href', closure$href, 'rel', closure$rel, 'type', closure$type]), it);
      };
    }
    return function ($receiver, href, rel, type, block) {
      if (href === void 0)
        href = null;
      if (rel === void 0)
        rel = null;
      if (type === void 0)
        type = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(link$lambda(href, rel, type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var main = defineInlineFunction('kotlin-react-dom.react.dom.main_szkgy5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MAIN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAIN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function main$lambda(closure$classes) {
      return function (it) {
        return new MAIN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(main$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var map = defineInlineFunction('kotlin-react-dom.react.dom.map_5olbsf$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var MAP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MAP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function map$lambda(closure$name, closure$classes) {
      return function (it) {
        return new MAP_init(attributesMapOf(['name', closure$name, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, name, classes, block) {
      if (name === void 0)
        name = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(map$lambda(name, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var mark = defineInlineFunction('kotlin-react-dom.react.dom.mark_fbhysh$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MARK_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MARK;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function mark$lambda(closure$classes) {
      return function (it) {
        return new MARK_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(mark$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var math = defineInlineFunction('kotlin-react-dom.react.dom.math_g9a7ss$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var MATH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.MATH;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function math$lambda(closure$classes) {
      return function (it) {
        return new MATH_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(math$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var meta = defineInlineFunction('kotlin-react-dom.react.dom.meta_lff4tg$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var META_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.META;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function meta$lambda(closure$name, closure$content) {
      return function (it) {
        return new META_init(attributesMapOf(['name', closure$name, 'content', closure$content]), it);
      };
    }
    return function ($receiver, name, content, block) {
      if (name === void 0)
        name = null;
      if (content === void 0)
        content = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(meta$lambda(name, content));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var meter = defineInlineFunction('kotlin-react-dom.react.dom.meter_pg8oht$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var METER_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.METER;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function meter$lambda(closure$classes) {
      return function (it) {
        return new METER_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(meter$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var nav = defineInlineFunction('kotlin-react-dom.react.dom.nav_5mbwij$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NAV_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function nav$lambda(closure$classes) {
      return function (it) {
        return new NAV_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(nav$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var noscript = defineInlineFunction('kotlin-react-dom.react.dom.noscript_3p4atc$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var NOSCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NOSCRIPT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function noscript$lambda(closure$classes) {
      return function (it) {
        return new NOSCRIPT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(noscript$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var objectTag = defineInlineFunction('kotlin-react-dom.react.dom.objectTag_hy8adv$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OBJECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OBJECT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function objectTag$lambda(closure$classes) {
      return function (it) {
        return new OBJECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(objectTag$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ol = defineInlineFunction('kotlin-react-dom.react.dom.ol_r4jh81$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ol$lambda(closure$classes) {
      return function (it) {
        return new OL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ol$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var optgroup = defineInlineFunction('kotlin-react-dom.react.dom.optgroup_q968rn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var OPTGROUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTGROUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function optgroup$lambda(closure$label, closure$classes) {
      return function (it) {
        return new OPTGROUP_init(attributesMapOf(['label', closure$label, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, label, classes, block) {
      if (label === void 0)
        label = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(optgroup$lambda(label, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var option = defineInlineFunction('kotlin-react-dom.react.dom.option_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var option_0 = defineInlineFunction('kotlin-react-dom.react.dom.option_10ahkn$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OPTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OPTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function option$lambda(closure$classes) {
      return function (it) {
        return new OPTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(option$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var output = defineInlineFunction('kotlin-react-dom.react.dom.output_6fkigb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var OUTPUT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.OUTPUT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function output$lambda(closure$classes) {
      return function (it) {
        return new OUTPUT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(output$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var p = defineInlineFunction('kotlin-react-dom.react.dom.p_vianug$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var P_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function p$lambda(closure$classes) {
      return function (it) {
        return new P_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var param = defineInlineFunction('kotlin-react-dom.react.dom.param_r0oori$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var PARAM_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PARAM;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function param$lambda(closure$name, closure$value) {
      return function (it) {
        return new PARAM_init(attributesMapOf(['name', closure$name, 'value', closure$value]), it);
      };
    }
    return function ($receiver, name, value, block) {
      if (name === void 0)
        name = null;
      if (value === void 0)
        value = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(param$lambda(name, value));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var picture = defineInlineFunction('kotlin-react-dom.react.dom.picture_2zheom$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PICTURE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PICTURE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function picture$lambda(closure$classes) {
      return function (it) {
        return new PICTURE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(picture$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var pre = defineInlineFunction('kotlin-react-dom.react.dom.pre_bsqswr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PRE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PRE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function pre$lambda(closure$classes) {
      return function (it) {
        return new PRE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(pre$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var progress = defineInlineFunction('kotlin-react-dom.react.dom.progress_qram69$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var PROGRESS_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.PROGRESS;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function progress$lambda(closure$classes) {
      return function (it) {
        return new PROGRESS_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(progress$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var q = defineInlineFunction('kotlin-react-dom.react.dom.q_n2c55j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var Q_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.Q;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function q$lambda(closure$classes) {
      return function (it) {
        return new Q_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(q$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var rp = defineInlineFunction('kotlin-react-dom.react.dom.rp_68stce$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function rp$lambda(closure$classes) {
      return function (it) {
        return new RP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(rp$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var rt = defineInlineFunction('kotlin-react-dom.react.dom.rt_rj19fa$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function rt$lambda(closure$classes) {
      return function (it) {
        return new RT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(rt$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ruby = defineInlineFunction('kotlin-react-dom.react.dom.ruby_w5f9pu$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var RUBY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.RUBY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ruby$lambda(closure$classes) {
      return function (it) {
        return new RUBY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ruby$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var samp = defineInlineFunction('kotlin-react-dom.react.dom.samp_uvv9ff$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SAMP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SAMP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function samp$lambda(closure$classes) {
      return function (it) {
        return new SAMP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(samp$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var script = defineInlineFunction('kotlin-react-dom.react.dom.script_4uv0f2$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var SCRIPT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SCRIPT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function script$lambda(closure$type, closure$src) {
      return function (it) {
        return new SCRIPT_init(attributesMapOf(['type', closure$type, 'src', closure$src]), it);
      };
    }
    return function ($receiver, type, src, block) {
      if (type === void 0)
        type = null;
      if (src === void 0)
        src = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(script$lambda(type, src));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var section = defineInlineFunction('kotlin-react-dom.react.dom.section_7ougmb$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SECTION_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SECTION;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function section$lambda(closure$classes) {
      return function (it) {
        return new SECTION_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(section$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var select = defineInlineFunction('kotlin-react-dom.react.dom.select_iug7io$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SELECT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SELECT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function select$lambda(closure$classes) {
      return function (it) {
        return new SELECT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(select$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var small = defineInlineFunction('kotlin-react-dom.react.dom.small_c9m43j$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SMALL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SMALL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function small$lambda(closure$classes) {
      return function (it) {
        return new SMALL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(small$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var source = defineInlineFunction('kotlin-react-dom.react.dom.source_ly1yj5$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SOURCE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SOURCE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function source$lambda(closure$classes) {
      return function (it) {
        return new SOURCE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(source$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var span = defineInlineFunction('kotlin-react-dom.react.dom.span_t2ee0y$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SPAN_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function span$lambda(closure$classes) {
      return function (it) {
        return new SPAN_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var strong = defineInlineFunction('kotlin-react-dom.react.dom.strong_oovi1h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STRONG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STRONG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function strong$lambda(closure$classes) {
      return function (it) {
        return new STRONG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(strong$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var style = defineInlineFunction('kotlin-react-dom.react.dom.style_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, content) {
      if (type === void 0)
        type = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(style$lambda(type));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var style_0 = defineInlineFunction('kotlin-react-dom.react.dom.style_kht6w9$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var STYLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.STYLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function style$lambda(closure$type) {
      return function (it) {
        return new STYLE_init(attributesMapOf('type', closure$type), it);
      };
    }
    return function ($receiver, type, block) {
      if (type === void 0)
        type = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(style$lambda(type));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var sub = defineInlineFunction('kotlin-react-dom.react.dom.sub_v7eync$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUB_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUB;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function sub$lambda(closure$classes) {
      return function (it) {
        return new SUB_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(sub$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var sup = defineInlineFunction('kotlin-react-dom.react.dom.sup_fyw92e$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SUP_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SUP;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function sup$lambda(closure$classes) {
      return function (it) {
        return new SUP_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(sup$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var svg = defineInlineFunction('kotlin-react-dom.react.dom.svg_xoe246$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, content) {
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(svg$lambda(classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var svg_0 = defineInlineFunction('kotlin-react-dom.react.dom.svg_bdchms$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var SVG_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SVG;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function svg$lambda(closure$classes) {
      return function (it) {
        return new SVG_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(svg$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var table = defineInlineFunction('kotlin-react-dom.react.dom.table_lwybxi$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TABLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function table$lambda(closure$classes) {
      return function (it) {
        return new TABLE_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(table$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tbody = defineInlineFunction('kotlin-react-dom.react.dom.tbody_tx0lke$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TBODY_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TBODY;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tbody$lambda(closure$classes) {
      return function (it) {
        return new TBODY_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tbody$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var td = defineInlineFunction('kotlin-react-dom.react.dom.td_a9j6l8$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function td$lambda(closure$classes) {
      return function (it) {
        return new TD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(td$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var textarea = defineInlineFunction('kotlin-react-dom.react.dom.textarea_ctzq07$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function textarea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, content) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(textarea$lambda(rows, cols, wrap, classes));
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var textarea_0 = defineInlineFunction('kotlin-react-dom.react.dom.textarea_4u31cv$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TEXTAREA_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TEXTAREA;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function textarea$lambda(closure$rows, closure$cols, closure$wrap, closure$classes) {
      return function (it) {
        return new TEXTAREA_init(attributesMapOf(['rows', closure$rows, 'cols', closure$cols, 'wrap', closure$wrap != null ? enumEncode(closure$wrap) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, rows, cols, wrap, classes, block) {
      if (rows === void 0)
        rows = null;
      if (cols === void 0)
        cols = null;
      if (wrap === void 0)
        wrap = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(textarea$lambda(rows, cols, wrap, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tfoot = defineInlineFunction('kotlin-react-dom.react.dom.tfoot_agonsq$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TFOOT_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TFOOT;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tfoot$lambda(closure$classes) {
      return function (it) {
        return new TFOOT_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tfoot$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var th = defineInlineFunction('kotlin-react-dom.react.dom.th_bo9ux3$', wrapFunction(function () {
    var enumEncode = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
    var TH_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TH;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function th$lambda(closure$scope, closure$classes) {
      return function (it) {
        return new TH_init(attributesMapOf(['scope', closure$scope != null ? enumEncode(closure$scope) : null, 'class', closure$classes]), it);
      };
    }
    return function ($receiver, scope, classes, block) {
      if (scope === void 0)
        scope = null;
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(th$lambda(scope, classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var thead = defineInlineFunction('kotlin-react-dom.react.dom.thead_jad978$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var THEAD_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.THEAD;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function thead$lambda(closure$classes) {
      return function (it) {
        return new THEAD_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(thead$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var time = defineInlineFunction('kotlin-react-dom.react.dom.time_m4er8h$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TIME_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TIME;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function time$lambda(closure$classes) {
      return function (it) {
        return new TIME_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(time$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var title = defineInlineFunction('kotlin-react-dom.react.dom.title_hw0qe1$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, content) {
      if (content === void 0)
        content = '';
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(title$lambda);
      $receiver_0.unaryPlus_pdl1vz$(content);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var title_0 = defineInlineFunction('kotlin-react-dom.react.dom.title_cp8zsd$', wrapFunction(function () {
    var html = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
    var TITLE_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TITLE;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function title$lambda(it) {
      return new TITLE_init(html.emptyMap, it);
    }
    return function ($receiver, block) {
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(title$lambda);
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var tr = defineInlineFunction('kotlin-react-dom.react.dom.tr_y4c0um$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var TR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function tr$lambda(closure$classes) {
      return function (it) {
        return new TR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(tr$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var ul = defineInlineFunction('kotlin-react-dom.react.dom.ul_yweui3$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var UL_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function ul$lambda(closure$classes) {
      return function (it) {
        return new UL_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(ul$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var varTag = defineInlineFunction('kotlin-react-dom.react.dom.varTag_wqfjdr$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VAR_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VAR;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function varTag$lambda(closure$classes) {
      return function (it) {
        return new VAR_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(varTag$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  var video = defineInlineFunction('kotlin-react-dom.react.dom.video_4xrr2l$', wrapFunction(function () {
    var attributesMapOf = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
    var VIDEO_init = _.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.VIDEO;
    var RDOMBuilder = _.react.dom.RDOMBuilder;
    function video$lambda(closure$classes) {
      return function (it) {
        return new VIDEO_init(attributesMapOf('class', closure$classes), it);
      };
    }
    return function ($receiver, classes, block) {
      if (classes === void 0)
        classes = null;
      var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(video$lambda(classes));
      block($receiver_0);
      $receiver.child_30b5ua$($receiver_0.create());
    };
  }));
  function renderToString(handler) {
    return rawRenderToString(buildElements(handler));
  }
  function renderToStaticMarkup(handler) {
    return rawRenderToStaticMarkup(buildElements(handler));
  }
  var package$react = _.react || (_.react = {});
  var package$dom = package$react.dom || (package$react.dom = {});
  package$dom.AriaAttributesLegacyAdapter = AriaAttributesLegacyAdapter;
  Object.defineProperty(package$dom, 'ReactHTML', {
    get: ReactHTML_getInstance
  });
  package$dom.get_onCopy_fxodxh$ = get_onCopy;
  package$dom.set_onCopy_3qxgkb$ = set_onCopy;
  package$dom.get_onCut_fxodxh$ = get_onCut;
  package$dom.set_onCut_3qxgkb$ = set_onCut;
  package$dom.get_onPaste_fxodxh$ = get_onPaste;
  package$dom.set_onPaste_3qxgkb$ = set_onPaste;
  package$dom.get_onCompositionEnd_fxodxh$ = get_onCompositionEnd;
  package$dom.set_onCompositionEnd_m3bfeh$ = set_onCompositionEnd;
  package$dom.get_onCompositionStart_fxodxh$ = get_onCompositionStart;
  package$dom.set_onCompositionStart_m3bfeh$ = set_onCompositionStart;
  package$dom.get_onCompositionUpdate_fxodxh$ = get_onCompositionUpdate;
  package$dom.set_onCompositionUpdate_m3bfeh$ = set_onCompositionUpdate;
  package$dom.get_onFocus_fxodxh$ = get_onFocus;
  package$dom.set_onFocus_qk3spz$ = set_onFocus;
  package$dom.get_onBlur_fxodxh$ = get_onBlur;
  package$dom.set_onBlur_qk3spz$ = set_onBlur;
  package$dom.get_onChange_fxodxh$ = get_onChange;
  package$dom.set_onChange_3sptad$ = set_onChange;
  package$dom.get_onBeforeInput_fxodxh$ = get_onBeforeInput;
  package$dom.set_onBeforeInput_r90yft$ = set_onBeforeInput;
  package$dom.get_onInput_fxodxh$ = get_onInput;
  package$dom.set_onInput_r90yft$ = set_onInput;
  package$dom.get_onReset_fxodxh$ = get_onReset;
  package$dom.set_onReset_r90yft$ = set_onReset;
  package$dom.get_onSubmit_fxodxh$ = get_onSubmit;
  package$dom.set_onSubmit_r90yft$ = set_onSubmit;
  package$dom.get_onInvalid_fxodxh$ = get_onInvalid;
  package$dom.set_onInvalid_r90yft$ = set_onInvalid;
  package$dom.get_onLoad_fxodxh$ = get_onLoad;
  package$dom.set_onLoad_ys5f1m$ = set_onLoad;
  package$dom.get_onError_fxodxh$ = get_onError;
  package$dom.set_onError_ys5f1m$ = set_onError;
  package$dom.get_onKeyDown_fxodxh$ = get_onKeyDown;
  package$dom.set_onKeyDown_l35c1w$ = set_onKeyDown;
  package$dom.get_onKeyPress_fxodxh$ = get_onKeyPress;
  package$dom.set_onKeyPress_l35c1w$ = set_onKeyPress;
  package$dom.get_onKeyUp_fxodxh$ = get_onKeyUp;
  package$dom.set_onKeyUp_l35c1w$ = set_onKeyUp;
  package$dom.get_onAbort_fxodxh$ = get_onAbort;
  package$dom.set_onAbort_ys5f1m$ = set_onAbort;
  package$dom.get_onCanPlay_fxodxh$ = get_onCanPlay;
  package$dom.set_onCanPlay_ys5f1m$ = set_onCanPlay;
  package$dom.get_onCanPlayThrough_fxodxh$ = get_onCanPlayThrough;
  package$dom.set_onCanPlayThrough_ys5f1m$ = set_onCanPlayThrough;
  package$dom.get_onDurationChange_fxodxh$ = get_onDurationChange;
  package$dom.set_onDurationChange_ys5f1m$ = set_onDurationChange;
  package$dom.get_onEmptied_fxodxh$ = get_onEmptied;
  package$dom.set_onEmptied_ys5f1m$ = set_onEmptied;
  package$dom.get_onEncrypted_fxodxh$ = get_onEncrypted;
  package$dom.set_onEncrypted_ys5f1m$ = set_onEncrypted;
  package$dom.get_onEnded_fxodxh$ = get_onEnded;
  package$dom.set_onEnded_ys5f1m$ = set_onEnded;
  package$dom.get_onLoadedData_fxodxh$ = get_onLoadedData;
  package$dom.set_onLoadedData_ys5f1m$ = set_onLoadedData;
  package$dom.get_onLoadedMetadata_fxodxh$ = get_onLoadedMetadata;
  package$dom.set_onLoadedMetadata_ys5f1m$ = set_onLoadedMetadata;
  package$dom.get_onLoadStart_fxodxh$ = get_onLoadStart;
  package$dom.set_onLoadStart_ys5f1m$ = set_onLoadStart;
  package$dom.get_onPause_fxodxh$ = get_onPause;
  package$dom.set_onPause_ys5f1m$ = set_onPause;
  package$dom.get_onPlay_fxodxh$ = get_onPlay;
  package$dom.set_onPlay_ys5f1m$ = set_onPlay;
  package$dom.get_onPlaying_fxodxh$ = get_onPlaying;
  package$dom.set_onPlaying_ys5f1m$ = set_onPlaying;
  package$dom.get_onProgress_fxodxh$ = get_onProgress;
  package$dom.set_onProgress_ys5f1m$ = set_onProgress;
  package$dom.get_onRateChange_fxodxh$ = get_onRateChange;
  package$dom.set_onRateChange_ys5f1m$ = set_onRateChange;
  package$dom.get_onSeeked_fxodxh$ = get_onSeeked;
  package$dom.set_onSeeked_ys5f1m$ = set_onSeeked;
  package$dom.get_onSeeking_fxodxh$ = get_onSeeking;
  package$dom.set_onSeeking_ys5f1m$ = set_onSeeking;
  package$dom.get_onStalled_fxodxh$ = get_onStalled;
  package$dom.set_onStalled_ys5f1m$ = set_onStalled;
  package$dom.get_onSuspend_fxodxh$ = get_onSuspend;
  package$dom.set_onSuspend_ys5f1m$ = set_onSuspend;
  package$dom.get_onTimeUpdate_fxodxh$ = get_onTimeUpdate;
  package$dom.set_onTimeUpdate_ys5f1m$ = set_onTimeUpdate;
  package$dom.get_onVolumeChange_fxodxh$ = get_onVolumeChange;
  package$dom.set_onVolumeChange_ys5f1m$ = set_onVolumeChange;
  package$dom.get_onWaiting_fxodxh$ = get_onWaiting;
  package$dom.set_onWaiting_ys5f1m$ = set_onWaiting;
  package$dom.get_onAuxClick_fxodxh$ = get_onAuxClick;
  package$dom.set_onAuxClick_1dktpy$ = set_onAuxClick;
  package$dom.get_onClick_fxodxh$ = get_onClick;
  package$dom.set_onClick_1dktpy$ = set_onClick;
  package$dom.get_onContextMenu_fxodxh$ = get_onContextMenu;
  package$dom.set_onContextMenu_1dktpy$ = set_onContextMenu;
  package$dom.get_onDoubleClick_fxodxh$ = get_onDoubleClick;
  package$dom.set_onDoubleClick_1dktpy$ = set_onDoubleClick;
  package$dom.get_onDrag_fxodxh$ = get_onDrag;
  package$dom.set_onDrag_vkvfex$ = set_onDrag;
  package$dom.get_onDragEnd_fxodxh$ = get_onDragEnd;
  package$dom.set_onDragEnd_vkvfex$ = set_onDragEnd;
  package$dom.get_onDragEnter_fxodxh$ = get_onDragEnter;
  package$dom.set_onDragEnter_vkvfex$ = set_onDragEnter;
  package$dom.get_onDragExit_fxodxh$ = get_onDragExit;
  package$dom.set_onDragExit_vkvfex$ = set_onDragExit;
  package$dom.get_onDragLeave_fxodxh$ = get_onDragLeave;
  package$dom.set_onDragLeave_vkvfex$ = set_onDragLeave;
  package$dom.get_onDragOver_fxodxh$ = get_onDragOver;
  package$dom.set_onDragOver_vkvfex$ = set_onDragOver;
  package$dom.get_onDragStart_fxodxh$ = get_onDragStart;
  package$dom.set_onDragStart_vkvfex$ = set_onDragStart;
  package$dom.get_onDrop_fxodxh$ = get_onDrop;
  package$dom.set_onDrop_vkvfex$ = set_onDrop;
  package$dom.get_onMouseDown_fxodxh$ = get_onMouseDown;
  package$dom.set_onMouseDown_1dktpy$ = set_onMouseDown;
  package$dom.get_onMouseEnter_fxodxh$ = get_onMouseEnter;
  package$dom.set_onMouseEnter_1dktpy$ = set_onMouseEnter;
  package$dom.get_onMouseLeave_fxodxh$ = get_onMouseLeave;
  package$dom.set_onMouseLeave_1dktpy$ = set_onMouseLeave;
  package$dom.get_onMouseMove_fxodxh$ = get_onMouseMove;
  package$dom.set_onMouseMove_1dktpy$ = set_onMouseMove;
  package$dom.get_onMouseOut_fxodxh$ = get_onMouseOut;
  package$dom.set_onMouseOut_1dktpy$ = set_onMouseOut;
  package$dom.get_onMouseOver_fxodxh$ = get_onMouseOver;
  package$dom.set_onMouseOver_1dktpy$ = set_onMouseOver;
  package$dom.get_onMouseUp_fxodxh$ = get_onMouseUp;
  package$dom.set_onMouseUp_1dktpy$ = set_onMouseUp;
  package$dom.get_onSelect_fxodxh$ = get_onSelect;
  package$dom.set_onSelect_ys5f1m$ = set_onSelect;
  package$dom.get_onTouchCancel_fxodxh$ = get_onTouchCancel;
  package$dom.set_onTouchCancel_7emks2$ = set_onTouchCancel;
  package$dom.get_onTouchEnd_fxodxh$ = get_onTouchEnd;
  package$dom.set_onTouchEnd_7emks2$ = set_onTouchEnd;
  package$dom.get_onTouchMove_fxodxh$ = get_onTouchMove;
  package$dom.set_onTouchMove_7emks2$ = set_onTouchMove;
  package$dom.get_onTouchStart_fxodxh$ = get_onTouchStart;
  package$dom.set_onTouchStart_7emks2$ = set_onTouchStart;
  package$dom.get_onPointerDown_fxodxh$ = get_onPointerDown;
  package$dom.set_onPointerDown_6q85f8$ = set_onPointerDown;
  package$dom.get_onPointerMove_fxodxh$ = get_onPointerMove;
  package$dom.set_onPointerMove_6q85f8$ = set_onPointerMove;
  package$dom.get_onPointerUp_fxodxh$ = get_onPointerUp;
  package$dom.set_onPointerUp_6q85f8$ = set_onPointerUp;
  package$dom.get_onPointerCancel_fxodxh$ = get_onPointerCancel;
  package$dom.set_onPointerCancel_6q85f8$ = set_onPointerCancel;
  package$dom.get_onPointerEnter_fxodxh$ = get_onPointerEnter;
  package$dom.set_onPointerEnter_6q85f8$ = set_onPointerEnter;
  package$dom.get_onPointerLeave_fxodxh$ = get_onPointerLeave;
  package$dom.set_onPointerLeave_6q85f8$ = set_onPointerLeave;
  package$dom.get_onPointerOver_fxodxh$ = get_onPointerOver;
  package$dom.set_onPointerOver_6q85f8$ = set_onPointerOver;
  package$dom.get_onPointerOut_fxodxh$ = get_onPointerOut;
  package$dom.set_onPointerOut_6q85f8$ = set_onPointerOut;
  package$dom.get_onGotPointerCapture_fxodxh$ = get_onGotPointerCapture;
  package$dom.set_onGotPointerCapture_6q85f8$ = set_onGotPointerCapture;
  package$dom.get_onLostPointerCapture_fxodxh$ = get_onLostPointerCapture;
  package$dom.set_onLostPointerCapture_6q85f8$ = set_onLostPointerCapture;
  package$dom.get_onScroll_fxodxh$ = get_onScroll;
  package$dom.set_onScroll_a5m18r$ = set_onScroll;
  package$dom.get_onWheel_fxodxh$ = get_onWheel;
  package$dom.set_onWheel_r7q2ju$ = set_onWheel;
  package$dom.get_onAnimationStart_fxodxh$ = get_onAnimationStart;
  package$dom.set_onAnimationStart_aaafu5$ = set_onAnimationStart;
  package$dom.get_onAnimationEnd_fxodxh$ = get_onAnimationEnd;
  package$dom.set_onAnimationEnd_aaafu5$ = set_onAnimationEnd;
  package$dom.get_onAnimationIteration_fxodxh$ = get_onAnimationIteration;
  package$dom.set_onAnimationIteration_aaafu5$ = set_onAnimationIteration;
  package$dom.get_onTransitionEnd_fxodxh$ = get_onTransitionEnd;
  package$dom.set_onTransitionEnd_u1kyy2$ = set_onTransitionEnd;
  Object.defineProperty(RDOMBuilder, 'Companion', {
    get: RDOMBuilder$Companion_getInstance
  });
  package$dom.RDOMBuilder = RDOMBuilder;
  $$importsForInline$$['kotlin-react-dom'] = _;
  package$dom.attrs_cftwgj$ = attrs;
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$dom.RDOMBuilderImpl = RDOMBuilderImpl;
  package$dom.setProp_v86kls$ = setProp;
  package$dom.render_2955dm$ = render_0;
  package$dom.renderIntoRoot_elv2ha$ = renderIntoRoot;
  package$dom.hydrate_2955dm$ = hydrate_0;
  package$dom.createPortal_4s0l5f$ = createPortal_0;
  package$dom.fixAttributeName_61zpoe$ = fixAttributeName;
  Object.defineProperty(package$dom, 'StringAttr', {
    get: StringAttr_getInstance
  });
  package$dom.get_key_6s7ubj$ = get_key;
  package$dom.set_key_g0n3bx$ = set_key_0;
  package$dom.get_defaultValue_a2ovwx$ = get_defaultValue;
  package$dom.set_defaultValue_q3v29f$ = set_defaultValue;
  package$dom.get_defaultValue_dtfm6v$ = get_defaultValue_0;
  package$dom.set_defaultValue_5ng1o5$ = set_defaultValue_0;
  package$dom.get_value_dtfm6v$ = get_value;
  package$dom.set_value_5ng1o5$ = set_value;
  package$dom.get_jsStyle_6s7ubj$ = get_jsStyle;
  package$dom.set_jsStyle_uekstc$ = set_jsStyle;
  Object.defineProperty(package$dom, 'jsStyleMarker', {
    get: function () {
      return jsStyleMarker;
    }
  });
  package$dom.jsStyle_ymsho7$ = jsStyle;
  package$dom.tag_usjfi1$ = tag;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$dom.a_nbz07b$ = a;
  package$dom.abbr_2pbh6j$ = abbr;
  package$dom.address_z0z9h0$ = address;
  package$dom.area_88drbb$ = area;
  package$dom.article_oyo50y$ = article;
  package$dom.aside_d4tg9c$ = aside;
  package$dom.audio_26aei6$ = audio;
  package$dom.b_7nhtl2$ = b;
  package$dom.base_1qtasl$ = base;
  package$dom.bdi_e0blcx$ = bdi;
  package$dom.bdo_ydoj6j$ = bdo;
  package$dom.blockquote_244j8j$ = blockquote;
  package$dom.body_qvl2vq$ = body;
  package$dom.br_dl5xac$ = br;
  package$dom.button_ueq2um$ = button;
  package$dom.canvas_xoe246$ = canvas;
  package$dom.canvas_jixbo$ = canvas_0;
  package$dom.caption_ix3blu$ = caption;
  package$dom.cite_gtb7bp$ = cite;
  package$dom.code_e1ernl$ = code;
  package$dom.col_5agiaw$ = col;
  package$dom.colgroup_efezmb$ = colgroup;
  package$dom.datalist_bhll8k$ = datalist;
  package$dom.dd_7bhhcc$ = dd;
  package$dom.del_lx3a6b$ = del;
  package$dom.details_dx18be$ = details;
  package$dom.dfn_gfa744$ = dfn;
  package$dom.dialog_r2vd0$ = dialog;
  package$dom.div_gtrzbd$ = div;
  package$dom.dl_asxds4$ = dl;
  package$dom.dt_eada7w$ = dt;
  package$dom.em_oqozj8$ = em;
  package$dom.embed_n808k1$ = embed;
  package$dom.fieldset_hp7o$ = fieldset;
  package$dom.figcaption_m3xu5m$ = figcaption;
  package$dom.figure_1mq3ag$ = figure;
  package$dom.footer_xcq26p$ = footer;
  package$dom.form_7ftnwq$ = form;
  package$dom.h1_quudml$ = h1;
  package$dom.h2_zaswbi$ = h2;
  package$dom.h3_racmyp$ = h3;
  package$dom.h4_iue49s$ = h4;
  package$dom.h5_aeflkv$ = h5;
  package$dom.h6_1yh2vy$ = h6;
  package$dom.head_elsczb$ = head;
  package$dom.header_xi6ch$ = header;
  package$dom.hr_ld1ake$ = hr;
  package$dom.html_a3w7j2$ = html;
  package$dom.i_jkw8pr$ = i;
  package$dom.iframe_ft8ple$ = iframe;
  package$dom.iframe_i8zf9o$ = iframe_0;
  package$dom.img_vso3mj$ = img;
  package$dom.input_etd37n$ = input;
  package$dom.ins_x2jgqu$ = ins;
  package$dom.kbd_547kbf$ = kbd;
  package$dom.label_thtid0$ = label;
  package$dom.legend_jb5h3z$ = legend;
  package$dom.li_239rhr$ = li;
  package$dom.link_28p9e6$ = link;
  package$dom.main_szkgy5$ = main;
  package$dom.map_5olbsf$ = map;
  package$dom.mark_fbhysh$ = mark;
  package$dom.math_g9a7ss$ = math;
  package$dom.meta_lff4tg$ = meta;
  package$dom.meter_pg8oht$ = meter;
  package$dom.nav_5mbwij$ = nav;
  package$dom.noscript_3p4atc$ = noscript;
  package$dom.objectTag_hy8adv$ = objectTag;
  package$dom.ol_r4jh81$ = ol;
  package$dom.optgroup_q968rn$ = optgroup;
  package$dom.option_xoe246$ = option;
  package$dom.option_10ahkn$ = option_0;
  package$dom.output_6fkigb$ = output;
  package$dom.p_vianug$ = p;
  package$dom.param_r0oori$ = param;
  package$dom.picture_2zheom$ = picture;
  package$dom.pre_bsqswr$ = pre;
  package$dom.progress_qram69$ = progress;
  package$dom.q_n2c55j$ = q;
  package$dom.rp_68stce$ = rp;
  package$dom.rt_rj19fa$ = rt;
  package$dom.ruby_w5f9pu$ = ruby;
  package$dom.samp_uvv9ff$ = samp;
  package$dom.script_4uv0f2$ = script;
  package$dom.section_7ougmb$ = section;
  package$dom.select_iug7io$ = select;
  package$dom.small_c9m43j$ = small;
  package$dom.source_ly1yj5$ = source;
  package$dom.span_t2ee0y$ = span;
  package$dom.strong_oovi1h$ = strong;
  package$dom.style_xoe246$ = style;
  package$dom.style_kht6w9$ = style_0;
  package$dom.sub_v7eync$ = sub;
  package$dom.sup_fyw92e$ = sup;
  package$dom.svg_xoe246$ = svg;
  package$dom.svg_bdchms$ = svg_0;
  package$dom.table_lwybxi$ = table;
  package$dom.tbody_tx0lke$ = tbody;
  package$dom.td_a9j6l8$ = td;
  package$dom.textarea_ctzq07$ = textarea;
  package$dom.textarea_4u31cv$ = textarea_0;
  package$dom.tfoot_agonsq$ = tfoot;
  package$dom.th_bo9ux3$ = th;
  package$dom.thead_jad978$ = thead;
  package$dom.time_m4er8h$ = time;
  package$dom.title_hw0qe1$ = title;
  package$dom.title_cp8zsd$ = title_0;
  package$dom.tr_y4c0um$ = tr;
  package$dom.ul_yweui3$ = ul;
  package$dom.varTag_wqfjdr$ = varTag;
  package$dom.video_4xrr2l$ = video;
  var package$server = package$dom.server || (package$dom.server = {});
  package$server.renderToString_zepujl$ = renderToString;
  package$server.renderToStaticMarkup_zepujl$ = renderToStaticMarkup;
  RDOMBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RDOMBuilder.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RDOMBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RDOMBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RDOMBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RDOMBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RDOMBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RDOMBuilder.prototype.renderEach_ezdo97$ = RBuilder.prototype.renderEach_ezdo97$;
  RDOMBuilder.prototype.renderEachIndexed_cfwqen$ = RBuilder.prototype.renderEachIndexed_cfwqen$;
  RDOMBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilder.prototype.withKey_pspxar$ = RBuilder.prototype.withKey_pspxar$;
  RDOMBuilder.prototype.withKey_s5hl0b$ = RBuilder.prototype.withKey_s5hl0b$;
  RDOMBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.unaryPlus_lvwjq6$ = Unsafe.prototype.unaryPlus_lvwjq6$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_3p81yu$ = Unsafe.prototype.raw_3p81yu$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_61zpoe$ = Unsafe.prototype.raw_61zpoe$;
  RDOMBuilderImpl$consumer$ObjectLiteral$onTagContentUnsafe$ObjectLiteral.prototype.raw_ws8or7$ = Unsafe.prototype.raw_ws8or7$;
  RDOMBuilderImpl$consumer$ObjectLiteral.prototype.onTagError_cjwpn3$ = TagConsumer.prototype.onTagError_cjwpn3$;
  RDOMBuilderImpl.prototype.get_g0n3bx$ = RDOMBuilder.prototype.get_g0n3bx$;
  RDOMBuilderImpl.prototype.set_hpg2xa$ = RDOMBuilder.prototype.set_hpg2xa$;
  RDOMBuilderImpl.prototype.get_defaultChecked_a2ovwx$ = RDOMBuilder.prototype.get_defaultChecked_a2ovwx$;
  RDOMBuilderImpl.prototype.set_defaultChecked_47da7g$ = RDOMBuilder.prototype.set_defaultChecked_47da7g$;
  RDOMBuilderImpl.prototype.get_values_sktobr$ = RDOMBuilder.prototype.get_values_sktobr$;
  RDOMBuilderImpl.prototype.set_values_d8zj82$ = RDOMBuilder.prototype.set_values_d8zj82$;
  RDOMBuilderImpl.prototype.get_value_sktobr$ = RDOMBuilder.prototype.get_value_sktobr$;
  RDOMBuilderImpl.prototype.set_value_g9clh3$ = RDOMBuilder.prototype.set_value_g9clh3$;
  Object.defineProperty(RDOMBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'key'));
  Object.defineProperty(RDOMBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RDOMBuilder.prototype, 'ref'));
  RDOMBuilderImpl.prototype.create = RDOMBuilder.prototype.create;
  RDOMBuilderImpl.prototype.child_up9nw1$ = RDOMBuilder.prototype.child_up9nw1$;
  RDOMBuilderImpl.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RDOMBuilderImpl.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RDOMBuilderImpl.prototype.child_1mw94g$$default = RDOMBuilder.prototype.child_1mw94g$$default;
  RDOMBuilderImpl.prototype.child_30b5ua$ = RDOMBuilder.prototype.child_30b5ua$;
  RDOMBuilderImpl.prototype.children_w8hwhj$ = RDOMBuilder.prototype.children_w8hwhj$;
  RDOMBuilderImpl.prototype.invoke_c0v1gl$ = RDOMBuilder.prototype.invoke_c0v1gl$;
  RDOMBuilderImpl.prototype.invoke_qk0v40$ = RDOMBuilder.prototype.invoke_qk0v40$;
  RDOMBuilderImpl.prototype.invoke_snhqu5$ = RDOMBuilder.prototype.invoke_snhqu5$;
  RDOMBuilderImpl.prototype.renderEach_ezdo97$ = RDOMBuilder.prototype.renderEach_ezdo97$;
  RDOMBuilderImpl.prototype.renderEachIndexed_cfwqen$ = RDOMBuilder.prototype.renderEachIndexed_cfwqen$;
  RDOMBuilderImpl.prototype.unaryPlus_pdl1vz$ = RDOMBuilder.prototype.unaryPlus_pdl1vz$;
  RDOMBuilderImpl.prototype.unaryPlus_m8hz4t$ = RDOMBuilder.prototype.unaryPlus_m8hz4t$;
  RDOMBuilderImpl.prototype.withKey_pspxar$ = RDOMBuilder.prototype.withKey_pspxar$;
  RDOMBuilderImpl.prototype.withKey_s5hl0b$ = RDOMBuilder.prototype.withKey_s5hl0b$;
  RDOMBuilderImpl.prototype.child_1mw94g$ = RDOMBuilder.prototype.child_1mw94g$;
  events = listOf(['onCopy', 'onCut', 'onPaste', 'onCompositionEnd', 'onCompositionStart', 'onCompositionUpdate', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onFocus', 'onBlur', 'onChange', 'onInput', 'onSubmit', 'onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onSelect', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onScroll', 'onWheel', 'onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting', 'onLoad', 'onError', 'onAnimationStart', 'onAnimationEnd', 'onAnimationIteration', 'onTransitionEnd', 'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap']);
  var $receiver = events;
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.toLowerCase(), element);
  }
  var $receiver_0 = toMutableMap(destination);
  $receiver_0.put_xwzc9p$('class', 'className');
  $receiver_0.put_xwzc9p$('ondblclick', 'onDoubleClick');
  attrsMap = $receiver_0;
  key = StringAttr_getInstance();
  defaultValue = StringAttr_getInstance();
  defaultValue_0 = StringAttr_getInstance();
  value = StringAttr_getInstance();
  jsStyleMarker = '$style$';
  Kotlin.defineModule('kotlin-react-dom', _);
  return _;
}));
