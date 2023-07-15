"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = notification;

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

function notification() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "top-right";
  var autoClose = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
  var hideProgressBar = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var closeOnClick = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  var pauseOnHover = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
  var draggable = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
  var progress = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : undefined;

  if (type === "success") {
    return _reactToastify.toast.success(content, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress
    });
  }

  if (type === "error") {
    return _reactToastify.toast.error(content, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress
    });
  }

  if (type === "info") {
    return _reactToastify.toast.info(content, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress
    });
  }

  if (type === "warning") {
    return _reactToastify.toast.warning(content, {
      position: position,
      autoClose: autoClose,
      hideProgressBar: hideProgressBar,
      closeOnClick: closeOnClick,
      pauseOnHover: pauseOnHover,
      draggable: draggable,
      progress: progress
    });
  }

  return _reactToastify.toast["default"](content, {
    position: position,
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: closeOnClick,
    pauseOnHover: pauseOnHover,
    draggable: draggable,
    progress: progress
  });
}
//# sourceMappingURL=index.dev.js.map
