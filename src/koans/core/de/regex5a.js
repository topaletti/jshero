(function(testutil) {

  jshero.koans.add({

    id: 'regex5a',

    title: 'Regex: Anfangs- und Endezeichen',

    lesson: `Pattern, die wir bisher betrachtet haben, konnten an jeder beliebigen Stelle im zu durchsuchenden String
stehen. Mit <code>^</code> und <code>$</code> kann man festlegen, dass das Pattern am Anfang bzw. am Ende des zu
durchsuchenden Strings stehen soll. <code>/^\Hans/</code> trifft auf alle Zeichenketten zu, die mit <code>Hans</code>
beginnen und <code>/\\d$/</code> trifft auf alle Zeichenketten zu, die mit einer Ziffer enden. Verwendet man sowohl
das Anfangs- als auch das Endezeichen, beschreibt das Pattern den zu untersuchenden String vollständig.
<code>/^\\d[a-z]$/</code> trifft auf alle Zeichenketten zu, die aus genau einer Ziffer gefolgt von einem
Kleinbuchstaben bestehen.
<br><br>
<code>^</code> und <code>$</code> legen die Stelle fest, an der das Suchpattern stehen soll. Solche Zeichen nennt man
Anker.`,

    task: `Schreibe eine Funktion <code>isTime</code>, die prüft, ob ein String eine Zeitangabe der Form
hh:mm:ss ist. hh steht dabei für die Stunden, mm für die Minuten und ss für die Sekunden.
Es sind alle Zeitangaben von 00:00:00 bis 99:59:59 zugelassen. Bei einstelligen Stunden, Minuten oder Sekunden ist eine
führende Null obligatorisch. <code>isTime('02:15:25')</code> sollte <code>true</code> und
<code>isTime('x02:15:25x')</code> sollte <code>false</code> ergeben.`,

    hint: `<pre><code>var isTime = function(s) {
// Verwende ^, $ und
// Bereiche.
};</code></pre>`,

    solution: `<pre><code>var isTime = function(s) {
  return /^\\d\\d:[0-5]\\d:[0-5]\\d$/.test(s);      
};</code></pre>`,

    tests: [
      function() {
        return testutil.assert_isFunction('isTime');
      },

      function() {
        return testutil.assert_functionHasNumOfParameter('isTime', 1);
      },

      function() {
        return testutil.assert_functionReturns("isTime('00:00:00')", true);
      },

      function() {
        return testutil.assert_functionReturns("isTime('99:59:59')", true);
      },

      function() {
        return testutil.assert_functionReturns("isTime('02:15:25')", true);
      },

      function() {
        return testutil.assert_functionReturns("isTime('000:00:00')", false);
      },
      
      function() {
        return testutil.assert_functionReturns("isTime('00:00:000')", false);
      },

      function() {
        return testutil.assert_functionReturns("isTime('00:60:00')", false);
      },

      function() {
        return testutil.assert_functionReturns("isTime('00:00:60')", false);
      },

      function() {
        return testutil.assert_functionReturns("isTime('0:00:00')", false);
      },

      function() {
        return testutil.assert_functionReturns("isTime('00:0:00')", false);
      },

      function() {
        return testutil.assert_functionReturns("isTime('00:00:0')", false);
      }

    ]

  });

})(jshero.testutil);
