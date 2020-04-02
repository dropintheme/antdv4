"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AutoComplete", {
  enumerable: true,
  get: function get() {
    return _antd.AutoComplete;
  }
});

require("antd/es/auto-complete/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: function get() {
    return _antd.Avatar;
  }
});

require("antd/es/avatar/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function get() {
    return _antd.Badge;
  }
});

require("antd/es/badge/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/layout/style/css");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Content = _antd.Layout.Content;

var Body = function Body(props) {
  return _react["default"].createElement(Content, null, props.children);
};

var _default = Body;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbWithRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

require("antd/es/breadcrumb/style/css");

require("antd/es/icon/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BreadcrumbWithRoutes = function BreadcrumbWithRoutes(props) {
  var breadCrumbItems = [];

  if (props.routes) {
    breadCrumbItems = props.routes.map(function (route) {
      var icon = route.icon ? _react["default"].createElement(_antd.Icon, {
        type: route.icon
      }) : null;
      var name = route.name ? _react["default"].createElement("span", null, route.name) : null;
      var link = route.link ? _react["default"].createElement(_reactRouterDom.Link, {
        to: route.link
      }, icon, name) : _react["default"].createElement(_react["default"].Fragment, null, icon, name);

      if (icon || name) {
        return _react["default"].createElement(_antd.Breadcrumb.Item, {
          key: name
        }, link);
      }

      return null;
    });
  }

  return _react["default"].createElement(_antd.Breadcrumb, null, breadCrumbItems);
};

exports.BreadcrumbWithRoutes = BreadcrumbWithRoutes;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _antd.Button;
  }
});

require("antd/es/button/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _antd.Card;
  }
});

require("antd/es/card/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Drawer", {
  enumerable: true,
  get: function get() {
    return _antd.Drawer;
  }
});

require("antd/es/drawer/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _antd.Dropdown;
  }
});

require("antd/es/dropdown/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/layout/style/css");

require("./footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = _antd.Layout.Footer;

var SiteFooter = function SiteFooter(props) {
  return _react["default"].createElement(Footer, {
    className: "fixed-footer"
  }, props.children);
};

var _default = SiteFooter;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function get() {
    return _antd.Form;
  }
});

require("antd/es/form/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _antd.Row;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _antd.Col;
  }
});

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/layout/style/css");

var _flex = require("../layout/flex");

var _logo = _interopRequireDefault(require("../logo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Header = _antd.Layout.Header;

var SiteHeader = function SiteHeader(_ref) {
  var logo = _ref.logo,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["logo", "children"]);

  return _react["default"].createElement(Header, null, _react["default"].createElement(_flex.FlexContainer, null, _react["default"].createElement(_logo["default"], logo), _react["default"].createElement(_flex.FlexAutoGrow, {
    justify: "flex-end",
    align: "center"
  }, children)));
};

var _default = SiteHeader;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _antd.Icon;
  }
});

require("antd/es/icon/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _antd.Input;
  }
});
exports.TextArea = exports.InputLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/input/style/css");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextArea = _antd.Input.TextArea;
exports.TextArea = TextArea;

var InputLabel = function InputLabel(props) {
  var label = props.label,
      helper = props.helper,
      className = props.className;
  var classes = ['ant-custom-block-label'];

  if (className) {
    classes.push(className);
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, label && _react["default"].createElement("div", {
    className: "ant-custom-input-label"
  }, label), props.children, helper && _react["default"].createElement("div", {
    className: "ant-custom-input-helper"
  }, helper));
};

exports.InputLabel = InputLabel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._FlexEqual = exports._FlexFixed = exports._FlexAutoGrow = exports._FlexContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _FlexContainer = function _FlexContainer(props) {
  var classes = ['ant-custom-flex-box'];

  if (props.justify) {
    classes.push("ant-custom-flex-box-justify-".concat(props.justify));
  }

  if (props.align) {
    classes.push("ant-custom-flex-box-align-".concat(props.align));
  }

  if (props.full) {
    classes.push("ant-custom-flex-box-full");
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, props.children);
};

exports._FlexContainer = _FlexContainer;

var _FlexAutoGrow = function _FlexAutoGrow(props) {
  var classes = ['ant-custom-flex-box-auto-grow'];

  if (props.justify) {
    classes.push("ant-custom-flex-box-justify-".concat(props.justify));
  }

  if (props.align) {
    classes.push("ant-custom-flex-box-align-".concat(props.align));
  }

  if (props.size) {
    classes.push("ant-custom-flex-box-size-".concat(props.size));
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, props.children);
};

exports._FlexAutoGrow = _FlexAutoGrow;

var _FlexFixed = function _FlexFixed(props) {
  var classes = ['ant-custom-flex-box-fixed-size'];

  if (props.justify) {
    classes.push("ant-custom-flex-box-justify-".concat(props.justify));
  }

  if (props.align) {
    classes.push("ant-custom-flex-box-align-".concat(props.align));
  }

  if (props.size) {
    classes.push("ant-custom-flex-box-size-".concat(props.size));
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, props.children);
};

exports._FlexFixed = _FlexFixed;

var _FlexEqual = function _FlexEqual(props) {
  var classes = ['ant-custom-flex-box-equal-size'];

  if (props.justify) {
    classes.push("ant-custom-flex-box-justify-".concat(props.justify));
  }

  if (props.align) {
    classes.push("ant-custom-flex-box-align-".concat(props.align));
  }

  if (props.size) {
    classes.push("ant-custom-flex-box-size-".concat(props.size));
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, props.children);
};

exports._FlexEqual = _FlexEqual;
"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preview = require("./preview");

Object.keys(_preview).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _preview[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkPreview = void 0;

var _react = _interopRequireDefault(require("react"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LinkPreview = function LinkPreview(_ref) {
  var img = _ref.img,
      title = _ref.title,
      description = _ref.description,
      site = _ref.site;
  return _react["default"].createElement("div", {
    className: "link-preview"
  }, _react["default"].createElement("div", {
    className: "link-preview-image"
  }, _react["default"].createElement("img", {
    src: img
  })), _react["default"].createElement("div", {
    className: "link-preview-info"
  }, site && _react["default"].createElement("div", {
    className: "link-preview-site-info"
  }, site.ico && _react["default"].createElement("div", {
    className: "link-preview-site-ico"
  }, _react["default"].createElement("img", {
    src: site.ico
  })), site.name && _react["default"].createElement("div", {
    className: "link-preview-site-name"
  }, site.name)), _react["default"].createElement("div", {
    className: "link-preview-title"
  }, title), _react["default"].createElement("div", {
    className: "link-preview-description"
  }, description)));
};

exports.LinkPreview = LinkPreview;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._ListItem = void 0;

var _antd = require("antd");

require("antd/es/list/style/css");

var _ListItem = _antd.List.Item;
exports._ListItem = _ListItem;
var _default = _antd.List;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./styles/logo.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Logo = function Logo(props) {
  return _react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "logo text-center"
  }, props.fullScreen ? _react["default"].createElement("span", {
    className: "logo-lg"
  }, _react["default"].createElement("img", {
    src: props.fullScreen,
    alt: "",
    height: "40"
  })) : '', props.smallScreen ? _react["default"].createElement("span", {
    className: "logo-sm"
  }, _react["default"].createElement("img", {
    src: props.smallScreen,
    alt: "",
    height: "40"
  })) : '');
};

var _default = Logo;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._MenuItem = void 0;

var _antd = require("antd");

require("antd/es/menu/style/css");

var _MenuItem = _antd.Menu.Item;
exports._MenuItem = _MenuItem;
var _default = _antd.Menu;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _antd.Modal;
  }
});

require("antd/es/modal/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "notification", {
  enumerable: true,
  get: function get() {
    return _antd.notification;
  }
});

require("antd/es/notification/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "PageHeader", {
  enumerable: true,
  get: function get() {
    return _antd.PageHeader;
  }
});

require("antd/es/page-header/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/icon/style/css");

require("antd/es/tooltip/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Action = function Action(_ref) {
  var key = _ref.key,
      icon = _ref.icon,
      theme = _ref.theme,
      onClick = _ref.onClick,
      label = _ref.label,
      style = _ref.style,
      disabled = _ref.disabled;
  return _react["default"].createElement("span", {
    key: key
  }, _react["default"].createElement(_antd.Tooltip, {
    title: label
  }, _react["default"].createElement(_antd.Icon, {
    type: icon,
    theme: theme,
    onClick: onClick,
    disabled: disabled
  })), _react["default"].createElement("span", {
    style: style
  }, label));
};

var _default = Action;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/comment/style/css");

require("antd/es/avatar/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PostComment = function PostComment(_ref) {
  var author = _ref.author,
      authorImage = _ref.authorImage,
      authorAbout = _ref.authorAbout,
      content = _ref.content,
      actions = _ref.actions,
      datetime = _ref.datetime;
  var authorBlock = author ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "ant-post-comment-content-author"
  }, _react["default"].createElement("span", {
    className: "ant-post-comment-content-author-name"
  }, author), _react["default"].createElement("span", {
    className: "ant-comment-content-author-time"
  }, datetime)), _react["default"].createElement("span", {
    className: "ant-post-comment-content-author-about"
  }, authorAbout)) : null;
  return _react["default"].createElement(_antd.Comment, {
    actions: actions,
    author: authorBlock,
    avatar: _react["default"].createElement(_antd.Avatar, {
      src: authorImage,
      alt: author
    }),
    content: content
  });
};

var _default = PostComment;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/es/form/style/css");

require("antd/es/button/style/css");

require("antd/es/input/style/css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextArea = _antd.Input.TextArea;

var CommentEditor = function CommentEditor(_ref) {
  var onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      submitting = _ref.submitting,
      value = _ref.value,
      hidden = _ref.hidden;
  return _react["default"].createElement("div", {
    className: "ant-comment-editor"
  }, _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(TextArea, {
    rows: 2,
    onChange: onChange,
    value: value
  })), hidden ? _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(_antd.Button, {
    htmlType: "submit",
    loading: submitting,
    onClick: onSubmit,
    type: "primary"
  }, "Add Comment")) : null);
};

var _default = CommentEditor;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._CommentEditor = exports._Action = exports._Comment = void 0;

var _react = _interopRequireDefault(require("react"));

var _comment = _interopRequireDefault(require("./comment"));

var _action = _interopRequireDefault(require("./action"));

var _editor = _interopRequireDefault(require("./editor"));

var _link = require("../link");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Post = function Post(props) {
  var title = props.title,
      link = props.link,
      author = props.author,
      authorImage = props.authorImage,
      authorAbout = props.authorAbout,
      content = props.content,
      actions = props.actions,
      datetime = props.datetime,
      linkPreview = props.linkPreview;
  return _react["default"].createElement("div", {
    className: "ant-post"
  }, _react["default"].createElement(_comment["default"], {
    author: author,
    authorImage: authorImage,
    authorAbout: authorAbout,
    content: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
      to: link
    }, _react["default"].createElement("div", {
      className: "ant-post-title"
    }, title)), content, linkPreview && _react["default"].createElement(_link.LinkPreview, linkPreview)),
    actions: actions,
    datetime: datetime
  }));
};

var _Comment = _comment["default"];
exports._Comment = _Comment;
var _Action = _action["default"];
exports._Action = _Action;
var _CommentEditor = _editor["default"];
exports._CommentEditor = _CommentEditor;
var _default = Post;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Rate", {
  enumerable: true,
  get: function get() {
    return _antd.Rate;
  }
});

require("antd/es/rate/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _antd.Select;
  }
});
exports.OptGroup = exports.Option = void 0;

var _antd = require("antd");

require("antd/es/select/style/css");

var Option = _antd.Select.Option,
    OptGroup = _antd.Select.OptGroup;
exports.OptGroup = OptGroup;
exports.Option = Option;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Spin", {
  enumerable: true,
  get: function get() {
    return _antd.Spin;
  }
});

require("antd/es/spin/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabPane = void 0;

var _antd = require("antd");

require("antd/es/tabs/style/css");

var TabPane = _antd.Tabs.TabPane;
exports.TabPane = TabPane;
var Tabs = _antd.Tabs;
exports.Tabs = Tabs;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Tag", {
  enumerable: true,
  get: function get() {
    return _antd.Tag;
  }
});

require("antd/es/tag/style/css");

var _antd = require("antd");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Typography = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("antd/es/typography/style/css");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export const { Text } = _Typography;
var Typography = _antd.Typography;
exports.Typography = Typography;

var Text = function Text(props) {
  var classes = ['ant-custom-typography'];

  if (props.size) {
    classes.push("ant-custom-typography-size-".concat(props.size));
  }

  if (props.strong) {
    classes.push("ant-custom-typography-weight-strong");
  }

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])(classes)
  }, props.children);
};

exports.Text = Text;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Header: true,
  Body: true,
  Footer: true,
  Post: true,
  Comment: true,
  Action: true,
  CommentEditor: true,
  FlexContainer: true,
  FlexAutoGrow: true,
  FlexFixed: true,
  FlexEqual: true,
  Menu: true,
  MenuItem: true,
  List: true,
  ListItem: true,
  applyStyle_Gutter: true
};
Object.defineProperty(exports, "applyStyle_Gutter", {
  enumerable: true,
  get: function get() {
    return _styles.applyStyle_Gutter;
  }
});
exports.ListItem = exports.List = exports.MenuItem = exports.Menu = exports.FlexEqual = exports.FlexFixed = exports.FlexAutoGrow = exports.FlexContainer = exports.CommentEditor = exports.Action = exports.Comment = exports.Post = exports.Footer = exports.Body = exports.Header = void 0;

var _header = _interopRequireDefault(require("./components/header"));

var _body = _interopRequireDefault(require("./components/body"));

var _footer = _interopRequireDefault(require("./components/footer"));

var _post = _interopRequireWildcard(require("./components/post"));

var _flex = require("./components/layout/flex");

var _menu = _interopRequireWildcard(require("./components/menu"));

var _list = _interopRequireWildcard(require("./components/list"));

var _autocomplete = require("./components/autocomplete");

Object.keys(_autocomplete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _autocomplete[key];
    }
  });
});

var _typography = require("./components/typography");

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});

var _breadbrumb = require("./components/breadbrumb");

Object.keys(_breadbrumb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breadbrumb[key];
    }
  });
});

var _card = require("./components/card");

Object.keys(_card).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _card[key];
    }
  });
});

var _dropdown = require("./components/dropdown");

Object.keys(_dropdown).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dropdown[key];
    }
  });
});

var _icon = require("./components/icon");

Object.keys(_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon[key];
    }
  });
});

var _grid = require("./components/grid");

Object.keys(_grid).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _grid[key];
    }
  });
});

var _button = require("./components/button");

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _button[key];
    }
  });
});

var _pageheader = require("./components/pageheader");

Object.keys(_pageheader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageheader[key];
    }
  });
});

var _tabs = require("./components/tabs");

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});

var _rate = require("./components/rate");

Object.keys(_rate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rate[key];
    }
  });
});

var _modal = require("./components/modal");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    }
  });
});

var _input = require("./components/input");

Object.keys(_input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _input[key];
    }
  });
});

var _link = require("./components/link");

Object.keys(_link).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _link[key];
    }
  });
});

var _form = require("./components/form");

Object.keys(_form).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _form[key];
    }
  });
});

var _select = require("./components/select");

Object.keys(_select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _select[key];
    }
  });
});

var _notification = require("./components/notification");

Object.keys(_notification).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notification[key];
    }
  });
});

var _spin = require("./components/spin");

Object.keys(_spin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _spin[key];
    }
  });
});

var _avatar = require("./components/avatar");

Object.keys(_avatar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _avatar[key];
    }
  });
});

var _tag = require("./components/tag");

Object.keys(_tag).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tag[key];
    }
  });
});

var _badge = require("./components/badge");

Object.keys(_badge).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _badge[key];
    }
  });
});

var _drawer = require("./components/drawer");

Object.keys(_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _drawer[key];
    }
  });
});

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import 'antd/dist/antd.css';
// export * from './components/genericpanel';
var Header = _header["default"];
exports.Header = Header;
var Body = _body["default"];
exports.Body = Body;
var Footer = _footer["default"];
exports.Footer = Footer;
var Post = _post["default"];
exports.Post = Post;
var Comment = _post._Comment;
exports.Comment = Comment;
var Action = _post._Action;
exports.Action = Action;
var CommentEditor = _post._CommentEditor;
exports.CommentEditor = CommentEditor;
var FlexContainer = _flex._FlexContainer;
exports.FlexContainer = FlexContainer;
var FlexAutoGrow = _flex._FlexAutoGrow;
exports.FlexAutoGrow = FlexAutoGrow;
var FlexFixed = _flex._FlexFixed;
exports.FlexFixed = FlexFixed;
var FlexEqual = _flex._FlexEqual;
exports.FlexEqual = FlexEqual;
var Menu = _menu["default"];
exports.Menu = Menu;
var MenuItem = _menu._MenuItem;
exports.MenuItem = MenuItem;
var List = _list["default"];
exports.List = List;
var ListItem = _list._ListItem;
exports.ListItem = ListItem;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyStyle_Gutter = void 0;

var applyStyle_Gutter = function applyStyle_Gutter(gutter) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (gutter) {
    case 'bottom':
      styles['marginBottom'] = "12px";
      break;

    case 'left':
      styles['marginLeft'] = '12px';
      break;

    case 'right':
      styles['marginRight'] = '12px';
      break;

    case 'top':
      styles['marginTop'] = '12px';
      break;

    case 'top-bottom':
      styles['margin'] = '12px 0px';
      break;

    case 'left-right':
      styles['margin'] = '0px 12px';
      break;

    default:
      styles['margin'] = '0px';
  }

  return styles;
};

exports.applyStyle_Gutter = applyStyle_Gutter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyle_Gutter", {
  enumerable: true,
  get: function get() {
    return _gutter.applyStyle_Gutter;
  }
});

var _gutter = require("./gutter");
