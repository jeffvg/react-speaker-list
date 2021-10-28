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
exports.id = "pages/api/speakers/[id]";
exports.ids = ["pages/api/speakers/[id]"];
exports.modules = {

/***/ "./pages/api/speakers/[id].js":
/*!************************************!*\
  !*** ./pages/api/speakers/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// import { data } from '../../../SpeakerData';\n\n\n\nconst {\n  promisify\n} = __webpack_require__(/*! util */ \"util\");\n\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst writeFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile));\n\nconst delay = ms => new Promise(resolve => {\n  setTimeout(resolve, ms);\n});\n\nasync function handler(req, res) {\n  // res.status(200).send(JSON.stringify(data, null, 2));\n  const method = req === null || req === void 0 ? void 0 : req.method;\n  const id = parseInt(req === null || req === void 0 ? void 0 : req.query.id);\n  const recordFromBody = req === null || req === void 0 ? void 0 : req.body;\n  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n\n  switch (method) {\n    case \"POST\":\n      await postMethod();\n      break;\n\n    case \"PUT\":\n      await putMethod();\n      break;\n\n    case \"DELETE\":\n      await deleteMethod();\n      break;\n\n    default:\n      res.status(501).send(`Method ${method} not implemented`);\n      console.log(`Method ${method} not implemented`);\n  }\n\n  async function putMethod() {\n    try {\n      const readFileData = await readFile(jsonFile);\n      await delay(1000);\n      const speakers = JSON.parse(readFileData).speakers;\n\n      if (!speakers) {\n        res.status(404).send(\"Error: Request failed with status code 404\");\n      } else {\n        const newSpeakersArray = speakers.map(function (rec) {\n          return rec.id == id ? recordFromBody : rec;\n        });\n        writeFile(jsonFile, JSON.stringify({\n          speakers: newSpeakersArray\n        }, null, 2));\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.status(200).send(JSON.stringify(recordFromBody, null, 2));\n        console.log(`PUT /api/speakers/${id} status: 200`);\n      }\n    } catch (e) {\n      res.status(500).send(`PUT /api/speakers/${id} status: 500 unexpected error`);\n      console.log(`PUT /api/speakers/${id} status: 200`, e);\n    }\n  }\n\n  async function deleteMethod() {\n    try {\n      const readFileData = await readFile(jsonFile);\n      await delay(1000);\n      const speakers = JSON.parse(readFileData).speakers;\n\n      if (!speakers) {\n        res.status(404).send(\"Error: Request failed with status code 404\");\n      } else {\n        const newSpeakersArray = speakers.filter(function (rec) {\n          return rec.id != id;\n        });\n        writeFile(jsonFile, JSON.stringify({\n          speakers: newSpeakersArray\n        }, null, 2));\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.status(200).send(JSON.stringify(speakers.find(rec => rec.id == id), null, 2));\n        console.log(`DELETE /api/speakers/${id} status: 200`);\n      }\n    } catch (e) {\n      res.status(500).send(`PUT /api/speakers/${id} status: 500 unexpected error`);\n      console.log(`DELETE /api/speakers/${id} status: 200`, e);\n    }\n  }\n\n  async function postMethod() {\n    try {\n      const readFileData = await readFile(jsonFile);\n      await delay(1000);\n      const speakers = JSON.parse(readFileData).speakers;\n\n      if (!speakers) {\n        res.status(404).send(\"Error: Request failed with status code 404\");\n      } else {\n        const idNew = speakers.reduce((accumulator, currentValue) => {\n          const idCurrent = parseInt(currentValue.id);\n          return idCurrent > accumulator ? idCurrent : accumulator;\n        }, 0) + 1;\n\n        const newSpeakerRec = _objectSpread(_objectSpread({}, recordFromBody), {}, {\n          id: idNew.toString()\n        });\n\n        const newSpeakersArray = [newSpeakerRec, ...speakers];\n        writeFile(jsonFile, JSON.stringify({\n          speakers: newSpeakersArray\n        }, null, 2));\n        res.setHeader(\"Content-Type\", \"application/json\");\n        res.status(200).send(JSON.stringify(newSpeakerRec, null, 2));\n        console.log(`POST /api/speakers/${id} status: 200`);\n      }\n    } catch (e) {\n      res.status(500).send(`PUT /api/speakers/${id} status: 500 unexpected error`);\n      console.log(`POST /api/speakers/${id} status: 200`, e);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTLENBQUNlLFFBQUQsRUFBV1UsSUFBSSxDQUFDSyxTQUFMLENBQWU7QUFBRU4sVUFBQUEsUUFBUSxFQUFFRztBQUFaLFNBQWYsRUFBK0MsSUFBL0MsRUFBcUQsQ0FBckQsQ0FBWCxDQUFUO0FBQ0ZuQixRQUFBQSxHQUFHLENBQUN1QixTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQXZCLFFBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSyxJQUFJLENBQUNLLFNBQUwsQ0FBZVUsYUFBZixFQUE4QixJQUE5QixFQUFvQyxDQUFwQyxDQUFyQjtBQUNBbkIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsc0JBQXFCWixFQUFHLGNBQXJDO0FBQ0Q7QUFDRixLQW5CRCxDQW1CRSxPQUFPc0IsQ0FBUCxFQUFVO0FBQ1J4QixNQUFBQSxHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixxQkFBb0JWLEVBQUcsK0JBQTdDO0FBQ0ZXLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLHNCQUFxQlosRUFBRyxjQUFyQyxFQUFvRHNCLENBQXBEO0FBQ0Q7QUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3BlYWtlci1saXN0Ly4vcGFnZXMvYXBpL3NwZWFrZXJzL1tpZF0uanM/ODMyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vLi4vU3BlYWtlckRhdGEnO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xuY29uc3Qgd3JpdGVGaWxlID0gcHJvbWlzaWZ5KGZzLndyaXRlRmlsZSk7XG5jb25zdCBkZWxheSA9IChtcykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMikpO1xuICBjb25zdCBtZXRob2QgPSByZXE/Lm1ldGhvZDtcbiAgY29uc3QgaWQgPSBwYXJzZUludChyZXE/LnF1ZXJ5LmlkKTtcbiAgY29uc3QgcmVjb3JkRnJvbUJvZHkgPSByZXE/LmJvZHk7XG4gIGNvbnN0IGpzb25GaWxlID0gcGF0aC5yZXNvbHZlKFwiLi9cIiwgXCJkYi5qc29uXCIpO1xuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICBhd2FpdCBwb3N0TWV0aG9kKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICBhd2FpdCBwdXRNZXRob2QoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIGF3YWl0IGRlbGV0ZU1ldGhvZCgpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNTAxKS5zZW5kKGBNZXRob2QgJHttZXRob2R9IG5vdCBpbXBsZW1lbnRlZGApO1xuICAgICAgY29uc29sZS5sb2coYE1ldGhvZCAke21ldGhvZH0gbm90IGltcGxlbWVudGVkYCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBwdXRNZXRob2QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcbiAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XG4gICAgICBpZiAoIXNwZWFrZXJzKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLm1hcChmdW5jdGlvbihyZWMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PSBpZCA/IHJlY29yZEZyb21Cb2R5IDogcmVjO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHdyaXRlRmlsZShqc29uRmlsZSwgSlNPTi5zdHJpbmdpZnkoeyBzcGVha2VyczogbmV3U3BlYWtlcnNBcnJheSB9LCBudWxsLCAyKSk7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShyZWNvcmRGcm9tQm9keSwgbnVsbCwgMikpO1xuICAgICAgICBjb25zb2xlLmxvZyhgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gc3RhdHVzOiAyMDBgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGBQVVQgL2FwaS9zcGVha2Vycy8ke2lkfSBzdGF0dXM6IDUwMCB1bmV4cGVjdGVkIGVycm9yYCk7XG4gICAgICBjb25zb2xlLmxvZyhgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gc3RhdHVzOiAyMDBgLCBlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVNZXRob2QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcbiAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XG4gICAgICBpZiAoIXNwZWFrZXJzKSB7XG4gICAgICAgICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJFcnJvcjogUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDRcIilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IHNwZWFrZXJzLmZpbHRlcihmdW5jdGlvbihyZWMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCAhPSBpZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB3cml0ZUZpbGUoanNvbkZpbGUsIEpTT04uc3RyaW5naWZ5KHsgc3BlYWtlcnM6IG5ld1NwZWFrZXJzQXJyYXkgfSwgbnVsbCwgMikpO1xuICAgICAgICByZXMuc2V0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoSlNPTi5zdHJpbmdpZnkoc3BlYWtlcnMuZmluZChyZWM9PnJlYy5pZCA9PSBpZCksIG51bGwsIDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogMjAwYCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChgUFVUIC9hcGkvc3BlYWtlcnMvJHtpZH0gc3RhdHVzOiA1MDAgdW5leHBlY3RlZCBlcnJvcmApO1xuICAgICAgY29uc29sZS5sb2coYERFTEVURSAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogMjAwYCwgZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gcG9zdE1ldGhvZCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xuICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcbiAgICAgIGlmICghc3BlYWtlcnMpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDQwNCkuc2VuZChcIkVycm9yOiBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwNFwiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBpZE5ldyA9IHNwZWFrZXJzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpZEN1cnJlbnQgPSBwYXJzZUludChjdXJyZW50VmFsdWUuaWQpO1xuICAgICAgICAgICAgICByZXR1cm4gaWRDdXJyZW50ID4gYWNjdW11bGF0b3IgPyBpZEN1cnJlbnQgOiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICB9LDApICsgMTtcbiAgICAgICAgICBjb25zdCBuZXdTcGVha2VyUmVjID0gey4uLnJlY29yZEZyb21Cb2R5LCBpZDogaWROZXcudG9TdHJpbmcoKSB9O1xuXG4gICAgICAgICAgY29uc3QgbmV3U3BlYWtlcnNBcnJheSA9IFtuZXdTcGVha2VyUmVjLCAuLi5zcGVha2Vyc107XG4gICAgICAgICAgd3JpdGVGaWxlKGpzb25GaWxlLCBKU09OLnN0cmluZ2lmeSh7IHNwZWFrZXJzOiBuZXdTcGVha2Vyc0FycmF5IH0sIG51bGwsIDIpKTtcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KG5ld1NwZWFrZXJSZWMsIG51bGwsIDIpKTtcbiAgICAgICAgY29uc29sZS5sb2coYFBPU1QgL2FwaS9zcGVha2Vycy8ke2lkfSBzdGF0dXM6IDIwMGApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoYFBVVCAvYXBpL3NwZWFrZXJzLyR7aWR9IHN0YXR1czogNTAwIHVuZXhwZWN0ZWQgZXJyb3JgKTtcbiAgICAgIGNvbnNvbGUubG9nKGBQT1NUIC9hcGkvc3BlYWtlcnMvJHtpZH0gc3RhdHVzOiAyMDBgLCBlKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJ3cml0ZUZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicGFyc2VJbnQiLCJxdWVyeSIsInJlY29yZEZyb21Cb2R5IiwiYm9keSIsImpzb25GaWxlIiwicG9zdE1ldGhvZCIsInB1dE1ldGhvZCIsImRlbGV0ZU1ldGhvZCIsInN0YXR1cyIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwicmVhZEZpbGVEYXRhIiwic3BlYWtlcnMiLCJKU09OIiwicGFyc2UiLCJuZXdTcGVha2Vyc0FycmF5IiwibWFwIiwicmVjIiwic3RyaW5naWZ5Iiwic2V0SGVhZGVyIiwiZSIsImZpbHRlciIsImZpbmQiLCJpZE5ldyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiY3VycmVudFZhbHVlIiwiaWRDdXJyZW50IiwibmV3U3BlYWtlclJlYyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/speakers/[id].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/[id].js"));
module.exports = __webpack_exports__;

})();