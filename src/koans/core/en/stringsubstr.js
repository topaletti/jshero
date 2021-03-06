jshero.koans.add({

  id: 'stringsubstr',

  title: 'String: substr()',

  lesson: `The <code>substr</code> method extracts a substring from a string:

<pre><code>var see = 'see and stop'.substr(0, 3);
var and = 'see and stop'.substr(4, 3);
var stop = 'see and stop'.substr(8);</code></pre>

The first parameter specifies the position at which to start extracting.
The second parameter specifies the number of characters to extract.
If the second parameter is not set, all the characters from start position to the end of the string are extracted.`,

  task: `Write a function <code>firstWord</code>, taking a string and returning the first word in that string.
The first word are all characters up to the first space.
<code>firstWord('see and stop')</code> should return <code>'see'</code>.`,

  hint: `<pre><code>var firstWord = function(s) {
// Determine with indexOf
// the position of the
// first space. Then use
// the substr method.
};</code></pre>`,

  solution: `<pre><code>var firstWord = function(s) {
  var firstBlank = s.indexOf(' ');
  return s.substr(0, firstBlank);
};</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('firstWord');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('firstWord', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstWord('see and stop')", 'see');
    },

    function() {
      return jshero.testutil.assert_functionReturns("firstWord('speak again')", 'speak');
    }
  ]

});
