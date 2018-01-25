export default {
  "schema": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string",
        "required": false
      },
      "password": {
        "type": "string",
        "required": false,
        "pattern": {}
      },
      "file": {
        "type": "string",
        "required": false
      },
      "check": {
        "type": "boolean",
        "required": false,
        "default": true
      }
    },
    "required": false
  },
  "options": {
    "fields": {
      "email": {
        "type": "text",
        "label": "Email Address",
        "helpers": [],
        "validate": true,
        "disabled": false,
        "showMessages": true,
        "renderButtons": true,
        "data": {},
        "attributes": {},
        "allowOptionalEmpty": true,
        "autocomplete": false,
        "disallowEmptySpaces": false,
        "disallowOnlyEmptySpaces": false
      },
      "password": {
        "type": "password",
        "label": "Password",
        "helpers": [],
        "validate": true,
        "disabled": false,
        "showMessages": true,
        "renderButtons": true,
        "data": {},
        "attributes": {},
        "allowOptionalEmpty": true,
        "autocomplete": false,
        "disallowEmptySpaces": false,
        "disallowOnlyEmptySpaces": false
      },
      "file": {
        "type": "file",
        "label": "File Upload",
        "helpers": [],
        "validate": true,
        "disabled": false,
        "showMessages": true,
        "renderButtons": true,
        "data": {},
        "attributes": {},
        "allowOptionalEmpty": true,
        "autocomplete": false,
        "disallowEmptySpaces": false,
        "disallowOnlyEmptySpaces": false
      },
      "check": {
        "type": "checkbox",
        "rightLabel": "Sign me up for the News Letter!",
        "label": "Newsletter",
        "helpers": [],
        "validate": true,
        "disabled": false,
        "showMessages": true,
        "renderButtons": true
      }
    },
    "focus": false,
    "type": "object",
    "helpers": [],
    "validate": true,
    "disabled": false,
    "showMessages": true,
    "collapsible": false,
    "legendStyle": "button"
  },
  "data": {
    "email": "Joe Smith",
    "password": "MyPassword"
  },
  "view": "web-edit"
};
