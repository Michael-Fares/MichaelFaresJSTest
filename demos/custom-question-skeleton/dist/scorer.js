/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scorer.js":
/*!*******************!*\
  !*** ./scorer.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scorer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scorer/index */ \"./scorer/index.js\");\n/*globals LearnosityAmd*/\n\nLearnosityAmd.define([], function () {\n  return {\n    Scorer: _scorer_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  };\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY29yZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBRUFDLGFBQWEsQ0FBQ0MsTUFBZCxDQUFxQixFQUFyQixFQUF5QixZQUFZO0FBQ2pDLFNBQU87QUFDSEYsSUFBQUEsTUFBTSxFQUFOQSxxREFBTUE7QUFESCxHQUFQO0FBR0gsQ0FKRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njb3Jlci5qcz9mYjhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qZ2xvYmFscyBMZWFybm9zaXR5QW1kKi9cbmltcG9ydCBTY29yZXIgZnJvbSAnLi9zY29yZXIvaW5kZXgnO1xuXG5MZWFybm9zaXR5QW1kLmRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIFNjb3JlclxuICAgIH07XG59KTtcbiJdLCJuYW1lcyI6WyJTY29yZXIiLCJMZWFybm9zaXR5QW1kIiwiZGVmaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scorer.js\n");

/***/ }),

/***/ "./scorer/index.js":
/*!*************************!*\
  !*** ./scorer/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scorer)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scorer = /*#__PURE__*/function () {\n  function Scorer(question, response) {\n    _classCallCheck(this, Scorer);\n\n    this.question = question;\n    this.response = response;\n  }\n  /**\n   * Check if the current question's response is valid or not\n   * (Required)\n   * @returns {boolean}\n   */\n\n\n  _createClass(Scorer, [{\n    key: \"isValid\",\n    value: function isValid() {\n      // get the values, for the hundreds, tens, and ones the\n      // user submitted as the saved responses object\n      // as an array by passing this.response into the Object.values method\n      // and then join that array into string\n      // and save to a varible called usersResponse\n      var userResponse = Object.values(this.response).join(\"\"); // return true if it is equal to the valid response supplied on the question JSON\n\n      if (this.question.valid_response === userResponse) return true; // otherwise return false\n\n      return false;\n    }\n    /**\n     * Returns an object displaying the validation state of each individual item inside the stored response\n     * For example:\n     * The student response value is: { min: 10, max: 20 } and our correct answer is { min: 10, max: 30 }\n     * Then we expect the result of this validateIndividualResponses will be:\n     * { min: true, max: false }\n     * @returns {{}|null}\n     */\n\n  }, {\n    key: \"validateIndividualResponses\",\n    value: function validateIndividualResponses() {\n      // TODO: Requires implementation\n      return null;\n    }\n    /**\n     * Returns the score of the stored response\n     * @returns {number|null}\n     */\n\n  }, {\n    key: \"score\",\n    value: function score() {\n      // if the isValid function returns true\n      // then assign the user the max_score\n      // from the question JSON (my max score was 1)\n      // else return 0\n      if (this.isValid()) return this.question.max_score;\n      return 0;\n    }\n    /**\n     * Returns the possible max score of the stored response\n     * @returns {number}\n     */\n\n  }, {\n    key: \"maxScore\",\n    value: function maxScore() {\n      // if the user scored a point (score() returns true)\n      // then assign the max possible score (1 point in the case of this question)\n      // otherwise assign 0\n      if (this.score()) return this.question.max_score;\n      return 0;\n    }\n    /**\n     * Check if the current question is scorable or not.\n     * For example:\n     * - If there is no valid response data set in the question, this method should return false\n     * - If this question type is not scorable (like an essay or open ended question) then this will return false\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"canValidateResponse\",\n    value: function canValidateResponse() {\n      // destructure the response object to work with it individually\n      var response = this.response; // loop over the response object submitted by the user\n      // checking to make sure the hundreds, tens, and ones places each contain a value\n      // if any of them contain null, then return false\n\n      for (var key in response) {\n        if (response[key] === null) {\n          return false;\n        }\n      } // else, return true\n\n\n      return true;\n    }\n  }]);\n\n  return Scorer;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY29yZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsa0JBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0ksbUJBQVU7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsVUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLSCxRQUFuQixFQUE2QkksSUFBN0IsQ0FBa0MsRUFBbEMsQ0FBckIsQ0FQTSxDQVFOOztBQUNBLFVBQUcsS0FBS0wsUUFBTCxDQUFjTSxjQUFkLEtBQWlDSixZQUFwQyxFQUFrRCxPQUFPLElBQVAsQ0FUNUMsQ0FVTjs7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDSSx1Q0FBOEI7QUFDMUI7QUFDQSxhQUFPLElBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksaUJBQVE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUcsS0FBS0ssT0FBTCxFQUFILEVBQW1CLE9BQU8sS0FBS1AsUUFBTCxDQUFjUSxTQUFyQjtBQUNuQixhQUFPLENBQVA7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBOzs7O1dBQ0ksb0JBQVc7QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFHLEtBQUtDLEtBQUwsRUFBSCxFQUFpQixPQUFPLEtBQUtULFFBQUwsQ0FBY1EsU0FBckI7QUFDakIsYUFBTyxDQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNJLCtCQUFzQjtBQUNsQjtBQUNBLFVBQVFQLFFBQVIsR0FBcUIsSUFBckIsQ0FBUUEsUUFBUixDQUZrQixDQUluQjtBQUNBO0FBQ0E7O0FBQ0EsV0FBSSxJQUFJUyxHQUFSLElBQWVULFFBQWYsRUFBeUI7QUFDckIsWUFBR0EsUUFBUSxDQUFDUyxHQUFELENBQVIsS0FBa0IsSUFBckIsRUFBMkI7QUFDdkIsaUJBQU8sS0FBUDtBQUNIO0FBQ0osT0FYa0IsQ0FZbkI7OztBQUNBLGFBQU8sSUFBUDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2NvcmVyL2luZGV4LmpzP2QyMWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVyIHtcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbiwgcmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xuICAgICAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcXVlc3Rpb24ncyByZXNwb25zZSBpcyB2YWxpZCBvciBub3RcbiAgICAgKiAoUmVxdWlyZWQpXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgLy8gZ2V0IHRoZSB2YWx1ZXMsIGZvciB0aGUgaHVuZHJlZHMsIHRlbnMsIGFuZCBvbmVzIHRoZVxuICAgICAgICAvLyB1c2VyIHN1Ym1pdHRlZCBhcyB0aGUgc2F2ZWQgcmVzcG9uc2VzIG9iamVjdFxuICAgICAgICAvLyBhcyBhbiBhcnJheSBieSBwYXNzaW5nIHRoaXMucmVzcG9uc2UgaW50byB0aGUgT2JqZWN0LnZhbHVlcyBtZXRob2RcbiAgICAgICAgLy8gYW5kIHRoZW4gam9pbiB0aGF0IGFycmF5IGludG8gc3RyaW5nXG4gICAgICAgIC8vIGFuZCBzYXZlIHRvIGEgdmFyaWJsZSBjYWxsZWQgdXNlcnNSZXNwb25zZVxuXG4gICAgICAgIGNvbnN0IHVzZXJSZXNwb25zZSA9IE9iamVjdC52YWx1ZXModGhpcy5yZXNwb25zZSkuam9pbihcIlwiKVxuICAgICAgICAvLyByZXR1cm4gdHJ1ZSBpZiBpdCBpcyBlcXVhbCB0byB0aGUgdmFsaWQgcmVzcG9uc2Ugc3VwcGxpZWQgb24gdGhlIHF1ZXN0aW9uIEpTT05cbiAgICAgICAgaWYodGhpcy5xdWVzdGlvbi52YWxpZF9yZXNwb25zZSA9PT0gdXNlclJlc3BvbnNlKSByZXR1cm4gdHJ1ZVxuICAgICAgICAvLyBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBkaXNwbGF5aW5nIHRoZSB2YWxpZGF0aW9uIHN0YXRlIG9mIGVhY2ggaW5kaXZpZHVhbCBpdGVtIGluc2lkZSB0aGUgc3RvcmVkIHJlc3BvbnNlXG4gICAgICogRm9yIGV4YW1wbGU6XG4gICAgICogVGhlIHN0dWRlbnQgcmVzcG9uc2UgdmFsdWUgaXM6IHsgbWluOiAxMCwgbWF4OiAyMCB9IGFuZCBvdXIgY29ycmVjdCBhbnN3ZXIgaXMgeyBtaW46IDEwLCBtYXg6IDMwIH1cbiAgICAgKiBUaGVuIHdlIGV4cGVjdCB0aGUgcmVzdWx0IG9mIHRoaXMgdmFsaWRhdGVJbmRpdmlkdWFsUmVzcG9uc2VzIHdpbGwgYmU6XG4gICAgICogeyBtaW46IHRydWUsIG1heDogZmFsc2UgfVxuICAgICAqIEByZXR1cm5zIHt7fXxudWxsfVxuICAgICAqL1xuICAgIHZhbGlkYXRlSW5kaXZpZHVhbFJlc3BvbnNlcygpIHtcbiAgICAgICAgLy8gVE9ETzogUmVxdWlyZXMgaW1wbGVtZW50YXRpb25cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2NvcmUgb2YgdGhlIHN0b3JlZCByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBzY29yZSgpIHtcbiAgICAgICAgLy8gaWYgdGhlIGlzVmFsaWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICAgIC8vIHRoZW4gYXNzaWduIHRoZSB1c2VyIHRoZSBtYXhfc2NvcmVcbiAgICAgICAgLy8gZnJvbSB0aGUgcXVlc3Rpb24gSlNPTiAobXkgbWF4IHNjb3JlIHdhcyAxKVxuICAgICAgICAvLyBlbHNlIHJldHVybiAwXG4gICAgICAgIGlmKHRoaXMuaXNWYWxpZCgpKSByZXR1cm4gdGhpcy5xdWVzdGlvbi5tYXhfc2NvcmVcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcG9zc2libGUgbWF4IHNjb3JlIG9mIHRoZSBzdG9yZWQgcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIG1heFNjb3JlKCkge1xuICAgICAgICAvLyBpZiB0aGUgdXNlciBzY29yZWQgYSBwb2ludCAoc2NvcmUoKSByZXR1cm5zIHRydWUpXG4gICAgICAgIC8vIHRoZW4gYXNzaWduIHRoZSBtYXggcG9zc2libGUgc2NvcmUgKDEgcG9pbnQgaW4gdGhlIGNhc2Ugb2YgdGhpcyBxdWVzdGlvbilcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGFzc2lnbiAwXG4gICAgICAgIGlmKHRoaXMuc2NvcmUoKSkgcmV0dXJuIHRoaXMucXVlc3Rpb24ubWF4X3Njb3JlXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHF1ZXN0aW9uIGlzIHNjb3JhYmxlIG9yIG5vdC5cbiAgICAgKiBGb3IgZXhhbXBsZTpcbiAgICAgKiAtIElmIHRoZXJlIGlzIG5vIHZhbGlkIHJlc3BvbnNlIGRhdGEgc2V0IGluIHRoZSBxdWVzdGlvbiwgdGhpcyBtZXRob2Qgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAqIC0gSWYgdGhpcyBxdWVzdGlvbiB0eXBlIGlzIG5vdCBzY29yYWJsZSAobGlrZSBhbiBlc3NheSBvciBvcGVuIGVuZGVkIHF1ZXN0aW9uKSB0aGVuIHRoaXMgd2lsbCByZXR1cm4gZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBjYW5WYWxpZGF0ZVJlc3BvbnNlKCkge1xuICAgICAgICAvLyBkZXN0cnVjdHVyZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRvIHdvcmsgd2l0aCBpdCBpbmRpdmlkdWFsbHlcbiAgICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gdGhpc1xuICAgICAgIFxuICAgICAgIC8vIGxvb3Agb3ZlciB0aGUgcmVzcG9uc2Ugb2JqZWN0IHN1Ym1pdHRlZCBieSB0aGUgdXNlclxuICAgICAgIC8vIGNoZWNraW5nIHRvIG1ha2Ugc3VyZSB0aGUgaHVuZHJlZHMsIHRlbnMsIGFuZCBvbmVzIHBsYWNlcyBlYWNoIGNvbnRhaW4gYSB2YWx1ZVxuICAgICAgIC8vIGlmIGFueSBvZiB0aGVtIGNvbnRhaW4gbnVsbCwgdGhlbiByZXR1cm4gZmFsc2VcbiAgICAgICBmb3IobGV0IGtleSBpbiByZXNwb25zZSkge1xuICAgICAgICAgICBpZihyZXNwb25zZVtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAvLyBlbHNlLCByZXR1cm4gdHJ1ZVxuICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlNjb3JlciIsInF1ZXN0aW9uIiwicmVzcG9uc2UiLCJ1c2VyUmVzcG9uc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidmFsaWRfcmVzcG9uc2UiLCJpc1ZhbGlkIiwibWF4X3Njb3JlIiwic2NvcmUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./scorer/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scorer.js");
/******/ 	
/******/ })()
;