/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/parker/Documents/GitHub/trpc_side_project/src/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_trpc__WEBPACK_IMPORTED_MODULE_1__.trpc.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFcUM7QUFFTjtBQUUvQixNQUFNQyxRQUFpQixDQUFDLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEdBQUs7SUFDbkQscUJBQU8sOERBQUNEO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVILHNEQUFhLENBQUNDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnBjX3NpZGVfcHJvamVjdC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgQXBwVHlwZSB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIi4uL3V0aWxzL3RycGNcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmNvbnN0IE15QXBwOiBBcHBUeXBlID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRycGMud2l0aFRSUEMoTXlBcHApO1xuIl0sIm5hbWVzIjpbInRycGMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhUUlBDIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"trpc\": () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"./node_modules/@trpc/next/dist/index.mjs\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! superjson */ \"superjson\");\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst getBaseUrl = ()=>{\n    if (false) {} // browser should use relative url\n    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url\n    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost\n};\nconst trpc = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config () {\n        return {\n            transformer: (superjson__WEBPACK_IMPORTED_MODULE_2___default()),\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.loggerLink)({\n                    enabled: (opts)=> true || 0\n                }),\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    url: `${getBaseUrl()}/api/trpc`\n                })\n            ]\n        };\n    },\n    ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5RDtBQUNiO0FBRVY7QUFJbEMsTUFBTUksYUFBYSxJQUFNO0lBQ3JCLElBQUksS0FBa0IsRUFBYSxFQUFPLENBQUksa0NBQWtDO0lBQ2hGLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsRUFBRSw0QkFBNEI7SUFDcEcsT0FBTyxDQUFDLGlCQUFpQixFQUFFRixRQUFRQyxHQUFHLENBQUNFLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRSwrQkFBK0I7QUFDMUY7QUFFTyxNQUFNQyxPQUFPUCwwREFBY0EsQ0FBWTtJQUMxQ1EsVUFBUztRQUNMLE9BQU87WUFDSEMsYUFBYVIsa0RBQVNBO1lBQ3RCUyxPQUFPO2dCQUNIWCx3REFBVUEsQ0FBQztvQkFDUFksU0FBUyxDQUFDQyxPQUNOVCxLQUF5QixJQUN4QlMsQ0FDK0JHO2dCQUN4QztnQkFDQWpCLDJEQUFhQSxDQUFDO29CQUNWa0IsS0FBSyxDQUFDLEVBQUVkLGFBQWEsU0FBUyxDQUFDO2dCQUNuQzthQUNIO1FBQ0w7SUFDSjtJQUNBZSxLQUFLLEtBQUs7QUFDZCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJwY19zaWRlX3Byb2plY3QvLi9zcmMvdXRpbHMvdHJwYy50cz8xMWM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0dHBCYXRjaExpbmssIGxvZ2dlckxpbmsgfSBmcm9tICdAdHJwYy9jbGllbnQnO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tICdAdHJwYy9uZXh0JztcbmltcG9ydCB7IHR5cGUgaW5mZXJSb3V0ZXJJbnB1dHMsIHR5cGUgaW5mZXJSb3V0ZXJPdXRwdXRzIH0gZnJvbSAnQHRycGMvc2VydmVyJztcbmltcG9ydCBzdXBlcmpzb24gZnJvbSAnc3VwZXJqc29uJztcblxuaW1wb3J0IHsgdHlwZSBBcHBSb3V0ZXIgfSBmcm9tICcuLi9zZXJ2ZXIvdHJwYy9yb3V0ZXIvX2FwcCc7XG5cbmNvbnN0IGdldEJhc2VVcmwgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7IC8vIGJyb3dzZXIgc2hvdWxkIHVzZSByZWxhdGl2ZSB1cmxcbiAgICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCkgcmV0dXJuIGBodHRwczovLyR7cHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTH1gOyAvLyBTU1Igc2hvdWxkIHVzZSB2ZXJjZWwgdXJsXG4gICAgcmV0dXJuIGBodHRwOi8vbG9jYWxob3N0OiR7cHJvY2Vzcy5lbnYuUE9SVCA/PyAzMDAwfWA7IC8vIGRldiBTU1Igc2hvdWxkIHVzZSBsb2NhbGhvc3Rcbn07XG5cbmV4cG9ydCBjb25zdCB0cnBjID0gY3JlYXRlVFJQQ05leHQ8QXBwUm91dGVyPih7XG4gICAgY29uZmlnKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtZXI6IHN1cGVyanNvbixcbiAgICAgICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAgICAgICAgbG9nZ2VyTGluayh7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IChvcHRzKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy5yZXN1bHQgaW5zdGFuY2VvZiBFcnJvciksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaHR0cEJhdGNoTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7Z2V0QmFzZVVybCgpfS9hcGkvdHJwY2AsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgc3NyOiBmYWxzZSxcbn0pO1xuXG4vKipcbiAqIEluZmVyZW5jZSBoZWxwZXIgZm9yIGlucHV0c1xuICogQGV4YW1wbGUgdHlwZSBIZWxsb0lucHV0ID0gUm91dGVySW5wdXRzWydleGFtcGxlJ11bJ2hlbGxvJ11cbiAqKi9cbmV4cG9ydCB0eXBlIFJvdXRlcklucHV0cyA9IGluZmVyUm91dGVySW5wdXRzPEFwcFJvdXRlcj47XG4vKipcbiAqIEluZmVyZW5jZSBoZWxwZXIgZm9yIG91dHB1dHNcbiAqIEBleGFtcGxlIHR5cGUgSGVsbG9PdXRwdXQgPSBSb3V0ZXJPdXRwdXRzWydleGFtcGxlJ11bJ2hlbGxvJ11cbiAqKi9cbmV4cG9ydCB0eXBlIFJvdXRlck91dHB1dHMgPSBpbmZlclJvdXRlck91dHB1dHM8QXBwUm91dGVyPjtcbiJdLCJuYW1lcyI6WyJodHRwQmF0Y2hMaW5rIiwibG9nZ2VyTGluayIsImNyZWF0ZVRSUENOZXh0Iiwic3VwZXJqc29uIiwiZ2V0QmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJWRVJDRUxfVVJMIiwiUE9SVCIsInRycGMiLCJjb25maWciLCJ0cmFuc2Zvcm1lciIsImxpbmtzIiwiZW5hYmxlZCIsIm9wdHMiLCJkaXJlY3Rpb24iLCJyZXN1bHQiLCJFcnJvciIsInVybCIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-ssr-prepass":
/*!************************************!*\
  !*** external "react-ssr-prepass" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ssr-prepass");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "superjson":
/*!****************************!*\
  !*** external "superjson" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("superjson");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/react-query":
/*!************************************!*\
  !*** external "@trpc/react-query" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/react-query");;

/***/ }),

/***/ "@trpc/react-query/shared":
/*!*******************************************!*\
  !*** external "@trpc/react-query/shared" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/react-query/shared");;

/***/ }),

/***/ "@trpc/server/shared":
/*!**************************************!*\
  !*** external "@trpc/server/shared" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@trpc/server/shared");;

/***/ }),

/***/ "./node_modules/@trpc/next/dist/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/@trpc/next/dist/index.mjs ***!
  \************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTRPCNext\": () => (/* binding */ createTRPCNext),\n/* harmony export */   \"withTRPC\": () => (/* binding */ withTRPC)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/react-query */ \"@trpc/react-query\");\n/* harmony import */ var _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trpc/react-query/shared */ \"@trpc/react-query/shared\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ssr-prepass */ \"react-ssr-prepass\");\n/* harmony import */ var _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @trpc/server/shared */ \"@trpc/server/shared\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _trpc_react_query__WEBPACK_IMPORTED_MODULE_1__, _trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__, _trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction transformQueryOrMutationCacheErrors(result) {\n    const error = result.state.error;\n    if (error instanceof Error && error.name === 'TRPCClientError') {\n        const newError = {\n            message: error.message,\n            data: error.data,\n            shape: error.shape\n        };\n        return {\n            ...result,\n            state: {\n                ...result.state,\n                error: newError\n            }\n        };\n    }\n    return result;\n}\nfunction withTRPC(opts) {\n    const { config: getClientConfig  } = opts;\n    return (AppOrPage)=>{\n        const trpc = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createReactQueryHooks)({\n            unstable_overrides: opts.unstable_overrides\n        });\n        const WithTRPC = (props)=>{\n            const [prepassProps] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{\n                if (props.trpc) {\n                    return props.trpc;\n                }\n                const config = getClientConfig({});\n                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);\n                const trpcClient = trpc.createClient(config);\n                return {\n                    abortOnUnmount: config.abortOnUnmount,\n                    queryClient,\n                    trpcClient,\n                    ssrState: opts.ssr ? 'mounting' : false,\n                    ssrContext: null\n                };\n            });\n            const { queryClient , trpcClient , ssrState , ssrContext  } = prepassProps;\n            const hydratedState = trpc.useDehydratedState(trpcClient, props.pageProps.trpcState);\n            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(trpc.Provider, {\n                abortOnUnmount: prepassProps.abortOnUnmount ?? false,\n                client: trpcClient,\n                queryClient: queryClient,\n                ssrState: ssrState,\n                ssrContext: ssrContext\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClientProvider, {\n                client: queryClient\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.Hydrate, {\n                state: hydratedState\n            }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.createElement(AppOrPage, Object.assign({}, props)))));\n        };\n        if (AppOrPage.getInitialProps || opts.ssr) {\n            WithTRPC.getInitialProps = async (appOrPageCtx)=>{\n                const AppTree = appOrPageCtx.AppTree;\n                // Determine if we are wrapping an App component or a Page component.\n                const isApp = !!appOrPageCtx.Component;\n                const ctx = isApp ? appOrPageCtx.ctx : appOrPageCtx;\n                // Run the wrapped component's getInitialProps function.\n                let pageProps = {};\n                if (AppOrPage.getInitialProps) {\n                    const originalProps = await AppOrPage.getInitialProps(appOrPageCtx);\n                    const originalPageProps = isApp ? originalProps.pageProps ?? {} : originalProps;\n                    pageProps = {\n                        ...originalPageProps,\n                        ...pageProps\n                    };\n                }\n                const getAppTreeProps = (props)=>isApp ? {\n                        pageProps: props\n                    } : props;\n                if (typeof window !== 'undefined' || !opts.ssr) {\n                    return getAppTreeProps(pageProps);\n                }\n                const config = getClientConfig({\n                    ctx\n                });\n                const trpcClient = (0,_trpc_react_query__WEBPACK_IMPORTED_MODULE_1__.createTRPCClient)(config);\n                const queryClient = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.getQueryClient)(config);\n                const trpcProp = {\n                    config,\n                    trpcClient,\n                    queryClient,\n                    ssrState: 'prepass',\n                    ssrContext: ctx\n                };\n                const prepassProps = {\n                    pageProps,\n                    trpc: trpcProp\n                };\n                // Run the prepass step on AppTree. This will run all trpc queries on the server.\n                // multiple prepass ensures that we can do batching on the server\n                while(true){\n                    // render full tree\n                    await react_ssr_prepass__WEBPACK_IMPORTED_MODULE_4__(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(AppTree, prepassProps));\n                    if (!queryClient.isFetching()) {\n                        break;\n                    }\n                    // wait until the query cache has settled it's promises\n                    await new Promise((resolve)=>{\n                        const unsub = queryClient.getQueryCache().subscribe((event)=>{\n                            if (event?.query.getObserversCount() === 0) {\n                                resolve();\n                                unsub();\n                            }\n                        });\n                    });\n                }\n                const dehydratedCache = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.dehydrate)(queryClient, {\n                    shouldDehydrateQuery () {\n                        // makes sure errors are also dehydrated\n                        return true;\n                    }\n                });\n                // since error instances can't be serialized, let's make them into `TRPCClientErrorLike`-objects\n                const dehydratedCacheWithErrors = {\n                    ...dehydratedCache,\n                    queries: dehydratedCache.queries.map(transformQueryOrMutationCacheErrors),\n                    mutations: dehydratedCache.mutations.map(transformQueryOrMutationCacheErrors)\n                };\n                // dehydrate query client's state and add it to the props\n                pageProps.trpcState = trpcClient.runtime.transformer.serialize(dehydratedCacheWithErrors);\n                const appTreeProps = getAppTreeProps(pageProps);\n                const meta = opts.responseMeta?.({\n                    ctx,\n                    clientErrors: [\n                        ...dehydratedCache.queries,\n                        ...dehydratedCache.mutations\n                    ].map((v)=>v.state.error).flatMap((err)=>err instanceof Error && err.name === 'TRPCClientError' ? [\n                            err\n                        ] : [])\n                }) || {};\n                for (const [key, value] of Object.entries(meta.headers || {})){\n                    if (typeof value === 'string') {\n                        ctx.res?.setHeader(key, value);\n                    }\n                }\n                if (meta.status && ctx.res) {\n                    ctx.res.statusCode = meta.status;\n                }\n                return appTreeProps;\n            };\n        }\n        const displayName = AppOrPage.displayName || AppOrPage.name || 'Component';\n        WithTRPC.displayName = `withTRPC(${displayName})`;\n        return WithTRPC;\n    };\n}\n\n/* istanbul ignore file */ // We're testing this through E2E-testing\nfunction createTRPCNext(opts) {\n    const hooks = (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createHooksInternal)({\n        unstable_overrides: opts.unstable_overrides\n    });\n    // TODO: maybe set TSSRContext to `never` when using `WithTRPCNoSSROptions`\n    const _withTRPC = withTRPC(opts);\n    return (0,_trpc_server_shared__WEBPACK_IMPORTED_MODULE_5__.createFlatProxy)((key)=>{\n        if (key === 'useContext') {\n            return ()=>{\n                const context = hooks.useContext();\n                // create a stable reference of the utils context\n                return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{\n                    return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactQueryUtilsProxy)(context);\n                }, [\n                    context\n                ]);\n            };\n        }\n        if (key === 'useQueries') {\n            return hooks.useQueries;\n        }\n        if (key === 'withTRPC') {\n            return _withTRPC;\n        }\n        return (0,_trpc_react_query_shared__WEBPACK_IMPORTED_MODULE_2__.createReactProxyDecoration)(key, hooks);\n    });\n}\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHRycGMvbmV4dC9kaXN0L2luZGV4Lm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUNKO0FBQzJEO0FBQ3ZFO0FBQ3JCO0FBQ1c7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyQkFBMkI7QUFDdkM7QUFDQSxxQkFBcUIsd0VBQXFCO0FBQzFDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsbUNBQW1DLCtDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxvQ0FBb0Msd0VBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixvQkFBb0Isb0RBQW9EO0FBQ3hFO0FBQ0EsaUNBQWlDLGdEQUFtQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxnQkFBZ0IsZ0RBQW1CLENBQUMsc0VBQW1CO0FBQ3BFO0FBQ0EsYUFBYSxnQkFBZ0IsZ0RBQW1CLENBQUMsMERBQU87QUFDeEQ7QUFDQSxhQUFhLGdCQUFnQixnREFBbUIsNEJBQTRCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtQ0FBbUMsbUVBQWdCO0FBQ25ELG9DQUFvQyx3RUFBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOENBQVUsZUFBZSxvREFBYTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSx3Q0FBd0MsZ0VBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxZQUFZO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDZFQUFtQjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyxvRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBTztBQUM5QiwyQkFBMkIsb0ZBQTBCO0FBQ3JELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0ZBQTBCO0FBQ3pDLEtBQUs7QUFDTDs7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnBjX3NpZGVfcHJvamVjdC8uL25vZGVfbW9kdWxlcy9AdHJwYy9uZXh0L2Rpc3QvaW5kZXgubWpzP2JkYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVoeWRyYXRlLCBRdWVyeUNsaWVudFByb3ZpZGVyLCBIeWRyYXRlIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IGNyZWF0ZVJlYWN0UXVlcnlIb29rcywgY3JlYXRlVFJQQ0NsaWVudCB9IGZyb20gJ0B0cnBjL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IGdldFF1ZXJ5Q2xpZW50LCBjcmVhdGVIb29rc0ludGVybmFsLCBjcmVhdGVSZWFjdFF1ZXJ5VXRpbHNQcm94eSwgY3JlYXRlUmVhY3RQcm94eURlY29yYXRpb24gfSBmcm9tICdAdHJwYy9yZWFjdC1xdWVyeS9zaGFyZWQnO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUVsZW1lbnQsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNzclByZXBhc3MgZnJvbSAncmVhY3Qtc3NyLXByZXBhc3MnO1xuaW1wb3J0IHsgY3JlYXRlRmxhdFByb3h5IH0gZnJvbSAnQHRycGMvc2VydmVyL3NoYXJlZCc7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVF1ZXJ5T3JNdXRhdGlvbkNhY2hlRXJyb3JzKHJlc3VsdCkge1xuICAgIGNvbnN0IGVycm9yID0gcmVzdWx0LnN0YXRlLmVycm9yO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmIGVycm9yLm5hbWUgPT09ICdUUlBDQ2xpZW50RXJyb3InKSB7XG4gICAgICAgIGNvbnN0IG5ld0Vycm9yID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIGRhdGE6IGVycm9yLmRhdGEsXG4gICAgICAgICAgICBzaGFwZTogZXJyb3Iuc2hhcGVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LnN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBuZXdFcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gd2l0aFRSUEMob3B0cykge1xuICAgIGNvbnN0IHsgY29uZmlnOiBnZXRDbGllbnRDb25maWcgIH0gPSBvcHRzO1xuICAgIHJldHVybiAoQXBwT3JQYWdlKT0+e1xuICAgICAgICBjb25zdCB0cnBjID0gY3JlYXRlUmVhY3RRdWVyeUhvb2tzKHtcbiAgICAgICAgICAgIHVuc3RhYmxlX292ZXJyaWRlczogb3B0cy51bnN0YWJsZV9vdmVycmlkZXNcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IFdpdGhUUlBDID0gKHByb3BzKT0+e1xuICAgICAgICAgICAgY29uc3QgW3ByZXBhc3NQcm9wc10gPSB1c2VTdGF0ZSgoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy50cnBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy50cnBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBnZXRDbGllbnRDb25maWcoe30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gZ2V0UXVlcnlDbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cnBjQ2xpZW50ID0gdHJwYy5jcmVhdGVDbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBhYm9ydE9uVW5tb3VudDogY29uZmlnLmFib3J0T25Vbm1vdW50LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeUNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgdHJwY0NsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgc3NyU3RhdGU6IG9wdHMuc3NyID8gJ21vdW50aW5nJyA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzc3JDb250ZXh0OiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgeyBxdWVyeUNsaWVudCAsIHRycGNDbGllbnQgLCBzc3JTdGF0ZSAsIHNzckNvbnRleHQgIH0gPSBwcmVwYXNzUHJvcHM7XG4gICAgICAgICAgICBjb25zdCBoeWRyYXRlZFN0YXRlID0gdHJwYy51c2VEZWh5ZHJhdGVkU3RhdGUodHJwY0NsaWVudCwgcHJvcHMucGFnZVByb3BzLnRycGNTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KHRycGMuUHJvdmlkZXIsIHtcbiAgICAgICAgICAgICAgICBhYm9ydE9uVW5tb3VudDogcHJlcGFzc1Byb3BzLmFib3J0T25Vbm1vdW50ID8/IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNsaWVudDogdHJwY0NsaWVudCxcbiAgICAgICAgICAgICAgICBxdWVyeUNsaWVudDogcXVlcnlDbGllbnQsXG4gICAgICAgICAgICAgICAgc3NyU3RhdGU6IHNzclN0YXRlLFxuICAgICAgICAgICAgICAgIHNzckNvbnRleHQ6IHNzckNvbnRleHRcbiAgICAgICAgICAgIH0sIC8qI19fUFVSRV9fKi8gUmVhY3QuY3JlYXRlRWxlbWVudChRdWVyeUNsaWVudFByb3ZpZGVyLCB7XG4gICAgICAgICAgICAgICAgY2xpZW50OiBxdWVyeUNsaWVudFxuICAgICAgICAgICAgfSwgLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KEh5ZHJhdGUsIHtcbiAgICAgICAgICAgICAgICBzdGF0ZTogaHlkcmF0ZWRTdGF0ZVxuICAgICAgICAgICAgfSwgLyojX19QVVJFX18qLyBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcE9yUGFnZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpKSkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKEFwcE9yUGFnZS5nZXRJbml0aWFsUHJvcHMgfHwgb3B0cy5zc3IpIHtcbiAgICAgICAgICAgIFdpdGhUUlBDLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBPclBhZ2VDdHgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgQXBwVHJlZSA9IGFwcE9yUGFnZUN0eC5BcHBUcmVlO1xuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB3ZSBhcmUgd3JhcHBpbmcgYW4gQXBwIGNvbXBvbmVudCBvciBhIFBhZ2UgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXBwID0gISFhcHBPclBhZ2VDdHguQ29tcG9uZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGlzQXBwID8gYXBwT3JQYWdlQ3R4LmN0eCA6IGFwcE9yUGFnZUN0eDtcbiAgICAgICAgICAgICAgICAvLyBSdW4gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZ2V0SW5pdGlhbFByb3BzIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoQXBwT3JQYWdlLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFByb3BzID0gYXdhaXQgQXBwT3JQYWdlLmdldEluaXRpYWxQcm9wcyhhcHBPclBhZ2VDdHgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFBhZ2VQcm9wcyA9IGlzQXBwID8gb3JpZ2luYWxQcm9wcy5wYWdlUHJvcHMgPz8ge30gOiBvcmlnaW5hbFByb3BzO1xuICAgICAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5vcmlnaW5hbFBhZ2VQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBnZXRBcHBUcmVlUHJvcHMgPSAocHJvcHMpPT5pc0FwcCA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wczogcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfSA6IHByb3BzO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyB8fCAhb3B0cy5zc3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEFwcFRyZWVQcm9wcyhwYWdlUHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBnZXRDbGllbnRDb25maWcoe1xuICAgICAgICAgICAgICAgICAgICBjdHhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cnBjQ2xpZW50ID0gY3JlYXRlVFJQQ0NsaWVudChjb25maWcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gZ2V0UXVlcnlDbGllbnQoY29uZmlnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cnBjUHJvcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICB0cnBjQ2xpZW50LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeUNsaWVudCxcbiAgICAgICAgICAgICAgICAgICAgc3NyU3RhdGU6ICdwcmVwYXNzJyxcbiAgICAgICAgICAgICAgICAgICAgc3NyQ29udGV4dDogY3R4XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXNzUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgdHJwYzogdHJwY1Byb3BcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIFJ1biB0aGUgcHJlcGFzcyBzdGVwIG9uIEFwcFRyZWUuIFRoaXMgd2lsbCBydW4gYWxsIHRycGMgcXVlcmllcyBvbiB0aGUgc2VydmVyLlxuICAgICAgICAgICAgICAgIC8vIG11bHRpcGxlIHByZXBhc3MgZW5zdXJlcyB0aGF0IHdlIGNhbiBkbyBiYXRjaGluZyBvbiB0aGUgc2VydmVyXG4gICAgICAgICAgICAgICAgd2hpbGUodHJ1ZSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbmRlciBmdWxsIHRyZWVcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc3NyUHJlcGFzcygvKiNfX1BVUkVfXyovIGNyZWF0ZUVsZW1lbnQoQXBwVHJlZSwgcHJlcGFzc1Byb3BzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcXVlcnlDbGllbnQuaXNGZXRjaGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IHVudGlsIHRoZSBxdWVyeSBjYWNoZSBoYXMgc2V0dGxlZCBpdCdzIHByb21pc2VzXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5zdWIgPSBxdWVyeUNsaWVudC5nZXRRdWVyeUNhY2hlKCkuc3Vic2NyaWJlKChldmVudCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQ/LnF1ZXJ5LmdldE9ic2VydmVyc0NvdW50KCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN1YigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGVoeWRyYXRlZENhY2hlID0gZGVoeWRyYXRlKHF1ZXJ5Q2xpZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZERlaHlkcmF0ZVF1ZXJ5ICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2VzIHN1cmUgZXJyb3JzIGFyZSBhbHNvIGRlaHlkcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gc2luY2UgZXJyb3IgaW5zdGFuY2VzIGNhbid0IGJlIHNlcmlhbGl6ZWQsIGxldCdzIG1ha2UgdGhlbSBpbnRvIGBUUlBDQ2xpZW50RXJyb3JMaWtlYC1vYmplY3RzXG4gICAgICAgICAgICAgICAgY29uc3QgZGVoeWRyYXRlZENhY2hlV2l0aEVycm9ycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVoeWRyYXRlZENhY2hlLFxuICAgICAgICAgICAgICAgICAgICBxdWVyaWVzOiBkZWh5ZHJhdGVkQ2FjaGUucXVlcmllcy5tYXAodHJhbnNmb3JtUXVlcnlPck11dGF0aW9uQ2FjaGVFcnJvcnMpLFxuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnM6IGRlaHlkcmF0ZWRDYWNoZS5tdXRhdGlvbnMubWFwKHRyYW5zZm9ybVF1ZXJ5T3JNdXRhdGlvbkNhY2hlRXJyb3JzKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gZGVoeWRyYXRlIHF1ZXJ5IGNsaWVudCdzIHN0YXRlIGFuZCBhZGQgaXQgdG8gdGhlIHByb3BzXG4gICAgICAgICAgICAgICAgcGFnZVByb3BzLnRycGNTdGF0ZSA9IHRycGNDbGllbnQucnVudGltZS50cmFuc2Zvcm1lci5zZXJpYWxpemUoZGVoeWRyYXRlZENhY2hlV2l0aEVycm9ycyk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwVHJlZVByb3BzID0gZ2V0QXBwVHJlZVByb3BzKHBhZ2VQcm9wcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWV0YSA9IG9wdHMucmVzcG9uc2VNZXRhPy4oe1xuICAgICAgICAgICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudEVycm9yczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGVoeWRyYXRlZENhY2hlLnF1ZXJpZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kZWh5ZHJhdGVkQ2FjaGUubXV0YXRpb25zXG4gICAgICAgICAgICAgICAgICAgIF0ubWFwKCh2KT0+di5zdGF0ZS5lcnJvcikuZmxhdE1hcCgoZXJyKT0+ZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm5hbWUgPT09ICdUUlBDQ2xpZW50RXJyb3InID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgICAgICAgICAgXSA6IFtdKVxuICAgICAgICAgICAgICAgIH0pIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEuaGVhZGVycyB8fCB7fSkpe1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnJlcz8uc2V0SGVhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtZXRhLnN0YXR1cyAmJiBjdHgucmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5yZXMuc3RhdHVzQ29kZSA9IG1ldGEuc3RhdHVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXBwVHJlZVByb3BzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IEFwcE9yUGFnZS5kaXNwbGF5TmFtZSB8fCBBcHBPclBhZ2UubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICAgICAgV2l0aFRSUEMuZGlzcGxheU5hbWUgPSBgd2l0aFRSUEMoJHtkaXNwbGF5TmFtZX0pYDtcbiAgICAgICAgcmV0dXJuIFdpdGhUUlBDO1xuICAgIH07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovIC8vIFdlJ3JlIHRlc3RpbmcgdGhpcyB0aHJvdWdoIEUyRS10ZXN0aW5nXG5mdW5jdGlvbiBjcmVhdGVUUlBDTmV4dChvcHRzKSB7XG4gICAgY29uc3QgaG9va3MgPSBjcmVhdGVIb29rc0ludGVybmFsKHtcbiAgICAgICAgdW5zdGFibGVfb3ZlcnJpZGVzOiBvcHRzLnVuc3RhYmxlX292ZXJyaWRlc1xuICAgIH0pO1xuICAgIC8vIFRPRE86IG1heWJlIHNldCBUU1NSQ29udGV4dCB0byBgbmV2ZXJgIHdoZW4gdXNpbmcgYFdpdGhUUlBDTm9TU1JPcHRpb25zYFxuICAgIGNvbnN0IF93aXRoVFJQQyA9IHdpdGhUUlBDKG9wdHMpO1xuICAgIHJldHVybiBjcmVhdGVGbGF0UHJveHkoKGtleSk9PntcbiAgICAgICAgaWYgKGtleSA9PT0gJ3VzZUNvbnRleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4gKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gaG9va3MudXNlQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIHN0YWJsZSByZWZlcmVuY2Ugb2YgdGhlIHV0aWxzIGNvbnRleHRcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlTWVtbygoKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlUmVhY3RRdWVyeVV0aWxzUHJveHkoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT09ICd1c2VRdWVyaWVzJykge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tzLnVzZVF1ZXJpZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gJ3dpdGhUUlBDJykge1xuICAgICAgICAgICAgcmV0dXJuIF93aXRoVFJQQztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlUmVhY3RQcm94eURlY29yYXRpb24oa2V5LCBob29rcyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRSUENOZXh0LCB3aXRoVFJQQyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@trpc/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();