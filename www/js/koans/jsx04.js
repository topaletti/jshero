(function(testutil){jshero.koans.add({id:"jsx04",title:"Was ist x?",lesson:"Das eben Gelernte wollen wir nochmal \xFCben.",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>var hello = function() {\n  return 'Hi!';\n};\n\nvar x = hello();</code></pre>",solution:"<pre><code>'Hi!'</code></pre>",tests:[function(){return testutil.assert_isString("Hi!")}]})})(jshero.testutil);