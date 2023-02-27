import { Component, ReactNode } from "react";
import { JSONSchemaToJSONFormPreviewProps } from "../typings/JSONSchemaToJSONFormProps";

export class preview extends Component<JSONSchemaToJSONFormPreviewProps> {
    render(): ReactNode {
        return "";
    }
}

export function getPreviewCss(): string {
    return require("./ui/JSONSchemaToJSONForm.css");
}
