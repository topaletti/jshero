jshero.koans.add({id:"string",title:"Strings",lesson:"Wir haben gesehen, dass eine Variable ein Beh\xE4lter f\xFCr einen Wert ist. Werte besitzen dabei einen Typ.\nSo kann ein Wert eine Zahl wie <code>7.12</code> sein. Der Typ von <code>7.12</code> ist Zahl. Oder ein Wert kann\nein Text wie <code>'Hallo Welt!'</code> sein. Der Typ von <code>'Hallo Welt!'</code> ist Text. Diesen Typ bezeichnet\nman auch als Zeichenkette oder String. Dabei kann man einfache oder doppelte Anf\xFChrungszeichen verwenden.\nSo ist <code>'Hallo Welt!'</code> derselbe String wie <code>\"Hallo Welt!\"</code>.<br>Mit Strings kann man arbeiten.\nMan kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen. <code>'Blau' + 'meier'</code>\nergibt den String <code>'Blaumeier'</code>.<br>Die folgende Funktion h\xE4ngt an dem \xFCbergebenen Parameter einen Text\nan und gibt den zusammengesetzten Text zur\xFCck:\n\n<pre><code>var lobe = function(name) {\n  return name + ' ist toll!';\n};</code></pre>\n\nSo liefert <code>lobe('JavaScript')</code> den Wert <code>'JavaScript ist toll!'</code>.",task:"Schreibe eine Funktion <code>begruesse</code>, die einen Parameter entgegennimmt und die\n<code>'Hallo &lt;Parameter&gt;!'</code> zur\xFCckgibt.<br><br>\nBeispiel: \xDCbergibt man der Funktion <code>begruesse</code> den Wert <code>'Ada'</code>,\nso sollte die Funktion <code>'Hallo Ada!'</code> zur\xFCckgeben.",hint:"<pre><code>var begruesse = function(name) {\n  return ...\n};</code></pre>",solution:"<pre><code>var begruesse = function(name) {\n  return 'Hallo ' + name + '!';\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("begruesse")},function(){return jshero.testutil.assert_functionHasNumOfParameter("begruesse",1)},function(){return jshero.testutil.assert_functionReturns("begruesse('Maria')","Hallo Maria!")},function(){return jshero.testutil.assert_functionReturns("begruesse('Franz')","Hallo Franz!")},function(){return jshero.testutil.assert_functionReturns("begruesse('Ada')","Hallo Ada!")}]});