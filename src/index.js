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
