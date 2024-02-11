var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/main.ts
import { bootstrapApplication } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_platform-browser.js?v=43277597";

// src/app/app.config.ts
import { provideStore } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@ngrx_store.js?v=43277597";
import { provideRouter } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import { provideStoreDevtools } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@ngrx_store-devtools.js?v=43277597";
import { isDevMode } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { provideAnimations } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_platform-browser_animations.js?v=43277597";
import { provideHttpClient, withInterceptorsFromDi } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";

// src/app/screens/login/login.component.ts
import { Store } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@ngrx_store.js?v=43277597";
import { CardModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_card.js?v=43277597";
import { ButtonModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { Component, inject } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { InputTextModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import { ReactiveFormsModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";
import { Validators } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";

// src/app/state/actions/login.actions.ts
import { createAction, props } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@ngrx_store.js?v=43277597";
var setUserDataAction = createAction("[Login] Set User", props());

// src/app/screens/login/login.component.ts
import * as i02 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i12 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";

// src/app/api/index.ts
var apiUrl = "http://localhost:3000";

// src/app/api/login/login.service.ts
import { Injectable } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i0 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i1 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";
var _LoginService = class _LoginService {
  constructor(http) {
    this.http = http;
  }
  createPost(form) {
    return this.http.post(`${apiUrl}/login`, form);
  }
};
_LoginService.\u0275fac = function LoginService_Factory(t) {
  return new (t || _LoginService)(i0.\u0275\u0275inject(i1.HttpClient));
};
_LoginService.\u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _LoginService, factory: _LoginService.\u0275fac, providedIn: "root" });
var LoginService = _LoginService;

// src/app/screens/login/login.component.ts
import * as i3 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import * as i4 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i5 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import * as i6 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_card.js?v=43277597";
var _LoginComponent = class _LoginComponent {
  constructor(fb, loginService, router) {
    this.fb = fb;
    this.loginService = loginService;
    this.router = router;
    this.store = inject(Store);
    this.loginForm = this.fb.group({
      correo: ["demo@gmail.com", Validators.required],
      contrasena: ["Continental321", Validators.required]
    });
  }
  onSubmitLogin() {
    this.loginForm.disable();
    this.loginService.createPost(this.loginForm.value).subscribe({
      next: (response) => this.onSuccessSubmitLogin(response),
      error: (err) => this.onErrorSubmitLogin(err)
    });
  }
  onSuccessSubmitLogin(response) {
    this.store.dispatch(setUserDataAction({ user: demoUserData }));
    localStorage.setItem("continental-token", response.token);
    this.router.navigate(["/users"]);
  }
  onErrorSubmitLogin(error) {
    this.loginForm.enable();
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(t) {
  return new (t || _LoginComponent)(i02.\u0275\u0275directiveInject(i12.FormBuilder), i02.\u0275\u0275directiveInject(LoginService), i02.\u0275\u0275directiveInject(i3.Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [i02.\u0275\u0275StandaloneFeature], decls: 15, vars: 1, consts: [[1, "login-background"], [1, "login-background-padding"], [1, "grid"], [1, "hidden", "md:flex", "md:col-6"], [1, "logo-container"], ["src", "/assets/u-continental.svg", "alt", "", 1, "login-logo"], [1, "col-12", "md:col-6"], [1, "grid", "v-flex-justify-center-align-center"], [1, "col-12", "lg:col-8", "p-0"], [1, "v-flex", "p-0", 3, "formGroup", "ngSubmit"], [1, "title-color", "align-self-center"], ["pInputText", "", "type", "text", "placeholder", "Correo", "formControlName", "correo", 1, "p-inputtext-sm"], ["pInputText", "", "type", "password", "placeholder", "Contrase\xF1a", "formControlName", "contrasena", 1, "p-inputtext-sm"], ["label", "Iniciar Sesi\xF3n", "size", "small", "type", "submit", 1, "align-self-center"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
    i02.\u0275\u0275element(5, "img", 5);
    i02.\u0275\u0275elementEnd()();
    i02.\u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "p-card", 8)(9, "form", 9);
    i02.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
      return ctx.onSubmitLogin();
    });
    i02.\u0275\u0275elementStart(10, "h2", 10);
    i02.\u0275\u0275text(11, "Iniciar Sesi\xF3n");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(12, "input", 11)(13, "input", 12)(14, "p-button", 13);
    i02.\u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    i02.\u0275\u0275advance(9);
    i02.\u0275\u0275property("formGroup", ctx.loginForm);
  }
}, dependencies: [ButtonModule, i4.Button, InputTextModule, i5.InputText, CardModule, i6.Card, ReactiveFormsModule, i12.\u0275NgNoValidate, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.FormGroupDirective, i12.FormControlName], styles: ["\n\n.login-background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bluegray-500);\n}\n.login-background-padding[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n.login-logo[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
var demoUserData = {
  id: "1",
  nombre: "Demo",
  apellido: "Demo demo",
  correo: "demo@gmail.com"
};

// src/app/screens/users/users.component.ts
import { Component as Component4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";

// src/app/components/navigation-container/navigation-container.component.ts
import { Component as Component2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { ButtonModule as ButtonModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i03 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i13 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import * as i2 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
function NavigationContainerComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "p-button", 9);
    i03.\u0275\u0275listener("onClick", function NavigationContainerComponent_For_10_Template_p_button_onClick_0_listener() {
      const restoredCtx = i03.\u0275\u0275restoreView(_r7);
      const route_r1 = restoredCtx.$implicit;
      const ctx_r6 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r6.redirectTo(route_r1.route));
    });
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const route_r1 = ctx.$implicit;
    i03.\u0275\u0275propertyInterpolate("label", route_r1.name);
    i03.\u0275\u0275propertyInterpolate("icon", route_r1.icon);
    i03.\u0275\u0275property("rounded", true);
  }
}
var _c0 = ["*"];
var _NavigationContainerComponent = class _NavigationContainerComponent {
  constructor(router) {
    this.router = router;
    this.routeList = [
      { name: "Usuarios", icon: "pi pi-users", route: "/users" },
      { name: "Programas", icon: "pi pi-book", route: "/programas" },
      { name: "Periodos", icon: "pi pi-calendar", route: "/periodos" },
      { name: "Roles", icon: "pi pi-list", route: "/roles" },
      { name: "Dise\xF1o de Curso", icon: "pi pi-pencil", route: "/solicitud-diseno-curso" },
      { name: "Producci\xF3n", icon: "pi pi-cog", route: "/produccion" }
    ];
  }
  redirectTo(route) {
    this.router.navigate([route]);
  }
};
_NavigationContainerComponent.\u0275fac = function NavigationContainerComponent_Factory(t) {
  return new (t || _NavigationContainerComponent)(i03.\u0275\u0275directiveInject(i13.Router));
};
_NavigationContainerComponent.\u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _NavigationContainerComponent, selectors: [["app-navigation-container"]], standalone: true, features: [i03.\u0275\u0275StandaloneFeature], ngContentSelectors: _c0, decls: 14, vars: 0, consts: [[1, "navigation-container"], [1, "top-bar"], [1, "c-white"], [1, "main-container"], [1, "sidebar-container"], [1, "sidebar-padding-container"], [2, "color", "var(--surface-600)"], [1, "main-content-container"], [1, "main-content-padding-container"], ["size", "small", "severity", "secondary", 3, "label", "icon", "rounded", "onClick"], ["size", "small", "severity", "secondary", 3, "label", "icon", "rounded"]], template: function NavigationContainerComponent_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275projectionDef();
    i03.\u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "h5", 2);
    i03.\u0275\u0275text(3, "CONTINENTAL");
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275elementStart(4, "div", 3)(5, "nav", 4)(6, "div", 5)(7, "h3", 6);
    i03.\u0275\u0275text(8, "Men\xFA");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275repeaterCreate(9, NavigationContainerComponent_For_10_Template, 1, 3, "p-button", 10, i03.\u0275\u0275repeaterTrackByIndex);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275elementStart(11, "main", 7)(12, "div", 8);
    i03.\u0275\u0275projection(13);
    i03.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    i03.\u0275\u0275advance(9);
    i03.\u0275\u0275repeater(ctx.routeList);
  }
}, dependencies: [ButtonModule2, i2.Button], styles: ["\n\n.navigation-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.top-bar[_ngcontent-%COMP%] {\n  height: 6vh;\n  background-color: var(--surface-600);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.main-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.sidebar-container[_ngcontent-%COMP%] {\n  min-height: 94vh;\n  width: 300px;\n  background-color: var(--surface-300);\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-padding-container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n}\n.main-content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 94vh;\n  overflow-y: auto;\n  background-color: var(--bluegray-50);\n}\n.main-content-padding-container[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n}\n/*# sourceMappingURL=navigation-container.component.css.map */"] });
var NavigationContainerComponent = _NavigationContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(NavigationContainerComponent, { className: "NavigationContainerComponent" });
})();

// src/app/dialogs/register-programa-dialog/register-programa.component-dialog.ts
import { DialogModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import { ButtonModule as ButtonModule3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { InputTextModule as InputTextModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import { Component as Component3, EventEmitter, Input, Output } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i04 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i14 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import * as i22 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import * as i32 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
var _c02 = () => ({ width: "600px" });
var _RegisterProgramaComponentDialog = class _RegisterProgramaComponentDialog {
  constructor() {
    this.isRegisterOpen = true;
    this.toggleOpenRegister = new EventEmitter();
  }
  closeRegisterDialog() {
    this.toggleOpenRegister.emit();
  }
};
_RegisterProgramaComponentDialog.\u0275fac = function RegisterProgramaComponentDialog_Factory(t) {
  return new (t || _RegisterProgramaComponentDialog)();
};
_RegisterProgramaComponentDialog.\u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _RegisterProgramaComponentDialog, selectors: [["app-register-programa-dialog"]], inputs: { isRegisterOpen: "isRegisterOpen" }, outputs: { toggleOpenRegister: "toggleOpenRegister" }, standalone: true, features: [i04.\u0275\u0275StandaloneFeature], decls: 6, vars: 6, consts: [["header", "Registrar Nuevo Programa", 1, "sm:w-12", 3, "visible", "modal", "closable"], [1, "v-flex", "mt-1"], ["type", "text", "placeholder", "Nombre del Programa", "pInputText", ""], [1, "h-flex"], ["label", "Cancelar", "size", "small", "severity", "secondary", 3, "onClick"], ["label", "Registrar", "size", "small"]], template: function RegisterProgramaComponentDialog_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "p-dialog", 0)(1, "div", 1);
    i04.\u0275\u0275element(2, "input", 2);
    i04.\u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
    i04.\u0275\u0275listener("onClick", function RegisterProgramaComponentDialog_Template_p_button_onClick_4_listener() {
      return ctx.closeRegisterDialog();
    });
    i04.\u0275\u0275elementEnd();
    i04.\u0275\u0275element(5, "p-button", 5);
    i04.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i04.\u0275\u0275styleMap(i04.\u0275\u0275pureFunction0(5, _c02));
    i04.\u0275\u0275property("visible", ctx.isRegisterOpen)("modal", true)("closable", false);
  }
}, dependencies: [DialogModule, i14.Dialog, InputTextModule2, i22.InputText, ButtonModule3, i32.Button], styles: ["\n\n/*# sourceMappingURL=register-programa.component-dialog.css.map */"] });
var RegisterProgramaComponentDialog = _RegisterProgramaComponentDialog;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(RegisterProgramaComponentDialog, { className: "RegisterProgramaComponentDialog" });
})();

// src/app/screens/users/users.component.ts
import * as i05 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i15 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import * as i23 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import * as i33 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i42 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
function UsersComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "tr")(1, "th");
    i05.\u0275\u0275text(2, "ID");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "th");
    i05.\u0275\u0275text(4, "NOMBRE");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(5, "th");
    i05.\u0275\u0275text(6, "APELLIDO");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(7, "th");
    i05.\u0275\u0275text(8, "CORREO");
    i05.\u0275\u0275elementEnd()();
  }
}
function UsersComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "tr")(1, "td");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "td");
    i05.\u0275\u0275text(4);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(5, "td");
    i05.\u0275\u0275text(6);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(7, "td");
    i05.\u0275\u0275text(8);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(user_r2.id);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(user_r2.nombre);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(user_r2.apellido);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(user_r2.correo);
  }
}
var _UsersComponent = class _UsersComponent {
  constructor(router) {
    this.router = router;
    this.userList = [
      { id: "1", nombre: "Juan", apellido: "Perez", correo: "" },
      { id: "2", nombre: "Maria", apellido: "Perez", correo: "" },
      { id: "3", nombre: "Jose", apellido: "Perez", correo: "" },
      { id: "4", nombre: "Pedro", apellido: "Perez", correo: "" },
      { id: "5", nombre: "Luis", apellido: "Perez", correo: "" },
      { id: "6", nombre: "Carlos", apellido: "Perez", correo: "" }
    ];
  }
  redirectToRegisterUser() {
    this.router.navigate(["/submit-user"]);
  }
};
_UsersComponent.\u0275fac = function UsersComponent_Factory(t) {
  return new (t || _UsersComponent)(i05.\u0275\u0275directiveInject(i15.Router));
};
_UsersComponent.\u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], standalone: true, features: [i05.\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "h-flex-justify-between"], [1, "title-color"], ["label", "Registrar Usuario", "icon", "pi pi-plus", "size", "small", 3, "onClick"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"]], template: function UsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i05.\u0275\u0275text(3, "Usuarios");
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(4, "p-button", 2);
    i05.\u0275\u0275listener("onClick", function UsersComponent_Template_p_button_onClick_4_listener() {
      return ctx.redirectToRegisterUser();
    });
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(5, "p-table", 3);
    i05.\u0275\u0275template(6, UsersComponent_ng_template_6_Template, 9, 0, "ng-template", 4)(7, UsersComponent_ng_template_7_Template, 9, 4, "ng-template", 5);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i05.\u0275\u0275advance(5);
    i05.\u0275\u0275property("value", ctx.userList);
  }
}, dependencies: [NavigationContainerComponent, TableModule, i23.Table, i33.PrimeTemplate, ButtonModule4, i42.Button], styles: ["\n\n/*# sourceMappingURL=users.component.css.map */"] });
var UsersComponent = _UsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent" });
})();

// src/app/screens/roles/roles.component.ts
import { Component as Component7 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule as TableModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule7 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";

// src/app/dialogs/register-rol-dialog/register-rol-dialog.component.ts
import { Component as Component5, EventEmitter as EventEmitter2, Input as Input2, Output as Output2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { DialogModule as DialogModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import { ButtonModule as ButtonModule5 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { InputTextModule as InputTextModule3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import * as i06 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i16 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import * as i24 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i34 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
var _c03 = () => ({ width: "600px" });
var _RegisterRolDialogComponent = class _RegisterRolDialogComponent {
  constructor() {
    this.isRegisterOpen = false;
    this.toggleOpenRegister = new EventEmitter2();
  }
  closeRegisterDialog() {
    this.toggleOpenRegister.emit();
  }
};
_RegisterRolDialogComponent.\u0275fac = function RegisterRolDialogComponent_Factory(t) {
  return new (t || _RegisterRolDialogComponent)();
};
_RegisterRolDialogComponent.\u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _RegisterRolDialogComponent, selectors: [["app-register-rol-dialog"]], inputs: { isRegisterOpen: "isRegisterOpen" }, outputs: { toggleOpenRegister: "toggleOpenRegister" }, standalone: true, features: [i06.\u0275\u0275StandaloneFeature], decls: 6, vars: 6, consts: [["header", "Registrar Nuevo Rol", 1, "sm:w-12", 3, "visible", "modal", "closable"], [1, "v-flex", "mt-1"], ["type", "text", "placeholder", "Nombre del Rol", "pInputText", ""], [1, "h-flex"], ["label", "Cancelar", "size", "small", "severity", "secondary", 3, "onClick"], ["label", "Registrar", "size", "small"]], template: function RegisterRolDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "p-dialog", 0)(1, "div", 1);
    i06.\u0275\u0275element(2, "input", 2);
    i06.\u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
    i06.\u0275\u0275listener("onClick", function RegisterRolDialogComponent_Template_p_button_onClick_4_listener() {
      return ctx.closeRegisterDialog();
    });
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(5, "p-button", 5);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i06.\u0275\u0275styleMap(i06.\u0275\u0275pureFunction0(5, _c03));
    i06.\u0275\u0275property("visible", ctx.isRegisterOpen)("modal", true)("closable", false);
  }
}, dependencies: [DialogModule2, i16.Dialog, ButtonModule5, i24.Button, InputTextModule3, i34.InputText], styles: ["\n\n/*# sourceMappingURL=register-rol-dialog.component.css.map */"] });
var RegisterRolDialogComponent = _RegisterRolDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(RegisterRolDialogComponent, { className: "RegisterRolDialogComponent" });
})();

// src/app/shared-dialogs/confirm-dialog/confirm-dialog.component.ts
import { ButtonModule as ButtonModule6 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { DialogModule as DialogModule3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import { Component as Component6, Input as Input3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i07 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i17 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import * as i25 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
var _ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor() {
    this.confirmDeletePayload = null;
  }
};
_ConfirmDialogComponent.\u0275fac = function ConfirmDialogComponent_Factory(t) {
  return new (t || _ConfirmDialogComponent)();
};
_ConfirmDialogComponent.\u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], inputs: { confirmDeletePayload: "confirmDeletePayload" }, standalone: true, features: [i07.\u0275\u0275StandaloneFeature], decls: 7, vars: 6, consts: [[3, "header", "visible", "modal", "closable"], [1, "v-flex"], [1, "w-12"], [1, "h-flex"], ["label", "Cancelar", "size", "small", "severity", "secondary", 3, "onClick"], ["size", "small", 3, "label", "onClick"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "p-dialog", 0)(1, "div", 1)(2, "p", 2);
    i07.\u0275\u0275text(3);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(4, "div", 3)(5, "p-button", 4);
    i07.\u0275\u0275listener("onClick", function ConfirmDialogComponent_Template_p_button_onClick_5_listener() {
      return ctx.confirmDeletePayload == null ? null : ctx.confirmDeletePayload.cancelAction();
    });
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(6, "p-button", 5);
    i07.\u0275\u0275listener("onClick", function ConfirmDialogComponent_Template_p_button_onClick_6_listener() {
      return ctx.confirmDeletePayload == null ? null : ctx.confirmDeletePayload.cancelAction();
    });
    i07.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    i07.\u0275\u0275property("header", ctx.confirmDeletePayload == null ? null : ctx.confirmDeletePayload.title)("visible", ctx.confirmDeletePayload !== null)("modal", true)("closable", false);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275textInterpolate(ctx.confirmDeletePayload == null ? null : ctx.confirmDeletePayload.message);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275property("label", ctx.confirmDeletePayload == null ? null : ctx.confirmDeletePayload.actionLabel);
  }
}, dependencies: [DialogModule3, i17.Dialog, ButtonModule6, i25.Button], styles: ["\n\n/*# sourceMappingURL=confirm-dialog.component.css.map */"] });
var ConfirmDialogComponent = _ConfirmDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent" });
})();

// src/app/screens/roles/roles.component.ts
import * as i09 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";

// src/app/api/roles/roles.service.ts
import { Injectable as Injectable2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i08 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i18 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";
var _RolesService = class _RolesService {
  constructor(http) {
    this.http = http;
  }
  postRol(data) {
    return this.http.post("/api/roles", data);
  }
};
_RolesService.\u0275fac = function RolesService_Factory(t) {
  return new (t || _RolesService)(i08.\u0275\u0275inject(i18.HttpClient));
};
_RolesService.\u0275prov = /* @__PURE__ */ i08.\u0275\u0275defineInjectable({ token: _RolesService, factory: _RolesService.\u0275fac, providedIn: "root" });
var RolesService = _RolesService;

// src/app/screens/roles/roles.component.ts
import * as i26 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import * as i35 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i43 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
function RolesComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i09.\u0275\u0275elementStart(0, "tr")(1, "th");
    i09.\u0275\u0275text(2, "ID");
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(3, "th");
    i09.\u0275\u0275text(4, "NOMBRE");
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(5, "th");
    i09.\u0275\u0275text(6, "DESCRIPCI\xD3N");
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(7, "th");
    i09.\u0275\u0275text(8, "ACCIONES");
    i09.\u0275\u0275elementEnd()();
  }
}
function RolesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i09.\u0275\u0275getCurrentView();
    i09.\u0275\u0275elementStart(0, "tr")(1, "td");
    i09.\u0275\u0275text(2);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(3, "td");
    i09.\u0275\u0275text(4);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(5, "td");
    i09.\u0275\u0275text(6);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(7, "td", 8)(8, "p-button", 9);
    i09.\u0275\u0275listener("onClick", function RolesComponent_ng_template_7_Template_p_button_onClick_8_listener() {
      i09.\u0275\u0275restoreView(_r4);
      const ctx_r3 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r3.toggleOpenRegister());
    });
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(9, "p-button", 10);
    i09.\u0275\u0275listener("onClick", function RolesComponent_ng_template_7_Template_p_button_onClick_9_listener() {
      i09.\u0275\u0275restoreView(_r4);
      const ctx_r5 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r5.toggleOpenDeleteConfirm());
    });
    i09.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(role_r2.id);
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(role_r2.name);
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(role_r2.description);
  }
}
var _RolesComponent = class _RolesComponent {
  constructor(rolesService) {
    this.rolesService = rolesService;
    this.isRegisterOpen = false;
    this.confirmDeletePayload = null;
    this.roleList = [
      { id: "1", name: "Admin", description: "Admin" },
      { id: "2", name: "User", description: "User" },
      { id: "3", name: "Guest", description: "Guest" }
    ];
  }
  toggleOpenRegister() {
    this.isRegisterOpen = !this.isRegisterOpen;
  }
  toggleOpenDeleteConfirm() {
    this.confirmDeletePayload = {
      title: "Eliminar programa",
      message: `\xBFEst\xE1s seguro de eliminar el rol`,
      actionLabel: "Eliminar",
      action: () => {
      },
      cancelAction: () => this.confirmDeletePayload = null
    };
  }
  submitRol() {
    this.rolesService.postRol({ description: "", name: "" }).subscribe({
      next: (response) => this.onSuccessSubmitRol(response.data),
      error: () => this.onErrorSubmitRol()
    });
  }
  onSuccessSubmitRol(data) {
  }
  onErrorSubmitRol() {
  }
};
_RolesComponent.\u0275fac = function RolesComponent_Factory(t) {
  return new (t || _RolesComponent)(i09.\u0275\u0275directiveInject(RolesService));
};
_RolesComponent.\u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], standalone: true, features: [i09.\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "h-flex-justify-between"], [1, "title-color"], ["size", "small", "icon", "pi pi-plus", "label", "Registrar Rol", 3, "onClick"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "confirmDeletePayload"], [3, "isRegisterOpen", "toggleOpenRegister"], [1, "h-flex"], ["icon", "pi pi-pencil", "size", "small", 3, "onClick"], ["icon", "pi pi-trash", "size", "small", 3, "onClick"]], template: function RolesComponent_Template(rf, ctx) {
  if (rf & 1) {
    i09.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i09.\u0275\u0275text(3, "Roles");
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(4, "p-button", 2);
    i09.\u0275\u0275listener("onClick", function RolesComponent_Template_p_button_onClick_4_listener() {
      return ctx.toggleOpenRegister();
    });
    i09.\u0275\u0275elementEnd()();
    i09.\u0275\u0275elementStart(5, "p-table", 3);
    i09.\u0275\u0275template(6, RolesComponent_ng_template_6_Template, 9, 0, "ng-template", 4)(7, RolesComponent_ng_template_7_Template, 10, 3, "ng-template", 5);
    i09.\u0275\u0275elementEnd()();
    i09.\u0275\u0275element(8, "app-confirm-dialog", 6);
    i09.\u0275\u0275elementStart(9, "app-register-rol-dialog", 7);
    i09.\u0275\u0275listener("toggleOpenRegister", function RolesComponent_Template_app_register_rol_dialog_toggleOpenRegister_9_listener() {
      return ctx.toggleOpenRegister();
    });
    i09.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i09.\u0275\u0275advance(5);
    i09.\u0275\u0275property("value", ctx.roleList);
    i09.\u0275\u0275advance(3);
    i09.\u0275\u0275property("confirmDeletePayload", ctx.confirmDeletePayload);
    i09.\u0275\u0275advance();
    i09.\u0275\u0275property("isRegisterOpen", ctx.isRegisterOpen);
  }
}, dependencies: [
  NavigationContainerComponent,
  TableModule2,
  i26.Table,
  i35.PrimeTemplate,
  ButtonModule7,
  i43.Button,
  RegisterRolDialogComponent,
  ConfirmDialogComponent
], styles: ["\n\n/*# sourceMappingURL=roles.component.css.map */"] });
var RolesComponent = _RolesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent" });
})();

// src/app/screens/produccion/produccion.component.ts
import { Component as Component8 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule as TableModule3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule8 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i010 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i19 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i27 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
function ProduccionComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "tr")(1, "th");
    i010.\u0275\u0275text(2, "PLAN");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(3, "th");
    i010.\u0275\u0275text(4, "EAP");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(5, "th");
    i010.\u0275\u0275text(6, "TIPO_ASIGNATURA");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(7, "th");
    i010.\u0275\u0275text(8, "FACULTAD");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(9, "th");
    i010.\u0275\u0275text(10, "MODALIDAD");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(11, "th");
    i010.\u0275\u0275text(12, "FORMATO P");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(13, "th");
    i010.\u0275\u0275text(14, "FORMATO_SP");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(15, "th");
    i010.\u0275\u0275text(16, "FORMATO_D");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(17, "th");
    i010.\u0275\u0275text(18, "TIPO_DISENO");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(19, "th");
    i010.\u0275\u0275text(20, "CICLO");
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(21, "th");
    i010.\u0275\u0275text(22, "DURACION_SEMANAS");
    i010.\u0275\u0275elementEnd()();
  }
}
function ProduccionComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "tr")(1, "td");
    i010.\u0275\u0275text(2);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(3, "td");
    i010.\u0275\u0275text(4);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(5, "td");
    i010.\u0275\u0275text(6);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(7, "td");
    i010.\u0275\u0275text(8);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(9, "td");
    i010.\u0275\u0275text(10);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(11, "td");
    i010.\u0275\u0275text(12);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(13, "td");
    i010.\u0275\u0275text(14);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(15, "td");
    i010.\u0275\u0275text(16);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(17, "td");
    i010.\u0275\u0275text(18);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(19, "td");
    i010.\u0275\u0275text(20);
    i010.\u0275\u0275elementEnd();
    i010.\u0275\u0275elementStart(21, "td");
    i010.\u0275\u0275text(22);
    i010.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.plan);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.eap);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.tipo_asignatura);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.facultad);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.modalidad);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.formato_p);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.formato_sp);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.formato_d);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.tipo_diseno);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.ciclo);
    i010.\u0275\u0275advance(2);
    i010.\u0275\u0275textInterpolate(user_r2.duracion_semanas);
  }
}
var _ProduccionComponent = class _ProduccionComponent {
  constructor() {
    this.productionList = [
      dummyElement,
      dummyElement,
      dummyElement
    ];
  }
};
_ProduccionComponent.\u0275fac = function ProduccionComponent_Factory(t) {
  return new (t || _ProduccionComponent)();
};
_ProduccionComponent.\u0275cmp = /* @__PURE__ */ i010.\u0275\u0275defineComponent({ type: _ProduccionComponent, selectors: [["app-produccion"]], standalone: true, features: [i010.\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [[1, "h-flex-justify-between"], [1, "title-color"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"]], template: function ProduccionComponent_Template(rf, ctx) {
  if (rf & 1) {
    i010.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i010.\u0275\u0275text(3, "Producci\xF3n");
    i010.\u0275\u0275elementEnd()();
    i010.\u0275\u0275elementStart(4, "p-table", 2);
    i010.\u0275\u0275template(5, ProduccionComponent_ng_template_5_Template, 23, 0, "ng-template", 3)(6, ProduccionComponent_ng_template_6_Template, 23, 11, "ng-template", 4);
    i010.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i010.\u0275\u0275advance(4);
    i010.\u0275\u0275property("value", ctx.productionList);
  }
}, dependencies: [NavigationContainerComponent, ButtonModule8, i19.PrimeTemplate, TableModule3, i27.Table], styles: ["\n\n/*# sourceMappingURL=produccion.component.css.map */"] });
var ProduccionComponent = _ProduccionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassDebugInfo(ProduccionComponent, { className: "ProduccionComponent" });
})();
var dummyElement = {
  plan: "Plan 1",
  eap: "EAP 1",
  tipo_asignatura: "Tipo Asignatura 1",
  facultad: "Facultad 1",
  modalidad: "Modalidad 1",
  formato_p: "Formato P 1",
  formato_sp: "Formato SP 1",
  formato_d: "Formato D 1",
  tipo_diseno: "Tipo Dise\xF1o 1",
  ciclo: "Ciclo 1",
  duracion_semanas: "Duraci\xF3n Semanas 1"
};

// src/app/screens/periodos-screen/periodos-screen.component.ts
import { Component as Component10 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule as TableModule4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule10 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";

// src/app/dialogs/register-periodo-dialog/register-periodo-dialog.component.ts
import { DialogModule as DialogModule4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import { ButtonModule as ButtonModule9 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { InputTextModule as InputTextModule4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import { Component as Component9, EventEmitter as EventEmitter3, Input as Input4, Output as Output3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i011 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i110 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dialog.js?v=43277597";
import * as i28 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i36 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
var _c04 = () => ({ width: "600px" });
var _RegisterPeriodoDialogComponent = class _RegisterPeriodoDialogComponent {
  constructor() {
    this.isRegisterOpen = false;
    this.toggleOpenRegister = new EventEmitter3();
  }
  closeRegister() {
    this.toggleOpenRegister.emit();
  }
};
_RegisterPeriodoDialogComponent.\u0275fac = function RegisterPeriodoDialogComponent_Factory(t) {
  return new (t || _RegisterPeriodoDialogComponent)();
};
_RegisterPeriodoDialogComponent.\u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _RegisterPeriodoDialogComponent, selectors: [["app-register-periodo-dialog"]], inputs: { isRegisterOpen: "isRegisterOpen" }, outputs: { toggleOpenRegister: "toggleOpenRegister" }, standalone: true, features: [i011.\u0275\u0275StandaloneFeature], decls: 6, vars: 6, consts: [["header", "Registrar Nuevo Periodo", 1, "sm:w-12", 3, "visible", "modal", "closable"], [1, "v-flex", "mt-1"], ["type", "text", "placeholder", "Nombre del Periodo", "pInputText", ""], [1, "h-flex"], ["label", "Cancelar", "size", "small", "severity", "secondary", 3, "onClick"], ["label", "Registrar", "size", "small"]], template: function RegisterPeriodoDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    i011.\u0275\u0275elementStart(0, "p-dialog", 0)(1, "div", 1);
    i011.\u0275\u0275element(2, "input", 2);
    i011.\u0275\u0275elementStart(3, "div", 3)(4, "p-button", 4);
    i011.\u0275\u0275listener("onClick", function RegisterPeriodoDialogComponent_Template_p_button_onClick_4_listener() {
      return ctx.closeRegister();
    });
    i011.\u0275\u0275elementEnd();
    i011.\u0275\u0275element(5, "p-button", 5);
    i011.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    i011.\u0275\u0275styleMap(i011.\u0275\u0275pureFunction0(5, _c04));
    i011.\u0275\u0275property("visible", ctx.isRegisterOpen)("modal", true)("closable", false);
  }
}, dependencies: [DialogModule4, i110.Dialog, ButtonModule9, i28.Button, InputTextModule4, i36.InputText], styles: ["\n\n/*# sourceMappingURL=register-periodo-dialog.component.css.map */"] });
var RegisterPeriodoDialogComponent = _RegisterPeriodoDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(RegisterPeriodoDialogComponent, { className: "RegisterPeriodoDialogComponent" });
})();

// src/app/screens/periodos-screen/periodos-screen.component.ts
import * as i012 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i111 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import * as i29 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i37 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
function PeriodosScreenComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i012.\u0275\u0275elementStart(0, "tr")(1, "th");
    i012.\u0275\u0275text(2, "ID");
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(3, "th");
    i012.\u0275\u0275text(4, "NOMBRE");
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(5, "th");
    i012.\u0275\u0275text(6, "ACCIONES");
    i012.\u0275\u0275elementEnd()();
  }
}
function PeriodosScreenComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i012.\u0275\u0275getCurrentView();
    i012.\u0275\u0275elementStart(0, "tr")(1, "td");
    i012.\u0275\u0275text(2);
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(3, "td");
    i012.\u0275\u0275text(4);
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(5, "td")(6, "div", 8)(7, "p-button", 9);
    i012.\u0275\u0275listener("onClick", function PeriodosScreenComponent_ng_template_7_Template_p_button_onClick_7_listener() {
      i012.\u0275\u0275restoreView(_r4);
      const ctx_r3 = i012.\u0275\u0275nextContext();
      return i012.\u0275\u0275resetView(ctx_r3.toggleOpenRegister());
    });
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(8, "p-button", 10);
    i012.\u0275\u0275listener("onClick", function PeriodosScreenComponent_ng_template_7_Template_p_button_onClick_8_listener() {
      i012.\u0275\u0275restoreView(_r4);
      const ctx_r5 = i012.\u0275\u0275nextContext();
      return i012.\u0275\u0275resetView(ctx_r5.toggleOpenDelete());
    });
    i012.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const periodo_r2 = ctx.$implicit;
    i012.\u0275\u0275advance(2);
    i012.\u0275\u0275textInterpolate(periodo_r2.id);
    i012.\u0275\u0275advance(2);
    i012.\u0275\u0275textInterpolate(periodo_r2.nombre);
  }
}
var _PeriodosScreenComponent = class _PeriodosScreenComponent {
  constructor() {
    this.isRegisterOpen = false;
    this.confirmDeletePayload = null;
    this.periodosList = [
      { id: "1", nombre: "Periodo 1" },
      { id: "2", nombre: "Periodo 2" },
      { id: "3", nombre: "Periodo 3" },
      { id: "4", nombre: "Periodo 4" },
      { id: "5", nombre: "Periodo 5" }
    ];
  }
  toggleOpenRegister() {
    this.isRegisterOpen = !this.isRegisterOpen;
  }
  toggleOpenDelete() {
    this.confirmDeletePayload = {
      title: "Eliminar periodo",
      message: `\xBFEst\xE1s seguro de eliminar el periodo`,
      actionLabel: "Eliminar",
      action: () => {
      },
      cancelAction: () => this.confirmDeletePayload = null
    };
  }
};
_PeriodosScreenComponent.\u0275fac = function PeriodosScreenComponent_Factory(t) {
  return new (t || _PeriodosScreenComponent)();
};
_PeriodosScreenComponent.\u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _PeriodosScreenComponent, selectors: [["app-periodos-screen"]], standalone: true, features: [i012.\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "h-flex-justify-between"], [1, "title-color"], ["label", "Registar Periodo", "icon", "pi pi-plus", "size", "small", 3, "onClick"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "confirmDeletePayload"], [3, "isRegisterOpen", "toggleOpenRegister"], [1, "h-flex"], ["icon", "pi pi-pencil", "size", "small", 3, "onClick"], ["icon", "pi pi-trash", "size", "small", 3, "onClick"]], template: function PeriodosScreenComponent_Template(rf, ctx) {
  if (rf & 1) {
    i012.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i012.\u0275\u0275text(3, "Periodos");
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(4, "p-button", 2);
    i012.\u0275\u0275listener("onClick", function PeriodosScreenComponent_Template_p_button_onClick_4_listener() {
      return ctx.toggleOpenRegister();
    });
    i012.\u0275\u0275elementEnd()();
    i012.\u0275\u0275elementStart(5, "p-table", 3);
    i012.\u0275\u0275template(6, PeriodosScreenComponent_ng_template_6_Template, 7, 0, "ng-template", 4)(7, PeriodosScreenComponent_ng_template_7_Template, 9, 2, "ng-template", 5);
    i012.\u0275\u0275elementEnd()();
    i012.\u0275\u0275element(8, "app-confirm-dialog", 6);
    i012.\u0275\u0275elementStart(9, "app-register-periodo-dialog", 7);
    i012.\u0275\u0275listener("toggleOpenRegister", function PeriodosScreenComponent_Template_app_register_periodo_dialog_toggleOpenRegister_9_listener() {
      return ctx.toggleOpenRegister();
    });
    i012.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i012.\u0275\u0275advance(5);
    i012.\u0275\u0275property("value", ctx.periodosList);
    i012.\u0275\u0275advance(3);
    i012.\u0275\u0275property("confirmDeletePayload", ctx.confirmDeletePayload);
    i012.\u0275\u0275advance();
    i012.\u0275\u0275property("isRegisterOpen", ctx.isRegisterOpen);
  }
}, dependencies: [
  NavigationContainerComponent,
  TableModule4,
  i111.Table,
  i29.PrimeTemplate,
  ButtonModule10,
  i37.Button,
  RegisterPeriodoDialogComponent,
  ConfirmDialogComponent
], styles: ["\n\n/*# sourceMappingURL=periodos-screen.component.css.map */"] });
var PeriodosScreenComponent = _PeriodosScreenComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(PeriodosScreenComponent, { className: "PeriodosScreenComponent" });
})();

// src/app/screens/programas-screen/programas-screen.component.ts
import { Component as Component11 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule as TableModule5 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule11 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i014 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";

// src/app/api/programas/programas.service.ts
import { Injectable as Injectable3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i013 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i112 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";
var _ProgramasService = class _ProgramasService {
  constructor(http) {
    this.http = http;
  }
  postPrograma(data) {
    return this.http.post(`${apiUrl}/programas`, data);
  }
};
_ProgramasService.\u0275fac = function ProgramasService_Factory(t) {
  return new (t || _ProgramasService)(i013.\u0275\u0275inject(i112.HttpClient));
};
_ProgramasService.\u0275prov = /* @__PURE__ */ i013.\u0275\u0275defineInjectable({ token: _ProgramasService, factory: _ProgramasService.\u0275fac, providedIn: "root" });
var ProgramasService = _ProgramasService;

// src/app/screens/programas-screen/programas-screen.component.ts
import * as i210 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i38 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i44 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
function ProgramasScreenComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "tr")(1, "th");
    i014.\u0275\u0275text(2, "ID");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "th");
    i014.\u0275\u0275text(4, "NOMBRE");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(5, "th");
    i014.\u0275\u0275text(6, "ACCIONES");
    i014.\u0275\u0275elementEnd()();
  }
}
function ProgramasScreenComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i014.\u0275\u0275getCurrentView();
    i014.\u0275\u0275elementStart(0, "tr")(1, "td");
    i014.\u0275\u0275text(2);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(3, "td");
    i014.\u0275\u0275text(4);
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(5, "td")(6, "div", 8)(7, "p-button", 9);
    i014.\u0275\u0275listener("onClick", function ProgramasScreenComponent_ng_template_7_Template_p_button_onClick_7_listener() {
      i014.\u0275\u0275restoreView(_r4);
      const ctx_r3 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r3.toggleOpenRegister());
    });
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(8, "p-button", 10);
    i014.\u0275\u0275listener("onClick", function ProgramasScreenComponent_ng_template_7_Template_p_button_onClick_8_listener() {
      i014.\u0275\u0275restoreView(_r4);
      const ctx_r5 = i014.\u0275\u0275nextContext();
      return i014.\u0275\u0275resetView(ctx_r5.toggleOpenDelete());
    });
    i014.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const programa_r2 = ctx.$implicit;
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate(programa_r2.id);
    i014.\u0275\u0275advance(2);
    i014.\u0275\u0275textInterpolate(programa_r2.nombre);
  }
}
var _ProgramasScreenComponent = class _ProgramasScreenComponent {
  constructor(programasService) {
    this.programasService = programasService;
    this.isRegisterOpen = false;
    this.confirmDeletePayload = null;
    this.programasList = [
      { id: "1", nombre: "Programa 1" },
      { id: "2", nombre: "Programa 2" },
      { id: "3", nombre: "Programa 3" },
      { id: "4", nombre: "Programa 4" },
      { id: "5", nombre: "Programa 5" }
    ];
  }
  toggleOpenRegister() {
    this.isRegisterOpen = !this.isRegisterOpen;
  }
  toggleOpenDelete() {
    this.confirmDeletePayload = {
      title: "Eliminar programa",
      message: `\xBFEst\xE1s seguro de eliminar el programa`,
      actionLabel: "Eliminar",
      action: () => {
      },
      cancelAction: () => this.confirmDeletePayload = null
    };
  }
  onSubmitPrograma() {
    this.programasService.postPrograma({ nombre: "" }).subscribe({
      next: (response) => this.onSuccessSubmitPrograma(response.data),
      error: () => this.onErrorSubmitPrograma()
    });
  }
  onSuccessSubmitPrograma(response) {
  }
  onErrorSubmitPrograma() {
  }
};
_ProgramasScreenComponent.\u0275fac = function ProgramasScreenComponent_Factory(t) {
  return new (t || _ProgramasScreenComponent)(i014.\u0275\u0275directiveInject(ProgramasService));
};
_ProgramasScreenComponent.\u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _ProgramasScreenComponent, selectors: [["app-programas-screen"]], standalone: true, features: [i014.\u0275\u0275StandaloneFeature], decls: 10, vars: 3, consts: [[1, "h-flex-justify-between"], [1, "title-color"], ["label", "Registrar Programa", "icon", "pi pi-plus", "size", "small", 3, "onClick"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "isRegisterOpen", "toggleOpenRegister"], [3, "confirmDeletePayload"], [1, "h-flex"], ["icon", "pi pi-pencil", "size", "small", 3, "onClick"], ["icon", "pi pi-trash", "size", "small", 3, "onClick"]], template: function ProgramasScreenComponent_Template(rf, ctx) {
  if (rf & 1) {
    i014.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i014.\u0275\u0275text(3, "Programas");
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275elementStart(4, "p-button", 2);
    i014.\u0275\u0275listener("onClick", function ProgramasScreenComponent_Template_p_button_onClick_4_listener() {
      return ctx.toggleOpenRegister();
    });
    i014.\u0275\u0275elementEnd()();
    i014.\u0275\u0275elementStart(5, "p-table", 3);
    i014.\u0275\u0275template(6, ProgramasScreenComponent_ng_template_6_Template, 7, 0, "ng-template", 4)(7, ProgramasScreenComponent_ng_template_7_Template, 9, 2, "ng-template", 5);
    i014.\u0275\u0275elementEnd()();
    i014.\u0275\u0275elementStart(8, "app-register-programa-dialog", 6);
    i014.\u0275\u0275listener("toggleOpenRegister", function ProgramasScreenComponent_Template_app_register_programa_dialog_toggleOpenRegister_8_listener() {
      return ctx.toggleOpenRegister();
    });
    i014.\u0275\u0275elementEnd();
    i014.\u0275\u0275element(9, "app-confirm-dialog", 7);
  }
  if (rf & 2) {
    i014.\u0275\u0275advance(5);
    i014.\u0275\u0275property("value", ctx.programasList);
    i014.\u0275\u0275advance(3);
    i014.\u0275\u0275property("isRegisterOpen", ctx.isRegisterOpen);
    i014.\u0275\u0275advance();
    i014.\u0275\u0275property("confirmDeletePayload", ctx.confirmDeletePayload);
  }
}, dependencies: [ButtonModule11, i210.Button, i38.PrimeTemplate, TableModule5, i44.Table, NavigationContainerComponent, RegisterProgramaComponentDialog, ConfirmDialogComponent], styles: ["\n\n/*# sourceMappingURL=programas-screen.component.css.map */"] });
var ProgramasScreenComponent = _ProgramasScreenComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(ProgramasScreenComponent, { className: "ProgramasScreenComponent" });
})();

// src/app/submit-screens/submit-user-screen/submit-user-screen.component.ts
import { Component as Component12 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { ButtonModule as ButtonModule12 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { DropdownModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dropdown.js?v=43277597";
import { InputTextModule as InputTextModule5 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import { ReactiveFormsModule as ReactiveFormsModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";
import { Validators as Validators2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";
import * as i016 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i114 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";

// src/app/api/users/users.service.ts
import { Injectable as Injectable4 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i015 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i113 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";
var _UsersService = class _UsersService {
  constructor(http) {
    this.http = http;
  }
  createUser(data) {
    return this.http.post(`${apiUrl}/users`, data);
  }
};
_UsersService.\u0275fac = function UsersService_Factory(t) {
  return new (t || _UsersService)(i015.\u0275\u0275inject(i113.HttpClient));
};
_UsersService.\u0275prov = /* @__PURE__ */ i015.\u0275\u0275defineInjectable({ token: _UsersService, factory: _UsersService.\u0275fac, providedIn: "root" });
var UsersService = _UsersService;

// src/app/submit-screens/submit-user-screen/submit-user-screen.component.ts
import * as i39 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i45 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import * as i52 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dropdown.js?v=43277597";
var _c05 = () => ({ "width": "100%" });
var _SubmitUserScreenComponent = class _SubmitUserScreenComponent {
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
    this.rolOptions = [];
    this.registerUserForm = this.fb.group({
      nombres: ["", Validators2.required],
      apellidos: ["", Validators2.required],
      correoInst: ["", Validators2.required],
      correoPers: ["", Validators2.required],
      telefono: ["", Validators2.required],
      rol: ["", Validators2.required]
    });
  }
  onSubmitUser() {
    this.userService.createUser(this.registerUserForm.value).subscribe({
      next: (response) => this.onSuccessSubmitUser(response),
      error: () => this.onErrorSubmit()
    });
  }
  onSuccessSubmitUser(response) {
  }
  onErrorSubmit() {
  }
};
_SubmitUserScreenComponent.\u0275fac = function SubmitUserScreenComponent_Factory(t) {
  return new (t || _SubmitUserScreenComponent)(i016.\u0275\u0275directiveInject(i114.FormBuilder), i016.\u0275\u0275directiveInject(UsersService));
};
_SubmitUserScreenComponent.\u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _SubmitUserScreenComponent, selectors: [["app-submit-user-screen"]], standalone: true, features: [i016.\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "grid"], [1, "sm:col-12", "md:col-8", "lg:col-6"], [1, "v-flex", 3, "formGroup"], [1, "title-color"], ["type", "text", "placeholder", "Nombres", "pInputText", "", "formControlName", "nombres"], ["type", "text", "placeholder", "Apellidos", "pInputText", "", "formControlName", "apellidos"], ["type", "text", "placeholder", "Correo Institucional", "pInputText", "", "formControlName", "correoInst"], ["type", "text", "placeholder", "Correo Personal", "pInputText", "", "formControlName", "correoPers"], ["type", "text", "placeholder", "N\xFAmero de Contacto", "pInputText", "", "formControlName", "telefono"], ["formControlName", "rol", "placeholder", "Selecciona un Rol", 3, "options"], ["label", "Registrar", "size", "small"]], template: function SubmitUserScreenComponent_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "div", 1)(3, "form", 2)(4, "h3", 3);
    i016.\u0275\u0275text(5, "Registro de Usuarios");
    i016.\u0275\u0275elementEnd();
    i016.\u0275\u0275element(6, "input", 4)(7, "input", 5)(8, "input", 6)(9, "input", 7)(10, "input", 8)(11, "p-dropdown", 9)(12, "p-button", 10);
    i016.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("formGroup", ctx.registerUserForm);
    i016.\u0275\u0275advance(8);
    i016.\u0275\u0275styleMap(i016.\u0275\u0275pureFunction0(4, _c05));
    i016.\u0275\u0275property("options", ctx.rolOptions);
  }
}, dependencies: [
  ButtonModule12,
  i39.Button,
  InputTextModule5,
  i45.InputText,
  NavigationContainerComponent,
  ReactiveFormsModule2,
  i114.\u0275NgNoValidate,
  i114.DefaultValueAccessor,
  i114.NgControlStatus,
  i114.NgControlStatusGroup,
  i114.FormGroupDirective,
  i114.FormControlName,
  DropdownModule,
  i52.Dropdown
], styles: ["\n\n/*# sourceMappingURL=submit-user-screen.component.css.map */"] });
var SubmitUserScreenComponent = _SubmitUserScreenComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(SubmitUserScreenComponent, { className: "SubmitUserScreenComponent" });
})();

// src/app/screens/solicitudes-diseno-curso/solicitudes-diseno-curso.component.ts
import { Component as Component13 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { TableModule as TableModule6 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
import { ButtonModule as ButtonModule13 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i017 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i115 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import * as i211 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i310 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_api.js?v=43277597";
import * as i46 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_table.js?v=43277597";
function SolicitudesDisenoCursoComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "tr")(1, "th");
    i017.\u0275\u0275text(2, "CODIGO");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(3, "th");
    i017.\u0275\u0275text(4, "ASIGNATURA");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(5, "th");
    i017.\u0275\u0275text(6, "EAP");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(7, "th");
    i017.\u0275\u0275text(8, "PLAN");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(9, "th");
    i017.\u0275\u0275text(10, "TIPO_ASIGNATURA");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(11, "th");
    i017.\u0275\u0275text(12, "TIPO_DISENO");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(13, "th");
    i017.\u0275\u0275text(14, "FACULTAD");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(15, "th");
    i017.\u0275\u0275text(16, "CICLO");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(17, "th");
    i017.\u0275\u0275text(18, "DOCENTE_DISENADOR");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(19, "th");
    i017.\u0275\u0275text(20, "MODALIDAD");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(21, "th");
    i017.\u0275\u0275text(22, "FORMATO");
    i017.\u0275\u0275elementEnd()();
  }
}
function SolicitudesDisenoCursoComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "tr")(1, "td");
    i017.\u0275\u0275text(2);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(3, "td");
    i017.\u0275\u0275text(4);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(5, "td");
    i017.\u0275\u0275text(6);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(7, "td");
    i017.\u0275\u0275text(8);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(9, "td");
    i017.\u0275\u0275text(10);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(11, "td");
    i017.\u0275\u0275text(12);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(13, "td");
    i017.\u0275\u0275text(14);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(15, "td");
    i017.\u0275\u0275text(16);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(17, "td");
    i017.\u0275\u0275text(18);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(19, "td");
    i017.\u0275\u0275text(20);
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(21, "td");
    i017.\u0275\u0275text(22);
    i017.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.codigo);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.asignatura);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.eap);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.plan);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.tipo_asignatura);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.tipo_diseno);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.facultad);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.ciclo);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.docente_disenador);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.modalidad);
    i017.\u0275\u0275advance(2);
    i017.\u0275\u0275textInterpolate(user_r2.formato);
  }
}
var _SolicitudesDisenoCursoComponent = class _SolicitudesDisenoCursoComponent {
  constructor(router) {
    this.router = router;
    this.requestList = [
      dummyRequest,
      dummyRequest,
      dummyRequest
    ];
  }
  redirectToSubmitRequest() {
    this.router.navigate(["/submit-solicitud-diseno-curso"]);
  }
};
_SolicitudesDisenoCursoComponent.\u0275fac = function SolicitudesDisenoCursoComponent_Factory(t) {
  return new (t || _SolicitudesDisenoCursoComponent)(i017.\u0275\u0275directiveInject(i115.Router));
};
_SolicitudesDisenoCursoComponent.\u0275cmp = /* @__PURE__ */ i017.\u0275\u0275defineComponent({ type: _SolicitudesDisenoCursoComponent, selectors: [["app-solicitudes-diseno-curso"]], standalone: true, features: [i017.\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "h-flex-justify-between"], [1, "title-color"], ["label", "Registrar Solicitud", "size", "small", "icon", "pi pi-plus", 3, "onClick"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"]], template: function SolicitudesDisenoCursoComponent_Template(rf, ctx) {
  if (rf & 1) {
    i017.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i017.\u0275\u0275text(3, "Listado de Solicitudes de Dise\xF1o de Curso");
    i017.\u0275\u0275elementEnd();
    i017.\u0275\u0275elementStart(4, "p-button", 2);
    i017.\u0275\u0275listener("onClick", function SolicitudesDisenoCursoComponent_Template_p_button_onClick_4_listener() {
      return ctx.redirectToSubmitRequest();
    });
    i017.\u0275\u0275elementEnd()();
    i017.\u0275\u0275elementStart(5, "p-table", 3);
    i017.\u0275\u0275template(6, SolicitudesDisenoCursoComponent_ng_template_6_Template, 23, 0, "ng-template", 4)(7, SolicitudesDisenoCursoComponent_ng_template_7_Template, 23, 11, "ng-template", 5);
    i017.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i017.\u0275\u0275advance(5);
    i017.\u0275\u0275property("value", ctx.requestList);
  }
}, dependencies: [NavigationContainerComponent, ButtonModule13, i211.Button, i310.PrimeTemplate, TableModule6, i46.Table], styles: ["\n\n/*# sourceMappingURL=solicitudes-diseno-curso.component.css.map */"] });
var SolicitudesDisenoCursoComponent = _SolicitudesDisenoCursoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(SolicitudesDisenoCursoComponent, { className: "SolicitudesDisenoCursoComponent" });
})();
var dummyRequest = {
  asignatura: "Asignatura 1",
  ciclo: "Ciclo 1",
  codigo: "Codigo 1",
  docente_disenador: "Docente 1",
  eap: "EAP 1",
  facultad: "Facultad 1",
  formato: "Formato 1",
  id: "1",
  modalidad: "Modalidad 1",
  plan: "Plan 1",
  tipo_asignatura: "Tipo Asignatura 1",
  tipo_diseno: "Tipo Diseno 1"
};

// src/app/submit-screens/submit-solicitud-diseno-curso/submit-solicitud-diseno-curso.component.ts
import { CardModule as CardModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_card.js?v=43277597";
import { Component as Component14 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { ButtonModule as ButtonModule14 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import { MessageModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_message.js?v=43277597";
import { DropdownModule as DropdownModule2 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dropdown.js?v=43277597";
import { InputTextModule as InputTextModule6 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import { ReactiveFormsModule as ReactiveFormsModule3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";
import { BreadcrumbModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_breadcrumb.js?v=43277597";
import { Validators as Validators3 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";
import * as i019 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i117 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_forms.js?v=43277597";

// src/app/api/diseno-curso/diseno-curso.service.ts
import { Injectable as Injectable5 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i018 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i116 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common_http.js?v=43277597";
var _DisenoCursoService = class _DisenoCursoService {
  constructor(http) {
    this.http = http;
  }
  postDisenoCurso(data) {
    return this.http.post(`${apiUrl}/diseno-curso`, data);
  }
};
_DisenoCursoService.\u0275fac = function DisenoCursoService_Factory(t) {
  return new (t || _DisenoCursoService)(i018.\u0275\u0275inject(i116.HttpClient));
};
_DisenoCursoService.\u0275prov = /* @__PURE__ */ i018.\u0275\u0275defineInjectable({ token: _DisenoCursoService, factory: _DisenoCursoService.\u0275fac, providedIn: "root" });
var DisenoCursoService = _DisenoCursoService;

// src/app/submit-screens/submit-solicitud-diseno-curso/submit-solicitud-diseno-curso.component.ts
import * as i311 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_button.js?v=43277597";
import * as i47 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_inputtext.js?v=43277597";
import * as i53 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_dropdown.js?v=43277597";
import * as i62 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_message.js?v=43277597";
import * as i7 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/primeng_card.js?v=43277597";
var _c06 = () => ({ "width": "100%" });
function SubmitSolicitudDisenoCursoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275element(0, "p-message", 18);
  }
  if (rf & 2) {
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(2, _c06));
  }
}
var _c1 = () => ({ width: "100%" });
function SubmitSolicitudDisenoCursoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "label", 19);
    i019.\u0275\u0275text(1, "Presencial");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(2, "p-dropdown", 20);
  }
  if (rf & 2) {
    const ctx_r1 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(3, _c1));
    i019.\u0275\u0275property("options", ctx_r1.presencialOptions);
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "label", 21);
    i019.\u0275\u0275text(1, "Semipresencial");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(2, "p-dropdown", 22);
  }
  if (rf & 2) {
    const ctx_r2 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(3, _c1));
    i019.\u0275\u0275property("options", ctx_r2.semipresencialOptions);
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "label", 23);
    i019.\u0275\u0275text(1, "A Distancia");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275element(2, "p-dropdown", 24);
  }
  if (rf & 2) {
    const ctx_r3 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance(2);
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(3, _c1));
    i019.\u0275\u0275property("options", ctx_r3.aDistanciaOptions);
  }
}
var _c2 = () => ({ "margin-left": "40px" });
function SubmitSolicitudDisenoCursoComponent_Conditional_24_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "p-button", 27);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Conditional_24_Conditional_3_Template_p_button_onClick_0_listener() {
      i019.\u0275\u0275restoreView(_r10);
      const ctx_r9 = i019.\u0275\u0275nextContext(2);
      return i019.\u0275\u0275resetView(ctx_r9.cleanFirstOption());
    });
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(2, _c2));
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "div", 25)(1, "h3", 1);
    i019.\u0275\u0275text(2, "Carpetas");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275template(3, SubmitSolicitudDisenoCursoComponent_Conditional_24_Conditional_3_Template, 1, 3, "p-button", 26);
    i019.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = i019.\u0275\u0275nextContext();
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275conditional(3, ctx_r4.firstOptionSelected != null ? 3 : -1);
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "div", 28)(1, "p-card")(2, "div", 0)(3, "h4");
    i019.\u0275\u0275text(4, "Presencial");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(5, "p-button", 29);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Conditional_25_Template_p_button_onClick_5_listener() {
      i019.\u0275\u0275restoreView(_r12);
      const ctx_r11 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r11.selectFirstOption("Presencial"));
    });
    i019.\u0275\u0275elementEnd()()();
    i019.\u0275\u0275elementStart(6, "p-card")(7, "div", 0)(8, "h4");
    i019.\u0275\u0275text(9, "Semipresencial y a Distanca");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(10, "p-button", 29);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Conditional_25_Template_p_button_onClick_10_listener() {
      i019.\u0275\u0275restoreView(_r12);
      const ctx_r13 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r13.selectFirstOption("SemipresencialDistancia"));
    });
    i019.\u0275\u0275elementEnd()()()();
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "div", 28)(1, "p-card")(2, "div", 0)(3, "h4");
    i019.\u0275\u0275text(4, "Presencial");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(5, "p-button", 29);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Conditional_26_Template_p_button_onClick_5_listener() {
      i019.\u0275\u0275restoreView(_r15);
      const ctx_r14 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r14.selectFirstOption("Presencial"));
    });
    i019.\u0275\u0275elementEnd()()()();
  }
}
function SubmitSolicitudDisenoCursoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = i019.\u0275\u0275getCurrentView();
    i019.\u0275\u0275elementStart(0, "div", 28)(1, "p-card")(2, "div", 0)(3, "h4");
    i019.\u0275\u0275text(4, "Virtual 16 Semanas");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(5, "p-button", 29);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Conditional_27_Template_p_button_onClick_5_listener() {
      i019.\u0275\u0275restoreView(_r17);
      const ctx_r16 = i019.\u0275\u0275nextContext();
      return i019.\u0275\u0275resetView(ctx_r16.selectFirstOption("Presencial"));
    });
    i019.\u0275\u0275elementEnd()()()();
  }
}
var _SubmitSolicitudDisenoCursoComponent = class _SubmitSolicitudDisenoCursoComponent {
  constructor(fb, disenoCursoService) {
    this.fb = fb;
    this.disenoCursoService = disenoCursoService;
    this.shouldShowCarpetas = false;
    this.firstOptionSelected = null;
    this.secondOptionSelected = null;
    this.modalidadOptions = [
      { id: 0, label: "-" },
      { id: 1, label: "Presencial" },
      { id: 2, label: "Semipresencial" },
      { id: 3, label: "A Distacia" },
      { id: 4, label: "Presencial y a Distancia" },
      { id: 5, label: "Semipresencial y a Distancia" },
      { id: 6, label: "Presencial y Semipresencial" },
      { id: 7, label: "Presencial, Semipresencial y a Distancia" }
    ];
    this.presencialOptions = [
      { id: 0, label: "-" },
      { id: 1, label: "Presencial" },
      { id: 2, label: "Virtual 16 Semanas" },
      { id: 3, label: "Virtual 8 Semanas" },
      { id: 4, label: "Blended 16 Semanas" },
      { id: 5, label: "Blended 8 Semanas" }
    ];
    this.semipresencialOptions = [
      { id: 0, label: "-" },
      { id: 1, label: "Presencial 16 Semanas" },
      { id: 2, label: "Presencial 8 Semanas" },
      { id: 3, label: "Virtual 16 Semanas" },
      { id: 4, label: "Virtual 8 Semanas" },
      { id: 5, label: "Blended 16 Semanas" }
    ];
    this.aDistanciaOptions = [
      { id: 0, label: "-" },
      { id: 1, label: "Presencial 16 Semanas" },
      { id: 2, label: "Presencial 8 Semanas" },
      { id: 3, label: "Virtual 16 Semanas" },
      { id: 4, label: "Virtual 8 Semanas" },
      { id: 5, label: "Blended 16 Semanas" }
    ];
    this.registerCarpetaForm = this.fb.group({
      formato_presencial: [0, Validators3.required],
      formato_semipresencial: [0, Validators3.required],
      form_distancia: [0, Validators3.required]
    });
    this.registerRequestForm = this.fb.group({
      codigo: ["", Validators3.required],
      asignatura: ["", Validators3.required],
      eap: ["", Validators3.required],
      plan: ["", Validators3.required],
      tipo_asignatura: ["", Validators3.required],
      tipo_diseno: ["", Validators3.required],
      facultad: ["", Validators3.required],
      ciclo: ["", Validators3.required],
      docente_dise\u00F1ador: ["", Validators3.required],
      modalidad: [0, Validators3.required],
      formato: ["", Validators3.required]
    });
  }
  selectFirstOption(opt) {
    this.firstOptionSelected = opt;
  }
  selectSecondOption(opt) {
    this.secondOptionSelected = opt;
  }
  toggleShouldShowCarpetas() {
    this.shouldShowCarpetas = !this.shouldShowCarpetas;
  }
  cleanFirstOption() {
    this.firstOptionSelected = null;
  }
};
_SubmitSolicitudDisenoCursoComponent.\u0275fac = function SubmitSolicitudDisenoCursoComponent_Factory(t) {
  return new (t || _SubmitSolicitudDisenoCursoComponent)(i019.\u0275\u0275directiveInject(i117.FormBuilder), i019.\u0275\u0275directiveInject(DisenoCursoService));
};
_SubmitSolicitudDisenoCursoComponent.\u0275cmp = /* @__PURE__ */ i019.\u0275\u0275defineComponent({ type: _SubmitSolicitudDisenoCursoComponent, selectors: [["app-submit-solicitud-diseno-curso"]], standalone: true, features: [i019.\u0275\u0275StandaloneFeature], decls: 28, vars: 32, consts: [[1, "v-flex"], [1, "title-color"], [1, "grid", 3, "formGroup"], [1, "col-12", "md:col-6", "v-flex"], ["pInputText", "", "type", "text", "placeholder", "C\xF3digo", "formControlName", "codigo"], ["pInputText", "", "type", "text", "placeholder", "Asignatura", "formControlName", "asignatura"], ["formControlName", "eap", "placeholder", "Eap"], ["formControlName", "plan", "placeholder", "Plan"], ["formControlName", "tipo_asignatura", "placeholder", "Tipo de Asignatura"], ["label", "Registrar", "size", "small", 3, "onClick"], ["formControlName", "tipo_diseno", "placeholder", "Tipo de Dise\xF1o"], ["formControlName", "facultad", "placeholder", "Facultad"], ["formControlName", "ciclo", "placeholder", "Ciclo"], ["formControlName", "docente_dise\xF1ador", "placeholder", "Docente Dise\xF1ador"], ["formControlName", "modalidad", "placeholder", "Modalidad", 3, "options"], ["severity", "warn", "text", "Seleccione el formato de acuerdo a la modalidad", 3, "style"], ["class", "h-flex-align-center"], ["class", "h-flex"], ["severity", "warn", "text", "Seleccione el formato de acuerdo a la modalidad"], ["for", "sc-formato-presencial"], ["id", "sc-formato-presencial", "formControlName", "formato_presencial", 3, "options"], ["for", "sc-formato-semipresencial"], ["id", "sc-formato-presencial", "formControlName", "formato_semipresencial", 3, "options"], ["for", "sc-formato-a-distancia"], ["id", "sc-formato-a-distancia", "formControlName", "form_distancia", 3, "options"], [1, "h-flex-align-center"], ["label", "Volver", "size", "small", 3, "style"], ["label", "Volver", "size", "small", 3, "onClick"], [1, "h-flex"], ["label", "Acceder", "size", "small", 3, "onClick"]], template: function SubmitSolicitudDisenoCursoComponent_Template(rf, ctx) {
  if (rf & 1) {
    i019.\u0275\u0275elementStart(0, "app-navigation-container")(1, "div", 0)(2, "h3", 1);
    i019.\u0275\u0275text(3, "Registro de Solicitud de Dise\xF1o de Curso");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275elementStart(4, "form", 2)(5, "div", 3);
    i019.\u0275\u0275element(6, "input", 4)(7, "input", 5)(8, "p-dropdown", 6)(9, "p-dropdown", 7)(10, "p-dropdown", 8);
    i019.\u0275\u0275elementStart(11, "p-button", 9);
    i019.\u0275\u0275listener("onClick", function SubmitSolicitudDisenoCursoComponent_Template_p_button_onClick_11_listener() {
      return ctx.toggleShouldShowCarpetas();
    });
    i019.\u0275\u0275elementEnd()();
    i019.\u0275\u0275elementStart(12, "div", 3);
    i019.\u0275\u0275element(13, "p-dropdown", 10)(14, "p-dropdown", 11)(15, "p-dropdown", 12)(16, "p-dropdown", 13)(17, "p-dropdown", 14);
    i019.\u0275\u0275elementStart(18, "h3", 1);
    i019.\u0275\u0275text(19, "Formato");
    i019.\u0275\u0275elementEnd();
    i019.\u0275\u0275template(20, SubmitSolicitudDisenoCursoComponent_Conditional_20_Template, 1, 3, "p-message", 15)(21, SubmitSolicitudDisenoCursoComponent_Conditional_21_Template, 3, 4)(22, SubmitSolicitudDisenoCursoComponent_Conditional_22_Template, 3, 4)(23, SubmitSolicitudDisenoCursoComponent_Conditional_23_Template, 3, 4);
    i019.\u0275\u0275elementEnd()();
    i019.\u0275\u0275template(24, SubmitSolicitudDisenoCursoComponent_Conditional_24_Template, 4, 1, "div", 16)(25, SubmitSolicitudDisenoCursoComponent_Conditional_25_Template, 11, 0, "div", 17)(26, SubmitSolicitudDisenoCursoComponent_Conditional_26_Template, 6, 0)(27, SubmitSolicitudDisenoCursoComponent_Conditional_27_Template, 6, 0);
    i019.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    i019.\u0275\u0275advance(4);
    i019.\u0275\u0275property("formGroup", ctx.registerRequestForm);
    i019.\u0275\u0275advance(4);
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(24, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(25, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(26, _c06));
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(27, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(28, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(29, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(30, _c06));
    i019.\u0275\u0275advance();
    i019.\u0275\u0275styleMap(i019.\u0275\u0275pureFunction0(31, _c06));
    i019.\u0275\u0275property("options", ctx.modalidadOptions);
    i019.\u0275\u0275advance(3);
    i019.\u0275\u0275conditional(20, ctx.registerRequestForm.value.modalidad === 0 ? 20 : -1);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275conditional(21, ctx.registerRequestForm.value.modalidad.id === 1 || ctx.registerRequestForm.value.modalidad.id === 4 || ctx.registerRequestForm.value.modalidad.id === 6 || ctx.registerRequestForm.value.modalidad.id === 7 ? 21 : -1);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275conditional(22, ctx.registerRequestForm.value.modalidad.id === 2 || ctx.registerRequestForm.value.modalidad.id === 5 || ctx.registerRequestForm.value.modalidad.id === 6 || ctx.registerRequestForm.value.modalidad.id === 7 ? 22 : -1);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275conditional(23, ctx.registerRequestForm.value.modalidad.id === 3 || ctx.registerRequestForm.value.modalidad.id === 4 || ctx.registerRequestForm.value.modalidad.id === 5 || ctx.registerRequestForm.value.modalidad.id === 7 ? 23 : -1);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275conditional(24, ctx.shouldShowCarpetas ? 24 : -1);
    i019.\u0275\u0275advance();
    i019.\u0275\u0275conditional(25, ctx.shouldShowCarpetas && ctx.firstOptionSelected === null ? 25 : ctx.shouldShowCarpetas && ctx.firstOptionSelected === "Presencial" ? 26 : ctx.shouldShowCarpetas && ctx.firstOptionSelected === "SemipresencialDistancia" ? 27 : -1);
  }
}, dependencies: [
  ButtonModule14,
  i311.Button,
  NavigationContainerComponent,
  InputTextModule6,
  i47.InputText,
  DropdownModule2,
  i53.Dropdown,
  ReactiveFormsModule3,
  i117.\u0275NgNoValidate,
  i117.DefaultValueAccessor,
  i117.NgControlStatus,
  i117.NgControlStatusGroup,
  i117.FormGroupDirective,
  i117.FormControlName,
  MessageModule,
  i62.UIMessage,
  CardModule2,
  i7.Card,
  BreadcrumbModule
], styles: ["\n\n/*# sourceMappingURL=submit-solicitud-diseno-curso.component.css.map */"] });
var SubmitSolicitudDisenoCursoComponent = _SubmitSolicitudDisenoCursoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassDebugInfo(SubmitSolicitudDisenoCursoComponent, { className: "SubmitSolicitudDisenoCursoComponent" });
})();

// src/app/submit-screens/submit-produccion-general/submit-produccion-general.component.ts
import { Component as Component15 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import * as i020 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
var _SubmitProduccionGeneralComponent = class _SubmitProduccionGeneralComponent {
};
_SubmitProduccionGeneralComponent.\u0275fac = function SubmitProduccionGeneralComponent_Factory(t) {
  return new (t || _SubmitProduccionGeneralComponent)();
};
_SubmitProduccionGeneralComponent.\u0275cmp = /* @__PURE__ */ i020.\u0275\u0275defineComponent({ type: _SubmitProduccionGeneralComponent, selectors: [["app-submit-produccion-general"]], standalone: true, features: [i020.\u0275\u0275StandaloneFeature], decls: 2, vars: 0, template: function SubmitProduccionGeneralComponent_Template(rf, ctx) {
  if (rf & 1) {
    i020.\u0275\u0275elementStart(0, "p");
    i020.\u0275\u0275text(1, "submit-produccion-general works!");
    i020.\u0275\u0275elementEnd();
  }
}, styles: ["\n\n/*# sourceMappingURL=submit-produccion-general.component.css.map */"] });
var SubmitProduccionGeneralComponent = _SubmitProduccionGeneralComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassDebugInfo(SubmitProduccionGeneralComponent, { className: "SubmitProduccionGeneralComponent" });
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent },
  { path: "roles", component: RolesComponent },
  { path: "periodos", component: PeriodosScreenComponent },
  { path: "programas", component: ProgramasScreenComponent },
  { path: "submit-user", component: SubmitUserScreenComponent },
  { path: "solicitud-diseno-curso", component: SolicitudesDisenoCursoComponent },
  { path: "produccion", component: ProduccionComponent },
  { path: "submit-solicitud-diseno-curso", component: SubmitSolicitudDisenoCursoComponent },
  { path: "submit-produccion-general", component: SubmitProduccionGeneralComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

// src/app/state/reducers/login.reducer.ts
import { createReducer, on } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@ngrx_store.js?v=43277597";
var initialStateLoginReducer = {
  user: null
};
var loginReducer = createReducer(initialStateLoginReducer, on(setUserDataAction, (state, { user }) => {
  return __spreadProps(__spreadValues({}, state), { user });
}));

// src/app/state/reducers/index.ts
var reducers = {
  login: loginReducer
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore(reducers, { metaReducers: [] }),
    provideHttpClient(withInterceptorsFromDi()),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};

// src/app/app.component.ts
import { Component as Component16 } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
import { CommonModule } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_common.js?v=43277597";
import { RouterOutlet } from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_router.js?v=43277597";
import * as i021 from "/@fs/Users/andrelizaran/Documents/Trabajo/Continental/continental-frontend/.angular/cache/17.1.0/vite/deps/@angular_core.js?v=43277597";
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "angular-continental";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ i021.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [i021.\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    i021.\u0275\u0275element(0, "router-outlet");
  }
}, dependencies: [
  CommonModule,
  RouterOutlet
], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i021.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent" });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9zY3JlZW5zL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc2NyZWVucy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc3RhdGUvYWN0aW9ucy9sb2dpbi5hY3Rpb25zLnRzIiwic3JjL2FwcC9hcGkvaW5kZXgudHMiLCJzcmMvYXBwL2FwaS9sb2dpbi9sb2dpbi5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zY3JlZW5zL3VzZXJzL3VzZXJzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc2NyZWVucy91c2Vycy91c2Vycy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1jb250YWluZXIvbmF2aWdhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2RpYWxvZ3MvcmVnaXN0ZXItcHJvZ3JhbWEtZGlhbG9nL3JlZ2lzdGVyLXByb2dyYW1hLmNvbXBvbmVudC1kaWFsb2cudHMiLCJzcmMvYXBwL2RpYWxvZ3MvcmVnaXN0ZXItcHJvZ3JhbWEtZGlhbG9nL3JlZ2lzdGVyLXByb2dyYW1hLmNvbXBvbmVudC1kaWFsb2cuaHRtbCIsInNyYy9hcHAvc2NyZWVucy9yb2xlcy9yb2xlcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NjcmVlbnMvcm9sZXMvcm9sZXMuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2RpYWxvZ3MvcmVnaXN0ZXItcm9sLWRpYWxvZy9yZWdpc3Rlci1yb2wtZGlhbG9nLmNvbXBvbmVudC50cyIsInNyYy9hcHAvZGlhbG9ncy9yZWdpc3Rlci1yb2wtZGlhbG9nL3JlZ2lzdGVyLXJvbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL3NoYXJlZC1kaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc2hhcmVkLWRpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2FwaS9yb2xlcy9yb2xlcy5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zY3JlZW5zL3Byb2R1Y2Npb24vcHJvZHVjY2lvbi5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NjcmVlbnMvcHJvZHVjY2lvbi9wcm9kdWNjaW9uLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zY3JlZW5zL3BlcmlvZG9zLXNjcmVlbi9wZXJpb2Rvcy1zY3JlZW4uY29tcG9uZW50LnRzIiwic3JjL2FwcC9zY3JlZW5zL3BlcmlvZG9zLXNjcmVlbi9wZXJpb2Rvcy1zY3JlZW4uY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2RpYWxvZ3MvcmVnaXN0ZXItcGVyaW9kby1kaWFsb2cvcmVnaXN0ZXItcGVyaW9kby1kaWFsb2cuY29tcG9uZW50LnRzIiwic3JjL2FwcC9kaWFsb2dzL3JlZ2lzdGVyLXBlcmlvZG8tZGlhbG9nL3JlZ2lzdGVyLXBlcmlvZG8tZGlhbG9nLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zY3JlZW5zL3Byb2dyYW1hcy1zY3JlZW4vcHJvZ3JhbWFzLXNjcmVlbi5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NjcmVlbnMvcHJvZ3JhbWFzLXNjcmVlbi9wcm9ncmFtYXMtc2NyZWVuLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hcGkvcHJvZ3JhbWFzL3Byb2dyYW1hcy5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zdWJtaXQtc2NyZWVucy9zdWJtaXQtdXNlci1zY3JlZW4vc3VibWl0LXVzZXItc2NyZWVuLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc3VibWl0LXNjcmVlbnMvc3VibWl0LXVzZXItc2NyZWVuL3N1Ym1pdC11c2VyLXNjcmVlbi5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXBpL3VzZXJzL3VzZXJzLnNlcnZpY2UudHMiLCJzcmMvYXBwL3NjcmVlbnMvc29saWNpdHVkZXMtZGlzZW5vLWN1cnNvL3NvbGljaXR1ZGVzLWRpc2Vuby1jdXJzby5jb21wb25lbnQudHMiLCJzcmMvYXBwL3NjcmVlbnMvc29saWNpdHVkZXMtZGlzZW5vLWN1cnNvL3NvbGljaXR1ZGVzLWRpc2Vuby1jdXJzby5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvc3VibWl0LXNjcmVlbnMvc3VibWl0LXNvbGljaXR1ZC1kaXNlbm8tY3Vyc28vc3VibWl0LXNvbGljaXR1ZC1kaXNlbm8tY3Vyc28uY29tcG9uZW50LnRzIiwic3JjL2FwcC9zdWJtaXQtc2NyZWVucy9zdWJtaXQtc29saWNpdHVkLWRpc2Vuby1jdXJzby9zdWJtaXQtc29saWNpdHVkLWRpc2Vuby1jdXJzby5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXBpL2Rpc2Vuby1jdXJzby9kaXNlbm8tY3Vyc28uc2VydmljZS50cyIsInNyYy9hcHAvc3VibWl0LXNjcmVlbnMvc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbC9zdWJtaXQtcHJvZHVjY2lvbi1nZW5lcmFsLmNvbXBvbmVudC50cyIsInNyYy9hcHAvc3VibWl0LXNjcmVlbnMvc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbC9zdWJtaXQtcHJvZHVjY2lvbi1nZW5lcmFsLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9zdGF0ZS9yZWR1Y2Vycy9sb2dpbi5yZWR1Y2VyLnRzIiwic3JjL2FwcC9zdGF0ZS9yZWR1Y2Vycy9pbmRleC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwL2FwcC5jb21wb25lbnQnO1xuXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIGFwcENvbmZpZylcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBwcm92aWRlU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBwcm92aWRlUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHByb3ZpZGVTdG9yZURldnRvb2xzIH0gZnJvbSAnQG5ncngvc3RvcmUtZGV2dG9vbHMnO1xuaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZUFuaW1hdGlvbnMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnXG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCwgd2l0aEludGVyY2VwdG9yc0Zyb21EaSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLy8gRGF0YVxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuLy8gUmVkdWNlcnNcbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IEFwcGxpY2F0aW9uQ29uZmlnID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcyksXG4gICAgcHJvdmlkZUFuaW1hdGlvbnMoKSxcbiAgICBwcm92aWRlU3RvcmUocmVkdWNlcnMsIHsgbWV0YVJlZHVjZXJzOiBbXSB9KSxcbiAgICBwcm92aWRlSHR0cENsaWVudCh3aXRoSW50ZXJjZXB0b3JzRnJvbURpKCkpLFxuICAgIHByb3ZpZGVTdG9yZURldnRvb2xzKHsgbWF4QWdlOiAyNSwgbG9nT25seTogIWlzRGV2TW9kZSgpIH0pXG4gIF1cbn07XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYXJkJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IHsgc2V0VXNlckRhdGFBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zL2xvZ2luLmFjdGlvbnMnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBpL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgR2V0VXNlciwgUG9zdExvZ2luUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9hcGkvbG9naW4vbG9naW4udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQnV0dG9uTW9kdWxlLCBcbiAgICBJbnB1dFRleHRNb2R1bGUsIFxuICAgIENhcmRNb2R1bGUsIFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5zY3NzJ1xufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuICBsb2dpbkZvcm06IEZvcm1Hcm91cDtcblxuICBwcml2YXRlIHN0b3JlID0gaW5qZWN0KFN0b3JlKTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTpMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyXG4gICkge1xuXG4gICAgdGhpcy5sb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNvcnJlbzogWydkZW1vQGdtYWlsLmNvbScsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY29udHJhc2VuYTogWydDb250aW5lbnRhbDMyMScsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0pO1xuXG4gIH1cbiAgXG5cbiAgb25TdWJtaXRMb2dpbiAoKSB7XG5cbiAgICB0aGlzLmxvZ2luRm9ybS5kaXNhYmxlKCk7XG5cbiAgICB0aGlzLmxvZ2luU2VydmljZVxuICAgICAgLmNyZWF0ZVBvc3QodGhpcy5sb2dpbkZvcm0udmFsdWUpXG4gICAgICAuc3Vic2NyaWJlKHsgXG4gICAgICAgIG5leHQ6KHJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2Vzc1N1Ym1pdExvZ2luKHJlc3BvbnNlKSxcbiAgICAgICAgZXJyb3I6KGVycikgPT4gdGhpcy5vbkVycm9yU3VibWl0TG9naW4oZXJyKVxuICAgIH0pO1xuXG5cbiAgfVxuXG4gIG9uU3VjY2Vzc1N1Ym1pdExvZ2luIChyZXNwb25zZTpQb3N0TG9naW5SZXNwb25zZSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2V0VXNlckRhdGFBY3Rpb24oeyB1c2VyOmRlbW9Vc2VyRGF0YSB9KSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbnRpbmVudGFsLXRva2VuJywgcmVzcG9uc2UudG9rZW4pO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3VzZXJzJ10pO1xuICB9XG5cbiAgb25FcnJvclN1Ym1pdExvZ2luIChlcnJvcjphbnkpIHtcbiAgICB0aGlzLmxvZ2luRm9ybS5lbmFibGUoKTtcbiAgfVxuXG59XG5cbmNvbnN0IGRlbW9Vc2VyRGF0YTpHZXRVc2VyID0ge1xuICBpZDonMScsXG4gIG5vbWJyZTonRGVtbycsXG4gIGFwZWxsaWRvOidEZW1vIGRlbW8nLFxuICBjb3JyZW86J2RlbW9AZ21haWwuY29tJyxcbn0iLCI8ZGl2IGNsYXNzPVwibG9naW4tYmFja2dyb3VuZFwiPlxuXG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1iYWNrZ3JvdW5kLXBhZGRpbmdcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJncmlkXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaWRkZW4gbWQ6ZmxleCBtZDpjb2wtNlwiPlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+XG5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvdS1jb250aW5lbnRhbC5zdmdcIiBhbHQ9XCJcIiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbWQ6Y29sLTZcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIHYtZmxleC1qdXN0aWZ5LWNlbnRlci1hbGlnbi1jZW50ZXJcIj5cblxuICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJjb2wtMTIgbGc6Y29sLTggcC0wXCI+XG5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidi1mbGV4IHAtMFwiIFtmb3JtR3JvdXBdPVwibG9naW5Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0TG9naW4oKVwiPlxuICBcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUtY29sb3IgYWxpZ24tc2VsZi1jZW50ZXJcIj5JbmljaWFyIFNlc2nDs248L2gyPlxuICAgICAgXG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBwSW5wdXRUZXh0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwLWlucHV0dGV4dC1zbVwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29ycmVvXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZW9cIiBcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgcElucHV0VGV4dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicC1pbnB1dHRleHQtc21cIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb250cmFzZW5hXCIgIFxuICAgICAgICAgICAgICAvPlxuICAgICAgXG4gICAgICAgICAgICAgIDxwLWJ1dHRvbiBcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkluaWNpYXIgU2VzacOzblwiIFxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYWxpZ24tc2VsZi1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAvPlxuICBcbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuXG48L2Rpdj4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBjcmVhdGVBY3Rpb24sIHByb3BzIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgR2V0VXNlciB9IGZyb20gJy4uLy4uL2FwaS9sb2dpbi9sb2dpbi50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRVc2VyRGF0YUFjdGlvbiA9IGNyZWF0ZUFjdGlvbihcbiAgJ1tMb2dpbl0gU2V0IFVzZXInLCBwcm9wczx7IHVzZXI6R2V0VXNlciB9PigpXG4pO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnOyIsIi8vIEFwaVxuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4nO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUG9zdExvZ2luLCBQb3N0TG9naW5SZXNwb25zZSB9IGZyb20gJy4vbG9naW4udHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6SHR0cENsaWVudCkge31cblxuICBjcmVhdGVQb3N0KGZvcm06UG9zdExvZ2luKTogT2JzZXJ2YWJsZTxQb3N0TG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxQb3N0TG9naW5SZXNwb25zZT4oYCR7YXBpVXJsfS9sb2dpbmAsIGZvcm0pO1xuICB9XG5cbn1cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJsZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE5hdmlnYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmlnYXRpb24tY29udGFpbmVyL25hdmlnYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbi8vIERpYWxvZ3NcbmltcG9ydCB7IFJlZ2lzdGVyUHJvZ3JhbWFDb21wb25lbnREaWFsb2cgfSBmcm9tICcuLi8uLi9kaWFsb2dzL3JlZ2lzdGVyLXByb2dyYW1hLWRpYWxvZy9yZWdpc3Rlci1wcm9ncmFtYS5jb21wb25lbnQtZGlhbG9nJztcblxuLy8gVHlwZXNcbmltcG9ydCB7IEdldFVzZXIgfSBmcm9tICcuLi8uLi9hcGkvbG9naW4vbG9naW4udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdXNlcnMnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmF2aWdhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgVGFibGVNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgUmVnaXN0ZXJQcm9ncmFtYUNvbXBvbmVudERpYWxvZ10sXG4gIHRlbXBsYXRlVXJsOiAnLi91c2Vycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi91c2Vycy5jb21wb25lbnQuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2Vyc0NvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyOlJvdXRlcikge31cblxuICByZWRpcmVjdFRvUmVnaXN0ZXJVc2VyICgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc3VibWl0LXVzZXJcIl0pO1xuICB9XG5cbiAgdXNlckxpc3Q6R2V0VXNlcltdID0gW1xuICAgIHsgaWQ6IFwiMVwiLCBub21icmU6IFwiSnVhblwiLCBhcGVsbGlkbzogXCJQZXJlelwiLCBjb3JyZW86IFwiXCIgfSxcbiAgICB7IGlkOiBcIjJcIiwgbm9tYnJlOiBcIk1hcmlhXCIsIGFwZWxsaWRvOiBcIlBlcmV6XCIsIGNvcnJlbzogXCJcIiB9LFxuICAgIHsgaWQ6IFwiM1wiLCBub21icmU6IFwiSm9zZVwiLCBhcGVsbGlkbzogXCJQZXJlelwiLCBjb3JyZW86IFwiXCIgfSxcbiAgICB7IGlkOiBcIjRcIiwgbm9tYnJlOiBcIlBlZHJvXCIsIGFwZWxsaWRvOiBcIlBlcmV6XCIsIGNvcnJlbzogXCJcIiB9LFxuICAgIHsgaWQ6IFwiNVwiLCBub21icmU6IFwiTHVpc1wiLCBhcGVsbGlkbzogXCJQZXJlelwiLCBjb3JyZW86IFwiXCIgfSxcbiAgICB7IGlkOiBcIjZcIiwgbm9tYnJlOiBcIkNhcmxvc1wiLCBhcGVsbGlkbzogXCJQZXJlelwiLCBjb3JyZW86IFwiXCIgfSxcbiAgXTtcblxufVxuIiwiPGFwcC1uYXZpZ2F0aW9uLWNvbnRhaW5lcj5cblxuICA8ZGl2IGNsYXNzPVwiaC1mbGV4LWp1c3RpZnktYmV0d2VlblwiPlxuXG4gICAgPGgzIGNsYXNzPVwidGl0bGUtY29sb3JcIj5Vc3VhcmlvczwvaDM+XG5cbiAgICA8cC1idXR0b24gbGFiZWw9XCJSZWdpc3RyYXIgVXN1YXJpb1wiIGljb249XCJwaSBwaS1wbHVzXCIgc2l6ZT1cInNtYWxsXCIgKG9uQ2xpY2spPVwicmVkaXJlY3RUb1JlZ2lzdGVyVXNlcigpXCI+PC9wLWJ1dHRvbj5cblxuICA8L2Rpdj5cblxuICA8cC10YWJsZSBbdmFsdWVdPVwidXNlckxpc3RcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cblxuICAgICAgPHRyPlxuICAgICAgICA8dGg+SUQ8L3RoPlxuICAgICAgICA8dGg+Tk9NQlJFPC90aD5cbiAgICAgICAgPHRoPkFQRUxMSURPPC90aD5cbiAgICAgICAgPHRoPkNPUlJFTzwvdGg+XG4gICAgICA8L3RyPlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJib2R5XCIgbGV0LXVzZXI+XG5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPnt7IHVzZXIuaWQgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5ub21icmUgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5hcGVsbGlkbyB9fTwvdGQ+XG4gICAgICAgIDx0ZD57eyB1c2VyLmNvcnJlbyB9fTwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLXRhYmxlPlxuICBcbjwvYXBwLW5hdmlnYXRpb24tY29udGFpbmVyPiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW5hdmlnYXRpb24tY29udGFpbmVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0J1dHRvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbnRhaW5lckNvbXBvbmVudCAge1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHt9XG5cbiAgcmVkaXJlY3RUbyAocm91dGU6c3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JvdXRlXSk7XG4gIH1cblxuICByb3V0ZUxpc3Q6Um91dGVFbGVtZW50W10gPSBbXG4gICAgeyBuYW1lOiBcIlVzdWFyaW9zXCIsIGljb246IFwicGkgcGktdXNlcnNcIiwgcm91dGU6IFwiL3VzZXJzXCIgfSxcbiAgICB7IG5hbWU6IFwiUHJvZ3JhbWFzXCIsIGljb246IFwicGkgcGktYm9va1wiLCByb3V0ZTogXCIvcHJvZ3JhbWFzXCIgfSxcbiAgICB7IG5hbWU6IFwiUGVyaW9kb3NcIiwgaWNvbjogXCJwaSBwaS1jYWxlbmRhclwiLCByb3V0ZTogXCIvcGVyaW9kb3NcIiB9LFxuICAgIHsgbmFtZTogXCJSb2xlc1wiLCBpY29uOiBcInBpIHBpLWxpc3RcIiwgcm91dGU6IFwiL3JvbGVzXCIgfSxcbiAgICB7IG5hbWU6IFwiRGlzZcOxbyBkZSBDdXJzb1wiLCBpY29uOiBcInBpIHBpLXBlbmNpbFwiLCByb3V0ZTogXCIvc29saWNpdHVkLWRpc2Vuby1jdXJzb1wiIH0sXG4gICAgeyBuYW1lOiBcIlByb2R1Y2Npw7NuXCIsIGljb246IFwicGkgcGktY29nXCIsIHJvdXRlOiBcIi9wcm9kdWNjaW9uXCIgfSxcbiAgXTtcblxufVxuXG5leHBvcnQgdHlwZSBSb3V0ZUVsZW1lbnQgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICByb3V0ZTogc3RyaW5nO1xufSIsIjxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWNvbnRhaW5lclwiPlxuXG4gIDxuYXYgY2xhc3M9XCJ0b3AtYmFyXCI+XG5cbiAgICA8aDUgY2xhc3M9XCJjLXdoaXRlXCI+Q09OVElORU5UQUw8L2g1PlxuXG4gIDwvbmF2PlxuXG4gIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxuXG4gICAgPG5hdiBjbGFzcz1cInNpZGViYXItY29udGFpbmVyXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLXBhZGRpbmctY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGgzIHN0eWxlPVwiY29sb3I6IHZhcigtLXN1cmZhY2UtNjAwKVwiPk1lbsO6PC9oMz5cblxuICAgICAgICBAZm9yIChyb3V0ZSBvZiByb3V0ZUxpc3Q7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgIDxwLWJ1dHRvblxuICAgICAgICAgICAgbGFiZWw9XCJ7eyByb3V0ZS5uYW1lIH19XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBpY29uPVwie3sgcm91dGUuaWNvbiB9fVwiXG4gICAgICAgICAgICBzZXZlcml0eT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBbcm91bmRlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgIChvbkNsaWNrKT1cInJlZGlyZWN0VG8ocm91dGUucm91dGUpXCJcbiAgICAgICAgICA+PC9wLWJ1dHRvbj5cbiAgICAgICAgfVxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvbmF2PlxuXG4gICAgPG1haW4gY2xhc3M9XCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtcGFkZGluZy1jb250YWluZXJcIj5cblxuICAgICAgICA8bmctY29udGVudCAvPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvbWFpbj5cblxuICA8L2Rpdj5cblxuPC9kaXY+XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2RpYWxvZyc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXItcHJvZ3JhbWEtZGlhbG9nJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0RpYWxvZ01vZHVsZSwgSW5wdXRUZXh0TW9kdWxlLCBCdXR0b25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXItcHJvZ3JhbWEuY29tcG9uZW50LWRpYWxvZy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3JlZ2lzdGVyLXByb2dyYW1hLmNvbXBvbmVudC1kaWFsb2cuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclByb2dyYW1hQ29tcG9uZW50RGlhbG9nIHtcblxuICBASW5wdXQoKSBpc1JlZ2lzdGVyT3BlbjogYm9vbGVhbiA9IHRydWU7XG4gIEBPdXRwdXQoKSB0b2dnbGVPcGVuUmVnaXN0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2xvc2VSZWdpc3RlckRpYWxvZyAoKSB7XG4gICAgdGhpcy50b2dnbGVPcGVuUmVnaXN0ZXIuZW1pdCgpO1xuICB9XG5cbn1cbiIsIjxwLWRpYWxvZyBcbiAgY2xhc3M9XCJzbTp3LTEyXCIgXG4gIGhlYWRlcj1cIlJlZ2lzdHJhciBOdWV2byBQcm9ncmFtYVwiIFxuICBbc3R5bGVdPVwie3dpZHRoOiAnNjAwcHgnfVwiXG4gIFt2aXNpYmxlXT1cImlzUmVnaXN0ZXJPcGVuXCIgXG4gIFttb2RhbF09XCJ0cnVlXCIgXG4gIFtjbG9zYWJsZV09XCJmYWxzZVwiXG4+XG5cbiAgPGRpdiBjbGFzcz1cInYtZmxleCBtdC0xXCI+XG5cbiAgICA8aW5wdXQgXG4gICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGVsIFByb2dyYW1hXCJcbiAgICAgIHBJbnB1dFRleHQgXG4gICAgLz5cblxuICAgIDxkaXYgY2xhc3M9XCJoLWZsZXhcIj5cbiAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIkNhbmNlbGFyXCIgc2l6ZT1cInNtYWxsXCIgc2V2ZXJpdHk9XCJzZWNvbmRhcnlcIiAob25DbGljayk9XCJjbG9zZVJlZ2lzdGVyRGlhbG9nKClcIi8+XG4gICAgICA8cC1idXR0b24gbGFiZWw9XCJSZWdpc3RyYXJcIiBzaXplPVwic21hbGxcIi8+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIFxuPC9wLWRpYWxvZz5cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RhYmxlJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1jb250YWluZXIvbmF2aWdhdGlvbi1jb250YWluZXIuY29tcG9uZW50JztcblxuLy8gRGlhbG9nc1xuaW1wb3J0IHsgUmVnaXN0ZXJSb2xEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuLi8uLi9kaWFsb2dzL3JlZ2lzdGVyLXJvbC1kaWFsb2cvcmVnaXN0ZXItcm9sLWRpYWxvZy5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlXG5pbXBvcnQgeyBSb2xlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvcm9sZXMvcm9sZXMuc2VydmljZSc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBHZXRSb2xlRGF0YSB9IGZyb20gJy4uLy4uL2FwaS9yb2xlcy9yb2xlcy50eXBlcyc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQ29tcG9uZW50LCBDb25maXJtRGlhbG9nUGF5bG9hZCB9IGZyb20gJy4uLy4uL3NoYXJlZC1kaWFsb2dzL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb2xlcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBcbiAgICBUYWJsZU1vZHVsZSwgXG4gICAgQnV0dG9uTW9kdWxlLCBcbiAgICBSZWdpc3RlclJvbERpYWxvZ0NvbXBvbmVudCwgXG4gICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vcm9sZXMuY29tcG9uZW50LnNjc3MnXG59KVxuXG5leHBvcnQgY2xhc3MgUm9sZXNDb21wb25lbnQge1xuXG4gIGlzUmVnaXN0ZXJPcGVuID0gZmFsc2U7XG5cbiAgY29uZmlybURlbGV0ZVBheWxvYWQ6Q29uZmlybURpYWxvZ1BheWxvYWQgfCBudWxsID0gbnVsbDtcblxuICByb2xlTGlzdDpHZXRSb2xlRGF0YVtdID0gW1xuICAgIHsgaWQ6ICcxJywgbmFtZTogJ0FkbWluJywgZGVzY3JpcHRpb246ICdBZG1pbicgfSxcbiAgICB7IGlkOiAnMicsIG5hbWU6ICdVc2VyJywgIGRlc2NyaXB0aW9uOiAnVXNlcicgfSxcbiAgICB7IGlkOiAnMycsIG5hbWU6ICdHdWVzdCcsIGRlc2NyaXB0aW9uOiAnR3Vlc3QnIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgcm9sZXNTZXJ2aWNlOlJvbGVzU2VydmljZSkge31cblxuICB0b2dnbGVPcGVuUmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5pc1JlZ2lzdGVyT3BlbiA9ICF0aGlzLmlzUmVnaXN0ZXJPcGVuO1xuICB9XG5cbiAgdG9nZ2xlT3BlbkRlbGV0ZUNvbmZpcm0gKCkge1xuICAgIHRoaXMuY29uZmlybURlbGV0ZVBheWxvYWQgPSB7XG4gICAgICB0aXRsZTogJ0VsaW1pbmFyIHByb2dyYW1hJyxcbiAgICAgIG1lc3NhZ2U6IGDCv0VzdMOhcyBzZWd1cm8gZGUgZWxpbWluYXIgZWwgcm9sYCxcbiAgICAgIGFjdGlvbkxhYmVsOiAnRWxpbWluYXInLFxuICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGNhbmNlbEFjdGlvbjogKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlUGF5bG9hZCA9IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc3VibWl0Um9sICgpIHtcbiAgICB0aGlzLnJvbGVzU2VydmljZS5wb3N0Um9sKHsgZGVzY3JpcHRpb246JycsIG5hbWU6JycgfSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6KHJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2Vzc1N1Ym1pdFJvbChyZXNwb25zZS5kYXRhKSxcbiAgICAgIGVycm9yOigpID0+IHRoaXMub25FcnJvclN1Ym1pdFJvbCgpXG4gICAgfSk7XG4gIH1cblxuICBvblN1Y2Nlc3NTdWJtaXRSb2wgKGRhdGE6R2V0Um9sZURhdGEpIHt9XG5cbiAgb25FcnJvclN1Ym1pdFJvbCAoKSB7fVxuXG59XG4iLCI8YXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG4gIDxkaXYgY2xhc3M9XCJoLWZsZXgtanVzdGlmeS1iZXR3ZWVuXCI+XG5cbiAgICA8aDMgY2xhc3M9XCJ0aXRsZS1jb2xvclwiPlJvbGVzPC9oMz5cblxuICAgIDxwLWJ1dHRvbiBcbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICBpY29uPVwicGkgcGktcGx1c1wiXG4gICAgICBsYWJlbD1cIlJlZ2lzdHJhciBSb2xcIlxuICAgICAgKG9uQ2xpY2spPVwidG9nZ2xlT3BlblJlZ2lzdGVyKClcIlxuICAgIC8+XG5cbiAgPC9kaXY+XG5cbiAgPHAtdGFibGUgW3ZhbHVlXT1cInJvbGVMaXN0XCI+XG5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiaGVhZGVyXCI+XG5cbiAgICAgIDx0cj5cblxuICAgICAgICA8dGg+SUQ8L3RoPlxuXG4gICAgICAgIDx0aD5OT01CUkU8L3RoPlxuXG4gICAgICAgIDx0aD5ERVNDUklQQ0nDk048L3RoPlxuXG4gICAgICAgIDx0aD5BQ0NJT05FUzwvdGg+XG5cbiAgICAgIDwvdHI+XG5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImJvZHlcIiBsZXQtcm9sZT5cblxuICAgICAgPHRyPlxuICAgICAgICBcbiAgICAgICAgPHRkPnt7IHJvbGUuaWQgfX08L3RkPlxuXG4gICAgICAgIDx0ZD57eyByb2xlLm5hbWUgfX08L3RkPlxuXG4gICAgICAgIDx0ZD57eyByb2xlLmRlc2NyaXB0aW9uIH19PC90ZD5cbiAgICAgICAgXG4gICAgICAgIDx0ZCBjbGFzcz1cImgtZmxleFwiPlxuXG4gICAgICAgICAgPHAtYnV0dG9uIFxuICAgICAgICAgICAgaWNvbj1cInBpIHBpLXBlbmNpbFwiIFxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIChvbkNsaWNrKT1cInRvZ2dsZU9wZW5SZWdpc3RlcigpXCJcbiAgICAgICAgICA+PC9wLWJ1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICA8cC1idXR0b24gXG4gICAgICAgICAgICBpY29uPVwicGkgcGktdHJhc2hcIiBcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAob25DbGljayk9XCJ0b2dnbGVPcGVuRGVsZXRlQ29uZmlybSgpXCJcbiAgICAgICAgICA+PC9wLWJ1dHRvbj5cblxuICAgICAgICA8L3RkPlxuXG4gICAgICA8L3RyPlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICA8L3AtdGFibGU+XG5cbjwvYXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG48YXBwLWNvbmZpcm0tZGlhbG9nIFtjb25maXJtRGVsZXRlUGF5bG9hZF09XCJjb25maXJtRGVsZXRlUGF5bG9hZFwiLz5cblxuPGFwcC1yZWdpc3Rlci1yb2wtZGlhbG9nXG4gIFtpc1JlZ2lzdGVyT3Blbl09XCJpc1JlZ2lzdGVyT3BlblwiXG4gICh0b2dnbGVPcGVuUmVnaXN0ZXIpPVwidG9nZ2xlT3BlblJlZ2lzdGVyKClcIlxuLz4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kaWFsb2cnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXItcm9sLWRpYWxvZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtEaWFsb2dNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLXJvbC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vcmVnaXN0ZXItcm9sLWRpYWxvZy5jb21wb25lbnQuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclJvbERpYWxvZ0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaXNSZWdpc3Rlck9wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHRvZ2dsZU9wZW5SZWdpc3RlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjbG9zZVJlZ2lzdGVyRGlhbG9nICgpIHtcbiAgICB0aGlzLnRvZ2dsZU9wZW5SZWdpc3Rlci5lbWl0KCk7XG4gIH1cblxufVxuIiwiPHAtZGlhbG9nIFxuICBjbGFzcz1cInNtOnctMTJcIiBcbiAgaGVhZGVyPVwiUmVnaXN0cmFyIE51ZXZvIFJvbFwiIFxuICBbc3R5bGVdPVwie3dpZHRoOiAnNjAwcHgnfVwiXG4gIFt2aXNpYmxlXT1cImlzUmVnaXN0ZXJPcGVuXCIgXG4gIFttb2RhbF09XCJ0cnVlXCIgXG4gIFtjbG9zYWJsZV09XCJmYWxzZVwiXG4+XG5cbiAgPGRpdiBjbGFzcz1cInYtZmxleCBtdC0xXCI+XG5cbiAgICA8aW5wdXQgXG4gICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGVsIFJvbFwiXG4gICAgICBwSW5wdXRUZXh0IFxuICAgIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaC1mbGV4XCI+XG4gICAgICA8cC1idXR0b24gbGFiZWw9XCJDYW5jZWxhclwiIHNpemU9XCJzbWFsbFwiIHNldmVyaXR5PVwic2Vjb25kYXJ5XCIgKG9uQ2xpY2spPVwiY2xvc2VSZWdpc3RlckRpYWxvZygpXCIvPlxuICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiUmVnaXN0cmFyXCIgc2l6ZT1cInNtYWxsXCIvPlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBcbjwvcC1kaWFsb2c+XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2RpYWxvZyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb25maXJtLWRpYWxvZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtEaWFsb2dNb2R1bGUsIEJ1dHRvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjb25maXJtRGVsZXRlUGF5bG9hZDpDb25maXJtRGlhbG9nUGF5bG9hZCB8IG51bGwgPSBudWxsXG5cbn1cblxuZXhwb3J0IHR5cGUgQ29uZmlybURpYWxvZ1BheWxvYWQgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGFjdGlvbkxhYmVsOiBzdHJpbmdcbiAgYWN0aW9uOiAoKSA9PiB2b2lkXG4gIGNhbmNlbEFjdGlvbjogKCkgPT4gdm9pZFxufVxuIiwiPHAtZGlhbG9nIFxuICBbaGVhZGVyXT1cImNvbmZpcm1EZWxldGVQYXlsb2FkPy50aXRsZVwiIFxuICBbdmlzaWJsZV09XCIoY29uZmlybURlbGV0ZVBheWxvYWQgIT09IG51bGwpXCIgXG4gIFttb2RhbF09XCJ0cnVlXCJcbiAgW2Nsb3NhYmxlXT1cImZhbHNlXCJcbj5cblxuICA8ZGl2IGNsYXNzPVwidi1mbGV4XCI+XG5cbiAgICA8cCBjbGFzcz1cInctMTJcIj57eyBjb25maXJtRGVsZXRlUGF5bG9hZD8ubWVzc2FnZSB9fTwvcD5cblxuICAgIDxkaXYgY2xhc3M9XCJoLWZsZXhcIj5cblxuICAgICAgPHAtYnV0dG9uIFxuICAgICAgICBsYWJlbD1cIkNhbmNlbGFyXCIgXG4gICAgICAgIHNpemU9XCJzbWFsbFwiIFxuICAgICAgICBzZXZlcml0eT1cInNlY29uZGFyeVwiXG4gICAgICAgIChvbkNsaWNrKT1cImNvbmZpcm1EZWxldGVQYXlsb2FkPy5jYW5jZWxBY3Rpb24oKVwiIFxuICAgICAgLz5cblxuICAgICAgPHAtYnV0dG9uIFxuICAgICAgICBbbGFiZWxdPVwiY29uZmlybURlbGV0ZVBheWxvYWQ/LmFjdGlvbkxhYmVsXCIgXG4gICAgICAgIHNpemU9XCJzbWFsbFwiIFxuICAgICAgICAob25DbGljayk9XCJjb25maXJtRGVsZXRlUGF5bG9hZD8uY2FuY2VsQWN0aW9uKClcIiBcbiAgICAgIC8+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgXG48L3AtZGlhbG9nPiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBQb3N0Um9sZURhdGEsIFBvc3RSb2xlUmVzcG9uc2UgfSBmcm9tICcuL3JvbGVzLnR5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUm9sZXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHt9XG5cbiAgcG9zdFJvbCAoZGF0YTpQb3N0Um9sZURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8UG9zdFJvbGVSZXNwb25zZT4oJy9hcGkvcm9sZXMnLCBkYXRhKTtcbiAgfVxuXG59XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZHVjY2lvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBCdXR0b25Nb2R1bGUsIFRhYmxlTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y2Npb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vcHJvZHVjY2lvbi5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjY2lvbkNvbXBvbmVudCB7XG5cbiAgcHJvZHVjdGlvbkxpc3QgPSBbXG4gICAgZHVtbXlFbGVtZW50LFxuICAgIGR1bW15RWxlbWVudCxcbiAgICBkdW1teUVsZW1lbnQsXG4gIF1cblxufVxuXG5leHBvcnQgdHlwZSBQcm9kdWN0aW9uRGF0YSA9IHtcbiAgcGxhbjpzdHJpbmc7XG4gIGVhcDpzdHJpbmc7XG4gIHRpcG9fYXNpZ25hdHVyYTpzdHJpbmc7XG4gIGZhY3VsdGFkOnN0cmluZztcbiAgbW9kYWxpZGFkOnN0cmluZztcbiAgZm9ybWF0b19wOnN0cmluZztcbiAgZm9ybWF0b19zcDpzdHJpbmc7XG4gIGZvcm1hdG9fZDpzdHJpbmc7XG4gIHRpcG9fZGlzZW5vOnN0cmluZztcbiAgY2ljbG86c3RyaW5nO1xuICBkdXJhY2lvbl9zZW1hbmFzOnN0cmluZztcbn1cblxuY29uc3QgZHVtbXlFbGVtZW50OlByb2R1Y3Rpb25EYXRhID0ge1xuICBwbGFuOidQbGFuIDEnLFxuICBlYXA6J0VBUCAxJyxcbiAgdGlwb19hc2lnbmF0dXJhOidUaXBvIEFzaWduYXR1cmEgMScsXG4gIGZhY3VsdGFkOidGYWN1bHRhZCAxJyxcbiAgbW9kYWxpZGFkOidNb2RhbGlkYWQgMScsXG4gIGZvcm1hdG9fcDonRm9ybWF0byBQIDEnLFxuICBmb3JtYXRvX3NwOidGb3JtYXRvIFNQIDEnLFxuICBmb3JtYXRvX2Q6J0Zvcm1hdG8gRCAxJyxcbiAgdGlwb19kaXNlbm86J1RpcG8gRGlzZcOxbyAxJyxcbiAgY2ljbG86J0NpY2xvIDEnLFxuICBkdXJhY2lvbl9zZW1hbmFzOidEdXJhY2nDs24gU2VtYW5hcyAxJ1xufSIsIjxhcHAtbmF2aWdhdGlvbi1jb250YWluZXI+XG5cbiAgPGRpdiBjbGFzcz1cImgtZmxleC1qdXN0aWZ5LWJldHdlZW5cIj5cblxuICAgIDxoMyBjbGFzcz1cInRpdGxlLWNvbG9yXCI+UHJvZHVjY2nDs248L2gzPlxuXG4gIDwvZGl2PlxuXG4gIDxwLXRhYmxlIFt2YWx1ZV09XCJwcm9kdWN0aW9uTGlzdFwiPlxuXG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxuXG4gICAgICA8dHI+XG4gICAgICAgIDx0aD5QTEFOPC90aD5cbiAgICAgICAgPHRoPkVBUDwvdGg+XG4gICAgICAgIDx0aD5USVBPX0FTSUdOQVRVUkE8L3RoPlxuICAgICAgICA8dGg+RkFDVUxUQUQ8L3RoPlxuICAgICAgICA8dGg+TU9EQUxJREFEPC90aD5cbiAgICAgICAgPHRoPkZPUk1BVE8gUDwvdGg+XG4gICAgICAgIDx0aD5GT1JNQVRPX1NQPC90aD5cbiAgICAgICAgPHRoPkZPUk1BVE9fRDwvdGg+XG4gICAgICAgIDx0aD5USVBPX0RJU0VOTzwvdGg+XG4gICAgICAgIDx0aD5DSUNMTzwvdGg+XG4gICAgICAgIDx0aD5EVVJBQ0lPTl9TRU1BTkFTPC90aD5cbiAgICAgIDwvdHI+XG5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImJvZHlcIiBsZXQtdXNlcj5cblxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e3sgdXNlci5wbGFuIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIuZWFwIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIudGlwb19hc2lnbmF0dXJhIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIuZmFjdWx0YWQgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5tb2RhbGlkYWQgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5mb3JtYXRvX3AgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5mb3JtYXRvX3NwIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIuZm9ybWF0b19kIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIudGlwb19kaXNlbm8gfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5jaWNsbyB9fTwvdGQ+XG4gICAgICAgIDx0ZD57eyB1c2VyLmR1cmFjaW9uX3NlbWFuYXMgfX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIFxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgPC9wLXRhYmxlPlxuXG48L2FwcC1uYXZpZ2F0aW9uLWNvbnRhaW5lcj4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJsZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IE5hdmlnYXRpb25Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL25hdmlnYXRpb24tY29udGFpbmVyL25hdmlnYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBHZXRQZXJpb2RvIH0gZnJvbSAnLi4vLi4vYXBpL3BlcmlvZG9zL3BlcmlvZG9zLnR5cGVzJztcbmltcG9ydCB7IFJlZ2lzdGVyUGVyaW9kb0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2RpYWxvZ3MvcmVnaXN0ZXItcGVyaW9kby1kaWFsb2cvcmVnaXN0ZXItcGVyaW9kby1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQsIENvbmZpcm1EaWFsb2dQYXlsb2FkIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWRpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBlcmlvZG9zLXNjcmVlbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBcbiAgICBUYWJsZU1vZHVsZSwgXG4gICAgQnV0dG9uTW9kdWxlLCBcbiAgICBSZWdpc3RlclBlcmlvZG9EaWFsb2dDb21wb25lbnQsIFxuICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnRcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3BlcmlvZG9zLXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9wZXJpb2Rvcy1zY3JlZW4uY29tcG9uZW50LnNjc3MnXG59KVxuZXhwb3J0IGNsYXNzIFBlcmlvZG9zU2NyZWVuQ29tcG9uZW50IHtcblxuICBpc1JlZ2lzdGVyT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbmZpcm1EZWxldGVQYXlsb2FkOkNvbmZpcm1EaWFsb2dQYXlsb2FkIHwgbnVsbCA9IG51bGxcblxuICBwZXJpb2Rvc0xpc3Q6R2V0UGVyaW9kb1tdID0gW1xuICAgIHsgaWQ6ICcxJywgbm9tYnJlOiAnUGVyaW9kbyAxJyB9LFxuICAgIHsgaWQ6ICcyJywgbm9tYnJlOiAnUGVyaW9kbyAyJyB9LFxuICAgIHsgaWQ6ICczJywgbm9tYnJlOiAnUGVyaW9kbyAzJyB9LFxuICAgIHsgaWQ6ICc0Jywgbm9tYnJlOiAnUGVyaW9kbyA0JyB9LFxuICAgIHsgaWQ6ICc1Jywgbm9tYnJlOiAnUGVyaW9kbyA1JyB9LFxuICBdXG5cbiAgdG9nZ2xlT3BlblJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmlzUmVnaXN0ZXJPcGVuID0gIXRoaXMuaXNSZWdpc3Rlck9wZW47XG4gIH1cbiAgXG4gIHRvZ2dsZU9wZW5EZWxldGUgKCkge1xuICAgIHRoaXMuY29uZmlybURlbGV0ZVBheWxvYWQgPSB7XG4gICAgICB0aXRsZTogJ0VsaW1pbmFyIHBlcmlvZG8nLFxuICAgICAgbWVzc2FnZTogYMK/RXN0w6FzIHNlZ3VybyBkZSBlbGltaW5hciBlbCBwZXJpb2RvYCxcbiAgICAgIGFjdGlvbkxhYmVsOiAnRWxpbWluYXInLFxuICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGNhbmNlbEFjdGlvbjogKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlUGF5bG9hZCA9IG51bGxcbiAgICB9O1xuICB9XG5cbn1cbiIsIjxhcHAtbmF2aWdhdGlvbi1jb250YWluZXI+XG4gIFxuICA8ZGl2IGNsYXNzPVwiaC1mbGV4LWp1c3RpZnktYmV0d2VlblwiPlxuICAgIFxuICAgIDxoMyBjbGFzcz1cInRpdGxlLWNvbG9yXCI+UGVyaW9kb3M8L2gzPlxuXG4gICAgPHAtYnV0dG9uXG4gICAgICBsYWJlbD1cIlJlZ2lzdGFyIFBlcmlvZG9cIlxuICAgICAgaWNvbj1cInBpIHBpLXBsdXNcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIChvbkNsaWNrKT1cInRvZ2dsZU9wZW5SZWdpc3RlcigpXCJcbiAgICAvPlxuXG4gIDwvZGl2PlxuXG4gIDxwLXRhYmxlIFt2YWx1ZV09XCJwZXJpb2Rvc0xpc3RcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cblxuICAgICAgPHRyPlxuXG4gICAgICAgIDx0aD5JRDwvdGg+XG5cbiAgICAgICAgPHRoPk5PTUJSRTwvdGg+XG5cbiAgICAgICAgPHRoPkFDQ0lPTkVTPC90aD5cblxuICAgICAgPC90cj5cblxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiYm9keVwiIGxldC1wZXJpb2RvPlxuXG4gICAgICA8dHI+XG5cbiAgICAgICAgPHRkPnt7IHBlcmlvZG8uaWQgfX08L3RkPlxuXG4gICAgICAgIDx0ZD57eyBwZXJpb2RvLm5vbWJyZSB9fTwvdGQ+XG5cbiAgICAgICAgPHRkPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImgtZmxleFwiPlxuXG4gICAgICAgICAgICA8cC1idXR0b24gXG4gICAgICAgICAgICAgIGljb249XCJwaSBwaS1wZW5jaWxcIiBcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgKG9uQ2xpY2spPVwidG9nZ2xlT3BlblJlZ2lzdGVyKClcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHAtYnV0dG9uIFxuICAgICAgICAgICAgICBpY29uPVwicGkgcGktdHJhc2hcIiBcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgKG9uQ2xpY2spPVwidG9nZ2xlT3BlbkRlbGV0ZSgpXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3RkPlxuXG4gICAgICA8L3RyPlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICA8L3AtdGFibGU+XG5cbjwvYXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG48YXBwLWNvbmZpcm0tZGlhbG9nIFtjb25maXJtRGVsZXRlUGF5bG9hZF09XCJjb25maXJtRGVsZXRlUGF5bG9hZFwiLz5cblxuPGFwcC1yZWdpc3Rlci1wZXJpb2RvLWRpYWxvZyBcbiAgW2lzUmVnaXN0ZXJPcGVuXT1cImlzUmVnaXN0ZXJPcGVuXCIgXG4gICh0b2dnbGVPcGVuUmVnaXN0ZXIpPVwidG9nZ2xlT3BlblJlZ2lzdGVyKClcIlxuLz5cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZGlhbG9nJztcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnV0dG9uJztcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yZWdpc3Rlci1wZXJpb2RvLWRpYWxvZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtEaWFsb2dNb2R1bGUsIEJ1dHRvbk1vZHVsZSwgSW5wdXRUZXh0TW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlZ2lzdGVyLXBlcmlvZG8tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3JlZ2lzdGVyLXBlcmlvZG8tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ1xufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyUGVyaW9kb0RpYWxvZ0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaXNSZWdpc3Rlck9wZW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHRvZ2dsZU9wZW5SZWdpc3RlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG4gIGNsb3NlUmVnaXN0ZXIgKCkge1xuICAgIHRoaXMudG9nZ2xlT3BlblJlZ2lzdGVyLmVtaXQoKTtcbiAgfVxuXG59XG4iLCI8cC1kaWFsb2cgXG4gIGNsYXNzPVwic206dy0xMlwiIFxuICBoZWFkZXI9XCJSZWdpc3RyYXIgTnVldm8gUGVyaW9kb1wiIFxuICBbc3R5bGVdPVwie3dpZHRoOiAnNjAwcHgnfVwiXG4gIFt2aXNpYmxlXT1cImlzUmVnaXN0ZXJPcGVuXCIgXG4gIFttb2RhbF09XCJ0cnVlXCIgXG4gIFtjbG9zYWJsZV09XCJmYWxzZVwiXG4+XG5cbiAgPGRpdiBjbGFzcz1cInYtZmxleCBtdC0xXCI+XG5cbiAgICA8aW5wdXQgXG4gICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGVsIFBlcmlvZG9cIlxuICAgICAgcElucHV0VGV4dCBcbiAgICAvPlxuXG4gICAgPGRpdiBjbGFzcz1cImgtZmxleFwiPlxuICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQ2FuY2VsYXJcIiBzaXplPVwic21hbGxcIiBzZXZlcml0eT1cInNlY29uZGFyeVwiIChvbkNsaWNrKT1cImNsb3NlUmVnaXN0ZXIoKVwiLz5cbiAgICAgIDxwLWJ1dHRvbiBsYWJlbD1cIlJlZ2lzdHJhclwiIHNpemU9XCJzbWFsbFwiLz5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgXG48L3AtZGlhbG9nPlxuIiwiLy8gTW9kdWxlc1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG4vLyBEaWFsb2dzXG5pbXBvcnQgeyBSZWdpc3RlclByb2dyYW1hQ29tcG9uZW50RGlhbG9nIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9yZWdpc3Rlci1wcm9ncmFtYS1kaWFsb2cvcmVnaXN0ZXItcHJvZ3JhbWEuY29tcG9uZW50LWRpYWxvZyc7XG5cbi8vIFNlcnZpY2VcbmltcG9ydCB7IFByb2dyYW1hc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvcHJvZ3JhbWFzL3Byb2dyYW1hcy5zZXJ2aWNlJztcblxuLy8gVHlwZXNcbmltcG9ydCB7IEdldFByb2dyYW1hRGF0YSB9IGZyb20gJy4uLy4uL2FwaS9wcm9ncmFtYXMvcHJvZ3JhbWFzLnR5cGVzJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQsIENvbmZpcm1EaWFsb2dQYXlsb2FkIH0gZnJvbSAnLi4vLi4vc2hhcmVkLWRpYWxvZ3MvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2dyYW1hcy1zY3JlZW4nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQnV0dG9uTW9kdWxlLCBUYWJsZU1vZHVsZSwgTmF2aWdhdGlvbkNvbnRhaW5lckNvbXBvbmVudCwgUmVnaXN0ZXJQcm9ncmFtYUNvbXBvbmVudERpYWxvZywgQ29uZmlybURpYWxvZ0NvbXBvbmVudF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmFtYXMtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Byb2dyYW1hcy1zY3JlZW4uY29tcG9uZW50LnNjc3MnXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbWFzU2NyZWVuQ29tcG9uZW50IHtcblxuICBpc1JlZ2lzdGVyT3BlbiA9IGZhbHNlO1xuXG4gIGNvbmZpcm1EZWxldGVQYXlsb2FkOkNvbmZpcm1EaWFsb2dQYXlsb2FkIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IgKFxuICAgIHByaXZhdGUgcHJvZ3JhbWFzU2VydmljZTpQcm9ncmFtYXNTZXJ2aWNlXG4gICkge31cblxuICBwcm9ncmFtYXNMaXN0OkdldFByb2dyYW1hRGF0YVtdID0gW1xuICAgIHsgaWQ6ICcxJywgbm9tYnJlOiAnUHJvZ3JhbWEgMScgfSxcbiAgICB7IGlkOiAnMicsIG5vbWJyZTogJ1Byb2dyYW1hIDInIH0sXG4gICAgeyBpZDogJzMnLCBub21icmU6ICdQcm9ncmFtYSAzJyB9LFxuICAgIHsgaWQ6ICc0Jywgbm9tYnJlOiAnUHJvZ3JhbWEgNCcgfSxcbiAgICB7IGlkOiAnNScsIG5vbWJyZTogJ1Byb2dyYW1hIDUnIH0sXG4gIF07XG5cbiAgdG9nZ2xlT3BlblJlZ2lzdGVyICgpIHtcbiAgICB0aGlzLmlzUmVnaXN0ZXJPcGVuID0gIXRoaXMuaXNSZWdpc3Rlck9wZW47XG4gIH1cblxuICB0b2dnbGVPcGVuRGVsZXRlICgpIHtcbiAgICB0aGlzLmNvbmZpcm1EZWxldGVQYXlsb2FkID0ge1xuICAgICAgdGl0bGU6ICdFbGltaW5hciBwcm9ncmFtYScsXG4gICAgICBtZXNzYWdlOiBgwr9Fc3TDoXMgc2VndXJvIGRlIGVsaW1pbmFyIGVsIHByb2dyYW1hYCxcbiAgICAgIGFjdGlvbkxhYmVsOiAnRWxpbWluYXInLFxuICAgICAgYWN0aW9uOiAoKSA9PiB7fSxcbiAgICAgIGNhbmNlbEFjdGlvbjogKCkgPT4gdGhpcy5jb25maXJtRGVsZXRlUGF5bG9hZCA9IG51bGxcbiAgICB9O1xuICB9XG5cbiAgb25TdWJtaXRQcm9ncmFtYSAoKSB7XG4gICAgdGhpcy5wcm9ncmFtYXNTZXJ2aWNlLnBvc3RQcm9ncmFtYSh7IG5vbWJyZTonJyB9KS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDoocmVzcG9uc2UpID0+IHRoaXMub25TdWNjZXNzU3VibWl0UHJvZ3JhbWEocmVzcG9uc2UuZGF0YSksXG4gICAgICBlcnJvcjooKSA9PiB0aGlzLm9uRXJyb3JTdWJtaXRQcm9ncmFtYSgpXG4gICAgfSk7XG4gIH1cblxuICBvblN1Y2Nlc3NTdWJtaXRQcm9ncmFtYSAocmVzcG9uc2U6R2V0UHJvZ3JhbWFEYXRhKSB7fVxuXG4gIG9uRXJyb3JTdWJtaXRQcm9ncmFtYSAoKSB7fVxuXG59XG4iLCI8YXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG4gIDxkaXYgY2xhc3M9XCJoLWZsZXgtanVzdGlmeS1iZXR3ZWVuXCI+XG5cbiAgICA8aDMgY2xhc3M9XCJ0aXRsZS1jb2xvclwiPlByb2dyYW1hczwvaDM+XG5cbiAgICA8cC1idXR0b25cbiAgICAgIGxhYmVsPVwiUmVnaXN0cmFyIFByb2dyYW1hXCJcbiAgICAgIGljb249XCJwaSBwaS1wbHVzXCJcbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAob25DbGljayk9XCJ0b2dnbGVPcGVuUmVnaXN0ZXIoKVwiXG4gICAgPjwvcC1idXR0b24+XG5cbiAgPC9kaXY+XG5cbiAgPHAtdGFibGUgW3ZhbHVlXT1cInByb2dyYW1hc0xpc3RcIj5cblxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJoZWFkZXJcIj5cblxuICAgICAgPHRyPlxuXG4gICAgICAgIDx0aD5JRDwvdGg+XG5cbiAgICAgICAgPHRoPk5PTUJSRTwvdGg+XG5cbiAgICAgICAgPHRoPkFDQ0lPTkVTPC90aD5cblxuICAgICAgPC90cj5cblxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiYm9keVwiIGxldC1wcm9ncmFtYT5cblxuICAgICAgPHRyPlxuXG4gICAgICAgIDx0ZD57eyBwcm9ncmFtYS5pZCB9fTwvdGQ+XG5cbiAgICAgICAgPHRkPnt7IHByb2dyYW1hLm5vbWJyZSB9fTwvdGQ+XG5cbiAgICAgICAgPHRkPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImgtZmxleFwiPlxuXG4gICAgICAgICAgICA8cC1idXR0b24gXG4gICAgICAgICAgICAgIGljb249XCJwaSBwaS1wZW5jaWxcIiBcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgKG9uQ2xpY2spPVwidG9nZ2xlT3BlblJlZ2lzdGVyKClcIlxuICAgICAgICAgICAgPjwvcC1idXR0b24+XG5cbiAgICAgICAgICAgIDxwLWJ1dHRvbiBcbiAgICAgICAgICAgICAgaWNvbj1cInBpIHBpLXRyYXNoXCIgXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIChvbkNsaWNrKT1cInRvZ2dsZU9wZW5EZWxldGUoKVwiXG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDwvcC1idXR0b24+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3RkPlxuXG4gICAgICA8L3RyPlxuXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICA8L3AtdGFibGU+XG4gIFxuPC9hcHAtbmF2aWdhdGlvbi1jb250YWluZXI+XG5cbjxhcHAtcmVnaXN0ZXItcHJvZ3JhbWEtZGlhbG9nIFxuICAodG9nZ2xlT3BlblJlZ2lzdGVyKT1cInRvZ2dsZU9wZW5SZWdpc3RlcigpXCJcbiAgW2lzUmVnaXN0ZXJPcGVuXT1cImlzUmVnaXN0ZXJPcGVuXCJcbi8+XG5cbjxhcHAtY29uZmlybS1kaWFsb2cgW2NvbmZpcm1EZWxldGVQYXlsb2FkXT1cImNvbmZpcm1EZWxldGVQYXlsb2FkXCIvPiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8vIEFwaVxuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4nO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgR2V0UHJvZ3JhbWFSZXNwb25zZSwgUG9zdFByb2dyYW1hRGF0YSB9IGZyb20gJy4vcHJvZ3JhbWFzLnR5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtYXNTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHt9XG5cbiAgcG9zdFByb2dyYW1hIChkYXRhOlBvc3RQcm9ncmFtYURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8R2V0UHJvZ3JhbWFSZXNwb25zZT4oYCR7YXBpVXJsfS9wcm9ncmFtYXNgLCBkYXRhKTtcbiAgfVxuICBcbn1cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcbmltcG9ydCB7IElucHV0VGV4dE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXR0ZXh0JztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgVXNlcnNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBpL3VzZXJzL3VzZXJzLnNlcnZpY2UnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgUG9zdFVzZXJSZXNwb25zZSB9IGZyb20gJy4uLy4uL2FwaS91c2Vycy91c2Vycy50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1zdWJtaXQtdXNlci1zY3JlZW4nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQnV0dG9uTW9kdWxlLCBcbiAgICBJbnB1dFRleHRNb2R1bGUsIFxuICAgIE5hdmlnYXRpb25Db250YWluZXJDb21wb25lbnQsIFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFxuICAgIERyb3Bkb3duTW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zdWJtaXQtdXNlci1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc3VibWl0LXVzZXItc2NyZWVuLmNvbXBvbmVudC5zY3NzJ1xufSlcblxuZXhwb3J0IGNsYXNzIFN1Ym1pdFVzZXJTY3JlZW5Db21wb25lbnQge1xuXG4gIHJlZ2lzdGVyVXNlckZvcm06IEZvcm1Hcm91cDtcblxuICByb2xPcHRpb25zID0gW11cblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJzU2VydmljZVxuICApIHtcblxuICAgIHRoaXMucmVnaXN0ZXJVc2VyRm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgbm9tYnJlczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGFwZWxsaWRvczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGNvcnJlb0luc3Q6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBjb3JyZW9QZXJzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgdGVsZWZvbm86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICByb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG5cbiAgfVxuXG4gIG9uU3VibWl0VXNlciAoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5jcmVhdGVVc2VyKHRoaXMucmVnaXN0ZXJVc2VyRm9ybS52YWx1ZSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6KHJlc3BvbnNlKSA9PiB0aGlzLm9uU3VjY2Vzc1N1Ym1pdFVzZXIocmVzcG9uc2UpLFxuICAgICAgZXJyb3I6KCkgPT4gdGhpcy5vbkVycm9yU3VibWl0KClcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VjY2Vzc1N1Ym1pdFVzZXIgKHJlc3BvbnNlOlBvc3RVc2VyUmVzcG9uc2UpIHt9XG5cbiAgb25FcnJvclN1Ym1pdCAoKSB7fVxuXG59XG4iLCI8YXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG4gIDxkaXYgY2xhc3M9XCJncmlkXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwic206Y29sLTEyIG1kOmNvbC04IGxnOmNvbC02XCI+XG5cbiAgICAgIDxmb3JtIGNsYXNzPVwidi1mbGV4XCIgW2Zvcm1Hcm91cF09XCJyZWdpc3RlclVzZXJGb3JtXCI+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtY29sb3JcIj5SZWdpc3RybyBkZSBVc3VhcmlvczwvaDM+XG5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmVzXCIgXG4gICAgICAgICAgcElucHV0VGV4dCBcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJub21icmVzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZWxsaWRvc1wiIFxuICAgICAgICAgIHBJbnB1dFRleHQgXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXBlbGxpZG9zXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcnJlbyBJbnN0aXR1Y2lvbmFsXCIgXG4gICAgICAgICAgcElucHV0VGV4dCBcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZW9JbnN0XCJcbiAgICAgICAgLz5cblxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcnJlbyBQZXJzb25hbFwiIFxuICAgICAgICAgIHBJbnB1dFRleHQgXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVvUGVyc1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJOw7ptZXJvIGRlIENvbnRhY3RvXCIgXG4gICAgICAgICAgcElucHV0VGV4dCBcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ0ZWxlZm9ub1wiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPHAtZHJvcGRvd24gXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicm9sXCIgXG4gICAgICAgICAgW29wdGlvbnNdPVwicm9sT3B0aW9uc1wiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY2Npb25hIHVuIFJvbFwiXG4gICAgICAgICAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxwLWJ1dHRvbiBcbiAgICAgICAgICBsYWJlbD1cIlJlZ2lzdHJhclwiIFxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgID48L3AtYnV0dG9uPlxuXG4gICAgICA8L2Zvcm0+XG5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cblxuPC9hcHAtbmF2aWdhdGlvbi1jb250YWluZXI+XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vLyBBcGlcbmltcG9ydCB7IGFwaVVybCB9IGZyb20gJy4uJztcblxuLy8gVHlwZXNcbmltcG9ydCB7IFBvc3RVc2VyRGF0YSwgUG9zdFVzZXJSZXNwb25zZSB9IGZyb20gJy4vdXNlcnMudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cblxuICBjcmVhdGVVc2VyIChkYXRhOlBvc3RVc2VyRGF0YSk6T2JzZXJ2YWJsZTxQb3N0VXNlclJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBvc3RVc2VyUmVzcG9uc2U+KGAke2FwaVVybH0vdXNlcnNgLCBkYXRhKTtcbiAgfVxuXG59XG4iLCIvLyBNb2R1bGVzXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9idXR0b24nO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgR2V0RGlzZW5vQ3Vyc29EYXRhIH0gZnJvbSAnLi4vLi4vYXBpL2Rpc2Vuby1jdXJzby9kaXNlbm8tY3Vyc28udHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc29saWNpdHVkZXMtZGlzZW5vLWN1cnNvJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05hdmlnYXRpb25Db250YWluZXJDb21wb25lbnQsIEJ1dHRvbk1vZHVsZSwgVGFibGVNb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc29saWNpdHVkZXMtZGlzZW5vLWN1cnNvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NvbGljaXR1ZGVzLWRpc2Vuby1jdXJzby5jb21wb25lbnQuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBTb2xpY2l0dWRlc0Rpc2Vub0N1cnNvQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7IH1cblxuICByZXF1ZXN0TGlzdDpHZXREaXNlbm9DdXJzb0RhdGFbXSA9IFtcbiAgICBkdW1teVJlcXVlc3QsXG4gICAgZHVtbXlSZXF1ZXN0LFxuICAgIGR1bW15UmVxdWVzdCxcbiAgXVxuXG4gIHJlZGlyZWN0VG9TdWJtaXRSZXF1ZXN0KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N1Ym1pdC1zb2xpY2l0dWQtZGlzZW5vLWN1cnNvJ10pXG4gIH1cblxufVxuXG5jb25zdCBkdW1teVJlcXVlc3Q6R2V0RGlzZW5vQ3Vyc29EYXRhID0geyBcbiAgYXNpZ25hdHVyYTonQXNpZ25hdHVyYSAxJyxcbiAgY2ljbG86J0NpY2xvIDEnLFxuICBjb2RpZ286J0NvZGlnbyAxJyxcbiAgZG9jZW50ZV9kaXNlbmFkb3I6J0RvY2VudGUgMScsXG4gIGVhcDonRUFQIDEnLFxuICBmYWN1bHRhZDonRmFjdWx0YWQgMScsXG4gIGZvcm1hdG86J0Zvcm1hdG8gMScsXG4gIGlkOicxJyxcbiAgbW9kYWxpZGFkOidNb2RhbGlkYWQgMScsXG4gIHBsYW46J1BsYW4gMScsXG4gIHRpcG9fYXNpZ25hdHVyYTonVGlwbyBBc2lnbmF0dXJhIDEnLFxuICB0aXBvX2Rpc2VubzonVGlwbyBEaXNlbm8gMSdcbn0iLCI8YXBwLW5hdmlnYXRpb24tY29udGFpbmVyPlxuXG4gIDxkaXYgY2xhc3M9XCJoLWZsZXgtanVzdGlmeS1iZXR3ZWVuXCI+XG5cbiAgICA8aDMgY2xhc3M9XCJ0aXRsZS1jb2xvclwiPkxpc3RhZG8gZGUgU29saWNpdHVkZXMgZGUgRGlzZcOxbyBkZSBDdXJzbzwvaDM+XG5cbiAgICA8cC1idXR0b24gXG4gICAgICBsYWJlbD1cIlJlZ2lzdHJhciBTb2xpY2l0dWRcIlxuICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgIGljb249XCJwaSBwaS1wbHVzXCIgXG4gICAgICAob25DbGljayk9XCJyZWRpcmVjdFRvU3VibWl0UmVxdWVzdCgpXCJcbiAgICAvPlxuXG4gIDwvZGl2PlxuXG4gIDxwLXRhYmxlIFt2YWx1ZV09XCJyZXF1ZXN0TGlzdFwiPlxuXG4gICAgPG5nLXRlbXBsYXRlIHBUZW1wbGF0ZT1cImhlYWRlclwiPlxuXG4gICAgICA8dHI+XG4gICAgICAgIDx0aD5DT0RJR088L3RoPlxuICAgICAgICA8dGg+QVNJR05BVFVSQTwvdGg+XG4gICAgICAgIDx0aD5FQVA8L3RoPlxuICAgICAgICA8dGg+UExBTjwvdGg+XG4gICAgICAgIDx0aD5USVBPX0FTSUdOQVRVUkE8L3RoPlxuICAgICAgICA8dGg+VElQT19ESVNFTk88L3RoPlxuICAgICAgICA8dGg+RkFDVUxUQUQ8L3RoPlxuICAgICAgICA8dGg+Q0lDTE88L3RoPlxuICAgICAgICA8dGg+RE9DRU5URV9ESVNFTkFET1I8L3RoPlxuICAgICAgICA8dGg+TU9EQUxJREFEPC90aD5cbiAgICAgICAgPHRoPkZPUk1BVE88L3RoPlxuICAgICAgPC90cj5cblxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgcFRlbXBsYXRlPVwiYm9keVwiIGxldC11c2VyPlxuXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD57eyB1c2VyLmNvZGlnbyB9fTwvdGQ+XG4gICAgICAgIDx0ZD57eyB1c2VyLmFzaWduYXR1cmEgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5lYXAgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5wbGFuIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIudGlwb19hc2lnbmF0dXJhIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIudGlwb19kaXNlbm8gfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5mYWN1bHRhZCB9fTwvdGQ+XG4gICAgICAgIDx0ZD57eyB1c2VyLmNpY2xvIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IHVzZXIuZG9jZW50ZV9kaXNlbmFkb3IgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5tb2RhbGlkYWQgfX08L3RkPlxuICAgICAgICA8dGQ+e3sgdXNlci5mb3JtYXRvIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICBcbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L3AtdGFibGU+XG5cbjwvYXBwLW5hdmlnYXRpb24tY29udGFpbmVyPiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQgeyBNZXNzYWdlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9tZXNzYWdlJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG4vLyBTZXJ2aWNlXG5pbXBvcnQgeyBEaXNlbm9DdXJzb1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hcGkvZGlzZW5vLWN1cnNvL2Rpc2Vuby1jdXJzby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXN1Ym1pdC1zb2xpY2l0dWQtZGlzZW5vLWN1cnNvJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50LCBcbiAgICBJbnB1dFRleHRNb2R1bGUsIFxuICAgIERyb3Bkb3duTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWVzc2FnZU1vZHVsZSxcbiAgICBDYXJkTW9kdWxlLFxuICAgIEJyZWFkY3J1bWJNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Ym1pdC1zb2xpY2l0dWQtZGlzZW5vLWN1cnNvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3N1Ym1pdC1zb2xpY2l0dWQtZGlzZW5vLWN1cnNvLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdWJtaXRTb2xpY2l0dWREaXNlbm9DdXJzb0NvbXBvbmVudCB7XG5cbiAgcmVnaXN0ZXJSZXF1ZXN0Rm9ybTogRm9ybUdyb3VwO1xuICByZWdpc3RlckNhcnBldGFGb3JtOiBGb3JtR3JvdXA7XG4gIHNob3VsZFNob3dDYXJwZXRhczpib29sZWFuID0gZmFsc2U7XG5cbiAgZmlyc3RPcHRpb25TZWxlY3RlZDpGaXJzdFBvc3NpYmxlT3B0aW9ucyA9IG51bGw7XG4gIHNlY29uZE9wdGlvblNlbGVjdGVkOlNlY29uZFBvc3NpYmxlT3B0aW9ucyA9IG51bGw7XG5cbiAgbW9kYWxpZGFkT3B0aW9uczpPcHRpb25EYXRhW10gPSBbXG4gICAgeyBpZDowLCBsYWJlbDonLScgfSxcbiAgICB7IGlkOjEsIGxhYmVsOidQcmVzZW5jaWFsJyB9LFxuICAgIHsgaWQ6MiwgbGFiZWw6J1NlbWlwcmVzZW5jaWFsJyB9LFxuICAgIHsgaWQ6MywgbGFiZWw6J0EgRGlzdGFjaWEnIH0sXG4gICAgeyBpZDo0LCBsYWJlbDonUHJlc2VuY2lhbCB5IGEgRGlzdGFuY2lhJyB9LFxuICAgIHsgaWQ6NSwgbGFiZWw6J1NlbWlwcmVzZW5jaWFsIHkgYSBEaXN0YW5jaWEnIH0sXG4gICAgeyBpZDo2LCBsYWJlbDonUHJlc2VuY2lhbCB5IFNlbWlwcmVzZW5jaWFsJyB9LFxuICAgIHsgaWQ6NywgbGFiZWw6J1ByZXNlbmNpYWwsIFNlbWlwcmVzZW5jaWFsIHkgYSBEaXN0YW5jaWEnIH0sXG4gIF07XG5cbiAgcHJlc2VuY2lhbE9wdGlvbnM6T3B0aW9uRGF0YVtdID0gW1xuICAgIHsgaWQ6MCwgbGFiZWw6Jy0nIH0sXG4gICAgeyBpZDoxLCBsYWJlbDonUHJlc2VuY2lhbCcgfSxcbiAgICB7IGlkOjIsIGxhYmVsOidWaXJ0dWFsIDE2IFNlbWFuYXMnIH0sXG4gICAgeyBpZDozLCBsYWJlbDonVmlydHVhbCA4IFNlbWFuYXMnIH0sXG4gICAgeyBpZDo0LCBsYWJlbDonQmxlbmRlZCAxNiBTZW1hbmFzJyB9LFxuICAgIHsgaWQ6NSwgbGFiZWw6J0JsZW5kZWQgOCBTZW1hbmFzJyB9LFxuICBdO1xuXG4gIHNlbWlwcmVzZW5jaWFsT3B0aW9uczpPcHRpb25EYXRhW10gPSBbXG4gICAgeyBpZDowLCBsYWJlbDonLScgfSxcbiAgICB7IGlkOjEsIGxhYmVsOidQcmVzZW5jaWFsIDE2IFNlbWFuYXMnIH0sXG4gICAgeyBpZDoyLCBsYWJlbDonUHJlc2VuY2lhbCA4IFNlbWFuYXMnIH0sXG4gICAgeyBpZDozLCBsYWJlbDonVmlydHVhbCAxNiBTZW1hbmFzJyB9LFxuICAgIHsgaWQ6NCwgbGFiZWw6J1ZpcnR1YWwgOCBTZW1hbmFzJyB9LFxuICAgIHsgaWQ6NSwgbGFiZWw6J0JsZW5kZWQgMTYgU2VtYW5hcycgfSxcbiAgXTtcblxuICBhRGlzdGFuY2lhT3B0aW9uczpPcHRpb25EYXRhW10gPSBbXG4gICAgeyBpZDowLCBsYWJlbDonLScgfSxcbiAgICB7IGlkOjEsIGxhYmVsOidQcmVzZW5jaWFsIDE2IFNlbWFuYXMnIH0sXG4gICAgeyBpZDoyLCBsYWJlbDonUHJlc2VuY2lhbCA4IFNlbWFuYXMnIH0sXG4gICAgeyBpZDozLCBsYWJlbDonVmlydHVhbCAxNiBTZW1hbmFzJyB9LFxuICAgIHsgaWQ6NCwgbGFiZWw6J1ZpcnR1YWwgOCBTZW1hbmFzJyB9LFxuICAgIHsgaWQ6NSwgbGFiZWw6J0JsZW5kZWQgMTYgU2VtYW5hcycgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvciAoXG4gICAgcHJpdmF0ZSBmYjpGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGRpc2Vub0N1cnNvU2VydmljZTpEaXNlbm9DdXJzb1NlcnZpY2VcbiAgKSB7XG5cbiAgICB0aGlzLnJlZ2lzdGVyQ2FycGV0YUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGZvcm1hdG9fcHJlc2VuY2lhbDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZm9ybWF0b19zZW1pcHJlc2VuY2lhbDogWzAsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZm9ybV9kaXN0YW5jaWE6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICB9KTtcblxuICAgIHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgY29kaWdvOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgYXNpZ25hdHVyYTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGVhcDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBsYW46IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB0aXBvX2FzaWduYXR1cmE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICB0aXBvX2Rpc2VubzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGZhY3VsdGFkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgY2ljbG86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBkb2NlbnRlX2Rpc2XDsWFkb3I6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBtb2RhbGlkYWQ6IFswLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGZvcm1hdG86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgfSk7XG5cbiAgfVxuXG4gIHNlbGVjdEZpcnN0T3B0aW9uIChvcHQ6Rmlyc3RQb3NzaWJsZU9wdGlvbnMpIHtcbiAgICB0aGlzLmZpcnN0T3B0aW9uU2VsZWN0ZWQgPSBvcHRcbiAgfVxuXG4gIHNlbGVjdFNlY29uZE9wdGlvbiAob3B0OlNlY29uZFBvc3NpYmxlT3B0aW9ucykge1xuICAgIHRoaXMuc2Vjb25kT3B0aW9uU2VsZWN0ZWQgPSBvcHRcbiAgfVxuICAgXG4gIHRvZ2dsZVNob3VsZFNob3dDYXJwZXRhcyAoKSB7XG4gICAgdGhpcy5zaG91bGRTaG93Q2FycGV0YXMgPSAhdGhpcy5zaG91bGRTaG93Q2FycGV0YXM7XG4gIH1cblxuICBjbGVhbkZpcnN0T3B0aW9uICgpIHtcbiAgICB0aGlzLmZpcnN0T3B0aW9uU2VsZWN0ZWQgPSBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgT3B0aW9uRGF0YSA9IHtcbiAgaWQ6bnVtYmVyO1xuICBsYWJlbDpzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIEZpcnN0UG9zc2libGVPcHRpb25zID0gbnVsbCB8ICdQcmVzZW5jaWFsJyB8ICdTZW1pcHJlc2VuY2lhbERpc3RhbmNpYSc7XG5leHBvcnQgdHlwZSBTZWNvbmRQb3NzaWJsZU9wdGlvbnMgPSBudWxsIHwgJ1ByZXNlbmNpYWwnIHwgJ1ByZXNlbmNpYWwxNlNlbWFuYXMnOyIsIjxhcHAtbmF2aWdhdGlvbi1jb250YWluZXI+XG5cbiAgPGRpdiBjbGFzcz1cInYtZmxleFwiPlxuXG4gICAgPGgzIGNsYXNzPVwidGl0bGUtY29sb3JcIj5SZWdpc3RybyBkZSBTb2xpY2l0dWQgZGUgRGlzZcOxbyBkZSBDdXJzbzwvaDM+XG5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInJlZ2lzdGVyUmVxdWVzdEZvcm1cIiBjbGFzcz1cImdyaWRcIj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBtZDpjb2wtNiB2LWZsZXhcIj5cbiAgXG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICBwSW5wdXRUZXh0IFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ8OzZGlnb1wiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY29kaWdvXCIgXG4gICAgICAgIC8+XG4gIFxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgcElucHV0VGV4dCBcbiAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNpZ25hdHVyYVwiXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXNpZ25hdHVyYVwiIFxuICAgICAgICAvPlxuICBcbiAgICAgICAgPHAtZHJvcGRvd24gXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZWFwXCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFYXBcIlxuICAgICAgICAgIFtzdHlsZV09XCJ7J3dpZHRoJzonMTAwJSd9XCJcbiAgICAgICAgLz5cbiAgXG4gICAgICAgIDxwLWRyb3Bkb3duIFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBsYW5cIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsYW5cIlxuICAgICAgICAgIFtzdHlsZV09XCJ7J3dpZHRoJzonMTAwJSd9XCJcbiAgICAgICAgLz5cbiAgXG4gICAgICAgIDxwLWRyb3Bkb3duIFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInRpcG9fYXNpZ25hdHVyYVwiIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlwbyBkZSBBc2lnbmF0dXJhXCJcbiAgICAgICAgICBbc3R5bGVdPVwieyd3aWR0aCc6JzEwMCUnfVwiXG4gICAgICAgIC8+XG5cbiAgXG4gICAgICAgIDxwLWJ1dHRvbiBcbiAgICAgICAgICBsYWJlbD1cIlJlZ2lzdHJhclwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAob25DbGljayk9XCJ0b2dnbGVTaG91bGRTaG93Q2FycGV0YXMoKVwiXG4gICAgICAgIC8+XG4gIFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgbWQ6Y29sLTYgdi1mbGV4XCI+XG5cbiAgICAgICAgPHAtZHJvcGRvd24gXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGlwb19kaXNlbm9cIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpcG8gZGUgRGlzZcOxb1wiXG4gICAgICAgICAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxwLWRyb3Bkb3duIFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImZhY3VsdGFkXCIgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGYWN1bHRhZFwiXG4gICAgICAgICAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAvPlxuICBcbiAgICAgICAgPHAtZHJvcGRvd24gXG4gICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY2ljbG9cIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpY2xvXCJcbiAgICAgICAgICBbc3R5bGVdPVwieyd3aWR0aCc6JzEwMCUnfVwiXG4gICAgICAgIC8+XG4gIFxuICAgICAgICA8cC1kcm9wZG93biBcbiAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJkb2NlbnRlX2Rpc2XDsWFkb3JcIiBcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRvY2VudGUgRGlzZcOxYWRvclwiXG4gICAgICAgICAgW3N0eWxlXT1cInsnd2lkdGgnOicxMDAlJ31cIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxwLWRyb3Bkb3duIFxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm1vZGFsaWRhZFwiIFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9kYWxpZGFkXCJcbiAgICAgICAgICBbb3B0aW9uc109XCJtb2RhbGlkYWRPcHRpb25zXCJcbiAgICAgICAgICBbc3R5bGVdPVwieyd3aWR0aCc6JzEwMCUnfVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtY29sb3JcIj5Gb3JtYXRvPC9oMz5cblxuICAgICAgICBAaWYgKHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybS52YWx1ZS5tb2RhbGlkYWQgPT09IDApIHtcblxuICAgICAgICAgIDxwLW1lc3NhZ2UgXG4gICAgICAgICAgICBzZXZlcml0eT1cIndhcm5cIlxuICAgICAgICAgICAgdGV4dD1cIlNlbGVjY2lvbmUgZWwgZm9ybWF0byBkZSBhY3VlcmRvIGEgbGEgbW9kYWxpZGFkXCJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7J3dpZHRoJzonMTAwJSd9XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgIH1cblxuICAgICAgICBAaWYgKCBcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyUmVxdWVzdEZvcm0udmFsdWUubW9kYWxpZGFkLmlkID09PSAxIHx8XG4gICAgICAgICAgdGhpcy5yZWdpc3RlclJlcXVlc3RGb3JtLnZhbHVlLm1vZGFsaWRhZC5pZCA9PT0gNCB8fFxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybS52YWx1ZS5tb2RhbGlkYWQuaWQgPT09IDYgfHxcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyUmVxdWVzdEZvcm0udmFsdWUubW9kYWxpZGFkLmlkID09PSA3IFxuICAgICAgICApIHtcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJzYy1mb3JtYXRvLXByZXNlbmNpYWxcIj5QcmVzZW5jaWFsPC9sYWJlbD5cblxuICAgICAgICAgIDxwLWRyb3Bkb3duXG4gICAgICAgICAgICBpZD1cInNjLWZvcm1hdG8tcHJlc2VuY2lhbFwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmb3JtYXRvX3ByZXNlbmNpYWxcIlxuICAgICAgICAgICAgW29wdGlvbnNdPVwicHJlc2VuY2lhbE9wdGlvbnNcIlxuICAgICAgICAgICAgW3N0eWxlXT1cInsgd2lkdGg6ICcxMDAlJyB9XCJcbiAgICAgICAgICAvPlxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgQGlmICggXG4gICAgICAgICAgdGhpcy5yZWdpc3RlclJlcXVlc3RGb3JtLnZhbHVlLm1vZGFsaWRhZC5pZCA9PT0gMiB8fFxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybS52YWx1ZS5tb2RhbGlkYWQuaWQgPT09IDUgfHxcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyUmVxdWVzdEZvcm0udmFsdWUubW9kYWxpZGFkLmlkID09PSA2IHx8XG4gICAgICAgICAgdGhpcy5yZWdpc3RlclJlcXVlc3RGb3JtLnZhbHVlLm1vZGFsaWRhZC5pZCA9PT0gNyBcbiAgICAgICAgKSB7XG5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwic2MtZm9ybWF0by1zZW1pcHJlc2VuY2lhbFwiPlNlbWlwcmVzZW5jaWFsPC9sYWJlbD5cblxuICAgICAgICAgIDxwLWRyb3Bkb3duXG4gICAgICAgICAgICBpZD1cInNjLWZvcm1hdG8tcHJlc2VuY2lhbFwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJmb3JtYXRvX3NlbWlwcmVzZW5jaWFsXCJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cInNlbWlwcmVzZW5jaWFsT3B0aW9uc1wiXG4gICAgICAgICAgICBbc3R5bGVdPVwieyB3aWR0aDogJzEwMCUnIH1cIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIEBpZiAoIFxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybS52YWx1ZS5tb2RhbGlkYWQuaWQgPT09IDMgfHxcbiAgICAgICAgICB0aGlzLnJlZ2lzdGVyUmVxdWVzdEZvcm0udmFsdWUubW9kYWxpZGFkLmlkID09PSA0IHx8XG4gICAgICAgICAgdGhpcy5yZWdpc3RlclJlcXVlc3RGb3JtLnZhbHVlLm1vZGFsaWRhZC5pZCA9PT0gNSB8fFxuICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZXF1ZXN0Rm9ybS52YWx1ZS5tb2RhbGlkYWQuaWQgPT09IDcgXG4gICAgICAgICkge1xuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInNjLWZvcm1hdG8tYS1kaXN0YW5jaWFcIj5BIERpc3RhbmNpYTwvbGFiZWw+XG5cbiAgICAgICAgICA8cC1kcm9wZG93blxuICAgICAgICAgICAgaWQ9XCJzYy1mb3JtYXRvLWEtZGlzdGFuY2lhXCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImZvcm1fZGlzdGFuY2lhXCJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cImFEaXN0YW5jaWFPcHRpb25zXCJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7IHdpZHRoOiAnMTAwJScgfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBcbiAgICAgICAgfVxuICBcbiAgICAgIDwvZGl2PlxuXG4gICAgPC9mb3JtPlxuXG4gICAgQGlmIChzaG91bGRTaG93Q2FycGV0YXMpIHsgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3M9XCJoLWZsZXgtYWxpZ24tY2VudGVyXCI+XG5cbiAgICAgICAgPGgzIGNsYXNzPVwidGl0bGUtY29sb3JcIj5DYXJwZXRhczwvaDM+XG5cbiAgICAgICAgQGlmIChmaXJzdE9wdGlvblNlbGVjdGVkICE9IG51bGwpIHsgXG5cbiAgICAgICAgICA8cC1idXR0b24gXG4gICAgICAgICAgICBsYWJlbD1cIlZvbHZlclwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgKG9uQ2xpY2spPVwiY2xlYW5GaXJzdE9wdGlvbigpXCJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7ICdtYXJnaW4tbGVmdCc6ICc0MHB4JyB9XCJcblxuICAgICAgICAgIC8+XG5cbiAgICAgICAgfVxuXG4gICAgICA8L2Rpdj5cblxuICAgIH1cblxuICAgIEBpZiAoc2hvdWxkU2hvd0NhcnBldGFzICYmIGZpcnN0T3B0aW9uU2VsZWN0ZWQgPT09IG51bGwpIHtcblxuICAgICAgPGRpdiBjbGFzcz1cImgtZmxleFwiPlxuXG4gICAgICAgIDxwLWNhcmQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidi1mbGV4XCI+XG5cbiAgICAgICAgICAgIDxoND5QcmVzZW5jaWFsPC9oND5cblxuICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQWNjZWRlclwiIHNpemU9XCJzbWFsbFwiIChvbkNsaWNrKT1cInNlbGVjdEZpcnN0T3B0aW9uKCdQcmVzZW5jaWFsJylcIi8+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICA8cC1jYXJkPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInYtZmxleFwiPlxuXG4gICAgICAgICAgICA8aDQ+U2VtaXByZXNlbmNpYWwgeSBhIERpc3RhbmNhPC9oND5cblxuICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQWNjZWRlclwiIHNpemU9XCJzbWFsbFwiIChvbkNsaWNrKT1cInNlbGVjdEZpcnN0T3B0aW9uKCdTZW1pcHJlc2VuY2lhbERpc3RhbmNpYScpXCIvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgfSBAZWxzZSBpZiAoc2hvdWxkU2hvd0NhcnBldGFzICYmIGZpcnN0T3B0aW9uU2VsZWN0ZWQgPT09ICdQcmVzZW5jaWFsJykge1xuXG4gICAgICA8ZGl2IGNsYXNzPVwiaC1mbGV4XCI+XG5cbiAgICAgICAgPHAtY2FyZD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2LWZsZXhcIj5cbiAgXG4gICAgICAgICAgICA8aDQ+UHJlc2VuY2lhbDwvaDQ+XG4gIFxuICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQWNjZWRlclwiIHNpemU9XCJzbWFsbFwiIChvbkNsaWNrKT1cInNlbGVjdEZpcnN0T3B0aW9uKCdQcmVzZW5jaWFsJylcIi8+XG4gIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgfSBAZWxzZSBpZiAoc2hvdWxkU2hvd0NhcnBldGFzICYmIGZpcnN0T3B0aW9uU2VsZWN0ZWQgPT09ICdTZW1pcHJlc2VuY2lhbERpc3RhbmNpYScpIHtcblxuICAgICAgPGRpdiBjbGFzcz1cImgtZmxleFwiPlxuXG4gICAgICAgIDxwLWNhcmQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidi1mbGV4XCI+XG4gIFxuICAgICAgICAgICAgPGg0PlZpcnR1YWwgMTYgU2VtYW5hczwvaDQ+XG4gIFxuICAgICAgICAgICAgPHAtYnV0dG9uIGxhYmVsPVwiQWNjZWRlclwiIHNpemU9XCJzbWFsbFwiIChvbkNsaWNrKT1cInNlbGVjdEZpcnN0T3B0aW9uKCdQcmVzZW5jaWFsJylcIi8+XG4gIFxuICAgICAgICAgIDwvZGl2PlxuICBcbiAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgfVxuICAgIFxuICA8L2Rpdj5cblxuPC9hcHAtbmF2aWdhdGlvbi1jb250YWluZXI+IiwiLy8gTW9kdWxlc1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLy8gVHlwZXNcbmltcG9ydCB7IFBvc3REaXNlbm9DdXJzb0RhdGEsIFBvc3REaXNlbm9DdXJzb1Jlc3BvbnNlIH0gZnJvbSAnLi9kaXNlbm8tY3Vyc28udHlwZXMnO1xuaW1wb3J0IHsgYXBpVXJsIH0gZnJvbSAnLi4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIERpc2Vub0N1cnNvU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7fVxuXG4gIHBvc3REaXNlbm9DdXJzbyAoZGF0YTpQb3N0RGlzZW5vQ3Vyc29EYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFBvc3REaXNlbm9DdXJzb1Jlc3BvbnNlPihgJHthcGlVcmx9L2Rpc2Vuby1jdXJzb2AsIGRhdGEpO1xuICB9XG5cbn1cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWNvbnRhaW5lci9uYXZpZ2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOYXZpZ2F0aW9uQ29udGFpbmVyQ29tcG9uZW50XSxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Ym1pdC1wcm9kdWNjaW9uLWdlbmVyYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbC5jb21wb25lbnQuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgU3VibWl0UHJvZHVjY2lvbkdlbmVyYWxDb21wb25lbnQge1xuXG59XG4iLCI8cD5zdWJtaXQtcHJvZHVjY2lvbi1nZW5lcmFsIHdvcmtzITwvcD5cbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIFNjcmVlbnNcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW5zL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vc2NyZWVucy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZXNDb21wb25lbnQgfSBmcm9tICcuL3NjcmVlbnMvcm9sZXMvcm9sZXMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2R1Y2Npb25Db21wb25lbnQgfSBmcm9tICcuL3NjcmVlbnMvcHJvZHVjY2lvbi9wcm9kdWNjaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXJpb2Rvc1NjcmVlbkNvbXBvbmVudCB9IGZyb20gJy4vc2NyZWVucy9wZXJpb2Rvcy1zY3JlZW4vcGVyaW9kb3Mtc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9ncmFtYXNTY3JlZW5Db21wb25lbnQgfSBmcm9tICcuL3NjcmVlbnMvcHJvZ3JhbWFzLXNjcmVlbi9wcm9ncmFtYXMtc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJtaXRVc2VyU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXQtc2NyZWVucy9zdWJtaXQtdXNlci1zY3JlZW4vc3VibWl0LXVzZXItc2NyZWVuLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb2xpY2l0dWRlc0Rpc2Vub0N1cnNvQ29tcG9uZW50IH0gZnJvbSAnLi9zY3JlZW5zL3NvbGljaXR1ZGVzLWRpc2Vuby1jdXJzby9zb2xpY2l0dWRlcy1kaXNlbm8tY3Vyc28uY29tcG9uZW50JztcbmltcG9ydCB7IFN1Ym1pdFNvbGljaXR1ZERpc2Vub0N1cnNvQ29tcG9uZW50IH0gZnJvbSAnLi9zdWJtaXQtc2NyZWVucy9zdWJtaXQtc29saWNpdHVkLWRpc2Vuby1jdXJzby9zdWJtaXQtc29saWNpdHVkLWRpc2Vuby1jdXJzby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VibWl0UHJvZHVjY2lvbkdlbmVyYWxDb21wb25lbnQgfSBmcm9tICcuL3N1Ym1pdC1zY3JlZW5zL3N1Ym1pdC1wcm9kdWNjaW9uLWdlbmVyYWwvc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDonbG9naW4nLCBjb21wb25lbnQ6TG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOid1c2VycycsIGNvbXBvbmVudDpVc2Vyc0NvbXBvbmVudCB9LFxuICB7IHBhdGg6J3JvbGVzJywgY29tcG9uZW50OlJvbGVzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDoncGVyaW9kb3MnLCBjb21wb25lbnQ6UGVyaW9kb3NTY3JlZW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOidwcm9ncmFtYXMnLCBjb21wb25lbnQ6UHJvZ3JhbWFzU2NyZWVuQ29tcG9uZW50IH0sXG4gIHsgcGF0aDonc3VibWl0LXVzZXInLCBjb21wb25lbnQ6U3VibWl0VXNlclNjcmVlbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6J3NvbGljaXR1ZC1kaXNlbm8tY3Vyc28nLCBjb21wb25lbnQ6U29saWNpdHVkZXNEaXNlbm9DdXJzb0NvbXBvbmVudCB9LFxuICB7IHBhdGg6J3Byb2R1Y2Npb24nLCBjb21wb25lbnQ6UHJvZHVjY2lvbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6J3N1Ym1pdC1zb2xpY2l0dWQtZGlzZW5vLWN1cnNvJywgY29tcG9uZW50OlN1Ym1pdFNvbGljaXR1ZERpc2Vub0N1cnNvQ29tcG9uZW50IH0sXG4gIHsgcGF0aDonc3VibWl0LXByb2R1Y2Npb24tZ2VuZXJhbCcsIGNvbXBvbmVudDpTdWJtaXRQcm9kdWNjaW9uR2VuZXJhbENvbXBvbmVudCB9LFxuICB7IHBhdGg6JycsIHJlZGlyZWN0VG86Jy9sb2dpbicsIHBhdGhNYXRjaDonZnVsbCcgfVxuXTtcbiIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG4vLyBBY3Rpb25zXG5pbXBvcnQgeyBzZXRVc2VyRGF0YUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvbG9naW4uYWN0aW9ucyc7XG5cbi8vIFR5cGVzXG5pbXBvcnQgeyBHZXRVc2VyIH0gZnJvbSAnLi4vLi4vYXBpL2xvZ2luL2xvZ2luLnR5cGVzJ1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlTG9naW5SZWR1Y2VyOkluaXRpYWxTdGF0ZUxvZ2luUmVkdWNlciA9IHtcbiAgdXNlcjpudWxsXG59XG5cbmV4cG9ydCB0eXBlIEluaXRpYWxTdGF0ZUxvZ2luUmVkdWNlciA9IHtcbiAgdXNlcjpHZXRVc2VyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXI8SW5pdGlhbFN0YXRlTG9naW5SZWR1Y2VyPihpbml0aWFsU3RhdGVMb2dpblJlZHVjZXIsIFxuICBcbiAgb24oc2V0VXNlckRhdGFBY3Rpb24sIChzdGF0ZSwgeyB1c2VyIH0pID0+IHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlciB9XG4gIH0pXG4gIFxuKSIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IEFjdGlvblJlZHVjZXJNYXAgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbi8vIFJlZHVjZXJzXG5pbXBvcnQgeyBJbml0aWFsU3RhdGVMb2dpblJlZHVjZXIsIGxvZ2luUmVkdWNlciB9IGZyb20gJy4vbG9naW4ucmVkdWNlcic7XG5cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzOkFjdGlvblJlZHVjZXJNYXA8QXBwU3RhdGU+ID0ge1xuICBsb2dpbjpsb2dpblJlZHVjZXJcbn1cblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSB7XG4gIGxvZ2luOkluaXRpYWxTdGF0ZUxvZ2luUmVkdWNlclxufSIsIi8vIE1vZHVsZXNcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSwgXG4gICAgUm91dGVyT3V0bGV0LFxuICAgIFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuc2Nzcydcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICdhbmd1bGFyLWNvbnRpbmVudGFsJztcbn1cbiIsIjxyb3V0ZXItb3V0bGV0Lz4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVMsNEJBQTRCOzs7QUNDckMsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyw0QkFBNEI7QUFDckMsU0FBNEIsaUJBQWlCO0FBQzdDLFNBQVMseUJBQXlCO0FBQ2xDLFNBQVMsbUJBQW1CLDhCQUE4Qjs7O0FDTDFELFNBQVMsYUFBYTtBQUV0QixTQUFTLGtCQUFrQjtBQUMzQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLFdBQVcsY0FBYztBQUNsQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLDJCQUEyQjtBQUNwQyxTQUFpQyxrQkFBa0I7OztBRVBuRCxTQUFTLGNBQWMsYUFBYTtBQUs3QixJQUFNLG9CQUFvQixhQUMvQixvQkFBb0IsTUFBSyxDQUFvQjs7Ozs7OztBQ1B4QyxJQUFNLFNBQVM7OztBQ0t0QixTQUFTLGtCQUFrQjs7O0FBU3JCLElBQU8sZ0JBQVAsTUFBTyxjQUFZO0VBRXZCLFlBQXFCLE1BQWU7QUFBZixTQUFBLE9BQUE7RUFBa0I7RUFFdkMsV0FBVyxNQUFjO0FBQ3ZCLFdBQU8sS0FBSyxLQUFLLEtBQXdCLEdBQUcsTUFBTSxVQUFVLElBQUk7RUFDbEU7OzttQkFOVyxlQUFZLHNCQUFBLGFBQUEsQ0FBQTtBQUFBO29GQUFaLGVBQVksU0FBWixjQUFZLFdBQUEsWUFGWCxPQUFNLENBQUE7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bk1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIklucHV0VGV4dE1vZHVsZSIsIkNvbXBvbmVudCIsIl9jMCIsIkJ1dHRvbk1vZHVsZSIsIkNvbXBvbmVudCIsIlRhYmxlTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiSW5wdXQiLCJPdXRwdXQiLCJEaWFsb2dNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJJbnB1dFRleHRNb2R1bGUiLCJfYzAiLCJCdXR0b25Nb2R1bGUiLCJEaWFsb2dNb2R1bGUiLCJDb21wb25lbnQiLCJJbnB1dCIsIkluamVjdGFibGUiLCJUYWJsZU1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkNvbXBvbmVudCIsIlRhYmxlTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiQnV0dG9uTW9kdWxlIiwiVGFibGVNb2R1bGUiLCJDb21wb25lbnQiLCJUYWJsZU1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkRpYWxvZ01vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIklucHV0VGV4dE1vZHVsZSIsIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsIklucHV0IiwiT3V0cHV0IiwiX2MwIiwiVGFibGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJDb21wb25lbnQiLCJUYWJsZU1vZHVsZSIsIkJ1dHRvbk1vZHVsZSIsIkluamVjdGFibGUiLCJCdXR0b25Nb2R1bGUiLCJUYWJsZU1vZHVsZSIsIkNvbXBvbmVudCIsIkJ1dHRvbk1vZHVsZSIsIklucHV0VGV4dE1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJWYWxpZGF0b3JzIiwiSW5qZWN0YWJsZSIsIlZhbGlkYXRvcnMiLCJfYzAiLCJCdXR0b25Nb2R1bGUiLCJJbnB1dFRleHRNb2R1bGUiLCJSZWFjdGl2ZUZvcm1zTW9kdWxlIiwiQ29tcG9uZW50IiwiVGFibGVNb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJCdXR0b25Nb2R1bGUiLCJUYWJsZU1vZHVsZSIsIkNhcmRNb2R1bGUiLCJDb21wb25lbnQiLCJCdXR0b25Nb2R1bGUiLCJEcm9wZG93bk1vZHVsZSIsIklucHV0VGV4dE1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJWYWxpZGF0b3JzIiwiSW5qZWN0YWJsZSIsIl9jMCIsIlZhbGlkYXRvcnMiLCJCdXR0b25Nb2R1bGUiLCJJbnB1dFRleHRNb2R1bGUiLCJEcm9wZG93bk1vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJDYXJkTW9kdWxlIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50Il19