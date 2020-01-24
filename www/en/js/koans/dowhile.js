jshero.koans.add({id:"dowhile",title:"do...while loop",lesson:"The <code>do...while</code> loop works similarly to the <code>while</code> loop.\nThe loop code is executed as long as the loop condition results in <code>true</code>.\nThe only difference is that the loop condition is checked after the loop code.\nThis ensures that the loop code is run through at least once.\n\n<pre><code>var threeX = '';\ndo {\n  threeX = threeX + 'x';\n} while (threeX.length < 3);</code></pre>\n\nAfter the loop <code>threeX</code> has the value <code>'xxx'</code>.",task:"Write a function <code>lcm</code> that takes two natural numbers and calculates their\n<a href='https://en.wikipedia.org/wiki/Least_common_multiple'>least common multiple (lcm)</a>.\nThe lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.\n<code>lcm(4, 6)</code> should return <code>12</code>.",tests:[function(){return jshero.testutil.assert_isFunction("lcm")},function(){return jshero.testutil.assert_functionHasNumOfParameter("lcm",2)},function(){return jshero.testutil.assert_functionReturns("lcm(1, 1)",1)},function(){return jshero.testutil.assert_functionReturns("lcm(1, 2)",2)},function(){return jshero.testutil.assert_functionReturns("lcm(2, 3)",6)},function(){return jshero.testutil.assert_functionReturns("lcm(3, 2)",6)},function(){return jshero.testutil.assert_functionReturns("lcm(4, 6)",12)},function(){return jshero.testutil.assert_functionReturns("lcm(5, 7)",35)},function(){return jshero.testutil.assert_functionReturns("lcm(6, 8)",24)},function(){return jshero.testutil.assert_functionReturns("lcm(10, 20)",20)},function(){return jshero.testutil.assert_functionReturns("lcm(20, 10)",20)}]});