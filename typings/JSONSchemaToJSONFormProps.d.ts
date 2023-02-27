/**
 * This file was generated from JSONSchemaToJSONForm.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export interface JSONSchemaToJSONFormContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    mxJsonSchema: EditableValue<string>;
    mxUiSchema: EditableValue<string>;
    mxPlaceholderData: EditableValue<string>;
    mxJsonFormResponse: EditableValue<string>;
}

export interface JSONSchemaToJSONFormPreviewProps {
    readOnly: boolean;
    mxJsonSchema: string;
    mxUiSchema: string;
    mxPlaceholderData: string;
    mxJsonFormResponse: string;
    onStatusChange: {} | null;
}
