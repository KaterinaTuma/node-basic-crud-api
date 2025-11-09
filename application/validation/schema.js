/**********************************************
  Patterns
**********************************************/

const FILLED_TEXT_PATTERN = /^\S+/;

/**********************************************
  User
**********************************************/

export const userSchema = {
  type: 'object',
  propCount: 3,
  requiredProps: [
    'username',
    'age',
    'hobbies',
  ],
  props: {
    'username': {
      type: 'string',
      pattern: FILLED_TEXT_PATTERN,
    },
    'age': {
      type: 'number',
    },
    'hobbies': {
      type: 'array',
    },
  },
};

/**********************************************
  Schema
**********************************************/

export const schema = {
  user: userSchema,
};

/*********************************************/
