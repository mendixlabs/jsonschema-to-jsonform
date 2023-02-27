import { Component, createElement, CSSProperties, ReactNode } from "react";
export interface JSONSchemaToJSONFormProps {
    jsonobject: string;
    showwarning: boolean;
    style?: CSSProperties;
}

export class JSONObjectViewer extends Component<JSONSchemaToJSONFormProps> {
    render(): ReactNode {
        return (
            <div className="JSONViewer" style={this.props.style}>
                {this.props.showwarning && (
                    <div className="alert alert-warning">
                        <strong>Warning!</strong> {this.props.jsonobject}
                    </div>
                )}
            </div>
        );
    }
}
