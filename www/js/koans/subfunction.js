(function(testutil,evaluator){jshero.koans.add({id:"subfunction",title:"Funktionen rufen Funktionen auf",lesson:"Funktionen k\xF6nnen weitere Funktionen aufrufen:\n<pre><code>var brutto = function(netto) {\n  var steuersatz = 19;\n  var steuer = netto * steuersatz / 100;\n  return netto + steuer;\n};\n\nvar addiereMitMehrwertsteuer = function(nettoX, nettoY) {\n  var bruttoX = brutto(nettoX);\n  var bruttoY = brutto(nettoY);\n  return bruttoX + bruttoY;\n};</code></pre>\n\n<code>addiereMitMehrwertsteuer</code> nimmt 2 Nettobetr\xE4ge entgegen und gibt die Summe der Bruttobetr\xE4ge zur\xFCck.\n<code>brutto</code> berechnet aus einem Nettobetrag den Bruttobetrag. Dabei wird eine Mehrwertsteuer von 19% zugrunde\ngelegt. Anstatt den Bruttobetrag selbst zu berechnen, ruft <code>addiereMitMehrwertsteuer</code> die Funktion\n<code>brutto</code> auf. Das hat zwei Vorteile: Der Code ist besser lesbar und die Bruttoberechnung wird zentral\nan einer Stelle durchgef\xFChrt.",task:"Schreibe eine Funktion <code>sum</code>, die ein Array gef\xFCllt mit Zahlen entgegennimmt und die Summe dieser\nZahlen zur\xFCckgibt. Schreibe eine Funktion <code>mean</code>, die ein Array gef\xFCllt mit Zahlen entgegennimmt und den\nDurchschnitt dieser Zahlen zur\xFCckgibt. Die Funktion <code>mean</code> sollte die Funktion <code>sum</code> benutzen.",tests:[function(){return testutil.assert_isFunction("sum")},function(){return testutil.assert_functionHasNumOfParameter("sum",1)},function(){return testutil.assert_functionReturns("sum([0])",0)},function(){return testutil.assert_functionReturns("sum([1, 2])",3)},function(){return testutil.assert_functionReturns("sum([1, 4, 10, 85])",100)},function(){return testutil.assert_functionReturns("sum([-2, -4, 17, 34])",45)},function(){return testutil.assert_isFunction("mean")},function(){return testutil.assert_functionHasNumOfParameter("mean",1)},function(){return testutil.assert_functionReturns("mean([0])",0)},function(){return testutil.assert_functionReturns("mean([1, 2])",1.5)},function(){return testutil.assert_functionReturns("mean([1, 4, 10, 85])",25)},function(){return testutil.assert_functionReturns("mean([-2, -4, 17, 34])",11.25)}]})})(jshero.testutil,jshero.evaluator);