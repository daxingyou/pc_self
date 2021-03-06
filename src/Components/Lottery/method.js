/*公用方法*/
import mobx from "mobx";
import {stateVar} from '../../State'
import  commone  from './commone.js'

/*获取玩法ID*/
const methodId = {
    2: 'ZX3',
    3: 'ZXHZ',
    5: 'ZX3',
    6: 'ZXHZ',
    8: 'ZUS',
    9: 'ZUL',
    10: 'HHZX',
    11: 'ZUHZ',
    13: 'ZUS',
    14: 'ZUL',
    15: 'HHZX',
    16: 'ZUHZ',
    18: 'BDW1',
    20: 'BDW2',
    513: 'BDW2',
    22: 'ZX2',
    26: 'ZU2',
    24: 'ZX2',
    28: 'ZU2',
    30: 'DWD',
    31: 'DWD',
    32: 'DWD',
    33: 'DWD',
    34: 'DWD',
    36: 'DXDS',
    38: 'DXDS',
    89: 'ZX3',
    92: 'ZXHZ',
    102: 'ZX3',
    103: 'ZXHZ',
    104: 'ZUS',
    105: 'ZUL',
    106: 'HHZX',
    107: 'ZUHZ',
    108: 'ZUS',
    109: 'ZUL',
    110: 'HHZX',
    111: 'ZUHZ',
    112: 'BDW1',
    113: 'BDW2',
    114: 'ZX2',
    115: 'ZX2',
    116: 'ZU2',
    117: 'ZU2',
    118: 'DWD',
    119: 'DWD',
    120: 'DWD',
    121: 'DWD',
    122: 'DWD',
    123: 'DXDS',
    124: 'DXDS',
    126: 'ZX3',
    127: 'ZXHZ',
    129: 'ZX3',
    130: 'ZXHZ',
    132: 'ZUS',
    133: 'ZUL',
    134: 'HHZX',
    135: 'ZUHZ',
    137: 'ZUS',
    138: 'ZUL',
    139: 'HHZX',
    140: 'ZUHZ',
    142: 'BDW1',
    144: 'BDW2',
    146: 'ZX2',
    148: 'ZX2',
    150: 'ZU2',
    152: 'ZU2',
    154: 'DWD',
    155: 'DWD',
    156: 'DWD',
    157: 'DWD',
    158: 'DWD',
    160: 'DXDS',
    162: 'DXDS',
    265: 'ZX3',
    266: 'ZXHZ',
    268: 'ZX3',
    269: 'ZXHZ',
    271: 'ZUS',
    272: 'ZUL',
    273: 'HHZX',
    274: 'ZUHZ',
    276: 'ZUS',
    277: 'ZUL',
    278: 'HHZX',
    279: 'ZUHZ',
    281: 'BDW1',
    283: 'BDW2',
    285: 'ZX2',
    287: 'ZX2',
    289: 'ZU2',
    291: 'ZU2',
    293: 'DWD',
    294: 'DWD',
    295: 'DWD',
    296: 'DWD',
    297: 'DWD',
    299: 'DXDS',
    301: 'DXDS',
    189: 'ZX3',
    190: 'ZXHZ',
    192: 'ZUS',
    193: 'ZUL',
    194: 'HHZX',
    195: 'ZUHZ',
    197: 'BDW1',
    199: 'ZX2',
    201: 'ZX2',
    203: 'ZU2',
    205: 'ZU2',
    261: 'DWD',
    262: 'DWD',
    263: 'DWD',
    472: 'ZXHZ2',
    474: 'ZXHZ2',
    476: 'ZUHZ2',
    478: 'ZUHZ2',//上海时时乐
    220: 'SDZX3',
    222: 'SDZU3',
    224: 'SDZX2',
    226: 'SDZU2',
    228: 'SDBDW',
    230: 'SDDWD',
    231: 'SDDWD',
    232: 'SDDWD',
    234: 'SDDDS',
    236: 'SDCZW',
    238: 'SDRX1',
    240: 'SDRX2',
    243: 'SDRX3',
    246: 'SDRX4',
    249: 'SDRX5',
    252: 'SDRX6',
    255: 'SDRX7',
    258: 'SDRX8',
    303: 'SDZX3',
    305: 'SDZU3',
    307: 'SDZX2',
    309: 'SDZU2',
    311: 'SDBDW',
    313: 'SDDWD',
    314: 'SDDWD',
    315: 'SDDWD',
    317: 'SDDDS',
    319: 'SDCZW',
    321: 'SDRX1',
    323: 'SDRX2',
    325: 'SDRX3',
    327: 'SDRX4',
    329: 'SDRX5',
    331: 'SDRX6',
    333: 'SDRX7',
    335: 'SDRX8',
    337: 'SDZX3',
    339: 'SDZU3',
    341: 'SDZX2',
    343: 'SDZU2',
    345: 'SDBDW',
    347: 'SDDWD',
    348: 'SDDWD',
    349: 'SDDWD',
    351: 'SDDDS',
    353: 'SDCZW',
    355: 'SDRX1',
    357: 'SDRX2',
    359: 'SDRX3',
    361: 'SDRX4',
    363: 'SDRX5',
    365: 'SDRX6',
    367: 'SDRX7',
    369: 'SDRX8',
    393: 'SDZX3',
    395: 'SDZU3',
    397: 'SDZX2',
    399: 'SDZU2',
    401: 'SDBDW',
    403: 'SDDWD',
    404: 'SDDWD',
    405: 'SDDWD',
    407: 'SDDDS',
    409: 'SDCZW',
    411: 'SDRX1',
    413: 'SDRX2',
    415: 'SDRX3',
    417: 'SDRX4',
    419: 'SDRX5',
    421: 'SDRX6',
    423: 'SDRX7',
    425: 'SDRX8',
    // 上海11选5
    3111838: 'SDZX3',//三码直选复试
    3111839: 'SDZU3',//三码组选复试
    3111840: 'SDZX2',//二码直选复试
    3111841: 'SDZU2',//二码组选复试
    3111842: 'SDBDW',//不定胆
    3111843: 'SDDWD',//定位胆
    3111846: 'SDDDS',//趣味型-订单双
    3111847: 'SDCZW',//趣味型-猜中位
    3111848: 'SDRX1',//任选复试一
    3111849: 'SDRX2',//任选复试二
    3111850: 'SDRX3',//任选复试三
    3111851: 'SDRX4',//任选复试四
    3111852: 'SDRX5',//任选复试五
    3111853: 'SDRX6',//任选复试六
    3111854: 'SDRX7',//任选复试七
    3111855: 'SDRX8',//任选复试八
    
    //加拿大11选5
    3114889 : 'SDZX3',//前三直选
    3114891 : 'SDZU3',//前三组选
    3114893 : 'SDZX2',//前二直选
    3114895 : 'SDZU2',//前二组选
    3114897 : 'SDBDW',//前三位
    3114899 : 'SDDWD',//第一位
    3114900 : 'SDDWD',//第二位
    3114901 : 'SDDWD',//第三位
    3114903 : 'SDDDS',//定单双
    3114905 : 'SDCZW',//猜中位
    3114907 : 'SDRX1',//任选一中一
    3114909 : 'SDRX2',//任选二中二
    3114911 : 'SDRX3',//任选三中三
    3114913 : 'SDRX4',//任选四中四
    3114915 : 'SDRX5',//任选五中五
    3114917 : 'SDRX6',//任选六中五
    3114919 : 'SDRX7',//任选七中五
    3114921 : 'SDRX8',//任选八中五

    //泰国11选5
    1010439: 'SDZX3',//三码直选复试
    1010440: 'SDZU3',//三码组选复试
    1010441: 'SDZX2',//二码直选复试
    1010442: 'SDZU2',//二码组选复试
    1010443: 'SDBDW',//不定胆
    1010444: 'SDDWD',//定位胆
    1010445: 'SDDWD',
    1010446: 'SDDWD',
    1010447: 'SDDDS',//趣味型-订单双
    1010448: 'SDCZW',//趣味型-猜中位
    1010449: 'SDRX1',//任选复试一
    1010450: 'SDRX2',//任选复试二
    1010451: 'SDRX3',//任选复试三
    1010452: 'SDRX4',//任选复试四
    1010453: 'SDRX5',//任选复试五
    1010454: 'SDRX6',//任选复试六
    1010455: 'SDRX7',//任选复试七
    1010456: 'SDRX8',//任选复试八

    2304: 'BJRX1',
    2305: 'BJRX2',
    2306: 'BJRX3',
    2307: 'BJRX4',
    2308: 'BJRX5',
    2309: 'BJRX6',
    2310: 'BJRX7',
    385: 'BJHZDS',
    387: 'BJHZDX',
    389: 'BJSXP',
    391: 'BJJOP',
    427: 'BJDXDS',//北京快乐8
    2274: 'ZX5',
    2267: 'ZH4',
    2265: 'ZX4',
    2269: 'SXZU24',
    2270: 'SXZU12',
    2271: 'SXZU6',
    2272: 'SXZU4',
    2276: 'ZH5',
    2278: 'WXZU120',
    2279: 'WXZU60',
    2280: 'WXZU30',
    2281: 'WXZU20',
    2282: 'WXZU10',
    2283: 'WXZU5',
    2285: 'BDW1',
    2286: 'HSCS',
    2287: 'SXBX',
    2288: 'SJFC',
    2291: 'ZX3',
    2292: 'ZXHZ',
    2293: 'ZUS',
    2294: 'ZUL',
    2295: 'HHZX',
    2296: 'ZUHZ',
    1189: 'ZX3',
    1190: 'ZXHZ',
    1192: 'ZUS',
    1193: 'ZUL',
    1194: 'HHZX',
    1195: 'ZUHZ',
    1197: 'BDW1',
    1199: 'ZX2',
    1201: 'ZX2',
    1203: 'ZU2',
    1205: 'ZU2',
    1261: 'DWD',
    1262: 'DWD',
    1263: 'DWD',//福彩3D
    2189: 'ZX3',
    2190: 'ZXHZ',
    2192: 'ZUS',
    2193: 'ZUL',
    2194: 'HHZX',
    2195: 'ZUHZ',
    2197: 'BDW1',
    2199: 'ZX2',
    2201: 'ZX2',
    2203: 'ZU2',
    2205: 'ZU2',
    2261: 'DWD',
    2262: 'DWD',
    2263: 'DWD',
    //天津时时彩
    2324: 'ZX3',
    2325: 'ZXHZ',
    2326: 'ZX3',
    2327: 'ZXHZ',
    2328: 'ZUS',
    2329: 'ZUL',
    2330: 'HHZX',
    2331: 'ZUHZ',
    2332: 'ZUS',
    2333: 'ZUL',
    2334: 'HHZX',
    2335: 'ZUHZ',
    2336: 'DBW1',
    2337: 'BDW2',
    2338: 'ZX2',
    2339: 'ZX2',
    2340: 'ZU2',
    2341: 'ZU2',
    2342: 'DWD',
    2343: 'DWD',
    2344: 'DWD',
    2345: 'DWD',
    2346: 'DWD',
    2347: 'DXDS',
    2348: 'DXDS',
    //24小时彩
    2368: 'ZX3',
    2369: 'ZXHZ',
    2370: 'ZX3',
    2371: 'ZXHZ',
    2372: 'ZUS',
    2373: 'ZUL',
    2374: 'HHZX',
    2375: 'ZUHZ',
    2376: 'ZU3BD',
    2377: 'ZUS',
    2378: 'ZUL',
    2379: 'HHZX',
    2380: 'ZUHZ',
    2381: 'ZU3BD',
    2382: 'BDW1',
    2383: 'BDW1',
    2384: 'BDW2',
    2385: 'BDW2',
    2386: 'ZX2',
    2387: 'ZX2',
    2388: 'ZXHZ2',
    2389: 'ZXHZ2',
    2390: 'ZU2',
    2391: 'ZU2',
    2392: 'ZUHZ2',
    2393: 'ZUHZ2',
    2394: 'DWD',
    2395: 'DWD',
    2396: 'DWD',
    2397: 'DWD',
    2398: 'DWD',
    2399: 'DXDS',
    2400: 'DXDS',
    2401: 'ZX4',
    2402: 'ZH4',
    2403: 'SXZU24',
    2404: 'SXZU12',
    2405: 'SXZU6',
    2406: 'SXZU4',
    2407: 'ZX5',
    2408: 'ZH5',
    2409: 'WXZU120',
    2410: 'WXZU60',
    2411: 'WXZU30',
    2412: 'WXZU20',
    2413: 'WXZU10',
    2414: 'WXZU5',
    2415: 'BDW1',
    2416: 'HSCS',
    2417: 'SXBX',
    2418: 'SJFC',
    2419: 'ZX3',
    2420: 'ZXHZ',
    2421: 'ZUS',
    2422: 'ZUL',
    2423: 'HHZX',
    2424: 'ZUHZ',
    //任选二-直选复式
    2427: "RXZXSSC2",
    2428: "RXZXSSC2",
    2429: "RXZXSSC2",
    2430: "RXZXSSC2",
    2431: "RXZXSSC2",
    2432: "RXZXSSC2",
    2433: "RXZXSSC2",
    2434: "RXZXSSC2",
    2435: "RXZXSSC2",
    2436: "RXZXSSC2",
    //任选二-组选复式
    2437: "RXZUSSC2",
    2438: "RXZUSSC2",
    2439: "RXZUSSC2",
    2440: "RXZUSSC2",
    2441: "RXZUSSC2",
    2442: "RXZUSSC2",
    2443: "RXZUSSC2",
    2444: "RXZUSSC2",
    2445: "RXZUSSC2",
    2446: "RXZUSSC2",
    //任选二-直选单式
    2447: 'RXZXSSC2DS',
    2448: 'RXZXSSC2DS',
    2449: 'RXZXSSC2DS',
    2450: 'RXZXSSC2DS',
    2451: 'RXZXSSC2DS',
    2452: 'RXZXSSC2DS',
    2453: 'RXZXSSC2DS',
    2454: 'RXZXSSC2DS',
    2455: 'RXZXSSC2DS',
    2456: 'RXZXSSC2DS',
    //任选二-组选单式
    2457: 'RXZUSSC2DS',
    2458: 'RXZUSSC2DS',
    2459: 'RXZUSSC2DS',
    2460: 'RXZUSSC2DS',
    2461: 'RXZUSSC2DS',
    2462: 'RXZUSSC2DS',
    2463: 'RXZUSSC2DS',
    2464: 'RXZUSSC2DS',
    2465: 'RXZUSSC2DS',
    2466: 'RXZUSSC2DS',
    //任选二-直选和值
    2476: 'RXZXSSC2HZ',
    2475: 'RXZXSSC2HZ',
    2474: 'RXZXSSC2HZ',
    2473: 'RXZXSSC2HZ',
    2472: 'RXZXSSC2HZ',
    2471: 'RXZXSSC2HZ',
    2470: 'RXZXSSC2HZ',
    2469: 'RXZXSSC2HZ',
    2468: 'RXZXSSC2HZ',
    2467: 'RXZXSSC2HZ',
    //任选二-组选和值
    2486: 'RXZUSSC2HZ',
    2485: 'RXZUSSC2HZ',
    2484: 'RXZUSSC2HZ',
    2483: 'RXZUSSC2HZ',
    2482: 'RXZUSSC2HZ',
    2481: 'RXZUSSC2HZ',
    2480: 'RXZUSSC2HZ',
    2479: 'RXZUSSC2HZ',
    2478: 'RXZUSSC2HZ',
    2477: 'RXZUSSC2HZ',
    //任选三直选复式
    1010101: 'RXZXSSC3',
    1010102: 'RXZXSSC3',
    1010103: 'RXZXSSC3',
    1010104: 'RXZXSSC3',
    1010105: 'RXZXSSC3',
    1010106: 'RXZXSSC3',
    1010107: 'RXZXSSC3',
    1010108: 'RXZXSSC3',
    1010109: 'RXZXSSC3',
    1010110: 'RXZXSSC3',
    //任选三直选单式
    1010111: 'RXZXSSC3DS',
    1010112: 'RXZXSSC3DS',
    1010113: 'RXZXSSC3DS',
    1010114: 'RXZXSSC3DS',
    1010115: 'RXZXSSC3DS',
    1010116: 'RXZXSSC3DS',
    1010117: 'RXZXSSC3DS',
    1010118: 'RXZXSSC3DS',
    1010119: 'RXZXSSC3DS',
    1010120: 'RXZXSSC3DS',
    //任选三直选和值
    1010121: 'RXZXSSC3HZ',
    1010122: 'RXZXSSC3HZ',
    1010123: 'RXZXSSC3HZ',
    1010124: 'RXZXSSC3HZ',
    1010125: 'RXZXSSC3HZ',
    1010126: 'RXZXSSC3HZ',
    1010127: 'RXZXSSC3HZ',
    1010128: 'RXZXSSC3HZ',
    1010129: 'RXZXSSC3HZ',
    1010130: 'RXZXSSC3HZ',
    //任选三组选三
    1010201: 'RXZUSANSSC3',
    1010202: 'RXZUSANSSC3',
    1010203: 'RXZUSANSSC3',
    1010204: 'RXZUSANSSC3',
    1010205: 'RXZUSANSSC3',
    1010206: 'RXZUSANSSC3',
    1010207: 'RXZUSANSSC3',
    1010208: 'RXZUSANSSC3',
    1010209: 'RXZUSANSSC3',
    1010210: 'RXZUSANSSC3',
    //任选三组选六
    1010211: 'RXZUSIXSSC3',
    1010212: 'RXZUSIXSSC3',
    1010213: 'RXZUSIXSSC3',
    1010214: 'RXZUSIXSSC3',
    1010215: 'RXZUSIXSSC3',
    1010216: 'RXZUSIXSSC3',
    1010217: 'RXZUSIXSSC3',
    1010218: 'RXZUSIXSSC3',
    1010219: 'RXZUSIXSSC3',
    1010220: 'RXZUSIXSSC3',
    //任选三混合组选
    1010221: 'RXZUSSC3HH',
    1010222: 'RXZUSSC3HH',
    1010223: 'RXZUSSC3HH',
    1010224: 'RXZUSSC3HH',
    1010225: 'RXZUSSC3HH',
    1010226: 'RXZUSSC3HH',
    1010227: 'RXZUSSC3HH',
    1010228: 'RXZUSSC3HH',
    1010229: 'RXZUSSC3HH',
    1010230: 'RXZUSSC3HH',
    //任选三组选和值
    1010231: 'RXZUSSC3HZ',
    1010232: 'RXZUSSC3HZ',
    1010233: 'RXZUSSC3HZ',
    1010234: 'RXZUSSC3HZ',
    1010235: 'RXZUSSC3HZ',
    1010236: 'RXZUSSC3HZ',
    1010237: 'RXZUSSC3HZ',
    1010238: 'RXZUSSC3HZ',
    1010239: 'RXZUSSC3HZ',
    1010240: 'RXZUSSC3HZ',
    //任选四直选复式
    1010301: 'RXZXSSC4',
    1010302: 'RXZXSSC4',
    1010303: 'RXZXSSC4',
    1010304: 'RXZXSSC4',
    1010305: 'RXZXSSC4',
    //任选四直选单式
    1010306: 'RXZXSSC4DS',
    1010307: 'RXZXSSC4DS',
    1010308: 'RXZXSSC4DS',
    1010309: 'RXZXSSC4DS',
    1010310: 'RXZXSSC4DS',
    //任选四组选24
    1010401: 'RXZU24SSC4',
    1010402: 'RXZU24SSC4',
    1010403: 'RXZU24SSC4',
    1010404: 'RXZU24SSC4',
    1010405: 'RXZU24SSC4',
    //任选四组选12
    1010406: 'RXZU12SSC4',
    1010407: 'RXZU12SSC4',
    1010408: 'RXZU12SSC4',
    1010409: 'RXZU12SSC4',
    1010410: 'RXZU12SSC4',
    //任选四组选6
    1010411: 'RXZU6SSC4',
    1010412: 'RXZU6SSC4',
    1010413: 'RXZU6SSC4',
    1010414: 'RXZU6SSC4',
    1010415: 'RXZU6SSC4',
    //任选四组选4
    1010416: 'RXZU4SSC4',
    1010417: 'RXZU4SSC4',
    1010418: 'RXZU4SSC4',
    1010419: 'RXZU4SSC4',
    1010420: 'RXZU4SSC4',
    //泰国五分彩
    //任选二-直选复式
    3010101: "RXZXWFC2",
    3010102: "RXZXWFC2",
    3010103: "RXZXWFC2",
    3010104: "RXZXWFC2",
    3010105: "RXZXWFC2",
    3010106: "RXZXWFC2",
    3010107: "RXZXWFC2",
    3010108: "RXZXWFC2",
    3010109: "RXZXWFC2",
    3010110: "RXZXWFC2",
    //任选二-组选复式
    3010201: "RXZUWFC2",
    3010202: "RXZUWFC2",
    3010203: "RXZUWFC2",
    3010204: "RXZUWFC2",
    3010205: "RXZUWFC2",
    3010206: "RXZUWFC2",
    3010207: "RXZUWFC2",
    3010208: "RXZUWFC2",
    3010209: "RXZUWFC2",
    3010230: "RXZUWFC2",
    //任选二-直选单式
    3010111: 'RXZXWFC2DS',
    3010112: 'RXZXWFC2DS',
    3010113: 'RXZXWFC2DS',
    3010114: 'RXZXWFC2DS',
    3010115: 'RXZXWFC2DS',
    3010116: 'RXZXWFC2DS',
    3010117: 'RXZXWFC2DS',
    3010118: 'RXZXWFC2DS',
    3010119: 'RXZXWFC2DS',
    3010120: 'RXZXWFC2DS',
    //任选二-组选单式
    3010211: 'RXZUWFC2DS',
    3010212: 'RXZUWFC2DS',
    3010213: 'RXZUWFC2DS',
    3010214: 'RXZUWFC2DS',
    3010215: 'RXZUWFC2DS',
    3010216: 'RXZUWFC2DS',
    3010217: 'RXZUWFC2DS',
    3010218: 'RXZUWFC2DS',
    3010219: 'RXZUWFC2DS',
    3010220: 'RXZUWFC2DS',
    //任选二-直选和值
    3010121: 'RXZXWFC2HZ',
    3010122: 'RXZXWFC2HZ',
    3010123: 'RXZXWFC2HZ',
    3010124: 'RXZXWFC2HZ',
    3010125: 'RXZXWFC2HZ',
    3010126: 'RXZXWFC2HZ',
    3010127: 'RXZXWFC2HZ',
    3010128: 'RXZXWFC2HZ',
    3010129: 'RXZXWFC2HZ',
    3010130: 'RXZXWFC2HZ',
    //任选二-组选和值
    3010221: 'RXZUWFC2HZ',
    3010222: 'RXZUWFC2HZ',
    3010223: 'RXZUWFC2HZ',
    3010224: 'RXZUWFC2HZ',
    3010225: 'RXZUWFC2HZ',
    3010226: 'RXZUWFC2HZ',
    3010227: 'RXZUWFC2HZ',
    3010228: 'RXZUWFC2HZ',
    3010229: 'RXZUWFC2HZ',
    3010230: 'RXZUWFC2HZ',
    //任选三直选复式
    3010301: 'RXZXWFC3',
    3010302: 'RXZXWFC3',
    3010303: 'RXZXWFC3',
    3010304: 'RXZXWFC3',
    3010305: 'RXZXWFC3',
    3010306: 'RXZXWFC3',
    3010307: 'RXZXWFC3',
    3010308: 'RXZXWFC3',
    3010309: 'RXZXWFC3',
    3010310: 'RXZXWFC3',
    //任选三直选单式
    3010311: 'RXZXWFC3DS',
    3010312: 'RXZXWFC3DS',
    3010313: 'RXZXWFC3DS',
    3010314: 'RXZXWFC3DS',
    3010315: 'RXZXWFC3DS',
    3010316: 'RXZXWFC3DS',
    3010317: 'RXZXWFC3DS',
    3010318: 'RXZXWFC3DS',
    3010319: 'RXZXWFC3DS',
    3010320: 'RXZXWFC3DS',
    //任选三直选和值
    3010321: 'RXZXWFC3HZ',
    3010322: 'RXZXWFC3HZ',
    3010323: 'RXZXWFC3HZ',
    3010324: 'RXZXWFC3HZ',
    3010325: 'RXZXWFC3HZ',
    3010326: 'RXZXWFC3HZ',
    3010327: 'RXZXWFC3HZ',
    3010328: 'RXZXWFC3HZ',
    3010329: 'RXZXWFC3HZ',
    3010330: 'RXZXWFC3HZ',
    //任选三组选三
    3010401: 'RXZUSANWFC3',
    3010402: 'RXZUSANWFC3',
    3010403: 'RXZUSANWFC3',
    3010404: 'RXZUSANWFC3',
    3010405: 'RXZUSANWFC3',
    3010406: 'RXZUSANWFC3',
    3010407: 'RXZUSANWFC3',
    3010408: 'RXZUSANWFC3',
    3010409: 'RXZUSANWFC3',
    3010410: 'RXZUSANWFC3',
    //任选三组选六
    3010411: 'RXZUSIXWFC3',
    3010412: 'RXZUSIXWFC3',
    3010413: 'RXZUSIXWFC3',
    3010414: 'RXZUSIXWFC3',
    3010415: 'RXZUSIXWFC3',
    3010416: 'RXZUSIXWFC3',
    3010417: 'RXZUSIXWFC3',
    3010418: 'RXZUSIXWFC3',
    3010419: 'RXZUSIXWFC3',
    3010420: 'RXZUSIXWFC3',
    //任选三混合组选
    3010421: 'RXZUWFC3HH',
    3010422: 'RXZUWFC3HH',
    3010423: 'RXZUWFC3HH',
    3010424: 'RXZUWFC3HH',
    3010425: 'RXZUWFC3HH',
    3010426: 'RXZUWFC3HH',
    3010427: 'RXZUWFC3HH',
    3010428: 'RXZUWFC3HH',
    3010429: 'RXZUWFC3HH',
    3010430: 'RXZUWFC3HH',
    //任选三组选和值
    3010431: 'RXZUWFC3HZ',
    3010432: 'RXZUWFC3HZ',
    3010433: 'RXZUWFC3HZ',
    3010434: 'RXZUWFC3HZ',
    3010435: 'RXZUWFC3HZ',
    3010436: 'RXZUWFC3HZ',
    3010437: 'RXZUWFC3HZ',
    3010438: 'RXZUWFC3HZ',
    3010439: 'RXZUWFC3HZ',
    3010440: 'RXZUWFC3HZ',
    //任选四直选复式
    3010501: 'RXZXWFC4',
    3010502: 'RXZXWFC4',
    3010503: 'RXZXWFC4',
    3010504: 'RXZXWFC4',
    3010505: 'RXZXWFC4',
    //任选四直选单式
    3010506: 'RXZXWFC4DS',
    3010507: 'RXZXWFC4DS',
    3010508: 'RXZXWFC4DS',
    3010509: 'RXZXWFC4DS',
    3010510: 'RXZXWFC4DS',
    //任选四组选24
    3010601: 'RXZU24WFC4',
    3010602: 'RXZU24WFC4',
    3010603: 'RXZU24WFC4',
    3010604: 'RXZU24WFC4',
    3010605: 'RXZU24WFC4',
    //任选四组选12
    3010606: 'RXZU12WFC4',
    3010607: 'RXZU12WFC4',
    3010608: 'RXZU12WFC4',
    3010609: 'RXZU12WFC4',
    3010610: 'RXZU12WFC4',
    //任选四组选6
    3010611: 'RXZU6WFC4',
    3010612: 'RXZU6WFC4',
    3010613: 'RXZU6WFC4',
    3010614: 'RXZU6WFC4',
    3010615: 'RXZU6WFC4',
    //任选四组选4
    3010616: 'RXZU4WFC4',
    3010617: 'RXZU4WFC4',
    3010618: 'RXZU4WFC4',
    3010619: 'RXZU4WFC4',
    3010620: 'RXZU4WFC4',
    //泰国分分彩
    190101: 'ZX3',
    190102: 'ZXHZ',
    190201: 'ZX3',
    190202: 'ZXHZ',
    190301: 'ZUS',
    190302: 'ZUL',
    190303: 'HHZX',
    190304: 'ZUHZ',
    190401: 'ZUS',
    190402: 'ZUL',
    190403: 'HHZX',
    190404: 'ZUHZ',
    190501: 'BDW1',
    190502: 'BDW1',
    190601: 'BDW2',
    190602: 'BDW2',
    190701: 'ZX2',
    190702: 'ZX2',
    190703: 'ZXHZ2',
    190704: 'ZXHZ2',
    190801: 'ZU2',
    190802: 'ZU2',
    190803: 'ZUHZ2',
    190804: 'ZUHZ2',
    190901: 'DWD',
    190902: 'DWD',
    190903: 'DWD',
    190904: 'DWD',
    190905: 'DWD',
    191001: 'DXDS',
    191002: 'DXDS',
    191101: 'ZX4',
    191201: 'ZH4',
    191301: 'SXZU24',
    191302: 'SXZU12',
    191303: 'SXZU6',
    191304: 'SXZU4',
    191401: 'ZX5',
    191501: 'ZH5',
    191601: 'WXZU120',
    191602: 'WXZU60',
    191603: 'WXZU30',
    191604: 'WXZU20',
    191605: 'WXZU10',
    191606: 'WXZU5',
    191701: 'BDW1',
    191702: 'HSCS',
    191703: 'SXBX',
    191704: 'SJFC',
    191801: 'ZX3',
    191802: 'ZXHZ',
    191901: 'ZUS',
    191902: 'ZUL',
    191903: 'HHZX',
    191904: 'ZUHZ',

	//瑞典一分彩
	3113163:'ZX3',
	3113160:'ZX3',
	3113235:'ZX3',
	3113164:'ZXHZ',
	3113161:'ZXHZ',
	3113236:'ZXHZ',
	3113173:'ZUS',
	3113166:'ZUS',
	3113238:'ZUS',
	3113174:'ZUL',
	3113167:'ZUL',
	3113239:'ZUL',
	3113175:'HHZX',
	3113168:'HHZX',
	3113240:'HHZX',
	3113176:'ZUHZ',
	3113169:'ZUHZ',
	3113241:'ZUHZ',
	3113187:'ZX2',
	3113186:'ZX2',
	3113189:'ZXHZ2',
	3113188:'ZXHZ2',
	3113194:'ZU2',
	3113193:'ZU2',
	3113196:'ZUHZ2',
	3113195:'ZUHZ2',
	3113200:'DWD',
	3113180:'BDW1',
	3113181:'BDW1',
	3113183:'BDW2',
	3113184:'BDW2',
	3113208:'DXDS',
	3113207:'DXDS',
	3113210:'ZX4',
	3113211:'ZH4',
	3113212: 'SXZU24',
    3113213: 'SXZU12',
    3113214:  'SXZU6',
    3113215:  'SXZU4',
    3113219:  'ZX5',
    3113220:  'ZH5',
    3113221: 'WXZU120',
    3113222:  'WXZU60',
    3113223:  'WXZU30',
    3113224:  'WXZU20',
    3113225:  'WXZU10',
    3113226: 'WXZU5',
    3113245: 'RXZXSSC2',
    3113255: 'RXZXSSC2DS',
    3113265: 'RXZXSSC2HZ',
    3113276: 'RXZUSSC2',
    3113286: 'RXZUSSC2DS',
    3113296: 'RXZUSSC2HZ',
    3113307: 'RXZXSSC3',
    3113317: 'RXZXSSC3DS',
    3113327: 'RXZXSSC3HZ',
    3113338: 'RXZUSANSSC3',
    3113348: 'RXZUSIXSSC3',
    3113358: 'RXZUWFC3HH',
    3113368: 'RXZUWFC3HZ',
    3113401: 'RXZXWFC4',
    3113406: 'RXZXWFC4DS',
    3113416: 'RXZU24WFC4',
    3113421: 'RXZU12WFC4',
    3113426: 'RXZU6WFC4',
    3113431: 'RXZU4WFC4',
    
    //瑞典2分彩
    3114429 : 'ZX3',//前三直选
    3114431 : 'ZX3',//后三直选
    3114480 : 'ZX3',//中三直选
    3114430 : 'ZXHZ',//前三直选_和值
    3114432 : 'ZXHZ',//后三直选_和值
    3114481 : 'ZXHZ',//中三直选_和值
    3114482 : 'ZUS',//中三组选_组三
    3114433 : 'ZUS',//前三组选_组三
    3114438 : 'ZUS',//后三组选_组三
    3114483 : 'ZUL',//中三组选_组六
    3114434 : 'ZUL',//前三组选_组六
    3114439 : 'ZUL',//后三组选_组六
    3114484 : 'HHZX',//中三组选_混合
    3114440 : 'HHZX',//后三组选_混合
    3114435 : 'HHZX',//前三组选_混合
    3114485 : 'ZUHZ',//中三组选_和值
    3114436 : 'ZUHZ',//前三组选_和值
    3114441 : 'ZUHZ',//后三组选_和值
    3114443 : 'BDW1',//后三一码不定胆
    3114444 : 'BDW1',//前三一码不定胆
    3114445 : 'BDW2',//后三二码不定胆
    3114446 : 'BDW2',//前三二码不定胆
    3114447 : 'ZX2',//前二直选
    3114448 : 'ZX2',//后二直选
    3114449 : 'ZXHZ2',//前二直选和值
    3114450 : 'ZXHZ2',//后二直选和值
    3114451 : 'ZU2',//前二组选
    3114452 : 'ZU2',//后二组选
    3114453 : 'ZUHZ2',//前二组选和值
    3114454 : 'ZUHZ2',//后二组选和值
    3114455 : 'DWD',//万位
    3114456 : 'DWD',//千位
    3114457 : 'DWD',//百位
    3114458 : 'DWD',//十位
    3114459 : 'DWD',//个位
    3114460 : 'DXDS',//前二大小单双
    3114461 : 'DXDS',//后二大小单双
    3114462 : 'ZX4',//四星直选
    3114463 : 'ZH4',//四星组合
    3114464 : 'SXZU24',//组选24
    3114465 : 'SXZU12',//组选12
    3114466 : 'SXZU6',//组选6
    3114467 : 'SXZU4',//组选4
    3114468 : 'ZX5',//五星直选
    3114469 : 'ZH5',//五星组合
    3114470 : 'WXZU120',//五星组选120
    3114471 : 'WXZU60',//五星组选60
    3114472 : 'WXZU30',//五星组选30
    3114473 : 'WXZU20',//五星组选20
    3114474 : 'WXZU10',//五星组选10
    3114475 : 'WXZU5',//五星组选5
    3114476 : 'BDW1',//一帆风顺
    3114477 : 'HSCS',//好事成双
    3114478 : 'SXBX',//三星报喜
    3114479 : 'SJFC',//四季发财
    3114486 : 'RXZXSSC2',//万千直选复式
    3114487 : 'RXZXSSC2',//万百直选复式
    3114488 : 'RXZXSSC2',//万十直选复式
    3114489 : 'RXZXSSC2',//万个直选复式
    3114490 : 'RXZXSSC2',//千百直选复式
    3114491 : 'RXZXSSC2',//千十直选复式
    3114492 : 'RXZXSSC2',//千个直选复式
    3114493 : 'RXZXSSC2',//百十直选复式
    3114494 : 'RXZXSSC2',//百个直选复式
    3114495 : 'RXZXSSC2',//十个直选复式
    3114496 : 'RXZXSSC2DS',//万千直选单式
    3114497 : 'RXZXSSC2DS',//万百直选单式
    3114498 : 'RXZXSSC2DS',//万十直选单式
    3114499 : 'RXZXSSC2DS',//万个直选单式
    3114500 : 'RXZXSSC2DS',//千百直选单式
    3114501 : 'RXZXSSC2DS',//千十直选单式
    3114502 : 'RXZXSSC2DS',//千个直选单式
    3114503 : 'RXZXSSC2DS',//百十直选单式
    3114504 : 'RXZXSSC2DS',//百个直选单式
    3114505 : 'RXZXSSC2DS',//十个直选单式
    3114506 : 'RXZXSSC2HZ',//万千直选和值
    3114507 : 'RXZXSSC2HZ',//万百直选和值
    3114508 : 'RXZXSSC2HZ',//万十直选和值
    3114509 : 'RXZXSSC2HZ',//万个直选和值
    3114510 : 'RXZXSSC2HZ',//千百直选和值
    3114511 : 'RXZXSSC2HZ',//千十直选和值
    3114512 : 'RXZXSSC2HZ',//千个直选和值
    3114513 : 'RXZXSSC2HZ',//百十直选和值
    3114514 : 'RXZXSSC2HZ',//百个直选和值
    3114515 : 'RXZXSSC2HZ',//十个直选和值
    3114516 : 'RXZUSSC2',//万千组选复式
    3114517 : 'RXZUSSC2',//万百组选复式
    3114518 : 'RXZUSSC2',//万十组选复式
    3114519 : 'RXZUSSC2',//万个组选复式
    3114520 : 'RXZUSSC2',//千百组选复式
    3114521 : 'RXZUSSC2',//千十组选复式
    3114522 : 'RXZUSSC2',//千个组选复式
    3114523 : 'RXZUSSC2',//百十组选复式
    3114524 : 'RXZUSSC2',//百个组选复式
    3114525 : 'RXZUSSC2',//十个组选复式
    3114526 : 'RXZUSSC2DS',//万千组选单式
    3114527 : 'RXZUSSC2DS',//万百组选单式
    3114528 : 'RXZUSSC2DS',//万十组选单式
    3114529 : 'RXZUSSC2DS',//万个组选单式
    3114530 : 'RXZUSSC2DS',//千百组选单式
    3114531 : 'RXZUSSC2DS',//千十组选单式
    3114532 : 'RXZUSSC2DS',//千个组选单式
    3114533 : 'RXZUSSC2DS',//百十组选单式
    3114534 : 'RXZUSSC2DS',//百个组选单式
    3114535 : 'RXZUSSC2DS',//十个组选单式
    3114536 : 'RXZUSSC2HZ',//万千组选和值
    3114537 : 'RXZUSSC2HZ',//万百组选和值
    3114538 : 'RXZUSSC2HZ',//万十组选和值
    3114539 : 'RXZUSSC2HZ',//万个组选和值
    3114540 : 'RXZUSSC2HZ',//千百组选和值
    3114541 : 'RXZUSSC2HZ',//千十组选和值
    3114542 : 'RXZUSSC2HZ',//千个组选和值
    3114543 : 'RXZUSSC2HZ',//百十组选和值
    3114544 : 'RXZUSSC2HZ',//百个组选和值
    3114545 : 'RXZUSSC2HZ',//十个组选和值
    3114546 : 'RXZXSSC3',//百十个直选复式
    3114547 : 'RXZXSSC3',//千十个直选复式
    3114548 : 'RXZXSSC3',//千百个直选复式
    3114549 : 'RXZXSSC3',//千百十直选复式
    3114550 : 'RXZXSSC3',//万十个直选复式
    3114551 : 'RXZXSSC3',//万百个直选复式
    3114552 : 'RXZXSSC3',//万百十直选复式
    3114553 : 'RXZXSSC3',//万千个直选复式
    3114554 : 'RXZXSSC3',//万千十直选复式
    3114555 : 'RXZXSSC3',//万千百直选复式
    3114556 : 'RXZXSSC3DS',//百十个直选单式
    3114557 : 'RXZXSSC3DS',//千十个直选单式
    3114558 : 'RXZXSSC3DS',//千百个直选单式
    3114559 : 'RXZXSSC3DS',//千百十直选单式
    3114560 : 'RXZXSSC3DS',//万十个直选单式
    3114561 : 'RXZXSSC3DS',//万百个直选单式
    3114562 : 'RXZXSSC3DS',//万百十直选单式
    3114563 : 'RXZXSSC3DS',//万千个直选单式
    3114564 : 'RXZXSSC3DS',//万千十直选单式
    3114565 : 'RXZXSSC3DS',//万千百直选单式
    3114566 : 'RXZXSSC3HZ',//百十个直选和值
    3114567 : 'RXZXSSC3HZ',//千十个直选和值
    3114568 : 'RXZXSSC3HZ',//千百个直选和值
    3114569 : 'RXZXSSC3HZ',//千百十直选和值
    3114570 : 'RXZXSSC3HZ',//万十个直选和值
    3114571 : 'RXZXSSC3HZ',//万百个直选和值
    3114572 : 'RXZXSSC3HZ',//万百十直选和值
    3114573 : 'RXZXSSC3HZ',//万千个直选和值
    3114574 : 'RXZXSSC3HZ',//万千十直选和值
    3114575 : 'RXZXSSC3HZ',//万千百直选和值
    3114576 : 'RXZUSANSSC3',//万千百组选组三
    3114577 : 'RXZUSANSSC3',//万千十组选组三
    3114578 : 'RXZUSANSSC3',//万千个组选组三
    3114579 : 'RXZUSANSSC3',//万百十组选组三
    3114580 : 'RXZUSANSSC3',//万百个组选组三
    3114581 : 'RXZUSANSSC3',//万十个组选组三
    3114582 : 'RXZUSANSSC3',//千百十组选组三
    3114583 : 'RXZUSANSSC3',//千百个组选组三
    3114584 : 'RXZUSANSSC3',//千十个组选组三
    3114585 : 'RXZUSANSSC3',//百十个组选组三
    3114586 : 'RXZUSIXSSC3',//万千百组选组六
    3114587 : 'RXZUSIXSSC3',//万千十组选组六
    3114588 : 'RXZUSIXSSC3',//万千个组选组六
    3114589 : 'RXZUSIXSSC3',//万百十组选组六
    3114590 : 'RXZUSIXSSC3',//万百个组选组六
    3114591 : 'RXZUSIXSSC3',//万十个组选组六
    3114592 : 'RXZUSIXSSC3',//千百十组选组六
    3114593 : 'RXZUSIXSSC3',//千百个组选组六
    3114594 : 'RXZUSIXSSC3',//千十个组选组六
    3114595 : 'RXZUSIXSSC3',//百十个组选组六
    3114596 : 'RXZUSSC3HH',//万千百混合组选
    3114597 : 'RXZUSSC3HH',//万千十混合组选
    3114598 : 'RXZUSSC3HH',//万千个混合组选
    3114599 : 'RXZUSSC3HH',//万百十混合组选
    3114600 : 'RXZUSSC3HH',//万百个混合组选
    3114601 : 'RXZUSSC3HH',//万十个混合组选
    3114602 : 'RXZUSSC3HH',//千百十混合组选
    3114603 : 'RXZUSSC3HH',//千百个混合组选
    3114604 : 'RXZUSSC3HH',//千十个混合组选
    3114605 : 'RXZUSSC3HH',//百十个混合组选
    3114606 : 'RXZUSSC3HZ',//万千百组选和值
    3114607 : 'RXZUSSC3HZ',//万千十组选和值
    3114608 : 'RXZUSSC3HZ',//万千个组选和值
    3114609 : 'RXZUSSC3HZ',//万百十组选和值
    3114610 : 'RXZUSSC3HZ',//万百个组选和值
    3114611 : 'RXZUSSC3HZ',//万十个组选和值
    3114612 : 'RXZUSSC3HZ',//千百十组选和值
    3114613 : 'RXZUSSC3HZ',//千百个组选和值
    3114614 : 'RXZUSSC3HZ',//千十个组选和值
    3114615 : 'RXZUSSC3HZ',//百十个组选和值
    3114616 : 'RXZXSSC4',//万千百十直选复式
    3114617 : 'RXZXSSC4',//万千百个直选复式
    3114618 : 'RXZXSSC4',//万千十个直选复式
    3114619 : 'RXZXSSC4',//万百十个直选复式
    3114620 : 'RXZXSSC4',//千百十个直选复式
    3114621 : 'RXZXSSC4DS',//万千百十直选单式
    3114622 : 'RXZXSSC4DS',//万千百个直选单式
    3114623 : 'RXZXSSC4DS',//万千十个直选单式
    3114624 : 'RXZXSSC4DS',//万百十个直选单式
    3114625 : 'RXZXSSC4DS',//千百十个直选单式
    3114626 : 'RXZU24SSC4',//万千百十组选24
    3114627 : 'RXZU24SSC4',//万千百个组选24
    3114628 : 'RXZU24SSC4',//万千十个组选24
    3114629 : 'RXZU24SSC4',//万百十个组选24
    3114630 : 'RXZU24SSC4',//千百十个组选24
    3114631 : 'RXZU12SSC4',//万千百十组选12
    3114632 : 'RXZU12SSC4',//万千百个组选12
    3114633 : 'RXZU12SSC4',//万千十个组选12
    3114634 : 'RXZU12SSC4',//万百十个组选12
    3114635 : 'RXZU12SSC4',//千百十个组选12
    3114636 : 'RXZU6SSC4',//万千百十组选6
    3114637 : 'RXZU6SSC4',//万千百个组选6
    3114638 : 'RXZU6SSC4',//万千十个组选6
    3114639 : 'RXZU6SSC4',//万百十个组选6
    3114640 : 'RXZU6SSC4',//千百十个组选6
    3114641 : 'RXZU4SSC4',//万千百十组选4
    3114642 : 'RXZU4SSC4',//万千百个组选4
    3114643 : 'RXZU4SSC4',//万千十个组选4
    3114644 : 'RXZU4SSC4',//万百十个组选4
    3114645 : 'RXZU4SSC4',//千百十个组选4
    
    //河内5分彩
    3114671 : 'ZX3',//前三直选
    3114672 : 'ZXHZ',//前三直选_和值
    3114673 : 'ZX3',//后三直选
    3114674 : 'ZXHZ',//后三直选_和值
    3114675 : 'ZUS',//前三组选_组三
    3114676 : 'ZUL',//前三组选_组六
    3114677 : 'HHZX',//前三组选_混合
    3114678 : 'ZUHZ',//前三组选_和值
    3114680 : 'ZUS',//后三组选_组三
    3114681 : 'ZUL',//后三组选_组六
    3114682 : 'HHZX',//后三组选_混合
    3114683 : 'ZUHZ',//后三组选_和值
    3114685 : 'BDW1',//后三一码不定胆
    3114686 : 'BDW1',//前三一码不定胆
    3114687 : 'BDW2',//后三二码不定胆
    3114688 : 'BDW2',//前三二码不定胆
    3114689 : 'ZX2',//前二直选
    3114690 : 'ZX2',//后二直选
    3114691 : 'ZXHZ2',//前二直选和值
    3114692 : 'ZXHZ2',//后二直选和值
    3114693 : 'ZU2',//前二组选
    3114694 : 'ZU2',//后二组选
    3114695 : 'ZUHZ2',//前二组选和值
    3114696 : 'ZUHZ2',//后二组选和值
    3114697 : 'DWD',//万位
    3114698 : 'DWD',//千位
    3114699 : 'DWD',//百位
    3114700 : 'DWD',//十位
    3114701 : 'DWD',//个位
    3114702 : 'DXDS',//前二大小单双
    3114703 : 'DXDS',//后二大小单双
    3114704 : 'ZX4',//四星直选
    3114705 : 'ZH4',//四星组合
    3114706 : 'SXZU24',//组选24
    3114707 : 'SXZU12',//组选12
    3114708 : 'SXZU6',//组选6
    3114709 : 'SXZU4',//组选4
    3114710 : 'ZX5',//五星直选
    3114711 : 'ZH5',//五星组合
    3114712 : 'WXZU120',//五星组选120
    3114713 : 'WXZU60',//五星组选60
    3114714 : 'WXZU30',//五星组选30
    3114715 : 'WXZU20',//五星组选20
    3114716 : 'WXZU10',//五星组选10
    3114717 : 'WXZU5',//五星组选5
    3114718 : 'BDW1',//一帆风顺
    3114719 : 'HSCS',//好事成双
    3114720 : 'SXBX',//三星报喜
    3114721 : 'SJFC',//四季发财
    3114722 : 'ZX3',//中三直选
    3114723 : 'ZXHZ',//中三直选_和值
    3114724 : 'ZUS',//中三组选_组三
    3114725 : 'ZUL',//中三组选_组六
    3114726 : 'HHZX',//中三组选_混合
    3114727 : 'ZUHZ',//中三组选_和值
    3114728 : 'RXZXSSC2',//万千直选复式
    3114729 : 'RXZXSSC2',//万百直选复式
    3114730 : 'RXZXSSC2',//万十直选复式
    3114731 : 'RXZXSSC2',//万个直选复式
    3114732 : 'RXZXSSC2',//千百直选复式
    3114733 : 'RXZXSSC2',//千十直选复式
    3114734 : 'RXZXSSC2',//千个直选复式
    3114735 : 'RXZXSSC2',//百十直选复式
    3114736 : 'RXZXSSC2',//百个直选复式
    3114737 : 'RXZXSSC2',//十个直选复式
    3114738 : 'RXZXSSC2DS',//万千直选单式
    3114739 : 'RXZXSSC2DS',//万百直选单式
    3114740 : 'RXZXSSC2DS',//万十直选单式
    3114741 : 'RXZXSSC2DS',//万个直选单式
    3114742 : 'RXZXSSC2DS',//千百直选单式
    3114743 : 'RXZXSSC2DS',//千十直选单式
    3114744 : 'RXZXSSC2DS',//千个直选单式
    3114745 : 'RXZXSSC2DS',//百十直选单式
    3114746 : 'RXZXSSC2DS',//百个直选单式
    3114747 : 'RXZXSSC2DS',//十个直选单式
    3114748 : 'RXZXSSC2HZ',//万千直选和值
    3114749 : 'RXZXSSC2HZ',//万百直选和值
    3114750 : 'RXZXSSC2HZ',//万十直选和值
    3114751 : 'RXZXSSC2HZ',//万个直选和值
    3114752 : 'RXZXSSC2HZ',//千百直选和值
    3114753 : 'RXZXSSC2HZ',//千十直选和值
    3114754 : 'RXZXSSC2HZ',//千个直选和值
    3114755 : 'RXZXSSC2HZ',//百十直选和值
    3114756 : 'RXZXSSC2HZ',//百个直选和值
    3114757 : 'RXZXSSC2HZ',//十个直选和值
    3114758 : 'RXZUSSC2',//万千组选复式
    3114759 : 'RXZUSSC2',//万百组选复式
    3114760 : 'RXZUSSC2',//万十组选复式
    3114761 : 'RXZUSSC2',//万个组选复式
    3114762 : 'RXZUSSC2',//千百组选复式
    3114763 : 'RXZUSSC2',//千十组选复式
    3114764 : 'RXZUSSC2',//千个组选复式
    3114765 : 'RXZUSSC2',//百十组选复式
    3114766 : 'RXZUSSC2',//百个组选复式
    3114767 : 'RXZUSSC2',//十个组选复式
    3114768 : 'RXZUSSC2DS',//万千组选单式
    3114769 : 'RXZUSSC2DS',//万百组选单式
    3114770 : 'RXZUSSC2DS',//万十组选单式
    3114771 : 'RXZUSSC2DS',//万个组选单式
    3114772 : 'RXZUSSC2DS',//千百组选单式
    3114773 : 'RXZUSSC2DS',//千十组选单式
    3114774 : 'RXZUSSC2DS',//千个组选单式
    3114775 : 'RXZUSSC2DS',//百十组选单式
    3114776 : 'RXZUSSC2DS',//百个组选单式
    3114777 : 'RXZUSSC2DS',//十个组选单式
    3114778 : 'RXZUSSC2HZ',//万千组选和值
    3114779 : 'RXZUSSC2HZ',//万百组选和值
    3114780 : 'RXZUSSC2HZ',//万十组选和值
    3114781 : 'RXZUSSC2HZ',//万个组选和值
    3114782 : 'RXZUSSC2HZ',//千百组选和值
    3114783 : 'RXZUSSC2HZ',//千十组选和值
    3114784 : 'RXZUSSC2HZ',//千个组选和值
    3114785 : 'RXZUSSC2HZ',//百十组选和值
    3114786 : 'RXZUSSC2HZ',//百个组选和值
    3114787 : 'RXZUSSC2HZ',//十个组选和值
    3114788 : 'RXZXSSC3',//百十个直选复式
    3114789 : 'RXZXSSC3',//千十个直选复式
    3114790 : 'RXZXSSC3',//千百个直选复式
    3114791 : 'RXZXSSC3',//千百十直选复式
    3114792 : 'RXZXSSC3',//万十个直选复式
    3114793 : 'RXZXSSC3',//万百个直选复式
    3114794 : 'RXZXSSC3',//万百十直选复式
    3114795 : 'RXZXSSC3',//万千个直选复式
    3114796 : 'RXZXSSC3',//万千十直选复式
    3114797 : 'RXZXSSC3',//万千百直选复式
    3114798 : 'RXZXSSC3DS',//百十个直选单式
    3114799 : 'RXZXSSC3DS',//千十个直选单式
    3114800 : 'RXZXSSC3DS',//千百个直选单式
    3114801 : 'RXZXSSC3DS',//千百十直选单式
    3114802 : 'RXZXSSC3DS',//万十个直选单式
    3114803 : 'RXZXSSC3DS',//万百个直选单式
    3114804 : 'RXZXSSC3DS',//万百十直选单式
    3114805 : 'RXZXSSC3DS',//万千个直选单式
    3114806 : 'RXZXSSC3DS',//万千十直选单式
    3114807 : 'RXZXSSC3DS',//万千百直选单式
    3114808 : 'RXZXSSC3HZ',//百十个直选和值
    3114809 : 'RXZXSSC3HZ',//千十个直选和值
    3114810 : 'RXZXSSC3HZ',//千百个直选和值
    3114811 : 'RXZXSSC3HZ',//千百十直选和值
    3114812 : 'RXZXSSC3HZ',//万十个直选和值
    3114813 : 'RXZXSSC3HZ',//万百个直选和值
    3114814 : 'RXZXSSC3HZ',//万百十直选和值
    3114815 : 'RXZXSSC3HZ',//万千个直选和值
    3114816 : 'RXZXSSC3HZ',//万千十直选和值
    3114817 : 'RXZXSSC3HZ',//万千百直选和值
    3114818 : 'RXZUSANSSC3',//万千百组选组三
    3114819 : 'RXZUSANSSC3',//万千十组选组三
    3114820 : 'RXZUSANSSC3',//万千个组选组三
    3114821 : 'RXZUSANSSC3',//万百十组选组三
    3114822 : 'RXZUSANSSC3',//万百个组选组三
    3114823 : 'RXZUSANSSC3',//万十个组选组三
    3114824 : 'RXZUSANSSC3',//千百十组选组三
    3114825 : 'RXZUSANSSC3',//千百个组选组三
    3114826 : 'RXZUSANSSC3',//千十个组选组三
    3114827 : 'RXZUSANSSC3',//百十个组选组三
    3114828 : 'RXZUSIXSSC3',//万千百组选组六
    3114829 : 'RXZUSIXSSC3',//万千十组选组六
    3114830 : 'RXZUSIXSSC3',//万千个组选组六
    3114831 : 'RXZUSIXSSC3',//万百十组选组六
    3114832 : 'RXZUSIXSSC3',//万百个组选组六
    3114833 : 'RXZUSIXSSC3',//万十个组选组六
    3114834 : 'RXZUSIXSSC3',//千百十组选组六
    3114835 : 'RXZUSIXSSC3',//千百个组选组六
    3114836 : 'RXZUSIXSSC3',//千十个组选组六
    3114837 : 'RXZUSIXSSC3',//百十个组选组六
    3114838 : 'RXZUSSC3HH',//万千百混合组选
    3114839 : 'RXZUSSC3HH',//万千十混合组选
    3114840 : 'RXZUSSC3HH',//万千个混合组选
    3114841 : 'RXZUSSC3HH',//万百十混合组选
    3114842 : 'RXZUSSC3HH',//万百个混合组选
    3114843 : 'RXZUSSC3HH',//万十个混合组选
    3114844 : 'RXZUSSC3HH',//千百十混合组选
    3114845 : 'RXZUSSC3HH',//千百个混合组选
    3114846 : 'RXZUSSC3HH',//千十个混合组选
    3114847 : 'RXZUSSC3HH',//百十个混合组选
    3114848 : 'RXZUSSC3HZ',//万千百组选和值
    3114849 : 'RXZUSSC3HZ',//万千十组选和值
    3114850 : 'RXZUSSC3HZ',//万千个组选和值
    3114851 : 'RXZUSSC3HZ',//万百十组选和值
    3114852 : 'RXZUSSC3HZ',//万百个组选和值
    3114853 : 'RXZUSSC3HZ',//万十个组选和值
    3114854 : 'RXZUSSC3HZ',//千百十组选和值
    3114855 : 'RXZUSSC3HZ',//千百个组选和值
    3114856 : 'RXZUSSC3HZ',//千十个组选和值
    3114857 : 'RXZUSSC3HZ',//百十个组选和值
    3114858 : 'RXZXSSC4',//万千百十直选复式
    3114859 : 'RXZXSSC4',//万千百个直选复式
    3114860 : 'RXZXSSC4',//万千十个直选复式
    3114861 : 'RXZXSSC4',//万百十个直选复式
    3114862 : 'RXZXSSC4',//千百十个直选复式
    3114863 : 'RXZXSSC4DS',//万千百十直选单式
    3114864 : 'RXZXSSC4DS',//万千百个直选单式
    3114865 : 'RXZXSSC4DS',//万千十个直选单式
    3114866 : 'RXZXSSC4DS',//万百十个直选单式
    3114867 : 'RXZXSSC4DS',//千百十个直选单式
    3114868 : 'RXZU24SSC4',//万千百十组选24
    3114869 : 'RXZU24SSC4',//万千百个组选24
    3114870 : 'RXZU24SSC4',//万千十个组选24
    3114871 : 'RXZU24SSC4',//万百十个组选24
    3114872 : 'RXZU24SSC4',//千百十个组选24
    3114873 : 'RXZU12SSC4',//万千百十组选12
    3114874 : 'RXZU12SSC4',//万千百个组选12
    3114875 : 'RXZU12SSC4',//万千十个组选12
    3114876 : 'RXZU12SSC4',//万百十个组选12
    3114877 : 'RXZU12SSC4',//千百十个组选12
    3114878 : 'RXZU6SSC4',//万千百十组选6
    3114879 : 'RXZU6SSC4',//万千百个组选6
    3114880 : 'RXZU6SSC4',//万千十个组选6
    3114881 : 'RXZU6SSC4',//万百十个组选6
    3114882 : 'RXZU6SSC4',//千百十个组选6
    3114883 : 'RXZU4SSC4',//万千百十组选4
    3114884 : 'RXZU4SSC4',//万千百个组选4
    3114885 : 'RXZU4SSC4',//万千十个组选4
    3114886 : 'RXZU4SSC4',//万百十个组选4
    3114887 : 'RXZU4SSC4',//千百十个组选4
    
    //加拿大30秒
    3111893: 'ZX3',
    3111894: 'ZXHZ',
    3111895:  'ZX3',
    3111896: 'ZXHZ',
    3111897: 'ZUS',
    3111898: 'ZUL',
    3111899: 'HHZX',
    3111900: 'ZUHZ',
    3111901: 'ZU3BD',
    3111902: 'HZUS',
    3111903: 'HZUL',
    3111904: 'HHZX',
    3111905: 'ZUHZ',
    3111906: 'ZU3BD',
    3111907: 'BDW1',
    3111908: 'BDW1',
    3111909: 'BDW2',
    3111910: 'BDW2',
    3111911: 'ZX2',
    3111912: 'ZX2',
    3111913: 'ZXHZ2',
    3111914: 'ZXHZ2',
    3111915: 'ZU2',
    3111916: 'ZU2',
    3111917: 'ZUHZ2',
    3111918:  'ZUHZ2',
    3111919: 'DWD',
    3111920: 'DWD',
    3111921: 'DWD',
    3111922: 'DWD',
    3111923: 'DWD',
    3111924: 'DXDS',
    3111925: 'DXDS',
    3111926: 'ZX4',
    3111927: 'ZH4',
    3111928: 'SXZU24',
    3111929: 'SXZU12',
    3111930:  'SXZU6',
    3111931:  'SXZU4',
    3111932:  'ZX5',
    3111933:  'ZH5',
    3111934: 'WXZU120',
    3111935:  'WXZU60',
    3111936:  'WXZU30',
    3111937:  'WXZU20',
    3111938:  'WXZU10',
    3111939: 'WXZU5',
    3111940: 'BDW1',
    3111941: 'HSCS',
    3111942: 'SXBX',
    3111943: 'SJFC',
    3111944: 'ZX3',
    3111945: 'ZXHZ',
    3111946: 'ZUS',
    3111947: 'ZUL',
    3111948: 'HHZX',
    3111949: 'ZUHZ',
    3111950: 'RXZXSSC2',
    3111951: 'RXZXSSC2',
    3111952: 'RXZXSSC2',
    3111953: 'RXZXSSC2',
    3111954: 'RXZXSSC2',
    3111955: 'RXZXSSC2',
    3111956: 'RXZXSSC2',
    3111957: 'RXZXSSC2',
    3111958: 'RXZXSSC2',
    3111959: 'RXZXSSC2',
    3111960: 'RXZXSSC2DS',
    3111961: 'RXZXSSC2DS',
    3111962: 'RXZXSSC2DS',
    3111963: 'RXZXSSC2DS',
    3111964: 'RXZXSSC2DS',
    3111965: 'RXZXSSC2DS',
    3111966: 'RXZXSSC2DS',
    3111967: 'RXZXSSC2DS',
    3111968: 'RXZXSSC2DS',
    3111969: 'RXZXSSC2DS',
    3111970: 'RXZXSSC2HZ',
    3111971: 'RXZXSSC2HZ',
    3111972: 'RXZXSSC2HZ',
    3111973: 'RXZXSSC2HZ',
    3111974: 'RXZXSSC2HZ',
    3111975: 'RXZXSSC2HZ',
    3111976: 'RXZXSSC2HZ',
    3111977: 'RXZXSSC2HZ',
    3111978: 'RXZXSSC2HZ',
    3111979: 'RXZXSSC2HZ',
    3111980: 'RXZUSSC2',
    3111981: 'RXZUSSC2',
    3111982: 'RXZUSSC2',
    3111983: 'RXZUSSC2',
    3111984: 'RXZUSSC2',
    3111985: 'RXZUSSC2',
    3111986: 'RXZUSSC2',
    3111987: 'RXZUSSC2',
    3111988: 'RXZUSSC2',
    3111989: 'RXZUSSC2',
    3111990: 'RXZUSSC2DS',
    3111991: 'RXZUSSC2DS',
    3111992: 'RXZUSSC2DS',
    3111993: 'RXZUSSC2DS',
    3111994: 'RXZUSSC2DS',
    3111995: 'RXZUSSC2DS',
    3111996: 'RXZUSSC2DS',
    3111997: 'RXZUSSC2DS',
    3111998: 'RXZUSSC2DS',
    3111999: 'RXZUSSC2DS',
    3112000: 'RXZUSSC2HZ',
    3112001: 'RXZUSSC2HZ',
    3112002: 'RXZUSSC2HZ',
    3112003: 'RXZUSSC2HZ',
    3112004: 'RXZUSSC2HZ',
    3112005: 'RXZUSSC2HZ',
    3112006: 'RXZUSSC2HZ',
    3112007: 'RXZUSSC2HZ',
    3112008: 'RXZUSSC2HZ',
    3112009: 'RXZUSSC2HZ',
    3112010: 'RXZXSSC3',
    3112011: 'RXZXSSC3',
    3112012: 'RXZXSSC3',
    3112013: 'RXZXSSC3',
    3112014: 'RXZXSSC3',
    3112015: 'RXZXSSC3',
    3112016: 'RXZXSSC3',
    3112017: 'RXZXSSC3',
    3112018: 'RXZXSSC3',
    3112019: 'RXZXSSC3',
    3112020: 'RXZXWFC3DS',
    3112021: 'RXZXWFC3DS',
    3112022: 'RXZXWFC3DS',
    3112023: 'RXZXWFC3DS',
    3112024: 'RXZXWFC3DS',
    3112025: 'RXZXWFC3DS',
    3112026: 'RXZXWFC3DS',
    3112027: 'RXZXWFC3DS',
    3112028: 'RXZXWFC3DS',
    3112029: 'RXZXWFC3DS',
    3112030: 'RXZXSSC3HZ',
    3112031: 'RXZXSSC3HZ',
    3112032: 'RXZXSSC3HZ',
    3112033: 'RXZXSSC3HZ',
    3112034: 'RXZXSSC3HZ',
    3112035: 'RXZXSSC3HZ',
    3112036: 'RXZXSSC3HZ',
    3112037: 'RXZXSSC3HZ',
    3112038: 'RXZXSSC3HZ',
    3112039: 'RXZXSSC3HZ',
    3112041: 'RXZUSANSSC3',
    3112042: 'RXZUSANSSC3',
    3112043: 'RXZUSANSSC3',
    3112044: 'RXZUSANSSC3',
    3112045: 'RXZUSANSSC3',
    3112046: 'RXZUSANSSC3',
    3112047: 'RXZUSANSSC3',
    3112048: 'RXZUSANSSC3',
    3112049: 'RXZUSANSSC3',
    3112050: 'RXZUSANSSC3',
    3112051: 'RXZUSIXSSC3',
    3112052: 'RXZUSIXSSC3',
    3112053: 'RXZUSIXSSC3',
    3112054: 'RXZUSIXSSC3',
    3112055: 'RXZUSIXSSC3',
    3112056: 'RXZUSIXSSC3',
    3112057: 'RXZUSIXSSC3',
    3112058: 'RXZUSIXSSC3',
    3112059: 'RXZUSIXSSC3',
    3112060: 'RXZUSIXSSC3',
    3112061: 'RXZUWFC3HH',
    3112062: 'RXZUWFC3HH',
    3112063: 'RXZUWFC3HH',
    3112064: 'RXZUWFC3HH',
    3112065: 'RXZUWFC3HH',
    3112066: 'RXZUWFC3HH',
    3112067: 'RXZUWFC3HH',
    3112068: 'RXZUWFC3HH',
    3112069: 'RXZUWFC3HH',
    3112070: 'RXZUWFC3HH',
    3112071: 'RXZUWFC3HZ',
    3112072: 'RXZUWFC3HZ',
    3112073: 'RXZUWFC3HZ',
    3112074: 'RXZUWFC3HZ',
    3112075: 'RXZUWFC3HZ',
    3112076: 'RXZUWFC3HZ',
    3112077: 'RXZUWFC3HZ',
    3112078: 'RXZUWFC3HZ',
    3112079: 'RXZUWFC3HZ',
    3112080: 'RXZUWFC3HZ',
    3112094: 'RXZXWFC4',
    3112095: 'RXZXWFC4',
    3112096: 'RXZXWFC4',
    3112097: 'RXZXWFC4',
    3112098: 'RXZXWFC4',
    3112099: 'RXZXWFC4DS',
    3112100: 'RXZXWFC4DS',
    3112101: 'RXZXWFC4DS',
    3112102: 'RXZXWFC4DS',
    3112103: 'RXZXWFC4DS',
    3112109: 'RXZU24WFC4',
    3112110: 'RXZU24WFC4',
    3112111: 'RXZU24WFC4',
    3112112: 'RXZU12WFC4',
    3112113: 'RXZU12WFC4',
    3112114: 'RXZU12WFC4',
    3112115: 'RXZU12WFC4',
    3112116: 'RXZU12WFC4',
    3112117: 'RXZU12WFC4',
    3112118: 'RXZU12WFC4',
    3112119: 'RXZU6WFC4',
    3112120: 'RXZU6WFC4',
    3112121: 'RXZU6WFC4',
    3112122: 'RXZU6WFC4',
    3112123: 'RXZU6WFC4',
    3112124: 'RXZU4WFC4',
    3112125: 'RXZU4WFC4',
    3112126: 'RXZU4WFC4',
    3112127: 'RXZU4WFC4',
    3112128: 'RXZU4WFC4',


    // 龙虎庄闲
    1020422: 'LHZXL1H2',
    1020423: 'LHZXH1L2',
    1020424: 'LHZXL1H3',
    1020425: 'LHZXH1L3',
    1020426: 'LHZXL1H4',
    1020427: 'LHZXH1L4',
    1020428: 'LHZXL1H5',
    1020429: 'LHZXH1L5',
    1020430: 'LHZXL2H3',
    1020431: 'LHZXH2L3',
    1020432: 'LHZXL2H4',
    1020433: 'LHZXH2L4',
    1020434: 'LHZXL2H5',
    1020435: 'LHZXH2L5',
    1020436: 'LHZXL3H4',
    1020437: 'LHZXH3L4',
    1020438: 'LHZXL3H5',
    1020439: 'LHZXH3L5',
    1020440: 'LHZXL4H5',
    1020441: 'LHZXH4L5',
    1030001: 'LHZXZ',
    1030002: 'LHZXX',
    1030003: 'LHZXH',
    1030004: 'LHZXZDZ',
    1030005: 'LHZXXDZ',
    1030006: 'LHZXZBZ',
    1030007: 'LHZXXBZ',
    1030008: 'LHZXZTW',
    1030009: 'LHZXXTW',
    // 龙虎和-20160310
    3110666: 'LHZXWQH',
    3110667: 'LHZXWBH',
    3110668: 'LHZXWSH',
    3110669: 'LHZXWGH',
    3110670: 'LHZXQBH',
    3110671: 'LHZXQSH',
    3110672: 'LHZXQGH',
    3110673: 'LHZXBSH',
    3110674: 'LHZXBGH',
    3110675: 'LHZXSGH',
    //任选二-直选复式
    3110101: "RXZXFFC2",
    3110102: "RXZXFFC2",
    3110103: "RXZXFFC2",
    3110104: "RXZXFFC2",
    3110105: "RXZXFFC2",
    3110106: "RXZXFFC2",
    3110107: "RXZXFFC2",
    3110108: "RXZXFFC2",
    3110109: "RXZXFFC2",
    3110110: "RXZXFFC2",
    //任选二-组选复式
    3110201: "RXZUFFC2",
    3110202: "RXZUFFC2",
    3110203: "RXZUFFC2",
    3110204: "RXZUFFC2",
    3110205: "RXZUFFC2",
    3110206: "RXZUFFC2",
    3110207: "RXZUFFC2",
    3110208: "RXZUFFC2",
    3110209: "RXZUFFC2",
    3110230: "RXZUFFC2",
    //任选二-直选单式
    3110111: 'RXZXFFC2DS',
    3110112: 'RXZXFFC2DS',
    3110113: 'RXZXFFC2DS',
    3110114: 'RXZXFFC2DS',
    3110115: 'RXZXFFC2DS',
    3110116: 'RXZXFFC2DS',
    3110117: 'RXZXFFC2DS',
    3110118: 'RXZXFFC2DS',
    3110119: 'RXZXFFC2DS',
    3110120: 'RXZXFFC2DS',
    //任选二-组选单式
    3110211: 'RXZUFFC2DS',
    3110212: 'RXZUFFC2DS',
    3110213: 'RXZUFFC2DS',
    3110214: 'RXZUFFC2DS',
    3110215: 'RXZUFFC2DS',
    3110216: 'RXZUFFC2DS',
    3110217: 'RXZUFFC2DS',
    3110218: 'RXZUFFC2DS',
    3110219: 'RXZUFFC2DS',
    3110220: 'RXZUFFC2DS',
    //任选二-直选和值
    3110121: 'RXZXFFC2HZ',
    3110122: 'RXZXFFC2HZ',
    3110123: 'RXZXFFC2HZ',
    3110124: 'RXZXFFC2HZ',
    3110125: 'RXZXFFC2HZ',
    3110126: 'RXZXFFC2HZ',
    3110127: 'RXZXFFC2HZ',
    3110128: 'RXZXFFC2HZ',
    3110129: 'RXZXFFC2HZ',
    3110130: 'RXZXFFC2HZ',
    //任选二-组选和值
    3110221: 'RXZUFFC2HZ',
    3110222: 'RXZUFFC2HZ',
    3110223: 'RXZUFFC2HZ',
    3110224: 'RXZUFFC2HZ',
    3110225: 'RXZUFFC2HZ',
    3110226: 'RXZUFFC2HZ',
    3110227: 'RXZUFFC2HZ',
    3110228: 'RXZUFFC2HZ',
    3110229: 'RXZUFFC2HZ',
    3110230: 'RXZUFFC2HZ',
    //任选三直选复式
    3110301: 'RXZXFFC3',
    3110302: 'RXZXFFC3',
    3110303: 'RXZXFFC3',
    3110304: 'RXZXFFC3',
    3110305: 'RXZXFFC3',
    3110306: 'RXZXFFC3',
    3110307: 'RXZXFFC3',
    3110308: 'RXZXFFC3',
    3110309: 'RXZXFFC3',
    3110310: 'RXZXFFC3',
    //任选三直选单式
    3110311: 'RXZXFFC3DS',
    3110312: 'RXZXFFC3DS',
    3110313: 'RXZXFFC3DS',
    3110314: 'RXZXFFC3DS',
    3110315: 'RXZXFFC3DS',
    3110316: 'RXZXFFC3DS',
    3110317: 'RXZXFFC3DS',
    3110318: 'RXZXFFC3DS',
    3110319: 'RXZXFFC3DS',
    3110320: 'RXZXFFC3DS',
    //任选三直选和值
    3110321: 'RXZXFFC3HZ',
    3110322: 'RXZXFFC3HZ',
    3110323: 'RXZXFFC3HZ',
    3110324: 'RXZXFFC3HZ',
    3110325: 'RXZXFFC3HZ',
    3110326: 'RXZXFFC3HZ',
    3110327: 'RXZXFFC3HZ',
    3110328: 'RXZXFFC3HZ',
    3110329: 'RXZXFFC3HZ',
    3110330: 'RXZXFFC3HZ',
    //任选三组选三
    3110401: 'RXZUSANFFC3',
    3110402: 'RXZUSANFFC3',
    3110403: 'RXZUSANFFC3',
    3110404: 'RXZUSANFFC3',
    3110405: 'RXZUSANFFC3',
    3110406: 'RXZUSANFFC3',
    3110407: 'RXZUSANFFC3',
    3110408: 'RXZUSANFFC3',
    3110409: 'RXZUSANFFC3',
    3110410: 'RXZUSANFFC3',
    //任选三组选六
    3110411: 'RXZUSIXFFC3',
    3110412: 'RXZUSIXFFC3',
    3110413: 'RXZUSIXFFC3',
    3110414: 'RXZUSIXFFC3',
    3110415: 'RXZUSIXFFC3',
    3110416: 'RXZUSIXFFC3',
    3110417: 'RXZUSIXFFC3',
    3110418: 'RXZUSIXFFC3',
    3110419: 'RXZUSIXFFC3',
    3110420: 'RXZUSIXFFC3',
    //任选三混合组选
    3110421: 'RXZUFFC3HH',
    3110422: 'RXZUFFC3HH',
    3110423: 'RXZUFFC3HH',
    3110424: 'RXZUFFC3HH',
    3110425: 'RXZUFFC3HH',
    3110426: 'RXZUFFC3HH',
    3110427: 'RXZUFFC3HH',
    3110428: 'RXZUFFC3HH',
    3110429: 'RXZUFFC3HH',
    3110430: 'RXZUFFC3HH',
    //任选三组选和值
    3110431: 'RXZUFFC3HZ',
    3110432: 'RXZUFFC3HZ',
    3110433: 'RXZUFFC3HZ',
    3110434: 'RXZUFFC3HZ',
    3110435: 'RXZUFFC3HZ',
    3110436: 'RXZUFFC3HZ',
    3110437: 'RXZUFFC3HZ',
    3110438: 'RXZUFFC3HZ',
    3110439: 'RXZUFFC3HZ',
    3110440: 'RXZUFFC3HZ',
    //任选四直选复式
    3110501: 'RXZXFFC4',
    3110502: 'RXZXFFC4',
    3110503: 'RXZXFFC4',
    3110504: 'RXZXFFC4',
    3110505: 'RXZXFFC4',
    //任选四直选单式
    3110506: 'RXZXFFC4DS',
    3110507: 'RXZXFFC4DS',
    3110508: 'RXZXFFC4DS',
    3110509: 'RXZXFFC4DS',
    3110510: 'RXZXFFC4DS',
    //任选四组选24
    3110601: 'RXZU24FFC4',
    3110602: 'RXZU24FFC4',
    3110603: 'RXZU24FFC4',
    3110604: 'RXZU24FFC4',
    3110605: 'RXZU24FFC4',
    //任选四组选12
    3110606: 'RXZU12FFC4',
    3110607: 'RXZU12FFC4',
    3110608: 'RXZU12FFC4',
    3110609: 'RXZU12FFC4',
    3110610: 'RXZU12FFC4',
    //任选四组选6
    3110611: 'RXZU6FFC4',
    3110612: 'RXZU6FFC4',
    3110613: 'RXZU6FFC4',
    3110614: 'RXZU6FFC4',
    3110615: 'RXZU6FFC4',
    //任选四组选4
    3110616: 'RXZU4FFC4',
    3110617: 'RXZU4FFC4',
    3110618: 'RXZU4FFC4',
    3110619: 'RXZU4FFC4',
    3110620: 'RXZU4FFC4',

    //四星、五星趣味-20160412
    3110755: '4XDT',
    3110756: '4XHDHD',
    3110760: '5XDT',
    3110761: '5XHDHD',
    //重庆时时彩3星直选跨度
    3110676: '3XZXKD',
    3110678: '3XZXKD',
    3110677: '3XZXKD',
    //重庆时时彩3星直选组合
    3110683: '3XZXZH',
    3110687: '3XZXZH',
    3110685: '3XZXZH',
    //重庆时时彩3星组选_组三跨度
    3110700: '3XZXZSKD',
    3110701: '3XZXZSKD',
    3110702: '3XZXZSKD',
    //重庆时时彩3星组选_组六跨度
    3110710: '3XZXZLKD',
    3110711: '3XZXZLKD',
    3110712: '3XZXZLKD',
    // 三星特殊-胆拖-20160322
    3110689: '3XDT',
    3110691: '3XDT',
    3110693: '3XDT',
    // 三星特殊-红胆黑胆-20160324
    3110704: '3XHDHD',
    3110706: '3XHDHD',
    3110708: '3XHDHD',
    //重庆时时彩3星组选_包胆
    3110714: 'ZU3BD',
    3110713: 'ZU3BD',
    3110715: 'ZU3BD',
    //三星大小单双-20160328
    3110731: 'DXDS3',
    3110732: 'DXDS3',
    3110733: 'DXDS3',
    //三星-中三一码不定位-20160405
    3110734: 'BDW1',
    3110735: 'BDW2',
    //四星-不定位-20160408
    3110741: 'BDW1',
    3110743: 'BDW2',
    //五星-不定位
    3110745: 'BDW1',
    3110747: 'BDW2',
    //pk拾
    3111006: 'CGJ',
    3111007: 'PK10ZX2',
    3111008: 'PK10ZX3',
    3111024: 'PK10ZX4',
    3111025: 'PK10ZX5',
    3111027: 'PK10ZX6',
    3111012: 'PK10DWD',
    3111013: 'PK10DWD',
    3111014: 'PK10DWD',
    3111015: 'PK10DWD',
    3111016: 'PK10DWD',
    3111017: 'PK10DWD',
    3111018: 'PK10DWD',
    3111019: 'PK10DWD',
    3111020: 'PK10DWD',
    3111021: 'PK10DWD',
    3111009: 'PK10DXDS',
    3111010: 'PK10DXDS',
    3111011: 'PK10DXDS',
    //河南481
    3110919: "ZYY",
    3110924: 'ZY',
    3110931: 'ZYW',
    3110772: 'RYSMZXFS',
    3110776: 'RYYWDHZ',
    3110777: 'RYZWDHZ',
    3110778: 'RYZYDHZ',
    3110779: 'RYZYWHZ',
    3110791: "RXEALL",
    3110792: "RXSALL",
    3110780: "RYSMZXKD",
    3110785: 'RYZYWZH',
    3110786: 'RYZYDZH',
    3110786: 'RYZWDZH',
    3110788: 'RYYWDZH',
    3110794: 'RYSMZXZS',
    3110798: 'RYSMZXZL',
    3110802: 'RYSMZSKD',
    3110806: 'RYSMZLKD',
    3110811: 'RYSMZXBD',
    3110816: 'RYSMTS',
    3110837: 'RYSMDT',
    3110841: 'RYSMHDHD',
    3110845: 'RYSMEDYFS',
    3110847: 'RYSMEDYBDUI',
    3110849: 'RYSMEDYBDAN',
    3110851: 'RYSMSBCF',
    3110854: 'RYEMZXFS',
    3110860: 'RYEMZXHZ',
    3110866: 'RYEMZXKD',
    3110878: 'RYEMZUFS',
    3110884: 'RYEMZUHZ',
    3110884: 'RYEMZUHZ',
    3110898: 'RYEMZUBD',
    3110905: 'SXZX',
    3110907: 'SXZH',
    3110909: 'SXZU24',
    3110910: 'SXZU12',
    3110911: 'SXZU6',
    3110912: 'SXZU4',
    3110913: 'SXZU24DT',
    3110914: 'SXZU12DT',
    3110915: 'SXZU6DT',
    3110916: 'SXZU4DT',
    3110894: 'HN481ZXSMALL',
    3110895: 'HN481ZXEMALL',

    //河内60秒
    3111053: 'ZX3',
    3111055: 'ZX3',
    3111104: 'ZX3',
    3111054: 'ZXHZ',
    3111056: 'ZXHZ',
    3111105: 'ZXHZ',
    3111057: 'ZUS',
    3111062: 'ZUS',
    3111106: 'ZUS',
    3111058: 'ZUL',
    3111107: 'ZUL',
    3111063: 'ZUL',
    3111059: 'HHZX',
    3111064: 'HHZX',
    3111108: 'HHZX',
    3111060: 'ZUHZ',
    3111109: 'ZUHZ',
    3111065: 'ZUHZ',
    3111079: 'DWD',
    3111080: 'DWD',
    3111081: 'DWD',
    3111082: 'DWD',
    3111083: 'DWD',
    3111067: 'BDW1',
    3111068: 'BDW1',
    3111069: 'BDW2',
    3111070: 'BDW2',
    3111071: 'ZX2',
    3111072: 'ZX2',
    3111073: 'ZXHZ2',
    3111074: 'ZXHZ2',
    3111075: 'ZU2',
    3111076: 'ZU2',
    3111077: 'ZUHZ2',
    3111078: 'ZUHZ2',
    3111084: 'DXDS',
    3111085: 'DXDS',
    3111086: 'ZX4',
    3111087: 'ZH4',
    3111088: 'SXZU24',
    3111089: 'SXZU12',
    3111090: 'SXZU6',
    3111091: 'SXZU4',
    3111092: 'ZX5',
    3111093: 'ZH5',
    3111094: 'WXZU120',
    3111095: 'WXZU60',
    3111096: 'WXZU30',
    3111097: 'WXZU20',
    3111098: 'WXZU10',
    3111099: 'WXZU5',
    3111100: 'BDW1',
    3111101: 'HSCS',
    3111102: 'SXBX',
    3111103: 'SJFC',
    //任选二-直选复式
    3111110: "RXZXFFC2",
    3111111: "RXZXFFC2",
    3111112: "RXZXFFC2",
    3111113: "RXZXFFC2",
    3111114: "RXZXFFC2",
    3111115: "RXZXFFC2",
    3111116: "RXZXFFC2",
    3111117: "RXZXFFC2",
    3111118: "RXZXFFC2",
    3111119: "RXZXFFC2",
    //任选二-组选复式
    3111140: "RXZUFFC2",
    3111141: "RXZUFFC2",
    3111142: "RXZUFFC2",
    3111143: "RXZUFFC2",
    3111144: "RXZUFFC2",
    3111145: "RXZUFFC2",
    3111146: "RXZUFFC2",
    3111147: "RXZUFFC2",
    3111148: "RXZUFFC2",
    3111149: "RXZUFFC2",
    //任选二-直选单式
    3111120: 'RXZXFFC2DS',
    3111121: 'RXZXFFC2DS',
    3111122: 'RXZXFFC2DS',
    3111123: 'RXZXFFC2DS',
    3111124: 'RXZXFFC2DS',
    3111125: 'RXZXFFC2DS',
    3111126: 'RXZXFFC2DS',
    3111127: 'RXZXFFC2DS',
    3111128: 'RXZXFFC2DS',
    3111129: 'RXZXFFC2DS',
    //任选二-组选单式
    3111150: 'RXZUFFC2DS',
    3111151: 'RXZUFFC2DS',
    3111152: 'RXZUFFC2DS',
    3111153: 'RXZUFFC2DS',
    3111154: 'RXZUFFC2DS',
    3111155: 'RXZUFFC2DS',
    3111156: 'RXZUFFC2DS',
    3111157: 'RXZUFFC2DS',
    3111158: 'RXZUFFC2DS',
    3111159: 'RXZUFFC2DS',
    //任选二-直选和值
    3111130: 'RXZXFFC2HZ',
    3111131: 'RXZXFFC2HZ',
    3111132: 'RXZXFFC2HZ',
    3111133: 'RXZXFFC2HZ',
    3111134: 'RXZXFFC2HZ',
    3111135: 'RXZXFFC2HZ',
    3111136: 'RXZXFFC2HZ',
    3111137: 'RXZXFFC2HZ',
    3111138: 'RXZXFFC2HZ',
    3111139: 'RXZXFFC2HZ',
    //任选二-组选和值
    3111160: 'RXZUFFC2HZ',
    3111161: 'RXZUFFC2HZ',
    3111162: 'RXZUFFC2HZ',
    3111163: 'RXZUFFC2HZ',
    3111164: 'RXZUFFC2HZ',
    3111165: 'RXZUFFC2HZ',
    3111166: 'RXZUFFC2HZ',
    3111167: 'RXZUFFC2HZ',
    3111168: 'RXZUFFC2HZ',
    3111169: 'RXZUFFC2HZ',
    //任选三-直选复式
    3111170: 'RXZXFFC3',
    3111171: 'RXZXFFC3',
    3111172: 'RXZXFFC3',
    3111173: 'RXZXFFC3',
    3111174: 'RXZXFFC3',
    3111175: 'RXZXFFC3',
    3111176: 'RXZXFFC3',
    3111177: 'RXZXFFC3',
    3111178: 'RXZXFFC3',
    3111179: 'RXZXFFC3',
    //任选三-直选单式
    3111180: 'RXZXFFC3DS',
    3111181: 'RXZXFFC3DS',
    3111182: 'RXZXFFC3DS',
    3111183: 'RXZXFFC3DS',
    3111184: 'RXZXFFC3DS',
    3111185: 'RXZXFFC3DS',
    3111186: 'RXZXFFC3DS',
    3111187: 'RXZXFFC3DS',
    3111188: 'RXZXFFC3DS',
    3111189: 'RXZXFFC3DS',
    //任选三-直选和值
    3111190: 'RXZXFFC3HZ',
    3111191: 'RXZXFFC3HZ',
    3111192: 'RXZXFFC3HZ',
    3111193: 'RXZXFFC3HZ',
    3111194: 'RXZXFFC3HZ',
    3111195: 'RXZXFFC3HZ',
    3111196: 'RXZXFFC3HZ',
    3111197: 'RXZXFFC3HZ',
    3111198: 'RXZXFFC3HZ',
    3111199: 'RXZXFFC3HZ',
    //任选三-组选三
    3111200: 'RXZUSANFFC3',
    3111201: 'RXZUSANFFC3',
    3111202: 'RXZUSANFFC3',
    3111203: 'RXZUSANFFC3',
    3111204: 'RXZUSANFFC3',
    3111205: 'RXZUSANFFC3',
    3111206: 'RXZUSANFFC3',
    3111207: 'RXZUSANFFC3',
    3111208: 'RXZUSANFFC3',
    3111209: 'RXZUSANFFC3',
    //任选三-组选六
    3111210: 'RXZUSIXFFC3',
    3111211: 'RXZUSIXFFC3',
    3111212: 'RXZUSIXFFC3',
    3111213: 'RXZUSIXFFC3',
    3111214: 'RXZUSIXFFC3',
    3111215: 'RXZUSIXFFC3',
    3111216: 'RXZUSIXFFC3',
    3111217: 'RXZUSIXFFC3',
    3111218: 'RXZUSIXFFC3',
    3111219: 'RXZUSIXFFC3',
    //任选三-混合组选
    3111220: 'RXZUFFC3HH',
    3111221: 'RXZUFFC3HH',
    3111222: 'RXZUFFC3HH',
    3111223: 'RXZUFFC3HH',
    3111224: 'RXZUFFC3HH',
    3111225: 'RXZUFFC3HH',
    3111226: 'RXZUFFC3HH',
    3111227: 'RXZUFFC3HH',
    3111228: 'RXZUFFC3HH',
    3111229: 'RXZUFFC3HH',
    //任选三-组选和值
    3111230: 'RXZUFFC3HZ',
    3111231: 'RXZUFFC3HZ',
    3111232: 'RXZUFFC3HZ',
    3111233: 'RXZUFFC3HZ',
    3111234: 'RXZUFFC3HZ',
    3111235: 'RXZUFFC3HZ',
    3111236: 'RXZUFFC3HZ',
    3111237: 'RXZUFFC3HZ',
    3111238: 'RXZUFFC3HZ',
    3111239: 'RXZUFFC3HZ',
    //任选四-直选复式
    3111240: 'RXZXFFC4',
    3111241: 'RXZXFFC4',
    3111242: 'RXZXFFC4',
    3111243: 'RXZXFFC4',
    3111244: 'RXZXFFC4',
    //任选四-直选单式
    3111245: 'RXZXFFC4DS',
    3111246: 'RXZXFFC4DS',
    3111247: 'RXZXFFC4DS',
    3111248: 'RXZXFFC4DS',
    3111249: 'RXZXFFC4DS',
    //任选四-组选24
    3111250: 'RXZU24FFC4',
    3111251: 'RXZU24FFC4',
    3111252: 'RXZU24FFC4',
    3111253: 'RXZU24FFC4',
    3111254: 'RXZU24FFC4',
    //任选四-组选12
    3111255: 'RXZU12FFC4',
    3111256: 'RXZU12FFC4',
    3111257: 'RXZU12FFC4',
    3111258: 'RXZU12FFC4',
    3111259: 'RXZU12FFC4',
    //任选四-组选6
    3111260: 'RXZU6FFC4',
    3111261: 'RXZU6FFC4',
    3111262: 'RXZU6FFC4',
    3111263: 'RXZU6FFC4',
    3111264: 'RXZU6FFC4',
    //任选四-组选4
    3111265: 'RXZU4FFC4',
    3111266: 'RXZU4FFC4',
    3111267: 'RXZU4FFC4',
    3111268: 'RXZU4FFC4',
    3111269: 'RXZU4FFC4',
    //河内分分彩 20180601 end

    //西贡60秒
    3111327: 'ZX3',
    3111325: 'ZX3',
    3111376: 'ZX3',
    3111377: 'ZXHZ',
    3111326: 'ZXHZ',
    3111328: 'ZXHZ',
    3111334: 'ZUS',
    3111329: 'ZUS',
    3111378: 'ZUS',
    3111379: 'ZUL',
    3111330: 'ZUL',
    3111335: 'ZUL',
    3111336: 'HHZX',
    3111331: 'HHZX',
    3111380: 'HHZX',
    3111332: 'ZUHZ',
    3111381: 'ZUHZ',
    3111337: 'ZUHZ',
    3111351: 'DWD',
    3111339: 'BDW1',
    3111340: 'BDW1',
    3111341: 'BDW2',
    3111342: 'BDW2',
    3111344: 'ZX2',
    3111343: 'ZX2',
    3111346: 'ZXHZ2',
    3111345: 'ZXHZ2',
    3111348: 'ZU2',
    3111347: 'ZU2',
    3111350: 'ZUHZ2',
    3111349: 'ZUHZ2',
    3111357: 'DXDS',
    3111356: 'DXDS',
    3111358: 'ZX4',
    3111359: 'ZH4',
    3111360: 'SXZU24',
    3111361: 'SXZU12',
    3111362: 'SXZU6',
    3111363: 'SXZU4',
    3111364: 'ZX5',
    3111365: 'ZH5',
    3111366: 'WXZU120',
    3111367: 'WXZU60',
    3111368: 'WXZU30',
    3111369: 'WXZU20',
    3111370: 'WXZU10',
    3111371: 'WXZU5',
    3111372: 'BDW1',
    3111373: 'HSCS',
    3111374: 'SXBX',
    3111375: 'SJFC',
    //任选二-直选复式
    3111382: "RXZXFFC2",
    //任选二-组选复式
    3111412: "RXZUFFC2",
    //任选二-直选单式
    3111392: 'RXZXFFC2DS',
    //任选二-组选单式
    3111422: 'RXZUFFC2DS',
    //任选二-直选和值
    3111402: 'RXZXFFC2HZ',
    //任选二-组选和值
    3111432: 'RXZUFFC2HZ',
    //任选三-直选复式
    3111442: 'RXZXFFC3',
    //任选三-直选单式
    3111452: 'RXZXFFC3DS',
    //任选三-直选和值
    3111462: 'RXZXFFC3HZ',
    //任选三-组选三
    3111472: 'RXZUSANFFC3',
    //任选三-组选六
    3111482: 'RXZUSIXFFC3',
    //任选三-混合组选
    3111492: 'RXZUFFC3HH',
    //任选三-组选和值
    3111502: 'RXZUFFC3HZ',
    //任选四-直选复式
    3111512: 'RXZXFFC4',
    //任选四-直选单式
    3111517: 'RXZXFFC4DS',
    //任选四-组选24
    3111522: 'RXZU24FFC4',
    //任选四-组选12
    3111527: 'RXZU12FFC4',
    //任选四-组选6
    3111532: 'RXZU6FFC4',
    //任选四-组选4
    3111537: 'RXZU4FFC4',
    //西贡 20180601 end
    
    //印尼分分彩
    3113705: 'ZX3',
    3113703: 'ZX3',
    3113754: 'ZX3',
    3113755: 'ZXHZ',
    3113704: 'ZXHZ',
    3113706: 'ZXHZ',
    3113712: 'ZUS',
    3113707: 'ZUS',
    3113756: 'ZUS',
    3113757: 'ZUL',
    3113708: 'ZUL',
    3113713: 'ZUL',
    3113714: 'HHZX',
    3113709: 'HHZX',
    3113758: 'HHZX',
    3113759: 'ZUHZ',
    3113710: 'ZUHZ',
    3113715: 'ZUHZ',
    3113729: 'DWD',
    3113717: 'BDW1',
    3113718: 'BDW1',
    3113719: 'BDW2',
    3113720: 'BDW2',
    3113722: 'ZX2',
    3113721: 'ZX2',
    3113724: 'ZXHZ2',
    3113723: 'ZXHZ2',
    3113726: 'ZU2',
    3113725: 'ZU2',
    3113728: 'ZUHZ2',
    3113727: 'ZUHZ2',
    3113735: 'DXDS',
    3113734: 'DXDS',
    3113736: 'ZX4',
    3113737: 'ZH4',
    3113738: 'SXZU24',
    3113739: 'SXZU12',
    3113740: 'SXZU6',
    3113741: 'SXZU4',
    3113742: 'ZX5',
    3113743: 'ZH5',
    3113744: 'WXZU120',
    3113745: 'WXZU60',
    3113746: 'WXZU30',
    3113747: 'WXZU20',
    3113748: 'WXZU10',
    3113749: 'WXZU5',
    3113750: 'BDW1',
    3113751: 'HSCS',
    3113752: 'SXBX',
    3113753: 'SJFC',
    //任选二-直选复式
    3113760: "RXZXFFC2",
    //任选二-组选复式
    3113790: "RXZUFFC2",
    //任选二-直选单式
    3113770: 'RXZXFFC2DS',
    //任选二-组选单式
    3113800: 'RXZUFFC2DS',
    //任选二-直选和值
    3113780: 'RXZXFFC2HZ',
    //任选二-组选和值
    3113810: 'RXZUFFC2HZ',
    //任选三-直选复式
    3113820: 'RXZXFFC3',
    //任选三-直选单式
    3113830: 'RXZXFFC3DS',
    //任选三-直选和值
    3113840: 'RXZXFFC3HZ',
    //任选三-组选三
    3113850: 'RXZUSANFFC3',
    //任选三-组选六
    3113860: 'RXZUSIXFFC3',
    //任选三-混合组选
    3113870: 'RXZUFFC3HH',
    //任选三-组选和值
    3113880: 'RXZUFFC3HZ',
    //任选四-直选复式
    3113890: 'RXZXFFC4',
    //任选四-直选单式
    3113895: 'RXZXFFC4DS',
    //任选四-组选24
    3113900: 'RXZU24FFC4',
    //任选四-组选12
    3113905: 'RXZU12FFC4',
    //任选四-组选6
    3113910: 'RXZU6FFC4',
    //任选四-组选4
    3113915: 'RXZU4FFC4',
    //印尼 20180619 end
    
    //日本分分彩
    3113463: 'ZX3',
    3113461: 'ZX3',
    3113512: 'ZX3',
    3113464: 'ZXHZ',
    3113462: 'ZXHZ',
    3113513: 'ZXHZ',
    3113514: 'ZUS',
    3113465: 'ZUS',
    3113470: 'ZUS',
    3113515: 'ZUL',
    3113466: 'ZUL',
    3113471: 'ZUL',
    3113516: 'HHZX',
    3113467: 'HHZX',
    3113472: 'HHZX',
    3113517: 'ZUHZ',
    3113468: 'ZUHZ',
    3113473: 'ZUHZ',
    3113487: 'DWD',
    3113475: 'BDW1',
    3113476: 'BDW1',
    3113477: 'BDW2',
    3113478: 'BDW2',
    3113480: 'ZX2',
    3113479: 'ZX2',
    3113482: 'ZXHZ2',
    3113481: 'ZXHZ2',
    3113484: 'ZU2',
    3113483: 'ZU2',
    3113486: 'ZUHZ2',
    3113485: 'ZUHZ2',
    3113493: 'DXDS',
    3113492: 'DXDS',
    3113494: 'ZX4',
    3113495: 'ZH4',
    3113496: 'SXZU24',
    3113497: 'SXZU12',
    3113498: 'SXZU6',
    3113499: 'SXZU4',
    3113500: 'ZX5',
    3113501: 'ZH5',
    3113502: 'WXZU120',
    3113503: 'WXZU60',
    3113504: 'WXZU30',
    3113505: 'WXZU20',
    3113506: 'WXZU10',
    3113507: 'WXZU5',
    3113508: 'BDW1',
    3113509: 'HSCS',
    3113510: 'SXBX',
    3113511: 'SJFC',
    //任选二-直选复式
    3113518: "RXZXFFC2",
    //任选二-组选复式
    3113548: "RXZUFFC2",
    //任选二-直选单式
    3113528: 'RXZXFFC2DS',
    //任选二-组选单式
    3113558: 'RXZUFFC2DS',
    //任选二-直选和值
    3113538: 'RXZXFFC2HZ',
    //任选二-组选和值
    3113568: 'RXZUFFC2HZ',
    //任选三-直选复式
    3113578: 'RXZXFFC3',
    //任选三-直选单式
    3113588: 'RXZXFFC3DS',
    //任选三-直选和值
    3113598: 'RXZXFFC3HZ',
    //任选三-组选三
    3113608: 'RXZUSANFFC3',
    //任选三-组选六
    3113618: 'RXZUSIXFFC3',
    //任选三-混合组选
    3113628: 'RXZUFFC3HH',
    //任选三-组选和值
    3113638: 'RXZUFFC3HZ',
    //任选四-直选复式
    3113648: 'RXZXFFC4',
    //任选四-直选单式
    3113653: 'RXZXFFC4DS',
    //任选四-组选24
    3113658: 'RXZU24FFC4',
    //任选四-组选12
    3113663: 'RXZU12FFC4',
    //任选四-组选6
    3113668: 'RXZU6FFC4',
    //任选四-组选4
    3113673: 'RXZU4FFC4',
    //日本 20180619 end
    
    //重庆30秒
    3113947: 'ZX3',
    3113945: 'ZX3',
    3113996: 'ZX3',
    3113948: 'ZXHZ',
    3113946: 'ZXHZ',
    3113997: 'ZXHZ',
    3113998: 'ZUS',
    3113949: 'ZUS',
    3113954: 'ZUS',
    3113999: 'ZUL',
    3113950: 'ZUL',
    3113955: 'ZUL',
    3114000: 'HHZX',
    3113951: 'HHZX',
    3113956: 'HHZX',
    3114001: 'ZUHZ',
    3113952: 'ZUHZ',
    3113957: 'ZUHZ',
    3113971: 'DWD',
    3113959: 'BDW1',
    3113960: 'BDW1',
    3113961: 'BDW2',
    3113962: 'BDW2',
    3113964: 'ZX2',
    3113963: 'ZX2',
    3113966: 'ZXHZ2',
    3113965: 'ZXHZ2',
    3113968: 'ZU2',
    3113967: 'ZU2',
    3113970: 'ZUHZ2',
    3113969: 'ZUHZ2',
    3113977: 'DXDS',
    3113976: 'DXDS',
    3113978: 'ZX4',
    3113979: 'ZH4',
    3113980: 'SXZU24',
    3113981: 'SXZU12',
    3113982: 'SXZU6',
    3113983: 'SXZU4',
    3113984: 'ZX5',
    3113985: 'ZH5',
    3113986: 'WXZU120',
    3113987: 'WXZU60',
    3113988: 'WXZU30',
    3113989: 'WXZU20',
    3113990: 'WXZU10',
    3113991: 'WXZU5',
    3113992: 'BDW1',
    3113993: 'HSCS',
    3113994: 'SXBX',
    3113995: 'SJFC',
    //任选二-直选复式
    3114002: "RXZXFFC2",
    //任选二-直选单式
    3114012: 'RXZXFFC2DS',
    //任选二-直选和值
    3114022: 'RXZXFFC2HZ',
    //任选二-组选复式
    3114032: "RXZUFFC2",
    //任选二-组选单式
    3114042: 'RXZUFFC2DS',
    //任选二-组选和值
    3114052: 'RXZUFFC2HZ',
    //任选三-直选复式
    3114062: 'RXZXFFC3',
    //任选三-直选单式
    3114072: 'RXZXFFC3DS',
    //任选三-直选和值
    3114082: 'RXZXFFC3HZ',
    //任选三-组选三
    3114092: 'RXZUSANFFC3',
    //任选三-组选六
    3114102: 'RXZUSIXFFC3',
    //任选三-混合组选
    3114112: 'RXZUFFC3HH',
    //任选三-组选和值
    3114122: 'RXZUFFC3HZ',
    //任选四-直选复式
    3114132: 'RXZXFFC4',
    //任选四-直选单式
    3114137: 'RXZXFFC4DS',
    //任选四-组选24
    3114142: 'RXZU24FFC4',
    //任选四-组选12
    3114147: 'RXZU12FFC4',
    //任选四-组选6
    3114152: 'RXZU6FFC4',
    //任选四-组选4
    3114157: 'RXZU4FFC4',
    //重庆30秒 20180619 end
    
    //腾讯30秒
    3114189: 'ZX3',
    3114187: 'ZX3',
    3114238: 'ZX3',
    3114190: 'ZXHZ',
    3114188: 'ZXHZ',
    3114239: 'ZXHZ',
    3114240: 'ZUS',
    3114191: 'ZUS',
    3114196: 'ZUS',
    3114241: 'ZUL',
    3114192: 'ZUL',
    3114197: 'ZUL',
    3114242: 'HHZX',
    3114193: 'HHZX',
    3114198: 'HHZX',
    3114243: 'ZUHZ',
    3114194: 'ZUHZ',
    3114199: 'ZUHZ',
    3114213: 'DWD',
    3114201: 'BDW1',
    3114202: 'BDW1',
    3114203: 'BDW2',
    3114204: 'BDW2',
    3114206: 'ZX2',
    3114205: 'ZX2',
    3114208: 'ZXHZ2',
    3114207: 'ZXHZ2',
    3114210: 'ZU2',
    3114209: 'ZU2',
    3114212: 'ZUHZ2',
    3114211: 'ZUHZ2',
    3114219: 'DXDS',
    3114218: 'DXDS',
    3114220: 'ZX4',
    3114221: 'ZH4',
    3114222: 'SXZU24',
    3114223: 'SXZU12',
    3114224: 'SXZU6',
    3114225: 'SXZU4',
    3114226: 'ZX5',
    3114227: 'ZH5',
    3114228: 'WXZU120',
    3114229: 'WXZU60',
    3114230: 'WXZU30',
    3114231: 'WXZU20',
    3114232: 'WXZU10',
    3114233: 'WXZU5',
    3114234: 'BDW1',
    3114235: 'HSCS',
    3114236: 'SXBX',
    3114237: 'SJFC',
    //任选二-直选复式
    3114244: "RXZXFFC2",
    //任选二-直选单式
    3114254: 'RXZXFFC2DS',
    //任选二-直选和值
    3114264: 'RXZXFFC2HZ',
    //任选二-组选复式
    3114274: "RXZUFFC2",
    //任选二-组选单式
    3114284: 'RXZUFFC2DS',
    //任选二-组选和值
    3114294: 'RXZUFFC2HZ',
    //任选三-直选复式
    3114304: 'RXZXFFC3',
    //任选三-直选单式
    3114314: 'RXZXFFC3DS',
    //任选三-直选和值
    3114324: 'RXZXFFC3HZ',
    //任选三-组选三
    3114334: 'RXZUSANFFC3',
    //任选三-组选六
    3114344: 'RXZUSIXFFC3',
    //任选三-混合组选
    3114354: 'RXZUFFC3HH',
    //任选三-组选和值
    3114364: 'RXZUFFC3HZ',
    //任选四-直选复式
    3114374: 'RXZXFFC4',
    //任选四-直选单式
    3114379: 'RXZXFFC4DS',
    //任选四-组选24
    3114384: 'RXZU24FFC4',
    //任选四-组选12
    3114389: 'RXZU12FFC4',
    //任选四-组选6
    3114394: 'RXZU6FFC4',
    //任选四-组选4
    3114399: 'RXZU4FFC4',
    //腾讯30秒 20180619 end

    //腾讯分分彩start
    3111575: 'ZX3',
    3111576: 'ZXHZ',
    3111577: 'ZX3',
    3111578: 'ZXHZ',
    3111579: 'ZUS',
    3111580: 'ZUL',
    3111581: 'HHZX',
    3111582: 'ZUHZ',
    3111583: 'ZU3BD',
    3111584: 'ZUS',
    3111585: 'ZUL',
    3111586: 'HHZX',
    3111587: 'ZUHZ',
    3111588: 'ZU3BD',
    3111589: 'BDW1',
    3111590: 'BDW1',
    3111591: 'BDW2',
    3111592: 'BDW2',
    3111593: 'ZX2',
    3111594: 'ZX2',
    3111595: 'ZXHZ2',
    3111596: 'ZXHZ2',
    3111597: 'ZU2',
    3111598: 'ZU2',
    3111599: 'ZUHZ2',
    3111600: 'ZUHZ2',
    3111601: 'DWD',
    3111602: 'DWD',
    3111603: 'DWD',
    3111604: 'DWD',
    3111605: 'DWD',
    3111606: 'DXDS',
    3111607: 'DXDS',
    3111608: 'ZX4',
    3111609: 'ZH4',
    3111610: 'SXZU24',
    3111611: 'SXZU12',
    3111612: 'SXZU6',
    3111613: 'SXZU4',
    3111614: 'ZX5',
    3111615: 'ZH5',
    3111616: 'WXZU120',
    3111617: 'WXZU60',
    3111618: 'WXZU30',
    3111619: 'WXZU20',
    3111620: 'WXZU10',
    3111621: 'WXZU5',
    3111622: 'BDW1',
    3111623: 'HSCS',
    3111624: 'SXBX',
    3111625: 'SJFC',
    3111626: 'ZX3',
    3111627: 'ZXHZ',
    3111628: 'ZUS',
    3111629: 'ZUL',
    3111630: 'HHZX',
    3111631: 'ZUHZ',
    //任选二-直选复式
    3111632: 'RXZXFFC2',
    3111633: 'RXZXFFC2',
    3111634: 'RXZXFFC2',
    3111635: 'RXZXFFC2',
    3111636: 'RXZXFFC2',
    3111637: 'RXZXFFC2',
    3111638: 'RXZXFFC2',
    3111639: 'RXZXFFC2',
    3111640: 'RXZXFFC2',
    3111641: 'RXZXFFC2',
    //任选二-直选单式
    3111642: 'RXZXFFC2DS',
    3111643: 'RXZXFFC2DS',
    3111644: 'RXZXFFC2DS',
    3111645: 'RXZXFFC2DS',
    3111646: 'RXZXFFC2DS',
    3111647: 'RXZXFFC2DS',
    3111648: 'RXZXFFC2DS',
    3111649: 'RXZXFFC2DS',
    3111650: 'RXZXFFC2DS',
    3111651: 'RXZXFFC2DS',
    //任选二-直选和值
    3111652: 'RXZXFFC2HZ',
    3111653: 'RXZXFFC2HZ',
    3111654: 'RXZXFFC2HZ',
    3111655: 'RXZXFFC2HZ',
    3111656: 'RXZXFFC2HZ',
    3111657: 'RXZXFFC2HZ',
    3111658: 'RXZXFFC2HZ',
    3111659: 'RXZXFFC2HZ',
    3111660: 'RXZXFFC2HZ',
    3111661: 'RXZXFFC2HZ',
    //任选二-组选复式
    3111662: 'RXZUFFC2',
    3111663: 'RXZUFFC2',
    3111664: 'RXZUFFC2',
    3111665: 'RXZUFFC2',
    3111666: 'RXZUFFC2',
    3111667: 'RXZUFFC2',
    3111668: 'RXZUFFC2',
    3111669: 'RXZUFFC2',
    3111670: 'RXZUFFC2',
    3111671: 'RXZUFFC2',
    //任选二-组选单式
    3111672: 'RXZUFFC2DS',
    3111673: 'RXZUFFC2DS',
    3111674: 'RXZUFFC2DS',
    3111675: 'RXZUFFC2DS',
    3111676: 'RXZUFFC2DS',
    3111677: 'RXZUFFC2DS',
    3111678: 'RXZUFFC2DS',
    3111679: 'RXZUFFC2DS',
    3111680: 'RXZUFFC2DS',
    3111681: 'RXZUFFC2DS',
    //任选二-组选和值
    3111682: 'RXZUFFC2HZ',
    3111683: 'RXZUFFC2HZ',
    3111684: 'RXZUFFC2HZ',
    3111685: 'RXZUFFC2HZ',
    3111686: 'RXZUFFC2HZ',
    3111687: 'RXZUFFC2HZ',
    3111688: 'RXZUFFC2HZ',
    3111689: 'RXZUFFC2HZ',
    3111690: 'RXZUFFC2HZ',
    3111691: 'RXZUFFC2HZ',
    //任选三-直选复式
    3111693: 'RXZXFFC3',
    3111694: 'RXZXFFC3',
    3111695: 'RXZXFFC3',
    3111696: 'RXZXFFC3',
    3111697: 'RXZXFFC3',
    3111698: 'RXZXFFC3',
    3111699: 'RXZXFFC3',
    3111700: 'RXZXFFC3',
    3111701: 'RXZXFFC3',
    3111702: 'RXZXFFC3',
    //任选三-直选单式
    3111703: 'RXZXFFC3DS',
    3111704: 'RXZXFFC3DS',
    3111705: 'RXZXFFC3DS',
    3111706: 'RXZXFFC3DS',
    3111707: 'RXZXFFC3DS',
    3111708: 'RXZXFFC3DS',
    3111709: 'RXZXFFC3DS',
    3111710: 'RXZXFFC3DS',
    3111711: 'RXZXFFC3DS',
    3111712: 'RXZXFFC3DS',
    //任选三-直选和值
    3111713: 'RXZXFFC3HZ',
    3111714: 'RXZXFFC3HZ',
    3111715: 'RXZXFFC3HZ',
    3111716: 'RXZXFFC3HZ',
    3111717: 'RXZXFFC3HZ',
    3111718: 'RXZXFFC3HZ',
    3111719: 'RXZXFFC3HZ',
    3111720: 'RXZXFFC3HZ',
    3111721: 'RXZXFFC3HZ',
    3111722: 'RXZXFFC3HZ',
    //任选三-组选组三
    3111724: 'RXZUSANFFC3',
    3111725: 'RXZUSANFFC3',
    3111726: 'RXZUSANFFC3',
    3111727: 'RXZUSANFFC3',
    3111728: 'RXZUSANFFC3',
    3111729: 'RXZUSANFFC3',
    3111730: 'RXZUSANFFC3',
    3111731: 'RXZUSANFFC3',
    3111732: 'RXZUSANFFC3',
    3111733: 'RXZUSANFFC3',
    //任选三-组选组六
    3111734: 'RXZUSIXFFC3',
    3111735: 'RXZUSIXFFC3',
    3111736: 'RXZUSIXFFC3',
    3111737: 'RXZUSIXFFC3',
    3111738: 'RXZUSIXFFC3',
    3111739: 'RXZUSIXFFC3',
    3111740: 'RXZUSIXFFC3',
    3111741: 'RXZUSIXFFC3',
    3111742: 'RXZUSIXFFC3',
    3111743: 'RXZUSIXFFC3',
    //任选三-混合组选
    3111744: 'RXZUFFC3HH',
    3111745: 'RXZUFFC3HH',
    3111746: 'RXZUFFC3HH',
    3111747: 'RXZUFFC3HH',
    3111748: 'RXZUFFC3HH',
    3111749: 'RXZUFFC3HH',
    3111750: 'RXZUFFC3HH',
    3111751: 'RXZUFFC3HH',
    3111752: 'RXZUFFC3HH',
    3111753: 'RXZUFFC3HH',
    //任选三-组选和值
    3111754: 'RXZUFFC3HZ',
    3111755: 'RXZUFFC3HZ',
    3111756: 'RXZUFFC3HZ',
    3111757: 'RXZUFFC3HZ',
    3111758: 'RXZUFFC3HZ',
    3111759: 'RXZUFFC3HZ',
    3111760: 'RXZUFFC3HZ',
    3111761: 'RXZUFFC3HZ',
    3111762: 'RXZUFFC3HZ',
    3111763: 'RXZUFFC3HZ',
    //任选四-直选复式
    3111787: 'RXZXFFC4',
    3111788: 'RXZXFFC4',
    3111789: 'RXZXFFC4',
    3111790: 'RXZXFFC4',
    3111791: 'RXZXFFC4',
    //任选四-直选单式
    3111792: 'RXZXFFC4DS',
    3111793: 'RXZXFFC4DS',
    3111794: 'RXZXFFC4DS',
    3111795: 'RXZXFFC4DS',
    3111796: 'RXZXFFC4DS',
    //任选四-组选24
    3111802: 'RXZU24FFC4',
    3111803: 'RXZU24FFC4',
    3111804: 'RXZU24FFC4',
    3111805: 'RXZU24FFC4',
    3111806: 'RXZU24FFC4',
    //任选四-组选12
    3111807: 'RXZU12FFC4',
    3111808: 'RXZU12FFC4',
    3111809: 'RXZU12FFC4',
    3111810: 'RXZU12FFC4',
    3111811: 'RXZU12FFC4',
    //任选四-组选6
    3111812: 'RXZU6FFC4',
    3111813: 'RXZU6FFC4',
    3111814: 'RXZU6FFC4',
    3111815: 'RXZU6FFC4',
    3111816: 'RXZU6FFC4',
    //任选四-组选4
    3111817: 'RXZU4FFC4',
    3111818: 'RXZU4FFC4',
    3111819: 'RXZU4FFC4',
    3111820: 'RXZU4FFC4',
    3111821: 'RXZU4FFC4',
    //腾讯分分彩end
    //mmc
    1010472: 'ZX3',
    1010473: 'ZXHZ',
    1010475: 'ZX3',
    1010476: 'ZXHZ',
    1010478: 'ZUS',
    1010479: 'ZUL',
    1010480: 'HHZX',
    1010481: 'ZUHZ',
    1010482: 'ZU3BD',
    1010484: 'ZUS',
    1010485: 'ZUL',
    1010486: 'HHZX',
    1010487: 'ZUHZ',
    1010488: 'ZU3BD',
    1010490: 'BDW1',
    1010491: 'BDW1',
    1010493: 'BDW2',
    1010495: 'ZX2',
    1010496: 'ZX2',
    1010497: 'ZXHZ2',
    1010498: 'ZXHZ2',
    1010501: 'DWD',
    1010502: 'DWD',
    1010503: 'DWD',
    1010504: 'DWD',
    1010505: 'DWD',
    1010507: 'DXDS',
    1010508: 'DXDS',
    1010510: 'ZX4',
    1010512: 'ZH4',
    1010514: 'SXZU24',
    1010515: 'SXZU12',
    1010516: 'SXZU6',
    1010517: 'SXZU4',
    1010519: 'ZX5',
    1010521: 'ZH5',
    1010523: 'WXZU120',
    1010524: 'WXZU60',
    1010525: 'WXZU30',
    1010526: 'WXZU20',
    1010527: 'WXZU10',
    1010528: 'WXZU5',
    1010530: 'BDW1',
    1010531: 'HSCS',
    1010532: 'SXBX',
    1010533: 'SJFC',
    1010535: 'ZX3',
    1010536: 'ZXHZ',
    1010538: 'ZUS',
    1010539: 'ZUL',
    1010540: 'HHZX',
    1010541: 'ZUHZ',
    1010543: 'RXZXSSC2',
    1010544: 'RXZXSSC2',
    1010545: 'RXZXSSC2',
    1010546: 'RXZXSSC2',
    1010547: 'RXZXSSC2',
    1010548: 'RXZXSSC2',
    1010549: 'RXZXSSC2',
    1010550: 'RXZXSSC2',
    1010551: 'RXZXSSC2',
    1010552: 'RXZXSSC2',
    1010553: 'RXZXSSC2DS',
    1010554: 'RXZXSSC2DS',
    1010555: 'RXZXSSC2DS',
    1010556: 'RXZXSSC2DS',
    1010557: 'RXZXSSC2DS',
    1010558: 'RXZXSSC2DS',
    1010559: 'RXZXSSC2DS',
    1010560: 'RXZXSSC2DS',
    1010561: 'RXZXSSC2DS',
    1010562: 'RXZXSSC2DS',
    1010563: 'RXZXSSC2HZ',
    1010564: 'RXZXSSC2HZ',
    1010565: 'RXZXSSC2HZ',
    1010566: 'RXZXSSC2HZ',
    1010567: 'RXZXSSC2HZ',
    1010568: 'RXZXSSC2HZ',
    1010569: 'RXZXSSC2HZ',
    1010570: 'RXZXSSC2HZ',
    1010571: 'RXZXSSC2HZ',
    1010572: 'RXZXSSC2HZ',
    1010574: 'RXZUSSC2',
    1010575: 'RXZUSSC2',
    1010576: 'RXZUSSC2',
    1010577: 'RXZUSSC2',
    1010578: 'RXZUSSC2',
    1010579: 'RXZUSSC2',
    1010580: 'RXZUSSC2',
    1010581: 'RXZUSSC2',
    1010582: 'RXZUSSC2',
    1010583: 'RXZUSSC2',
    1010584: 'RXZUSSC2DS',
    1010585: 'RXZUSSC2DS',
    1010586: 'RXZUSSC2DS',
    1010587: 'RXZUSSC2DS',
    1010588: 'RXZUSSC2DS',
    1010589: 'RXZUSSC2DS',
    1010590: 'RXZUSSC2DS',
    1010591: 'RXZUSSC2DS',
    1010592: 'RXZUSSC2DS',
    1010593: 'RXZUSSC2DS',
    1010594: 'RXZUSSC2HZ',
    1010595: 'RXZUSSC2HZ',
    1010596: 'RXZUSSC2HZ',
    1010597: 'RXZUSSC2HZ',
    1010598: 'RXZUSSC2HZ',
    1010599: 'RXZUSSC2HZ',
    1010600: 'RXZUSSC2HZ',
    1010601: 'RXZUSSC2HZ',
    1010602: 'RXZUSSC2HZ',
    1010603: 'RXZUSSC2HZ',
    1010605: 'RXZXSSC3',
    1010606: 'RXZXSSC3',
    1010607: 'RXZXSSC3',
    1010608: 'RXZXSSC3',
    1010609: 'RXZXSSC3',
    1010610: 'RXZXSSC3',
    1010611: 'RXZXSSC3',
    1010612: 'RXZXSSC3',
    1010613: 'RXZXSSC3',
    1010614: 'RXZXSSC3',
    1010615: 'RXZXSSC3DS',
    1010616: 'RXZXSSC3DS',
    1010617: 'RXZXSSC3DS',
    1010618: 'RXZXSSC3DS',
    1010619: 'RXZXSSC3DS',
    1010620: 'RXZXSSC3DS',
    1010621: 'RXZXSSC3DS',
    1010622: 'RXZXSSC3DS',
    1010623: 'RXZXSSC3DS',
    1010624: 'RXZXSSC3DS',
    1010625: 'RXZXSSC3HZ',
    1010626: 'RXZXSSC3HZ',
    1010627: 'RXZXSSC3HZ',
    1010628: 'RXZXSSC3HZ',
    1010629: 'RXZXSSC3HZ',
    1010630: 'RXZXSSC3HZ',
    1010631: 'RXZXSSC3HZ',
    1010632: 'RXZXSSC3HZ',
    1010633: 'RXZXSSC3HZ',
    1010634: 'RXZXSSC3HZ',
    1010636: 'RXZUSANSSC3',
    1010637: 'RXZUSANSSC3',
    1010638: 'RXZUSANSSC3',
    1010639: 'RXZUSANSSC3',
    1010641: 'RXZUSANSSC3',
    1010642: 'RXZUSANSSC3',
    1010643: 'RXZUSANSSC3',
    1010644: 'RXZUSANSSC3',
    1010645: 'RXZUSANSSC3',
    1010646: 'RXZUSIXSSC3',
    1010647: 'RXZUSIXSSC3',
    1010648: 'RXZUSIXSSC3',
    1010649: 'RXZUSIXSSC3',
    1010650: 'RXZUSIXSSC3',
    1010651: 'RXZUSIXSSC3',
    1010652: 'RXZUSIXSSC3',
    1010653: 'RXZUSIXSSC3',
    1010654: 'RXZUSIXSSC3',
    1010655: 'RXZUSIXSSC3',
    1010656: 'RXZUSSC3HH',
    1010657: 'RXZUSSC3HH',
    1010658: 'RXZUSSC3HH',
    1010659: 'RXZUSSC3HH',
    1010660: 'RXZUSSC3HH',
    1010661: 'RXZUSSC3HH',
    1010662: 'RXZUSSC3HH',
    1010663: 'RXZUSSC3HH',
    1010664: 'RXZUSSC3HH',
    1010665: 'RXZUSSC3HH',
    1010666: 'RXZUSSC3HZ',
    1010667: 'RXZUSSC3HZ',
    1010668: 'RXZUSSC3HZ',
    1010669: 'RXZUSSC3HZ',
    1010670: 'RXZUSSC3HZ',
    1010671: 'RXZUSSC3HZ',
    1010672: 'RXZUSSC3HZ',
    1010673: 'RXZUSSC3HZ',
    1010674: 'RXZUSSC3HZ',
    1010675: 'RXZUSSC3HZ',
    1010676: 'RXZUSANSSC3',
    1010678: 'RXZXSSC4',
    1010679: 'RXZXSSC4',
    1010680: 'RXZXSSC4',
    1010681: 'RXZXSSC4',
    1010682: 'RXZXSSC4',
    1010683: 'RXZXSSC4DS',
    1010684: 'RXZXSSC4DS',
    1010685: 'RXZXSSC4DS',
    1010686: 'RXZXSSC4DS',
    1010687: 'RXZXSSC4DS',
    1010689: 'RXZU24SSC4',
    1010690: 'RXZU24SSC4',
    1010691: 'RXZU24SSC4',
    1010692: 'RXZU24SSC4',
    1010693: 'RXZU24SSC4',
    1010694: 'RXZU12SSC4',
    1010695: 'RXZU12SSC4',
    1010696: 'RXZU12SSC4',
    1010697: 'RXZU12SSC4',
    1010698: 'RXZU12SSC4',
    1010699: 'RXZU6SSC4',
    1010700: 'RXZU6SSC4',
    1010701: 'RXZU6SSC4',
    1010702: 'RXZU6SSC4',
    1010703: 'RXZU6SSC4',
    1010704: 'RXZU4SSC4',
    1010705: 'RXZU4SSC4',
    1010706: 'RXZU4SSC4',
    1010707: 'RXZU4SSC4',
    1010708: 'RXZU4SSC4',
    1020494: 'BDW2',
    1020500: 'ZU2',
    1020501: 'ZU2',
    1020502: 'ZUHZ2',
    1020503: 'ZUHZ2'
};
//投注
const checkNum = () => {
    //实时计算投注注数与金额等
    var nums = 0, mname = methodId[stateVar.aboutGame.methodID];//玩法的简写,如:'ZX3'
    //var modes = parseInt($("#lt_project_modes").val(),10);//投注模式
    //alert(modes+'----'+mname);
    //01:验证号码合法性并计算注数
    let tempAr = mobx.toJS(stateVar.aboutGame.data_sel);
    if (stateVar.aboutGame.otype == 'input') {//输入框形式的检测
        if (tempAr[0].length > 0) {//如果输入的有值
            switch (mname) {
                case 'ZX3'  :
                    nums = _inputCheck_Num(3, false);
                    break;
                case 'ZX4'  :
                    nums = _inputCheck_Num(4, false);
                    break;
                case 'ZX5'  :
                    nums = _inputCheck_Num(5, false);
                    break;
                //任选三混合组选
                case 'RXZUWFC3HH' :
                case 'RXZUFFC3HH' :
                case 'RXZUSSC3HH' :
                case 'HHZX' :
                case 'HHHZX' :
                    nums = _inputCheck_Num(3, false, _HHZXcheck, true);
                    if (mname == 'RXZUSSC3HH' || mname == 'RXZUWFC3HH' || mname == 'RXZUFFC3HH') {
                        nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 3);
                        /*recordPoschoose();*/
                    }
                    break;
                case 'ZX2'  :
                    nums = _inputCheck_Num(2, false);
                    break;
                case 'ZU2'  :
                    nums = _inputCheck_Num(2, false, _HHZXcheck, true);
                    break;
                case 'SDZX3':
                    nums = _inputCheck_Num(8, false, _SDinputCheck, false);
                    break;
                case 'SDZU3':
                    nums = _inputCheck_Num(8, false, _SDinputCheck, true);
                    break;
                case 'SDZX2':
                    nums = _inputCheck_Num(5, false, _SDinputCheck, false);
                    break;
                case 'SDZU2':
                    nums = _inputCheck_Num(5, false, _SDinputCheck, true);
                    break;
                case 'SDRX1':
                    nums = _inputCheck_Num(2, false, _SDinputCheck, false);
                    break;
                case 'SDRX2':
                    nums = _inputCheck_Num(5, false, _SDinputCheck, true);
                    break;
                case 'SDRX3':
                    nums = _inputCheck_Num(8, false, _SDinputCheck, true);
                    break;
                case 'SDRX4':
                    nums = _inputCheck_Num(11, false, _SDinputCheck, true);
                    break;
                case 'SDRX5':
                    nums = _inputCheck_Num(14, false, _SDinputCheck, true);
                    break;
                case 'SDRX6':
                    nums = _inputCheck_Num(17, false, _SDinputCheck, true);
                    break;
                case 'SDRX7':
                    nums = _inputCheck_Num(20, false, _SDinputCheck, true);
                    break;
                case 'SDRX8':
                    nums = _inputCheck_Num(23, false, _SDinputCheck, true);
                    break;
                //任选二-直选单式
                case "RXZXSSC2DS":
                case "RXZXWFC2DS":
                case "RXZXFFC2DS":
                    nums = _inputCheck_Num(2, false);
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 2);
                    /*recordPoschoose();*/
                    break;
                //任选二-组选单式
                case "RXZUSSC2DS":
                case "RXZUWFC2DS":
                case "RXZUFFC2DS":
                    nums = _inputCheck_Num(2, false, _HHZXcheck, true);
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 2);
                    /*recordPoschoose();*/
                    break;
                //任选三 直选 直选单式
                case "RXZXWFC3DS":
                case "RXZXFFC3DS":
                case "RXZXSSC3DS":
                    nums = _inputCheck_Num(3, false);
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 3);
                    /*recordPoschoose();*/
                    break;
                //任选四 任四直选 直选单式
                case "RXZXWFC4DS":
                case "RXZXFFC4DS":
                case "RXZXSSC4DS":
                    nums = _inputCheck_Num(4, false);
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 4);
                    /*recordPoschoose();*/
                    break;
                //pk10单式
                case "PK10ZX2":
                case "PK10ZX3":
                case "PK10ZX4":
                case "PK10ZX5":
                case "PK10ZX6":
                    var baseLen = parseInt(mname.substr(6, 1));
                    nums = play.calculateInputNumbersLength(play.checkInputNumbersArray(stateVar.aboutGame.data_sel[0], baseLen).length);
                    break;
                default :
                    break;
            }
        }
    } else {//其他选择号码形式[暂时就数字型和大小单双]
        let tmp_nums = 1;
        switch (mname) {//根据玩法分类不同做不同处理
            case"WXZU120":
                var s = tempAr[0].length;
                if (s > 4) {
                    nums += commone.Combination(s, 5)
                }
                break;
            case"WXZU60":
            case"WXZU30":
            case"WXZU20":
            case"WXZU10":
            case"WXZU5":
                if (tempAr[0].length >= stateVar.aboutGame.minchosen[0] && tempAr[1].length >= stateVar.aboutGame.minchosen[1]) {
                    var h = Array.intersect(tempAr[0], tempAr[1]).length;
                    tmp_nums = commone.Combination(tempAr[0].length, stateVar.aboutGame.minchosen[0]) * commone.Combination(tempAr[1].length, stateVar.aboutGame.minchosen[1]);
                    if (h > 0) {
                        if (mname == "WXZU60") {
                            tmp_nums -= commone.Combination(h, 1) * commone.Combination(tempAr[1].length - 1, 2)
                        } else {
                            if (mname == "WXZU30") {
                                tmp_nums -= commone.Combination(h, 2) * commone.Combination(2, 1);
                                if (tempAr[0].length - h > 0) {
                                    tmp_nums -= commone.Combination(h, 1) * commone.Combination(tempAr[0].length - h, 1)
                                }
                            } else {
                                if (mname == "WXZU20") {
                                    tmp_nums -= commone.Combination(h, 1) * commone.Combination(tempAr[1].length - 1, 1)
                                } else {
                                    if (mname == "WXZU10" || mname == "WXZU5") {
                                        tmp_nums -= commone.Combination(h, 1)
                                    }
                                }
                            }
                        }
                    }
                    nums += tmp_nums
                }
                break;
            case 'ZXHZ' :   //直选和值特殊算法
            case 'RXZXWFC3HZ' :
            case 'RXZXFFC3HZ' :
            case 'RXZXSSC3HZ' :	//任选三直选和值
                var cc = {
                    0: 1,
                    1: 3,
                    2: 6,
                    3: 10,
                    4: 15,
                    5: 21,
                    6: 28,
                    7: 36,
                    8: 45,
                    9: 55,
                    10: 63,
                    11: 69,
                    12: 73,
                    13: 75,
                    14: 75,
                    15: 73,
                    16: 69,
                    17: 63,
                    18: 55,
                    19: 45,
                    20: 36,
                    21: 28,
                    22: 21,
                    23: 15,
                    24: 10,
                    25: 6,
                    26: 3,
                    27: 1
                };
            case 'ZUHZ' :   //混合组选特殊算法
            case 'RXZUWFC3HZ' :
            case 'RXZUFFC3HZ' :
            case 'RXZUSSC3HZ' :
                if (mname == 'ZUHZ' || mname == 'RXZUSSC3HZ' || mname == 'RXZUWFC3HZ' || mname == 'RXZUFFC3HZ') {//任选三组选和值
                    cc = {
                        1: 1,
                        2: 2,
                        3: 2,
                        4: 4,
                        5: 5,
                        6: 6,
                        7: 8,
                        8: 10,
                        9: 11,
                        10: 13,
                        11: 14,
                        12: 14,
                        13: 15,
                        14: 15,
                        15: 14,
                        16: 14,
                        17: 13,
                        18: 11,
                        19: 10,
                        20: 8,
                        21: 6,
                        22: 5,
                        23: 4,
                        24: 2,
                        25: 2,
                        26: 1
                    };
                }
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    for (let j = 0; j < s; j++) {
                        nums += cc[parseInt(tempAr[i][j], 10)];
                    }
                }
                ;
                if (mname == 'RXZXSSC3HZ' || mname == 'RXZUSSC3HZ' || mname == 'RXZXWFC3HZ' || mname == 'RXZUWFC3HZ' || mname == 'RXZXFFC3HZ' || mname == 'RXZUFFC3HZ') {//任选三直选和值,任选三组选和值
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 3);
                    /*recordPoschoose();*/
                }
                break;
            case 'ZUS'  :   //组三
            case 'HZUS'  :
            case 'RXZUSANWFC3'    :
            case 'RXZUSANFFC3'    :
            case 'RXZUSANSSC3'    :
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {//组三必须选两位或者以上
                        nums += s * (s - 1);
                    }
                }
                ;
                if (mname == 'RXZUSANSSC3' || mname == 'RXZUSANWFC3' || mname == 'RXZUSANFFC3') {
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 3);
                    /*recordPoschoose();*/
                }
                break;
            case 'ZUL'  :   //组六
            case 'HZUL'  :
            case 'RXZUSIXWFC3'    :
            case 'RXZUSIXFFC3'    :
            case 'RXZUSIXSSC3'    :
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 2) {//组六必须选三位或者以上
                        nums += s * (s - 1) * (s - 2) / 6;
                    }
                }
                ;
                if (mname == 'RXZUSIXSSC3' || mname == 'RXZUSIXWFC3' || mname == 'RXZUSIXFFC3') {
                    nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 3);
                    /*recordPoschoose();*/
                }
                break;
            case 'ZH5':
            case 'ZH4'  :   //组合4
            case 'ZH3'  :
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    if (tempAr[i].length == 0) {//有位置上没有选择
                        tmp_nums = 0;
                        break;
                    }
                    tmp_nums *= tempAr[i].length;
                }
                nums = tmp_nums * parseInt(mname.charAt(mname.length - 1));
                break;
            case "SXZU24":
                var s = tempAr[0].length;
                if (s > 3) {
                    nums += commone.Combination(s, 4)
                }
                break;
            case 'SXZU6':
                if (tempAr[0].length >= stateVar.aboutGame.minchosen[0]) {
                    //C(n,2)
                    nums += commone.Combination(tempAr[0].length, stateVar.aboutGame.minchosen[0]);
                }
                break;
            case"SXZU12":
            case"SXZU4":
                if (tempAr[0].length >= stateVar.aboutGame.minchosen[0] && tempAr[1].length >= stateVar.aboutGame.minchosen[1]) {
                    var h = Array.intersect(tempAr[0], tempAr[1]).length;
                    tmp_nums = commone.Combination(tempAr[0].length, stateVar.aboutGame.minchosen[0]) * commone.Combination(tempAr[1].length, stateVar.aboutGame.minchosen[1]);
                    if (h > 0) {
                        if (mname == "SXZU12") {
                            tmp_nums -= commone.Combination(h, 1) * commone.Combination(tempAr[1].length - 1, 1)
                        }
                        else {
                            if (mname == "SXZU4") {
                                tmp_nums -= commone.Combination(h, 1)
                            }
                        }
                    }
                    nums += tmp_nums
                }
                break;
            case 'BDW2'  :  //二码不定位
            case 'HBDW2'  :
            case 'ZU2'   :  //2位组选
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {//二码不定位必须选两位或者以上
                        nums += s * (s - 1) / 2;
                    }
                }
                ;
                break;

            case 'ZXHZ2':	//直选和值2

                cc = {
                    0: 1,
                    1: 2,
                    2: 3,
                    3: 4,
                    4: 5,
                    5: 6,
                    6: 7,
                    7: 8,
                    8: 9,
                    9: 10,
                    10: 9,
                    11: 8,
                    12: 7,
                    13: 6,
                    14: 5,
                    15: 4,
                    16: 3,
                    17: 2,
                    18: 1
                };
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    for (let j = 0; j < s; j++) {
                        nums += cc[parseInt(tempAr[i][j], 10)];
                    }
                }
                ;

                break;
            case 'ZUHZ2':	//组选和值2
                cc = {
                    0: 0,
                    1: 1,
                    2: 1,
                    3: 2,
                    4: 2,
                    5: 3,
                    6: 3,
                    7: 4,
                    8: 4,
                    9: 5,
                    10: 4,
                    11: 4,
                    12: 3,
                    13: 3,
                    14: 2,
                    15: 2,
                    16: 1,
                    17: 1,
                    18: 0
                };
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    for (let j = 0; j < s; j++) {
                        nums += cc[parseInt(tempAr[i][j], 10)];
                    }
                }
                ;
                break;
            case 'DWD'  :   //定位胆所有在一起特殊处理
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    nums += tempAr[i].length;
                }
                ;
                break;
            case 'SDZX3': //山东11运前三直选
                nums = 0;
                if (tempAr[0].length > 0 && tempAr[1].length > 0 && tempAr[2].length > 0) {
                    for (i = 0; i < tempAr[0].length; i++) {
                        for (let j = 0; j < tempAr[1].length; j++) {
                            for (let k = 0; k < tempAr[2].length; k++) {
                                if (tempAr[0][i] != tempAr[1][j] && tempAr[0][i] != tempAr[2][k] && tempAr[1][j] != tempAr[2][k]) {
                                    nums++;
                                }
                            }
                        }
                    }
                }
                break;
            case 'SDZU3': //山东11运前三组选
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 2) {//组六必须选三位或者以上
                        nums += s * (s - 1) * (s - 2) / 6;
                    }
                }
                ;
                break;
            case 'SDZX2': //山动十一运前二直选
                nums = 0;
                if (tempAr[0].length > 0 && tempAr[1].length > 0) {
                    for (i = 0; i < tempAr[0].length; i++) {
                        for (let j = 0; j < tempAr[1].length; j++) {
                            if (tempAr[0][i] != tempAr[1][j]) {
                                nums++;
                            }
                        }
                    }
                }
                break;
            case 'SDZU2': //山东十一运前二组选
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {//组六必须选三位或者以上
                        nums += s * (s - 1) / 2;
                    }
                }
                ;
                break;
            case 'SDBDW':
            case 'SDDWD':
            case 'SDDDS':
            case 'SDCZW':
            case 'SDRX1': //任选1中1
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    nums += tempAr[i].length;
                }
                ;
                break;
            case 'SDRX2': //任选2中2
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {//二码不定位必须选两位或者以上
                        nums += s * (s - 1) / 2;
                    }
                }
                ;
                break;
            case 'SDRX3': //任选3中3
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 2) {//必须选三位或者以上
                        nums += s * (s - 1) * (s - 2) / 6;
                    }
                }
                ;
                break;
            case 'SDRX4': //任选4中4
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 3) {//必须选四位或者以上
                        nums += s * (s - 1) * (s - 2) * (s - 3) / 24;
                    }
                }
                ;
                break;
            case 'SDRX5': //任选5中5
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 4) {//必须选四位或者以上
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120;
                    }
                }
                ;
                break;
            case 'SDRX6': //任选6中6
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 5) {//必须选四位或者以上
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720;
                    }
                }
                ;
                break;
            case 'SDRX7': //任选7中7
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 6) {//必须选四位或者以上
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040;
                    }
                }
                ;
                break;
            case 'SDRX8': //任选8中8
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 7) {//必须选四位或者以上
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) * (s - 7) / 40320;
                    }
                }
                ;
                break;
//下面是北京快乐吧
            case 'BJRX2': //北京快乐8 任选2
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {//必须选 两位到八位
                        nums += s * (s - 1) / 2;
                    }
                }
                ;
                break;
            case 'BJRX3': //北京快乐8 任选3
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 2) {//必须选 三位到八位
                        nums += s * (s - 1) * (s - 2) / 6;
                    }
                }
                ;
                break;
            case 'BJRX4': //北京快乐8 任选4
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 3) {//必须选 四位到八位
                        nums += s * (s - 1) * (s - 2) * (s - 3) / 24;
                    }
                }
                ;
                break;
            case 'BJRX5': //北京快乐8 任选5
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 4) {//必须选 五位到八位
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) / 120;
                    }
                }
                ;
                break;
            case 'BJRX6': //北京快乐8 任选6
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 5) {//必须选 六位到八位
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) / 720;
                    }
                }
                ;
                break;
            case 'BJRX7': //北京快乐8 任选7
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 6) {//必须选 七位到八位
                        nums += s * (s - 1) * (s - 2) * (s - 3) * (s - 4) * (s - 5) * (s - 6) / 5040;
                    }
                }
                ;
                break;
            case "RXZXWFC2":
            case "RXZXFFC2":
            case "RXZXSSC2": //任选二直选
                var wan = tempAr[0].length;
                var qian = tempAr[1].length;
                var bai = tempAr[2].length;
                var shi = tempAr[3].length;
                var ge = tempAr[4].length;
                //万*千 + 万*百 + 万*十 + 万*个 + 千*百 + 千*十 + 千*个 + 百*十 + 百*个 + 十*个
                nums += wan * qian + wan * bai + wan * shi + wan * ge + qian * bai + qian * shi + qian * ge + bai * shi + bai * ge + shi * ge;
                break;
            case "RXZUWFC2":
            case "RXZUFFC2":
            case "RXZUSSC2": //任选二组选
                for (let i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    if (s > 1) {
                        nums += s * (s - 1) / 2;
                    }
                }
                ;
                var select_num = $(".selPosition .selected").length;
                var multi = 0;
                switch (select_num) {
                    case 0:
                        multi = 0;
                        break;
                    case 1:
                        multi = 0;
                        break;
                    case 2:
                        multi = 1;
                        break;
                    case 3:
                        multi = 3;
                        break;
                    case 4:
                        multi = 6;
                        break;
                    case 5:
                        multi = 10;
                        break;
                }
                nums = nums * multi;
                /*recordPoschoose();*/
                break;
            //任选二-直选和值
            case "RXZXWFC2HZ":
            case "RXZXFFC2HZ":
            case "RXZXSSC2HZ":
                cc = {
                    0: 1,
                    1: 2,
                    2: 3,
                    3: 4,
                    4: 5,
                    5: 6,
                    6: 7,
                    7: 8,
                    8: 9,
                    9: 10,
                    10: 9,
                    11: 8,
                    12: 7,
                    13: 6,
                    14: 5,
                    15: 4,
                    16: 3,
                    17: 2,
                    18: 1
                };
                for (let i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    for (let j = 0; j < s; j++) {
                        nums += cc[parseInt(tempAr[i][j], 10)];
                    }
                }
                nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 2);
                /*recordPoschoose();*/
                break;
            //任选二-组选和值
            case "RXZUWFC2HZ":
            case "RXZUFFC2HZ":
            case "RXZUSSC2HZ":
                cc = {
                    0: 0,
                    1: 1,
                    2: 1,
                    3: 2,
                    4: 2,
                    5: 3,
                    6: 3,
                    7: 4,
                    8: 4,
                    9: 5,
                    10: 4,
                    11: 4,
                    12: 3,
                    13: 3,
                    14: 2,
                    15: 2,
                    16: 1,
                    17: 1,
                    18: 0
                };
                for (let i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var s = tempAr[i].length;
                    for (let j = 0; j < s; j++) {
                        nums += cc[parseInt(tempAr[i][j], 10)];
                    }
                }
                nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 2);
                /*recordPoschoose();*/
                break;
            //任选三-直选复式
            case "RXZXSSC3":
            case "RXZXWFC3":
            case "RXZXFFC3":
                var aCodePosition = [];
                for (let i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var codelen = tempAr[i].length;
                    if (codelen > 0) {
                        aCodePosition.push(i);
                    }
                }
                var aPositionCombo = commone.getCombination(aCodePosition, 3);
                var iComboLen = aPositionCombo.length;
                var aCombo = [];
                var iLen = 0;
                var tmpNums = 1;
                for (let j = 0; j < iComboLen; j++) {
                    aCombo = aPositionCombo[j].split(",");
                    iLen = aCombo.length;
                    tmpNums = 1;
                    for (h = 0; h < iLen; h++) {
                        tmpNums *= tempAr[aCombo[h]].length;
                    }
                    nums += tmpNums;
                }
                break;
            //任选四-直选复式
            case "RXZXWFC4":
            case "RXZXFFC4":
            case "RXZXSSC4":
                var aCodePosition = [];
                for (let i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    var codelen = tempAr[i].length;
                    if (codelen > 0) {
                        aCodePosition.push(i);
                    }
                }
                var aPositionCombo = commone.getCombination(aCodePosition, 4);
                var iComboLen = aPositionCombo.length;
                var aCombo = [];
                var iLen = 0;
                var tmpNums = 1;
                for (let j = 0; j < iComboLen; j++) {
                    aCombo = aPositionCombo[j].split(",");
                    iLen = aCombo.length;
                    tmpNums = 1;
                    for (h = 0; h < iLen; h++) {
                        tmpNums *= tempAr[aCombo[h]].length;
                    }
                    nums += tmpNums;
                }
                break;
            //任选四-组选-组选24
            case "RXZU24SSC4":
            case "RXZU24WFC4":
            case "RXZU24FFC4":
                var s = tempAr[0].length;
                if (s > 3) {
                    nums += commone.Combination(s, 4);
                }
                nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 4);
                /*recordPoschoose();*/
                break;
            //任选四-组选-组选12
            case "RXZU12WFC4":
            case "RXZU4WFC4":
            case "RXZU12FFC4":
            case "RXZU4FFC4":
            case "RXZU12SSC4":
            case "RXZU4SSC4":
                if (tempAr[0].length >= stateVar.aboutGame.minchosen[0] && tempAr[1].length >= stateVar.aboutGame.minchosen[1]) {
                    var h = Array.intersect(tempAr[0], tempAr[1]).length;
                    tmp_nums = commone.Combination(tempAr[0].length, stateVar.aboutGame.minchosen[0]) * commone.Combination(tempAr[1].length, stateVar.aboutGame.minchosen[1]);
                    if (h > 0) {
                        if (mname == "RXZU12SSC4" || mname == "RXZU12WFC4" || mname == "RXZU12FFC4") {
                            tmp_nums -= commone.Combination(h, 1) * commone.Combination(tempAr[1].length - 1, 1);
                        } else {
                            if (mname == "RXZU4SSC4" || mname == "RXZU4WFC4" || mname == "RXZU4FFC4") {
                                tmp_nums -= commone.Combination(h, 1);
                            }
                        }
                    }
                    nums += tmp_nums;
                }
                nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 4);
                /*recordPoschoose();*/
                break;
            //任选四-组选-组选6
            case "RXZU6WFC4":
            case "RXZU6FFC4":
            case "RXZU6SSC4":
                if (tempAr[0].length >= stateVar.aboutGame.minchosen[0]) {
                    nums += commone.Combination(tempAr[0].length, stateVar.aboutGame.minchosen[0]);
                }
                nums *= $.lt_position_sel.length == 0 ? 0 : commone.Combination($.lt_position_sel.length, 4);
                /*recordPoschoose();*/
                break;
            //3星直选跨度
            case '3XZXKD' :
                var len = tempAr[0].length, n;
                for (var i = 0; i < len; i++) {
                    n = parseInt(tempAr[0][i], 10);
                    if (n === 0) {
                        nums += 10;
                    } else {
                        nums += (10 - n) * n * 6;
                    }
                }
                break;
            //3星直选组合
            case '3XZXZH' :
                var len = tempAr.length;
                for (var i = 0; i < len; i++) {
                    tmp_nums *= tempAr[i].length;
                }
                nums = tmp_nums * 3;
                break;
            //三星组选_组三跨度
            case '3XZXZSKD' :
                var len = tempAr[0].length, n;
                for (var i = 0; i < len; i++) {
                    n = parseInt(tempAr[0][i], 10);
                    nums += (10 - n) * 6;
                }
                break;
            //三星组选_组六跨度
            case '3XZXZLKD' :
                var len = tempAr[0].length, n;
                for (var i = 0; i < len; i++) {
                    n = parseInt(tempAr[0][i], 10);
                    nums += (n - 1) * (10 - n) * 6;
                }
                break;
            case '3XDT' ://三码胆拖
                var danlen = tempAr[0].length;
                var tuolen = tempAr[1].length;
                if (danlen !== 0 && tuolen !== 0) {
                    if (danlen === 1) {
                        nums = commone.Combination(tuolen, 2);
                    } else {
                        nums = tuolen;
                    }
                }
                break;
            case '4XDT' ://四码胆拖
                var danlen = tempAr[0].length;
                var tuolen = tempAr[1].length;
                if (danlen !== 0 && tuolen !== 0) {
                    if (danlen === 1) {
                        nums = commone.Combination(tuolen, 3);
                    } else if (danlen === 2) {
                        nums = commone.Combination(tuolen, 2);
                    } else {
                        nums = tuolen;
                    }
                }
                break;
            case '5XDT' ://五码胆拖
                var danlen = tempAr[0].length;
                var tuolen = tempAr[1].length;
                if (danlen !== 0 && tuolen !== 0) {
                    if (danlen === 1) {
                        nums = commone.Combination(tuolen, 4);
                    } else if (danlen === 2) {
                        nums = commone.Combination(tuolen, 3);
                    } else if (danlen === 3) {
                        nums = commone.Combination(tuolen, 2);
                    } else {
                        nums = tuolen;
                    }
                }
                break;
            case 'ZU3BD' ://三星组选包胆
                var len = tempAr[0].length;
                if (len === 1) {
                    nums = 54;
                }
                break;
            //pk10
            case "PK10ZX2":
                nums = 0;
                if (tempAr[0].length > 0 && tempAr[1].length > 0) {
                    for (i = 0; i < tempAr[0].length; i++) {
                        for (let j = 0; j < tempAr[1].length; j++) {
                            if (tempAr[0][i] != tempAr[1][j]) {
                                nums++;
                            }
                        }
                    }
                }
                break;
            case "PK10ZX3":
                nums = 0;
                if (tempAr[0].length > 0 && tempAr[1].length > 0 && tempAr[2].length > 0) {
                    for (i = 0; i < tempAr[0].length; i++) {
                        for (let j = 0; j < tempAr[1].length; j++) {
                            for (let k = 0; k < tempAr[2].length; k++) {
                                if (tempAr[0][i] != tempAr[1][j] && tempAr[0][i] != tempAr[2][k] && tempAr[1][j] != tempAr[2][k]) {
                                    nums++;
                                }
                            }
                        }
                    }
                }
                break;
            case "PK10ZX4":
                nums = 0;
                if (tempAr[0].length > 0 && tempAr[1].length > 0 && tempAr[2].length > 0 && tempAr[3].length > 0) {
                    for (i = 0; i < tempAr[0].length; i++) {
                        for (let j = 0; j < tempAr[1].length; j++) {
                            for (let k = 0; k < tempAr[2].length; k++) {
                                for (let x = 0; x < tempAr[3].length; x++) {
                                    if (tempAr[0][i] != tempAr[1][j] &&
                                        tempAr[0][i] != tempAr[2][k] &&
                                        tempAr[0][i] != tempAr[3][x] &&
                                        tempAr[1][j] != tempAr[2][k] &&
                                        tempAr[1][j] != tempAr[3][x] &&
                                        tempAr[2][k] != tempAr[3][x]) {
                                        nums++;
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case "PK10ZX5":
                nums = 0;
                var data_sel1 = tempAr[0];
                var data_sel2 = tempAr[1];
                var data_sel3 = tempAr[2];
                var data_sel4 = tempAr[3];
                var data_sel5 = tempAr[4];
                if (data_sel1.length > 0 && data_sel2.length > 0 && data_sel3.length > 0 && data_sel4.length > 0 && data_sel5.length > 0) {
                    for (let i = 0; i < data_sel1.length; i++) {
                        for (let j = 0; j < data_sel2.length; j++) {
                            for (let k = 0; k < data_sel3.length; k++) {
                                for (let x = 0; x < data_sel4.length; x++) {
                                    for (let y = 0; y < data_sel5.length; y++) {
                                        if (data_sel1[i] != data_sel2[j] &&
                                            data_sel1[i] != data_sel3[k] &&
                                            data_sel1[i] != data_sel4[x] &&
                                            data_sel1[i] != data_sel5[y] &&
                                            data_sel2[j] != data_sel3[k] &&
                                            data_sel2[j] != data_sel4[x] &&
                                            data_sel2[j] != data_sel5[y] &&
                                            data_sel3[k] != data_sel4[x] &&
                                            data_sel3[k] != data_sel5[y] &&
                                            data_sel4[x] != data_sel5[y]) {
                                            nums++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case "PK10ZX6":
                nums = 0;
                var data_sel1 = tempAr[0];
                var data_sel2 = tempAr[1];
                var data_sel3 = tempAr[2];
                var data_sel4 = tempAr[3];
                var data_sel5 = tempAr[4];
                var data_sel6 = tempAr[5];
                if (data_sel1.length > 0 && data_sel2.length > 0 && data_sel3.length > 0 && data_sel4.length > 0 && data_sel5.length > 0 && data_sel6.length > 0) {
                    for (let i = 0; i < data_sel1.length; i++) {
                        for (let j = 0; j < data_sel2.length; j++) {
                            for (let k = 0; k < data_sel3.length; k++) {
                                for (let x = 0; x < data_sel4.length; x++) {
                                    for (let y = 0; y < data_sel5.length; y++) {
                                        for (let z = 0; z < data_sel6.length; z++) {
                                            if (data_sel1[i] != data_sel2[j] &&
                                                data_sel1[i] != data_sel3[k] &&
                                                data_sel1[i] != data_sel4[x] &&
                                                data_sel1[i] != data_sel5[y] &&
                                                data_sel1[i] != data_sel6[z] &&
                                                data_sel2[j] != data_sel3[k] &&
                                                data_sel2[j] != data_sel4[x] &&
                                                data_sel2[j] != data_sel5[y] &&
                                                data_sel2[j] != data_sel6[z] &&
                                                data_sel3[k] != data_sel4[x] &&
                                                data_sel3[k] != data_sel5[y] &&
                                                data_sel3[k] != data_sel6[z] &&
                                                data_sel4[x] != data_sel5[y] &&
                                                data_sel4[x] != data_sel6[z] &&
                                                data_sel5[y] != data_sel6[z]) {
                                                nums++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                break;
            case "PK10DWD":
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    nums += tempAr[i].length;
                }
                ;
                break;
            default     : //默认情况
                for (i = 0; i <= stateVar.aboutGame.max_place; i++) {
                    if (tempAr[i].length == 0) {//有位置上没有选择
                        tmp_nums = 0;
                        break;
                    }
                    tmp_nums *= tempAr[i].length;
                }
                nums = tmp_nums;
                break;
        }
    }
    return nums;
};
let _inputCheck_Num = (l, e, fun, sort) => {
    var nums = stateVar.aboutGame.data_sel[0].length;
    var error = [];
    var newsel = [];
    var partn = "";
    l = parseInt(l, 10);
    switch (l) {
        case 2 :
            partn = /^[0-9]{2}$/;
            break;
        case 4 :
            partn = /^[0-9\s]{4}$/;
            break;
        case 5 :
            partn = /^[0-9\s]{5}$/;
            break;
        case 8 :
            partn = /^[0-9\s]{8}$/;
            break;
        case 11 :
            partn = /^[0-9\s]{11}$/;
            break;
        case 14 :
            partn = /^[0-9\s]{14}$/;
            break;
        case 17 :
            partn = /^[0-9\s]{17}$/;
            break;
        case 20 :
            partn = /^[0-9\s]{20}$/;
            break;
        case 23 :
            partn = /^[0-9\s]{23}$/;
            break;
        default:
            partn = /^[0-9]{3}$/;
            break;
    }
    fun = $.isFunction(fun) ? fun : function (s) {
        return true;
    };
    $.each(stateVar.aboutGame.data_sel[0], function (i, n) {
        n = $.trim(n);
        if (partn.test(n) && fun(n, l)) {//合格号码
            if (sort) {
                if (n.indexOf(" ") == -1) {
                    n = n.split("");
                    n.sort(_SortNum);
                    n = n.join("");
                } else {
                    n = n.split(" ");
                    n.sort(_SortNum);
                    n = n.join(" ");
                }
            }
            stateVar.aboutGame.data_sel[0][i] = n;
            newsel.push(n);
        } else {//不合格则注数减
            if (n.length > 0) {
                error.push(n);
            }
            nums = nums - 1;
        }
    });
    if (e == true) {
        stateVar.aboutGame.data_sel[0] = newsel;
        return error;
    }
    return nums;
};
//记录万千百十个的选择
let recordPoschoose = () => {
    var str = "";
    $("input[name='pos[]']:checked").each(function () {
        if ($(this).attr("checked")) {
            str += $(this).val() + ",";
        }
    })
    $("input[name='poschoose']").val(str.slice(0, -1));
};
/************************ 验证号码合法性以及计算单笔投注注数以及金额 ***********************/
let _HHZXcheck = (n, len) => {//混合组选合法号码检测，合法返回TRUE，非法返回FALSE,n号码，len号码长度
    if (len == 2) {//两位
        var a = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99'];
    } else {//三位[默认]
        var a = ['000', '111', '222', '333', '444', '555', '666', '777', '888', '999'];
    }
    n = n.toString();
    if ($.inArray(n, a) == -1) {//不在非法列表中
        return true;
    }
    return false;
};
let _SDinputCheck = (n, len) => {//山东十一运的手动输入型的检测[不能重复，只能是01-11的数字]
    let t = n.split(" ");
    let l = t.length;
    for (let i = 0; i < l; i++) {
        if (Number(t[i]) > 11 || Number(t[i]) < 1) {//超过指定范围
            return false;
        }
        for (let j = i + 1; j < l; j++) {
            if (Number(t[i]) == Number(t[j])) {//重复的号码
                return false;
            }
        }
    }
    return true;
};
const _SortNum = (a, b) => {//数字大小排序
    if (stateVar.aboutGame.otype != 'input') {
        a = a.replace(/5单0双/g, 0).replace(/4单1双/g, 1).replace(/3单2双/g, 2).replace(/2单3双/g, 3).replace(/1单4双/g, 4).replace(/0单5双/g, 5);
        a = a.replace(/大/g, 0).replace(/小/g, 1).replace(/单/g, 2).replace(/双/g, 3).replace(/\s/g, "");
        b = b.replace(/5单0双/g, 0).replace(/4单1双/g, 1).replace(/3单2双/g, 2).replace(/2单3双/g, 3).replace(/1单4双/g, 4).replace(/0单5双/g, 5);
        b = b.replace(/大/g, 0).replace(/小/g, 1).replace(/单/g, 2).replace(/双/g, 3).replace(/\s/g, "");
    }
    a = parseInt(a, 10);
    b = parseInt(b, 10);
    if (isNaN(a) || isNaN(b)) {
        return true;
    }
    return (a - b);
};
let play = {
    //文本框输入计算
    calculateInputNumbersLength: (num_len) => {
        return num_len;
    },
    //格式化文本域的值
    formatInputNumbers: () => {
        var val = $(".textAreaClass").val();
        return play.replaceInputNumbers(val, " ");
    },
    //删除文本域中的重复和长度不符合玩法的号码,参数（该玩法的号码长度，需要验证的数组）
    checkInputNumbersArray: (num_arr, baseLen) => {
        var base_len = baseLen;
        var num_separator = " ";
        var check_type = 1;
        return play.getCheckedInputNumbersArray(num_arr, base_len, num_separator, check_type);
    },
    replaceInputNumbers: (val, num_separator) => {
        val = val.replace(/[^\n\S]+/g, " ");
        if (num_separator == ' ') {
            val = val.replace(/[^\d\s]+|\n+/g, ",").replace(/(^[,]*)|([,]*$)/g, "")
                .replace(/\s+[,]+\s+|\s+[,]+|[,]+\s+/g, ",");
        }
        else {
            val = val.replace(/\D+/g, ",").replace(/(^[,]*)|([,]*$)/g, "");
        }
        //val = val.replace(/\s+|;+/g,",").replace(/\D+/g,",").replace(/(^[,]*)|([,]*$)/g,"");
        return val.split(",");
    },
    getCheckedInputNumbersArray: (num_arr, base_len, num_separator, check_type) => {
        stateVar.savePkInput = {};
        var error_num = [], repeat_num = [], no_repeat_num = [];
        var max = 10;
        var min = 1;
        var arr_len = num_arr.length;
        var num_dict = {};
        for (var i = 0; i < arr_len; i++) {
            var _n = num_arr[i];
            var num = _n.split(num_separator == '' ? /\D*/g : num_separator);
            //var num = _n.split(" ");
            var flag = num.length == base_len;
            if (flag) {
                for (let j = 0; j < num.length; j++) {
                    flag = num[j] <= max && num[j] >= min && num[j].indexOf("0") !== -1 && num[j].length < 3;
                    if (!flag)break;
                }
            }
            if (flag) {
                if (check_type == 1) {
                    flag = play.checkNumberNorepeat(num);
                } else if (check_type == 2) {
                    flag = play.check_input_num_repeat(num);
                } else if (check_type == 3) {
                    // TODO 号码排序
                    num.sort(function (a, b) {
                        return a > b ? 1 : -1;
                    });
                    flag = play.check_input_num_no_all_repeat(num);
                    if (flag) {
                        _n = num.join("");
                        if (_n in num_dict) flag = false;
                        else {
                            num_dict[_n] = '';
                            num_arr[i] = _n;
                        }
                    }
                } else if (check_type == 4) {
                    flag = play.check_input_num_repeat(num);
                    if (flag) flag = play.check_input_num_no_all_repeat(num);
                }
            }
            if (!flag) {
                error_num[error_num.length] = num.join(" ");
                num_arr.splice(i, 1);
                arr_len--;
                i--;
            } else {
                if (_n in num_dict) {
                    repeat_num[repeat_num.length] = '' + _n;
                }
                else {
                    num_dict[_n] = '';
                    no_repeat_num[no_repeat_num.length] = '' + _n;
                }
            }
        }
        stateVar.savePkInput = {
            error_num: error_num,
            repeat_num: no_repeat_num,
            right_num: num_arr,
            no_repeat_num: no_repeat_num
        };
        return num_arr;
    },
    //号码验证:不允许重复
    checkNumberNorepeat: (num) => {
        var flag = false;
        var num_len = num.length;
        for (var i = 0; i < num_len - 1; i++) {
            for (var j = i + 1; j < num_len; j++) {
                flag = num[i] != num[j];
                if (!flag) break;
            }
            if (!flag) break;
        }
        return flag;
    },
};
/*------------------------------------------------------------------------------------------------------------*/
//生成随机号码方法
const random = () => {
    let random_number = [];
    let mname = methodId[stateVar.aboutGame.methodID];
    let tmp_nums = 1;
    switch (mname) {
        case "SBTHDT":
            random_number = getSuiji(10, [1, 2, 0, 0, 0]);
            break;
        case "RXZXSSC2":
            random_number = getSuiji(10, [1, 1, 1, 1, 1]);
            break;
        case "RXZUSSC2":
            random_number = getSuiji(10, [2, 2, 2, 2, 2]);
            break;
        case "RXZXSSC3":
            random_number = getSuiji(10, [1, 1, 1, 1, 1]);
            break;
        case "RXZUSSC3":
            random_number = getSuiji(10, [1, 1, 1, 1, 1]);
            break;
        case "RX3ZU6SSC":
            random_number = getSuiji(25, [1, 0, 0, 0, 0]);
            break;
        case "WXZU120":
            random_number = getSuiji(10, [5, 0, 0, 0, 0]);
            break;
        case "WXZU60":
            random_number = getSuiji(10, [1, 3, 0, 0, 0]);
            break;
        case "WXZU30":
            random_number = getSuiji(10, [2, 1, 0, 0, 0]);
            break;
        case "WXZU20":
            random_number = getSuiji(10, [1, 2, 0, 0, 0]);
            break;
        case "WXZU10":
            random_number = getSuiji(10, [1, 1, 0, 0, 0]);
            break;
        case "WXZU5":
            random_number = getSuiji(10, [1, 1, 0, 0, 0]);
            break;
        case 'RXZXHZSSC3':
            random_number = getSuiji(27, [1, 0, 0, 0, 0]);
            break;
        case 'RXZXHZSSC2':
            random_number = getSuiji(18, [1, 0, 0, 0, 0]);
            break;
        case 'RXZUHZSSC2':
            random_number = getSuiji(17, [1, 0, 0, 0, 0]);
            random_number[0][0] += 1;
            break;
        case 'ZXHZ':

        case 'ZUHZ':
            random_number = getSuiji(25, [1, 0, 0, 0, 0]);
            random_number[0][0] += 1;
            break;
        case 'ZUS':
            random_number = getSuiji(10, [2, 0, 0, 0, 0]);
            break;
        case 'ZUL':
            random_number = getSuiji(10, [3, 0, 0, 0, 0]);
            break;
        case 'ZH5':
        case 'ZH4':
        case 'ZH3':
            random_number = getSuiji(10, [1, 1, 1, 1, 1]);
            break;
        case "SXZU24":
            random_number = getSuiji(10, [4, 0, 0, 0, 0]);
            break;
        case 'SXZU6':
            random_number = getSuiji(10, [2, 0, 0, 0, 0]);
            break;
        case "SXZU12":
            random_number = getSuiji(10, [1, 2, 0, 0, 0]);
            break;
        case "SXZU4":
            random_number = getSuiji(10, [1, 1, 0, 0, 0]);
            break;
        case 'BDW2':
        case 'ZU2':
            random_number = getSuiji(10, [2, 0, 0, 0, 0]);
            break;
        case 'ZXHZ2':
            random_number = getSuiji(18, [1, 0, 0, 0, 0]);
            break;
        case 'ZUHZ2':
            random_number = getSuiji(17, [1, 0, 0, 0, 0]);
            random_number[0][0] += 1;
            break;
        case 'DWD':
            random_number = getSuiji3(10, [1, 0, 0, 0, 0], "true");
            break;
        case 'SDZX3':
            random_number = getSuiji2(11, [1, 1, 1, 0, 0]);
            break;
        case 'SDZU3':
            random_number = getSuiji2(11, [3, 0, 0, 0, 0]);
            break;
        case 'SDZX2':
            random_number = getSuiji2(11, [1, 1, 0, 0, 0]);
            break;
        case 'SDZU2':
            random_number = getSuiji2(11, [2, 0, 0, 0, 0]);
            break;
        case 'SDDWD':
            let suijiNum = Math.random() * 10;
            if (suijiNum <= 3) {
                random_number = getSuiji2(11, [1, 0, 0, 0, 0]);
            } else if (suijiNum > 3 && suijiNum <= 6) {
                random_number = getSuiji2(11, [0, 1, 0, 0, 0]);
            } else {
                random_number = getSuiji2(11, [0, 0, 1, 0, 0]);
            }
            break;
        case 'SDBDW':
        case 'SDRX1':
            random_number = getSuiji2(11, [1, 0, 0, 0, 0]);
            break;
        case 'SDRX2':
            random_number = getSuiji2(11, [2, 0, 0, 0, 0]);
            break;
        case 'SDRX3':
            random_number = getSuiji2(11, [3, 0, 0, 0, 0]);
            break;
        case 'SDRX4':
            random_number = getSuiji2(11, [4, 0, 0, 0, 0]);
            break;
        case 'SDRX5':
            random_number = getSuiji2(11, [5, 0, 0, 0, 0]);
            break;
        case 'SDRX6':
            random_number = getSuiji2(11, [6, 0, 0, 0, 0]);
            break;
        case 'SDRX7':
            random_number = getSuiji2(11, [7, 0, 0, 0, 0]);
            break;
        case 'SDRX8':
            random_number = getSuiji2(11, [8, 0, 0, 0, 0]);
            break;
        case 'BJRX2':
            random_number = getSuiji(10, [2, 0, 0, 0, 0]);
            break;
        case 'BJRX3':
            random_number = getSuiji(10, [3, 0, 0, 0, 0]);
            break;
        case 'BJRX4':
            random_number = getSuiji(10, [4, 0, 0, 0, 0]);
            break;
        case 'BJRX5':
            random_number = getSuiji(10, [5, 0, 0, 0, 0]);
            break;
        case 'BJRX6':
            random_number = getSuiji(10, [6, 0, 0, 0, 0]);
            break;
        case 'BJRX7':
            random_number = getSuiji(10, [7, 0, 0, 0, 0]);
            break;
        case 'PK10DXDS':
        case 'DXDS':
            random_number = getSuiji(4, [1, 1, 0, 0, 0]);
            for (var i = random_number.length - 1; i >= 0; i--) {
                switch (random_number[i][0]) {
                    case 0:
                        random_number[i][0] = '大';
                        break;
                    case 1:
                        random_number[i][0] = '小';
                        break;

                    case 2:
                        random_number[i][0] = '单';
                        break;
                    case 3:
                        random_number[i][0] = '双';
                        break;
                }
                ;

            }
            ;
            break;
        case 'DXDS3':
            random_number = getSuiji(4, [1, 1, 1, 0, 0]);
            for (var i = random_number.length - 1; i >= 0; i--) {
                switch (random_number[i][0]) {
                    case 0:
                        random_number[i][0] = '大';
                        break;
                    case 1:
                        random_number[i][0] = '小';
                        break;

                    case 2:
                        random_number[i][0] = '单';
                        break;
                    case 3:
                        random_number[i][0] = '双';
                        break;
                }
                ;

            }
            ;
            break;
        case 'SD337': //220
            random_number = getSuiji2(11, [1, 1, 1]);
            break;
        case 'SD339': //222
            random_number = getSuiji2(11, [3]);
            break;
        case 'SD341': //224
            random_number = getSuiji2(11, [1, 1]);
            break;
        case 'SD343': //226
            random_number = getSuiji2(11, [2]);
            break;
        case 'SD345': //228
            random_number = getSuiji2(11, [1]);
            break;
        case 'SD347': //230
            random_number = getSuiji2(11, [1, 0, 0, 1, 1], "true");
            break;
        case 'SDDDS': //234
            var r5 = getSuijiDing(['5单0双', '4单1双', '3单2双', '2单3双', '1单4双', '0单5双']);
            var results = [];
            results[0] = r5;
            random_number = results;
            break;
        case 'SDCZW': //236
            random_number = getSuiji(1, [1], "zw");
            break;
        case 'SD355': //238
            random_number = getSuiji2(11, [1]);
            break;
        case 'SD357': //240
            random_number = getSuiji2(11, [2]);
            break;
        case 'SD359': //243
            random_number = getSuiji2(11, [3]);
            break;
        case 'SD361': //246
            random_number = getSuiji2(11, [4]);
            break;
        case 'SD363': //249
            random_number = getSuiji2(11, [5]);
            break;
        case 'SD365': //252
            random_number = getSuiji2(11, [6]);
            break;
        case 'SD367': //255
            random_number = getSuiji2(11, [7]);
            break;
        case 'SD369': //258
            random_number = getSuiji2(11, [8]);
            break;
        case 'CGJ':
            random_number = getSuiji2(10, [1]);
            break;
        case "PK10ZX2":
            random_number = getSuiji2(10, [1, 1]);
            break;
        case "PK10ZX3":
            random_number = getSuiji2(10, [1, 1, 1]);
            break;
        case "PK10ZX4":
            random_number = getSuiji2(10, [1, 1, 1, 1]);
            break;
        case "PK10ZX5":
            random_number = getSuiji2(10, [1, 1, 1, 1, 1]);
            break;
        case "PK10ZX6":
            random_number = getSuiji2(10, [1, 1, 1, 1, 1, 1]);
            break;
        case 'PK10DWD':
            random_number = getSuiji2(10, [1, 0, 0, 0, 0], 'true');
            break;
        case 'JSK3a1': //2338
            var list1 = getSuijiDing([11, 22, 33, 44, 55, 66]);
            var results = [];
            results[0] = list1;
            var oneN = String(results[0]).slice(0, 1);
            var datN = [1, 2, 3, 4, 5, 6];
            datN.splice(oneN - 1, 1);
            var list2 = getSuijiDing(datN);
            results[1] = list2;
            random_number = results;
            break;
        case 'JSK3a2': //2340
            var list1 = getSuijiDing(["11*", "22*", "33*", "44*", "55*", "66*"]);
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a3': //2342
            random_number = getSuiji(6, [3]);
            break;
        case 'JSK3a4': //2343
            random_number = getSuiji2(6, [2, 1], "true");
            break;
        case 'JSK3a4i': //2354
            random_number = getSuiji2(6, [2]);
            break;
        case 'JSK3a5': //2344
            var list1 = getSuijiDing([6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a6': //2346
            var list1 = ["通选"];
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a6i': //2350
            var list1 = ["通选"];
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a7': //2348
            var list1 = getSuijiDing([111, 222, 333, 444, 555, 666]);
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a8': //2352
            var list1 = getSuijiDing([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
            var results = [];
            results[0] = list1;
            random_number = results;
            break;
        case 'JSK3a9': //2355
            random_number = getSuiji(6, [1, 1]);
            break;
        default:
            random_number = getSuiji(10, [1, 1, 1, 1, 1]);
            break;
    }
    return random_number;
};
//随机算法1
let getSuiji = (length, minchose, string) => {
    var size = 0; //表示随机生成几个数字
    var sizes = 0; //表示随机生成数组内部的数组个数
    var list = []; //全部的数字列表
    var result = []; //随机生成的数字
    var results = []; //最后返回数组的数组

    for (var i = 0; i < minchose.length; i++) {
        results[i] = [];
        size += minchose[i];
    }

    if (string == "zw") { //猜中位
        list = [3, 4, 5, 6, 7, 8, 9];
    } else {
        if (length == 6) {
            for (var i = 0; i < length; i++) {
                list[i] = i + 1;
            }
        } else {
            for (var i = 0; i < length; i++) {
                list[i] = i;
            }
        }
    }
    for (var i = 0; i < size; i++) {
        var suiji = parseInt(Math.random() * list.length);
        result[i] = list[suiji];
        list.splice(suiji, 1);
    }
    for (var i = 0; i < minchose.length; i++) {

        for (var j = 0; j < minchose[i]; j++) {
            results[i][j] = result[sizes];
            sizes++;
        }

    }
    return results;
};
//时时彩定胆位
let getSuiji3 = (length, minchose, t) => {
    var size = 0; //表示随机生成几个数字
    var sizes = 0; //表示随机生成数组内部的数组个数
    var list = []; //全部的数字列表
    var result = []; //随机生成的数字
    var results = []; //最后返回数组的数组
    if (t == "true") {
        minchose = minchose.sort(function () {
            var d = Math.random() - 0.5;
            return d;
        });
    }
    for (var i = 0; i < minchose.length; i++) {
        results[i] = [];
        size += minchose[i];
    }

    for (var i = 0; i < length; i++) {
        list[i] = i;
    }

    for (var i = 0; i < size; i++) {
        var suiji = parseInt(Math.random() * list.length);
        result[i] = list[suiji];
        list.splice(suiji, 1);
    }
    for (var i = 0; i < minchose.length; i++) {

        for (var j = 0; j < minchose[i]; j++) {
            results[i][j] = result[sizes];
            sizes++;
        }

    }
    return results;
};
//只用于北京PK10,11选5
let getSuiji2 = (length, minchose, t) => {
    var size = 0; //表示随机生成几个数字
    var sizes = 0; //表示随机生成数组内部的数组个数
    var list = []; //全部的数字列表
    var result = []; //随机生成的数字
    var results = []; //最后返回数组的数组
    if (t == "true") {
        minchose = minchose.sort(function () {
            var d = Math.random() - 0.5;
            return d;
        });
    }
    for (var i = 0; i < minchose.length; i++) {
        results[i] = [];
        size += minchose[i];
    }
    for (var i = 0; i < length; i++) {
        if (length >= 10) {
            if (i < 9) {
                list[i] = "0" + (i + 1);
            } else {
                list[i] = (1 + i).toString();
            }
        } else {
            list[i] = i + 1;
        }
    }

    for (var i = 0; i < size; i++) {
        var suiji = parseInt(Math.random() * list.length);
        result[i] = list[suiji];
        list.splice(suiji, 1);
    }
    for (var i = 0; i < minchose.length; i++) {

        for (var j = 0; j < minchose[i]; j++) {
            results[i][j] = result[sizes];
            sizes++;
        }

    }
    return results;
};
//随机算法3
let getSuijiDing = (list) => {
    var list = list;
    var suiji = parseInt(Math.random() * list.length);
    var d = [];
    d[0] = list[suiji];
    return d;
}
export default {
    methodId,
    checkNum,
    play,
    _inputCheck_Num,
    _HHZXcheck,
    _SDinputCheck,
    random
}
