function require( path ){ return $node[ path ] };
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalThis = globalThis || global || self || this
var $ = ( typeof module === 'object' ) ? Object.setPrototypeOf( module['export'+'s'] , globalThis ) : globalThis
$.$$ = $
$.$mol = $  // deprecated

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../mol/" ) ] }; 
;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Error.stackTraceLimit = Infinity;
module.exports;
//mol.js.map
;

$node[ "../mol/mol" ] = $node[ "../mol/mol.js" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    let $$;
    (function ($$_1) {
    })($$ = $.$$ || ($.$$ = {}));
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//ambient.js.map
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//delegate.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $.$mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//owning.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//fail.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//hidden.js.map
;
"use strict";
//writable.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    class $mol_object2 {
        constructor(init) {
            this[_a] = null;
            if (init)
                init(this);
        }
        get $() {
            if (this[$.$mol_ambient_ref])
                return this[$.$mol_ambient_ref];
            const owner = $.$mol_owning_get(this);
            return this[$.$mol_ambient_ref] = (owner === null || owner === void 0 ? void 0 : owner.$) || $mol_object2.$;
        }
        set $(next) {
            if (this[$.$mol_ambient_ref])
                $.$mol_fail_hidden(new Error('Context already defined'));
            this[$.$mol_ambient_ref] = next;
        }
        static create(init) {
            return new this(init);
        }
        static toString() { return this[Symbol.toStringTag] || this.name; }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    _a = $.$mol_ambient_ref;
    $mol_object2.$ = $;
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//object2.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//tick.js.map
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//context.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//context.web.js.map
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $.$mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $.$mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//attach.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//decor.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $.$mol_decor {
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//unit.js.map
;
"use strict";
var $;
(function ($) {
    const { per } = $.$mol_style_unit;
    class $mol_style_func extends $.$mol_decor {
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//func.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/theme/theme.css", "[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n[mol_theme=\"$mol_theme_light\"] , :root {\n\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t--mol_theme_text: hsl( 0 , 0% , 0% );\n\t--mol_theme_control: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t--mol_theme_focus: hsl( 290 , 100% , 40% );\n\t--mol_theme_field: white;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t--mol_theme_hover: #333;\n\t--mol_theme_current: hsl( 210 , 100% , 30% );\n\t--mol_theme_text: hsl( 0 , 0% , 80% );\n\t--mol_theme_control: hsla( 210 , 60% , 70% , 1 );\n\t--mol_theme_shade: rgba( 255 , 255 , 255 , .5 );\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_focus: hsl( 60 , 100% , 70% );\n\t--mol_theme_field: black;\n\t--mol_theme_image: invert(1) hue-rotate(180deg);\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_back: hsla( 210 , 60% , 35% , 1 );\n\t--mol_theme_hover: hsla( 210 , 60% , 20% , 1 );\n\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: white;\n\t--mol_theme_control: white;\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: hsl( 15 , 60% , 50% );\n\t--mol_theme_hover: hsl( 15 , 60% , 40% );\n\t--mol_theme_text: white;\n\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t--mol_theme_control: white;\n\t--mol_theme_focus: black;\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n\t--mol_theme_text: white;\n}\n");
})($ || ($ = {}));
//theme.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        current: vary('--mol_theme_current'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//theme.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/skin/skin.css", ":root {\n\t--mol_skin_font: 1rem/1.5rem sans-serif;\n\t/* --mol_skin_font_monospace: Monaco, monospace; */\n\t--mol_skin_font_monospace: monospace;\n}\n\n/* Deprecated, use mol_theme instead */\n:root {\n\n\t--mol_skin_outline: 0 0 0 1px var(--mol_theme_line);\n\t\n\t--mol_skin_base: #3a8ccb;\n\t--mol_skin_base_text: white;\n\t\n\t--mol_skin_current: var(--mol_skin_base);\n\t--mol_skin_current_text: white;\n\t--mol_skin_current_line: #1471b8;\n\t\n\t--mol_skin_button: var(--mol_skin_card);\n\t--mol_skin_hover: rgba( 0 , 0 , 0 , .05 );\n\t\n\t--mol_skin_round: 0px;\n\t\n\t--mol_skin_focus_line: rgba( 0 , 0 , 0 , .2 );\n\t--mol_skin_focus_outline: 0 0 0 1px var(--mol_skin_focus_line);\n\t\n\t--mol_skin_float: var(--mol_skin_focus_outline);\n\n\t--mol_skin_passive: #eee;\n\t--mol_skin_passive_text: rgba( 0 , 0 , 0 , .5 );\n\t\n\t--mol_skin_light: #fcfcfc;\n\t--mol_skin_light_line: rgba( 230 , 230 , 230 , .75 );\n\t--mol_skin_light_text: rgba( 0 , 0 , 0 , .9 );\n\t--mol_skin_light_hover: #f7f7f7;\n\t--mol_skin_light_outline: 0 0 0 1px var(--mol_theme_line);\n\n\t--mol_skin_card: var(--mol_theme_back);\n\t--mol_skin_card_text: var(--mol_theme_text);\n\t\n\t--mol_skin_accent: #dd0e3e;\n\t--mol_skin_accent_text: white;\n\t--mol_skin_accent_hover: #c50d37;\n\n\t--mol_skin_warn: rgba( 255 , 50 , 50 , 0.75 );\n\t--mol_skin_warn_text: white;\n\t--mol_skin_warn_hover: color( var(--mol_skin_warn) lightness(-5%) );\n\n\t--mol_skin_good: #96DAA9;\n\t--mol_skin_good_text: black;\n\n\t--mol_skin_bad: #CC5252;\n\t--mol_skin_bad_text: white;\n}\n");
})($ || ($ = {}));
//skin.css.js.map
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $_1.$mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//object.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//log3.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_log3_web_make(level, color) {
        return function $mol_log3_logger(event) {
            const pending = this.$mol_log3_stack.pop();
            if (pending)
                pending();
            let tpl = '%c';
            const chunks = Object.values(event);
            for (let i = 0; i < chunks.length; ++i) {
                tpl += (typeof chunks[i] === 'string') ? ' ⦙ %s' : ' ⦙ %o';
            }
            const style = `color:${color};font-weight:bolder`;
            this.console[level](tpl, style, ...chunks);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_web_make = $mol_log3_web_make;
    $.$mol_log3_come = $mol_log3_web_make('info', 'royalblue');
    $.$mol_log3_done = $mol_log3_web_make('info', 'forestgreen');
    $.$mol_log3_fail = $mol_log3_web_make('error', 'orangered');
    $.$mol_log3_warn = $mol_log3_web_make('warn', 'goldenrod');
    $.$mol_log3_rise = $mol_log3_web_make('log', 'magenta');
    $.$mol_log3_area = $mol_log3_web_make('group', 'cyan');
})($ || ($ = {}));
//log3.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $.$mol_object2 {
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//wrapper.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $.$mol_object2 {
        constructor(task) {
            super();
            this.task = task;
            this.cancelled = false;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => requestAnimationFrame(() => {
                this._promise = null;
                done();
            }));
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $mol_after_frame._promise = null;
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//frame.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_compare_any(a, b) {
        if (a === b)
            return true;
        if (!Number.isNaN(a))
            return false;
        if (!Number.isNaN(b))
            return false;
        return true;
    }
    $.$mol_compare_any = $mol_compare_any;
})($ || ($ = {}));
//any.js.map
;
"use strict";
var $;
(function ($) {
    const cache = new WeakMap();
    $.$mol_conform_stack = [];
    function $mol_conform(target, source) {
        if ($.$mol_compare_any(target, source))
            return source;
        if (!target || typeof target !== 'object')
            return target;
        if (!source || typeof source !== 'object')
            return target;
        if (target instanceof Error)
            return target;
        if (source instanceof Error)
            return target;
        if (target['constructor'] !== source['constructor'])
            return target;
        if (cache.get(target))
            return target;
        cache.set(target, true);
        const conform = $.$mol_conform_handlers.get(target['constructor']);
        if (!conform)
            return target;
        if ($.$mol_conform_stack.indexOf(target) !== -1)
            return target;
        $.$mol_conform_stack.push(target);
        try {
            return conform(target, source);
        }
        finally {
            $.$mol_conform_stack.pop();
        }
    }
    $.$mol_conform = $mol_conform;
    $.$mol_conform_handlers = new WeakMap();
    function $mol_conform_handler(cl, handler) {
        $.$mol_conform_handlers.set(cl, handler);
    }
    $.$mol_conform_handler = $mol_conform_handler;
    function $mol_conform_array(target, source) {
        if (source.length !== target.length)
            return target;
        for (let i = 0; i < target.length; ++i) {
            if (!$.$mol_compare_any(source[i], target[i]))
                return target;
        }
        return source;
    }
    $.$mol_conform_array = $mol_conform_array;
    $mol_conform_handler(Array, $mol_conform_array);
    $mol_conform_handler(Uint8Array, $mol_conform_array);
    $mol_conform_handler(Uint16Array, $mol_conform_array);
    $mol_conform_handler(Uint32Array, $mol_conform_array);
    $mol_conform_handler(Object, (target, source) => {
        let count = 0;
        let equal = true;
        for (let key in target) {
            const conformed = $mol_conform(target[key], source[key]);
            if (conformed !== target[key]) {
                try {
                    target[key] = conformed;
                }
                catch (error) { }
                if (!$.$mol_compare_any(conformed, target[key]))
                    equal = false;
            }
            if (!$.$mol_compare_any(conformed, source[key]))
                equal = false;
            ++count;
        }
        for (let key in source)
            if (--count < 0)
                break;
        return (equal && count === 0) ? source : target;
    });
    $mol_conform_handler(Date, (target, source) => {
        if (target.getTime() === source.getTime())
            return source;
        return target;
    });
    $mol_conform_handler(RegExp, (target, source) => {
        if (target.toString() === source.toString())
            return source;
        return target;
    });
})($ || ($ = {}));
//conform.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_array_trim(array) {
        let last = array.length;
        while (last > 0) {
            --last;
            const value = array[last];
            if (value === undefined)
                array.pop();
            else
                break;
        }
        return array;
    }
    $.$mol_array_trim = $mol_array_trim;
})($ || ($ = {}));
//trim.js.map
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', Object.assign({ 'vertical-align': '8%' }, style), ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//format.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_fiber_defer(calculate) {
        const fiber = new $mol_fiber;
        fiber.calculate = calculate;
        fiber[Symbol.toStringTag] = calculate.name;
        fiber.schedule();
        return fiber;
    }
    $.$mol_fiber_defer = $mol_fiber_defer;
    function $mol_fiber_func(calculate) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_func',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.func instead',
        });
        return $mol_fiber.func(calculate);
    }
    $.$mol_fiber_func = $mol_fiber_func;
    function $mol_fiber_root(calculate) {
        const wrapper = function (...args) {
            const fiber = new $mol_fiber();
            fiber.calculate = calculate.bind(this, ...args);
            fiber[Symbol.toStringTag] = wrapper[Symbol.toStringTag];
            return fiber.wake();
        };
        wrapper[Symbol.toStringTag] = calculate.name;
        return wrapper;
    }
    $.$mol_fiber_root = $mol_fiber_root;
    function $mol_fiber_method(obj, name, descr) {
        $.$mol_ambient({}).$mol_log3_warn({
            place: '$mol_fiber_method',
            message: 'Deprecated',
            hint: 'Use $mol_fiber.method instead',
        });
        return $mol_fiber.method(obj, name, descr);
    }
    $.$mol_fiber_method = $mol_fiber_method;
    function $mol_fiber_async(task) {
        return (...args) => new Promise($mol_fiber_root((done, fail) => {
            try {
                done(task(...args));
            }
            catch (error) {
                if ('then' in error)
                    return $.$mol_fail_hidden(error);
                fail(error);
            }
        }));
    }
    $.$mol_fiber_async = $mol_fiber_async;
    function $mol_fiber_sync(request) {
        return function $mol_fiber_sync_wrapper(...args) {
            const slave = $mol_fiber.current;
            let master = slave && slave.master;
            if (!master || master.constructor !== $mol_fiber) {
                master = new $mol_fiber;
                master.cursor = -3;
                master.error = request.call(this, ...args).then((next) => master.push(next), (error) => master.fail(error));
                const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                master[Symbol.toStringTag] = prefix + (request.name || $mol_fiber_sync.name);
            }
            return master.get();
        };
    }
    $.$mol_fiber_sync = $mol_fiber_sync;
    async function $mol_fiber_warp() {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            while ($mol_fiber.queue.length)
                await $mol_fiber.tick();
            return Promise.resolve();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_warp = $mol_fiber_warp;
    function $mol_fiber_fence(func) {
        const prev = $mol_fiber.current;
        try {
            $mol_fiber.current = null;
            return func();
        }
        finally {
            $mol_fiber.current = prev;
        }
    }
    $.$mol_fiber_fence = $mol_fiber_fence;
    function $mol_fiber_unlimit(task) {
        const deadline = $mol_fiber.deadline;
        try {
            $mol_fiber.deadline = Number.POSITIVE_INFINITY;
            return task();
        }
        finally {
            $mol_fiber.deadline = deadline;
        }
    }
    $.$mol_fiber_unlimit = $mol_fiber_unlimit;
    class $mol_fiber_solid extends $.$mol_wrapper {
        static func(task) {
            function wrapped(...args) {
                const deadline = $mol_fiber.deadline;
                try {
                    $mol_fiber.deadline = Number.POSITIVE_INFINITY;
                    return task.call(this, ...args);
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail(new Error('Solid fiber can not be suspended.'));
                    return $.$mol_fail_hidden(error);
                }
                finally {
                    $mol_fiber.deadline = deadline;
                }
            }
            return $mol_fiber.func(wrapped);
        }
    }
    $.$mol_fiber_solid = $mol_fiber_solid;
    class $mol_fiber extends $.$mol_wrapper {
        constructor() {
            super(...arguments);
            this.cursor = 0;
            this.masters = [];
            this._value = undefined;
            this._error = null;
        }
        static wrap(task) {
            return function $mol_fiber_wrapper(...args) {
                const slave = $mol_fiber.current;
                let master = slave && slave.master;
                if (!master || master.constructor !== $mol_fiber) {
                    master = new $mol_fiber;
                    master.calculate = task.bind(this, ...args);
                    const prefix = slave ? `${slave}/${slave.cursor / 2}:` : '/';
                    master[Symbol.toStringTag] = `${prefix}${task.name}`;
                }
                return master.get();
            };
        }
        static async tick() {
            while ($mol_fiber.queue.length > 0) {
                const now = Date.now();
                if (now >= $mol_fiber.deadline) {
                    $mol_fiber.schedule();
                    $mol_fiber.liveline = now;
                    return;
                }
                const task = $mol_fiber.queue.shift();
                await task();
            }
        }
        static schedule() {
            if (!$mol_fiber.scheduled) {
                $mol_fiber.scheduled = new $.$mol_after_frame(async () => {
                    const now = Date.now();
                    let quant = $mol_fiber.quant;
                    if ($mol_fiber.liveline) {
                        quant = Math.max(quant, Math.floor((now - $mol_fiber.liveline) / 2));
                        $mol_fiber.liveline = 0;
                    }
                    $mol_fiber.deadline = now + quant;
                    $mol_fiber.scheduled = null;
                    await $mol_fiber.tick();
                });
            }
            const promise = new this.$.Promise(done => this.queue.push(() => (done(), promise)));
            return promise;
        }
        get value() { return this._value; }
        set value(next) {
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            this._error = next;
        }
        schedule() {
            $mol_fiber.schedule().then(() => this.wake());
        }
        wake() {
            const unscoupe = this.$.$mol_log3_area_lazy({
                place: this,
                message: 'Wake'
            });
            try {
                if (this.cursor > -2)
                    return this.get();
            }
            catch (error) {
                if ('then' in error)
                    return;
                $.$mol_fail_hidden(error);
            }
            finally {
                unscoupe();
            }
        }
        push(value) {
            value = this.$.$mol_conform(value, this.value);
            if (this.error !== null || !Object.is(this.value, value)) {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Changed',
                        next: value,
                        value: this.value,
                        error: this.error,
                    });
                this.obsolete_slaves();
                this.forget();
            }
            else {
                if ($mol_fiber.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Same value',
                        value,
                    });
            }
            this.error = null;
            this.value = value;
            this.complete();
            return value;
        }
        fail(error) {
            this.complete();
            if ($mol_fiber.logs)
                this.$.$mol_log3_fail({
                    place: this,
                    message: error.message,
                });
            this.error = error;
            this.obsolete_slaves();
            return error;
        }
        wait(promise) {
            this.error = promise;
            if ($mol_fiber.logs)
                this.$.$mol_log3_warn({
                    place: this,
                    message: `Wait`,
                    hint: `Don't panic, it's normal`,
                    promise,
                });
            this.cursor = 0;
            return promise;
        }
        complete() {
            if (this.cursor <= -2)
                return;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
            this.cursor = -2;
        }
        complete_master(master_index) {
            this.disobey(master_index);
        }
        pull() {
            if ($mol_fiber.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Pull',
                });
            this.push(this.calculate());
        }
        update() {
            const slave = $mol_fiber.current;
            try {
                $mol_fiber.current = this;
                this.pull();
            }
            catch (error) {
                if (Object(error) !== error)
                    error = new Error(error);
                if ('then' in error) {
                    if (!slave) {
                        const listener = () => this.wake();
                        error = error.then(listener, listener);
                    }
                    this.wait(error);
                }
                else {
                    this.fail(error);
                }
            }
            finally {
                $mol_fiber.current = slave;
            }
        }
        get() {
            if (this.cursor > 0) {
                this.$.$mol_fail(new Error(`Cyclic dependency at ${this}`));
            }
            const slave = $mol_fiber.current;
            if (slave)
                slave.master = this;
            if (this.cursor > -2)
                this.update();
            if (this.error !== null)
                return this.$.$mol_fail_hidden(this.error);
            return this.value;
        }
        limit() {
            if (!$mol_fiber.deadline)
                return;
            if (!$mol_fiber.current)
                return;
            if (Date.now() < $mol_fiber.deadline)
                return;
            this.$.$mol_fail_hidden($mol_fiber.schedule());
        }
        get master() {
            return this.masters[this.cursor];
        }
        set master(next) {
            if (this.cursor === -1)
                return;
            const cursor = this.cursor;
            const prev = this.masters[this.cursor];
            if (prev !== next) {
                if (prev)
                    this.rescue(prev, cursor);
                this.masters[cursor] = next;
                this.masters[cursor + 1] = this.obey(next, cursor);
            }
            this.cursor = cursor + 2;
        }
        rescue(master, master_index) { }
        obey(master, master_index) { return -1; }
        lead(slave, master_index) { return -1; }
        dislead(slave_index) {
            this.destructor();
        }
        disobey(master_index) {
            const master = this.masters[master_index];
            if (!master)
                return;
            master.dislead(this.masters[master_index + 1]);
            this.masters[master_index] = undefined;
            this.masters[master_index + 1] = undefined;
            this.$.$mol_array_trim(this.masters);
        }
        obsolete_slaves() { }
        obsolete(master_index) { }
        forget() {
            this.value = undefined;
        }
        abort() {
            this.forget();
            return true;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_fiber.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Destructed',
                });
            this.complete();
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_native(this);
        }
    }
    $mol_fiber.logs = false;
    $mol_fiber.quant = 16;
    $mol_fiber.deadline = 0;
    $mol_fiber.liveline = 0;
    $mol_fiber.current = null;
    $mol_fiber.scheduled = null;
    $mol_fiber.queue = [];
    $.$mol_fiber = $mol_fiber;
})($ || ($ = {}));
//fiber.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_value(task, next) {
        const cached = $mol_atom2.cached;
        try {
            $mol_atom2.cached = true;
            $mol_atom2.cached_next = next;
            return task();
        }
        finally {
            $mol_atom2.cached = cached;
        }
    }
    $.$mol_atom2_value = $mol_atom2_value;
    class $mol_atom2 extends $.$mol_fiber {
        constructor() {
            super(...arguments);
            this.slaves = [];
        }
        static get current() {
            const atom = $.$mol_fiber.current;
            if (atom instanceof $mol_atom2)
                return atom;
            return null;
        }
        static reap(atom) {
            this.reap_queue.push(atom);
            if (this.reap_task)
                return;
            this.reap_task = $.$mol_fiber_defer(() => {
                this.reap_task = null;
                while (true) {
                    const atom = this.reap_queue.pop();
                    if (!atom)
                        break;
                    if (!atom.alone)
                        continue;
                    atom.destructor();
                }
            });
        }
        rescue(master, cursor) {
            if (!(master instanceof $mol_atom2))
                return;
            const master_index = this.masters.length;
            const slave_index = this.masters[cursor + 1] + 1;
            master.slaves[slave_index] = master_index;
            this.masters.push(master, this.masters[cursor + 1]);
        }
        subscribe(promise) {
            const obsolete = () => this.obsolete();
            return promise.then(obsolete, obsolete);
        }
        get() {
            if ($mol_atom2.cached) {
                if ($mol_atom2.cached_next !== undefined) {
                    this.push($mol_atom2.cached_next);
                    $mol_atom2.cached_next = undefined;
                }
                return this.value;
            }
            const value = super.get();
            if (value === undefined)
                $.$mol_fail(new Error(`Not defined: ${this}`));
            return value;
        }
        pull() {
            if (this.cursor === 0)
                return super.pull();
            if ($mol_atom2.logs)
                this.$.$mol_log3_come({
                    place: this,
                    message: 'Check doubt masters',
                });
            const masters = this.masters;
            for (let index = 0; index < masters.length; index += 2) {
                const master = masters[index];
                if (!master)
                    continue;
                try {
                    master.get();
                }
                catch (error) {
                    if ('then' in error)
                        $.$mol_fail_hidden(error);
                    this.cursor = 0;
                }
                if (this.cursor !== 0)
                    continue;
                if ($mol_atom2.logs)
                    this.$.$mol_log3_done({
                        place: this,
                        message: 'Obsoleted while checking',
                    });
                return super.pull();
            }
            if ($mol_atom2.logs)
                this.$.$mol_log3_done({
                    place: this,
                    message: 'Masters not changed',
                });
            this.cursor = -2;
        }
        get value() { return this._value; }
        set value(next) {
            const prev = this._value;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                try {
                    next[Symbol.toStringTag] = this[Symbol.toStringTag];
                }
                catch (_a) { }
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._value = next;
        }
        get error() { return this._error; }
        set error(next) {
            const prev = this._error;
            if (prev && this.$.$mol_owning_check(this, prev))
                prev.destructor();
            if (next && this.$.$mol_owning_catch(this, next)) {
                next[Symbol.toStringTag] = this[Symbol.toStringTag];
                next[$.$mol_object_field] = this[$.$mol_object_field];
            }
            this._error = next;
        }
        put(next) {
            this.cursor = this.masters.length;
            next = this.push(next);
            this.cursor = -3;
            return next;
        }
        complete_master(master_index) {
            if (this.masters[master_index] instanceof $mol_atom2) {
                if (master_index >= this.cursor)
                    this.disobey(master_index);
            }
            else {
                this.disobey(master_index);
            }
        }
        obey(master, master_index) {
            return master.lead(this, master_index);
        }
        lead(slave, master_index) {
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Leads',
                    slave,
                });
            const slave_index = this.slaves.length;
            this.slaves[slave_index] = slave;
            this.slaves[slave_index + 1] = master_index;
            return slave_index;
        }
        dislead(slave_index) {
            if (slave_index < 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Disleads',
                    slave: this.slaves[slave_index],
                });
            this.slaves[slave_index] = undefined;
            this.slaves[slave_index + 1] = undefined;
            $.$mol_array_trim(this.slaves);
            if (this.cursor > -3 && this.alone)
                $mol_atom2.reap(this);
        }
        obsolete(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Obsoleted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor === 0)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Obsoleted',
                });
            if (this.cursor !== -1)
                this.doubt_slaves();
            this.cursor = 0;
        }
        doubt(master_index = -1) {
            if (this.cursor > 0) {
                if (master_index >= this.cursor - 2)
                    return;
                const path = [];
                let current = this;
                collect: while (current) {
                    path.push(current);
                    current = current.masters[current.cursor - 2];
                }
                this.$.$mol_fail(new Error(`Doubted while calculation \n\n${path.join('\n')}\n`));
            }
            if (this.cursor >= -1)
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Doubted',
                });
            this.cursor = -1;
            this.doubt_slaves();
        }
        obsolete_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.obsolete(this.slaves[index + 1]);
            }
        }
        doubt_slaves() {
            for (let index = 0; index < this.slaves.length; index += 2) {
                const slave = this.slaves[index];
                if (slave)
                    slave.doubt(this.slaves[index + 1]);
            }
        }
        get fresh() {
            return () => {
                if (this.cursor !== -2)
                    return;
                this.cursor = 0;
                $.$mol_fiber_solid.run(() => this.update());
            };
        }
        get alone() {
            return this.slaves.length === 0;
        }
        get derived() {
            for (let index = 0; index < this.masters.length; index += 2) {
                if (this.masters[index])
                    return true;
            }
            return false;
        }
        destructor() {
            if (!this.abort())
                return;
            if ($mol_atom2.logs)
                this.$.$mol_log3_rise({
                    place: this,
                    message: 'Destructed'
                });
            this.cursor = -3;
            for (let index = 0; index < this.masters.length; index += 2) {
                this.complete_master(index);
            }
        }
    }
    $mol_atom2.logs = false;
    $mol_atom2.cached = false;
    $mol_atom2.cached_next = undefined;
    $mol_atom2.reap_task = null;
    $mol_atom2.reap_queue = [];
    $.$mol_atom2 = $mol_atom2;
})($ || ($ = {}));
//atom2.js.map
;
"use strict";
//param.js.map
;
"use strict";
//result.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_mem_force extends Object {
        constructor() {
            super();
            this.$mol_mem_force = true;
        }
        static toString() { return this.name; }
    }
    $mol_mem_force.$mol_mem_force = true;
    $.$mol_mem_force = $mol_mem_force;
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    $.$mol_mem_force_cache = $mol_mem_force_cache;
    class $mol_mem_force_update extends $mol_mem_force {
    }
    $.$mol_mem_force_update = $mol_mem_force_update;
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
    $.$mol_mem_force_fail = $mol_mem_force_fail;
})($ || ($ = {}));
//force.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $.$mol_atom2_value;
    function $mol_mem_persist() {
        const atom = $.$mol_atom2.current;
        if (!atom)
            return;
        if (atom.hasOwnProperty('destructor'))
            return;
        atom.destructor = () => { };
    }
    $.$mol_mem_persist = $mol_mem_persist;
    function $mol_mem(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const orig = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host) => {
            let cache = store.get(host);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2.calculate = orig.bind(host);
            cache2[Symbol.toStringTag] = `${host}.${name}()`;
            cache2.abort = () => {
                store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            store.set(host, cache2);
            return cache2;
        };
        function value(next, force) {
            if (next === undefined) {
                const cache = get_cache(this);
                if (force === $.$mol_mem_force_cache)
                    return cache.obsolete(Number.NaN);
                if ($.$mol_atom2.current)
                    return cache.get();
                else
                    return $.$mol_fiber.run(() => cache.get());
            }
            return $.$mol_fiber.run(() => {
                if (force === $.$mol_mem_force_fail)
                    return get_cache(this).fail(next);
                if (force !== $.$mol_mem_force_cache)
                    next = orig.call(this, next);
                return get_cache(this).put(next);
            });
        }
        return Object.assign(Object.assign({}, descr || {}), { value: Object.assign(value, { orig }) });
    }
    $.$mol_mem = $mol_mem;
})($ || ($ = {}));
//mem.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $.$mol_object {
        static size(next, force) {
            return next || {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_window, "size", null);
    $.$mol_window = $mol_window;
    const $mol_window_resize = () => {
        $mol_window.size(undefined, $.$mol_mem_force_cache);
    };
    self.addEventListener('resize', $.$mol_fiber_root($mol_window_resize));
})($ || ($ = {}));
//window.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dict_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        if (Array.isArray(value))
            return JSON.stringify(value);
        if (Object.getPrototypeOf(Object.getPrototypeOf(value)) === null)
            return JSON.stringify(value);
        return value;
    }
    $.$mol_dict_key = $mol_dict_key;
    class $mol_dict extends Map {
        get(key) {
            return super.get($mol_dict_key(key));
        }
        has(key) {
            return super.has($mol_dict_key(key));
        }
        set(key, value) {
            return super.set($mol_dict_key(key), value);
        }
        delete(key) {
            return super.delete($mol_dict_key(key));
        }
        forEach(back, context) {
            return super.forEach((val, key, dict) => {
                if (typeof key === 'string')
                    key = JSON.parse(key);
                return back.call(this, val, key, dict);
            }, context);
        }
        [Symbol.iterator]() {
            const iterator = super[Symbol.iterator]();
            return {
                [Symbol.iterator]() {
                    return this;
                },
                next() {
                    const iteration = iterator.next();
                    if (!iteration.done) {
                        const key = iteration.value[0];
                        if (typeof key === 'string')
                            iteration.value[0] = JSON.parse(key);
                    }
                    return iteration;
                }
            };
        }
    }
    $.$mol_dict = $mol_dict;
})($ || ($ = {}));
//dict.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_mem_key(proto, name, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(proto, name);
        const value = descr.value;
        const store = new WeakMap();
        Object.defineProperty(proto, name + "()", {
            get: function () {
                return store.get(this);
            }
        });
        const get_cache = (host, key) => {
            let dict = store.get(host);
            if (!dict)
                store.set(host, dict = new $.$mol_dict);
            const key_str = $.$mol_dict_key(key);
            let cache = dict.get(key_str);
            if (cache)
                return cache;
            let cache2 = new $.$mol_atom2;
            cache2[Symbol.toStringTag] = `${host}.${name}(${key_str})`;
            cache2.calculate = value.bind(host, key);
            cache2.abort = () => {
                dict.delete(key_str);
                if (dict.size === 0)
                    store.delete(host);
                cache2.forget();
                return true;
            };
            $.$mol_owning_catch(host, cache2);
            cache2[$.$mol_object_field] = name;
            dict.set(key_str, cache2);
            return cache2;
        };
        return {
            value(key, next, force) {
                if (next === undefined) {
                    const cache = get_cache(this, key);
                    if (force === $.$mol_mem_force_cache)
                        return cache.obsolete();
                    if ($.$mol_atom2.current)
                        return cache.get();
                    else
                        return $.$mol_fiber.run(() => cache.get());
                }
                return $.$mol_fiber.run(() => {
                    if (force === $.$mol_mem_force_fail)
                        return get_cache(this, key).fail(next);
                    if (force !== $.$mol_mem_force_cache)
                        next = value.call(this, key, next);
                    return get_cache(this, key).put(next);
                });
            }
        };
    }
    $.$mol_mem_key = $mol_mem_key;
})($ || ($ = {}));
//key.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_atom2_autorun(calculate) {
        return $.$mol_atom2.create(atom => {
            atom.calculate = calculate;
            atom.obsolete_slaves = atom.schedule;
            atom.doubt_slaves = atom.schedule;
            atom[Symbol.toStringTag] = calculate[Symbol.toStringTag] || calculate.name || '$mol_atom2_autorun';
            atom.schedule();
        });
    }
    $.$mol_atom2_autorun = $mol_atom2_autorun;
})($ || ($ = {}));
//autorun.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_defer extends $.$mol_object {
        constructor(run) {
            super();
            this.run = run;
            $mol_defer.add(this);
        }
        destructor() {
            $mol_defer.drop(this);
        }
        static schedule() {
            if (this.timer)
                return;
            this.timer = this.scheduleNative(() => {
                this.timer = null;
                this.run();
            });
        }
        static unschedule() {
            if (!this.timer)
                return;
            cancelAnimationFrame(this.timer);
            this.timer = null;
        }
        static add(defer) {
            this.all.push(defer);
            this.schedule();
        }
        static drop(defer) {
            var index = this.all.indexOf(defer);
            if (index >= 0)
                this.all.splice(index, 1);
        }
        static run() {
            if (this.all.length === 0)
                return;
            this.schedule();
            for (var defer; defer = this.all.shift();)
                defer.run();
        }
    }
    $mol_defer.all = [];
    $mol_defer.timer = null;
    $mol_defer.scheduleNative = (typeof requestAnimationFrame == 'function')
        ? handler => requestAnimationFrame(handler)
        : handler => setTimeout(handler, 16);
    $.$mol_defer = $mol_defer;
})($ || ($ = {}));
//defer.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $.$mol_object {
        static focused(next) {
            if (next === undefined)
                return [];
            const parents = [];
            let element = next[0];
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            new $.$mol_defer(() => {
                const element = $.$mol_mem_cached(() => this.focused())[0];
                if (element)
                    element.focus();
                else
                    $.$mol_dom_context.blur();
            });
            return parents;
        }
        static focus(event) {
            this.focused([event.target]);
        }
        static blur(event) {
            const elements = $.$mol_mem_cached(() => this.focused());
            if (elements && elements[0] === event.target)
                this.focused([]);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//selection.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $.$mol_object2 {
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//timeout.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        $.$mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            new $.$mol_after_tick($.$mol_fiber_root(() => $.$mol_view_selection.focus(event)));
        }, true);
        $.$mol_dom_context.document.documentElement.addEventListener('blur', (event) => {
            new $.$mol_after_timeout(0, $.$mol_fiber_root(() => $.$mol_view_selection.blur(event)));
        }, true);
    }
})($ || ($ = {}));
//selection.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//qname.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//const.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//attributes.js.map
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//catch.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//styles.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//fields.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $.$mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $.$mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//children.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $.$mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                var _a;
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = (_a = task.call(this, next)) !== null && _a !== void 0 ? _a : next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//memo.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if ((name === null || name === void 0 ? void 0 : name.length) > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch (_a) { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//name.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_deprecated(message) {
        return (host, field, descr) => {
            const value = descr.value;
            let warned = false;
            descr.value = function $mol_deprecated_wrapper(...args) {
                if (!warned) {
                    this.$.$mol_log3_warn({
                        place: `${host.constructor.name}::${field}`,
                        message: `Deprecated`,
                        hint: message,
                    });
                    warned = true;
                }
                return value.call(this, ...args);
            };
        };
    }
    $.$mol_deprecated = $mol_deprecated;
})($ || ($ = {}));
//deprecated.js.map
;
"use strict";
//extract.js.map
;
"use strict";
//pick.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $.$mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $.$mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    class $mol_view extends $.$mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            return $.$mol_atom2_autorun(() => {
                this.dom_tree();
                document.title = this.title();
                return this;
            });
        }
        static autobind() {
            const nodes = $.$mol_dom_context.document.querySelectorAll('[mol_view_root]');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $.$mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $.$mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            const sub = this.sub();
            if (!sub)
                return 0;
            let min = 0;
            sub.forEach(view => {
                if (view instanceof $mol_view) {
                    min = Math.max(min, view.minimal_width());
                }
            });
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            var _a;
            let min = 0;
            try {
                for (const view of (_a = this.sub()) !== null && _a !== void 0 ? _a : []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
            }
            return min;
        }
        view_rect() {
            if ($.$mol_atom2.current)
                this.view_rect_watcher();
            return this.view_rect_cache();
        }
        view_rect_cache(next = null) {
            return next;
        }
        view_rect_watcher() {
            $mol_view.watchers.add(this);
            return { destructor: () => $mol_view.watchers.delete(this) };
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            const node = next || $.$mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $.$mol_const('<#' + id + '>');
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            try {
                $.$mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $.$mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $.$mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise) {
                    $.$mol_atom2.current.subscribe(error);
                    return node;
                }
                if ($.$mol_fail_catch(error)) {
                    try {
                        void (node.innerText = error.message);
                    }
                    catch (e) { }
                    console.error(error);
                }
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            node.style.minHeight = this.minimal_height() + 'px';
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $.$mol_dom_render_attributes(node, attr);
            $.$mol_dom_render_styles(node, style);
            $.$mol_dom_render_fields(node, fields);
            return node;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : String(child);
            });
            $.$mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $.$mol_owning_get(this, $mol_view);
            if (owner instanceof $mol_view) {
                const suffix = this[$.$mol_object_field];
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        event_async() {
            return {};
        }
        plugins() {
            return [];
        }
        [$.$mol_dev_format_head]() {
            return $.$mol_dev_format_span({}, $.$mol_dev_format_native(this), $.$mol_dev_format_shade('/'), $.$mol_dev_format_auto($.$mol_mem_cached(() => this.sub())));
        }
        *view_find(check, path = []) {
            path = [...path, this];
            if (check('', path))
                return yield this;
            for (const item of this.sub()) {
                if (item instanceof $mol_view) {
                    yield* item.view_find(check, path);
                }
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
            return index;
        }
        ensure_visible(view) {
            this.view_find((_, path) => {
                if (path[path.length - 1] !== view)
                    return false;
                $.$mol_fiber_defer(() => {
                    this.force_render(new Set(path));
                    $.$mol_fiber_defer(() => {
                        view.dom_node().scrollIntoView({
                            block: 'center',
                            inline: 'center',
                        });
                    });
                });
                return true;
            }).next().value;
        }
    }
    $mol_view.watchers = new Set();
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_cache", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_rect_watcher", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $.$mol_mem
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $.$mol_deprecated('Use $mol_view::event instead.')
    ], $mol_view.prototype, "event_async", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $.$mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//view.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: background-color, height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tcontain: style;\n\ttab-size: 4;\n}\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_current);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont: var(--mol_skin_font);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t135deg,\n\t\trgb(162, 90, 90),\n\t\trgb(162, 90, 90) 11px,\n\t\trgb(255,255,220) 10px,\n\t\trgb(255,255,220) 20px\n\t);\n\tbackground-size: 28px 28px;\n\tcolor: black;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .25 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//view.css.js.map
;
"use strict";
var $;
(function ($) {
    if ($.$mol_dom_context.document) {
        const event_name = self.cordova ? 'deviceready' : 'DOMContentLoaded';
        Promise.resolve().then($.$mol_fiber_root(() => {
            $.$mol_view.autobind();
            $.$mol_defer.run();
        }));
        function $mol_view_watch() {
            $.$mol_fiber_unlimit(() => {
                new $.$mol_after_frame(watch);
                for (const view of $.$mol_view.watchers) {
                    view.view_rect_cache(view.dom_node().getBoundingClientRect().toJSON());
                }
            });
        }
        const watch = $.$mol_fiber_root($mol_view_watch);
        watch();
    }
})($ || ($ = {}));
//view.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $.$mol_view {
        dom_node(next) {
            const node = next || $.$mol_owning_get(this, $.$mol_view).dom_node();
            $.$mol_dom_render_attributes(node, this.attr_static());
            const events = this.event();
            for (let event_name in events) {
                node.addEventListener(event_name, $.$mol_fiber_root(events[event_name]), { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//plugin.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $.$mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//auto.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next, force) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//local.js.map
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => {
        if (!event.key)
            return;
        $.$mol_state_local.value(event.key, undefined, $.$mol_mem_force_cache);
    });
})($ || ($ = {}));
//local.web.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_lights(next) {
        var _a;
        return (_a = this.$.$mol_state_local.value('$mol_lights', next)) !== null && _a !== void 0 ? _a : $.$mol_dom_context.matchMedia('(prefers-color-scheme: light)').matches;
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//lights.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//auto.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_large extends $.$mol_view {
    }
    $.$mol_demo_large = $mol_demo_large;
})($ || ($ = {}));
//large.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/demo/large/large.view.css", "[mol_demo_large] {\n\theight: 100%;\n\twidth: 100%;\n\toverflow: hidden;\n\tbox-shadow: 0 0 0 .5px var(--mol_theme_line);\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tposition: relative;\n\tflex: 1 0 auto;\n\tdisplay: flex;\n\talign-items: stretch;\n\tbox-sizing: border-box;\n\talign-self: stretch;\n}\n");
})($ || ($ = {}));
//large.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_demo_large extends $.$mol_demo_large {
            minimal_height() {
                return $.$mol_window.size().height - 100;
            }
            minimal_width() {
                return this.$.$mol_window.size().width - 300;
            }
        }
        $$.$mol_demo_large = $mol_demo_large;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//large.view.js.map
;
"use strict";
var $node = $node || {};
//node.web.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextEncoder = (_a = globalThis.TextEncoder) !== null && _a !== void 0 ? _a : $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//encode.js.map
;
"use strict";
var $;
(function ($) {
    var _a;
    const TextDecoder = (_a = globalThis.TextDecoder) !== null && _a !== void 0 ? _a : $node.util.TextDecoder;
    function $mol_charset_decode(value, code = 'utf8') {
        return new TextDecoder(code).decode(value);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//decode.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $.$mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(undefined, $.$mol_mem_force_cache);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $.$mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat().mtime.getTime().toString(36).toUpperCase();
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next, force) {
            let exists = true;
            try {
                this.stat();
            }
            catch (error) {
                if (error instanceof $mol_file_not_found) {
                    exists = false;
                }
                else {
                    return $.$mol_fail_hidden(error);
                }
            }
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure(next);
            this.reset();
            return next;
        }
        type() {
            return this.stat().type;
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, force) {
            const buffer = next === undefined ? undefined : $.$mol_charset_encode(next);
            return $.$mol_charset_decode(this.buffer(buffer, force));
        }
        fail(error) {
            this.buffer(error, $.$mol_mem_force_fail);
            this.stat(error, $.$mol_mem_force_fail);
        }
        buffer_cached(buffer) {
            const ctime = new Date();
            const stat = {
                type: 'file',
                size: buffer.length,
                ctime,
                atime: ctime,
                mtime: ctime
            };
            this.buffer(buffer, $.$mol_mem_force_cache);
            this.stat(stat, $.$mol_mem_force_cache);
        }
        text_cached(content) {
            this.buffer_cached($.$mol_charset_encode(content));
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat().size;
                default: return 0;
            }
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $.$mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//file.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $.$mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror')[0];
        if (error)
            throw new Error(error.textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//parse.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $.$mol_object2 {
        constructor(native) {
            super();
            this.native = native;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.json);
            return parse.call(response);
        }
        buffer() {
            const response = this.native;
            const parse = $.$mol_fiber_sync(response.arrayBuffer);
            return parse.call(response);
        }
        xml() {
            return $.$mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $.$mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $.$mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $.$mol_object2 {
        static response(input, init) {
            const response = this.request(input, init);
            if (Math.floor(response.status / 100) === 2)
                return new $mol_fetch_response(response);
            throw new Error(response.statusText || `HTTP Error ${response.status}`);
        }
        static stream(input, init) {
            return this.response(input, init).stream();
        }
        static text(input, init) {
            return this.response(input, init).text();
        }
        static json(input, init) {
            return this.response(input, init).json();
        }
        static buffer(input, init) {
            this.response(input, init).buffer();
        }
        static xml(input, init) {
            return this.response(input, init).xml();
        }
        static xhtml(input, init) {
            return this.response(input, init).xhtml();
        }
        static html(input, init) {
            return this.response(input, init).html();
        }
    }
    $mol_fetch.request = $.$mol_fiber_sync((input, init = {}) => {
        if (typeof AbortController === 'function') {
            var controller = new AbortController();
            init.signal = controller.signal;
            const fiber = $.$mol_fiber.current;
            fiber.abort = () => {
                if (fiber.cursor === -2)
                    return true;
                controller.abort();
                return true;
            };
        }
        let native = $.$mol_dom_context.fetch;
        if (!native)
            native = $node['node-fetch'];
        return native(input, init);
    });
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "response", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "stream", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "text", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "json", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "buffer", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $.$mol_fiber.method
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//fetch.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $.$mol_file {
        static absolute(path) {
            return this.make({
                path: $.$mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        buffer(next, force) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $.$mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $.$mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, force) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure(next) {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    $mol_file_web.base = $.$mol_dom_context.document
        ? new URL('.', $.$mol_dom_context.document.currentScript['src']).toString()
        : '';
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $.$mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//file.web.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $.$mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return $.$mol_state_local.value('locale', next) || $.$mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse($.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ('then' in error)
                    $.$mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                console.warn(`Not translated to "${lang}": ${key}`);
            }
            return `<${key}>`;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $.$mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_locale, "text", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//locale.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $.$mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return Object.assign(Object.assign({}, super.field()), { src: this.uri(), alt: this.title() });
        }
        uri() {
            return "";
        }
    }
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//image.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_skin_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//image.view.css.js.map
;
"use strict";
//error.js.map
;
"use strict";
//override.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_colors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
    };
})($ || ($ = {}));
//colors.js.map
;
"use strict";
//properties.js.map
;
"use strict";
//class.js.map
;
"use strict";
//element.js.map
;
"use strict";
//guard.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $.$mol_dom_qname($.$mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                return `${prefix ? prefix + ' ' : ''}[${block}_${path.join('_')}]`;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' [' + $.$mol_dom_qname(key) + ']', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > [' + $.$mol_dom_qname(type) + ']', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + '[' + name + '=' + JSON.stringify(val) + ']', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//sheet.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $.$mol_style_attach(Component.name, $.$mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//define.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n}\n");
})($ || ($ = {}));
//gap.css.js.map
;
"use strict";
var $;
(function ($) {
    const { vary } = $.$mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
    };
})($ || ($ = {}));
//gap.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $.$mol_view {
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { mol_theme: "$mol_theme_accent" });
        }
        style() {
            return Object.assign(Object.assign({}, super.style()), { minHeight: "1em" });
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//speck.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .75rem;\n\tborder-radius: 1rem;\n\tmargin: -.75em;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: 2;\n    text-align: center;\n    line-height: 1;\n    display: inline-block;\n\ttext-shadow: 1px 1px 0 black;\n}\n");
})($ || ($ = {}));
//speck.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $.$mol_view {
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { click: (event) => this.event_activate(event), keydown: (event) => this.event_key_press(event) });
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { disabled: this.disabled(), role: "button", tabindex: this.tab_index(), title: this.hint_or_error() });
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_or_error() {
            return this.hint();
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $.$mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//button.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//code.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n}\n[mol_button]:focus {\n\toutline: none;\n}\n");
})($ || ($ = {}));
//button.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            fiber(next = null) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                this.fiber($.$mol_fiber.current);
                this.event_click(next);
                this.click(next);
                if (this.fiber() === $.$mol_fiber.current) {
                    this.fiber(null);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $.$mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                var _a, _b;
                try {
                    (_a = this.fiber()) === null || _a === void 0 ? void 0 : _a.get();
                    return '';
                }
                catch (error) {
                    if (error instanceof Promise) {
                        return $.$mol_fail_hidden(error);
                    }
                    return String((_b = error.message) !== null && _b !== void 0 ? _b : error);
                }
            }
            hint_or_error() {
                return this.error() || super.hint_or_error();
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_button.prototype, "fiber", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//button.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $.$mol_view {
        minimal_height() {
            return 0;
        }
        _event_scroll_timer(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        field() {
            return Object.assign(Object.assign({}, super.field()), { scrollTop: this.scroll_top(), scrollLeft: this.scroll_left(), tabIndex: this.tabindex() });
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { scroll: (event) => this.event_scroll(event) });
        }
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "_event_scroll_timer", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $.$mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//scroll.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $.$mol_object {
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $.$mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//session.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $.$mol_style_unit;
        $.$mol_style_define($$.$mol_scroll, {
            display: 'flex',
            overflow: 'auto',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            scrollbar: {
                color: [$.$mol_theme.line, 'transparent'],
            },
            '::-webkit-scrollbar': {
                width: rem(.5),
                height: rem(.5),
            },
            '::-webkit-scrollbar-corner': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '::-webkit-scrollbar-track': {
                background: {
                    color: 'transparent',
                },
            },
            '::-webkit-scrollbar-thumb': {
                background: {
                    color: $.$mol_theme.line,
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next) {
                return $.$mol_state_session.value(`${this}.scroll_top()`, next) || 0;
            }
            scroll_left(next) {
                return $.$mol_state_session.value(`${this}.scroll_left()`, next) || 0;
            }
            _event_scroll_timer(next) {
                return next;
            }
            event_scroll(next) {
                var _a;
                (_a = this._event_scroll_timer()) === null || _a === void 0 ? void 0 : _a.destructor();
                const el = this.dom_node();
                this._event_scroll_timer(new $.$mol_after_timeout(200, $.$mol_fiber_solid.func(() => {
                    this.scroll_top(Math.max(0, el.scrollTop));
                    this.scroll_left(Math.max(0, el.scrollLeft));
                })));
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $.$mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        __decorate([
            $.$mol_memo.method
        ], $mol_scroll.prototype, "_event_scroll_timer", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//scroll.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $.$mol_view {
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        event_top(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        Title() {
            const obj = new this.$.$mol_button();
            obj.sub = () => [
                this.title()
            ];
            obj.event_click = (val) => this.event_top(val);
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.head();
            return obj;
        }
        body_scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        body() {
            return [];
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.scroll_top = (val) => this.body_scroll_top(val);
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "event_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "body_scroll_top", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $.$mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//page.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $.$mol_style_unit;
        const { calc } = $.$mol_style_func;
        $.$mol_style_define($$.$mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            background: {
                color: $.$mol_theme.back,
            },
            color: $.$mol_theme.text,
            zIndex: 0,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $.$mol_gap.block,
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
            Title: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: 'auto',
                },
                minHeight: rem(2),
                padding: $.$mol_gap.text,
                wordBreak: 'normal',
                cursor: 'default',
                textShadow: '0 0',
            },
            Tools: {
                flex: 'auto',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                margin: 0,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $.$mol_theme.back,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_page extends $.$mol_page {
            body_scroll_top(next) {
                return $.$mol_state_session.value(`${this}.body_scroll_top()`, next) || 0;
            }
        }
        $$.$mol_page = $mol_page;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//page.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $.$mol_view {
        dom_name() {
            return "a";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { href: this.uri(), title: this.hint(), target: this.target(), download: this.file_name(), mol_link_current: this.current(), mol_theme: this.theme() });
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return Object.assign(Object.assign({}, super.event()), { click: (event) => this.click(event) });
        }
        uri() {
            return "";
        }
        hint() {
            return "";
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        theme() {
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//link.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $.$mol_object {
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        static href(next, force) {
            if (next === undefined)
                return $.$mol_dom_context.location.href;
            history.replaceState(history.state, $.$mol_dom_context.document.title, next);
            return next;
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#/)[1] || '';
            var chunks = href.split(/[\/\?#&;]/g);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    continue;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : Object.assign(Object.assign({}, this.dict()), { [key]: next });
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link(Object.assign(Object.assign({}, this.dict_cut(Object.keys(next))), next));
        }
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + chunks.join('/'), $.$mol_dom_context.location.href).toString();
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $.$mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $.$mol_mem_key
    ], $mol_state_arg, "value", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($.$mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $.$mol_fiber_root($mol_state_arg_change));
})($ || ($ = {}));
//arg.web.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_define($.$mol_link, {
        textDecoration: 'none',
        color: $.$mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $.$mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        ':hover': {
            background: {
                color: $.$mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $.$mol_theme.hover,
            }
        },
        '@': {
            mol_link_current: {
                'true': {
                    background: {
                        color: $.$mol_theme.back,
                    },
                    color: $.$mol_theme.text,
                }
            }
        },
    });
})($ || ($ = {}));
//link.view.css.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            current() {
                const base = this.$.$mol_state_arg.href();
                const target = new URL(this.uri(), base).toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) !== args[key])
                        return false;
                }
                return true;
            }
            event_click(event) {
                if (!event || event.defaultPrevented)
                    return;
                this.focused(false);
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height() || 32);
            }
            theme() {
                return this.current() ? '$mol_theme_base' : null;
            }
        }
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $.$mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//link.view.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_demo_ext extends $.$mol_demo_large {
        dom_name() {
            return "object";
        }
        attr() {
            return Object.assign(Object.assign({}, super.attr()), { data: this.uri() });
        }
        uri() {
            return "";
        }
    }
    $.$mol_demo_ext = $mol_demo_ext;
})($ || ($ = {}));
//ext.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("mol/demo/ext/ext.view.css", "[mol_demo_ext] {\n\tobject-fit: cover;\n\tobject-position: left top;\n\tdisplay: flex;\n\talign-items: center;\n\talign-content: center;\n\tjustify-content: center;\n}\n");
})($ || ($ = {}));
//ext.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $my_portfolio extends $.$mol_demo_large {
        attr() {
            return {
                mol_theme: "$mol_theme_auto"
            };
        }
        title() {
            return this.$.$mol_locale.text('$my_portfolio_title');
        }
        sub() {
            return [
                this.Page()
            ];
        }
        image() {
            return "my/portfolio/logo.svg";
        }
        Image() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.image();
            return obj;
        }
        caffeine() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_caffeine_title');
            obj.details = () => "http://caffeine.uz";
            return obj;
        }
        uztelecom() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_uztelecom_title');
            obj.details = () => "https://uztelecom.uz";
            return obj;
        }
        spphone() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_spphone_title');
            obj.details = () => "https://spphone.uz";
            return obj;
        }
        korean() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_korean_title');
            obj.details = () => "https://romana.uz/ru";
            return obj;
        }
        mediabox() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_mediabox_title');
            obj.details = () => "https://mediabox.uz";
            return obj;
        }
        sayyidashahlo() {
            const obj = new this.$.$my_portfolio_app();
            obj.title = () => this.$.$mol_locale.text('$my_portfolio_sayyidashahlo_title');
            obj.details = () => "https://sayyidashahlo.uz";
            return obj;
        }
        Page() {
            const obj = new this.$.$mol_page();
            obj.title = () => null;
            obj.head = () => [
                this.Image()
            ];
            obj.body = () => [
                this.caffeine(),
                this.uztelecom(),
                this.spphone(),
                this.korean(),
                this.mediabox(),
                this.sayyidashahlo()
            ];
            obj.foot = () => [
                null
            ];
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "Image", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "caffeine", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "uztelecom", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "spphone", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "korean", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "mediabox", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "sayyidashahlo", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio.prototype, "Page", null);
    $.$my_portfolio = $my_portfolio;
    class $my_portfolio_app extends $.$mol_link {
        target() {
            return "_blank";
        }
        uri() {
            return this.details();
        }
        preview() {
            return "";
        }
        sub() {
            return [
                this.Title(),
                this.Demo()
            ];
        }
        details() {
            return "";
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        background() {
            return "";
        }
        Demo() {
            const obj = new this.$.$mol_demo_ext();
            obj.style = () => ({
                "background-image": this.background()
            });
            obj.uri = () => this.details();
            return obj;
        }
    }
    __decorate([
        $.$mol_mem
    ], $my_portfolio_app.prototype, "Title", null);
    __decorate([
        $.$mol_mem
    ], $my_portfolio_app.prototype, "Demo", null);
    $.$my_portfolio_app = $my_portfolio_app;
})($ || ($ = {}));
//portfolio.view.tree.js.map
;
var $node = $node || {} ; $node[ "/my/portfolio/logo.svg" ] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDY4IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDQ2OCAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTIuNSA1Ljc3MzVDMTE4LjY4OCAyLjIwMDg1IDEyNi4zMTIgMi4yMDA4NSAxMzIuNSA1Ljc3MzVMMjE4LjU4OCA1NS40NzY1QzIyNC43NzYgNTkuMDQ5MiAyMjguNTg4IDY1LjY1MTcgMjI4LjU4OCA3Mi43OTdWMTcyLjIwM0MyMjguNTg4IDE3OS4zNDggMjI0Ljc3NiAxODUuOTUxIDIxOC41ODggMTg5LjUyM0wxMzIuNSAyMzkuMjI3QzEyNi4zMTIgMjQyLjc5OSAxMTguNjg4IDI0Mi43OTkgMTEyLjUgMjM5LjIyN0wyNi40MTE5IDE4OS41MjNDMjAuMjIzOSAxODUuOTUxIDE2LjQxMTkgMTc5LjM0OCAxNi40MTE5IDE3Mi4yMDNWNzIuNzk3QzE2LjQxMTkgNjUuNjUxNyAyMC4yMjM5IDU5LjA0OTIgMjYuNDExOSA1NS40NzY1TDExMi41IDUuNzczNVoiIGZpbGw9IiMxQjFCMUIiLz4KPHBhdGggZD0iTTExMi41IDEzLjc3MzVDMTE4LjY4OCAxMC4yMDA4IDEyNi4zMTIgMTAuMjAwOCAxMzIuNSAxMy43NzM1TDIxMS42NiA1OS40NzY1QzIxNy44NDggNjMuMDQ5MiAyMjEuNjYgNjkuNjUxNyAyMjEuNjYgNzYuNzk3VjE2OC4yMDNDMjIxLjY2IDE3NS4zNDggMjE3Ljg0OCAxODEuOTUxIDIxMS42NiAxODUuNTIzTDEzMi41IDIzMS4yMjdDMTI2LjMxMiAyMzQuNzk5IDExOC42ODggMjM0Ljc5OSAxMTIuNSAyMzEuMjI3TDMzLjM0MDEgMTg1LjUyM0MyNy4xNTIxIDE4MS45NTEgMjMuMzQwMSAxNzUuMzQ4IDIzLjM0MDEgMTY4LjIwM1Y3Ni43OTdDMjMuMzQwMSA2OS42NTE3IDI3LjE1MjEgNjMuMDQ5MiAzMy4zNDAxIDU5LjQ3NjVMMTEyLjUgMTMuNzczNVoiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTEzMi4zNSA4My42NVY5OC4yOEgxMDguODFWMTYxLjk3SDkxLjU0Vjk4LjI4SDY4VjgzLjY1SDEzMi4zNVoiIGZpbGw9IiMzMDMwMzAiLz4KPHBhdGggZD0iTTE3NC42MjYgMTA2Ljk3SDE1OC4zNDZDMTU3LjY4NiA5OS4xOTY3IDE1Mi43MzYgOTUuMzEgMTQzLjQ5NiA5NS4zMUMxMzkuNTM2IDk1LjMxIDEzNi40MTkgOTYuMTE2NyAxMzQuMTQ2IDk3LjczQzEzMS45NDYgOTkuMjcgMTMwLjg0NiAxMDEuNDMzIDEzMC44NDYgMTA0LjIyQzEzMC44NDYgMTA1LjE3MyAxMzAuOTkzIDEwNi4wMTcgMTMxLjI4NiAxMDYuNzVDMTMxLjU3OSAxMDcuNDgzIDEzMi4xMjkgMTA4LjE4IDEzMi45MzYgMTA4Ljg0QzEzMy43NDMgMTA5LjQyNyAxMzQuNTQ5IDEwOS45NCAxMzUuMzU2IDExMC4zOEMxMzYuMTYzIDExMC43NDcgMTM3LjMzNiAxMTEuMTg3IDEzOC44NzYgMTExLjdDMTQwLjQ4OSAxMTIuMTQgMTQxLjkxOSAxMTIuNTQzIDE0My4xNjYgMTEyLjkxQzE0NC40ODYgMTEzLjI3NyAxNDYuMzE5IDExMy43NTMgMTQ4LjY2NiAxMTQuMzRDMTUxLjAxMyAxMTQuOTI3IDE1My4wNjYgMTE1LjQ3NyAxNTQuODI2IDExNS45OUMxNjIuNTI2IDExOC4xOSAxNjguMjQ2IDEyMC45NCAxNzEuOTg2IDEyNC4yNEMxNzUuNzk5IDEyNy41NCAxNzcuNzA2IDEzMi4yNyAxNzcuNzA2IDEzOC40M0MxNzcuNzA2IDE0Mi45MDMgMTc2Ljc4OSAxNDYuODI3IDE3NC45NTYgMTUwLjJDMTczLjEyMyAxNTMuNSAxNzAuNjI5IDE1Ni4xNCAxNjcuNDc2IDE1OC4xMkMxNjQuMzk2IDE2MC4wMjcgMTYwLjk4NiAxNjEuNDIgMTU3LjI0NiAxNjIuM0MxNTMuNTc5IDE2My4yNTMgMTQ5LjY1NiAxNjMuNzMgMTQ1LjQ3NiAxNjMuNzNDMTM0Ljg0MyAxNjMuNzMgMTI2LjUxOSAxNjEuMzEgMTIwLjUwNiAxNTYuNDdDMTE0LjU2NiAxNTEuNTU3IDExMS41NTkgMTQ0LjY2MyAxMTEuNDg2IDEzNS43OUgxMjguNTM2QzEyOC44MjkgMTQ1LjYxNyAxMzQuNzMzIDE1MC41MyAxNDYuMjQ2IDE1MC41M0MxNTAuNzE5IDE1MC41MyAxNTQuMjM5IDE0OS42MTMgMTU2LjgwNiAxNDcuNzhDMTU5LjQ0NiAxNDUuODczIDE2MC43NjYgMTQzLjMwNyAxNjAuNzY2IDE0MC4wOEMxNjAuNzY2IDEzNy4zNjcgMTU5LjU1NiAxMzUuMzg3IDE1Ny4xMzYgMTM0LjE0QzE1NC43ODkgMTMyLjg5MyAxNDkuODAzIDEzMS4xNyAxNDIuMTc2IDEyOC45N0MxNDEuNzM2IDEyOC44OTcgMTQxLjQwNiAxMjguODIzIDE0MS4xODYgMTI4Ljc1QzE0MC45NjYgMTI4LjY3NyAxNDAuNjczIDEyOC42MDMgMTQwLjMwNiAxMjguNTNDMTM5LjkzOSAxMjguMzgzIDEzOS42MDkgMTI4LjI3MyAxMzkuMzE2IDEyOC4yQzEzNi42NzYgMTI3LjQ2NyAxMzQuODQzIDEyNi45NTMgMTMzLjgxNiAxMjYuNjZDMTMyLjc4OSAxMjYuMjkzIDEzMS4xMzkgMTI1LjcwNyAxMjguODY2IDEyNC45QzEyNi42NjYgMTI0LjA5MyAxMjUuMDUzIDEyMy4zNiAxMjQuMDI2IDEyMi43QzEyMi45OTkgMTIyLjA0IDEyMS43MTYgMTIxLjEyMyAxMjAuMTc2IDExOS45NUMxMTguNzA5IDExOC43NzcgMTE3LjY0NiAxMTcuNTY3IDExNi45ODYgMTE2LjMyQzExNi4zMjYgMTE1IDExNS43MDMgMTEzLjQyMyAxMTUuMTE2IDExMS41OUMxMTQuNjAzIDEwOS42ODMgMTE0LjM0NiAxMDcuNjMgMTE0LjM0NiAxMDUuNDNDMTE0LjM0NiA5OC4zMTY3IDExNy4wOTYgOTIuNjMzMyAxMjIuNTk2IDg4LjM4QzEyOC4wOTYgODQuMTI2NyAxMzUuMzkzIDgyIDE0NC40ODYgODJDMTUzLjI4NiA4MiAxNjAuNDczIDg0LjA5IDE2Ni4wNDYgODguMjdDMTcxLjYxOSA5Mi4zNzY3IDE3NC40NzkgOTguNjEgMTc0LjYyNiAxMDYuOTdaIiBmaWxsPSIjMzAzMDMwIi8+CjxwYXRoIGQ9Ik0xMzIuMzUgODEuNjVMMTIyLjU5NiA4Ni4zOEwxMTUuNDIzIDk2LjI4SDEwOC44MVYxNTkuOTdIOTEuNTRWOTYuMjhINjhWODEuNjVIMTMyLjM1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3NC42MjYgMTA0Ljk3SDE1OC4zNDZDMTU3LjY4NiA5Ny4xOTY3IDE1Mi43MzYgOTMuMzEgMTQzLjQ5NiA5My4zMUMxMzkuNTM2IDkzLjMxIDEzNi40MTkgOTQuMTE2NyAxMzQuMTQ2IDk1LjczQzEzMS45NDYgOTcuMjcgMTMwLjg0NiA5OS40MzMzIDEzMC44NDYgMTAyLjIyQzEzMC44NDYgMTAzLjE3MyAxMzAuOTkzIDEwNC4wMTcgMTMxLjI4NiAxMDQuNzVDMTMxLjU3OSAxMDUuNDgzIDEzMi4xMjkgMTA2LjE4IDEzMi45MzYgMTA2Ljg0QzEzMy43NDMgMTA3LjQyNyAxMzQuNTQ5IDEwNy45NCAxMzUuMzU2IDEwOC4zOEMxMzYuMTYzIDEwOC43NDcgMTM3LjMzNiAxMDkuMTg3IDEzOC44NzYgMTA5LjdDMTQwLjQ4OSAxMTAuMTQgMTQxLjkxOSAxMTAuNTQzIDE0My4xNjYgMTEwLjkxQzE0NC40ODYgMTExLjI3NyAxNDYuMzE5IDExMS43NTMgMTQ4LjY2NiAxMTIuMzRDMTUxLjAxMyAxMTIuOTI3IDE1My4wNjYgMTEzLjQ3NyAxNTQuODI2IDExMy45OUMxNjIuNTI2IDExNi4xOSAxNjguMjQ2IDExOC45NCAxNzEuOTg2IDEyMi4yNEMxNzUuNzk5IDEyNS41NCAxNzcuNzA2IDEzMC4yNyAxNzcuNzA2IDEzNi40M0MxNzcuNzA2IDE0MC45MDMgMTc2Ljc4OSAxNDQuODI3IDE3NC45NTYgMTQ4LjJDMTczLjEyMyAxNTEuNSAxNzAuNjI5IDE1NC4xNCAxNjcuNDc2IDE1Ni4xMkMxNjQuMzk2IDE1OC4wMjcgMTYwLjk4NiAxNTkuNDIgMTU3LjI0NiAxNjAuM0MxNTMuNTc5IDE2MS4yNTMgMTQ5LjY1NiAxNjEuNzMgMTQ1LjQ3NiAxNjEuNzNDMTM0Ljg0MyAxNjEuNzMgMTI2LjUxOSAxNTkuMzEgMTIwLjUwNiAxNTQuNDdDMTE0LjU2NiAxNDkuNTU3IDExMS41NTkgMTQyLjY2MyAxMTEuNDg2IDEzMy43OUgxMjguNTM2QzEyOC44MjkgMTQzLjYxNyAxMzQuNzMzIDE0OC41MyAxNDYuMjQ2IDE0OC41M0MxNTAuNzE5IDE0OC41MyAxNTQuMjM5IDE0Ny42MTMgMTU2LjgwNiAxNDUuNzhDMTU5LjQ0NiAxNDMuODczIDE2MC43NjYgMTQxLjMwNyAxNjAuNzY2IDEzOC4wOEMxNjAuNzY2IDEzNS4zNjcgMTU5LjU1NiAxMzMuMzg3IDE1Ny4xMzYgMTMyLjE0QzE1NC43ODkgMTMwLjg5MyAxNDkuODAzIDEyOS4xNyAxNDIuMTc2IDEyNi45N0MxNDEuNzM2IDEyNi44OTcgMTQxLjQwNiAxMjYuODIzIDE0MS4xODYgMTI2Ljc1QzE0MC45NjYgMTI2LjY3NyAxNDAuNjczIDEyNi42MDMgMTQwLjMwNiAxMjYuNTNDMTM5LjkzOSAxMjYuMzgzIDEzOS42MDkgMTI2LjI3MyAxMzkuMzE2IDEyNi4yQzEzNi42NzYgMTI1LjQ2NyAxMzQuODQzIDEyNC45NTMgMTMzLjgxNiAxMjQuNjZDMTMyLjc4OSAxMjQuMjkzIDEzMS4xMzkgMTIzLjcwNyAxMjguODY2IDEyMi45QzEyNi42NjYgMTIyLjA5MyAxMjUuMDUzIDEyMS4zNiAxMjQuMDI2IDEyMC43QzEyMi45OTkgMTIwLjA0IDEyMS43MTYgMTE5LjEyMyAxMjAuMTc2IDExNy45NUMxMTguNzA5IDExNi43NzcgMTE3LjY0NiAxMTUuNTY3IDExNi45ODYgMTE0LjMyQzExNi4zMjYgMTEzIDExNS43MDMgMTExLjQyMyAxMTUuMTE2IDEwOS41OUMxMTQuNjAzIDEwNy42ODMgMTE0LjM0NiAxMDUuNjMgMTE0LjM0NiAxMDMuNDNDMTE0LjM0NiA5Ni4zMTY3IDExNy4wOTYgOTAuNjMzMyAxMjIuNTk2IDg2LjM4QzEyOC4wOTYgODIuMTI2NyAxMzUuMzkzIDgwIDE0NC40ODYgODBDMTUzLjI4NiA4MCAxNjAuNDczIDgyLjA5IDE2Ni4wNDYgODYuMjdDMTcxLjYxOSA5MC4zNzY3IDE3NC40NzkgOTYuNjEgMTc0LjYyNiAxMDQuOTdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjkzLjE1IDQxVjU0LjcyNUgyNzguMTVWOTQuNEgyNjEuOFY1NC43MjVIMjQ2Ljg3NVY0MUgyOTMuMTVaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik0zMTUuNzk4IDQxVjk0LjRIMjk5LjQ0OFY0MUgzMTUuNzk4WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNMzg2LjQ0OCA0MVY5NC40SDM3MS4wNzNWODYuMzc1QzM3MS4wNzMgNzYuOTI1IDM3MS4yNzMgNjYuOCAzNzEuNjczIDU2TDM2MS42MjMgOTQuNEgzNDkuMzk4TDMzOS4yNzMgNTZDMzM5LjYyMyA2NC4xIDMzOS44MjMgNzMuNDc1IDMzOS44NzMgODQuMTI1TDMzOS45NDggOTQuNEgzMjQuNTczVjQxSDM0OC4wNDhMMzUxLjQ5OCA1NC44NzVDMzUzLjI5OCA2Mi4zMjUgMzU0LjY3MyA2OS4wNzUgMzU1LjYyMyA3NS4xMjVDMzU2LjM3MyA3MC44MjUgMzU3Ljg3MyA2My45NSAzNjAuMTIzIDU0LjVMMzYzLjQyMyA0MUgzODYuNDQ4WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNDM5LjU3MyA0MVY1My45NzVINDExLjQ0OFY2MC42NUg0MzYuOTQ4VjczLjAyNUg0MTEuNDQ4VjgwLjgyNUg0NDAuMzIzVjk0LjRIMzk1LjMyM1Y0MUg0MzkuNTczWiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNMjkwLjk3NSAxMjIuMDVIMjc3LjdDMjc3LjQgMTE3LjcgMjc0LjUgMTE1LjUyNSAyNjkgMTE1LjUyNUMyNjYuOCAxMTUuNTI1IDI2NS4wNzUgMTE1Ljk1IDI2My44MjUgMTE2LjhDMjYyLjU3NSAxMTcuNiAyNjEuOTUgMTE4LjcgMjYxLjk1IDEyMC4xQzI2MS45NSAxMjEuMiAyNjIuMjI1IDEyMi4wNSAyNjIuNzc1IDEyMi42NUMyNjMuMzc1IDEyMy4yNSAyNjQuNDUgMTIzLjc1IDI2NiAxMjQuMTVDMjc1LjMgMTI2LjYgMjgxLjU3NSAxMjguNTc1IDI4NC44MjUgMTMwLjA3NUMyOTAuMzc1IDEzMi42NzUgMjkzLjE1IDEzNyAyOTMuMTUgMTQzLjA1QzI5My4xNSAxNDguNCAyOTEuMDc1IDE1Mi42NzUgMjg2LjkyNSAxNTUuODc1QzI4Mi44MjUgMTU5LjAyNSAyNzcuMjc1IDE2MC42IDI3MC4yNzUgMTYwLjZDMjYyLjg3NSAxNjAuNiAyNTcuMDc1IDE1OC45MjUgMjUyLjg3NSAxNTUuNTc1QzI0OC42NzUgMTUyLjIyNSAyNDYuNTI1IDE0Ny41MjUgMjQ2LjQyNSAxNDEuNDc1SDI2MC40NUMyNjAuNDUgMTQ3LjEyNSAyNjQuMDI1IDE0OS45NSAyNzEuMTc1IDE0OS45NUMyNzYuNDc1IDE0OS45NSAyNzkuMTI1IDE0OC4xNSAyNzkuMTI1IDE0NC41NUMyNzkuMTI1IDE0My4xIDI3OC42IDE0MS45NzUgMjc3LjU1IDE0MS4xNzVDMjc2LjU1IDE0MC4zMjUgMjc0LjcyNSAxMzkuNTUgMjcyLjA3NSAxMzguODVDMjY3LjAyNSAxMzcuNDUgMjYyLjYyNSAxMzYuMDUgMjU4Ljg3NSAxMzQuNjVDMjUxLjkyNSAxMzIuMTUgMjQ4LjQ1IDEyNy43MjUgMjQ4LjQ1IDEyMS4zNzVDMjQ4LjQ1IDExNi4zMjUgMjUwLjM3NSAxMTIuMzI1IDI1NC4yMjUgMTA5LjM3NUMyNTguMTI1IDEwNi4zNzUgMjYzLjM3NSAxMDQuODc1IDI2OS45NzUgMTA0Ljg3NUMyNzYuNjI1IDEwNC44NzUgMjgxLjc1IDEwNi4zNSAyODUuMzUgMTA5LjNDMjg5IDExMi4yNSAyOTAuODc1IDExNi41IDI5MC45NzUgMTIyLjA1WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNMzQ1Ljg3NCAxMDZWMTU5LjRIMzMxLjg0OVYxMzcuMzVIMzEzLjc3NFYxNTkuNEgyOTkuNzQ5VjEwNkgzMTMuNzc0VjEyNS4wNUgzMzEuODQ5VjEwNkgzNDUuODc0WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNMzY5LjQ0IDEwNlYxNTkuNEgzNTUuNDE1VjEwNkgzNjkuNDRaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik00MTguNDQ3IDEwNlYxMTcuNjI1SDM5My4wMjJWMTI3LjlINDE1LjA3MlYxMzguODVIMzkzLjAyMlYxNTkuNEgzNzguOTk3VjEwNkg0MTguNDQ3WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNDY3LjI5NyAxMDZWMTE3Ljg1SDQ1MS40NzJWMTU5LjRINDM3LjM3MlYxMTcuODVINDIxLjU0N1YxMDZINDY3LjI5N1oiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTI3NS4xOTUgMTkyLjExNUMyNzQuODY1IDE5Ni4wNzUgMjczLjQ0IDE5OS4yNCAyNzAuOTIgMjAxLjYxQzI2OC40MyAyMDMuOTUgMjY1LjI2NSAyMDUuMTIgMjYxLjQyNSAyMDUuMTJDMjU2Ljk4NSAyMDUuMTIgMjUzLjQzIDIwMy42MDUgMjUwLjc2IDIwMC41NzVDMjQ4LjA5IDE5Ny41NDUgMjQ2Ljc1NSAxOTMuNDk1IDI0Ni43NTUgMTg4LjQyNUMyNDYuNzU1IDE4My42ODUgMjQ4LjA3NSAxNzkuNjk1IDI1MC43MTUgMTc2LjQ1NUMyNTMuMzg1IDE3My4yMTUgMjU3LjA0NSAxNzEuNTk1IDI2MS42OTUgMTcxLjU5NUMyNjQuOTM1IDE3MS41OTUgMjY3LjgzIDE3Mi41NTUgMjcwLjM4IDE3NC40NzVDMjcyLjk2IDE3Ni4zNjUgMjc0LjQzIDE3OC44NyAyNzQuNzkgMTgxLjk5SDI3MS43M0MyNzEuMjUgMTc5LjYyIDI3MC4wOTUgMTc3Ljc0NSAyNjguMjY1IDE3Ni4zNjVDMjY2LjQzNSAxNzQuOTU1IDI2NC4yMTUgMTc0LjI1IDI2MS42MDUgMTc0LjI1QzI1OC4wNjUgMTc0LjI1IDI1NS4yIDE3NS41NTUgMjUzLjAxIDE3OC4xNjVDMjUwLjg1IDE4MC43NDUgMjQ5Ljc3IDE4NC4xNjUgMjQ5Ljc3IDE4OC40MjVDMjQ5Ljc3IDE5Mi42ODUgMjUwLjgzNSAxOTYuMTA1IDI1Mi45NjUgMTk4LjY4NUMyNTUuMTI1IDIwMS4yMzUgMjU3Ljk3NSAyMDIuNTEgMjYxLjUxNSAyMDIuNTFDMjY0LjYwNSAyMDIuNTEgMjY3LjA2NSAyMDEuNTY1IDI2OC44OTUgMTk5LjY3NUMyNzAuNzI1IDE5Ny43NTUgMjcxLjgyIDE5NS4yMzUgMjcyLjE4IDE5Mi4xMTVIMjc1LjE5NVoiIGZpbGw9IiMyMTIxMjEiLz4KPHBhdGggZD0iTTMyNS41MSAxNzEuNTk1QzMyOS45OCAxNzEuNTk1IDMzMy42MSAxNzMuMTU1IDMzNi40IDE3Ni4yNzVDMzM5LjIyIDE3OS4zOTUgMzQwLjYzIDE4My40NiAzNDAuNjMgMTg4LjQ3QzM0MC42MyAxOTMuNDUgMzM5LjIzNSAxOTcuNDg1IDMzNi40NDUgMjAwLjU3NUMzMzMuNjU1IDIwMy42MzUgMzI5Ljk5NSAyMDUuMTY1IDMyNS40NjUgMjA1LjE2NUMzMjAuOTY1IDIwNS4xNjUgMzE3LjMzNSAyMDMuNjIgMzE0LjU3NSAyMDAuNTNDMzExLjgxNSAxOTcuNDQgMzEwLjQzNSAxOTMuMzkgMzEwLjQzNSAxODguMzhDMzEwLjQzNSAxODMuMzcgMzExLjgxNSAxNzkuMzIgMzE0LjU3NSAxNzYuMjNDMzE3LjM2NSAxNzMuMTQgMzIxLjAxIDE3MS41OTUgMzI1LjUxIDE3MS41OTVaTTMyNS40NjUgMTc0LjI1QzMyMS44OTUgMTc0LjI1IDMxOSAxNzUuNTQgMzE2Ljc4IDE3OC4xMkMzMTQuNTkgMTgwLjcgMzEzLjQ5NSAxODQuMDkgMzEzLjQ5NSAxODguMjlDMzEzLjQ5NSAxOTIuNTggMzE0LjU5IDE5Ni4wMyAzMTYuNzggMTk4LjY0QzMxOC45NyAyMDEuMjIgMzIxLjg4IDIwMi41MSAzMjUuNTEgMjAyLjUxQzMyOS4xNCAyMDIuNTEgMzMyLjA1IDIwMS4yMiAzMzQuMjQgMTk4LjY0QzMzNi40NiAxOTYuMDYgMzM3LjU3IDE5Mi42NTUgMzM3LjU3IDE4OC40MjVDMzM3LjU3IDE4NC4xOTUgMzM2LjQ2IDE4MC43NzUgMzM0LjI0IDE3OC4xNjVDMzMyLjAyIDE3NS41NTUgMzI5LjA5NSAxNzQuMjUgMzI1LjQ2NSAxNzQuMjVaIiBmaWxsPSIjMjEyMTIxIi8+CjxwYXRoIGQ9Ik0zNzcuNjI5IDE3Mi4zNkgzOTIuMTE5QzM5NS4xNDkgMTcyLjM2IDM5Ny41NjQgMTczLjA4IDM5OS4zNjQgMTc0LjUyQzQwMS4xOTQgMTc1LjkzIDQwMi4xMDkgMTc4LjA5IDQwMi4xMDkgMTgxQzQwMi4xMDkgMTgzLjA3IDQwMS41NTQgMTg0Ljc5NSA0MDAuNDQ0IDE4Ni4xNzVDMzk5LjM2NCAxODcuNTI1IDM5Ny44MzQgMTg4LjQ0IDM5NS44NTQgMTg4LjkyQzM5Ny44MDQgMTg5LjI4IDM5OS4xODQgMTkwLjAzIDM5OS45OTQgMTkxLjE3QzQwMC44MzQgMTkyLjI4IDQwMS4zMjkgMTkzLjk0NSA0MDEuNDc5IDE5Ni4xNjVDNDAxLjQ3OSAxOTYuMjI1IDQwMS40OTQgMTk2LjYzIDQwMS41MjQgMTk3LjM4QzQwMS41NTQgMTk4LjEzIDQwMS41ODQgMTk4Ljc3NSA0MDEuNjE0IDE5OS4zMTVDNDAxLjY3NCAxOTkuODU1IDQwMS43NDkgMjAwLjUgNDAxLjgzOSAyMDEuMjVDNDAxLjk1OSAyMDIgNDAyLjEwOSAyMDIuNjQ1IDQwMi4yODkgMjAzLjE4NUM0MDIuNDk5IDIwMy43MjUgNDAyLjczOSAyMDQuMTMgNDAzLjAwOSAyMDQuNEgzOTkuNTQ0QzM5OS4yNzQgMjA0LjA3IDM5OS4wNzkgMjAzLjQ4NSAzOTguOTU5IDIwMi42NDVDMzk4LjgzOSAyMDEuODA1IDM5OC43NDkgMjAwLjcyNSAzOTguNjg5IDE5OS40MDVDMzk4LjYyOSAxOTguMDg1IDM5OC41OTkgMTk3LjM4IDM5OC41OTkgMTk3LjI5QzM5OC4zODkgMTk0LjM4IDM5Ny42ODQgMTkyLjQ2IDM5Ni40ODQgMTkxLjUzQzM5NS4yODQgMTkwLjU3IDM5My4xNTQgMTkwLjA5IDM5MC4wOTQgMTkwLjA5SDM4MC42ODlWMjA0LjRIMzc3LjYyOVYxNzIuMzZaTTM4MC42ODkgMTc0Ljk3VjE4Ny42NkgzODkuNzM0QzM5MS4wNTQgMTg3LjY2IDM5Mi4xOTQgMTg3LjU4NSAzOTMuMTU0IDE4Ny40MzVDMzk0LjExNCAxODcuMjg1IDM5NS4wNzQgMTg3IDM5Ni4wMzQgMTg2LjU4QzM5Ny4wMjQgMTg2LjE2IDM5Ny43NzQgMTg1LjUgMzk4LjI4NCAxODQuNkMzOTguODI0IDE4My42NyAzOTkuMDk0IDE4Mi41MyAzOTkuMDk0IDE4MS4xOEMzOTkuMDk0IDE3Ny4wNCAzOTYuNDM5IDE3NC45NyAzOTEuMTI5IDE3NC45N0gzODAuNjg5WiIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNDM5Ljk1NCAxNzIuMzZINDUzLjY3OUM0NTYuNzY5IDE3Mi4zNiA0NTkuMjE0IDE3My4xNCA0NjEuMDE0IDE3NC43QzQ2Mi44NDQgMTc2LjIzIDQ2My43NTkgMTc4LjQ1IDQ2My43NTkgMTgxLjM2QzQ2My43NTkgMTg0LjQyIDQ2Mi44NDQgMTg2Ljc0NSA0NjEuMDE0IDE4OC4zMzVDNDU5LjE4NCAxODkuOTI1IDQ1Ni43MDkgMTkwLjcyIDQ1My41ODkgMTkwLjcySDQ0My4wMTRWMjA0LjRINDM5Ljk1NFYxNzIuMzZaTTQ0My4wMTQgMTc0Ljk3VjE4OC4xNTVINDUyLjczNEM0NTUuMTA0IDE4OC4xNTUgNDU3LjAyNCAxODcuNjMgNDU4LjQ5NCAxODYuNThDNDU5Ljk2NCAxODUuNSA0NjAuNjk5IDE4My44MzUgNDYwLjY5OSAxODEuNTg1QzQ2MC42OTkgMTc5LjM2NSA0NjAuMDI0IDE3Ny43MTUgNDU4LjY3NCAxNzYuNjM1QzQ1Ny4zMjQgMTc1LjUyNSA0NTUuNDQ5IDE3NC45NyA0NTMuMDQ5IDE3NC45N0g0NDMuMDE0WiIgZmlsbD0iIzIxMjEyMSIvPgo8L3N2Zz4K"

;
var $node = $node || {} ; $node[ "/my/portfolio/logo2.svg" ] = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjYgMTQwIiB3aWR0aD0iMzI2IiBoZWlnaHQ9IjE0MCI+Cgk8c3R5bGU+CgkJdHNwYW4geyB3aGl0ZS1zcGFjZTpwcmUgfQoJCS5zaHAwIHsgZmlsbDogIzAwMDAwMCB9IAoJPC9zdHlsZT4KCTxnIGlkPSJMYXllciI+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTE2NywtMTU2LjZjMjguOCwwLjIgMzAuOSwwLjQgMzcuNSwyLjVjMjMuMyw3LjcgNDEuMywyNC4zIDUwLjIsNDYuMWM1LjYsMTMuOSA1LjQsNi40IDUuMSwxODIuM2wtMC4zLDE2Mi4ybC0yLjMsN2MtNC42LDEzLjQgLTkuOSwyMi4zIC0xOS4yLDMxLjVjLTEyLjksMTIuOSAtMjQuMywxOS40IC0zOS4zLDIyLjZjLTExLjEsMi4yIC02NS40LDEuNiAtNzQuMSwtMC45Yy0xNy45LC01LjMgLTM2LjgsLTE5LjkgLTQ2LjIsLTM2Yy0yLC0zLjMgLTUsLTEwLjIgLTYuNywtMTUuMmwtMy4yLC05bC0wLjMsLTE2Mi4yYy0wLjMsLTE3NS45IC0wLjUsLTE2OC40IDUuMSwtMTgyLjNjMTAsLTI0LjcgMzIuOCwtNDMuNSA1OC41LC00OGMyLjYsLTAuNSAxOC40LC0wLjcgMzUuMiwtMC42ek0xNjcsLTE1NS41Yy0xNi4yLC0wLjIgLTMwLjgsLTAuMSAtMzIuNSwwLjJjLTEyLjYsMS45IC0yNy42LDguNCAtMzYuMiwxNS41Yy0xMi43LDEwLjUgLTIzLjIsMjYuMyAtMjcuMSw0MC44Yy0xLjYsNi4xIC0xLjcsMTcuNSAtMS43LDE3MGMwLDE4MS42IC0wLjUsMTY3LjggNi42LDE4Mi45YzMuMSw2LjggMTEuMSwxOC4yIDE1LjIsMjEuOGMxNC4zLDEyLjQgMjQuOCwxOC4xIDM4LjQsMjAuOGM2LjgsMS40IDEzLjIsMS42IDM4LDEuM2MyOS42LC0wLjMgMjkuOCwtMC40IDM3LjgsLTMuMmMxMS4yLC0zLjkgMTcuOSwtNy43IDI2LjIsLTE0LjljMTIuNCwtMTAuNiAyMC41LC0yMy4xIDI1LC0zOC4yYzEuNywtNS42IDEuOCwtMTYuMSAyLjEsLTE2N2MwLjMsLTE3MyAwLjQsLTE2OCAtNC44LC0xODEuN2MtNC40LC0xMS45IC0xNy40LC0yOC4yIC0yOC40LC0zNS44Yy01LjksLTQgLTE1LjMsLTguMyAtMjMuMSwtMTAuNWMtNSwtMS41IC0xMS4yLC0xLjggLTM1LjUsLTJ6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNzAuNSwxMi4zYzAuOSwxLjMgMiwxLjYgMy45LDEuMWMxLjYsLTAuNCAyLjYsLTAuMiAyLjYsMC41YzAsMC42IC0wLjYsMS4xIC0xLjIsMS4yYy0wLjcsMCAwLjIsMC43IDIsMS41YzIuNiwxLjIgMy4yLDEuOSAyLjcsMy41Yy0wLjQsMS4xIC0wLjIsMi42IDAuNSwzLjRjMC44LDEgMC44LDEuNSAwLDJjLTAuNywwLjQgLTAuOSwxLjcgLTAuNiwzYzAuNSwxLjkgMC4xLDIuNCAtMi43LDNjLTEuNywwLjQgLTIuNiwwLjkgLTEuOSwxLjJjMi40LDAuOSAxLjEsMi4zIC0yLDIuMWMtMi4yLC0wLjIgLTMuMiwwLjEgLTMsMC45YzAuMywxLjkgLTEuNSwxLjYgLTIuNiwtMC4zYy0wLjYsLTEuMSAtMS43LC0xLjUgLTMuMSwtMS4xYy0xLjQsMC4zIC0yLjEsMCAtMi4xLC0wLjljMCwtMC44IC0xLjIsLTEuOSAtMi43LC0yLjVjLTIuNSwtMSAtMi42LC0xLjIgLTEuMSwtMi4yYzEuNSwtMSAxLjUsLTEuMiAtMC40LC0yLjljLTIuMSwtMS44IC0yLjEsLTEuOSAtMC4zLC0zLjJjMS42LC0xLjIgMS43LC0xLjYgMC42LC0zYy0xLjEsLTEuMyAtMSwtMS43IDEuMywtMi42YzEuNCwtMC41IDIuNSwtMS41IDIuNCwtMi4yYy0wLjIsLTAuOSAwLjYsLTEuMiAyLjMsLTFjMS44LDAuMiAyLjksLTAuMyAzLjQsLTEuNWMwLjYsLTEuNyAwLjcsLTEuNyAyLDB6TTE2NC45LDI2LjRjMS4xLDIuOCA0LjYsMy41IDguMiwxLjZjMi4zLC0xLjMgMi41LC01LjMgMC4zLC03LjRjLTQsLTQuMSAtMTAuNSwwLjQgLTguNSw1Ljh6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNjcuNCwyMi41Yy0wLjksMi4zIDAuMyw0LjUgMi42LDQuNWMxLjIsMCAxLjksLTAuNCAxLjYsLTAuOWMtMC40LC0wLjUgMCwtMS4xIDAuNiwtMS40YzEsLTAuMyAxLC0wLjcgLTAuMSwtMmMtMS43LC0yLjEgLTQsLTIuMiAtNC43LC0wLjJ6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNTQuNSwzMS41YzEuOSwwIDMuNSwwLjMgMy41LDAuN2MwLDAuNCAwLjcsMC44IDEuNSwwLjhjMC44LDAgMS41LDAuNyAxLjUsMS41YzAsMC44IDAuNCwxLjUgMC44LDEuNWMwLjksMCAwLjgsNC43IC0wLjEsNS43Yy0wLjQsMC4zIC0wLjcsMS41IC0wLjcsMi42YzAsMS4zIC0wLjUsMS43IC0xLjUsMS4zYy0wLjgsLTAuMyAtMS44LDAgLTIuMiwwLjdjLTAuOSwxLjMgLTYuNSwxLjggLTUuNywwLjVjMC4zLC0wLjQgLTAuNCwtMC44IC0xLjUsLTAuOGMtMS40LDAgLTIuMSwtMC42IC0yLjEsLTEuOGMwLC0xIC0wLjMsLTIuMiAtMC43LC0yLjVjLTAuOSwtMSAtMSwtNS43IC0wLjEsLTUuN2MwLjQsMCAwLjgsLTAuNyAwLjgsLTEuNWMwLC0wLjggMC43LC0xLjUgMS41LC0xLjVjMC44LDAgMS41LC0wLjMgMS41LC0wLjhjMCwtMC40IDEuNiwtMC43IDMuNSwtMC43ek0xNTQuNywzNi4yYy0yLjksLTAuNCAtNC4xLDEuMiAtMy41LDQuNWMwLjIsMS4zIDEuMiwxLjggMy4zLDEuOGMyLjcsMCAzLC0wLjMgMywtM2MwLC0yLjUgLTAuNCwtMyAtMi44LC0zLjN6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNTMuMywzOC42Yy0wLjksMC45IC0wLjgsMS40IDAuNCwxLjhjMi4xLDAuOSAzLjUsLTAuNiAxLjksLTJjLTAuOCwtMC44IC0xLjUsLTAuNyAtMi4zLDAuMnoiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTExNC43LDUxLjhjLTMsMC4zIC00LDAuOSAtNC44LDIuOGMtMSwyLjcgLTAuMyw3IDEuMyw4YzAuNSwwLjMgNC4xLDAuOSA3LjksMS4zYzMuOCwwLjMgNy4xLDEgNy4yLDEuNmMwLjMsMS40IC05LjMsMS45IC0xMC42LDAuNmMtMC42LC0wLjYgLTIuNCwtMS4xIC0zLjksLTEuMWMtMy4yLDAgLTMuNywyIC0xLjIsNC40YzEuOSwyIDE4LjMsMi4zIDIwLjIsMC40YzEuNiwtMS42IDEuNSwtOC41IDAsLTkuNGMtMC43LC0wLjUgLTQuNCwtMS4xIC04LjIsLTEuNGMtOC44LC0wLjYgLTEwLjUsLTMgLTIuMiwtM2MzLjEsMCA1LjYsMC40IDUuNiwxYzAsMC41IDEuNCwxIDMsMWMzLjIsMCAzLjksLTEuNSAxLjgsLTQuMmMtMS40LC0xLjYgLTkuMiwtMi42IC0xNi4xLC0yeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNODEsNTQuNWMwLDIuMyAwLjQsMi41IDQuNSwyLjVoNC41djd2N2gzaDN2LTd2LTdoNGMzLjYsMCA0LC0wLjMgNCwtMi41di0yLjVoLTExLjVoLTExLjV6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xMzguMiw1My4yYy0wLjcsMC43IC0xLjIsNC4xIC0xLjIsOC41YzAsOC44IDAuNiw5LjMgMTEuNSw5LjNjOC44LDAgMTEuNSwtMS4xIDExLjUsLTQuNWMwLC0yLjEgLTAuNSwtMi41IC0zLC0yLjVjLTEuNiwwIC0zLDAuNCAtMywxYzAsMC41IC0yLjQsMSAtNS40LDFjLTUuNSwwIC02LjUsLTAuOSAtNi42LC01LjdjMCwtMy44IDguMywtNS45IDExLjQsLTIuOGMwLjgsMC44IDIuNiwxLjUgNCwxLjVjMiwwIDIuNiwtMC41IDIuNiwtMi4zYzAsLTEuMyAtMC41LC0yLjggLTEuMiwtMy41Yy0xLjYsLTEuNiAtMTksLTEuNiAtMjAuNiwweiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTc3LjMsNTJjNi43LDAgMTAuNywwLjQgMTEuNSwxLjJjMC43LDAuNyAxLjIsNC4xIDEuMiw4LjVjMCw4LjkgLTAuNSw5LjMgLTEyLjUsOS4zYy0xMS44LDAgLTEyLjUsLTAuNSAtMTIuNSwtOC42YzAsLTMuNiAwLjUsLTcuNCAxLC04LjVjMSwtMS43IDIuMiwtMS45IDExLjMsLTEuOXpNMTcyLjMsNTYuN2MtMC44LDAuMyAtMS4zLDIuMyAtMS4zLDQuOXY0LjRoNi41YzMuNiwwIDYuNSwtMC4zIDYuNiwtMC44YzAuNiwtNC41IDAuNCwtNi42IC0wLjgsLTcuOGMtMS40LC0xLjMgLTguNCwtMS44IC0xMSwtMC43eiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTk1LDUyaDEwLjNjNi43LDAgMTAuNywwLjQgMTEuNSwxLjJjMS42LDEuNiAxLjUsNyAwLDguN2MtMSwxLjEgLTEsMS40IDAsMS44YzAuNiwwLjMgMS4yLDIgMS4yLDMuOWMwLDMuMSAtMC4zLDMuNCAtMywzLjRjLTIuNSwwIC0zLC0wLjQgLTMsLTIuNWMwLC0yLjQgLTAuMywtMi41IC01LjUsLTIuNWMtNS4yLDAgLTUuNSwwLjEgLTUuNSwyLjVjMCwyLjEgLTAuNSwyLjUgLTMsMi41aC0zek0yMDYuNiw1N2MtNSwwIC01LjYsMC4yIC01LjYsMi4xYzAsMS44IDAuNSwyIDUuMiwxLjdjNC4xLC0wLjIgNS40LC0wLjcgNS42LC0yLjFjMC4zLC0xLjQgLTAuNSwtMS43IC01LjIsLTEuN3oiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTIyNCw1MmgxMC41YzExLjYsMCAxMi41LDAuNSAxMi41LDdjMCw2LjEgLTEuMiw3IC05LjUsN2MtNy4zLDAgLTcuNSwwLjEgLTcuNSwyLjVjMCwyLjEgLTAuNSwyLjUgLTMsMi41aC0zek0yMzUuNSw1N2MtNC44LDAgLTUuNSwwLjIgLTUuNSwyYzAsMS44IDAuNywyIDUuNSwyYzQuOCwwIDUuNSwtMC4yIDUuNSwtMmMwLC0xLjggLTAuNywtMiAtNS41LC0yeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTEyLjgsNzMuMmMxLjksMC4yIDIuNywwLjkgMi43LDIuM2MwLDEuNCAtMC44LDIuMSAtMi43LDIuM2MtMi40LDAuMyAtMi44LDAgLTIuOCwtMi4zYzAsLTIuMyAwLjQsLTIuNiAyLjgsLTIuM3pNMTExLjcsNzQuN2MtMS4yLDEuMSAtMC44LDIuMyAwLjgsMi4zYzAuOCwwIDEuNSwtMC43IDEuNSwtMS41YzAsLTEuNiAtMS4yLC0yIC0yLjMsLTAuOHoiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTExNyw3NS41YzAsMi4xIDAuNSwyLjUgMi44LDIuNGMyLjMsMCAyLjQsLTAuMSAwLjcsLTAuOGwtMiwtMC44bDIsLTAuNWwyLC0wLjZsLTIsLTAuMmwtMiwtMC4xbDIsLTAuOWMxLjgsLTAuOCAxLjcsLTAuOSAtMC43LC0wLjljLTIuMywtMC4xIC0yLjgsMC4zIC0yLjgsMi40eiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTI0LDczLjdjLTAuMSw0LjEgMy4yLDUuNyA1LDIuNGMxLjMsLTIuNSAxLjMsLTMuMSAwLC0zLjFjLTAuNSwwIC0xLDAuNyAtMSwxLjVjMCwyIC0xLDEuOSAtMi42LC0wLjNjLTAuNywtMC45IC0xLjQsLTEuMiAtMS40LC0wLjV6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xMzEsNzUuNWMwLDIuMSAwLjUsMi41IDIuOCwyLjRsMi43LC0wLjFsLTIuNSwtMC43bC0yLjUsLTAuOGwyLjUsLTAuNWwyLjUsLTAuNWwtMi41LC0wLjNsLTIuNSwtMC4ybDIuNSwtMC44bDIuNSwtMC44bC0yLjcsLTAuMWMtMi4zLC0wLjEgLTIuOCwwLjMgLTIuOCwyLjR6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xMzcsNzUuNWMwLDIuMSAwLjUsMi41IDIuOCwyLjRjMS42LC0wLjEgMiwtMC4zIDEsLTAuNmMtMSwtMC4yIC0xLjgsLTEuMyAtMS44LC0yLjRjMCwtMSAtMC40LC0xLjkgLTEsLTEuOWMtMC41LDAgLTEsMS4xIC0xLDIuNXoiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTE0Niw3M2MyLjUsMCAzLDAuNCAzLDIuNWMwLDIuMSAtMC41LDIuNSAtMywyLjVjLTIuNSwwIC0zLC0wLjQgLTMsLTIuNWMwLC0yLjEgMC41LC0yLjUgMywtMi41ek0xNDQuNSw3NWMtMC4zLDAuNiAwLjEsMS4zIDEsMS42YzEuOSwwLjggMywwIDIsLTEuNWMtMC44LC0xLjQgLTIuMiwtMS40IC0zLC0wLjF6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNTIuNCw3M2M0LjcsMCA0LjUsMyAtMC4xLDQuNWMtMiwwLjUgLTIuMywwLjMgLTIuMywtMS45YzAsLTIuMSAwLjUsLTIuNiAyLjQsLTIuNnpNMTUzLDc0Yy0wLjUsMCAtMSwwLjQgLTEsMWMwLDAuNSAwLjUsMSAxLDFjMC42LDAgMSwtMC41IDEsLTFjMCwtMC42IC0wLjQsLTEgLTEsLTF6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNTcuMSw3NS43YzAsMi41IDAuMSwyLjYgMC45LDAuOGMwLjcsLTEuOCAwLjgsLTEuOSAxLjUsLTAuM2MwLjksMi4yIDIuNSwyLjMgMi41LDAuMmMwLC0wLjggLTAuNCwtMS4zIC0wLjksLTFjLTAuNSwwLjMgLTEuMSwtMC4xIC0xLjUsLTAuOWMtMC45LC0yLjUgLTIuNiwtMS43IC0yLjUsMS4yeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTYyLjQsNzQuNmMwLjMsMC45IDAuNiwyIDAuNiwyLjVjMCwwLjUgMC41LDAuOSAxLDAuOWMwLjYsMCAxLC0xLjEgMSwtMi41YzAsLTEuNiAtMC42LC0yLjUgLTEuNiwtMi41Yy0xLjEsMCAtMS40LDAuNSAtMSwxLjZ6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0xNjYsNzUuNWMwLDIuMSAwLjUsMi41IDIuOCwyLjRjMi4zLDAgMi40LC0wLjEgMC43LC0wLjhsLTIsLTAuOGwyLC0wLjVsMiwtMC42bC0yLC0wLjJsLTIsLTAuMWwyLC0wLjljMS44LC0wLjggMS43LC0wLjkgLTAuNywtMC45Yy0yLjMsLTAuMSAtMi44LDAuMyAtMi44LDIuNHoiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTE3My4xLDc1LjdjMCwyLjQgMC4yLDIuNSAwLjgsMC45YzAuNywtMS44IDAuOCwtMS44IDEuNCwtMC4zYzEsMi43IDMuNywyLjEgMy43LC0wLjhjMCwtMS40IC0wLjUsLTIuNSAtMS4xLC0yLjVjLTAuNiwwIC0wLjksMC43IC0wLjUsMS41YzAuMywwLjggMC4xLDEuNSAtMC4zLDEuNWMtMC41LDAgLTEuMSwtMC43IC0xLjUsLTEuNWMtMC45LC0yLjUgLTIuNiwtMS43IC0yLjUsMS4yeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTgwLjgsNzMuN2MwLjYsMC4yIDEuMiwxLjMgMS4yLDIuNGMwLDEgMC41LDEuOSAxLDEuOWMwLjYsMCAxLC0wLjkgMSwtMS45YzAsLTEuMSAwLjYsLTIuMiAxLjMsLTIuNGMwLjYsLTAuMyAtMC40LC0wLjUgLTIuMywtMC41Yy0xLjksMCAtMi45LDAuMiAtMi4yLDAuNXoiIC8+CgkJPHBhdGggaWQ9IkxheWVyIiBjbGFzcz0ic2hwMCIgZD0iTTE4OS42LDczLjhjMC43LDAuNCAxLjMsMS41IDEuNSwyLjRjMC4zLDEuNSAwLjYsMS4zIDEuNiwtMC43YzEsLTIuMyAwLjksLTIuNSAtMS41LC0yLjVjLTEuNSwwIC0yLjIsMC40IC0xLjYsMC44eiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMTk2LDc1LjVjMCwyLjEgMC41LDIuNSAyLjgsMi40bDIuNywtMC4xbC0yLjUsLTAuN2wtMi41LC0wLjhsMi41LC0wLjVsMi41LC0wLjVsLTIuNSwtMC4zbC0yLjUsLTAuMmwyLjUsLTAuOGwyLjUsLTAuOGwtMi43LC0wLjFjLTIuMywtMC4xIC0yLjgsMC4zIC0yLjgsMi40eiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMjAzLjMsNzQuN2MtMC4zLDEgLTAuNywyIC0wLjksMi4zYy0wLjEsMC40IDEuMiwwLjYgMy4xLDAuNmMzLjEsMCAzLjIsLTAuMiAyLjIsLTIuM2MtMS4yLC0yLjcgLTMuNSwtMyAtNC40LC0wLjZ6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0yMTAuMSw3NS43YzAsMi41IDAuMSwyLjYgMC45LDAuOGMwLjcsLTEuOCAwLjgsLTEuOSAxLjUsLTAuM2MwLjksMi4yIDIuNSwyLjMgMi41LDAuMmMwLC0wLjggLTAuNCwtMS4zIC0wLjksLTFjLTAuNSwwLjMgLTEuMSwtMC4xIC0xLjUsLTAuOWMtMC45LC0yLjUgLTIuNiwtMS43IC0yLjUsMS4yeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMjE1LjMsNzQuNGMwLjQsMSAwLjcsMi4yIDAuNywyLjdjMCwwLjUgMC41LDAuOSAxLjEsMC45YzEuNSwwIDAuNywtNC4zIC0xLC00LjhjLTEsLTAuMyAtMS4yLDAgLTAuOCwxLjJ6IiAvPgoJCTxwYXRoIGlkPSJMYXllciIgY2xhc3M9InNocDAiIGQ9Ik0yMy40LDQ3LjVjLTEuMywzLjMgMC40LDQuNSA2LDQuNWM4LjYsMCA4LjYsLTAuMSA4LjYsMTAuMXY4LjloNWg0LjlsMC4zLC05LjNsMC4zLC05LjJsNi44LC0wLjNjNi44LC0wLjMgNi44LC0wLjMgNi41LC0zbC0wLjMsLTIuN2wtMTguOCwtMC4zYy0xNiwtMC4yIC0xOC44LDAgLTE5LjMsMS4zeiIgLz4KCQk8cGF0aCBpZD0iTGF5ZXIiIGNsYXNzPSJzaHAwIiBkPSJNMjk5LjYsNDdjMy44LDEuNSA1LjMsMy45IDUuMyw4LjVjMCw3LjcgLTMuNyw5LjUgLTE5LjEsOS41aC05Ljh2M2MwLDIuOSAtMC4xLDMgLTUsM2gtNXYtMTEuOWMwLC04LjYgMC4zLC0xMi4xIDEuMywtMTIuNGMyLjQsLTEgMjkuNiwtMC43IDMyLjMsMC4zek0yODIuOCw1MmMtNi4xLDAgLTcuMywwLjkgLTYuNiw0LjdjMC40LDIuMSA1LjUsMi44IDEzLjYsMS44YzQuNiwtMC42IDUuMiwtMC45IDUuMiwtMi45YzAsLTEuOCAtMC43LC0yLjUgLTMuMSwtM2MtMS43LC0wLjMgLTUuOCwtMC42IC05LjEsLTAuNnoiIC8+CgkJPHRleHQgaWQ9IiAiIHN0eWxlPSJ0cmFuc2Zvcm06IG1hdHJpeCgxLDAsMCwxLDk5LDEpIiA+CgkJPC90ZXh0PgoJPC9nPgo8L3N2Zz4="

;
"use strict";
var $;
(function ($) {
    $.$mol_style_attach("my/portfolio/portfolio.view.css", "[my_portfolio_scroll] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tpadding: .5rem;\n}\n\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\n@media (prefers-color-scheme: light) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 99% );\n\t\t--mol_theme_hover: rgba( 0 , 0 , 0 , .05 );\n\t\t--mol_theme_current: hsl( 210 , 100% , 80% );\n\t\t--mol_theme_text: rgba( 0 , 0 , 0 , .9 );\n\t\t--mol_theme_control: hsl(267, 45%, 35%,0.5);\n\t\t--mol_theme_shade: rgba( 0 , 0 , 0 , .5 );\n\t\t--mol_theme_line: rgba( 220 , 220 , 220 , 1 );\n\t\t--mol_theme_focus: hsla( 0 , 60% , 50% , 0.75 );\n\t\t--mol_theme_field: white;\n\t}\n}\n\n@media (prefers-color-scheme: dark) {\n\t[mol_theme=\"$mol_theme_auto\"] {\n\t\t--mol_theme_back: hsl( 210 , 50% , 10% );\n\t\t--mol_theme_hover: #333;\n\t\t--mol_theme_current: hsl( 210 , 100% , 20% );\n\t\t--mol_theme_text: rgba( 255 , 255 , 255 , .8 );\n\t\t--mol_theme_control: hsl(267, 45%, 35%);\n\t\t--mol_theme_shade: rgb(43, 17, 64);\n\t\t--mol_theme_line: rgba( 50 , 50 , 50 , 1 );\n\t\t--mol_theme_focus: rgba( 204 , 68 , 50 , .75 );\n\t\t--mol_theme_field: black;\n\t}\n}\n\n[my_portfolio] {\n\tdisplay: flex;\n\tbackground: var(--mol_theme_field);\n}\n\n[my_portfolio_app] {\n\twidth: 100vw;\n}\n[my_portfolio_page_head]{\n\tdisplay: flex;\n\tjustify-content: start;\n\tbackground: #553282;\n}\n[my_portfolio_app]{\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 1 1 26rem;\n\tmargin: 0;\n\theight: 15.5rem;\n\tcursor: pointer;\n}\n[my_portfolio_image]{\n\tbox-shadow: none;\n\tmax-width: 15vh;\n\t\n}\n[my_portfolio_app_title]{\n\tcolor: #553282;\n}\n\n[my_portfolio_app]{\n\tmargin: 10px;\n    -webkit-box-shadow: 8px 0px 20px -2px rgb(85, 39, 97);\n    -moz-box-shadow: 8px 0px 20px -2px rgb(85, 39, 97);\n    box-shadow: 8px 0px 20px -2px var(--mol_theme_shade);\n}\n[my_portfolio_app_demo]{\n\tpointer-events: none;\n\tbox-shadow: 0 0 0 2px var(--mol_theme_line);\n\twidth: 200%;\n\theight: 26rem;\n\ttransform: translate( -25% , -25% ) scale( .5 );\n\tbackground-size: cover;\n}\n");
})($ || ($ = {}));
//portfolio.view.css.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $.$mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return Object.assign(Object.assign({}, super.some()), { a: 1 });
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//attributes.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $.$mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//binding.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $.$mol_view {
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
        outer_width(v) {
            return this.Test().width(v);
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $.$mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $.$mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//binding_right.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $.$mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//simple.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $.$mol_view {
        Page(index) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(index);
            return obj;
        }
        page(index) {
            return null;
        }
    }
    __decorate([
        $.$mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $.$mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//subcomponent.view.tree.js.map
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $.$mol_object2 {
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree(Object.assign({ baseUri: this.baseUri, row: this.row, col: this.col, length: this.length }, config));
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = Object.assign(Object.assign({}, json), { name, message, stack });
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $.$mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    __decorate([
        $.$mol_deprecated('Use $mol_tree:hack')
    ], $mol_tree.prototype, "transform", null);
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//tree.js.map
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//tree.js.map

//# sourceMappingURL=web.js.map
