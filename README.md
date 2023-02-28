## JSON Schema To JSON Form

The goal of JSONSchemaToJSONForm is to automatically create a HTML form using a JSON Schema. Simply create a JSON schema
using the guidelines provided at https://json-schema.org/ and send it as the JSON schema to this widget if you want to
create a form for any type of data. In brief, you can use the JSON structure to construct the forms dynamically.

Moreover, JSONSchemaToJSONForm includes UI Schema and Placeholder data for the form, enabling more personalised forms.

## Features

-   Generate JSON forms using the provided JSON schema, users can fill in the form data and submit the form and the output will be stored in configured attribute in JSON string format.
-   Supports UI schema to generate more personalized forms
-   Supports Placeholder data that can be used to pre-fill the generated form.

## Usage

1. Create an entity which will hold below information in JSON string format
    - JSON Schema as a string
    - UI Schema as a string (If you dont want to provide any value for this just pass `{}` as input)
    - Placeholder data as a string (If you dont want to provide any value for this just pass `{}` as input)
    - Form output data as a string 
2. On a page, Add a dataview and above entity object as data source
3. Drag and drop / Add this widget into the data view
4. Map the entity attributes accordingly
5. Make sure to provide `Action` information to handle the form output accordingly (Suggest to use Microflow to save or
   process the form output accordingly, note that it will be triggered on change of the existing value in this attribute)
6. Set the page created above in the app navigation
7. Launch the app and fill and submit the form
8. Enjoy!

## Demo project

[link to sandbox]

## Issues, suggestions and feature requests

Please file an issue <a href="https://github.com/mendixlabs/jsonschema-to-jsonform/issues">here</a> on Github

## Development and contribution

This widget is based upon the <a href="https://github.com/rjsf-team">react-jsonschema-form</a> by rjsf-team

## License

Apache v2
