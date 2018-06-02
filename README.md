# Node Form Generator
Dynamically create forms for node projects.

## Usage
* ```Clone https://github.com/Codemax999/node_form_generator.git```
* ```npm install```
* ```const generateForm = require('./form-generator');```
* ```generateForm(formElements).then(form).catch(error);```

## Testing
From project root, run: ```./node_modules/.bin/eslint ./src/form-generator.js```

## Description
Pass an array of Form Item Objects to the ```generateForm()``` method. The ```generateForm()``` method returns a promise with the success form string passed to ```.then()``` and errors sent to ```.catch()```. 

## Form Item Object
### Shared Properties
Property | Value
---------|-------
type:    | label, select, text, submit
id: | element ID
display: | visible element text

### Additional Properties: Label
Property | Value
---------|------
target: | target ID of input element

### Additional Properties: Select
Property | Value
---------|------
options: | array of select box options
options[0].value | value of select element
options[0].display | visible element text

## Example
```
// require form-generator
const generateForm = require('./form-generator');

// list of Form Item Objects
const formItems = [
  {
    type: 'label',
    id: 'label-select-type',
    display: 'Account Type',
    target: 'select-type',
  }, {
    type: 'select',
    id: 'select-type',
    options: [
      {
        value: 'person',
        display: 'Person',
      }, {
        value: 'company',
        display: 'Company',
      },
    ],
  }, {
    type: 'label',
    id: 'label-input-username',
    display: 'Username',
    target: 'input-username',
  }, {
    type: 'text',
    id: 'input-username',
    display: 'Enter a username',
  }, {
    type: 'submit',
    id: 'input-submit',
    display: 'Submit Form',
  },
];

// call form generator and log responses
generateForm(formItems)
  .then(console.log)
  .catch(console.error);
```