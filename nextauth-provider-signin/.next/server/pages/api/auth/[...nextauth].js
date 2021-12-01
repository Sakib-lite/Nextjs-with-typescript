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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"./utils/db.ts\");\n/* harmony import */ var _utils_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/password */ \"./utils/password.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  session: {\n    jwt: true\n  },\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    async authorize(credentials) {\n      const client = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_2__.connectToDatabase)();\n      const db = client.db();\n      const user = await db.collection('clients').findOne({\n        email: credentials.email\n      });\n\n      if (!user) {\n        client.close();\n        throw new Error('Email is not found');\n      }\n\n      const isValid = await (0,_utils_password__WEBPACK_IMPORTED_MODULE_3__.checkPassword)(credentials.password, user.password);\n\n      if (!isValid) {\n        client.close();\n        throw new Error('Password does not match');\n      }\n\n      client.close();\n      return {\n        email: user.email\n      };\n    }\n\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: \"aaa57e734ec8232e6e8f\",\n    clientSecret: \"dc49b35682d5c7e95fad07345ac6b25c7a4cfa29\"\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Google({\n    clientId: \"623406573983-0u1dtj7p84pobnhuju48ghm5edaoo7c5.apps.googleusercontent.com\",\n    clientSecret: \"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\"\n  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Facebook({\n    clientId: \"958143598114046\",\n    clientSecret: \"5a0e4da9a6eb30c64f0b6c8c5b3f29a2\"\n  })],\n  pages: {\n    signIn: '/login'\n  },\n  // SQL or MongoDB database (or leave empty)\n  database: \"mongodb+srv://sakib:rwgw3Fr02m7YNIbl@authentication.hdnne.mongodb.net/next-auth?retryWrites=true&w=majority\"\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVFBLGlFQUFlQSxnREFBUSxDQUFDO0FBQ3RCSSxFQUFBQSxPQUFPLEVBQUU7QUFBRUMsSUFBQUEsR0FBRyxFQUFFO0FBQVAsR0FEYTtBQUd0QkMsRUFBQUEsU0FBUyxFQUFFLENBQ1RMLHNFQUFBLENBQXNCO0FBQ3BCLFVBQU1PLFNBQU4sQ0FBZ0JDLFdBQWhCLEVBQWdDO0FBQzlCLFlBQU1DLE1BQU0sR0FBRyxNQUFNUiw0REFBaUIsRUFBdEM7QUFDQSxZQUFNUyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBUCxFQUFYO0FBRUEsWUFBTUMsSUFBSSxHQUFHLE1BQU1ELEVBQUUsQ0FDbEJFLFVBRGdCLENBQ0wsU0FESyxFQUVoQkMsT0FGZ0IsQ0FFUjtBQUFFQyxRQUFBQSxLQUFLLEVBQUVOLFdBQVcsQ0FBQ007QUFBckIsT0FGUSxDQUFuQjs7QUFJQSxVQUFJLENBQUNILElBQUwsRUFBVztBQUNURixRQUFBQSxNQUFNLENBQUNNLEtBQVA7QUFDQSxjQUFNLElBQUlDLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0Q7O0FBRUQsWUFBTUMsT0FBTyxHQUFHLE1BQU1mLDhEQUFhLENBQ2pDTSxXQUFXLENBQUNVLFFBRHFCLEVBRWpDUCxJQUFJLENBQUNPLFFBRjRCLENBQW5DOztBQUtBLFVBQUksQ0FBQ0QsT0FBTCxFQUFjO0FBQ1pSLFFBQUFBLE1BQU0sQ0FBQ00sS0FBUDtBQUNBLGNBQU0sSUFBSUMsS0FBSixDQUFVLHlCQUFWLENBQU47QUFDRDs7QUFFRFAsTUFBQUEsTUFBTSxDQUFDTSxLQUFQO0FBQ0EsYUFBTztBQUFFRCxRQUFBQSxLQUFLLEVBQUVILElBQUksQ0FBQ0c7QUFBZCxPQUFQO0FBQ0Q7O0FBMUJtQixHQUF0QixDQURTLEVBNkJiZCxpRUFBQSxDQUFpQjtBQUNmb0IsSUFBQUEsUUFBUSxFQUFFQyxzQkFESztBQUVmRyxJQUFBQSxZQUFZLEVBQUVILDBDQUF5Qkk7QUFGeEIsR0FBakIsQ0E3QmEsRUFrQ2J6QixpRUFBQSxDQUFpQjtBQUNmb0IsSUFBQUEsUUFBUSxFQUFFQywwRUFESztBQUVmRyxJQUFBQSxZQUFZLEVBQUVILHFDQUF5Qk87QUFGeEIsR0FBakIsQ0FsQ2EsRUFzQ2I1QixtRUFBQSxDQUFtQjtBQUNqQm9CLElBQUFBLFFBQVEsRUFBRUMsaUJBRE87QUFFakJHLElBQUFBLFlBQVksRUFBRUgsa0NBQTJCVTtBQUZ4QixHQUFuQixDQXRDYSxDQUhXO0FBOEN0QkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLE1BQU0sRUFBRTtBQURILEdBOUNlO0FBaUR0QjtBQUNBQyxFQUFBQSxRQUFRLEVBQUViLDZHQUF3QmM7QUFsRFosQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLXByb3ZpZGVyLXNpZ25pbi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kYic7XHJcbmltcG9ydCB7IGNoZWNrUGFzc3dvcmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9wYXNzd29yZCc7XHJcblxyXG5cclxudHlwZSBhID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBzZXNzaW9uOiB7IGp3dDogdHJ1ZSB9LFxyXG5cclxuICBwcm92aWRlcnM6IFtcclxuICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYSkge1xyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRiXHJcbiAgICAgICAgICAuY29sbGVjdGlvbignY2xpZW50cycpXHJcbiAgICAgICAgICAuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcclxuXHJcbiAgICAgICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgaXMgbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gYXdhaXQgY2hlY2tQYXNzd29yZChcclxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgICAgICByZXR1cm4geyBlbWFpbDogdXNlci5lbWFpbCB9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcblByb3ZpZGVycy5HaXRIdWIoe1xyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXHJcbiAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVUXHJcbn0pXHJcbixcclxuUHJvdmlkZXJzLkdvb2dsZSh7XHJcbiAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQsXHJcbn0pLFxyXG5Qcm92aWRlcnMuRmFjZWJvb2soe1xyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCxcclxuICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX1NFQ1JFVFxyXG59KVxyXG4gIF0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9sb2dpbidcclxuICB9LFxyXG4gIC8vIFNRTCBvciBNb25nb0RCIGRhdGFiYXNlIChvciBsZWF2ZSBlbXB0eSlcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxyXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNoZWNrUGFzc3dvcmQiLCJzZXNzaW9uIiwiand0IiwicHJvdmlkZXJzIiwiQ3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNsaWVudCIsImRiIiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwiZW1haWwiLCJjbG9zZSIsIkVycm9yIiwiaXNWYWxpZCIsInBhc3N3b3JkIiwiR2l0SHViIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCIsIkdvb2dsZSIsIkdPT0dMRV9JRCIsIkdPT0dMRV9TRUNSRVQiLCJGYWNlYm9vayIsIkZBQ0VCT09LX0lEIiwiRkFDRUJPT0tfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJkYXRhYmFzZSIsIkRBVEFCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./utils/db.ts":
/*!*********************!*\
  !*** ./utils/db.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\nconst {\n  MongoClient\n} = __webpack_require__(/*! mongodb */ \"mongodb\"); // import { MongoClient} from 'mongodb'\n\n\nasync function connectToDatabase() {\n  const client = await MongoClient.connect(process.env.MONGODB_URI, {\n    useUnifiedTopology: true\n  });\n  return client;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTTtBQUFFQSxFQUFBQTtBQUFGLElBQWtCQyxtQkFBTyxDQUFDLHdCQUFELENBQS9CLEVBQ0E7OztBQUVPLGVBQWVDLGlCQUFmLEdBQW1DO0FBQ3hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNSCxXQUFXLENBQUNJLE9BQVosQ0FBb0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUFoQyxFQUE2QztBQUNoRUMsSUFBQUEsa0JBQWtCLEVBQUU7QUFENEMsR0FBN0MsQ0FBckI7QUFJQSxTQUFPTCxNQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0YXV0aC1wcm92aWRlci1zaWduaW4vLi91dGlscy9kYi50cz9jZDdiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgTW9uZ29DbGllbnQgfSA9IHJlcXVpcmUoJ21vbmdvZGInKTtcclxuLy8gaW1wb3J0IHsgTW9uZ29DbGllbnR9IGZyb20gJ21vbmdvZGInXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/db.ts\n");

/***/ }),

/***/ "./utils/password.ts":
/*!***************************!*\
  !*** ./utils/password.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hashPassword\": () => (/* binding */ hashPassword),\n/* harmony export */   \"checkPassword\": () => (/* binding */ checkPassword)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function hashPassword(password) {\n  const hashedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.hash)(password, 12);\n  return hashedPassword;\n}\nasync function checkPassword(password, hashedPassword) {\n  const verifiedPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_0__.compare)(password, hashedPassword);\n  return verifiedPassword;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9wYXNzd29yZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxlQUFlRSxZQUFmLENBQTRCQyxRQUE1QixFQUE4QztBQUNuRCxRQUFNQyxjQUFjLEdBQUcsTUFBTUgsOENBQUksQ0FBQ0UsUUFBRCxFQUFXLEVBQVgsQ0FBakM7QUFFQSxTQUFPQyxjQUFQO0FBQ0Q7QUFFTSxlQUFlQyxhQUFmLENBQTZCRixRQUE3QixFQUErQ0MsY0FBL0MsRUFBdUU7QUFDNUUsUUFBTUUsZ0JBQWdCLEdBQUcsTUFBTU4saURBQU8sQ0FBQ0csUUFBRCxFQUFXQyxjQUFYLENBQXRDO0FBRUEsU0FBT0UsZ0JBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRhdXRoLXByb3ZpZGVyLXNpZ25pbi8uL3V0aWxzL3Bhc3N3b3JkLnRzP2YyMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGFyZSwgaGFzaCB9IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xyXG4gIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaChwYXNzd29yZCwgMTIpO1xyXG5cclxuICByZXR1cm4gaGFzaGVkUGFzc3dvcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2hlZFBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICBjb25zdCB2ZXJpZmllZFBhc3N3b3JkID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG5cclxuICByZXR1cm4gdmVyaWZpZWRQYXNzd29yZDtcclxufVxyXG4iXSwibmFtZXMiOlsiY29tcGFyZSIsImhhc2giLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInZlcmlmaWVkUGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/password.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();