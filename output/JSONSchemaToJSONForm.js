'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Form = require('@rjsf/core');
var validator = require('@rjsf/validator-ajv8');
var react = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Form__default = /*#__PURE__*/_interopDefaultLegacy(Form);
var validator__default = /*#__PURE__*/_interopDefaultLegacy(validator);

// import { RJSFSchema } from "@rjsf/utils";
class JSONSchemaToJSONForm extends react.Component {
    render() {
        var _a;
        if (((_a = this.props.JSONSchemaText.value) === null || _a === void 0 ? void 0 : _a.trim.length) === 0) {
            console.error("test");
        }
        // return <JSONSchemaForm value="HELLO" />;
        const schema = {
            title: "Todo",
            type: "object",
            required: ["title"],
            properties: {
                title: { type: "string", title: "Title", default: "A new task" },
                done: { type: "boolean", title: "Done?", default: false }
            }
        };
        const log = (type) => console.log.bind(console, type);
        return react.createElement(Form__default["default"], { schema: schema, validator: validator__default["default"], onChange: log("changed"), onSubmit: log("submitted"), onError: log("errors") });
        // return "";
    }
}

exports.JSONSchemaToJSONForm = JSONSchemaToJSONForm;
