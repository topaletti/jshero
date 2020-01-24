(function(testutil){jshero.koans.add({id:"jsx06b",title:"Was ist x?",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>var hi = function(name) {\n  return 'Hi ' + name + '!';\n};\n\nvar h1 = hi('Selva');\nvar h2 = hi('Pola');\nvar x = h1 + ' ' + h2;</code></pre>",solution:"<pre><code>'Hi Selva! Hi Pola!'</code></pre>",tests:[function(){return testutil.assert_isString("Hi Selva! Hi Pola!")}]})})(jshero.testutil);