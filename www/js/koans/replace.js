jshero.koans.add({id:"replace",title:"String: replace()",lesson:"Die Methode <code>replace</code> ersetzt einen Teilstring durch einen anderen:\n\n<pre><code>var str = 'Hallo Marcel!';\nvar newstr = str.replace('Marcel', 'Robert');</code></pre>\n\n'Marcel' wird durch 'Robert' ersetzt. <code>newstr</code> hat also den Wert <code>'Hallo Robert!'</code>.\nDer urspr\xFCngliche String bleibt unver\xE4ndert. Nur das erste Vorkommen wird ersetzt:\n\n<pre><code>var newname = 'Peter'.replace('e', 'a');</code></pre>\n\n<code>newname</code> enth\xE4lt den Wert <code>'Pater'</code> und nicht <code>'Patar'</code>.\nEin Spezialfall ergibt sich, wenn der ersetzende String der Leerstring ist:\n\n<pre><code>var nurso = 'sowie so'.replace('wie', '');</code></pre>\n\nDer zu ersetzende String wird entfernt. <code>nurso</code> enth\xE4lt den Wert <code>'so so'</code>.\nKommt der zu ersetzende String nicht vor, so wird der urspr\xFCngliche String zur\xFCckgegeben.",task:"Schreibe eine Funktion <code>convert</code>, die einen Datumsstring in englischer Schreibweise (20-05-2017 oder 20/05/2017) in\ndeutsche Schreibweise (20.05.2017) umwandet. Sowohl <code>convert('20-05-2017')</code> als auch <code>convert('20/05/2017')</code>\nsollten <code>'20.05.2017'</code> ergeben.",hint:"<pre><code>var convert = function(s1, s2) {\n// Verwende replace viermal.\n};</code></pre>",solution:"<pre><code>var convert = function(dateEn) {\n  var dateDe = dateEn.replace('-', '.');\n  dateDe = dateDe.replace('-', '.');\n  dateDe = dateDe.replace('/', '.');\n  dateDe = dateDe.replace('/', '.');\n  return dateDe;\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("convert")},function(){return jshero.testutil.assert_functionHasNumOfParameter("convert",1)},function(){return jshero.testutil.assert_functionReturns("convert('10-07-1871')","10.07.1871")},function(){return jshero.testutil.assert_functionReturns("convert('8/11/1922')","8.11.1922")}]});