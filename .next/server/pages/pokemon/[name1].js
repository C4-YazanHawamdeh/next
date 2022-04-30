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
exports.id = "pages/pokemon/[name1]";
exports.ids = ["pages/pokemon/[name1]"];
exports.modules = {

/***/ "./pages/pokemon/[name1].js":
/*!**********************************!*\
  !*** ./pages/pokemon/[name1].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getServerSideProps(po) {\n    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${po.params.name1}`);\n    const data = await res.json();\n    if (!data) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            po: data.abilities,\n            po1: data.base_experience,\n            po2: data.height,\n            po3: data.weight,\n            p4: data.forms[0].name\n        }\n    };\n}\nconst Pokemons1 = ({ po , po1 , po2 , po3 , p4  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"name : \",\n                            p4\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"abilities :\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                        lineNumber: 27,\n                        columnNumber: 6\n                    }, undefined),\n                    po.map((pokemon)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \" \",\n                                    pokemon.ability.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, undefined)\n                        }, pokemon.id, false, {\n                            fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, undefined)\n                    )\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"base_experience : \",\n                    po1\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"height : \",\n                    po2\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"weight : \",\n                    po3\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yazan pc\\\\Desktop\\\\next\\\\nextjs\\\\pages\\\\pokemon\\\\[name1].js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemons1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1tuYW1lMV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBO0FBQU8sZUFBZUEsa0JBQWtCLENBQUNDLEVBQUUsRUFBRTtJQUUzQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsa0NBQWtDLEVBQUVGLEVBQUUsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9FLE1BQU1DLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtJQUc3QixJQUFJLENBQUNELElBQUksRUFBRTtRQUNULE9BQU87WUFDTEUsUUFBUSxFQUFFLElBQUk7U0FDZjtLQUNGO0lBRUQsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFBRVIsRUFBRSxFQUFDSyxJQUFJLENBQUNJLFNBQVM7WUFBQ0MsR0FBRyxFQUFDTCxJQUFJLENBQUNNLGVBQWU7WUFBQ0MsR0FBRyxFQUFDUCxJQUFJLENBQUNRLE1BQU07WUFBQ0MsR0FBRyxFQUFDVCxJQUFJLENBQUNVLE1BQU07WUFBQ0MsRUFBRSxFQUFDWCxJQUFJLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSTtTQUFFO0tBQzVHO0NBQ0Y7QUFHRCxNQUFNQyxTQUFTLEdBQUcsQ0FBQyxFQUFFbkIsRUFBRSxHQUFDVSxHQUFHLEdBQUNFLEdBQUcsR0FBQ0UsR0FBRyxHQUFDRSxFQUFFLEdBQUUsR0FBSztJQUUzQyxxQkFDRSw4REFBQ0ksS0FBRzs7MEJBQ0osOERBQUNBLEtBQUc7O2tDQUNKLDhEQUFDQyxJQUFFOzs0QkFBQyxTQUFPOzRCQUFDTCxFQUFFOzs7Ozs7aUNBQU07a0NBQ25CLDhEQUFDSyxJQUFFO2tDQUFDLGFBQVc7Ozs7O2lDQUFLO29CQUNsQnJCLEVBQUUsQ0FBQ3NCLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBTyxpQkFDYiw4REFBQ0gsS0FBRztzQ0FFQSw0RUFBQ0MsSUFBRTs7b0NBQUMsR0FBQztvQ0FBQ0UsT0FBTyxDQUFDQyxPQUFPLENBQUNOLElBQUk7Ozs7Ozt5Q0FBTTsyQkFGMUJLLE9BQU8sQ0FBQ0UsRUFBRTs7OztxQ0FLZDtvQkFDUCxDQUFDOzs7Ozs7eUJBQ0U7MEJBQ04sOERBQUNKLElBQUU7O29CQUFDLG9CQUFrQjtvQkFBQ1gsR0FBRzs7Ozs7O3lCQUFNOzBCQUN4Qiw4REFBQ1csSUFBRTs7b0JBQUMsV0FBUztvQkFBQ1QsR0FBRzs7Ozs7O3lCQUFNOzBCQUN2Qiw4REFBQ1MsSUFBRTs7b0JBQUMsV0FBUztvQkFBQ1AsR0FBRzs7Ozs7O3lCQUFNOzs7Ozs7aUJBQ3pCLENBQ047Q0FDSDtBQUVELGlFQUFlSyxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9wYWdlcy9wb2tlbW9uL1tuYW1lMV0uanM/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMocG8pIHtcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BvLnBhcmFtcy5uYW1lMX1gKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIFxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcG86ZGF0YS5hYmlsaXRpZXMscG8xOmRhdGEuYmFzZV9leHBlcmllbmNlLHBvMjpkYXRhLmhlaWdodCxwbzM6ZGF0YS53ZWlnaHQscDQ6ZGF0YS5mb3Jtc1swXS5uYW1lIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IFBva2Vtb25zMSA9ICh7IHBvLHBvMSxwbzIscG8zLHA0IH0pID0+IHtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXY+XHJcbiAgICA8aDM+bmFtZSA6IHtwNH08L2gzPlxyXG4gICAgIDxoMz5hYmlsaXRpZXMgOjwvaDM+XHJcbiAgICAgIHtwby5tYXAocG9rZW1vbiA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Bva2Vtb24uaWR9PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxoMz4ge3Bva2Vtb24uYWJpbGl0eS5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGgzPmJhc2VfZXhwZXJpZW5jZSA6IHtwbzF9PC9oMz5cclxuICAgICAgICAgICAgPGgzPmhlaWdodCA6IHtwbzJ9PC9oMz5cclxuICAgICAgICAgICAgPGgzPndlaWdodCA6IHtwbzN9PC9oMz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0gIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbnMxOyJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwbyIsInJlcyIsImZldGNoIiwicGFyYW1zIiwibmFtZTEiLCJkYXRhIiwianNvbiIsIm5vdEZvdW5kIiwicHJvcHMiLCJhYmlsaXRpZXMiLCJwbzEiLCJiYXNlX2V4cGVyaWVuY2UiLCJwbzIiLCJoZWlnaHQiLCJwbzMiLCJ3ZWlnaHQiLCJwNCIsImZvcm1zIiwibmFtZSIsIlBva2Vtb25zMSIsImRpdiIsImgzIiwibWFwIiwicG9rZW1vbiIsImFiaWxpdHkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[name1].js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[name1].js"));
module.exports = __webpack_exports__;

})();