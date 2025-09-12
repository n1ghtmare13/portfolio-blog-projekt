// File: .stylelintrc.cjs
module.exports = {
  extends: 'stylelint-config-standard-scss',

  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};
