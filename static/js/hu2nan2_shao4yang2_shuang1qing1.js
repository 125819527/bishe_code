(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('双清区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430502","properties":{"name":"双清区","cp":[111.496341,27.232708],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@@CACCCEEEAAAC@C@A@AF@FABADCDEFGFAB@@@B@@DD@B@@@@ABA@A@A@@B@@BD@@HH@@DB@@DB@BAB@@A@CBCAA@@B@@AD@@@B@@AD@@AD@BA@@@ADABABDB@@@@BB@@DBDB@@@B@@@B@@@BAB@@@@AAA@A@A@@@AB@@ABADAD@@ABAD@@@B@F@DB@@B@BBBB@@BD@B@@@B@@@B@DC@@BEBADI@@BCB@BAB@D@BAD@@BB@B@BDBB@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@@DD@BBB@BB@@D@D@@@B@@@BA@@BABA@AB@B@@ABBFDHAD@DAD@@CDCBCB@B@@BB@BDDBBB@BB@BBBA@ABA@@B@BBBB@BBB@BBDBB@BBB@@A@E@@@AB@@@DABBBABA@@D@BBB@B@@@HCF@@@F@HB@@BBB@N@HCBCGISQ@IBAD@H@J@JD@@BA@A@@@@@@@@@@@@@A@@@@B@@@@@@@BB@@B@BB@B@@@@ABBD@BB@@@@@B@@@@@@@@@@B@@A@@@A@@@@B@@@@@D@BBBB@BB@@AB@@B@@@@@@B@@@@C@@@@BBB@@AB@@@@A@@@DBDABK@ABGHEDAJGPBB@@@J@HAB@B@@BFBHLFFJ@J@BA@@@@FCBKBGCGAA@@@A@@@AB@@@FCB@@C@ABABAFA@@@A@@AA@A@@@@@@@A@@@A@@@A@@AAAABA@A@AB@@@@@@@@@@@B@@@@@B@HFBBD@FD@@B@B@@@@@@@BA@@@@@@DC@AAAACAIAAAAAAA@@A@A@C@@@@@A@@BC@@@A@@@C@ACC@AAA@A@@@A@@@@AG@Q@CAA@@@C@E@CA@@@AA@@A@CCA@CAAA@A@A@@AAA@AAC@A@@@ABA@@DAB@B@BABABA@A@@@A@G@EBA@CAC@AAEAAAA@A@GBA@C@E@EAA@CCICCEE@CBADAD@B@@@B@@@@AFABABA@CAA@AAAAABA@ABABABA@@@@@A@EEACAAAA@@GCAC@@@@A@AA@B@@BF@@BDAB@@A@@@A@ABCB@@OF@BA@AB@BABAB@A"],"encodeOffsets":[[114181,27860]]}}],"UTF8Encoding":true});}));