"use strict";
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
exports.id = "app/api/medium/route";
exports.ids = ["app/api/medium/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("timers");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmedium%2Froute&page=%2Fapi%2Fmedium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmedium%2Froute.js&appDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmedium%2Froute&page=%2Fapi%2Fmedium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmedium%2Froute.js&appDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Adam_Firdaus_Documents_Individual_Project_damz_porto_app_api_medium_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/medium/route.js */ \"(rsc)/./app/api/medium/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/medium/route\",\n        pathname: \"/api/medium\",\n        filename: \"route\",\n        bundlePath: \"app/api/medium/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Adam Firdaus\\\\Documents\\\\Individual-Project\\\\damz-porto\\\\app\\\\api\\\\medium\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Adam_Firdaus_Documents_Individual_Project_damz_porto_app_api_medium_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/medium/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZWRpdW0lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1lZGl1bSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1lZGl1bSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZGFtJTIwRmlyZGF1cyU1Q0RvY3VtZW50cyU1Q0luZGl2aWR1YWwtUHJvamVjdCU1Q2RhbXotcG9ydG8lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FkYW0lMjBGaXJkYXVzJTVDRG9jdW1lbnRzJTVDSW5kaXZpZHVhbC1Qcm9qZWN0JTVDZGFtei1wb3J0byZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM4QztBQUMzSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlZS1yb2JpbnNvbi1wb3J0Zm9saW8vPzQ3YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQWRhbSBGaXJkYXVzXFxcXERvY3VtZW50c1xcXFxJbmRpdmlkdWFsLVByb2plY3RcXFxcZGFtei1wb3J0b1xcXFxhcHBcXFxcYXBpXFxcXG1lZGl1bVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbWVkaXVtL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVkaXVtXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tZWRpdW0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBZGFtIEZpcmRhdXNcXFxcRG9jdW1lbnRzXFxcXEluZGl2aWR1YWwtUHJvamVjdFxcXFxkYW16LXBvcnRvXFxcXGFwcFxcXFxhcGlcXFxcbWVkaXVtXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21lZGl1bS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmedium%2Froute&page=%2Fapi%2Fmedium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmedium%2Froute.js&appDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/medium/route.js":
/*!*********************************!*\
  !*** ./app/api/medium/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rss-parser */ \"(rsc)/./node_modules/rss-parser/index.js\");\n/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_1__);\n// app/api/medium/route.js\n\n\nconst parser = new (rss_parser__WEBPACK_IMPORTED_MODULE_1___default())({\n    customFields: {\n        item: [\n            \"content:encoded\"\n        ]\n    }\n});\nconst feedUrl = \"https://medium.com/feed/@adamfrdsid\";\nasync function GET() {\n    try {\n        const feed = await parser.parseURL(feedUrl);\n        const posts = feed.items.map((item)=>{\n            const imgMatch = item[\"content:encoded\"]?.match(/<img[^>]+src=\"([^\">]+)\"/);\n            const image = imgMatch ? imgMatch[1] : null;\n            return {\n                title: item.title,\n                link: item.link,\n                pubDate: item.pubDate,\n                contentSnippet: item.contentSnippet,\n                image\n            };\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            posts\n        });\n    } catch (err) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to fetch Medium posts\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lZGl1bS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMEJBQTBCO0FBQ2lCO0FBQ1g7QUFFaEMsTUFBTUUsU0FBUyxJQUFJRCxtREFBTUEsQ0FBQztJQUN4QkUsY0FBYztRQUNaQyxNQUFNO1lBQUM7U0FBa0I7SUFDM0I7QUFDRjtBQUVBLE1BQU1DLFVBQVU7QUFFVCxlQUFlQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNTCxPQUFPTSxRQUFRLENBQUNIO1FBQ25DLE1BQU1JLFFBQVFGLEtBQUtHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDUCxDQUFBQTtZQUMzQixNQUFNUSxXQUFXUixJQUFJLENBQUMsa0JBQWtCLEVBQUVTLE1BQU07WUFDaEQsTUFBTUMsUUFBUUYsV0FBV0EsUUFBUSxDQUFDLEVBQUUsR0FBRztZQUV2QyxPQUFPO2dCQUNMRyxPQUFPWCxLQUFLVyxLQUFLO2dCQUNqQkMsTUFBTVosS0FBS1ksSUFBSTtnQkFDZkMsU0FBU2IsS0FBS2EsT0FBTztnQkFDckJDLGdCQUFnQmQsS0FBS2MsY0FBYztnQkFDbkNKO1lBQ0Y7UUFDRjtRQUVBLE9BQU9kLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUFDO1lBQUVWO1FBQU07SUFDbkMsRUFBRSxPQUFPVyxLQUFLO1FBQ1osT0FBT3BCLGtGQUFZQSxDQUFDbUIsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBK0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDcEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xlZS1yb2JpbnNvbi1wb3J0Zm9saW8vLi9hcHAvYXBpL21lZGl1bS9yb3V0ZS5qcz9iOWE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvbWVkaXVtL3JvdXRlLmpzXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IFBhcnNlciBmcm9tICdyc3MtcGFyc2VyJztcclxuXHJcbmNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIoe1xyXG4gIGN1c3RvbUZpZWxkczoge1xyXG4gICAgaXRlbTogWydjb250ZW50OmVuY29kZWQnXSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IGZlZWRVcmwgPSAnaHR0cHM6Ly9tZWRpdW0uY29tL2ZlZWQvQGFkYW1mcmRzaWQnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZmVlZCA9IGF3YWl0IHBhcnNlci5wYXJzZVVSTChmZWVkVXJsKTtcclxuICAgIGNvbnN0IHBvc3RzID0gZmVlZC5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IGltZ01hdGNoID0gaXRlbVsnY29udGVudDplbmNvZGVkJ10/Lm1hdGNoKC88aW1nW14+XStzcmM9XCIoW15cIj5dKylcIi8pO1xyXG4gICAgICBjb25zdCBpbWFnZSA9IGltZ01hdGNoID8gaW1nTWF0Y2hbMV0gOiBudWxsO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICBsaW5rOiBpdGVtLmxpbmssXHJcbiAgICAgICAgcHViRGF0ZTogaXRlbS5wdWJEYXRlLFxyXG4gICAgICAgIGNvbnRlbnRTbmlwcGV0OiBpdGVtLmNvbnRlbnRTbmlwcGV0LFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcG9zdHMgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBNZWRpdW0gcG9zdHMnIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQYXJzZXIiLCJwYXJzZXIiLCJjdXN0b21GaWVsZHMiLCJpdGVtIiwiZmVlZFVybCIsIkdFVCIsImZlZWQiLCJwYXJzZVVSTCIsInBvc3RzIiwiaXRlbXMiLCJtYXAiLCJpbWdNYXRjaCIsIm1hdGNoIiwiaW1hZ2UiLCJ0aXRsZSIsImxpbmsiLCJwdWJEYXRlIiwiY29udGVudFNuaXBwZXQiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/medium/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/xmlbuilder","vendor-chunks/entities","vendor-chunks/xml2js","vendor-chunks/rss-parser","vendor-chunks/sax"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmedium%2Froute&page=%2Fapi%2Fmedium%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmedium%2Froute.js&appDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdam%20Firdaus%5CDocuments%5CIndividual-Project%5Cdamz-porto&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();