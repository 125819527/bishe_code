(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('康保县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"130723","properties":{"name":"康保县","cp":[114.600404,41.852368],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@M@OACECCAE@ICCI@IBIFOFA@KHEDEBCFCH@D@JCLEFCHEHGHAHGHQHEDWHGFIHCFENEHILCHCFCBABGDMBA@QRSTIL@@KFED@@@@C@GF@@KJGFKHIACAEAAAAACACAAACCA@CAE@CK@EECIAEAAA@CAAEC@ABC@AEC@EAAC@EDCB@@KGA@ABC@AA@AF@BA@AAACB@@CAE@@@C@ABBBA@A@CAEAE@EDE@EAE@EBC@@AAABAAC@AA@CAC@E@A@ECC@AAA@AB@BDD@@CBA@A@AAAA@@@G@ABI@@@I@AAACAA@G@CBMBCBEBE@D@@@@B@TBf@F@B@BCFABCJCFAFAB@@@BAD@D@DAF@B@F@B@D@@BBABBB@@B@FB@@VZ@BKTABCB@@@BAB@B@B@H@B@B@BBB@@B@DBLBTBN@L@ABABEJCFEHEHCFGJEHADCDAFCBCFAB@BCDADCDADCFCF@@ABABABAD@@@B@@FDBBDBGJAD@BB@DHRGTDELCF@@HBADGH@B@B@BB@CBABABA@GHEDCDCBABKLCBCDBBB@@B@B@@FDDD@B@@BDBFBD@B@BAB@@C@MD@@@B@B@B@@CB@@@B@@BDDFBD@B@@@BABCBA@@BADA@ABAB@@AB@B@D@BBB@@BB@B@@@@@BAB@@@B@@BDBDBBDBHDD@@B@BFJDDNLJJFFDFLLJHDDBBNLVRJFJHFFLHHJLNLNJNJNFDJJHJHHNJABCDAB@DA@@D@B@@@BD@B@B@@@A@ABA@AB@@@BB@@BD@FAD@DAB@H@B@BAB@B@DBB@BBBBB@BD@D@@BB@@AB@@A@A@A@AB@@@D@@BBDBB@@BB@@DA@@DA@ABA@@@@B@@BBBBDHB@BB@@DA@A@A@A@@@@@AD@BAB@@@B@BDB@@ABA@@B@BAHDD@@B@@AD@BB@BB@BB@@B@@B@B@F@FB@A@@BABAB@BADA@@@@@@B@@B@B@@B@@@@@@A@@B@BA@@F@B@B@DAFCB@BAB@BADAB@B@D@@@DADADAFADAB@HBFD@@BBdFF@FDFBD@B@B@@@BB@@FAB@H@F@F@B@B@B@@@@@AB@@AB@@@BBBDFBBB@BB@@@B@@B@@@@BBBBBB@@BBBBBB@FDFBDBB@FBD@B@DB@@DAB@B@@@BB@@@D@B@@BBBB@BA@@@@B@BBBA@@@@@@BC@@@@BABAB@@CBAD@BABA@@BABAB@@C@@@ABA@@@CAA@A@@BABA@AB@@A@A@AB@@ABABAB@B@B@@@@@@@BABAB@B@D@@@BB@@@BBA@@BAB@@BBD@@@B@B@@@B@@B@@CBCBCBCBGDA@ABADABA@@@@BC@AB@@@@@@@BHB@@@B@@@BA@ABABABA@A@@B@@@D@@@D@BBBDFBDBBBBB@BDDHBF@BBFBDBD@B@@BBBADA@@D@B@BABADA@@@@B@BAB@B@@BB@@B@@@B@B@@BBD@B@@@BB@BBBB@@B@@AB@@@B@BFN@BB@@B@@A@CDABAH@@BBBBB@BB@@@BBBBB@@BBABBB@@@@BFBBBBB@@B@B@B@D@@@B@F@B@BHDJDLDJBPFJDHFNHLFLBL@NANANC`OVKLGLAH@FAL@J@DBJBRHPHHBLAH@BBB@@BD@FBDAH@N@DAB@BA@ABCBABADBH@FBD@B@F@F@D@D@D@D@@@@AB@@@@AB@BB@@@@BD@@@@@@DC@@D@N@H@@@@BBB@@B@@@DBD@F@B@BBBBF@BBBBBBB@BAB@@NB@B@@B@@@@LB@@@AD@@B@@H@@@DNBJBDBH@@@@FBD@H@H@\\AH@HA@A@@@AACA@@A@A@@A@@AE@@AB@B@B@@A@@DEFEFCFABA@A@A@@DCDA@A@@@ABAB@B@B@@@B@@@BAAAAC@@BAB@@EBAB@@BD@@@@@AA@A@AB@DAD@B@B@AA@@@A@AB@@@D@@@AA@@@@DC@A@@B@@@@@@@BAAA@@@A@@@@@A@@@@B@BA@@@C@@@A@@AAC@AA@@@ABC@A@A@A@A@E@A@A@ADA@ABA@@@A@A@@AA@A@@CGBABE@@AA@A@ABC@A@AAAB@A@@C@A@@@AB@B@F@B@F@@@BA@A@@@ACA@A@@F@@@@ABGBA@ADABAB@D@@@@BBB@BBA@@@A@A@@@A@@DB@@@@@A@@AA@@@@@@DA@@B@@ABC@@@@BA@@@@A@@A@@@@B@DC@@B@AAA@@AA@@A@A@C@A@@EAG@A@G@@C@@B@BA@@B@B@D@B@B@DB@@@@BCBA@@BAB@@@@C@AB@@ABADAB@BB@@@B@B@@@@B@B@B@BBB@B@@BBA@@BA@@BA@ABABCBABADE@A@A@@@@DG@CDKBC@CB@@C@ABA@CBA@AAA@A@C@A@ABCA@A@A@@A@@A@@@@@@A@A@ABCBABA@AAA@A@@@CBAB@BADC@ABAB@B@DA@@B@@A@A@@@@@A@@A@AABA@@@@BAB@D@B@@@DABA@@GCFE@ABAC@EAIBE@G@@@AA@@B@B@B@BAB@@A@@A@CA@A@@BC@@BC@ABC@@@A@@@@C@C@@@@@@C@@@@B@BA@A@@@@D@@A@@B@@A@A@@A@A@A@ABA@A@@A@@@A@E@AB@@AB@JCBABA@ABA@A@C@@@C@A@AA@A@A@@@@AAC@A@@DE@CCQ@KDGFIDGDCDEBEFIBADE@AAA@@AAECAAEEAAAAA@AA@AAAAC@@AC@AAEE@A@EAA@@AAACCCAAAA@@@OAWKSFA@@@@AA@@@OB@C@A@ABCCCAA@A@@BA@@DAD@H@@@@AA@AAA@AA@@BAD@BIPSFEHEFKFGBCBGDK@G@C@GEKCG@IBKDIDQBIBI@E@ABE@MAUAI@ACQ@A@I@GAGAIAG@IA@CEACCEGEEACACCACCECEEEECEAGGAE@E@CBCDEHABEAIAIAI@C@CCIAOGKGKEGBE@UEOACGIEEUQGGECOIAAGCOIC@EAK@OAYAQAQAQASAUCiC_GUASEOAIAOCMEKCOE[EKCMCOAKAQ@OBM@"],"encodeOffsets":[[117315,42439]]}}],"UTF8Encoding":true});}));