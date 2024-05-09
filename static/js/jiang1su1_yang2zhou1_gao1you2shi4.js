(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('高邮市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"321084","properties":{"name":"高邮市","cp":[119.459161,32.781659],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@hBvJDD@h@hB\\B~A@v@H@BBBBDBBBBDDBHDBLHRNPRNPLT@BDD@DFCLENGDCDADADAJA@@JS@@B@hFB@B@B@@ABA@@@@@@FBB@DAD@@@B@BBDDDBFDBBFDLHBBF@D@@@D@D@BAJ@LCD@JAJ@FAB@DAF@F@RCHAB@DBHBRDF@FBB@DBRDD@HBB@D@@@F@D@B@D@@@HBF@D@NDF@F@D@FBJBB@@@@BAB@BA@@B@B@B@@CAADA@@BAB@@BBA@@@BBB@BB@@ABB@@B@@@BCB@DDBD@B@B@@@B@@@BB@@DBBFAB@@@@@@@BDFCBBB@DBA@@DFB@RP@@@@B@BBBBHF@@FD@BD@@BHA@@@B@B@@BAB@@@B@B@B@ACN@@@BBBB@AB@B@B@@@@@@D@@B@D@@@@DAB@@@@@B@D@@AF@B@B@B@B@FD@@DB@@@B@@B@@B@B@@C@@D@@BB@D@@@@@@@@CD@@AA@B@@@@@@E@@DB@AB@@AA@@A@@D@@@@@@A@ABA@@BBB@@@BBFKBE@@B@@@FD@@D@@@@@BCFE@AB@@@B@@@J@@@@AB@D@@@F@@@D@@@@@@@B@@BB@LE@@EC@@AKA@@@K@@MB@BBDEB@@A@A@@AADEACAGAE@C@I@@@@B@@ALB@@@@@@@@NF@@@ABME@@CA@@@A@@@@ABA@C@@B@@@BB@@@A@A@@BA@@@ACAABA@@@A@A@@@@C@@@@ABAA@C@ABA@@D@@C@@@ACAAE@@@@@ADB@@@GDB@@@@@C@@@ABEDA@@D@BBD@B@BB@@D@D@B@BA@@BCBC@A@@@@@C@@BAEAAE@@A@@@AIEB@CA@@@AC@@A@G@@E@@D@@AA@@AD@@BB@@A@@@M@AACB@@@@CC@A@@@@@@@@@@ABAKA@AE@@EA@@@@@@CD@@A@@BA@AH@@@BC@AA@G@@EC@@ED@B@@A@AF@@E@@LCAA@BAA@AB@FA@A@@C@@@CBAAHAB@D@@@@CB@@@B@D@@BB@HA@@BA@@@A@A@@@@@AA@CG@@A@@@AEB@@@@C@@@@B@BC@@D@D@B@@E@@BCB@@A@AAC@@@@K@BGD@BE@C@@@EA@@AA@@A@AB@@DF@@C@@BDB@@CD@@@@@@DD@@AB@@AB@B@ABBB@B@@LB@ABA@CLBBB@@@@L@@@BBL@@@BA@@@@@@@BB@@BFB@@@HD@@@@D@BF@B@@AD@D@DAD@@@@@@D@BT@@@@C@@@EF@@EB@@BHB@AAA@CBA@@CA@AC@@A@A@@@@@A@@IABG@ABC@@@ABCDE@ABCD@@@@AA@JABAA@@@@CA@@C@@A@@@@@@@@AB@@C@@BA@@D@@@BC@@DB@@BC@@@@BG@@B@A@DECAGA@CHBBCA@BE@@DBD@@AA@AAA@@AA@@@AA@@A@@@@AAACB@AA@@C@A@@@AC@@CA@@C@A@A@@FB@CDBB@FBAE@O@@D@BC@EA@@AA@@@A@A@@FA@@@@EC@EMBAB@@EA@A@@@@C@@@A@A@@HCD@J@@@@AAAB@@A@@B@@@@@D@BD@A@@B@A@@B@B@@@@D@DAB@D@B@B@D@F@D@D@BAB@@AB@B@BA@AA@@@@@@@@@BAA@AC@@@@@@B@@@B@@A@@C@@C@@@@G@@D@B@BA@AAGAA@CCCAACAACAECCCCCAAEEECA@CCACACCC@@@@BDBDA@@@C@@@C@A@@AG@@@CAA@@AB@@A@EAAGCBCA@CA@A@AGA@@@B@BC@@A@CAAD@B@@AD@@@@AB@@@AAC@@@@B@@C@AEDAB@EECCGIACCEAAA@ABA@A@@@CAA@AA@@@A@@@AAACC@AA@C@A@@C@@@A@@@AAA@A@@BAGGEEKOEECC@@A@@B@@@@CB@CABA@@A@A@@E@A@@@A@A@@BA@@@CB@DA@A@E@@@E@@@C@@@@@A@EA@@@F@DA@ABA@@B@@C@EBC@@@@@AACC@BAACB@@C@@@@A@@E@@B@@@@E@AFABC@A@@@@@@@G@C@@@@@@AA@@AI@AB@@A@@@C@@BA@G@@ACA@DC@BCA@@@A@A@@@A@@@@B@@A@@@Y@A@@@@AA@@AA@A@@@E@@G@C@A@@@@B@B@@@A[AG@AAQ@AAOAUAM@CA@[BG@@@QBE@AAE@C@A@I@I@A@EAI@MAC@EAC@@@C@C@@@@@CAC@G@@@A@CBACE@GB@BBHBH@@@D@@@@AZA@A@E@@@@@CAAA@@CAE@C@A@A@GC@B@A@@@@@@@GA@@@@@@@A@ABW@@EAGAC@CAA@EA@BB@@C@@@CB@A@AAAA@ABA@A@@@AB@B@@@@EBAA@@@@A@@@A@AB@@ABAAA@@@AA@AA@@@A@A@@@E@EBM@SDODIBUDKDIDMFGBE@ABABAB@@C@ABA@A@AAA@@AA@AAGACAE@ACIS@@AGCCCCAAECCAAAACAAAACCACBC@E@@CCGG@AA@@@AC@@AA@@@@C@@@@@@@A@@B@BA@@@@@@@@@@@@B@@@@GB@@A@@AAB@AA@@B@@A@B@@AA@A@@B@@@@@@B@A@@@AB@A@B@@B@@@ABA@@@@@CD@BA@CCB@AAB@AAB@A@@@@@A@AA@@@@CB@@A@BB@@A@@@@B@@A@B@ABA@@A@@@@@@@A@@A@@@@C@A@AAC@@@@@@AAB@A@BA@@@@A@@A@@A@@A@@A@@@AAB@@@EG@@A@@@@@@@@@A@B@A@@A@@@A@@A@@@B@@AA@@@@AD@AA@@@AAA@AA@@@A@BA@@@@A@@@@B@@@@A@@BA@@@@A@@@@@BA@@A@@A@@@@@@@@@@BA@@@@@BAA@@@@@@@@@@@@B@@@@A@@@@A@BAA@@@B@AA@A@AB@@C@A@A@A@AB@A@@@@@@@A@@C@@@@@A@A@@A@@A@@B@@@@@@A@@A@@A@@@@B@@@@@@AAC@AA@@A@@@@@@@@@A@@@A@@@@AA@@@@@A@@@@@@AB@@@@@@A@@A@@@B@A@@@@@@@@@A@@@@@AAAB@@A@@BB@A@CBC@A@A@@A@@@@B@@@@@@A@@@@@AB@@@@A@@@AB@@B@@@@B@@@@A@@A@B@AA@@@@@A@@@@AA@@@@A@@@@@@@A@BAC@@@@@@B@@@@A@@@A@@@@@@AE@@@C@AB@AA@@@A@@@@@A@@@@@BB@BA@@@@@@@ADABAA@AA@@@A@A@@@@A@@@@@@A@@@@A@@AA@@@@@A@@A@@@@@@@@AA@@B@@@@AA@@A@@@A@@@AB@@@A@@A@@B@BBDA@ABAB@@ABA@AC@AABA@@@AB@@A@A@BD@@@@A@@@@@@B@@@BA@@@AB@@@@@@@BBBBD@B@@@D@@BB@@@@@@DHEBC@EBEBCD@FAF@D@BBDBDBD@B@D@DADKFEDADAB@DBf@JBTBN@B@r@BELBJ@H@BAD@H@F@D@F@DCFADABCFCDAB@FAD@FAFAD@DAF@DAH@DADAFAF@DAB@JAL@D@DAJ@FG^@DRBdCtCh@ZA"],"encodeOffsets":[[122132,33612]]}}],"UTF8Encoding":true});}));