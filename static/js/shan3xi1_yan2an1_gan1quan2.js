(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('甘泉县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610627","properties":{"name":"甘泉县","cp":[109.351019,36.276526],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@AB@@@A@@AAC@A@@@A@@@@BAB@BA@@BA@@BC@CBABAB@@AB@@@BB@@B@@ABCD@B@@AB@@A@@@A@A@I@@@AA@@A@@@@BAF@@@@@BC@@@ABCD@@CAA@A@@@@D@B@@@BA@EBA@EAC@@@AAAAAA@@@@@@CBA@AB@BAB@B@@A@A@C@A@AAAA@AAAA@@@A@@@A@C@@B@@@BADA@A@A@ABAB@B@BA@A@@@@@AA@@A@A@@@@A@A@AAA@@@@A@@@AB@@A@@@AA@@@@@@A@A@@AAAA@A@A@AAAA@@C@@@AAAA@A@@AA@@E@@AA@A@@AAB@@AAA@CA@@AAAC@A@A@CA@@@@AC@CBCBA@A@A@@AAAA@@@A@A@@@A@@@@@@E@CA@@@AA@@A@@A@@A@AB@@AB@BCBAB@B@BA@@B@@A@A@@@ABA@@BABAB@@A@@@A@@@A@@AA@@@@BAB@B@@AB@BA@@@A@@A@@@@A@@BA@CBA@A@AB@@A@AA@A@@AB@@@B@@ABAAA@ABC@CA@@ABAB@B@AA@@AA@A@AB@@@@@@ABA@@BA@@@AB@BA@AAAA@B@@AB@@AB@@AB@@@@A@A@@@AB@@AB@@ABA@CB@@AD@@C@@@@B@@@B@@@B@@AD@B@B@@@BAB@@AACAA@@@@B@@@B@@C@@@A@A@@BAA@@C@@@@AACA@@@A@@B@@A@@AA@@@@BA@@@A@@@@@AAA@A@@@CAACA@@@@@A@@DA@@BAAA@@@CA@BA@ABAB@@A@@AA@@@ABABABABAB@@BB@B@BA@@BA@CB@@A@@B@BAB@@AB@@BD@@AD@@@B@B@@@BBB@@@BCBABA@ABA@A@A@AAA@@@@BAD@BBB@@AB@@@BBB@@@B@@ABA@AAA@@BA@@B@FAB@B@@A@AB@@C@EC@@A@@@A@@@A@@@@@@@@B@BABCB@@@@@B@B@B@@AB@BA@ABA@@@@BA@ABA@A@AA@@AA@@@@A@A@@@ADAB@@AAA@@@@@A@AB@BABA@@BA@@@AD@@AB@@A@@B@B@@AB@BB@BBBD@B@@@BB@@@B@@@@@BBBB@@BBBBA@@D@BA@AB@B@B@B@B@@@@ABABC@ABEBA@@B@@B@@@BBA@@BABABAB@@AB@@BB@B@BB@@@@@AD@@@@@D@@@BABA@@@GA@@A@C@@BA@@@@BB@AB@@@@EBA@@@@BA@@B@B@B@@@B@B@B@@@@@BB@BBBB@B@@@@BB@BB@@@DBB@BBB@@B@B@@@BB@BB@@@@BB@BE@A@ABA@@@@BA@AD@@C@A@@BA@@@AA@@@BA@AB@@A@A@A@@@A@@@@B@B@B@B@@AB@@@B@@CB@@AB@@ADA@ABA@@@A@@@A@@@@D@@@@AB@@EB@@ABAB@@@BC@@@AB@@@B@@CBAD@BA@A@@@A@@@A@ABA@@@AB@@@BA@@@@@AAA@@BA@@@@B@ACAA@A@C@A@CA@@AA@@@@A@AB@@ADA@A@A@CA@@CDA@A@AA@@CA@@AB@B@BA@@@ABEBA@@AA@@A@@@@A@@B@BA@@@A@@@ABC@AB@@@B@@A@@@A@@@A@@@@@AA@@A@A@AB@@@@AB@DA@@@AB@@A@@BA@@BA@@B@DAB@@@D@@A@A@@@A@@@A@A@AAAB@BAB@@CB@@A@C@C@@@CAACAAA@@@A@@@AB@B@@AAA@@AAC@A@@A@@@AB@BA@CBA@@@A@@@A@@@A@A@AB@@@@@B@@@BBB@B@@@BAB@@A@A@AA@@A@AA@AA@AA@@@@@BAB@BAB@@A@ABA@AAABAB@@@BAB@@AB@@ABA@@DCB@@@@A@@@@@AA@AA@@@A@C@A@@@@A@A@A@@A@A@A@@@AAA@AA@B@BAB@@A@A@@BA@C@AB@@@B@DAB@@@@A@C@@@A@AB@AAAAA@@@A@AA@GA@@@B@@@@@BA@@DA@ADABABABA@ABA@ABA@@@@@ADCD@@@@A@@@A@A@CB@@A@AC@@@@A@@@AB@@@B@BA@@@ADCB@BADA@@BAB@@A@AB@@@BAB@@A@A@@@CAAC@B@DADAB@D@@B@@BB@@B@BAB@@BB@@ABA@@BAB@D@@@BA@@BBDBD@B@B@B@BBBB@@@@@@B@@@B@@@@@@DFBB@B@@BBBBBB@@B@@@BB@@D@@@B@BAB@@B@@@@@B@@BB@@BBBB@@@@BBDBB@BBBBB@@@BB@@D@@BB@@@@@BB@@@@BB@BB@ABB@BDDDBB@@@BBBB@@B@@@B@@@B@@@B@@BD@B@B@B@BB@BB@B@@@@BB@@@B@@@@DFBB@@@@BB@BBB@BB@BB@@@BBD@B@@@@BB@@BB@@BBA@BB@@@@@B@@B@@B@@BBB@@BB@B@@B@@B@BB@@B@@BB@@BBB@@@B@@BB@@B@@@B@@BBB@@B@@@BB@@@@F@@BB@@@@@BBB@DBBA@@FD@BB@@B@F@B@BBB@@@BB@AB@@@@@B@BBB@@AB@@BBBB@B@@@BA@@BB@@B@@@@@@BB@BB@@B@@@@@@BB@@@BB@@BB@@@B@@B@@@B@@B@@B@@BB@B@@ABA@@@@@@BBB@@@@AB@@@BAB@F@@@@FBDDB@@@BB@D@B@BBBADBBBDDF@BB@BBB@B@D@BBB@B@BBD@B@BBF@DB@@DB@@B@D@@@BBB@@@@B@B@@@@@BB@B@B@BAB@DABABA@@B@B@B@BAB@DGB@BCBA@@@@BADC@@BABAB@D@B@D@FCDAB@DAD@@AB@BADAB@@@@@@B@@@B@B@@@B@@@B@D@D@DAB@@@@@B@@@D@B@@@B@@BB@B@BB@@@@B@@@B@@@BBB@@@D@BBB@BBB@D@@@D@BCB@B@BAB@@@B@@B@@B@BAB@@@B@@@B@BAB@D@@@B@D@@@@@BBB@B@@@D@@ABA@ABA@@@ABCBABAB@@@B@B@@BBBD@@@BA@@@A@A@AA@AA@A@@@AB@@@D@BAB@BAB@BBB@BB@@B@@AB@DAB@B@BCDA@AD@@@B@DA@@@ABA@@@@B@D@B@B@BADB@@BBB@@@B@@A@@BA@@@@AA@A@A@CBCBA@@BC@A@C@@@@@ABAB@@AB@@@BB@B@BABBBABB@@BBDDB@@@B@@B@@B@@@BA@@B@BBB@@@HCB@BAB@@@B@BBD@@AB@BCB@@@BAB@B@B@BB@@B@@@@@BABCB@B@D@B@@@B@DA@@@@B@@B@@B@DB@@@@@D@@BBB@@@BADCDABABCBA@AB@BA@@@AB@@B@@BD@@B@DABA@@@@DB@@FAB@@@@A@AB@D@B@B@@@BCBA@@F@@@D@B@@@BB@@@B@@DBB@@@@AB@B@D@@BB@@@@@B@BA@@B@@@DA@ABA@@@@D@DA@ABA@@@@B@DBB@@@B@@@@@BB@@@@@@BABA@@@A@@@A@@@A@@BAB@BA@@BAB@DAB@@@BB@@@@DB@BB@BA@@B@@@B@AABA@@BADABADC@AB@@@FB@@B@@@B@@AAA@ABC@A@@@AA@BA@ADABAB@BABA@@BBBB@B@@@@BBB@@B@B@@BB@ADA@@@@DABA@@@@BB@@BBDB@@@@BAB@B@@@@@BABA@@BA@@DBB@@B@@@@B@B@BAB@BA@@BA@@B@@@BB@B@@B@B@@@BA@@@@BA@@@A@AAA@@BA@A@@BAB@BAB@@A@CB@@AA@@A@ABC@A@CB@@@@BB@BB@@BA@AB@@@B@@B@@@@BABAB@@A@@@AB@BCBA@A@@BABAB@@@B@@@BBB@BB@@BAB@@A@@@ABA@@B@@@B@B@@@B@BAB@@ABA@CB@@A@ABC@A@AA@@AA@@@@@@G@@BABAB@@@BA@A@AD@BA@@@@DB@@B@@@D@@@BA@AAC@ABC@AB@@@B@BBB@@@BA@AB@B@@@B@@BD@@@B@@@B@DAB@B@B@B@@AD@BAB@@AB@BBBBBB@@B@B@@@B@BEB@B@B@@BBB@@FB@BBB@BB@@BB@D@B@BAF@@@B@D@BB@A@@@@AA@@@ABC@CBA@ABA@AD@@@BAB@DA@@B@D@@@@A@@@@B@@@D@D@BA@@B@BB@@BB@B@BB@FB@@BABA@@B@B@B@BBBBB@B@BB@@@@B@B@BBB@DB@BBD@DBB@@BB@@BB@@@BB@B@@AB@@@FBB@BA@AB@@C@@@@D@B@B@@@BC@ABAB@@@@BB@@BB@BBD@B@@@@@@@@@@A@ABCB@@@F@B@B@B@B@BABABGB@B@@ABCB@@ABAB@@@B@@@B@@@@@DC@@DAB@BA@@BA@A@@@A@@@ADABA@@@@BABA@AB@B@BAB@@@AC@A@A@A@C@@@AAA@C@@B@B@@A@@@@B@@@@@@ABA@@BA@@@AB@@@@@BA@@B@BAB@@A@A@@AA@@@AA@@C@@@A@@B@B@BA@@B@@@B@BA@A@ABA@@BABABB@@BBBB@@@@B@B@@@B@@@BABAB@@A@@BAB@BA@@@C@@@A@ABA@A@@@A@@@@B@@@B@B@@BBB@@B@@@@@BAB@@@@@BB@@B@BA@A@@B@@@BBB@FA@B@@@@@B@@BDB@@@D@@@D@BABAB@B@@@@@B@@@@C@A@@B@B@@E@@@C@@B@BAB@@@BB@@B@B@@AB@BABC@@@@B@@@B@B@@B@BDABB@@BA@A@AB@@@D@@B@@@@B@@@BAB@@@B@B@B@@@@@BADA@@B@B@@AB@@A@@BA@@@BB@BCDAB@@@DABA@@B@@B@@BB@@B@@@@ABA@@B@@@@@@A@@@@@A@@@@@A@@BA@@@@BABA@@B@@@D@B@B@@@BA@A@A@CB@@A@@@AB@@A@@B@B@@B@FB@@BD@@B@@@BBB@@AB@@@B@BAF@B@@BBBB@BBB@@@@@@@@@BB@@@BA@@BA@@BA@@@@@@BABA@ADC@@B@@BB@@A@@@@@A@@@BB@B@BBD@BBB@@BB@@@@A@@BA@ABA@@@AB@@B@@BB@@@@DA@@B@@@BB@@B@@AB@@A@A@A@CBCDA@@@BB@DB@@B@@@@A@@@@BABAH@@@D@B@B@@@BA@@@C@@B@B@@A@@@@@@BA@@B@@A@AB@B@@@B@@AB@@BB@B@@@@@BABABABA@A@@@A@@@A@@BA@@@@D@@@@A@@@@BA@@B@@@BD@@BB@BB@@@BBB@@@@B@@@AB@@A@@@@@@BA@@@@B@@@B@@AB@B@BDBBB@B@@ADADCB@@@@@B@@BB@@@@@B@@A@@BC@@BA@@@A@ABAB@@@BAB@B@B@BB@@B@B@@BB@@@@@DA@@@A@C@CB@@AFGB@@@@@B@B@B@B@B@@A@ABA@@BA@AB@@@@@BBB@@@BA@@BABABABA@A@@BA@A@AB@@AB@BA@@AAB@DAB@@@@@B@BD@B@@B@@@B@@@@@BB@@@@BB@@@@@B@@@BB@@AB@@@@@B@@@BB@B@@BB@@BC@@B@@@@@B@@A@@@ABAB@@ABA@@BA@@BA@@@AB@@@@AA@@A@A@ABA@A@@AC@A@@AAA@@A@C@C@A@AB@@C@ABA@@BE@@@@AAAC@A@A@ABA@A@@B@@AB@@A@@BAB@BABCB@@ABCBA@A@@@@B@@@BA@@@@@AB@@@@A@A@A@@BC@@B@@@BB@@B@BAB@@@B@DC@AAE@@@A@@@A@A@@@CDA@@B@B@B@BE@A@A@@BC@@@A@C@AAA@A@C@A@A@A@@@A@AB@B@@@@ABA@C@@BA@@D@BA@@@A@@@A@@BABA@@@A@@ACA@@A@A@A@A@@@AAAB@@A@A@CAA@A@AB@BC@@AA@@@@BA@ABC@C@@@@@@BC@E@@AA@AAA@@@@@@A@A@@@@@AA@A@@BA@E@@CC@@@@BC@A@A@@BAB@@AB@@A@C@@AAAC@@@AB@@@BAC@@A@@AA@AAA@@@@EAA@@@A@@B@B@@A@@BA@CBAB@@@@AACEAC@@@@AB@@EB@@@@A@@A@@AC@@@E@@@@@@E@C@A@@@@@@C@A@C@AAA@A@@A@A@@@A@@C@CCE@AA@@@C@EBC@C@@@@AACACACA@@@A@CB@@A@AAA@@AA@@A@AAA@A@@AAA@AA@@@@@@@@A@@C@A@AA@CACA@@AACAAAACAAAACA@@C@@B@@A@A@A@@@@B@BA@AB@@A@A@A@@@@AA@@@@A@@@@AA@A@@AAA@C@C@@@AAAEAAAC@@A@A@@@A@AAA@C@A@CAA@A@AAGCEAAA@@@@@AB@BABCBA@C@A@ABAAC@CA@AAAAC@@@CCAA@A@@A@@AA@@@AB@@A@@@@@@C@AA@AAA@@@A@@@CD@@A@ABA@AAAAA@@@AAA@@@@@A@AD@@@@A@@A@A@@A@@@@@A@A@@@@@AA@@@@A@A@@@@BAACA@@A@@@@@ACA@A@@@A@A@@@ABAB@@A@@@A@@@CABA@AB@@AAA@AAA@AA@AAA@AAA@AAAAA@@A@A@@@AC@EAAA@ACCAAA@AAA@@@A@CA@@A@I@@@A@A@@@ABA@@@A@A@A@@AA@@BA@A@AA@@A@@A@@C@@@A@@@AAA@A@A@@@ABA@A@@BA@A@A@A@A@@@@@@@A@@B@A@@A@@@A@AB@AA@@@@@@A@@@@A@@@@@A@@@A@@@A@A@@@@@AB@@@@C@A@A@@B@@A@@@@@AB@@A@@@A@A@AA@@A@A@@@@@A@A@@@C@@BA@A@@@AB@@C@AB@@A@@@A@@@E@C@A@ACA@A@CAA@C@C@@AA@A@@@A@C@@B@@@B@@@@"],"encodeOffsets":[[111918,36988]]}}],"UTF8Encoding":true});}));