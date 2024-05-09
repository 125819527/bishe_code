(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汉川市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"420984","properties":{"name":"汉川市","cp":[113.839149,30.661243],"childNum":6},"geometry":{"type":"MultiPolygon","coordinates":[["@@E@@@@B@D@BD@@A@@@@B@@A@C"],["@@JNDJNIAC@@ACAAAA@AA@@@AA@@@@BA@@@@@A@A@AAC@@AC@A@ABAB@BAL@B@FAFAD@HADAFADAFABA@@JAFADAJIBA@@BBBAD@@AB@B@@FB@@BB@BDBB@B@@@B@BB@BFA@ABDH@BB@@@BB@BB@BBD@@@@B@BA@A@@@@@@@A@@AAB@@@@B@@B@@B@BBBBBB@BBB@@B@@@@BF@B@@B@@@@@B@@@@@BA@AA@@A@@B@@@B@@@B@@B@@B@@@@@@BB@@@@@@@B@@BB@D@@B@@D@@@@@D@@ADB@B@@B@@B@@@BB@DB@BAB@D@B@B@B@@@D@B@B@@BD@@AD@@@BA@@@A@@@@D@BABA@AD@@BBAB@@@BBB@D@B@B@@@B@B@@@JALA@C@@@ABEE@@CAA@AEA@ECAAABC@A@CF@D@BBBA@EBG@ABBDCDC@CBEC@ECIEGOEIAC@AIIIICK@EAYAAAGGEGCC@E@KAMEECCCKKEMAIBI@GCCAAIAEBEBIJEFABKFI@CAAACF@D@D@H@DADAFAD@@@D@FBF@DBFDF@H@FDN@@@B@FBJ@F@HAF@B@@IBABOFIDGFCF@D@J@PCDCFADFNBB"],["@@FNAFAF@B@BA@@BABADCB@BA@EDCBABA@A@@P@BAB@D@NBB@@@F@@BJDJDJBBDDBBBFBDBBDJDFAD@DFB@DCDAB@D@DFFBBBDDBHB@BBBAF@D@DBD@DBH@FCBGBA@AFA@@B@DAFCBEAWRAD@BAL@D@@@DAF@B@D@HB@NBDD@F@D@D@F@H@@ABADEBEBC@EAC@E@CB@DDB@@@@@BB@@@@@@@@@B@@@FBB@DBBD@BBDDFBDBDBD@H@D@@ADADAD@@ABCBCDCBCBCBCB@@AFBDBBFBDBBHBD@DDBDDDD@FA@AB@@A@A@AB@@@B@@BD@B@D@B@D@BBD@B@F@B@@@@@@B@B@@@@@BBADAD@@EJCDCHIJABADABABCDADCJCDCDABC@CDADCFABCHEF@BABABIJCBADC@CBCBA@ABCBEBCBJFDBBBLDDBB@FDB@B@BA@A@ABADAB@BCBAB@BA@@BAB@@ADB@ABAAA@ABCBAB@DBB@@@@AACBCBA@@@@BDB@@C@C@@A@A@@ABAB@D@@@@AC@AA@AD@@@AA@A@AB@DBB@AC@C@ABAB@@@DB@@B@BG@AAC@CBCFEDAB@D@B@F@H@FA@@B@DEBCFEHIBA@ADCB@DEB@@ABC@@BCDC@@BCDEJMB@FIPSJKFEJKJMDCFU@CDMJ@XRTL^BZGB@PBJB^HJBXBLB@@FDFDDVADODA@IB@LBJTFVNHD@BB@@@BB@@@@JFDDR@VBDBFDFDPLFDHFJPFJBBDJHPB@FBDDHH@@BBDBD@BADA@@@@DCDAFE@@JM@@DABABB@B@N@FAN@FBBBBVH@ADEDCDCBC@A@A@A@AAE@A@A@A@@BC@ADEBA@ABAD@FAD@@ADAFE@ADADAD@BBB@BB@BBBB@B@BADAFEBCBA@A@CBA@@DADABABCBCB@BADCFEBABAD@DAB@@@BA@A@C@A@A@I@I@GBCDCHAFAF@HBD@J@DBFHDBD@D@BABABAFOBAD@DBBBBB@@@DBDAH@D@B@B@BBBDDBDBD@D@FBF@F@JAH@DADBDBFBHDDB@B@D@@K@CDAJCJCB@JAB@DAD@D@D@@@D@DCJIDGBCD@DAHEB@@CBA@GBC@@CCCA@AC@CACAAC@C@C@ABCBBH@H@D@@ABC@A@@@AAAAA@CCC@AACAC@CAC@CAABCBCBCBADA@A@@@AAAAAEAC@C@CB@B@BAB@DABC@CBC@CAA@@A@ABCDAB@BA@AAACAA@@A@ABA@CAC@@@A@A@ABAB@F@F@B@@@D@FBD@BB@BBBBB@BB@BBB@BA@@BA@@@@@A@AAAAA@AAA@@@A@ABABC@@@C@ABA@@@@FCBA@AB@@@@ABAB@B@B@@@BBBBBBB@BBD@FB@@B@FI@AFE@ABA@@B@BAB@D@DAF@B@B@DAAAIKCCCECCCGEGCE@@EEGEA@GEEE@AAC@EBCFAFALADADC@AACEEEAGECAA@@AAA@CDCDAFADADADCBA@ABA@@AE@CCE@@@@@C@ADCBA@@BABA@@@@@@@A@@ACACACCCCC@@CACCCCCCAAA@@AIEOCE@C@IBCBA@@@@E@AAA@@A@A@@@CD@BCDCACAAECEAGA@AECC@AA@@A@@@A@@AC@E@C@@@A@A@AAG@CBE@CBCBE@AAAAAECAAA@ECCAA@CBADAD@BCD@D@DABCDEB@AA@@@A@CAAACA@A@A@@ACACAAA@AAAACACAA@CCCC@CA@@CAC@AAC@A@AAI@CAA@@@@CA@@C@C@A@A@A@C@ACA@EECCCCCC@@AAAAACAACCAC@CACCAACCACEAAAACE@@AA@ACCKCACCCAIACAKCE@A@@E@C@C@EAECE@AAC@CCCCA@A@G@E@A@E@GAE@E@E@C@CACACA@E@A@@@CACACBCAA@@CCGECAAAACGCAA@CBAD@D@FC@C@AEBE@E@E@G@E@I@EBCBABA@EFABCDCDCDADEJGJIDIBABM@A@M@A@WBGDDFFFBB@B@B@HBF@BBFBH@F@B@@BBBFBDDBDJBFABEHED@FAD@DADADADCDEBCAEGAACCEEC@ADABCBE@CBADAJADCDCAQOEAQAAF@DCDCDAA@BAH@FABAAC@E@@D@BADBBDB@FFB@BBB@DF@AF@B@@@DKBIB@@A@A@@@A@A@C@A@AA@@A@AB@AC@@BABABC@@@@@@B@@AB@@C@@BC@@AA@A@C@@@A@A@A@C@A@ABA@@CAA@@A@@@@AA@A@BC@@@C@@@@@CA@@@@CAA@@@A@@@@@@AA@@@@@@@AA@@@@A@@@A@@@AB@@@BBB@@A@@@@@A@@@@@AA@E@@A@@A@@@AA@AAAAAAAA@@@@AA@@@@@BA@BB@@@@@@@B@B@@A@A@@C@AAA@@AAA@@A@@ACGBAB@AEA@@A@A@@@AAAACA@@AA@@EA@A@@BC@ABAA@@ABIJCBEBIB@@ABEBCBEBCBGBC@EBEBA@K@ABHNB@@BBF@BB@BB@BBD@D@BAB@B@@A@AAAAMJ"],["@@A@A@@D@R@B@B@@@BB@@@@A@@@K@IBC"],["@@@F@B@DAFF@BDJA@@H@@A@AEAA@EA@AC@BE@CG@"],["@@@C@@CB@@A@@@@DB@BDB@@@@E"]],"encodeOffsets":[[[116586,31505]],[[116164,31235]],[[116171,31247]],[[116117,31453]],[[116109,31411]],[[116107,31416]]]}}],"UTF8Encoding":true});}));