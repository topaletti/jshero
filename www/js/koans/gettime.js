(function(testutil){jshero.koans.add({id:"gettime",title:"Date: getTime()",lesson:"Die Date-Methode <code>getTime</code> liefert die Millisekunden, die zwischen dem 1.1.1970, 0:00 UTC\nund dem Zeitpunkt des Datumsobjekts liegen.\n\n<pre><code>var date = new Date(Date.UTC(1970, 0, 1, 0, 0, 1));\nvar time = date.getTime();</code></pre>\n\nZwischen dem 1.1.1970, 0:00:00 UTC und dem 1.1.1970, 0:00:01 UTC liegen 1000 Millisekunden.\n<code>time</code> erh\xE4lt den Wert <code>1000</code>.",task:"Schreibe eine Funktion <code>days</code>, die die Differenz in Tagen zwischen zwei Date-Objekten berechnet.\nEs sollen nur volle Tage gez\xE4hlt werden.\n<code>days(new Date(2018, 0, 1), new Date(2018, 0, 2))</code> und\n<code>days(new Date(2018, 0, 1), new Date(2018, 0, 2, 12))</code> sollten <code>1</code> zur\xFCckgeben.",tests:[function(){return testutil.assert_isFunction("days")},function(){return testutil.assert_functionHasNumOfParameter("days",2)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2018, 0, 1))",0)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2018, 0, 2))",1)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2018, 0, 3))",2)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2018, 0, 4))",3)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2018, 0, 4, 23, 59))",3)},function(){return testutil.assert_functionReturns("days(new Date(2018, 0, 1), new Date(2019, 0, 1))",365)}]})})(jshero.testutil);