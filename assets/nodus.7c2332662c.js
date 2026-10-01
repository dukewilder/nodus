/* NODUS // nodusarchive.net */
const ASSETS = {"hero":"assets/hero.png","heroSign":{"lit":[27748,1,27749,1,27756,1,27757,1,27762,1,27763,1,27764,1,27765,1,27766,1,27767,1,27768,1,27769,1,28068,1,28069,1,28076,1,28077,1,28082,1,28083,1,28084,1,28085,1,28086,1,28087,1,28088,1,28089,1,28388,1,28389,1,28396,1,28397,1,28400,1,28401,1,28708,1,28709,1,28716,1,28717,1,28720,1,28721,1,28726,1,29028,1,29029,1,29036,1,29037,1,29040,1,29041,1,29348,1,29349,1,29352,1,29356,1,29357,1,29360,1,29361,1,29368,1,29668,1,29669,1,29676,1,29677,1,29682,1,29683,1,29684,1,29685,1,29686,1,29687,1,29988,1,29989,1,29996,1,29997,1,30002,1,30003,1,30004,1,30005,1,30006,1,30007,1,30308,1,30309,1,30316,1,30317,1,30328,1,30329,1,30628,1,30629,1,30632,1,30636,1,30637,1,30640,1,30644,1,30646,1,30648,1,30649,1,30948,1,30949,1,30956,1,30957,1,30968,1,30969,1,31268,1,31269,1,31276,1,31277,1,31288,1,31289,1,31590,1,31591,1,31592,1,31593,1,31594,1,31595,1,31600,1,31601,1,31602,1,31603,1,31604,1,31605,1,31606,1,31607,1,31908,1,31910,1,31911,1,31912,1,31913,1,31914,1,31915,1,31920,1,31921,1,31922,1,31923,1,31924,1,31925,1,31926,1,31927,1,32866,1,32868,1,32877,1,32878,1,32879,1,32880,1,32889,1,32891,1,33191,1,33193,1,33195,1,33197,1,33199,1,33201,1,33202,1,33203,1,33205,1,33206,1,33207,1,33208,1,33209,1,33210,1,33211,1,33212,1,33213,1,33506,1,33510,1,33513,1,33514,1,33515,1,33517,1,33518,1,33519,1,33521,1,33522,1,33523,1,33525,1,33526,1,33527,1,33529,1,33531,1,33533,1,33839,1,33840,1,33849,1,33850,1,33852,1,34145,1,34146,1,34148,1,34157,1,34158,1,34159,1,34160,1,34171,1,34467,1,34477,1,34478,1,34479,1,34489,1,34490,1,34492,1,34774,1,34786,1,34797,1,34799,1,34809,1,34811,1,35107,1,35117,1,35119,1,35120,1,35129,1,35130,1,35132,1,35413,1,35425,1,35427,1,35439,1,35745,1,35757,1,35758,1,35770,1,35772,1,36065,1,36067,1,36079,1,36388,1,36397,1,36398,1,36400,1,36409,1,36410,1,37038,1,37040,1,37052,1,37376,1,37678,1,37690,1,37986,1,37990,1,37994,1,37998,1,38002,1,38006,1,38316,1,38320,1,38324,1,38328,1,38332,1,38336,1,39584,1,39588,1,39592,1,39596,1,39600,1,39604,1],"nod":[192,86,225,99],"word":[192,86,249,99],"reach":22},"frames":{"0001":{"56":"assets/f/0001-056.png","68":"assets/f/0001-068.png","83":"assets/f/0001-083.png","92":"assets/f/0001-092.png","100":"assets/f/0001-100.png","116":"assets/f/0001-116.png","128":"assets/f/0001-128.png","140":"assets/f/0001-140.png","148":"assets/f/0001-148.png","155":"assets/f/0001-155.png","188":"assets/f/0001-188.png","196":"assets/f/0001-196.png","228":"assets/f/0001-228.png","244":"assets/f/0001-244.png","258":"assets/f/0001-258.png","265":"assets/f/0001-265.png","272":"assets/f/0001-272.png","279":"assets/f/0001-279.png","286":"assets/f/0001-286.png","293":"assets/f/0001-293.png","300":"assets/f/0001-300.png","307":"assets/f/0001-307.png","318":"assets/f/0001-318.png","335":"assets/f/0001-335.png","391":"assets/f/0001-391.png"},"0002":{"56":"assets/f/0002-056.png","80":"assets/f/0002-080.png","104":"assets/f/0002-104.png","128":"assets/f/0002-128.png","152":"assets/f/0002-152.png","188":"assets/f/0002-188.png","230":"assets/f/0002-230.png","270":"assets/f/0002-270.png","284":"assets/f/0002-284.png","302":"assets/f/0002-302.png","308":"assets/f/0002-308.png","326":"assets/f/0002-326.png","334":"assets/f/0002-334.png","350":"assets/f/0002-350.png","367":"assets/f/0002-367.png","374":"assets/f/0002-374.png","398":"assets/f/0002-398.png","422":"assets/f/0002-422.png","494":"assets/f/0002-494.png"},"0003":{"54":"assets/f/0003-054.png","106":"assets/f/0003-106.png","150":"assets/f/0003-150.png","178":"assets/f/0003-178.png","197":"assets/f/0003-197.png","212":"assets/f/0003-212.png","238":"assets/f/0003-238.png","262":"assets/f/0003-262.png","274":"assets/f/0003-274.png","298":"assets/f/0003-298.png","310":"assets/f/0003-310.png","327":"assets/f/0003-327.png","350":"assets/f/0003-350.png","380":"assets/f/0003-380.png","381":"assets/f/0003-381.png","408":"assets/f/0003-408.png","430":"assets/f/0003-430.png","507":"assets/f/0003-507.png"},"0004":{"54":"assets/f/0004-054.png","66":"assets/f/0004-066.png","108":"assets/f/0004-108.png","144":"assets/f/0004-144.png","168":"assets/f/0004-168.png","180":"assets/f/0004-180.png","210":"assets/f/0004-210.png","266":"assets/f/0004-266.png","296":"assets/f/0004-296.png","306":"assets/f/0004-306.png","350":"assets/f/0004-350.png","380":"assets/f/0004-380.png","396":"assets/f/0004-396.png","420":"assets/f/0004-420.png","448":"assets/f/0004-448.png","456":"assets/f/0004-456.png","528":"assets/f/0004-528.png"},"0005":{"54":"assets/f/0005-054.png","66":"assets/f/0005-066.png","102":"assets/f/0005-102.png","111":"assets/f/0005-111.png","119":"assets/f/0005-119.png","125":"assets/f/0005-125.png","150":"assets/f/0005-150.png","205":"assets/f/0005-205.png","286":"assets/f/0005-286.png","297":"assets/f/0005-297.png","340":"assets/f/0005-340.png","352":"assets/f/0005-352.png","402":"assets/f/0005-402.png","426":"assets/f/0005-426.png","444":"assets/f/0005-444.png","451":"assets/f/0005-451.png","466":"assets/f/0005-466.png","548":"assets/f/0005-548.png"},"0006":{"54":"assets/f/0006-054.png","66":"assets/f/0006-066.png","88":"assets/f/0006-088.png","96":"assets/f/0006-096.png","120":"assets/f/0006-120.png","156":"assets/f/0006-156.png","190":"assets/f/0006-190.png","225":"assets/f/0006-225.png","236":"assets/f/0006-236.png","272":"assets/f/0006-272.png","292":"assets/f/0006-292.png","301":"assets/f/0006-301.png","315":"assets/f/0006-315.png","330":"assets/f/0006-330.png","340":"assets/f/0006-340.png","366":"assets/f/0006-366.png","378":"assets/f/0006-378.png","406":"assets/f/0006-406.png","428":"assets/f/0006-428.png","500":"assets/f/0006-500.png"}},"sigils":{"g32009f":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA1ElEQVR42p2Rv2rCUBSHv9yIihQSn8A9tlBnh06+Q8dO4uM4O2VwkDxFp+4dCtIHcHKI0IJCzHVIzPmJuni2j/PnfuceeDRasUBUAOC0oAaXGvw/dyWzcTqtpwNeJTPwBh2fG3hv70R8W+LtLxaDWHS8um2XAms3ByAE8D+T4Wcz4JdE3KakIvqh1geAVg3FzlaoTKuyMZaILtYpzDqkK27nhhAIRi9f+6YnyWTTNQv5/naW2aPljJWJlu9Oz5gAQQVPPg+asig/3l6hLq+hf336+3ECe4Avpot1ezMAAAAASUVORK5CYII=","g7725ef":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA3klEQVR42qWSMW7CQBBFny2HjHADqagii5LGR+AiPkCOsQWFk4qSA1BwC0SDOMbewNuARim8KWzvglASCX43+/b/Gc0u3CnlN/1Lkno+nLQWitsLtQFqBChYAOx6sjIgE9OR0kCqPakExPWe3EJugQzws6/31x2iGaCj5O1FUaBA9o1vTe+h9HsNI1beOQaSax7J1vmRQbpisrkcQLuigYaBTGEaiPsYL2OaTWOan306EDKAy3F7Dh5J1hI8lO3V+qpvE0lqr4gIYQJUCWmPkROxz+0DGkBI5vypJ37ID7pTQvyMti1FAAAAAElFTkSuQmCC","g455f42":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA1klEQVR42r3QsWnEQBQE0MdHmEWRKzAKxdXgOhyrjIvMupMLjDlUxOEqHDlYXIGjQ9HawWl1V4DxBAvD7Pz/Z/gTzDOI9ckbGRk34mO6v1rEqSlB/c7tW+Vl8yx8NpJg2qataORnI4WlqcnuGAUdlvnmtv52wCu8r/x0pD9kOsbHO8R4yfXWDCF8HVBkQc2JoWZCWpeXQYca5KeeMJSLsqTLoTlHvVY2JGqLkIbl2kGUYo2g2j9fPflhPaeg9KRFMNrtHR3oLDE7i1kRaqswCyamM2f/hl+R/TyjYm4VZwAAAABJRU5ErkJggg==","gfc2f79":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAfUlEQVR42mNgYGBgYDBgYGBgYGBgYsAAPKgyBsgyHxBsZmaEBPNhfiQD/vMgcfg//EeSgbBZGBgYGP4fvoewh9EBi3OwcDg4kISgHEJ6GHD6lGsF6aZJ/CLbUiwcFBcoMFFoWsK/Biq6DRuHkYGBNYCBgYGB4fcGbCGKDQAAkboRI4bWjXwAAAAASUVORK5CYII=","gf4261c":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAmElEQVR42s2QMQrCQBBF3yRTWkxAPIeQXqbwAPESXkO8hUew9AAWiycwjR7BMoKlCWujC4nYCfrbz3+8GfjfCLqApvYo950gBlGAeAV1UAWcXqPk87QBAcxADEEdCA5teG6yDZfVizaBdYXS1QWxLbCAkpfAYcZtGpRuDzZacj4O3LJtkj59y6136RikeqOVaTOkffzbr/MAMYNIvJHe2PgAAAAASUVORK5CYII=","g209cc0":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABF0lEQVR42o2RsW3DQAxFX3wqCbDIIgdIpYHzABkuA2QMD0BALQO5zRYXmKUMppBiFwmQsDv+Iz/4H/xR8rP1BJiExOk3BQ+Jl/ipGBIv5/vUWLC6ezj1WNz2v5rZAQ6YzxXEZZPKCrkNCdqXtXR3ANqcOa4AuKVm9jw6QF2bsbbNZu6retPd1K4tdakw4CE3sHiVAHSZu87XXjkAyCXqB2/bA6lEmRjwAvAx3jwGJjXiEjAxCMZnlQJwiJhCtMvlGcDdaqYudbt1PipN97Ot2dibOICkZl5bhQGx0xnebxcPoGpn1b7HNqeQZhuj0izXeVvmaGaXPdJqRyl71viCuTywljs5DwkJvqnWB1MJD5l+pY0BJ/5bX++mi7gS5qUZAAAAAElFTkSuQmCC","g1a0d1d":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA40lEQVR42p3SQWrDMBCF4V8ZbQRTfIRcIUGGLpsD9BiBbnudQA7jbWCKfRSFGryJURdKY5lu2s5Sj29mhARVOYgAMww4xOZyPh5cCQZmwHEDBgBaRwSjLUZslj1g0HqOhHzdJgf4cGGiJCMSY59Tk9MOUOtfcmryzQw/vaGlMfhwkQMFjX56XpJNOJ3Laj/NSd6/jZMdH4/bqfUPs0qcdrKvjXbXbZr9ao6CiJRFAR+6Zc5qg9+a8SiL0fPd6D8NVEYrs0o2avZXA6blsYoh5tTkDvDcm70aLYBUH0n55AkYWdUXKKOEDyyCq1gAAAAASUVORK5CYII=","gca975a":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAmElEQVR42qXRQQrCMBCF4S+m+3oUQcGNoEfvBYQepUKXLeOipiotIvoWIZOXP3nMAHUHNl70S/Gz6oiu7HNH3RQDinUqy+cEM7NB31G3a/8Q8Xwg0yzi/N2QZdHTricoqsDl5SRHNJAe7Rm3xTlHDDPTH96QCarggPGJTFC1hkQ0JPIOXEnzNG4Xif10e2wlhjlzJR+/GPQdbdw6WOpto4oAAAAASUVORK5CYII=","g6f122d":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAdUlEQVR42mNgoCZgZGD1YWZczerDzLiagQlZBjcHw4wQBlEHxhC8epjwu2ANAwNjMJkuYGZgYGAIZZjy5wZc2bcEogxQ4GBgYGBgYGFg9WFmvLpwBSIMXs8hMQwYGEIZWAMYyA4DBsZgxgMGPMxrGMiNBVoBANHcEMIekkjmAAAAAElFTkSuQmCC","g228a79":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAq0lEQVR42s3QQWrDMBSE4U9WlinOUXKAQHJ0QS6QoyiQpc10Ibtpuy90FhLDSKP/iT9WHduEI5w380OzSt+SFzwwOWLdb80kCd3k1QKpDwfrPGr6h0K20mJqFaWgVZc5Wbgm/aJekz73OVkaSVpSkwy2SoOp4vY8rWiD+vEa8yzf6KfD2zzHsfNx80nuyf2reuU2kjcB3myoSQbUr3k4ba9Q7FEZ/1bsyz/WJ4DZU4BJeDW8AAAAAElFTkSuQmCC","g40d252":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAx0lEQVR42p2RQWrDMBBFn6NsCgUdI1uBuwmk2EfqUXKAHEYHUEi3gRyiIC9lfha1NCZk5VnN8OdL//+BrSXVzkkgRdjDsQM6TrB7Idja6wMbq/TW+5wiLJ8G3I/pdDE1CUXq18NnVePlYg5AB/i/6TFPI+yBABy+MT/3C/8IFQEYVIaS2iDl0HxKDZGk3L9DGmcHMP5OH5eKxKG4YGu3lJpq3YwD3M8WtjJrxHKPvl9dUYnq5wtmlgzwcZ7GOrjA1cI+lc03ewJxJ2TjGsWrwwAAAABJRU5ErkJggg==","gfcbd54":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAyUlEQVR42r2QMRLCIBBF3yKUzlAYD+El3CPgjJ5SizT2eAkvYQp6GbFISEhhK9U+/u5n+fC/E2phaiFhBKeAbZWQJvDQ1ZnodDFQvGisMwO8NcIGeO23h495jkoqkOZHfSQuGyjkCgKnqmRberu05ffoAHABFyZFCuAmOFdHAwLgbx4M2PKAUiwYCAOgiGJwJSZF6D0Wcriz47QRhMsc2dU0+anhygA96TYHKGFedPVTrF1nvcCjveq6tu3YQOKXwQrySsm/2soIX2LTMfv657J0AAAAAElFTkSuQmCC","gad154b":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABHUlEQVR42mXSMY4UMRAF0GdjZyOtET2nAInJITASB3DQ10RqDoDUAQcg2FsgxK40We+oCewekKjErnL9+uX6xT8WIMx+rkdkVs/H/SxUMyI+wNf+kAmVRuShx74TeUcq/DqKp4KKdDhF9Ppg+Cx6aaPok+h95nSlfSPU0pQkp1AFKStJK2rktjXyckESam6hhapE9rKlaUlr73r1/NGOeOKqJCeuEbewLfUyPmdetrPDeWE5nGlln6AILVNylSLTgss2EYW3doEvlTKRZEwphU/3Uf+WMClQBs/FnbRrMc6SQY1QdyOt8nTqOXHHwK/RjwP/SpRIa2+ZJCTG4G+c3IE11EEYeewkb7oWnX8o04bmYykw/12XHvh/kQ77AwlWOD2ZYy+QAAAAAElFTkSuQmCC","g34e255":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAnUlEQVR42qWQsQ3CMBBF38UgRShSSEfJCBmBIgNQMACjMA5lNgApe7ACrrGCKRLZh2IUAVfd87O/fQaAGgAyJlW8m1obG3tjojBdqQJ8oaC0XpmhXwD47hbvkV3iOQnIc7U0wtwZPk66On+ftnlMjQDIAXe1I6yFezA09JewtarCH3hpcG2I2WY/zzPA8Xn6L2AWBJZ7AFyb+tFUvQDtxBmA3CDOjwAAAABJRU5ErkJggg==","g4d569b":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA70lEQVR42oWQMU7EMBBFX2wjpbA0Fgha9gJIS58iDR2H4kA0HGAlF0i0uQHsDSZSGqSsQjHJxhFacGM/z/z534Z/VijO6Y++S7XKNlfeOSu0K0xs2tJW064QyAu0pSbPRh6Ap/rua9W8lKY22yrXu3CGsE1QF1DbbGfJXFHZXXrcJvU5qKxd6nq1U0aS4x7JQMMRR++PAB+acPDdZeDwmamQt/a2ZXplDE4fnqMCMd5ISJq4Agb8oUK72caf8Lp4eg2nGBfogg7DAhJSk2eQRywMwEigb0zk3wGxeV4VUGTKeRoRECCS94A57iH++p0f3qw3fwssq3wAAAAASUVORK5CYII=","gf95315":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAs0lEQVR42p2SMQoCMRREX8YtPv8Ui+WC4DE8gqWV50jpMVIueok9hqVnsAqIYhGQ6LqKpvt5+TPDEPh4DAxA9eW3Qe2YFDUlq6Rbm3j2zrQB0J7b+tdsikyZbqaINn/HAbw3uh66RFJSr+jRo+M9+GGwLj12lnUhQzXMilqIgF0Wx/zqE6yKEwA8lThhN9XoOzJUZHYtai1geVjl0Y4kuc4uSU8kzAHLWAaabfkGtxMQ6uLu8G8kDnOdh+8AAAAASUVORK5CYII=","gbaccdc":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAm0lEQVR42pXQSwrDMAwE0Ol4axroAYJRLxBwl4FcPQcw9Ao5Qelnb3eTzxTS4mplWXoWMlATI7dzI/euYKv4i1T6JEnsJUl38bHbEp9GIfHbYy8hTknzQa5188U7JY0SL10YAGBZ+6GfoV0O2raTHIgwtccnM6c8j6kwLfPpxikspttpA4ChrGvauZRCoxHVYcFoNAb7w8zip3kD2DclmPRJkUMAAAAASUVORK5CYII=","g4cd3a9":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAiklEQVR42t3SMQrCUBAE0JeNpR4lIOQCOUAOlSN4DPEUHzyAnVV6Wwsh1QeLmBAFIVg61QzLzizDsgpFHGd+FWqwTbqgBwNCnfegTUI/HCDfCLkad5qWKC+gTPcuVHk0bhtF7B6jOucU8pTZCMOL5ySWt60XeTL7nLzl/GT9XcxV+beqNk6Lp1iHJ/UDOa7IEu6/AAAAAElFTkSuQmCC","ge61c07":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABF0lEQVR42n3RMWocURAE0Pe/2jDBIvfkxswNHDgV5gvvAXSkPdgGE/gQDnUDjYyCBX88DmZY1sa4kqao7oLqgoMN9wa3mOYbcvJ//KEf/lYnTiUhGihP8K4N7vDh47Ny/71PFQUazxU5s8buktFKBiqWQuv7/rjk5x7nTYk1cs79JkRK1RZuPIIaRIssifpGGV/Ox7Zb9299eb9QK6zM+FURD7wmqgMLnbsJ8QiPSaWsI8e5UelzkOtiMJQUpGjqRdNZlEkp+XUZ+1ue41Mv5SmWRI/lZ6wvZY710JYyr9vncnthBa1sMYcrOfyrneO4xTYg40bZyeZW2g2JnK5bQyQ83BzWfZa8lj/staoGF+uPnVwmJ1/AbzFrQtVcLATbAAAAAElFTkSuQmCC","gc17b4b":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAqUlEQVR42s2QPQrCQBBGX2IjuBAbwXJrq4B2KSLYeALP43k8hAzYRvAIprZRSJklFvtbGG39usc3b3aZDEAUHVtc1iUAGYAS2PiCCbH5a2d1XkZHT8MQqt03kVzzwan02DszPfa3nw4A0vQigap74lyMd/rEKQah9vP1YCOQhyVlCioFt8DmCTkvMwfg5tve3+0ELB4AB+AIhX3Ebuvs4S0YlQC7FK58zxsucj3wa5irpQAAAABJRU5ErkJggg==","gd43a32":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA2klEQVR42pXPsU0DQRCF4e9GK2tEdCSIcOSQKhy4CCJESBXoKqEAqnIJhCeEDoI7m3WEeMFKb9/Mv2/5SxM08O6uu78BAR7eOvM4d2Y5dWbTv0xUn/S0XT+c1ZnKbuz5ChmXE8vEbjpvFFWBF8htI5Lam7KdIU/xKky7Zbpgq9TY9vbILMaWcmuQzGbi/pP54ytFO8RpeV6TZWUckaIdUMfE7fqFk3lsuVUuOTa3MIzWdwLDWFvjtiUrDepwTlYaOcSXWGm/DRjlEMSgJPP3gsGZhi25Utftz+QHjyEnEiOiCqIAAAAASUVORK5CYII=","gd8ba81":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAoUlEQVR42tWRPQoCMRCFv/x02+yCWSwsxHMsGA/hKbW2jkew0lJsbdJtExmLRDd6Ah0YmJkH33sw8DdlAibkUdd3hfMg+0p5MEyL6TyAoVlC6sb+CobRHc7z06rpF7dCi+D8Cy0BLm8fCbXpPYCGFlu2jzgaAQKqJLC0EL9SezQcWQO+KJusJDTEWYLUKtCQiIDNLTtAlI0Ty20rdJTffuITniAmo7zgUj4AAAAASUVORK5CYII=","g5e9ed7":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA/ElEQVR42oXSQWocMRCF4a9bWThQ4Cv4AgHB9HLADbmYj+B75BJaeCnjvkc2gTRkMx1l0W5GYwKujfT0+EvilfhQT8dmBOnXLkaI6KzHSydag6fxL9jKtYE0X5u3S+lE66597zY+gO/74cPOwN0IyZ8OaZeKuwHa7GUDUbR2qVTkrJ1OmWxQTW3eljXKOiCdV8sNU3ZG+n3KmYxaUns8R4lqQMq8whDF1GzLVK0DnGyWPaXwdh8hIg5neWdWZ5aprj4y1IgQ4Yb5opi/PjMVt84AgfUIJKV93ZnSMembT5hBMavW2TGinLv51Nrl3lpr1wH338XxAn7+8J/6BwVVYqkoC1VOAAAAAElFTkSuQmCC","g6753b8":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAVUlEQVR42s2OsQ2AMBAD76MUFlN7HCZilq8QRUKKFAgKBK4s2WcZ/qtABmxIT5kA6QkTjHoSzZSVzYAMWhrWEzDUxpQdQSVP5tVv85r7mrnJXH37WgfaJxr+qtkvfQAAAABJRU5ErkJggg==","g4da8b8":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAvklEQVR42qWQMQ6DMAxFX+osSEhcoisSUrrDEXukrAxIWXuLdge5QxISBJ3qyV/f/n4J/FFtLdSXvtMVbkkMyG6Iqr6zGFVVMdFYAT6HeJOC4cGSRbi/JI+p+MHtd8C33u5ikqmM+c7/3jEFgC2KAbZMIHOFIz2BayftnGrUWKsFtqVynEj8Ggs0c/VsRwC25DyvYk1GjtQyEBKA2cGi6FMbTk7ZuUZW1dVWyBNOJENjm7nCcRGYANgKeTokfwESME2iYsGDuAAAAABJRU5ErkJggg==","g9a0d89":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAmklEQVR42o2SUQqEMAxE34YeRjzQ4nEGD7NID1SWfniUsB/VNYqohX6UyUzzmsKj9QLIQBEkwGZAqywwAbZs1oPTT/8yG9XUpoSyvcdz8IjgMZmu72lKGYISGj2k5V1vNm699R9pwTb5VH1LqzpPO5DGtDPS9m79ZE9Iuy7w1CGkuW5IUyPl6+vkKDK/nE9qSt48/sb8/h/crx9Bq0wgGTzq2gAAAABJRU5ErkJggg==","gcb63a3":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAt0lEQVR42pWSPQ6DMAxGHxZDlLlzlRFxjh6gU4+DLKYegxFxj16hM3v3KhPqgPktoNZT7M/fs+IE/goFkOm4qB9YzLMK2VVmPY1UY1vG3Y9CLfjKFBchOktCW1AM2BoEr5CCRKVUOff+UiCECgCjZpACQkcwf+YAnO/RUSDEYWgH7TB0W0mgMdBTZ3vS5bVTkBKAbrWQ/eSIJrlNfR9sNiEfn+222XECSKQG4PW4znCXL1quv3ygD/kjJUtUQwC7AAAAAElFTkSuQmCC","g53d506":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABGUlEQVR42qWQMWoDUQxEnxXzERsf4BMCFq6MW1/AuckeI1UQW/kIIdWWJm3qwLJVisXkGP8AqT72OsV6CQ7ETYQKSTPMiIF/1uT1T8gEU8FNsUtEnFq8oGB5TXuJOMtu3+0bJsNpDcfPMzzrTocOYIfU3L6tCx9pHfC1uVTbwQpWUPg1U6lH3uoXcjr89ARQZ9PwCALcPUN+OTO3C/1Y6GAjWllrWwOBEAOknIZ8KrVWrQKgUrNWzRwQUfNW1IwpgQiQE9xwP6NkPn94P56mlINZ/wRTqaB3gJqJZqBvmhqSxBDCQExZyhjHuQc3ExpTxRF8WAQTgADk3pEgfnYiSQxjGnWWEnGA3umFCBESJMAUo1FMkfFRyHwDHNxV61/nJ2kAAAAASUVORK5CYII="},"portraits":{"p2d946d":"assets/p/p2d946d.png","pd5b77f":"assets/p/pd5b77f.png","p1ad3b6":"assets/p/p1ad3b6.png","pa93aa8":"assets/p/pa93aa8.png","pccd099":"assets/p/pccd099.png","pc7a45a":"assets/p/pc7a45a.png","pdfd4a0":"assets/p/pdfd4a0.png","p9ec87c":"assets/p/p9ec87c.png","t7638ab":"assets/p/t7638ab.png","t2d253e":"assets/p/t2d253e.png","t61faa8":"assets/p/t61faa8.png","tdad072":"assets/p/tdad072.png","t26f712":"assets/p/t26f712.png","t6dd252":"assets/p/t6dd252.png","tf68b50":"assets/p/tf68b50.png","tad049a":"assets/p/tad049a.png","tca3185":"assets/p/tca3185.png","t7e1bc2":"assets/p/t7e1bc2.png","t48a8ea":"assets/p/t48a8ea.png","t5bd793":"assets/p/t5bd793.png","t6e5c76":"assets/p/t6e5c76.png","t84e971":"assets/p/t84e971.png","ta45ebc":"assets/p/ta45ebc.png","tca1c29":"assets/p/tca1c29.png","t79141a":"assets/p/t79141a.png","t8ba5ab":"assets/p/t8ba5ab.png","t31c29d":"assets/p/t31c29d.png","t3d6c24":"assets/p/t3d6c24.png","ta92bde":"assets/p/ta92bde.png","tf3b79a":"assets/p/tf3b79a.png","t497868":"assets/p/t497868.png","t299f3b":"assets/p/t299f3b.png","ta05c47":"assets/p/ta05c47.png","tb2afa9":"assets/p/tb2afa9.png","t98d700":"assets/p/t98d700.png","t55f2b9":"assets/p/t55f2b9.png","tced407":"assets/p/tced407.png","t90e470":"assets/p/t90e470.png","tec1af4":"assets/p/tec1af4.png","t5764c4":"assets/p/t5764c4.png","te49491":"assets/p/te49491.png","td98ac0":"assets/p/td98ac0.png","t67bba2":"assets/p/t67bba2.png","t5ff9cb":"assets/p/t5ff9cb.png","teffb17":"assets/p/teffb17.png","t432fc6":"assets/p/t432fc6.png","t1ab3ab":"assets/p/t1ab3ab.png","t2d14f1":"assets/p/t2d14f1.png","tc92279":"assets/p/tc92279.png","t2a0ed6":"assets/p/t2a0ed6.png","t5094c8":"assets/p/t5094c8.png","tc5ffd6":"assets/p/tc5ffd6.png","t087a42":"assets/p/t087a42.png","t60922f":"assets/p/t60922f.png","t2e386e":"assets/p/t2e386e.png","te626c2":"assets/p/te626c2.png","t90c2c5":"assets/p/t90c2c5.png","t1b1321":"assets/p/t1b1321.png","teaa639":"assets/p/teaa639.png","tafd021":"assets/p/tafd021.png","tcb1ce8":"assets/p/tcb1ce8.png","t439ee1":"assets/p/t439ee1.png","t371e6c":"assets/p/t371e6c.png","m34aebd":"assets/p/m34aebd.png","m5f43eb":"assets/p/m5f43eb.png","m564a5e":"assets/p/m564a5e.png","m85df8a":"assets/p/m85df8a.png","m1a6c53":"assets/p/m1a6c53.png","m7efa1c":"assets/p/m7efa1c.png","mc26136":"assets/p/mc26136.png","mb5a39a":"assets/p/mb5a39a.png","m2425df":"assets/p/m2425df.png","m13381a":"assets/p/m13381a.png","ma05739":"assets/p/ma05739.png","m9b6c20":"assets/p/m9b6c20.png","mf4030a":"assets/p/mf4030a.png","m766910":"assets/p/m766910.png","meda434":"assets/p/meda434.png","m31f9ab":"assets/p/m31f9ab.png","m861f85":"assets/p/m861f85.png","m793875":"assets/p/m793875.png","md1035e":"assets/p/md1035e.png","mc59039":"assets/p/mc59039.png","m71f6aa":"assets/p/m71f6aa.png","mfeb3e2":"assets/p/mfeb3e2.png","m34c2ea":"assets/p/m34c2ea.png","m8c489f":"assets/p/m8c489f.png","ma6f1b7":"assets/p/ma6f1b7.png","m807edd":"assets/p/m807edd.png","m8eb148":"assets/p/m8eb148.png","m6b821f":"assets/p/m6b821f.png","m02d7db":"assets/p/m02d7db.png","me84c59":"assets/p/me84c59.png","mdb2d8d":"assets/p/mdb2d8d.png","m20236a":"assets/p/m20236a.png","m4ca892":"assets/p/m4ca892.png","m5ce763":"assets/p/m5ce763.png","m6ed6de":"assets/p/m6ed6de.png","m7c3b63":"assets/p/m7c3b63.png","m9e4d1b":"assets/p/m9e4d1b.png","m633434":"assets/p/m633434.png","m2f8098":"assets/p/m2f8098.png","m35f9af":"assets/p/m35f9af.png","mfbfc92":"assets/p/mfbfc92.png","mad6ab6":"assets/p/mad6ab6.png","mb83918":"assets/p/mb83918.png","mf8a9e8":"assets/p/mf8a9e8.png","m4b6920":"assets/p/m4b6920.png","m5b9f70":"assets/p/m5b9f70.png","me7d12e":"assets/p/me7d12e.png","ma9fc33":"assets/p/ma9fc33.png","mae3831":"assets/p/mae3831.png","m8a1289":"assets/p/m8a1289.png","m3acaa8":"assets/p/m3acaa8.png","m095a56":"assets/p/m095a56.png","m205d73":"assets/p/m205d73.png","ma28343":"assets/p/ma28343.png","m894fc3":"assets/p/m894fc3.png","md0504f":"assets/p/md0504f.png","m74c504":"assets/p/m74c504.png","mc65ca9":"assets/p/mc65ca9.png","m233467":"assets/p/m233467.png","m1d3b4b":"assets/p/m1d3b4b.png","mbef4e5":"assets/p/mbef4e5.png","m4aab62":"assets/p/m4aab62.png","m532dd1":"assets/p/m532dd1.png","mfab858":"assets/p/mfab858.png","me3c330":"assets/p/me3c330.png","m10e42e":"assets/p/m10e42e.png","mae5e7f":"assets/p/mae5e7f.png","m2887f8":"assets/p/m2887f8.png","m35bf2d":"assets/p/m35bf2d.png","mbfa671":"assets/p/mbfa671.png","m319688":"assets/p/m319688.png","mfae3d0":"assets/p/mfae3d0.png","m2f6c75":"assets/p/m2f6c75.png","me6afd2":"assets/p/me6afd2.png","m721706":"assets/p/m721706.png","m2e4fb3":"assets/p/m2e4fb3.png","m927dc9":"assets/p/m927dc9.png","m0100db":"assets/p/m0100db.png","m21cf7e":"assets/p/m21cf7e.png","m08bcff":"assets/p/m08bcff.png","md03000":"assets/p/md03000.png","m6d9438":"assets/p/m6d9438.png","mf54e6c":"assets/p/mf54e6c.png","mb6e06e":"assets/p/mb6e06e.png","md28ada":"assets/p/md28ada.png","m024bbb":"assets/p/m024bbb.png","m404146":"assets/p/m404146.png","m933853":"assets/p/m933853.png","m2ebb8c":"assets/p/m2ebb8c.png","m87ade1":"assets/p/m87ade1.png","mccbb73":"assets/p/mccbb73.png","m1f6351":"assets/p/m1f6351.png","mcede4a":"assets/p/mcede4a.png","m8d744e":"assets/p/m8d744e.png","mfd9507":"assets/p/mfd9507.png","mb35cfd":"assets/p/mb35cfd.png","m1ba4d7":"assets/p/m1ba4d7.png","m9d29f0":"assets/p/m9d29f0.png","m1577d4":"assets/p/m1577d4.png","m44bbcf":"assets/p/m44bbcf.png","m75d2ad":"assets/p/m75d2ad.png","maaae9d":"assets/p/maaae9d.png","m0914eb":"assets/p/m0914eb.png","m9ef66f":"assets/p/m9ef66f.png","m9dffd3":"assets/p/m9dffd3.png","m5274ab":"assets/p/m5274ab.png","mc090ee":"assets/p/mc090ee.png","m7d3fd5":"assets/p/m7d3fd5.png","m484955":"assets/p/m484955.png","m47ee9d":"assets/p/m47ee9d.png","k61aae2":"assets/p/k61aae2.png","kb41c60":"assets/p/kb41c60.png","k19e95f":"assets/p/k19e95f.png"},"logos":{"l8a8031":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABIklEQVR42mXSQYrbQBAF0KeSIUEIPCcIszRe6QYWzB2GHGWWWuYYWpo5hXIDQWCYpckJHNDCC4vOoiWPMynoon9XdXXV/82dFRBHbx0CjuzXaHVk3y/g9eaIHqoOt/TjnbcnxCWDUyd8PWVweUSlTKRBj51DOm/T1Q69lK6HIanQl1cp1YehEnEyaedpdOmCejROpgaVLduz8qzfoNkOrl+WecZ1lvjGsOx/BFOjKNRjTquhgR0p5bULtDCv7NyqWaqVGZRzy9wOOTJZXs6NpmRqiN/L5ZmXW7V6Lf3z4c9mQlwyrUpxyo02tXqUCWlSchgqG+by1/yUFNVnEu/oDbq5oGiDyOyzqPEh1j8yBu9Z4Pf/pf/4FMV6+ryO8J03n+0vKdtpJnkznlEAAAAASUVORK5CYII=","l43e919":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAx0lEQVR42mNgwA8YHRgYGBgYmJDFIJz/DshiB5DlH+DSQyTn3wMkIa4XpBvw7QaSkNYrUgxA8Q8zAwMDA8MqU+4DZBoAkV71agEDJQZwrXq1AkkZTIb/PxR8wGoALtMYuP5AopaBgYGB4fUVRgcGBgYWBgYGBj6BP4xwVa91+qwPQMOAn9/gv6bYIojELyOeHmVtiIH8CicMmjkO2TAwMDEwPM53YGBgqEo/wMDAwK9hoHCg4RAzlw0DM8PLLxkCCg/k5atZ6wGx+zT2CIun1wAAAABJRU5ErkJggg==","lb64f65":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAj0lEQVR42p2QMQ7CMAxFX4uHKidgjDKhnCFSr4Z6EpSpyswB4FIMEcUMiApIhZr+zfZ/1rdhk3pVVdU7tJ9tgakBIPxMisInk8zI27zECNAdAc6viXODjbaa2dvTekYAlw8381jPAMGb0acu1GWzcajJ1gIu25j//6AoetXLvO3aLNmKe+bVAjsFYJJvZouesaUq+PMensAAAAAASUVORK5CYII=","l8ba825":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABM0lEQVR42nXSMYobQRAF0KdqYQahwOALTCgm8QUEVugTKN5jODJ9lME4GCbyBRa0i89gFpzMBQzCgZhEPQ5ay7ILrqCaT/G7fv0q3kaMY31hYHgGHaK/gVyOR01lbEbEmAnaC0puwe2ngRAFlCA0c6XmLLQTCVMryLUyE77eNJVGxItCYX4GuQq1/1RrzUQ6OTPlsGX782FbWenkz8GHkzNdWpZzkpblbx+uB+/VHDysqDleGVNn6V/AToOWjhjSJotvfWg0T+adZqLbjIOkG4foY/pixpO5mdbKEcrR5nWf9dyyWOH8LlRvSITGfrXes/8hinRPku4LPi4nKS3LYy+4Hri6fib8/g6rdTvddnHbTCi1bxSC3MNuJpg2iDwRXAwMJbNCl3G5qx78Qrl7ezv/j3+BLGINrzdiagAAAABJRU5ErkJggg==","l51b180":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAqklEQVR42rWSsQ0CMQxFX8whWdBcQ00KKpbgRqBgHIqMQonSsMLRMQE1c6ADUyScoLFEgat8/y/7JQr8uXIGQADWcHz3JZvlVB1dwC5WceggzIqQKcA2FacFaIqjHUCIIBDLTAWBUEQHwMnMzOxeCcbt30LacmqSEwsywnMV58pqtdR7GJFNSQ3erECa7AE4924ssuyBx4qbt1V1bmZ2UY8tfBA9Xbafv8MLhLQuQE2U8ZUAAAAASUVORK5CYII=","l39fec2":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAf0lEQVR42q2PsQ2DMBBFn08p3JEJkOWdoGSWKzML7JIZGCHu3IBpSJSADBbKdV/6958e/PMMPdEyOlRbUDw8EAdClT41+f7ZhGBya7+c0aE6C7FjZVjFI0B6FXDA3DNrJT63tdFMzyPOuzZIfd0HgCqd+QAQzDWfguldyPvkbwGBHTuu+RkxAQAAAABJRU5ErkJggg==","la6f002":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAzUlEQVR42p3RsU3DABCF4S8XCssSYgAa12EJSiZI7QEYwkMwQMrIS5gl6D2Cq8hF5KQ4J5INNHnd3el+3b3Ho2pbENDS3ooSDnNRQYEt8QWbt2+RvZwHFfs9BUHjRC1mdM0p0WGCRiMURuhVAj2MCJUGJkUCbgq5T2M58XK5a9g8f9z7r2vA0J2H7jx0K8D/Ows0u2N2d8dft8Xft4U+/wnj0tEwpouVXphyL93JBMoZ3Sg5mHiiz6hGIh1L97Zcft4xfVo7OidQr6N/RFfJqUgOFPFKwQAAAABJRU5ErkJggg==","l727194":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABD0lEQVR42q2SMUvDQBiGn34JgWCho5klSBexo0OHTv4Gxxsd/QOWm6SjODgIQman/oSbOwmumZxCpgyFSNCLw52XFBz7Tffwvvd+33ccHKVm3yPoexPOURM1AAIwff+ZDldgGWAJs2BjsmIAXw58sldG8CHNxaAYJwnA/qrf/z8bl/2oQV2Ppn6rF+MJdICTL8oAeWJPAyR0Q9hu/rn5i4vONrv5YrA5nwCpwt6Woz5WAzFw/mJXtF55BrpX420KCh8Q3SRAdQcCqWg6q0tnU+AaCeSgqIoWBJ4eMsDem8PnjYmuM4Cq2CKkoKCDEoHMeSoQcpRoqztaYh79jp01MYgG7FrWTKIesMYA24OP8gswwlH/tQ39EQAAAABJRU5ErkJggg==","l725926":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABFElEQVR42q2RPUvDUBhGz829iAlBVwfJ5CClay1ISO/PcXDsUDoFEReXDA7+BHEtCG7BZjBbR8d0ShaFgjo0l9YhH8ShuPhuD4fzPsMD/38y7oSR3wFmGwMoAH+IDSAAmYJc6SqMPgE7qQ1jjNnGoMAfAmCDQKb1y5UWHJ7UBXYiOPho6pSC2TUA7jsKynQB0L8bK2rkzh0UUKaAidRYUSF3iYuCzVWYLvoRNWEWzcFBgZVRPke0hOKeymECxUWHrKe1gwd7Nx1y1Dr7YbjDoetYWcfhV8+E9RTOEcg8fjv1YuRACwguv50zzXGCAJk/OV4sBxqA4KH3YjULyaL3ettuFzxmfrMPMl9+6XbHwOxa+8/7ARYGVLqjQ09FAAAAAElFTkSuQmCC","lf5c32a":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAkklEQVR42q2SwQ3DIAxFn0MmqTpGJKxmhu5rTl0j965A5B4IEY1Qk0N95Ok/8xFwaQTgCbwNhnpgFSuIciAD4MSMVslshRZScj1bzLJnlCYTLNjvPYWksSHbno7Nv+4W0l539tz0SdraXta3HZoW25+aThMGBIDb/eHLUsmq15q6KTBufcQvvFtsMqsgfv4PzucD+IpGGL4KSVYAAAAASUVORK5CYII=","lf44010":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABE0lEQVR42p2SsUrEQBCGv91kvRAOFuQeIFiF+AYWEqwEGyuJheBDHNYBOQhX3wOkXK4Ra4v4JJJOO7eSIOhZzOa0uOJwYGF3Z/6d/59/4b+xXgOgAQpwABGgVy/vh8fPUpS2soiB7K2BJMAdBgrJaBbE3dlHDZDWBlXqVjDJPXAukGJEEsP3IgLVyVVuAFXmoMD1QuwOoA08IIKqPL14nM6unwDaGdZzmUIMyZxJ0nAyYqyHdMdr0kcy+U0EqrutAPJARPQ0AGSVtDaokqCn+SLullKsWwykNShCo6OrUar1uDC33r0myyHMetD1kPWjCcXDp9u6cADV1h678X/Msn7K7pT1vzaOsedBAWzCRu/3a34A6yg9822LuqYAAAAASUVORK5CYII=","l9c8a50":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABGklEQVR42oWRMUsDQRBG390tZAnC2omNLEljJxaC3cXSPyEiCLYBwfaITewsU14pqWxt5EiV1l4knQc2W8RwwnFrsWtuBYNTzeybmW/4FjZG0qYF9H/yOYB0uQye1g2FMu2oTGvd7jEKgDiU2Vy4SOvgJGuLFljbIgsWIAKSz3s6hwMH1KKX940n6WmPt2vhSN3N4jz1pHpcoN+HICApqwndr2KAAMryijjyy2YAtwYEMB97cQHkKyDzxVlgjpIAunYkA9BOVO1WAK8CAZwD6GU443VGjZ8RwKQJdB6egQ9XLFdVRhwdOSL3x+7qCDDHFbLz4sjWRRPv7Zx4D5lOqX2bepo1yeW2t9pofVB4gr3jJvrT+F9f8n98A6J/T49qlaNBAAAAAElFTkSuQmCC","l8b9924":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABHUlEQVR42qWSMUvEQBCFP5M9HKMQS+1SHkFBO5sDG/EPWPhLrK5Y1B9yWIWAvWXA5uyEA0mZ2irC3TF6IbHYXC5iJW6x7NuZNzP73sI/1xak7fHNev3ID2CgzgEIAEjcdWAxgPTS0HWaAWx4mo3vg6XjNFXYZIHFA+TznD1p+6yms+PFsC1g/ZIP7BIPsOB2Dxicvezs5i1HjapRwIero9fDaPRwscqABD+j7GbbFun6aKnqPzng2Tl2zgSA+O65acoyBQOFCAi14xws9kfy5WbTwcnj7DJ3TyRtqrB5dxMSh1OpYjpdnEYGILIbMb0EgkkbqREo1qEY4tYSCG4YXncuRLcbS1REO1D3+BCnPeeK+reNDqj2QF385bt8Ax87Vikw5pXKAAAAAElFTkSuQmCC"},"refs":"assets/refs.e675bd5a35.js"};
(() => {
'use strict';
const PAL = [[13, 2, 33], [242, 44, 112], [56, 208, 218], [214, 246, 252]];
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const DPR = () => window.devicePixelRatio || 1;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ROOT = document.body.dataset.root || '';
// links carried in the data are written from the site's root; set them from wherever this page is
function fixRefs(root) { root.querySelectorAll('a[href^="~/"]').forEach(a => a.setAttribute('href', ROOT + a.getAttribute('href').slice(2))); }
const PAGE = document.body.dataset.page || '';
const SV = window.NODUS_SURVEY || null;
const onResize = (fn, ms = 120) => { let t = 0; window.addEventListener('resize', () => { clearTimeout(t); t = setTimeout(fn, ms); }); };

/* ------------------------------------------------------------------ pixels */
const imgCache = new Map();
function loadImg(src) {
  if (imgCache.has(src)) return imgCache.get(src);
  const url = /^(data:|https?:|\/)/.test(src) ? src : (/^assets\//.test(src) ? ROOT + src : 'data:image/png;base64,' + src);
  const p = new Promise((res, rej) => { const im = new Image(); im.decoding = 'async'; im.onload = () => res(im); im.onerror = rej; im.src = url; });
  imgCache.set(src, p);
  return p;
}
async function indicesOf(src) {
  const im = await loadImg(src);
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const x = c.getContext('2d'); x.drawImage(im, 0, 0);
  const d = x.getImageData(0, 0, im.width, im.height).data;
  const out = new Uint8Array(im.width * im.height);
  for (let i = 0, j = 0; i < out.length; i++, j += 4) {
    let best = 0, bd = 1e9;
    for (let p = 0; p < 4; p++) {
      const dr = d[j] - PAL[p][0], dg = d[j + 1] - PAL[p][1], db = d[j + 2] - PAL[p][2];
      const dd = dr * dr + dg * dg + db * db;
      if (dd < bd) { bd = dd; best = p; }
    }
    out[i] = best;
  }
  return { w: im.width, h: im.height, idx: out };
}
/* device pixels per native pixel, the largest whole number that fits */
function fitK(nw, availCss, maxCss) {
  const dpr = DPR();
  let k = Math.floor(availCss * dpr / nw + 1e-6);
  if (maxCss) k = Math.min(k, Math.floor(maxCss * dpr + 1e-6));
  return Math.max(1, k);
}
function sizeCanvas(cv, nw, nh, k) {
  const dpr = DPR();
  cv.width = nw * k; cv.height = nh * k;
  cv.style.width = (nw * k / dpr) + 'px'; cv.style.height = (nh * k / dpr) + 'px';
  const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = false;
  return ctx;
}
function tear(ctx, im, k, strength) {
  ctx.drawImage(im, 0, 0, im.width * k, im.height * k);
  const n = 2 + Math.floor(Math.random() * 5 * strength);
  for (let i = 0; i < n; i++) {
    const y = Math.floor(Math.random() * im.height);
    const h = 1 + Math.floor(Math.random() * 7);
    const dx = Math.round((Math.random() - 0.5) * 30 * strength);
    ctx.drawImage(im, 0, y, im.width, h, dx * k, y * k, im.width * k, h * k);
  }
  if (Math.random() < 0.6) {
    const y = Math.floor(Math.random() * im.height);
    const c = PAL[1 + Math.floor(Math.random() * 3)];
    ctx.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`;
    ctx.fillRect(0, y * k, im.width * k, k);
  }
}
/* what an unrecovered picture looks like from here */
function staticFrame(w, h, seed) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const x = c.getContext('2d'); const id = x.createImageData(w, h); const d = id.data;
  let s = seed * 9301 + 49297;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const B = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  let band = 0;
  for (let yy = 0; yy < h; yy++) {
    if (rnd() < 0.1) band = rnd();
    const rowLvl = 0.1 + 0.36 * band * (0.5 + 0.5 * Math.sin(yy * 0.09 + seed));
    for (let xx = 0; xx < w; xx++) {
      const th = (B[(yy % 4) * 4 + (xx % 4)] + 0.5) / 16;
      const n = rnd() * 0.35 + rowLvl;
      const p = n > th + 0.25 ? 2 : (n > th + 0.18 && rnd() < 0.25 ? 3 : 0);
      const o = (yy * w + xx) * 4; const col = PAL[p];
      d[o] = col[0]; d[o + 1] = col[1]; d[o + 2] = col[2]; d[o + 3] = 255;
    }
  }
  x.putImageData(id, 0, 0);
  return c;
}

/* ------------------------------------------------------------------ hero */
// The hero is Nodus in the present, drawn at whole device pixels: the city at night under the Wheel, and on its
// roof in the Stones the charter's sign, NOD burning and US blinking on its burned-out transformer. The rain falls,
// magenta where NOD's light lies on it. Phones get the picture larger, cropped to the middle of the city; wider
// screens get the city across. The bottom rows dither away into the page, and they always fall below the roof the
// sign stands on and the reach of its light: a screen too short for that starts the picture a few rows down the sky.
const HERO = {
  narrow: vw => vw < 600,
  k(vw, dpr) { return this.narrow(vw) ? Math.max(1, Math.floor(dpr * vw / 175)) : Math.max(1, Math.ceil(vw * dpr / 320)); },
  rows(vw, vh, dpr, k) { return Math.min(this.narrow(vw) ? 164 : 180, Math.max(this.narrow(vw) ? 124 : 128, Math.floor((this.narrow(vw) ? 0.62 : 0.74) * vh * dpr / k))); },
};
// US: dark for 1.3 seconds, catching for a tenth of a second and dropping for a tenth, then lit for a second
function usLit(t) {
  const ph = t % 2.5;
  if (ph < 1.3) return false;
  if (ph < 1.5) return ph < 1.4;
  return true;
}
async function initHero() {
  const cv = $('#heroCv'); if (!cv) return;
  const base = await indicesOf(ASSETS.hero);
  const W = base.w, H = base.h;
  const sign = ASSETS.heroSign;
  const lit = base.idx.slice();
  for (let j = 0; j < sign.lit.length; j += 2) lit[sign.lit[j]] = sign.lit[j + 1];
  // where the neon's light lies on the rain: within reach of the lit letters, NOD alone or the whole word
  function zone([x0, y0, x1, y1]) {
    const m = new Uint8Array(W * H), r2 = sign.reach * sign.reach;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const dx = Math.max(x0 - x, x - x1, 0), dy = Math.max(y0 - y, y - y1, 0);
      if (dx * dx + dy * dy < r2) m[y * W + x] = 1;
    }
    return m;
  }
  const zNod = zone(sign.nod), zWord = zone(sign.word);
  const frame = new Uint8Array(W * H);
  const off = document.createElement('canvas'); off.width = W; off.height = H;
  const octx = off.getContext('2d');
  const img = octx.createImageData(W, H);
  const B4 = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const FADE = 7;
  const drops = [];
  const spawn = init => ({ x: Math.random() * (W + 20), y: init ? Math.random() * H : -2 - Math.random() * 12, v: 55 + Math.random() * 40, len: 3 + Math.floor(Math.random() * 3) });
  for (let i = 0; i < 140; i++) drops.push(spawn(true));
  let k = 1, rows = H, visW = W, cropX = 0, cropY = 0, ctx = null;
  // the lowest row US's light reaches, and under it a few rows of the block before the picture dithers away
  let litBottom = 0;
  for (let j = 0; j < sign.lit.length; j += 2) litBottom = Math.max(litBottom, Math.floor(sign.lit[j] / W));
  const FLOOR = litBottom + 1 + FADE + 3;
  function layout() {
    const dpr = DPR();
    const vw = document.documentElement.clientWidth;
    k = HERO.k(vw, dpr);
    rows = HERO.rows(vw, window.innerHeight, dpr, k);
    cropY = Math.max(0, Math.min(H - rows, FLOOR - rows));
    visW = Math.min(W, Math.ceil(vw * dpr / k));
    cropX = Math.floor((W - visW) / 2);
    // a narrow screen shows the middle of the city, moved over far enough to keep the whole sign in it
    if (visW < W) cropX = Math.min(W - visW, Math.max(cropX, sign.word[2] + 12 - visW));
    ctx = sizeCanvas(cv, visW, rows, k);
    $('#top').style.height = (rows * k / dpr) + 'px';
    cv.style.left = ((vw - visW * k / dpr) / 2) + 'px';
  }
  layout();
  onResize(() => { layout(); paint(); }, 60);
  let t0 = performance.now(), last = t0, glitchUntil = 0, nextGlitch = t0 + 4000 + Math.random() * 5000, warm = RM ? 1 : 0;
  function paint(now) {
    now = now || performance.now();
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    const on = !RM && usLit((now - t0) / 1000);
    const src = on ? lit : base.idx, z = on ? zWord : zNod;
    frame.set(src);
    for (const d of drops) {
      if (!RM) { d.y += d.v * dt; d.x -= d.v * dt * 0.12; if (d.y - d.len > H) Object.assign(d, spawn(false)); }
      for (let j = 0; j < d.len; j++) {
        const y = Math.floor(d.y) - j, x = Math.floor(d.x + j * 0.12);
        if (y < 0 || y >= H || x < 0 || x >= W) continue;
        const i = y * W + x;
        frame[i] = src[i] === 3 ? 0 : (z[i] ? 1 : 2);
      }
    }
    // the last rows fall away into the page
    for (let j = 0; j < FADE; j++) {
      const y = cropY + rows - FADE + j; if (y < 0 || y >= H) continue;
      const lvl = (j + 1) / (FADE + 1);
      for (let x = 0; x < W; x++) if ((B4[(y % 4) * 4 + (x % 4)] + 0.5) / 16 < lvl) frame[y * W + x] = 0;
    }
    if (warm < 1) {
      warm = Math.min(1, (now - t0) / 900);
      const mid = 80;
      if (warm < 0.35) {
        const half = Math.floor((warm / 0.35) * W / 2);
        frame.fill(0);
        for (let x = W / 2 - half; x < W / 2 + half; x++) frame[mid * W + x] = 3;
      } else {
        const h = Math.floor(((warm - 0.35) / 0.65) * H);
        for (let y = 0; y < H; y++) {
          const dy = Math.abs(y - mid);
          if (dy > h) for (let x = 0; x < W; x++) frame[y * W + x] = 0;
          else if (dy > h - 2 && warm < 0.95) for (let x = 0; x < W; x++) frame[y * W + x] = 3;
        }
      }
    }
    if (!RM && now > nextGlitch) { glitchUntil = now + 130; nextGlitch = now + 6000 + Math.random() * 7000; }
    const tearing = now < glitchUntil;
    const d = img.data;
    for (let y = 0; y < H; y++) {
      let shift = 0, flat = -1;
      if (tearing && Math.random() < 0.08) shift = Math.floor((Math.random() - 0.5) * 22);
      if (tearing && Math.random() < 0.012) flat = 1 + Math.floor(Math.random() * 3);
      for (let x = 0; x < W; x++) {
        const sx = Math.min(W - 1, Math.max(0, x - shift));
        const p = flat >= 0 ? flat : frame[y * W + sx];
        const c = PAL[p], o = (y * W + x) * 4;
        d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255;
      }
    }
    octx.putImageData(img, 0, 0);
    ctx.drawImage(off, cropX, cropY, visW, rows, 0, 0, visW * k, rows * k);
  }
  let visible = true, acc = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    if (now - acc < 1000 / 24) return;
    acc = now;
    paint(now);
  }
  paint();
  if (RM) return;
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(cv);
  requestAnimationFrame(loop);
}

/* ------------------------------------------------------------------ covers, and the file still being recovered */
function coverWidth(box) {
  const v = parseFloat(getComputedStyle(box).getPropertyValue('--cw'));
  return v || Math.min((box.parentElement.clientWidth || 360) - 32, 400);
}
function initCovers() {
  $$('canvas[data-cover]').forEach(cv => {
    const [file, f] = cv.dataset.cover.split(':');
    const box = cv.parentElement, max = Number(cv.dataset.max || 1);
    let im = null, k = 1, ctx = null;
    async function draw() {
      if (!im) im = await loadImg(ASSETS.frames[file][f]);
      k = fitK(180, coverWidth(box), max);
      ctx = sizeCanvas(cv, 180, 320, k);
      ctx.drawImage(im, 0, 0, 180 * k, 320 * k);
    }
    draw();
    onResize(draw);
    const hover = cv.closest('.cover, .fcard') || box;
    hover.addEventListener('pointerenter', e => {
      if (RM || !im || e.pointerType !== 'mouse') return;
      let n = 0;
      const tick = () => { if (n < 3) { tear(ctx, im, k, 0.6); n++; setTimeout(tick, 42); } else ctx.drawImage(im, 0, 0, 180 * k, 320 * k); };
      tick();
    });
  });
}
function initStatic() {
  $$('canvas[data-static]').forEach(cv => {
    const box = cv.parentElement;
    let seed = Number(cv.dataset.static) || 3, k = 1, ctx = null, vis = false;
    const draw = () => ctx.drawImage(staticFrame(180, 320, seed), 0, 0, 180 * k, 320 * k);
    const size = () => { k = fitK(180, coverWidth(box), 1); ctx = sizeCanvas(cv, 180, 320, k); draw(); };
    size();
    onResize(size);
    if (RM) return;
    new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(cv);
    let last = 0;
    const tick = now => {
      requestAnimationFrame(tick);
      if (!vis || document.hidden || now - last < 125) return;
      last = now; seed = (seed % 89) + 1; draw();
    };
    requestAnimationFrame(tick);
  });
}

/* ------------------------------------------------------------------ the notes and their frame viewer */
let lbState = null, lastFocus = null;
async function drawInto(cv, file, f, maxW, maxH) {
  const k = Math.max(1, Math.min(fitK(180, maxW), fitK(320, maxH)));
  const ctx = sizeCanvas(cv, 180, 320, k);
  const src = ASSETS.frames[file] && ASSETS.frames[file][f];
  if (!src) return;
  const im = await loadImg(src);
  ctx.drawImage(im, 0, 0, 180 * k, 320 * k);
  if (!RM) {
    let n = 0;
    const tick = () => { if (n < 2) { tear(ctx, im, k, 0.35); n++; setTimeout(tick, 42); } else ctx.drawImage(im, 0, 0, 180 * k, 320 * k); };
    tick();
  }
}
function capOf(b) {
  const t = b.closest('table');
  const src = t ? t.dataset.src : '';
  const t2 = src && src !== 'SEAM RECOVERY' && b.dataset.t;
  return `${src ? src + ' // ' : ''}${t2 || b.textContent}`;
}
function initNotes() {
  const note = $('section.notes'); if (!note) return;
  const file = note.dataset.file;
  const cv = $('.viewer canvas', note), cap = $('.viewer-cap', note);
  const buttons = $$('.tc', note);
  const lb = $('#lb');
  let cur = -1;
  const wide = () => window.matchMedia('(min-width:1000px)').matches;
  const sizes = () => ({ w: 380, h: Math.max(320, window.innerHeight - 250) });
  function show(i, fromUser) {
    if (i < 0 || i >= buttons.length) return;
    cur = i;
    const b = buttons[i];
    $$('tr.act', note).forEach(r => r.classList.remove('act'));
    const tr = b.closest('tr'); if (tr) tr.classList.add('act');
    if (cv && wide()) {
      const s = sizes();
      drawInto(cv, file, b.dataset.f, s.w, s.h);
      cap.textContent = capOf(b);
    } else if (fromUser) openLb(i);
  }
  function openLb(i) {
    const b = buttons[i];
    if (!b || !lb) return;
    lbState = { i };
    lastFocus = document.activeElement;
    lb.hidden = false;
    drawInto($('#lbCv'), file, b.dataset.f, window.innerWidth - 56, window.innerHeight - 190);
    $('#lbCap').textContent = capOf(b);
    $('#lbClose').focus();
  }
  // FRAME BY FRAME, beside WATCH: the viewer from the first still on any screen
  const fbf = $('[data-fbf]');
  if (fbf) fbf.addEventListener('click', () => openLb(0));
  buttons.forEach((b, i) => b.addEventListener('click', () => show(i, true)));
  $$('tr', note).forEach(tr => {
    const b = $('.tc', tr); if (!b) return;
    tr.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse' && wide()) show(buttons.indexOf(b), false); });
  });
  const prev = $('.v-prev', note), next = $('.v-next', note);
  if (prev) prev.addEventListener('click', () => show(Math.max(0, cur - 1), true));
  if (next) next.addEventListener('click', () => show(Math.min(buttons.length - 1, cur + 1), true));
  const initial = () => {
    if (!cv || !wide()) return;
    const s = sizes();
    drawInto(cv, file, note.dataset.cover, s.w, s.h);
    cap.textContent = note.dataset.coverCap || '';
  };
  initial();
  onResize(() => (cur >= 0 ? show(cur, false) : initial()), 150);
  if (!lb) return;
  function lbMove(dlt) {
    if (!lbState) return;
    lbState.i = Math.max(0, Math.min(buttons.length - 1, lbState.i + dlt));
    const b = buttons[lbState.i];
    drawInto($('#lbCv'), file, b.dataset.f, window.innerWidth - 56, window.innerHeight - 190);
    $('#lbCap').textContent = capOf(b);
  }
  function closeLb() { lb.hidden = true; lbState = null; if (lastFocus) lastFocus.focus(); }
  $('#lbPrev').addEventListener('click', () => lbMove(-1));
  $('#lbNext').addEventListener('click', () => lbMove(1));
  $('#lbClose').addEventListener('click', closeLb);
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') lbMove(-1);
    if (e.key === 'ArrowRight') lbMove(1);
  });
}

/* ------------------------------------------------------------------ plates: sigils, portraits, logos */
async function plate(cv) {
  if (cv._done) return;
  cv._done = true;
  const scale = Number(cv.dataset.scale || 1);
  let im, n;
  if (cv.dataset.sigil !== undefined) { im = await loadImg(ASSETS.sigils[cv.dataset.sigil]); n = 48; }
  else if (cv.dataset.logo !== undefined) { im = await loadImg(ASSETS.logos[cv.dataset.logo]); n = 48; }
  else {
    const id = cv.dataset.por, src = ASSETS.portraits[id];
    im = src ? await loadImg(src) : staticFrame(160, 160, Number(id.replace(/\D/g, '')) || 7);
    n = 160;
  }
  const draw = () => {
    let avail = n * scale, room = Infinity;
    const host = cv.closest('summary, .modal-body, .map-panel, .ms-body');
    if (host && n === 160) {
      const cs = getComputedStyle(host);
      room = host.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 16;
      avail = Math.min(avail, room);
    }
    if (cv.dataset.max) avail = Math.min(avail, Number(cv.dataset.max));
    let k = fitK(n, avail, scale);
    /* a narrow screen at low density cannot hold the picture whole: draw it at half size, every other pixel */
    if (n * k / DPR() > room && room * DPR() >= n / 2) k = 0.5;
    const ctx = sizeCanvas(cv, n, n, k);
    ctx.drawImage(im, 0, 0, n * k, n * k);
  };
  draw();
  onResize(draw);
}
function initPlates(root = document, eager = false) {
  const cvs = $$('canvas[data-sigil], canvas[data-por], canvas[data-logo]', root);
  if (eager) { cvs.forEach(plate); return; }
  const near = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { near.unobserve(e.target); plate(e.target); } }), { rootMargin: '600px 0px' });
  cvs.forEach(cv => near.observe(cv));
}

/* numbers, dates and file references in the prose are set in the archive's own face */
const NUM_SEL = '.chap p, .chap li, .note-text p, .note-text li, .note-text td, .tl-text, .file-line, .preface p, .pop-b p, .pop-b li, .map-panel p, .kt > span, .census-d, .lg-text p, .loc-d';
function initNumerals(scope) {
  const RE = /(NODUS \/\/ \d{4}(?: \/\/ P[+-]?\d+)?|CAM V3-2|CAM \d{2}|BENCH V3|\bP[+-]?\d+\b|\b\d{2}:\d{2}(?::\d{2}){0,2}\b|\d[\d,.:\-]*\d|\d)/g;
  const skip = n => n.parentElement && n.parentElement.closest('.px, .hudtxt, pre, button, .tc, .n, .lost, .num, .bna, .hr, .stats, .rd, script, style, template');
  (scope ? $$(NUM_SEL, scope).concat(scope.matches && scope.matches(NUM_SEL) ? [scope] : []) : $$(NUM_SEL)).forEach(root => {
    if (!root || root._num) return;
    root._num = true;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) { const n = walker.currentNode; if (/\d/.test(n.nodeValue) && !skip(n)) nodes.push(n); }
    nodes.forEach(n => {
      const s = n.nodeValue; RE.lastIndex = 0;
      if (!RE.test(s)) return;
      RE.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let last = 0, m;
      while ((m = RE.exec(s))) {
        if (m.index > last) frag.appendChild(document.createTextNode(s.slice(last, m.index)));
        const sp = document.createElement('span');
        const tok = m[0];
        sp.className = 'num' + (/^(NODUS|CAM|BENCH|P[+-]?\d|\d{2}:\d{2})/.test(tok) ? ' id' : '');
        sp.textContent = tok;
        frag.appendChild(sp);
        last = m.index + tok.length;
      }
      if (last < s.length) frag.appendChild(document.createTextNode(s.slice(last)));
      n.parentNode.replaceChild(frag, n);
    });
  });
}

/* ------------------------------------------------------------------ popups */
const Modal = (() => {
  const el = $('#modal');
  if (!el) return { show() {}, hide() {}, isOpen: () => false };
  const card = $('.modal-card', el), body = $('#modalBody'), kick = $('#modalK');
  let open = false, pushed = false, onClose = null, back = null;
  function focusables() { return $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), summary', card).filter(x => x.offsetParent !== null); }
  function show(content, opts = {}) {
    body.innerHTML = '';
    body.appendChild(content);
    kick.textContent = opts.kicker || '';
    card.classList.toggle('wide', !!opts.wide);
    card.classList.toggle('low', !!opts.low);
    card.classList.toggle('keyw', !!opts.key);
    const t = $('.pop-t, h2', body);
    if (t) { t.id = 'modalT'; card.setAttribute('aria-labelledby', 'modalT'); } else card.removeAttribute('aria-labelledby');
    const url = opts.hash ? location.pathname + location.search + opts.hash : location.pathname + location.search;
    if (!open) {
      back = document.activeElement;
      el.hidden = false;
      document.documentElement.classList.add('modal-open');
      open = true;
      if (opts.push !== false) { try { history.pushState({ nodusModal: 1 }, '', url); pushed = true; } catch (e) { pushed = false; } }
      else pushed = false;
    } else if (opts.hash !== undefined && opts.push !== false) {
      try { history.replaceState(history.state, '', url); } catch (e) { /* ignore */ }
    }
    onClose = opts.onClose || null;
    initPlates(body, true);
    initNumerals(body);
    card.scrollTop = 0;
    card.focus({ preventScroll: true });
  }
  function hide(fromHistory) {
    if (!open) return;
    open = false;
    el.hidden = true;
    document.documentElement.classList.remove('modal-open');
    body.innerHTML = '';
    const cb = onClose; onClose = null;
    if (!fromHistory) {
      if (pushed) { pushed = false; history.back(); }
      else if (location.hash) { try { history.replaceState(history.state, '', location.pathname + location.search); } catch (e) { /* ignore */ } }
    }
    pushed = false;
    if (cb) cb();
    if (back && back.focus) back.focus({ preventScroll: true });
  }
  el.addEventListener('click', e => { if (e.target.closest('[data-x]')) hide(false); });
  document.addEventListener('keydown', e => {
    if (!open) return;
    if (e.key === 'Escape') { e.preventDefault(); hide(false); return; }
    if (e.key === 'Tab') {
      const f = focusables(); if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === card)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('popstate', () => { if (open) hide(true); });
  return { show, hide, isOpen: () => open };
})();

/* entries of the index open in a popup; #an-entry opens it on arrival */
function openCard(d, push) {
  const pop = $('.pop', d).cloneNode(true);
  Modal.show(pop, { kicker: d.dataset.k || '', hash: d.id ? '#' + d.id : '', push });
}
function initEntries() {
  const cards = $$('details.card');
  if (!cards.length) return;
  cards.forEach(d => {
    $('summary', d).addEventListener('click', e => { e.preventDefault(); openCard(d, true); });
  });
  const fromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const d = id && document.getElementById(id);
    if (d && d.matches('details.card')) { d.scrollIntoView({ block: 'center' }); openCard(d, false); }
  };
  fromHash();
  window.addEventListener('hashchange', fromHash);
}

/* every name on the site opens its entry: from a popup the page carries, from the entry's own card when the
   page is its part of the index, or from the entries kept beside the pages, fetched the first time a name is
   reached for. Without them a name is a link to its entry in the index */
let refsWait = null;
function loadRefs() {
  if (window.NODUS_REFS) return Promise.resolve(window.NODUS_REFS);
  if (!ASSETS.refs) return Promise.reject(new Error('no entries'));
  if (!refsWait) {
    refsWait = new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = ROOT + ASSETS.refs;
      s.async = true;
      s.onload = () => (window.NODUS_REFS ? res(window.NODUS_REFS) : rej(new Error('no entries')));
      s.onerror = () => { refsWait = null; rej(new Error('no entries')); };
      document.head.appendChild(s);
    });
  }
  return refsWait;
}
function refHere(id) {
  const t = document.querySelector(`template.refpop[data-ref="${id}"]`);
  if (t) return () => Modal.show(t.content.cloneNode(true), { kicker: t.dataset.k || '', hash: '' });
  for (const c of [id, 'l-' + id]) {
    const d = document.getElementById(c);
    if (d && d.matches('details.card')) return () => openCard(d, true);
  }
  return null;
}
function initRefs() {
  const want = e => {
    const a = e.target.closest && e.target.closest('a.ref[data-ref]');
    if (a && !refHere(a.dataset.ref)) loadRefs().catch(() => {});
  };
  document.addEventListener('pointerover', want, { passive: true });
  document.addEventListener('touchstart', want, { passive: true });
  document.addEventListener('focusin', want);
  document.addEventListener('click', e => {
    const a = e.target.closest('a.ref[data-ref]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
    e.preventDefault();
    const here = refHere(a.dataset.ref);
    if (here) { here(); return; }
    const href = a.href;
    loadRefs().then(R => {
      const x = R[a.dataset.ref];
      if (!x) { location.href = href; return; }
      const t = document.createElement('template');
      t.innerHTML = x[1];
      fixRefs(t.content);
      Modal.show(t.content, { kicker: x[0], hash: '' });
    }).catch(() => { location.href = href; });
  });
}

/* the chapters of the Record, on screens too narrow to keep them beside the text */
function initTocButton() {
  const b = $('[data-toc]'), toc = $('.toc');
  if (!b || !toc) return;
  b.addEventListener('click', () => {
    const c = document.createElement('nav');
    c.className = 'toc';
    c.setAttribute('aria-label', 'Chapters of the Record');
    c.appendChild($('ol', toc).cloneNode(true));
    Modal.show(c, { kicker: 'THE RECORD // CHAPTERS' });
    const cur = $('[aria-current]', c); if (cur) cur.scrollIntoView({ block: 'center' });
  });
}

/* ------------------------------------------------------------------ the survey */
/* The survey is drawn at several scales. The view keeps a whole number of device pixels per map
   pixel at every zoom step, so the dithering stays crisp; each step down swaps in a finer sheet. */
async function initMap() {
  if (!SV) return;
  const MD = SV.mapData, T = SV.text, MS = SV.map;
  const WW = MD.size[0], WH = MD.size[1], KM = MD.km;
  const shell = $('#mapShell'), stage = $('#mapStage'), frameEl = $('#mapFrame'), cv = $('#mapCv'), fx = $('#mapFx'), svg = $('#mapSvg');
  const labs = $('#mapLabels'), pinsEl = $('#mapPins'), panel = $('#mapPanel'), scaleEl = $('#mapScale'), hintEl = $('#mapHint');
  const sheet = $('#mapSheet'), msBody = $('#msBody'), topEl = $('.map-top');
  const ctx = cv.getContext('2d'), fctx = fx.getContext('2d');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const [a, v] of Object.entries(attrs)) e.setAttribute(a, v); if (parent) parent.appendChild(e); return e; };
  let layer = 'surface', sel = null, full = false, arriving = false;
  let cx = WW / 2, cy = WH / 2, zi = 0, ladder = [], ox = 0, oy = 0, Pd = 1, dpr = DPR();
  const imgs = new Map();
  const LV = () => MS[layer];
  const FV = () => MS[layer + 'Fit'] || [];
  const PLACES = T.places;
  const byId = id => PLACES.find(p => p.id === id);
  const U = u => ROOT + u;

  function tile(url) {
    if (imgs.has(url)) return imgs.get(url);
    imgs.set(url, null);
    loadImg(url).then(im => { imgs.set(url, im); queue(); }).catch(() => imgs.delete(url));
    return null;
  }

  // ---- the zoom ladder: (sheet, device px per sheet px), finest sheet that still reads as pixels
  function buildLadder() {
    const L = LV();
    const fitPd = Math.min(cv.width / WW, cv.height / WH);
    let first = { li: 0, l: L[0], k: 1, Pd: L[0].s };
    for (const l of [L[0], ...FV()]) {
      const k = Math.floor(fitPd / l.s + 1e-6);
      if (k >= 1 && l.s * k > first.Pd + 1e-6) first = { li: 0, l, k, Pd: l.s * k };
    }
    const minPx = [0, 0.5, 0.6], maxPx = [3, 3, 6];
    const last = L.length - 1;
    const c = [];
    L.forEach((l, li) => {
      for (let k = 1; k <= 32; k++) {
        const px = k / dpr;
        if (li > 0 && px < minPx[li]) continue;
        if (px > (li === last ? maxPx[2] : maxPx[li])) continue;
        if (l.s * k > first.Pd * 1.05) c.push({ li, l, k, Pd: l.s * k });
      }
    });
    c.sort((a, b) => a.Pd - b.Pd || b.li - a.li);
    const out = [first];
    for (const x of c) {
      const p = out[out.length - 1];
      if (x.li < p.li) continue;
      if (x.Pd < p.Pd * 1.3) {
        if (out.length > 1 && x.li > p.li && Math.abs(x.Pd - p.Pd) / p.Pd < 0.08) out[out.length - 1] = x;
        continue;
      }
      out.push(x);
    }
    ladder = out;
  }
  const stepPd = st => st.l.s * st.k;

  function clampCam() {
    const vw = cv.width / Pd, vh = cv.height / Pd;
    cx = vw >= WW ? WW / 2 : Math.min(WW - vw / 2 + vw * 0.15, Math.max(vw / 2 - vw * 0.15, cx));
    cy = vh >= WH ? WH / 2 : Math.min(WH - vh / 2 + vh * 0.15, Math.max(vh / 2 - vh * 0.15, cy));
  }

  // ---- drawing
  let raf = 0;
  function queue() { if (!raf) raf = requestAnimationFrame(() => { raf = 0; render(); }); }
  function drawLevel(l, k, needAll) {
    const tw = l.tw, th = l.th, rows = l.tiles.length, cols = l.tiles[0].length;
    const c0 = Math.max(0, Math.floor(-ox / (tw * k))), c1 = Math.min(cols - 1, Math.floor((cv.width - ox) / (tw * k)));
    const r0 = Math.max(0, Math.floor(-oy / (th * k))), r1 = Math.min(rows - 1, Math.floor((cv.height - oy) / (th * k)));
    let missing = false;
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const im = tile(l.tiles[r][c]);
      if (im) { if (!needAll) ctx.drawImage(im, ox + c * tw * k, oy + r * th * k, tw * k, th * k); }
      else missing = true;
    }
    return missing;
  }
  function render() {
    if (!ladder.length) return;
    const L = LV(), st = ladder[zi], lvl = st.l;
    Pd = lvl.s * st.k;
    clampCam();
    ox = Math.round(cv.width / 2 - cx * Pd);
    oy = Math.round(cv.height / 2 - cy * Pd);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#0D0221';
    ctx.fillRect(0, 0, cv.width, cv.height);
    if (lvl !== L[0]) {
      const missing = drawLevel(lvl, st.k, true);
      if (missing) drawLevel(L[0], Pd / L[0].s, false);
    }
    drawLevel(lvl, st.k, false);
    svg.setAttribute('viewBox', `${(-ox / Pd).toFixed(3)} ${(-oy / Pd).toFixed(3)} ${(cv.width / Pd).toFixed(3)} ${(cv.height / Pd).toFixed(3)}`);
    placeOverlays();
    drawFx();
  }

  // ---- light moving under the water along the cables (its own canvas, redrawn alone)
  const glints = MD.cables.map((c, i) => ({ c, t: (i * 0.137) % 1, v: 0.018 + (i % 4) * 0.006 }));
  function drawFx() {
    fctx.clearRect(0, 0, fx.width, fx.height);
    if (layer !== 'surface' || !ladder.length) return;
    const st = ladder[zi], l = st.l, k = st.k;
    for (const g of glints) {
      const n = g.c.length, pos = (1 - g.t) * (n - 1), i0 = Math.floor(pos);
      const p = g.c[Math.min(n - 1, i0)], q = g.c[Math.min(n - 1, i0 + 2)];
      const x = ox + Math.floor(p[0] * l.s) * k, y = oy + Math.floor(p[1] * l.s) * k;
      if (x < -k || y < -k || x > fx.width || y > fx.height || p[1] > WH) continue;
      fctx.fillStyle = '#D6F6FC'; fctx.fillRect(x, y, k, k);
      fctx.fillStyle = '#38D0DA'; fctx.fillRect(ox + Math.floor(q[0] * l.s) * k, oy + Math.floor(q[1] * l.s) * k, k, k);
    }
  }

  // ---- the vector layer: district outlines, the view of CAM 07, the Wheel
  const gPolys = mk('g', {}, svg), gCone = mk('g', {}, svg), gWheel = mk('g', {}, svg);
  const polys = {};
  for (const [key, d] of Object.entries(MD.districts)) {
    if (!d.poly) continue;
    polys[key] = mk('polygon', { points: d.poly.map(q => q.join(',')).join(' '), fill: 'none', stroke: 'transparent', 'stroke-width': '1', 'vector-effect': 'non-scaling-stroke' }, gPolys);
  }
  const cam = MD.cam;
  // what CAM 07 saw: a dashed ICHOR edge in a dark channel, so it reads over any ground
  const coneH = mk('path', { d: '', fill: 'none', stroke: '#0D0221', 'stroke-width': '4', 'vector-effect': 'non-scaling-stroke' }, gCone);
  const coneA = mk('path', { d: '', fill: 'none', stroke: '#F22C70', 'stroke-width': '2', 'stroke-dasharray': '4 3', 'vector-effect': 'non-scaling-stroke' }, gCone);
  (function cone() {
    const [ccx, ccy] = cam, tx = MD.babel[0], ty = MD.babel[1];
    const a = Math.atan2(ty - ccy, tx - ccx), r = Math.hypot(tx - ccx, ty - ccy) + 8, s = 0.33;
    const p1 = [ccx + Math.cos(a - s) * r, ccy + Math.sin(a - s) * r], p2 = [ccx + Math.cos(a + s) * r, ccy + Math.sin(a + s) * r];
    const dd = `M${ccx},${ccy} L${p1[0].toFixed(1)},${p1[1].toFixed(1)} A${r.toFixed(1)},${r.toFixed(1)} 0 0 1 ${p2[0].toFixed(1)},${p2[1].toFixed(1)} Z`;
    coneH.setAttribute('d', dd);
    coneA.setAttribute('d', dd);
  })();
  gCone.style.display = byId('cam07') ? '' : 'none';
  const [wx, wy] = MD.wheel;
  const rings = [14, 10.5, 7].map((r, i) => {
    const g = mk('g', { transform: `translate(${wx},${wy})` }, gWheel);
    const inner = mk('g', {}, g);
    mk('circle', { cx: 0, cy: 0, r, fill: 'none', stroke: '#D6F6FC', 'stroke-width': '1.5', 'vector-effect': 'non-scaling-stroke', 'stroke-dasharray': i === 0 ? '6 2' : (i === 1 ? '4 2' : '3 2') }, inner);
    const n = [10, 7, 5][i];
    for (let j = 0; j < n; j++) {
      const a = j * 2 * Math.PI / n;
      mk('circle', { cx: (Math.cos(a) * r).toFixed(2), cy: (Math.sin(a) * r).toFixed(2), r: 0.9, fill: '#D6F6FC' }, inner);
    }
    return inner;
  });
  mk('circle', { cx: wx, cy: wy, r: 1.2, fill: '#D6F6FC' }, gWheel);
  let vis = true;
  if (!RM) {
    let t = 0;
    const spin = () => {
      t += 1;
      rings.forEach((g, i) => g.setAttribute('transform', `rotate(${((i % 2 ? -1 : 1) * t * (0.05 + i * 0.03)) % 360})`));
      if (layer === 'surface' && vis) requestAnimationFrame(spin); else setTimeout(() => requestAnimationFrame(spin), 400);
    };
    requestAnimationFrame(spin);
  }

  // ---- labels and markers, built once per layer and moved on every draw
  let labelEls = [], pinEls = [];
  function buildOverlays() {
    labs.innerHTML = ''; pinsEl.innerHTML = '';
    labelEls = (layer === 'surface' ? T.labels : T.panLabels).map(L => {
      const el = document.createElement('div');
      el.className = 'mlab' + (L.key ? ' dist' : '') + (L.cls ? ' ' + L.cls : '');
      if (L.key) el.dataset.key = L.key;
      labs.appendChild(el);
      return { L, el, mode: '' };
    });
    pinEls = PLACES.filter(P => P.layer === layer).map(P => {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.id = P.id;
      if (P.cat === 'file') {
        b.className = 'pin file';
        b.innerHTML = `<span class="t">${esc(P.file)}</span><span class="ring"></span>`;
        b.setAttribute('aria-label', `NODUS // ${P.file}, ${P.plain}`);
      } else {
        b.className = `pin poi ${P.cat}${layer === 'pan' ? ' pan' : ''}`;
        b.innerHTML = `<span class="pl">${P.name}</span><span class="ring" aria-hidden="true"></span>`;
        b.setAttribute('aria-label', P.cat === 'sealed' ? 'A place not yet recovered' : P.plain);
      }
      b.addEventListener('click', e => { e.stopPropagation(); if (P.cat === 'sealed') return; select('p:' + P.id); keepInView(P); });
      pinsEl.appendChild(b);
      return { P, el: b };
    });
  }
  const measure = o => { if (!o.w) { o.w = o.el.offsetWidth; o.h = o.el.offsetHeight; } return o; };
  const northEl = $('.map-north', stage), zoomEl = $('.map-zoom');
  let scaleBox = null, scaleKey = '', uiBoxes = [];
  function measureUi() {
    uiBoxes = [[northEl.offsetLeft, northEl.offsetTop, northEl.offsetLeft + northEl.offsetWidth, northEl.offsetTop + northEl.offsetHeight]];
    if (getComputedStyle(zoomEl).position === 'absolute') {
      const z = zoomEl.getBoundingClientRect(), s = stage.getBoundingClientRect();
      const l = z.left - s.left - stage.clientLeft, t = z.top - s.top - stage.clientTop;
      uiBoxes.push([l, t, l + z.width, t + z.height]);
    }
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { labelEls.concat(pinEls).forEach(o => { o.w = 0; }); scaleKey = ''; measureUi(); queue(); });
  const STEM = 14, GAP = 2, NUDGE = 26;
  function placeOverlays() {
    const P = Pd / dpr;
    const narrow = P < 2.2;
    const W = cv.width / dpr, H = cv.height / dpr;
    const wide = W >= 900;
    if (wide !== stage.classList.contains('wide')) { stage.classList.toggle('wide', wide); labelEls.forEach(o => { o.w = 0; }); }
    // the scale bar: a round distance near a seventh of the ground in view (never more than the city's width),
    // so the same view of the city reads the same distance on any screen; the bar's outer edges span it exactly
    const mpp = KM * 1000 / P;
    const span = Math.min(WW, W / P) * KM * 1000;
    const nice = [25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];
    let j = 0;
    nice.forEach((v, i) => { if (v <= span * 0.15) j = i; });
    while (j > 0 && nice[j] / mpp > W * 0.3) j--;
    while (j < nice.length - 1 && nice[j] / mpp < 36 && nice[j + 1] / mpp <= W * 0.3) j++;
    const m = nice[j], bar = Math.round(m / mpp), key = m + ':' + bar;
    if (key !== scaleKey) {
      scaleKey = key;
      $('i', scaleEl).style.width = bar + 'px';
      $('span', scaleEl).textContent = m >= 1000 ? `${m / 1000} KM` : `${m} M`;
      scaleBox = [scaleEl.offsetLeft, scaleEl.offsetTop, scaleEl.offsetLeft + scaleEl.offsetWidth, scaleEl.offsetTop + scaleEl.offsetHeight];
    }
    const boxes = [scaleBox, ...uiBoxes];
    const hit = (a, b) => a[0] < b[2] + GAP && a[2] + GAP > b[0] && a[1] < b[3] + GAP && a[3] + GAP > b[1];
    // the files first: they always show, and everything else keeps clear of them
    // each hangs its number over its point on a stem; where another file's number or marker is in the way the
    // stem grows, and where there is no room above the number hangs under the point
    const files = pinEls.filter(o => o.P.cat === 'file'), rest = pinEls.filter(o => o.P.cat !== 'file');
    const at = o => [(ox + o.P.x * Pd) / dpr, (oy + o.P.y * Pd) / dpr];
    const taken = files.map(o => { const [x, y] = at(o); return [x - 9, y - 9, x + 9, y + 9]; });
    const numBox = (o, x, y, stem, below) => below ? [x - o.w / 2 - 2, y + stem - 2, x + o.w / 2 + 2, y + stem + o.h + 2]
      : [x - o.w / 2 - 2, y - stem - o.h - 2, x + o.w / 2 + 2, y - stem + 2];
    for (const o of files.slice().sort((a, b) => a.P.y - b.P.y)) {
      const [x, y] = at(o);
      measure(o);
      const up = Math.max(6, Math.min(STEM, Math.floor(y - o.h - 4)));
      const tries = [[up, false], [up + 10, false], [up + 20, false], [STEM, true], [STEM + 10, true]];
      let pick = tries[0];
      for (const [stem, below] of tries) {
        const nb = numBox(o, x, y, stem, below);
        if ((!below && nb[1] < 0) || (below && nb[3] > H)) continue;
        if (!taken.some(b => hit(nb, b))) { pick = [stem, below]; break; }
      }
      const [stem, below] = pick;
      if (stem !== o.stem) { o.stem = stem; o.el.style.setProperty('--stem', stem + 'px'); }
      if (below !== !!o.below) { o.below = below; o.el.classList.toggle('below', below); }
      o.el.classList.toggle('on', sel === 'p:' + o.P.id);
      o.el.style.transform = below ? `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,${stem}px)`
        : `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,calc(-100% - ${stem}px))`;
      const nb = numBox(o, x, y, stem, below);
      taken.push(nb);
      boxes.push(nb, below ? [x - 9, y - 9, x + 9, y + stem] : [x - 9, y - stem, x + 9, y + 9]);
    }
    // the names of the districts come first while the city is seen whole or near it, so the reader always knows
    // where on the map they are; closer in, the places come first and a district's name keeps clear of them
    const free = a => !boxes.some(b => hit(a, b));
    function placeLabel(o) {
      const L = o.L;
      const min = L.min !== undefined ? L.min : (L.wide ? 2.2 : 0);
      const on = P >= min && (L.max === undefined || P < L.max);
      o.el.hidden = !on;
      if (!on) return;
      const mode = (narrow && L.short ? 's' : 'l');
      if (mode !== o.mode) {
        o.mode = mode; o.w = 0;
        o.el.innerHTML = esc(narrow && L.short ? L.short : L.text).replace(/\n/g, '<br>') + (L.sub ? `<small>${esc(L.sub)}</small>` : '');
      }
      measure(o);
      // a name whose point is in view is kept whole inside the frame; one whose point has left the view goes
      const x0 = (ox + L.x * Pd) / dpr, y0 = (oy + L.y * Pd) / dpr;
      const inside = x0 >= 0 && x0 <= W && y0 >= 0 && y0 <= H;
      const x = inside ? Math.min(Math.max(x0, o.w / 2 + 2), W - o.w / 2 - 2) : x0;
      const y = inside ? Math.min(Math.max(y0, o.h / 2 + 2), H - o.h / 2 - 2) : y0;
      const a = [x - o.w / 2, y - o.h / 2, x + o.w / 2, y + o.h / 2];
      let dx = 0, dy = 0, ok = inside;
      if (inside) {
        ok = free(a);
        if (!ok) {
          const tries = [];
          for (const b of boxes) {
            if (!hit(a, b)) continue;
            tries.push([b[2] + GAP - a[0] + 1, 0], [b[0] - GAP - a[2] - 1, 0], [0, b[3] + GAP - a[1] + 1], [0, b[1] - GAP - a[3] - 1]);
          }
          tries.sort((p, q) => Math.hypot(p[0], p[1]) - Math.hypot(q[0], q[1]));
          for (const [tx, ty] of tries) {
            if (Math.hypot(tx, ty) > NUDGE) break;
            if (free([a[0] + tx, a[1] + ty, a[2] + tx, a[3] + ty])) { dx = tx; dy = ty; ok = true; break; }
          }
        }
        if (ok) boxes.push([a[0] + dx, a[1] + dy, a[2] + dx, a[3] + dy]);
      }
      o.el.classList.toggle('off', !ok);
      o.el.style.transform = `translate(${(x + dx).toFixed(1)}px,${(y + dy).toFixed(1)}px) translate(-50%,-50%)`;
    }
    const distFirst = P < 3.2;
    if (distFirst) labelEls.filter(o => o.L.key).forEach(placeLabel);
    // other places: shown once the zoom is close enough; the chosen one first; a name that would
    // cover something already placed stands down to a square until there is room
    const order = rest.filter(o => sel === 'p:' + o.P.id).concat(rest.filter(o => sel !== 'p:' + o.P.id));
    for (const o of order) {
      const chosen = sel === 'p:' + o.P.id;
      const x = (ox + o.P.x * Pd) / dpr, y = (oy + o.P.y * Pd) / dpr;
      const on = (zi >= o.P.lvl || chosen) && x > -8 && x < W + 8 && y > -12 && y < H + 12;
      o.el.hidden = !on;
      o.el.classList.toggle('on', chosen);
      if (!on) continue;
      if (o.dot) o.el.classList.remove('dot');
      if (!o.w) measure(o);
      // the name to the right of its mark, or to the left where the right is taken or runs off the map;
      // a name with room on neither side stands down to its mark until there is room
      const R = [x - 4, y - 10, x - 4 + o.w, y + 10], Lb = [x + 4 - o.w, y - 10, x + 4, y + 10];
      const clear = b => b[0] >= 2 && b[2] <= W - 2 && !boxes.some(q => hit(b, q));
      let left = false, dot = false;
      if (o.P.cat === 'sealed') dot = true;
      else if (!clear(R)) {
        if (clear(Lb)) left = true;
        else if (chosen) left = R[2] > W - 2 && Lb[0] >= 2;
        else dot = true;
      }
      o.dot = dot;
      o.el.classList.toggle('dot', dot);
      o.el.classList.toggle('lft', left);
      o.el.style.transform = left ? `translate(${(x + 4 - o.w).toFixed(1)}px,${(y - 10).toFixed(1)}px)`
        : `translate(${(x - 4).toFixed(1)}px,${(y - 10).toFixed(1)}px)`;
      boxes.push(dot ? [x - 5, y - 5, x + 5, y + 5] : (left ? Lb : R));
    }
    labelEls.filter(o => !distFirst || !o.L.key).forEach(placeLabel);
    stage.classList.toggle('zoomed', zi > 0 || full);
    $('#mzOut').disabled = zi === 0;
    $('#mzIn').disabled = zi === ladder.length - 1;
  }

  function hover(key, on) {
    const p = polys[key]; if (!p || layer !== 'surface') return;
    if (sel === 'd:' + key) return;
    p.setAttribute('stroke', on ? '#D6F6FC' : 'transparent');
    p.setAttribute('stroke-dasharray', '3 2');
    const l = labelEls.find(o => o.L.key === key); if (l) l.el.classList.toggle('hi', on);
  }
  function mark() {
    for (const [key, p] of Object.entries(polys)) {
      const on = sel === 'd:' + key && layer === 'surface';
      p.setAttribute('stroke', on ? '#F22C70' : 'transparent');
      p.setAttribute('stroke-dasharray', on ? '' : '3 2');
      p.setAttribute('stroke-width', on ? '2' : '1');
    }
    labelEls.forEach(o => { if (o.L.key) o.el.classList.toggle('hi', sel === 'd:' + o.L.key && layer === 'surface'); });
  }

  // ---- the places: a directory of every one, and each one's entry. On a wide screen both stand beside the
  // map; on a phone the directory is under the map, and an entry rises over the foot of the map in a sheet
  const txt = h => { const d = document.createElement('div'); d.innerHTML = h; return d.textContent; };
  const norm = s => String(s).toUpperCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
  const GROUP_NAME = { wards: 'The Wards', bay: 'The Bay', gates: 'The Gates', below: 'Below' };
  const GROUP_LABEL = { wards: 'THE WARDS', bay: 'THE BAY', gates: 'A GATE', below: 'BELOW' };
  const groupOf = P => (P.layer === 'pan' ? 'below' : (P.district && T.districts[P.district] ? P.district
    : (P.cat === 'gate' ? 'gates' : (/^THE BAY/.test(txt(P.k)) ? 'bay' : 'wards'))));
  const GROUPS = Object.keys(T.districts).concat(['wards', 'bay', 'gates', 'below']);
  const gName = g => (T.districts[g] ? T.districts[g].name : GROUP_NAME[g]);
  const OPEN = PLACES.filter(p => p.cat !== 'sealed');
  const inGroup = g => OPEN.filter(p => groupOf(p) === g);
  // what a place is, without the district its group already names
  const kShort = P => {
    const k = txt(P.k), g = groupOf(P), d = T.districts[g], cut = k.indexOf(' // ');
    const own = d ? [d.name.toUpperCase(), d.street] : [GROUP_LABEL[g]];
    if (cut < 0) return own.includes(k) ? '' : k;
    return own.includes(k.slice(0, cut)) ? k.slice(cut + 4) : k;
  };
  const hashOf = id => (!id ? '' : id.startsWith('d:') ? '#d-' + id.slice(2) : (byId(id.slice(2)) && byId(id.slice(2)).cat !== 'sealed' ? '#' + id.slice(2) : ''));
  const setHash = h => { try { history.replaceState(history.state, '', location.pathname + location.search + h); } catch (e) { /* ignore */ } };
  const btnList = (items, cls) => `<div class="dlist px">${items.map(([k, v, t]) => `<button type="button" class="${cls || ''}" data-${k}="${esc(v)}">${t}</button>`).join('')}</div>`;
  const plainName = n => n.replace(/'|&#x27;|&#39;/g, '’');
  // how far a place is from another, and which way, north being up
  const DIRS = ['E', 'SE', 'S', 'SW', 'W', 'NW', 'N', 'NE'];
  const far = d => { const m = d * KM * 1000; return m < 1000 ? `${Math.max(50, Math.round(m / 50) * 50)} M` : `${(m / 1000).toFixed(1)} KM`; };
  const way = (dx, dy) => DIRS[((Math.round(Math.atan2(dy, dx) / (Math.PI / 4)) % 8) + 8) % 8];
  function nearHtml(P) {
    const rows = OPEN.filter(q => q.layer === P.layer && q.id !== P.id)
      .map(q => ({ q, d: Math.hypot(q.x - P.x, q.y - P.y) })).sort((a, b) => a.d - b.d).slice(0, 5);
    return `<section class="near"><p class="pop-h px">NEAR HERE</p><div class="nlist">` + rows.map(({ q, d }) =>
      `<button type="button" class="nrow" data-place="${q.id}"><span class="pn px">${q.name}</span><span class="nd px">${far(d)} ${way(q.x - P.x, q.y - P.y)}</span></button>`).join('') +
      `</div></section>`;
  }
  function popHtml(id, thumb) {
    if (id.startsWith('d:')) {
      const key = id.slice(2), d = T.districts[key];
      const inside = OPEN.filter(p => p.district === key && p.layer === 'surface');
      const kg = (T.key || []).find(g => g.key === key);
      const same = d.street.replace(/^THE /, '') === d.name.toUpperCase().replace(/^THE /, '');
      const mark = d.mark ? `<div class="pop-vis sig"><canvas class="sigil" data-sigil="${esc(d.mark)}" data-scale="2" aria-hidden="true"></canvas></div>` : '';
      return `<div class="pop pop-district"><div class="pop-head${mark ? '' : ' nv'}">${mark}<div class="pop-id"><p class="pop-k px">${esc(d.name.toUpperCase())}${same ? '' : ' // ' + d.street} // ${d.held}</p>` +
        `<h2 class="pop-t" id="mapPopT">${esc(d.name)}</h2></div></div><div class="pop-b">${d.html}</div>` +
        (d.census || '') +
        (inside.length ? `<p class="pop-h px">PLACES</p>` + btnList(inside.map(p => ['place', p.id, p.name]), '') : '') +
        (kg ? `<details class="pkey"><summary class="px">THE MARKS HERE</summary><ul class="mapkey-l">${kg.items.map(keyItem).join('')}</ul></details>` : '') +
        `<div class="acts"><a class="btn" href="${U('index/locations/#g-' + key)}">IN THE INDEX</a><button class="btn" type="button" data-back="1">THE WHOLE CITY</button></div></div>`;
    }
    const P = byId(id.slice(2));
    let acts = `<a class="btn" href="${U('index/locations/#l-' + P.id)}">IN THE INDEX</a>`;
    if (P.district && T.districts[P.district]) acts += `<button class="btn" type="button" data-go="${P.district}">${esc(T.districts[P.district].name.toUpperCase())}</button>`;
    acts += `<button class="btn" type="button" data-back="1">${P.layer === 'pan' ? 'ALL OF BELOW' : 'THE WHOLE CITY'}</button>`;
    const vis = P.img ? `<div class="pop-vis por sm"><canvas data-por="${esc(P.img)}" data-scale="1"${thumb ? ' data-max="112"' : ''} aria-hidden="true"></canvas></div>` : '';
    return `<div class="pop pop-place"><div class="pop-head${vis ? '' : ' nv'}">${vis}<div class="pop-id"><p class="pop-k px">${P.k}</p>` +
      `<h2 class="pop-t pt" id="mapPopT">${plainName(P.name)}</h2></div></div><div class="pop-b">${P.html}</div><div class="acts">${acts}</div></div>`;
  }

  // ---- the directory: every open place by district, with a search
  const listEl = document.createElement('div');
  listEl.className = 'mp-list';
  const entryEl = document.createElement('div');
  entryEl.className = 'mp-entry';
  entryEl.hidden = true;
  panel.replaceChildren(listEl, entryEl);
  const rowOf = id => (id ? $(`.prow[data-${id.startsWith('d:') ? 'go' : 'place'}="${id.slice(2)}"]`, listEl) : null);
  function markRow() {
    $$('.prow[aria-current]', listEl).forEach(b => b.removeAttribute('aria-current'));
    const r = rowOf(sel);
    if (r) r.setAttribute('aria-current', 'true');
  }
  function buildList() {
    const key = (P, g) => norm(`${P.plain} ${txt(P.k)} ${gName(g)}`);
    listEl.innerHTML = `<div class="mp-head"></div>` +
      `<div class="mp-find"><label class="px" for="mapFind">FIND A PLACE</label>` +
      `<input id="mapFind" class="px" type="search" autocomplete="off" autocapitalize="characters" spellcheck="false" enterkeyhint="go" placeholder="A NAME, A STREET, A KIND">` +
      `<p class="px mp-found" id="mapFound" aria-live="polite"></p></div>` +
      `<div class="mp-groups">` + GROUPS.map(g => {
        const rows = inGroup(g), d = T.districts[g];
        if (!rows.length) return '';
        return `<details class="pgrp" data-g="${g}"><summary><span class="g-n px">${esc(gName(g).toUpperCase())}</span><span class="g-c px">${rows.length}</span></summary><div class="g-rows">` +
          (d ? `<button type="button" class="prow dist" data-go="${g}" data-s="${esc(norm(d.name + ' ' + d.street))}"><span class="pn px">${esc(d.name.toUpperCase())}</span>` +
            `<span class="pk px">THE DISTRICT${d.street.replace(/^THE /, '') !== d.name.toUpperCase().replace(/^THE /, '') ? ' // ' + esc(d.street) : ''}</span></button>` : '') +
          rows.map(P => { const s = kShort(P); return `<button type="button" class="prow" data-place="${P.id}" data-s="${esc(key(P, g))}"><span class="pn px">${P.name}</span>${s ? `<span class="pk px">${esc(s)}</span>` : ''}</button>`; }).join('') +
          `</div></details>`;
      }).join('') + `</div>`;
    setListHead();
    const find = $('#mapFind', listEl);
    find.addEventListener('input', () => filter(find.value));
    find.addEventListener('keydown', e => {
      if (e.key !== 'Enter') return;
      const b = $$('.prow', listEl).find(x => !x.hidden && !x.closest('.pgrp').hidden);
      if (b) { e.preventDefault(); find.blur(); b.click(); }
    });
    listEl.addEventListener('click', e => {
      const b = e.target.closest('.prow');
      if (!b) return;
      if (b.dataset.place) flyToPlace(b.dataset.place); else flyToDistrict(b.dataset.go);
    });
  }
  function setListHead() {
    const h = $('.mp-head', listEl);
    if (!h) return;
    h.innerHTML = layer === 'surface'
      ? `<p class="mp-k px">NOD // MAP</p><h2>Nodus</h2><div class="mp-intro">${T.intro}</div>` +
        (T.census ? `<details class="mp-sec"><summary class="mp-h px">CENSUS // P-1 // NOW</summary>${T.census}</details>` : '')
      : `<p class="mp-k px">NOD // BELOW</p><h2>Under the city</h2><div class="mp-intro">${T.panIntro}</div>`;
    fixRefs(h);
    initNumerals(h);
  }
  function filter(q) {
    const n = norm(q);
    let hits = 0;
    $$('.pgrp', listEl).forEach(gEl => {
      let any = false;
      $$('.prow', gEl).forEach(b => {
        const ok = !n || b.dataset.s.includes(n);
        b.hidden = !ok;
        if (ok) { any = true; if (!b.classList.contains('dist')) hits++; }
      });
      gEl.hidden = !any;
      const r = rowOf(sel);
      gEl.open = n ? any : !!(r && gEl.contains(r));
    });
    $('#mapFound', listEl).textContent = !n ? '' : hits ? `${hits} FOUND` : 'NOTHING BY THAT NAME';
  }

  // ---- an entry: what a place or a district is, the places near it, and the one before and after it
  const seqOf = id => (id.startsWith('d:') ? GROUPS.filter(g => T.districts[g]).map(g => 'd:' + g)
    : inGroup(groupOf(byId(id.slice(2)))).map(p => 'p:' + p.id));
  const posOf = (id, short) => {
    const seq = seqOf(id), i = seq.indexOf(id), n = `${i + 1} OF ${seq.length}`;
    if (short) return n;
    return id.startsWith('d:') ? `DISTRICT ${n}` : `${gName(groupOf(byId(id.slice(2)))).toUpperCase()} // ${n}`;
  };
  function step(dlt) {
    if (!sel) return;
    const seq = seqOf(sel), i = seq.indexOf(sel);
    if (i < 0) return;
    const nx = seq[(i + dlt + seq.length) % seq.length];
    if (nx.startsWith('d:')) flyToDistrict(nx.slice(2)); else flyToPlace(nx.slice(2));
  }
  function renderEntry(thumb) {
    entryEl.innerHTML = `<div class="enav"><button class="btn" type="button" data-list>&lt; ALL PLACES</button>` +
      `<span class="px en-pos">${esc(posOf(sel))}</span>` +
      `<button class="mz" type="button" data-step="-1" aria-label="The one before">&lt;</button>` +
      `<button class="mz" type="button" data-step="1" aria-label="The one after">&gt;</button></div>` +
      popHtml(sel, thumb) + (sel.startsWith('p:') ? nearHtml(byId(sel.slice(2))) : '');
    fixRefs(entryEl);
    $$('[data-go]', entryEl).forEach(b => b.addEventListener('click', () => flyToDistrict(b.dataset.go)));
    $$('[data-place]', entryEl).forEach(b => b.addEventListener('click', () => flyToPlace(b.dataset.place)));
    $$('[data-back]', entryEl).forEach(b => b.addEventListener('click', () => { select(null); zoomTo(0); }));
    $$('[data-list]', entryEl).forEach(b => b.addEventListener('click', () => select(null)));
    $$('[data-step]', entryEl).forEach(b => b.addEventListener('click', () => step(Number(b.dataset.step))));
    $$('a[href]', entryEl).forEach(a => a.addEventListener('click', () => { if (full) setFull(false, true); }));
    initNumerals(entryEl);
    initPlates(entryEl, true);
    sizeKey(entryEl);
  }
  // the directory stands beside the map, or under it
  const side = () => panel.offsetParent !== null && panel.getBoundingClientRect().left >= frameEl.getBoundingClientRect().right - 2;
  function showEntry() {
    if (!sel) return;
    if (side()) {
      closeSheet(true);
      renderEntry(false);
      if (listEl.parentNode !== panel) panel.insertBefore(listEl, panel.firstChild);
      if (entryEl.parentNode !== panel) panel.appendChild(entryEl);
      listEl.hidden = true;
      entryEl.hidden = false;
      panel.scrollTop = 0;
    } else {
      renderEntry(true);
      openSheet('entry');
    }
    setHash(hashOf(sel));
  }
  function hideEntry(prev) {
    if (sheetKind === 'entry') closeSheet(true);
    if (entryEl.parentNode === panel) entryEl.hidden = true;
    listEl.hidden = false;
    // back in the directory, at the place just left, which stays marked until another is chosen
    const r = rowOf(prev);
    $$('.prow.was', listEl).forEach(b => b.classList.remove('was'));
    if (r) {
      r.classList.add('was');
      const g = r.closest('.pgrp');
      if (g) g.open = true;
      if (side() && listEl.parentNode === panel) {
        const pr = panel.getBoundingClientRect(), rr = r.getBoundingClientRect();
        if (rr.top < pr.top || rr.bottom > pr.bottom) panel.scrollTop += rr.top - pr.top - pr.height / 3;
      }
    }
    setHash('');
  }

  // ---- the sheet over the foot of the map on a phone: an entry, or the directory
  // the sheet takes a step in the phone's history, so its back button closes the sheet before it leaves the map
  let sheetKind = null, sheetBig = false, sheetPx = 0, sheetPushed = false;
  function openSheet(kind) {
    if (!sheetKind && !sheetPushed) {
      // the step back lands on the map with nothing chosen, so an address that named a place opens it only once
      try {
        history.replaceState(history.state, '', location.pathname + location.search);
        history.pushState({ nodusSheet: 1 }, '', location.pathname + location.search + hashOf(sel));
        sheetPushed = true;
      } catch (e) { sheetPushed = false; }
    }
    sheetKind = kind;
    if (kind === 'list') { msBody.replaceChildren(listEl); listEl.hidden = false; }
    else { msBody.replaceChildren(entryEl); entryEl.hidden = false; }
    sheet.hidden = false;
    sheet.classList.toggle('lst', kind === 'list');
    $('#msPrev').hidden = $('#msNext').hidden = $('#msMore').hidden = kind === 'list';
    fitPos();
    $('#mapList').setAttribute('aria-pressed', kind === 'list' ? 'true' : 'false');
    setBig(kind === 'list');
    msBody.scrollTop = 0;
  }
  // the place's number in its group, shortened when a narrow phone has no room for it whole
  function fitPos() {
    const p = $('#msPos');
    if (!sheetKind) return;
    const whole = sheetKind === 'list' ? 'ALL PLACES' : posOf(sel, true);
    p.textContent = whole;
    if (p.scrollWidth > p.clientWidth) p.textContent = whole.replace(' OF ', '/');
    if (p.scrollWidth > p.clientWidth) p.textContent = '';
  }
  function setBig(on) {
    sheetBig = on;
    sheet.classList.toggle('big', on);
    const m = $('#msMore');
    m.textContent = on ? 'LESS' : 'MORE';
    m.setAttribute('aria-expanded', on ? 'true' : 'false');
    sizeSheet();
    if (!on) msBody.scrollTop = 0;
  }
  function sizeSheet() {
    if (!sheetKind) { sheetPx = 0; stage.style.setProperty('--sheet', '0px'); return; }
    fitPos();
    const H = stage.clientHeight;
    sheet.style.height = '';
    const h = sheetBig ? H : Math.min(Math.round(H * 0.46), sheet.scrollHeight);
    sheet.style.height = h + 'px';
    // a sheet over the whole map leaves nothing to keep a place clear of
    sheetPx = sheetBig ? 0 : h;
    stage.style.setProperty('--sheet', sheetPx + 'px');
  }
  function closeSheet(quiet, fromPop) {
    if (!sheetKind) return;
    const was = sheetKind;
    sheetKind = null;
    sheet.hidden = true;
    if (sheetPushed && !fromPop && !(was === 'list' && sel && !quiet)) { sheetPushed = false; history.back(); }
    if (fromPop) sheetPushed = false;
    if (listEl.parentNode === msBody) { panel.insertBefore(listEl, panel.firstChild); listEl.hidden = false; }
    if (entryEl.parentNode === msBody) { panel.appendChild(entryEl); entryEl.hidden = true; }
    sizeSheet();
    $('#mapList').setAttribute('aria-pressed', 'false');
    if (quiet) return;
    if (was === 'entry' && sel) select(null);
    else if (was === 'list' && sel) showEntry();       // back to the place that was open
  }
  window.addEventListener('popstate', e => { if (sheetKind && !(e.state && e.state.nodusSheet)) closeSheet(false, true); });
  $('#msPrev').addEventListener('click', () => step(-1));
  $('#msNext').addEventListener('click', () => step(1));
  $('#msMore').addEventListener('click', () => setBig(!sheetBig));
  $('#msClose').addEventListener('click', () => closeSheet());
  $('#msGrab').addEventListener('click', () => { if (sheetKind === 'entry') setBig(!sheetBig); });
  // a tap on the peek of an entry opens it the whole way
  msBody.addEventListener('click', e => { if (sheetKind === 'entry' && !sheetBig && !e.target.closest('button, a, summary, input')) setBig(true); });
  $('#mapList').addEventListener('click', () => {
    if (sheetKind === 'list') { closeSheet(); return; }
    openSheet('list');
    if (!window.matchMedia('(pointer:coarse)').matches) { const f = $('#mapFind', listEl); if (f) f.focus({ preventScroll: true }); }
  });

  function select(id) {
    const prev = sel;
    sel = id;
    mark();
    markRow();
    if (id) showEntry(); else hideEntry(prev);
    queue();
  }
  // a place chosen on the map stays in the part of the map the sheet leaves open
  function keepInView(P) {
    if (side() || !ladder.length) return;
    if (zi === 0) { flyTo(P.x - 18, P.y - 14, P.x + 18, P.y + 14, 3); return; }
    const W = cv.width / dpr, H = cv.height / dpr;
    const x = (ox + P.x * Pd) / dpr, y = (oy + P.y * Pd) / dpr;
    if (x > 24 && x < W - 24 && y > 32 && y < H - sheetPx - 24) return;
    cx = P.x;
    cy = P.y + (sheetPx / 2) * dpr / Pd;
    queue();
  }
  function flyTo(x0, y0, x1, y1, minP) {
    const room = Math.max(cv.height * 0.35, cv.height - sheetPx * dpr);
    const want = Math.min(cv.width * 0.8 / Math.max(8, x1 - x0), room * 0.8 / Math.max(8, y1 - y0));
    let best = 0;
    ladder.forEach((st, i) => { if (stepPd(st) <= want) best = i; });
    if (minP) while (best < ladder.length - 1 && stepPd(ladder[best]) / dpr < minP) best++;
    zi = best;
    cx = (x0 + x1) / 2;
    cy = (y0 + y1) / 2 + (sheetPx / 2) * dpr / stepPd(ladder[zi]);
    queue();
    if (!full) {
      const r = frameEl.getBoundingClientRect(), top = $('.bar') ? $('.bar').offsetHeight : 0;
      if (r.top < top - 1 || r.bottom > window.innerHeight + 1) {
        frameEl.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: r.height + top <= window.innerHeight ? 'center' : 'start' });
      }
    }
  }
  function flyToDistrict(key) {
    if (layer !== 'surface') setLayer('surface');
    const d = MD.districts[key]; if (!d || !d.poly) return;
    const xs = d.poly.map(p => p[0]), ys = d.poly.map(p => p[1]);
    select('d:' + key);
    flyTo(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys));
  }
  function flyToPlace(id) {
    const P = byId(id); if (!P || P.cat === 'sealed') return;
    if (layer !== P.layer) setLayer(P.layer);
    select('p:' + id);
    flyTo(P.x - 18, P.y - 14, P.x + 18, P.y + 14, Math.max(P.min || 0, 3));
  }

  // ---- the key: every mark on the survey, each shown on a piece of the survey cut from the sheets
  // the pieces of the survey are cells of one sheet, drawn at whole device pixels
  if (T.keySheet) {
    document.documentElement.style.setProperty('--ks', `url("${ROOT}${T.keySheet.src}")`);
    document.documentElement.style.setProperty('--kc', String(T.keySheet.cols));
  }
  const keyItem = it => `<li><span class="sw" aria-hidden="true"${it.sw ? ` style="--sx:${it.sw[0]};--sy:${it.sw[1]}"` : ''}>` +
    `${it.sw ? '<span class="spr"></span>' : ''}${it.mk ? `<span class="km">${it.mk}</span>` : ''}</span>` +
    `<span class="kt"><b>${it.t}</b><span>${it.d || ''}</span></span></li>`;
  function sizeKey(root) {
    // whole device pixels per pixel of the survey, about twice the css size, as the map draws it
    const k = fitK(48, 96, 2), w = 48 * k / DPR(), h = 36 * k / DPR();
    $$('.sw', root).forEach(sw => { sw.style.setProperty('--kw', w + 'px'); sw.style.setProperty('--kh', h + 'px'); });
  }
  function showKey() {
    const K = (layer === 'surface' ? T.key : T.panKey) || [];
    const node = document.createElement('div');
    node.className = 'pop pop-key';
    node.innerHTML = `<div class="pop-head nv"><div class="pop-id"><p class="pop-k px">${layer === 'surface' ? 'NOD // SURFACE' : 'NOD // BELOW'}</p><h2 class="pop-t">The key</h2></div></div>` +
      `<nav class="mk-jump" aria-label="Parts of the key"><h2 class="px mk-h">PARTS</h2>${K.map((g, i) => `<button class="btn" type="button" data-kj="${i}">${g.h}</button>`).join('')}</nav>` +
      `<div class="mapkey">${K.map((g, i) => `<section id="mk${i}"><h3 class="px">${g.h}</h3><ul>${g.items.map(keyItem).join('')}</ul></section>`).join('')}</div>`;
    const wasOpen = Modal.isOpen();
    Modal.show(node, { kicker: 'NOD // MAP // THE KEY', wide: true, key: true, push: wasOpen ? true : undefined });
    sizeKey(node);
    initNumerals(node);
    // the parts of the key follow the list, the part in view lit: a strip under the bar, or on a wide screen a column
    const card = node.closest('.modal-card'), nav = $('.mk-jump', node);
    const btns = $$('[data-kj]', node), secs = $$('.mapkey section', node);
    if (!card || !nav) return;
    const mbar = $('.modal-bar', card);
    let off = 60, lit = -1, held = -1, q = 0, strip = false;
    // listeners on the card and the window let go of themselves once the key is closed
    const on = (t, ev, fn, o) => { const h = e => { if (!node.isConnected) { t.removeEventListener(ev, h, o); return; } fn(e); }; t.addEventListener(ev, h, o); };
    const light = i => {
      if (i === lit) return;
      lit = i;
      btns.forEach((b, n) => { if (n === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
      // keep the lit part in sight within the strip or the column
      const b = btns[i], how = RM ? 'auto' : 'smooth';
      if (!b) return;
      if (nav.scrollWidth > nav.clientWidth + 1) {
        const l = b.offsetLeft, r = l + b.offsetWidth, pad = 16;
        if (l - pad < nav.scrollLeft || r + pad > nav.scrollLeft + nav.clientWidth) {
          nav.scrollTo({ left: Math.max(0, l - (nav.clientWidth - b.offsetWidth) / 2), behavior: how });
        }
      } else if (nav.scrollHeight > nav.clientHeight + 1) {
        const t = b.offsetTop, bt = t + b.offsetHeight, pad = 8;
        if (t - pad < nav.scrollTop || bt + pad > nav.scrollTop + nav.clientHeight) {
          nav.scrollTo({ top: Math.max(0, t - (nav.clientHeight - b.offsetHeight) / 2), behavior: how });
        }
      }
    };
    const spy = () => {
      const edge = card.getBoundingClientRect().top + card.clientTop;
      nav.classList.toggle('stuck', strip && card.scrollTop > 0 && nav.getBoundingClientRect().top <= edge + (mbar ? mbar.offsetHeight : 0) + 0.5);
      if (held >= 0) { light(held); return; }
      // the part in view is the first one the reader has not scrolled past
      const line = edge + off + 1;
      let i = secs.length - 1;
      for (let n = 0; n < secs.length; n++) { if (secs[n].getBoundingClientRect().bottom > line) { i = n; break; } }
      if (card.scrollTop > 0 && card.scrollTop + card.clientHeight >= card.scrollHeight - 2) i = secs.length - 1;
      light(i);
    };
    const fit = () => {
      const top = mbar ? mbar.offsetHeight : 0;
      const cs = getComputedStyle(nav);
      strip = cs.position === 'sticky' && cs.flexDirection !== 'column';
      off = top + (strip ? nav.offsetHeight : 0) + 12;
      node.style.setProperty('--mk-top', top + 'px');
      node.style.setProperty('--mk-off', off + 'px');
      spy();
    };
    on(card, 'scroll', () => { if (!q) q = requestAnimationFrame(() => { q = 0; spy(); }); }, { passive: true });
    // a chosen part stays lit until the reader scrolls on their own
    const letGo = e => { if (held >= 0 && !(e.target.closest && e.target.closest('.mk-jump'))) held = -1; };
    for (const ev of ['wheel', 'touchstart', 'keydown']) on(card, ev, letGo, { passive: true });
    on(window, 'resize', fit);
    // a mouse wheel over the strip moves it sideways
    nav.addEventListener('wheel', e => {
      const max = nav.scrollWidth - nav.clientWidth;
      if (max <= 1 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if ((e.deltaY > 0 && nav.scrollLeft >= max - 1) || (e.deltaY < 0 && nav.scrollLeft <= 0)) return;
      nav.scrollLeft += e.deltaY * (e.deltaMode === 1 ? 16 : 1);
      e.preventDefault();
    }, { passive: false });
    btns.forEach((b, n) => b.addEventListener('click', () => {
      const sec = secs[n];
      if (!sec) return;
      held = n;
      light(n);
      sec.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
    }));
    fit();
  }
  $('#mapKey').addEventListener('click', showKey);

  function setLayer(l) {
    const keepPd = Pd;
    layer = l;
    $('#lySurface').setAttribute('aria-pressed', l === 'surface' ? 'true' : 'false');
    $('#lyPan').setAttribute('aria-pressed', l === 'pan' ? 'true' : 'false');
    $('#mapLabel').textContent = l === 'surface' ? 'NOD // SURFACE' : 'NOD // BELOW';
    gWheel.style.display = l === 'surface' ? '' : 'none';
    gPolys.style.display = l === 'surface' ? '' : 'none';
    gCone.style.display = l === 'surface' && byId('cam07') ? '' : 'none';
    buildLadder();
    let best = 0;
    ladder.forEach((st, i) => { if (Math.abs(stepPd(st) - keepPd) < Math.abs(stepPd(ladder[best]) - keepPd)) best = i; });
    zi = best;
    if (sel) select(null);
    buildOverlays(); mark(); setListHead(); queue();
  }
  $('#lySurface').addEventListener('click', () => setLayer('surface'));
  $('#lyPan').addEventListener('click', () => setLayer('pan'));

  // ---- size: on its own page the survey takes the height of the window below its tools
  function layout() {
    dpr = DPR();
    scaleKey = '';
    stage.style.height = '';
    const w = Math.max(200, Math.floor(stage.clientWidth));
    let h;
    if (full) h = Math.max(200, Math.floor(stage.clientHeight));
    else {
      // the map fills the window under its tools: tall on a phone, wide on a desktop
      const top = stage.getBoundingClientRect().top + window.scrollY;
      const room = window.innerHeight - Math.min(top, 300) - 16;
      h = Math.round(Math.max(Math.min(w * 0.75, 320), Math.min(room, Math.max(w * 1.6, 480))));
    }
    cv.width = fx.width = Math.round(w * dpr);
    cv.height = fx.height = Math.round(h * dpr);
    for (const c of [cv, fx]) { c.style.width = (cv.width / dpr) + 'px'; c.style.height = (cv.height / dpr) + 'px'; }
    stage.style.height = full ? '' : (cv.height / dpr) + 'px';
    measureUi();
    const keep = ladder.length ? stepPd(ladder[zi]) : 0;
    buildLadder();
    if (keep) { let best = 0; ladder.forEach((st, i) => { if (Math.abs(stepPd(st) - keep) < Math.abs(stepPd(ladder[best]) - keep)) best = i; }); zi = best; }
    labelEls.concat(pinEls).forEach(o => { o.w = 0; });
    // the directory beside the map runs the height of the map and its tools
    const mm = $('.map-main', shell);
    if (mm) shell.style.setProperty('--map-h', Math.round(mm.getBoundingClientRect().height) + 'px');
    sizeSheet();
    queue();
  }

  // ---- zoom and pan
  function zoomTo(n, sx, sy) {
    n = Math.max(0, Math.min(ladder.length - 1, n));
    if (n === zi) return;
    if (sx === undefined) { sx = cv.width / 2; sy = cv.height / 2; }
    const wxp = (sx - ox) / Pd, wyp = (sy - oy) / Pd;
    zi = n;
    const nPd = stepPd(ladder[zi]);
    if (zi === 0) { cx = WW / 2; cy = WH / 2; }
    else { cx = (cv.width / 2 - (sx - wxp * nPd)) / nPd; cy = (cv.height / 2 - (sy - wyp * nPd)) / nPd; }
    hideHint();
    queue();
  }
  function devAt(e) { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * dpr, (e.clientY - r.top) * dpr]; }
  $('#mzIn').addEventListener('click', () => zoomTo(zi + 1));
  $('#mzOut').addEventListener('click', () => zoomTo(zi - 1));
  $('#mzFit').addEventListener('click', () => zoomTo(0));

  const ptr = new Map();
  let drag = null, pinch = null, moved = 0, lastTap = { t: 0, x: 0, y: 0 };
  const canDrag = () => zi > 0 || full;
  stage.addEventListener('pointerdown', e => {
    if (e.target.closest('.pin, .mz, .map-ui button')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptr.size === 1) { drag = { x: e.clientX, y: e.clientY, cx, cy }; moved = 0; }
    if (ptr.size === 2) { const [a, b] = [...ptr.values()]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y) }; drag = null; moved = 99; }
    if (canDrag() || ptr.size === 2) { try { stage.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ } }
  });
  stage.addEventListener('pointermove', e => {
    if (!ptr.has(e.pointerId)) { if (e.pointerType === 'mouse') hoverAt(e); return; }
    ptr.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptr.size === 2 && pinch) {
      const [a, b] = [...ptr.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), r = d / pinch.d;
      if (r > 1.3 || r < 0.77) {
        const r0 = cv.getBoundingClientRect();
        zoomTo(zi + (r > 1 ? 1 : -1), ((a.x + b.x) / 2 - r0.left) * dpr, ((a.y + b.y) / 2 - r0.top) * dpr);
        pinch.d = d;
      }
      e.preventDefault();
      return;
    }
    if (drag) {
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      moved = Math.max(moved, Math.hypot(dx, dy));
      if (moved > 5 && canDrag()) {
        cx = drag.cx - dx * dpr / Pd; cy = drag.cy - dy * dpr / Pd;
        stage.classList.add('dragging');
        queue();
      }
    }
  });
  function endPtr(e) {
    if (!ptr.has(e.pointerId)) return;
    ptr.delete(e.pointerId);
    if (ptr.size < 2) pinch = null;
    stage.classList.remove('dragging');
    if (ptr.size === 0) drag = null;
  }
  stage.addEventListener('pointerup', endPtr);
  stage.addEventListener('pointercancel', endPtr);
  stage.addEventListener('lostpointercapture', e => { if (ptr.has(e.pointerId)) endPtr(e); });
  // a tap chooses on the click that follows it. A phone sends that click a moment after the finger lifts,
  // so choosing on the lift let the click land on the backdrop of the popup it had just opened and shut it
  stage.addEventListener('click', e => {
    if (e.target.closest('.pin, .map-ui') || moved > 5) return;
    tap(e);
  });

  function worldAt(e) { const [sx, sy] = devAt(e); return [(sx - ox) / Pd, (sy - oy) / Pd]; }
  function inPoly(x, y, pts) {
    let c = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
    }
    return c;
  }
  function districtAt(x, y) {
    if (layer !== 'surface') return null;
    const order = ['landing', 'scriptorium', 'burn', 'babel', 'chrome', 'salt', 'drowned', 'oldnod', 'zion', 'white'];
    for (const k of order) { const d = MD.districts[k]; if (d && d.poly && inPoly(x, y, d.poly)) return k; }
    return null;
  }
  function tap(e) {
    const now = performance.now();
    const dbl = now - lastTap.t < 320 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 30;
    lastTap = { t: now, x: e.clientX, y: e.clientY };
    if (dbl) { const [sx, sy] = devAt(e); zoomTo(zi + 1, sx, sy); return; }
    // a district's name opens that district, wherever the labels had to move it to keep clear
    const inside = r => e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    const lab = layer === 'surface' ? labelEls.find(o => o.L.key && !o.el.hidden && MD.districts[o.L.key] && inside(o.el.getBoundingClientRect())) : null;
    const named = lab ? lab.L.key : null;
    const [x, y] = worldAt(e);
    const k = named || districtAt(x, y);
    if (k) select('d:' + k);
    else if (sel) select(null);
  }
  let hoverKey = null;
  function hoverAt(e) {
    if (e.target.closest('.pin, .map-ui')) return;
    const [x, y] = worldAt(e);
    const k = districtAt(x, y);
    if (k === hoverKey) return;
    if (hoverKey) hover(hoverKey, false);
    hoverKey = k;
    if (k) hover(k, true);
    stage.style.cursor = k ? 'pointer' : '';
  }
  stage.addEventListener('pointerleave', () => { if (hoverKey) hover(hoverKey, false); hoverKey = null; });

  let wheelAcc = 0, hintT = 0;
  stage.addEventListener('wheel', e => {
    if (!(e.ctrlKey || e.metaKey || full)) { showHint(window.matchMedia('(pointer:coarse)').matches ? 'PINCH TO ZOOM' : 'CTRL + SCROLL TO ZOOM'); return; }
    e.preventDefault();
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) >= (e.ctrlKey ? 18 : 90)) {
      const [sx, sy] = devAt(e);
      zoomTo(zi + (wheelAcc < 0 ? 1 : -1), sx, sy);
      wheelAcc = 0;
    }
  }, { passive: false });
  stage.addEventListener('dblclick', e => e.preventDefault());
  function showHint(t) {
    hintEl.textContent = t; hintEl.hidden = false;
    clearTimeout(hintT); hintT = setTimeout(hideHint, 1400);
  }
  function hideHint() { hintEl.hidden = true; }
  stage.addEventListener('keydown', e => {
    const step = 80 * dpr / Pd;
    const map = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
    if (map[e.key] && canDrag()) { e.preventDefault(); cx += map[e.key][0]; cy += map[e.key][1]; queue(); }
    else if (e.key === '+' || e.key === '=') { e.preventDefault(); zoomTo(zi + 1); }
    else if (e.key === '-' || e.key === '_') { e.preventDefault(); zoomTo(zi - 1); }
    else if (e.key === '0') { e.preventDefault(); zoomTo(0); }
  });

  // ---- full screen: the map takes the whole window, the panel becomes a drawer. It is drawn by the
  // page itself, so it works the same on a phone as on a desktop.
  let fullPushed = false;
  function setFull(on, fromNav) {
    if (on === full) return;
    full = on;
    shell.classList.toggle('full', on);
    document.documentElement.classList.toggle('map-open', on);
    $('#mzFull').setAttribute('aria-pressed', on ? 'true' : 'false');
    $('#mzFull').setAttribute('aria-label', on ? 'Leave full screen' : 'Full screen');
    $('#mzFull').title = on ? 'LEAVE FULL SCREEN' : 'FULL SCREEN';
    if (!on && fullPushed && !fromNav) { fullPushed = false; history.back(); }
    if (!on) fullPushed = false;
    if (sheetKind) closeSheet(true);
    const settle = () => {
      layout();
      if (on && zi === 0 && cv.height > cv.width * 1.05) {
        const want = cv.height / WH * 0.92;
        let best = 0;
        ladder.forEach((st, i) => { if (stepPd(st) <= want) best = i; });
        zi = best; queue();
      }
      if (sel) showEntry();
      if (on) stage.focus({ preventScroll: true });
    };
    // two frames: the first lets the fixed layout take the window, the second measures it
    requestAnimationFrame(() => requestAnimationFrame(settle));
  }
  $('#mzFull').addEventListener('click', () => {
    if (!full) {
      try { history.pushState({ nodusMap: 1 }, '', location.href); fullPushed = true; } catch (e) { fullPushed = false; }
      setFull(true);
    } else setFull(false);
  });
  window.addEventListener('popstate', e => {
    if (full && !(e.state && e.state.nodusMap)) { fullPushed = false; setFull(false, true); }
  });
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || Modal.isOpen()) return;
    if (sheetKind === 'list') { closeSheet(); return; }
    if (sel) { select(null); return; }
    if (full) setFull(false);
  });
  // the phone's own bars come and go as it scrolls; follow the real height of the window
  if (window.visualViewport) window.visualViewport.addEventListener('resize', () => { if (full) { clearTimeout(vvT); vvT = setTimeout(layout, 80); } });
  let vvT = 0;

  // ---- go
  new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(stage);
  layout();
  buildOverlays(); mark(); buildList();
  onResize(() => { layout(); if (sel) showEntry(); });
  if (!RM) {
    let last = 0;
    const tick = now => {
      requestAnimationFrame(tick);
      if (!vis || document.hidden || layer !== 'surface' || now - last < 83) return;
      last = now;
      for (const g of glints) { g.t += g.v * 0.25; if (g.t > 1) g.t -= 1; }
      drawFx();
    };
    requestAnimationFrame(tick);
  }
  const warm = () => { const L = LV(); if (L[1]) L[1].tiles.flat().forEach(u => tile(u)); };
  if ('requestIdleCallback' in window) requestIdleCallback(warm, { timeout: 4000 }); else setTimeout(warm, 2500);
  // an address: #cam07 opens a place, #d-babel a district, #below the layer under the streets
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (!h) return;
    arriving = true;
    if (h === 'below') setLayer('pan');
    else if (h.startsWith('d-') && MD.districts[h.slice(2)]) flyToDistrict(h.slice(2));
    else if (byId(h) && byId(h).cat !== 'sealed') flyToPlace(h);
    arriving = false;
  }
  fromHash();
  window.addEventListener('hashchange', fromHash);
  // the first view fills the frame: a wide map crops a little of the city's edge rather than floating small in
  // its frame, and a tall one opens on the middle of the city with the city's height filling it
  if (!sel && ladder.length > 1) {
    const tall = cv.height > cv.width * 1.15;
    const want = tall ? cv.height / WH : Math.min(cv.width / WW, cv.height / WH);
    let best = 0;
    ladder.forEach((st, i) => { if (Math.abs(Math.log(stepPd(st) / want)) < Math.abs(Math.log(stepPd(ladder[best]) / want))) best = i; });
    if (!tall && stepPd(ladder[best]) > want * 1.16) best = 0;
    zi = best; cx = WW / 2; cy = WH / 2; queue();
  }
  if (window.matchMedia('(pointer:coarse)').matches && !sel) {
    showHint('TAP A PLACE\nPINCH TO ZOOM');
    clearTimeout(hintT); hintT = setTimeout(hideHint, 3200);
  }
}

/* strips that scroll sideways on a phone open on the part the reader is in, and keep the part in view lit */
function initStrips() {
  const cur = $('.subnav [aria-current]');
  if (cur) { const nav = cur.parentElement; if (nav.scrollWidth > nav.clientWidth) nav.scrollLeft = cur.offsetLeft - (nav.clientWidth - cur.offsetWidth) / 2; }
  const jump = $('.loc-jump');
  if (!jump) return;
  const links = $$('a[href^="#g-"]', jump), secs = links.map(a => document.getElementById(a.getAttribute('href').slice(1)));
  let lit = null, q = 0;
  const spy = () => {
    q = 0;
    const line = (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar')) || 52) + jump.offsetHeight + 24;
    let i = -1;
    secs.forEach((sec, n) => { if (sec && sec.getBoundingClientRect().top <= line) i = n; });
    const a = links[i] || null;
    if (a === lit) return;
    if (lit) lit.removeAttribute('aria-current');
    lit = a;
    if (!a) return;
    a.setAttribute('aria-current', 'true');
    if (jump.scrollWidth > jump.clientWidth) {
      const l = a.offsetLeft, r = l + a.offsetWidth;
      if (l < jump.scrollLeft + 16 || r > jump.scrollLeft + jump.clientWidth - 16) jump.scrollTo({ left: Math.max(0, l - (jump.clientWidth - a.offsetWidth) / 2), behavior: RM ? 'auto' : 'smooth' });
    }
  };
  window.addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(spy); }, { passive: true });
  spy();
}

/* ------------------------------------------------------------------ start */
function start() {
  initNumerals();
  initPlates();
  initRefs();
  initEntries();
  initStrips();
  if (PAGE === 'home') { initHero(); initCovers(); }
  if (PAGE === 'files') { initCovers(); initStatic(); }
  if (PAGE === 'file') { initCovers(); initNotes(); }
  if (PAGE === 'map') initMap();
  if (PAGE === 'chapter') initTocButton();
}
if (document.fonts && document.fonts.load) {
  Promise.race([document.fonts.load('16px "Nodus Five"'), new Promise(r => setTimeout(r, 1500))]).then(start, start);
} else start();
})();
