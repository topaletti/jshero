(function(testutil){jshero.koans.add({id:"undefined",title:"undefined",lesson:"Bisher hatten wir Variablen bei der Deklaration immer auch initialisiert.\n\n<pre><code>// Deklaration und Initialisierung\nvar x = 1;</code></pre>\n\nMan kann eine Variable aber auch deklarieren und ihr sp\xE4ter einen Wert zuweisen.\n\n<pre><code>var x; // Deklaration\nx = 1; // Initialisierung</code></pre>\n\nVariablen, die nicht initialisiert wurden, haben den Wert <code>undefined</code> (engl.: nicht definiert).<br><br>\nNicht initialisierte Variablen k\xF6nnen auch bei Funktionsaufrufen vorkommen. Ruft man eine Funktion, die einen Parameter\nerwartet, ohne Argument auf, dann erh\xE4lt der Funktionsparameter den Wert <code>undefined</code>.\n\n<pre><code>var echo = function(x) {\n  return x;\n};\n\n// Aufruf ohne Argument\nvar y = echo();</code></pre>\n\n<code>echo</code> wird ohne Argument aufgerufen. Dem Parameter <code>x</code> wird so kein Wert zugewiesen,\ner erh\xE4lt den Wert <code>undefined</code>.\nDa <code>echo</code> den Parameter <code>x</code> einfach zur\xFCckgibt,\nerh\xE4lt auch <code>y</code> den Wert <code>undefined</code>.<br><br>\nEine Funktion, die einen Parameter erwartet, kann immer auch ohne Argument aufgerufen werden.\nMan sollte sich beim Schreiben von Funktionen immer \xFCberlegen, was in diesem Fall passieren soll.\nGute Praxis ist es, in einem solchen Fall dem Parameter einen Default-Wert (engl.: Vorgabe) zuzuweisen.\nDas hatten wir schon bei der String-Methode <code><a href=\"stringcharat.html\">charAt(index)</a></code> kennen gelernt.\nNormalerweise gibt diese Methode das Zeichen an der Stelle <code>index</code>\nzur\xFCck. Rufen wir <code>charAt</code> ohne Argument auf, erh\xE4lt <code>index</code> den Default <code>0</code>.\nEs wird das Zeichen an der Stelle <code>0</code> zur\xFCckgegeben.<br><br>\nUm eine deklarierte Varaible auf <code>undefined</code> zu \xFCberpr\xFCfen, verwendet man wie \xFCblich die\n<a href='equals.html'>strikte&nbsp;Gleichkeit</a>.\nDie Methode <code>charAt</code> k\xF6nnte also folgenden Code-Ausschnitt enthalten:\n\n<pre><code>if (index === undefined) {\n  index = 0;\n}</code></pre>",task:"Schreibe eine Funktion <code>hallo</code>, die einen String als Parameter entgegennimmt und <code>'Hallo &lt;Parameter&gt;!'</code> zur\xFCckgibt.\n<code>hallo('Akg\xFCn')</code> sollte <code>'Hallo Akg\xFCn!'</code> zur\xFCckgeben.\nWird <code>hallo</code> ohne Argument aufgerufen, so soll <code>'Hallo Welt!'</code> zur\xFCckgegeben werden.",tests:[function(){return testutil.assert_isFunction("hallo")},function(){return testutil.assert_functionHasNumOfParameter("hallo",1)},function(){return testutil.assert_functionReturns("hallo('Melek')","Hallo Melek!")},function(){return testutil.assert_functionReturns("hallo('Badu')","Hallo Badu!")},function(){return testutil.assert_functionReturns("hallo()","Hallo Welt!")}]})})(jshero.testutil);