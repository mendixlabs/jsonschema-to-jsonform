import validator from "@rjsf/validator-ajv8";
import CoreForm from "@rjsf/core";
import _MUI4Form from "@rjsf/material-ui";

import { Component, createElement, ReactNode } from "react";
import { JSONSchemaToJSONFormContainerProps } from "../typings/JSONSchemaToJSONFormProps";

import "./ui/JSONSchemaToJSONForm.css";
import { JSONObjectViewer } from "./components/JSONObjectViewer";

interface AppState {
    schema: string;
    uischema: string;
    placeholderdata: string;
    jsonOutput: string;
    showwarning: boolean;
}

const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (_key: any, value: object | null) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};
export class JSONSchemaToJSONForm extends Component<JSONSchemaToJSONFormContainerProps, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            schema: "{}",
            uischema: "{}",
            placeholderdata: "{}",
            jsonOutput: "Waiting for the form submition",
            showwarning: false
        };
    }
    render(): ReactNode {
        return (
            <div className="jsonschema-to-jsonform-root">
                <CoreForm
                    className="my-form"
                    schema={JSON.parse(this.state.schema)}
                    uiSchema={JSON.parse(this.state.uischema)}
                    formData={JSON.parse(this.state.placeholderdata)}
                    validator={validator}
                    onSubmit={data => {
                        const onSubmitJson = JSON.stringify(data, getCircularReplacer());
                        const jsonString: string = JSON.stringify(JSON.parse(onSubmitJson).formData);
                        if (this.props.mxJsonFormResponse.value == jsonString) {
                            this.setState({ showwarning: true });
                            this.setState({ jsonOutput: "Form values entered match those in the database." });
                        }
                        this.props.mxJsonFormResponse.setValue(jsonString);
                        // toast.success(jsonString);
                    }}
                    onError={() => {
                        console.error("Using the specified JSON schema, a JSON form error occurred.");
                    }}
                />
                {/* <ToastContainer/> */}
                <JSONObjectViewer jsonobject={this.state.jsonOutput} showwarning={this.state.showwarning} />
            </div>
        );
    }
    componentDidMount(): void {
        const { mxJsonSchema, mxUiSchema, mxPlaceholderData } = this.props;

        let inputJsonSchema = mxJsonSchema.value
            ? mxJsonSchema.value.toString()
            : '{"description": "JSON schema received was empty!","type": "object"}';
        if (!isValidJSON(inputJsonSchema)) {
            console.debug("JSONSchemaToJSONForm:CDM: Invalid JSON Schema");
            inputJsonSchema = '{"description": "JSON schema received was invalid!","type": "object"}';
        }

        let inputUISchema = mxUiSchema.value ? mxUiSchema.value.toString() : "{}";
        if (!isValidJSON(inputUISchema)) {
            console.debug(
                "JSONSchemaToJSONForm:CDM: The given UI Schema JSON is incorrect. Empty object is passed to prevent failures."
            );
            inputUISchema = "{}";
        }

        let inputPlaceholderData = mxPlaceholderData.value ? mxPlaceholderData.value.toString() : "{}";
        if (!isValidJSON(inputPlaceholderData)) {
            console.debug(
                "JSONSchemaToJSONForm:CDM: The given placeholder data JSON is incorrect. Empty object is passed to prevent failures."
            );
            inputPlaceholderData = "{}";
        }
        this.setState({
            schema: inputJsonSchema,
            uischema: inputUISchema,
            placeholderdata: inputPlaceholderData,
            showwarning: false
        });
    }

    componentDidUpdate(prevProps: Readonly<JSONSchemaToJSONFormContainerProps>): void {
        const { mxJsonSchema, mxUiSchema, mxPlaceholderData } = this.props;
        if (
            mxJsonSchema.value !== prevProps.mxJsonSchema.value ||
            mxUiSchema.value !== prevProps.mxUiSchema.value ||
            mxPlaceholderData.value !== prevProps.mxPlaceholderData.value
        ) {
            let inputJsonSchema =
                mxJsonSchema.value?.toString() || '{"description": "JSON schema received was empty!","type": "object"}';
            let inputUISchema = mxUiSchema!.value?.toString() || "{}";
            let inputPlaceholderData = mxPlaceholderData!.value?.toString() || "{}";

            if (!isValidJSON(inputJsonSchema)) {
                console.debug("JSONSchemaToJSONForm:CDU: Invalid JSON Schema");
                inputJsonSchema = '{"description": "JSON schema received was invalid!","type": "object"}';
            }
            // --------------------------------------------------------------------
            if (!isValidJSON(inputUISchema)) {
                console.debug(
                    "JSONSchemaToJSONForm:CDU: The given UI Schema JSON is incorrect. Empty object is passed to prevent failures."
                );
                inputUISchema = "{}";
            }
            // --------------------------------------------------------------------
            if (!isValidJSON(inputPlaceholderData)) {
                console.debug(
                    "JSONSchemaToJSONForm:CDU: The given placeholder data JSON is incorrect. Empty object is passed to prevent failures."
                );
                inputPlaceholderData = "{}";
            }
            this.setState({
                schema: inputJsonSchema,
                uischema: inputUISchema,
                placeholderdata: inputPlaceholderData,
                showwarning: false
            });
        }
    }
}

function isValidJSON(jsonString: string): boolean {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}
