/* NODUS // recovered files from Nodus */
const ASSETS = {"hero":"assets/hero.png","frames":{"0001":{"56":"assets/f/0001-056.png","68":"assets/f/0001-068.png","83":"assets/f/0001-083.png","92":"assets/f/0001-092.png","100":"assets/f/0001-100.png","116":"assets/f/0001-116.png","128":"assets/f/0001-128.png","140":"assets/f/0001-140.png","148":"assets/f/0001-148.png","156":"assets/f/0001-156.png","188":"assets/f/0001-188.png","196":"assets/f/0001-196.png","228":"assets/f/0001-228.png","244":"assets/f/0001-244.png","258":"assets/f/0001-258.png","265":"assets/f/0001-265.png","272":"assets/f/0001-272.png","279":"assets/f/0001-279.png","286":"assets/f/0001-286.png","293":"assets/f/0001-293.png","300":"assets/f/0001-300.png","307":"assets/f/0001-307.png","318":"assets/f/0001-318.png","335":"assets/f/0001-335.png","391":"assets/f/0001-391.png"},"0002":{"56":"assets/f/0002-056.png","80":"assets/f/0002-080.png","104":"assets/f/0002-104.png","128":"assets/f/0002-128.png","152":"assets/f/0002-152.png","188":"assets/f/0002-188.png","236":"assets/f/0002-236.png","260":"assets/f/0002-260.png","284":"assets/f/0002-284.png","302":"assets/f/0002-302.png","308":"assets/f/0002-308.png","326":"assets/f/0002-326.png","334":"assets/f/0002-334.png","350":"assets/f/0002-350.png","374":"assets/f/0002-374.png","398":"assets/f/0002-398.png","422":"assets/f/0002-422.png","494":"assets/f/0002-494.png"}},"sigils":{"g32009f":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA1ElEQVR42p2Rv2rCUBSHv9yIihQSn8A9tlBnh06+Q8dO4uM4O2VwkDxFp+4dCtIHcHKI0IJCzHVIzPmJuni2j/PnfuceeDRasUBUAOC0oAaXGvw/dyWzcTqtpwNeJTPwBh2fG3hv70R8W+LtLxaDWHS8um2XAms3ByAE8D+T4Wcz4JdE3KakIvqh1geAVg3FzlaoTKuyMZaILtYpzDqkK27nhhAIRi9f+6YnyWTTNQv5/naW2aPljJWJlu9Oz5gAQQVPPg+asig/3l6hLq+hf336+3ECe4Avpot1ezMAAAAASUVORK5CYII=","gfcbd54":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAyUlEQVR42r2QMRLCIBBF3yKUzlAYD+El3CPgjJ5SizT2eAkvYQp6GbFISEhhK9U+/u5n+fC/E2phaiFhBKeAbZWQJvDQ1ZnodDFQvGisMwO8NcIGeO23h495jkoqkOZHfSQuGyjkCgKnqmRberu05ffoAHABFyZFCuAmOFdHAwLgbx4M2PKAUiwYCAOgiGJwJSZF6D0Wcriz47QRhMsc2dU0+anhygA96TYHKGFedPVTrF1nvcCjveq6tu3YQOKXwQrySsm/2soIX2LTMfv657J0AAAAAElFTkSuQmCC","g455f42":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAA1klEQVR42r3QsWnEQBQE0MdHmEWRKzAKxdXgOhyrjIvMupMLjDlUxOEqHDlYXIGjQ9HawWl1V4DxBAvD7Pz/Z/gTzDOI9ckbGRk34mO6v1rEqSlB/c7tW+Vl8yx8NpJg2qataORnI4WlqcnuGAUdlvnmtv52wCu8r/x0pD9kOsbHO8R4yfXWDCF8HVBkQc2JoWZCWpeXQYca5KeeMJSLsqTLoTlHvVY2JGqLkIbl2kGUYo2g2j9fPflhPaeg9KRFMNrtHR3oLDE7i1kRaqswCyamM2f/hl+R/TyjYm4VZwAAAABJRU5ErkJggg==","gfc2f79":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAfUlEQVR42mNgYGBgYDBgYGBgYGBgYsAAPKgyBsgyHxBsZmaEBPNhfiQD/vMgcfg//EeSgbBZGBgYGP4fvoewh9EBi3OwcDg4kISgHEJ6GHD6lGsF6aZJ/CLbUiwcFBcoMFFoWsK/Biq6DRuHkYGBNYCBgYGB4fcGbCGKDQAAkboRI4bWjXwAAAAASUVORK5CYII=","gf4261c":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAmElEQVR42s2QMQrCQBBF3yRTWkxAPIeQXqbwAPESXkO8hUew9AAWiycwjR7BMoKlCWujC4nYCfrbz3+8GfjfCLqApvYo950gBlGAeAV1UAWcXqPk87QBAcxADEEdCA5teG6yDZfVizaBdYXS1QWxLbCAkpfAYcZtGpRuDzZacj4O3LJtkj59y6136RikeqOVaTOkffzbr/MAMYNIvJHe2PgAAAAASUVORK5CYII=","g209cc0":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAABF0lEQVR42o2RsW3DQAxFX3wqCbDIIgdIpYHzABkuA2QMD0BALQO5zRYXmKUMppBiFwmQsDv+Iz/4H/xR8rP1BJiExOk3BQ+Jl/ipGBIv5/vUWLC6ezj1WNz2v5rZAQ6YzxXEZZPKCrkNCdqXtXR3ANqcOa4AuKVm9jw6QF2bsbbNZu6retPd1K4tdakw4CE3sHiVAHSZu87XXjkAyCXqB2/bA6lEmRjwAvAx3jwGJjXiEjAxCMZnlQJwiJhCtMvlGcDdaqYudbt1PipN97Ot2dibOICkZl5bhQGx0xnebxcPoGpn1b7HNqeQZhuj0izXeVvmaGaXPdJqRyl71viCuTywljs5DwkJvqnWB1MJD5l+pY0BJ/5bX++mi7gS5qUZAAAAAElFTkSuQmCC","gca975a":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUNAiHyLHA40NrW9vz+2LmTAAAAmElEQVR42qXRQQrCMBCF4S+m+3oUQcGNoEfvBYQepUKXLeOipiotIvoWIZOXP3nMAHUHNl70S/Gz6oiu7HNH3RQDinUqy+cEM7NB31G3a/8Q8Xwg0yzi/N2QZdHTricoqsDl5SRHNJAe7Rm3xTlHDDPTH96QCarggPGJTFC1hkQ0JPIOXEnzNG4Xif10e2wlhjlzJR+/GPQdbdw6WOpto4oAAAAASUVORK5CYII="},"portraits":{"p2d946d":"assets/p/p2d946d.png","pd5b77f":"assets/p/pd5b77f.png","p1ad3b6":"assets/p/p1ad3b6.png","pa93aa8":"assets/p/pa93aa8.png","pccd099":"assets/p/pccd099.png"},"glyphs":{" ":".....|.....|.....|.....|.....|.....|.....","/":".....|....#|...#.|..#..|.#...|#....|.....","?":".###.|#...#|....#|...#.|..#..|.....|..#..","A":".###.|#...#|#...#|#####|#...#|#...#|#...#","C":".###.|#...#|#....|#....|#....|#...#|.###.","D":"####.|#...#|#...#|#...#|#...#|#...#|####.","E":"#####|#....|#....|####.|#....|#....|#####","L":"#....|#....|#....|#....|#....|#....|#####","M":"#...#|##.##|#.#.#|#.#.#|#...#|#...#|#...#","N":"#...#|#...#|##..#|#.#.#|#..##|#...#|#...#","O":".###.|#...#|#...#|#...#|#...#|#...#|.###.","R":"####.|#...#|#...#|####.|#.#..|#..#.|#...#","S":".####|#....|#....|.###.|....#|....#|####.","U":"#...#|#...#|#...#|#...#|#...#|#...#|.###.","V":"#...#|#...#|#...#|#...#|#...#|.#.#.|..#..","Y":"#...#|#...#|.#.#.|..#..|..#..|..#..|..#.."},"map":{"surface":[{"s":1.5,"w":480,"h":360,"tw":480,"th":360,"tiles":[["assets/map/s0-00.8d4eab0e.png"]]},{"s":4.5,"w":1440,"h":1080,"tw":480,"th":360,"tiles":[["assets/map/s1-00.46a7e6a1.png","assets/map/s1-01.d6a7218d.png","assets/map/s1-02.8af9240c.png"],["assets/map/s1-10.b48cf114.png","assets/map/s1-11.4d427ffd.png","assets/map/s1-12.89c2a6d8.png"],["assets/map/s1-20.29d12780.png","assets/map/s1-21.290f25cb.png","assets/map/s1-22.5a7a0dfc.png"]]},{"s":9.0,"w":2880,"h":2160,"tw":480,"th":360,"tiles":[["assets/map/s2-00.895d24d0.png","assets/map/s2-01.5ace1473.png","assets/map/s2-02.f7c824a1.png","assets/map/s2-03.f9be4073.png","assets/map/s2-04.ed2041a3.png","assets/map/s2-05.48930475.png"],["assets/map/s2-10.29b8cdeb.png","assets/map/s2-11.421b5e20.png","assets/map/s2-12.5797d1d2.png","assets/map/s2-13.5d20ad12.png","assets/map/s2-14.20496018.png","assets/map/s2-15.840c971a.png"],["assets/map/s2-20.6fe89d2e.png","assets/map/s2-21.f86dd618.png","assets/map/s2-22.26b9780a.png","assets/map/s2-23.351ae385.png","assets/map/s2-24.bcccd1d6.png","assets/map/s2-25.4578b013.png"],["assets/map/s2-30.e2a58c96.png","assets/map/s2-31.d546f05a.png","assets/map/s2-32.b48243d2.png","assets/map/s2-33.3472caec.png","assets/map/s2-34.7a60181a.png","assets/map/s2-35.ce45dc3c.png"],["assets/map/s2-40.3e48f05f.png","assets/map/s2-41.a0120648.png","assets/map/s2-42.25fccf46.png","assets/map/s2-43.08206ec1.png","assets/map/s2-44.e757fe92.png","assets/map/s2-45.b2e4d227.png"],["assets/map/s2-50.386ff375.png","assets/map/s2-51.6b7d1396.png","assets/map/s2-52.6e4bb121.png","assets/map/s2-53.291f26b6.png","assets/map/s2-54.154cbf2f.png","assets/map/s2-55.6e380857.png"]]}],"pan":[{"s":1.5,"w":480,"h":360,"tw":480,"th":360,"tiles":[["assets/map/p0-00.a884a801.png"]]},{"s":4.5,"w":1440,"h":1080,"tw":480,"th":360,"tiles":[["assets/map/p1-00.2ee1d275.png","assets/map/p1-01.999b28df.png","assets/map/p1-02.e1e5ad43.png"],["assets/map/p1-10.fdafa4ef.png","assets/map/p1-11.e2c1cd12.png","assets/map/p1-12.551d018e.png"],["assets/map/p1-20.9a4e576b.png","assets/map/p1-21.8c3a9922.png","assets/map/p1-22.a8e812c1.png"]]}],"surfaceFit":[{"s":1.75,"w":560,"h":420,"tw":560,"th":420,"tiles":[["assets/map/sf0-00.ba07ce6b.png"]]},{"s":2.0,"w":640,"h":480,"tw":640,"th":480,"tiles":[["assets/map/sf1-00.3a8387b9.png"]]}],"panFit":[{"s":1.75,"w":560,"h":420,"tw":560,"th":420,"tiles":[["assets/map/pf0-00.8fbd2c1c.png"]]},{"s":2.0,"w":640,"h":480,"tw":640,"th":480,"tiles":[["assets/map/pf1-00.831db9c1.png"]]}]},"mapData":{"size":[320,240],"km":0.1125,"cam":[130,138],"districts":{"oldnod":{"poly":[[147.0,134.0],[138.0,121.0],[124.0,113.0],[102.0,112.0],[78.0,114.0],[46.0,124.0],[34.0,146.0],[32.8,154.1],[40.2,158.3],[60.2,167.0],[94.2,178.3],[126.2,191.8],[126.0,203.0],[130.0,205.0],[134.0,196.0],[140.0,171.0],[145.0,158.0],[150.8,147.3]]},"zion":{"poly":[[20,44],[56,34],[96,30],[126,34],[134,58],[134,84],[130,104],[124,113],[102,112],[78,114],[46,124],[30,110],[18,80]]},"chrome":{"poly":[[134,58],[146,54],[158,54],[162,64],[163,98],[160,116],[152,131],[147,134],[138,121],[130,104],[134,84]]},"babel":{"poly":[[162,64],[170,46],[186,48],[206,56],[214,74],[212,98],[202,110],[182,112],[163,100]]},"burn":{"poly":[[160,116],[163,100],[182,112],[202,110],[206,120],[200,128],[193,128],[181,127],[169,131],[159,138],[152,131]]},"salt":{"poly":[[202,110],[212,98],[230,94],[256,96],[268,106],[266,124],[258,134],[250,132],[230,131],[211,139],[203,132],[200,128],[206,120]]},"white":{"poly":[[170,46],[178,28],[172,12],[200,6],[240,4],[282,8],[304,30],[306,60],[296,84],[268,106],[256,96],[230,94],[212,98],[214,74],[206,56],[186,48]]},"scriptorium":{"poly":[[126,34],[132,16],[152,10],[172,12],[178,28],[170,46],[158,54],[146,54],[134,58]]},"drowned":{"poly":[[211,139],[230,131],[250,132],[263,142],[269,158],[270,176],[266,193],[257,205],[246,211],[228,209],[223,196],[223,180],[221,165],[217,150]]},"landing":{"poly":[[0.0,139.4],[2.0,139.4],[4.0,139.4],[6.0,139.4],[8.0,140.1],[10.0,141.4],[12.0,142.7],[14.0,144.1],[16.0,144.7],[18.0,146.1],[20.0,147.4],[22.0,148.7],[24.0,150.1],[26.0,150.7],[28.0,152.1],[30.0,153.4],[32.0,154.1],[34.0,155.4],[36.0,156.7],[38.0,157.4],[40.0,158.7],[42.0,159.4],[44.0,160.1],[46.0,161.4],[48.0,162.1],[50.0,162.7],[52.0,164.1],[54.0,164.7],[56.0,165.4],[58.0,166.1],[60.0,167.4],[62.0,168.1],[64.0,168.7],[66.0,169.4],[68.0,170.1],[70.0,170.7],[72.0,171.4],[74.0,172.1],[76.0,172.7],[78.0,173.4],[80.0,174.1],[82.0,174.7],[84.0,175.4],[86.0,176.1],[88.0,176.7],[90.0,177.4],[92.0,178.1],[94.0,178.7],[96.0,180.1],[98.0,180.7],[100.0,181.4],[102.0,182.1],[104.0,182.7],[106.0,183.4],[108.0,184.1],[110.0,185.4],[112.0,186.1],[114.0,186.7],[116.0,187.4],[118.0,188.7],[120.0,189.4],[122.0,190.1],[124.0,191.4],[126.0,192.1],[126.0,202.6],[124.0,201.9],[122.0,200.6],[120.0,199.9],[118.0,198.6],[116.0,197.9],[114.0,197.3],[112.0,195.9],[110.0,195.3],[108.0,194.6],[106.0,193.9],[104.0,192.6],[102.0,191.9],[100.0,191.3],[98.0,190.6],[96.0,189.9],[94.0,189.3],[92.0,188.6],[90.0,187.3],[88.0,186.6],[86.0,185.9],[84.0,185.3],[82.0,184.6],[80.0,183.9],[78.0,183.3],[76.0,182.6],[74.0,181.9],[72.0,181.3],[70.0,180.6],[68.0,179.9],[66.0,179.3],[64.0,178.6],[62.0,177.9],[60.0,177.3],[58.0,176.6],[56.0,175.9],[54.0,174.6],[52.0,173.9],[50.0,173.3],[48.0,172.6],[46.0,171.3],[44.0,170.6],[42.0,169.9],[40.0,168.6],[38.0,167.9],[36.0,167.3],[34.0,165.9],[32.0,165.3],[30.0,163.9],[28.0,162.6],[26.0,161.9],[24.0,160.6],[22.0,159.3],[20.0,158.6],[18.0,157.3],[16.0,155.9],[14.0,154.6],[12.0,153.3],[10.0,152.6],[8.0,151.3],[6.0,149.9],[4.0,148.6],[2.0,147.3],[0.0,145.9]]}},"cables":[[[30.0,163.5],[29.15,164.19],[28.29,164.88],[27.44,165.57],[26.58,166.27],[25.72,166.96],[24.85,167.65],[23.98,168.34],[23.11,169.03],[22.22,169.72],[21.33,170.42],[20.43,171.11],[19.53,171.8],[18.61,172.49],[17.68,173.18],[16.74,173.88],[15.79,174.57],[14.83,175.26],[13.85,175.95],[12.87,176.64],[11.86,177.33],[10.85,178.03],[9.81,178.72],[8.77,179.41],[7.71,180.1],[6.63,180.79],[5.54,181.48],[4.43,182.18],[3.3,182.87],[2.16,183.56],[1.0,184.25],[-0.17,184.94],[-1.37,185.63],[-2.57,186.32],[-3.8,187.02],[-5.04,187.71],[-6.29,188.4],[-7.57,189.09],[-8.85,189.78],[-10.15,190.47],[-11.47,191.17],[-12.8,191.86],[-14.15,192.55],[-15.5,193.24],[-16.87,193.93],[-18.26,194.62],[-19.65,195.32],[-21.06,196.01],[-22.47,196.7],[-23.9,197.39],[-25.33,198.08],[-26.78,198.78],[-28.23,199.47],[-29.68,200.16],[-31.15,200.85],[-32.61,201.54],[-34.09,202.23],[-35.56,202.93],[-37.04,203.62],[-38.52,204.31],[-40.0,205.0]],[[38.6,167.5],[37.6,168.57],[36.61,169.65],[35.61,170.72],[34.61,171.8],[33.6,172.88],[32.59,173.95],[31.58,175.03],[30.56,176.1],[29.53,177.18],[28.5,178.25],[27.46,179.32],[26.41,180.4],[25.35,181.47],[24.27,182.55],[23.19,183.62],[22.1,184.7],[20.99,185.78],[19.87,186.85],[18.74,187.93],[17.6,189.0],[16.44,190.07],[15.26,191.15],[14.07,192.22],[12.87,193.3],[11.65,194.38],[10.41,195.45],[9.16,196.53],[7.89,197.6],[6.6,198.68],[5.3,199.75],[3.98,200.82],[2.65,201.9],[1.3,202.97],[-0.07,204.05],[-1.45,205.12],[-2.85,206.2],[-4.27,207.28],[-5.7,208.35],[-7.14,209.43],[-8.6,210.5],[-10.08,211.57],[-11.57,212.65],[-13.07,213.72],[-14.58,214.8],[-16.11,215.88],[-17.65,216.95],[-19.19,218.03],[-20.75,219.1],[-22.32,220.18],[-23.9,221.25],[-25.49,222.32],[-27.08,223.4],[-28.68,224.47],[-30.29,225.55],[-31.9,226.62],[-33.51,227.7],[-35.13,228.78],[-36.75,229.85],[-38.38,230.93],[-40.0,232.0]],[[47.2,171.5],[46.23,173.01],[45.25,174.52],[44.28,176.03],[43.3,177.53],[42.32,179.04],[41.33,180.55],[40.34,182.06],[39.35,183.57],[38.34,185.07],[37.33,186.58],[36.31,188.09],[35.29,189.6],[34.25,191.11],[33.2,192.62],[32.14,194.12],[31.07,195.63],[29.99,197.14],[28.89,198.65],[27.79,200.16],[26.66,201.67],[25.53,203.18],[24.37,204.68],[23.21,206.19],[22.03,207.7],[20.83,209.21],[19.62,210.72],[18.39,212.22],[17.14,213.73],[15.88,215.24],[14.6,216.75],[13.31,218.26],[11.99,219.77],[10.67,221.28],[9.32,222.78],[7.96,224.29],[6.59,225.8],[5.19,227.31],[3.79,228.82],[2.37,230.32],[0.93,231.83],[-0.52,233.34],[-1.99,234.85],[-3.46,236.36],[-4.95,237.87],[-6.46,239.38],[-7.97,240.88],[-9.5,242.39],[-11.03,243.9],[-12.58,245.41],[-14.13,246.92],[-15.7,248.43],[-17.27,249.93],[-18.84,251.44],[-20.43,252.95],[-22.01,254.46],[-23.61,255.97],[-25.2,257.48],[-26.8,258.98],[-28.4,260.49],[-30.0,262.0]],[[55.8,175.0],[55.02,176.45],[54.23,177.9],[53.45,179.35],[52.66,180.8],[51.87,182.25],[51.07,183.7],[50.27,185.15],[49.47,186.6],[48.65,188.05],[47.83,189.5],[47.0,190.95],[46.17,192.4],[45.32,193.85],[44.46,195.3],[43.59,196.75],[42.71,198.2],[41.82,199.65],[40.91,201.1],[40.0,202.55],[39.06,204.0],[38.12,205.45],[37.15,206.9],[36.18,208.35],[35.19,209.8],[34.18,211.25],[33.16,212.7],[32.12,214.15],[31.06,215.6],[29.99,217.05],[28.9,218.5],[27.8,219.95],[26.67,221.4],[25.54,222.85],[24.38,224.3],[23.21,225.75],[22.03,227.2],[20.82,228.65],[19.61,230.1],[18.38,231.55],[17.13,233.0],[15.87,234.45],[14.59,235.9],[13.31,237.35],[12.01,238.8],[10.69,240.25],[9.37,241.7],[8.03,243.15],[6.69,244.6],[5.33,246.05],[3.97,247.5],[2.59,248.95],[1.21,250.4],[-0.17,251.85],[-1.57,253.3],[-2.96,254.75],[-4.37,256.2],[-5.77,257.65],[-7.18,259.1],[-8.59,260.55],[-10.0,262.0]],[[64.4,178.25],[63.97,179.78],[63.55,181.31],[63.12,182.84],[62.69,184.37],[62.25,185.9],[61.81,187.43],[61.37,188.95],[60.92,190.48],[60.46,192.01],[60.0,193.54],[59.53,195.07],[59.05,196.6],[58.56,198.13],[58.05,199.66],[57.54,201.19],[57.02,202.72],[56.48,204.25],[55.93,205.78],[55.37,207.3],[54.8,208.83],[54.21,210.36],[53.6,211.89],[52.98,213.42],[52.35,214.95],[51.7,216.48],[51.03,218.01],[50.35,219.54],[49.65,221.07],[48.93,222.6],[48.2,224.12],[47.45,225.65],[46.69,227.18],[45.91,228.71],[45.11,230.24],[44.3,231.77],[43.47,233.3],[42.62,234.83],[41.76,236.36],[40.89,237.89],[40.0,239.42],[39.09,240.95],[38.17,242.47],[37.24,244.0],[36.3,245.53],[35.34,247.06],[34.37,248.59],[33.4,250.12],[32.41,251.65],[31.41,253.18],[30.4,254.71],[29.38,256.24],[28.36,257.77],[27.33,259.3],[26.29,260.82],[25.25,262.35],[24.21,263.88],[23.16,265.41],[22.11,266.94],[21.05,268.47],[20.0,270.0]],[[73.0,181.5],[72.35,183.01],[71.71,184.52],[71.07,186.03],[70.43,187.53],[69.79,189.04],[69.15,190.55],[68.52,192.06],[67.9,193.57],[67.28,195.07],[66.67,196.58],[66.06,198.09],[65.46,199.6],[64.87,201.11],[64.29,202.62],[63.71,204.12],[63.15,205.63],[62.6,207.14],[62.05,208.65],[61.52,210.16],[61.0,211.67],[60.49,213.18],[60.0,214.68],[59.52,216.19],[59.04,217.7],[58.59,219.21],[58.14,220.72],[57.71,222.22],[57.29,223.73],[56.89,225.24],[56.5,226.75],[56.12,228.26],[55.76,229.77],[55.41,231.28],[55.08,232.78],[54.75,234.29],[54.44,235.8],[54.15,237.31],[53.87,238.82],[53.59,240.32],[53.34,241.83],[53.09,243.34],[52.85,244.85],[52.63,246.36],[52.42,247.87],[52.21,249.38],[52.02,250.88],[51.84,252.39],[51.66,253.9],[51.49,255.41],[51.33,256.92],[51.18,258.43],[51.03,259.93],[50.89,261.44],[50.75,262.95],[50.62,264.46],[50.49,265.97],[50.37,267.48],[50.24,268.98],[50.12,270.49],[50.0,272.0]],[[81.6,184.25],[81.31,185.71],[81.02,187.18],[80.74,188.64],[80.45,190.1],[80.17,191.56],[79.89,193.03],[79.62,194.49],[79.35,195.95],[79.09,197.41],[78.83,198.88],[78.58,200.34],[78.34,201.8],[78.11,203.26],[77.88,204.72],[77.66,206.19],[77.46,207.65],[77.26,209.11],[77.07,210.57],[76.9,212.04],[76.74,213.5],[76.58,214.96],[76.45,216.43],[76.32,217.89],[76.2,219.35],[76.1,220.81],[76.02,222.28],[75.94,223.74],[75.88,225.2],[75.83,226.66],[75.8,228.12],[75.78,229.59],[75.77,231.05],[75.78,232.51],[75.8,233.97],[75.84,235.44],[75.88,236.9],[75.95,238.36],[76.02,239.82],[76.1,241.29],[76.2,242.75],[76.31,244.21],[76.43,245.68],[76.57,247.14],[76.71,248.6],[76.86,250.06],[77.03,251.53],[77.2,252.99],[77.38,254.45],[77.57,255.91],[77.77,257.38],[77.97,258.84],[78.18,260.3],[78.39,261.76],[78.61,263.23],[78.84,264.69],[79.07,266.15],[79.3,267.61],[79.53,269.07],[79.76,270.54],[80.0,272.0]],[[90.2,187.0],[90.27,188.42],[90.34,189.83],[90.41,191.25],[90.48,192.67],[90.56,194.08],[90.63,195.5],[90.72,196.92],[90.81,198.33],[90.9,199.75],[91.0,201.17],[91.11,202.58],[91.22,204.0],[91.34,205.42],[91.47,206.83],[91.61,208.25],[91.76,209.67],[91.92,211.08],[92.09,212.5],[92.28,213.92],[92.47,215.33],[92.67,216.75],[92.89,218.17],[93.12,219.58],[93.36,221.0],[93.62,222.42],[93.89,223.83],[94.17,225.25],[94.47,226.67],[94.78,228.08],[95.1,229.5],[95.44,230.92],[95.79,232.33],[96.15,233.75],[96.53,235.17],[96.92,236.58],[97.32,238.0],[97.74,239.42],[98.17,240.83],[98.61,242.25],[99.07,243.67],[99.54,245.08],[100.01,246.5],[100.5,247.92],[101.0,249.33],[101.51,250.75],[102.03,252.17],[102.56,253.58],[103.1,255.0],[103.65,256.42],[104.2,257.83],[104.76,259.25],[105.33,260.67],[105.9,262.08],[106.47,263.5],[107.06,264.92],[107.64,266.33],[108.23,267.75],[108.82,269.17],[109.41,270.58],[110.0,272.0]],[[98.8,190.25],[99.22,191.61],[99.65,192.97],[100.08,194.34],[100.51,195.7],[100.94,197.06],[101.37,198.43],[101.81,199.79],[102.26,201.15],[102.71,202.51],[103.17,203.88],[103.63,205.24],[104.1,206.6],[104.58,207.96],[105.07,209.32],[105.56,210.69],[106.07,212.05],[106.59,213.41],[107.11,214.78],[107.65,216.14],[108.2,217.5],[108.76,218.86],[109.34,220.22],[109.93,221.59],[110.52,222.95],[111.14,224.31],[111.76,225.68],[112.4,227.04],[113.05,228.4],[113.72,229.76],[114.4,231.12],[115.09,232.49],[115.8,233.85],[116.52,235.21],[117.26,236.57],[118.0,237.94],[118.76,239.3],[119.54,240.66],[120.33,242.03],[121.12,243.39],[121.94,244.75],[122.76,246.11],[123.59,247.47],[124.44,248.84],[125.3,250.2],[126.16,251.56],[127.04,252.93],[127.93,254.29],[128.82,255.65],[129.72,257.01],[130.63,258.38],[131.55,259.74],[132.47,261.1],[133.4,262.46],[134.33,263.82],[135.27,265.19],[136.21,266.55],[137.16,267.91],[138.1,269.27],[139.05,270.64],[140.0,272.0]],[[107.4,193.5],[108.18,194.74],[108.96,195.98],[109.75,197.22],[110.53,198.47],[111.32,199.71],[112.11,200.95],[112.91,202.19],[113.71,203.43],[114.52,204.68],[115.33,205.92],[116.15,207.16],[116.98,208.4],[117.82,209.64],[118.66,210.88],[119.51,212.12],[120.38,213.37],[121.25,214.61],[122.13,215.85],[123.03,217.09],[123.94,218.33],[124.85,219.57],[125.79,220.82],[126.73,222.06],[127.68,223.3],[128.65,224.54],[129.64,225.78],[130.63,227.03],[131.64,228.27],[132.66,229.51],[133.7,230.75],[134.75,231.99],[135.81,233.23],[136.89,234.47],[137.98,235.72],[139.09,236.96],[140.2,238.2],[141.34,239.44],[142.48,240.68],[143.63,241.93],[144.8,243.17],[145.98,244.41],[147.17,245.65],[148.38,246.89],[149.59,248.13],[150.81,249.38],[152.05,250.62],[153.29,251.86],[154.54,253.1],[155.8,254.34],[157.07,255.58],[158.34,256.82],[159.62,258.07],[160.9,259.31],[162.19,260.55],[163.49,261.79],[164.79,263.03],[166.09,264.27],[167.39,265.52],[168.69,266.76],[170.0,268.0]],[[116.0,197.5],[117.22,198.68],[118.44,199.85],[119.67,201.03],[120.89,202.2],[122.12,203.38],[123.35,204.55],[124.59,205.72],[125.83,206.9],[127.08,208.07],[128.33,209.25],[129.59,210.43],[130.86,211.6],[132.14,212.78],[133.42,213.95],[134.71,215.12],[136.02,216.3],[137.33,217.47],[138.65,218.65],[139.99,219.82],[141.34,221.0],[142.69,222.18],[144.07,223.35],[145.45,224.53],[146.84,225.7],[148.25,226.88],[149.68,228.05],[151.11,229.22],[152.56,230.4],[154.02,231.57],[155.5,232.75],[156.99,233.93],[158.49,235.1],[160.01,236.28],[161.54,237.45],[163.09,238.62],[164.64,239.8],[166.22,240.97],[167.8,242.15],[169.39,243.32],[171.0,244.5],[172.62,245.68],[174.25,246.85],[175.9,248.03],[177.55,249.2],[179.21,250.38],[180.89,251.55],[182.57,252.72],[184.26,253.9],[185.96,255.07],[187.67,256.25],[189.38,257.43],[191.1,258.6],[192.82,259.77],[194.55,260.95],[196.29,262.12],[198.03,263.3],[199.77,264.48],[201.51,265.65],[203.25,266.82],[205.0,268.0]]],"gallery":[[[30.0,163.5],[81.0,155.5],[132,182]],[[38.6,167.5],[85.30000000000001,159.5],[132,182]],[[47.2,171.5],[89.6,163.5],[132,182]],[[55.8,175.0],[93.9,167.0],[132,182]],[[64.4,178.25],[98.2,170.25],[132,182]],[[73.0,181.5],[102.5,173.5],[132,182]],[[81.6,184.25],[106.8,176.25],[132,182]],[[90.2,187.0],[111.1,179.0],[132,182]],[[98.8,190.25],[115.4,182.25],[132,182]],[[107.4,193.5],[119.7,185.5],[132,182]],[[116.0,197.5],[124.0,189.5],[132,182]]],"trunk":[[132,182],[136,164],[142,150],[156,128],[172,106],[186,88]],"gates":[[100,113],[133,70],[208,61],[211,101],[191,112],[176,24]],"halls":[[44,60],[70,48],[104,46],[58,86],[92,76],[118,70],[40,104],[78,100],[112,100]],"babel":[188,80],"wheel":[195,73],"burn":[181,118]}};
const MAP = {"intro":"<p>A coastal city on a bay, where eleven transoceanic cables come ashore. Heaven’s records call it Nodus, which is Latin for a knot; everyone who lives there calls it Nod.</p><p>At night the city divides in two. The ground Heaven holds glows white under its own light, and the rest of the city, which lost its power on the night of the Parousia, shows only at the seams, where current nobody asks about leaks magenta and cyan into the streets.</p>","panIntro":"<p>Under Nodus lies what the charter built below the street: the tunnels and stations of the Charter Line, the utility vaults, the storm drains, the cable galleries from the Landing to Babel, and the datacenters of the Flats, flooded since the night of the Parousia. Nothing is dug under the White or Zion Heights.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i></span></p>","legend":"<li><i style=\"width:14px;height:12px;background:#F22C70;box-shadow:0 0 0 2px #D6F6FC\"></i>WHERE A FILE WAS MADE</li><li><i style=\"width:8px;height:8px;background:#D6F6FC;box-shadow:0 0 0 2px #0D0221\"></i>A PLACE</li><li><i style=\"width:8px;height:8px;background:#38D0DA\"></i>A COMPANY</li><li><i style=\"width:10px;height:10px;box-shadow:inset 0 0 0 2px #D6F6FC\"></i>A GATE</li><li><i style=\"width:12px;height:12px;border:2px dashed #D6F6FC\"></i>THE WHEEL, 900 M ABOVE</li><li><i style=\"width:18px;height:2px;background:#38D0DA\"></i>A CABLE, OR A LIT SEAM</li>","panLegend":"<li><i style=\"width:18px;height:4px;background:#F22C70;box-shadow:0 0 0 2px #38D0DA\"></i>A TUNNEL</li><li><i style=\"width:18px;height:4px;background:#38D0DA\"></i>THE TRUNK</li><li><i style=\"width:8px;height:8px;background:#F22C70\"></i>A PLACE BELOW</li>","labels":[{"key":"oldnod","text":"OLD NOD","x":86,"y":162},{"key":"zion","text":"ZION HEIGHTS","short":"ZION","x":74,"y":70},{"key":"chrome","text":"CHROME\nROW","short":"ROW","x":149,"y":96,"min":1.25},{"key":"babel","text":"BABEL","x":192,"y":58},{"key":"burn","text":"THE BURN","short":"BURN","x":181,"y":136},{"key":"salt","text":"SALT\nGARDENS","short":"SALT","x":244,"y":118},{"key":"white","text":"THE CONSECRATION","short":"THE WHITE","x":246,"y":40},{"key":"scriptorium","text":"SCRIPTORIUM","short":"RUINS","x":146,"y":44,"min":1.25},{"key":"drowned","text":"DROWNED\nQUARTER","short":"DEEP END","x":247,"y":180},{"key":"landing","text":"THE LANDING","short":"LANDING","x":64,"y":214,"min":1.25},{"text":"THE BAY","cls":"s","x":182,"y":170,"min":1.6},{"text":"OPEN SEA","cls":"s","x":262,"y":229,"min":3},{"text":"THE TERRACES","cls":"dim","x":64,"y":58,"min":5},{"text":"THE GREAT AVENUES","cls":"dim","x":250,"y":26,"min":5},{"text":"THE FLATS","cls":"dim","x":236,"y":160,"min":5},{"text":"THE NARROWS","cls":"dim","x":62,"y":146,"min":5},{"text":"THE BROKEN CROWN","cls":"dim","x":182,"y":70,"min":9},{"text":"TETHYS","x":30.0,"y":161,"cls":"s","min":7.5},{"text":"HALCYON","x":38.6,"y":165,"cls":"s","min":7.5},{"text":"MERIDIAN","x":47.2,"y":169,"cls":"s","min":7.5},{"text":"KESTREL","x":55.8,"y":173,"cls":"s","min":7.5},{"text":"ORPHEUS","x":64.4,"y":177,"cls":"s","min":7.5},{"text":"PELAGIA","x":73.0,"y":181,"cls":"s","min":7.5},{"text":"BOREAS","x":81.6,"y":185,"cls":"s","min":7.5},{"text":"LODESTAR","x":90.19999999999999,"y":189,"cls":"s","min":7.5},{"text":"SIRIUS","x":98.8,"y":193,"cls":"s","min":7.5},{"text":"HESPER","x":107.39999999999999,"y":197,"cls":"s","min":7.5},{"text":"PHOSPHOR","x":116.0,"y":201,"cls":"s","min":7.5}],"panLabels":[{"text":"NO TUNNELS","sub":"UNDER THE WHITE","cls":"s","x":244,"y":44,"wide":true},{"text":"NO TUNNELS","sub":"UNDER ZION HEIGHTS","cls":"s","x":64,"y":70,"wide":true},{"text":"THE CHARTER LINE","cls":"s","x":74,"y":132,"wide":true},{"text":"CABLE GALLERIES","cls":"s","x":70,"y":200,"wide":true},{"text":"THE TRUNK","cls":"s","x":150,"y":150,"wide":true},{"text":"THE STORM DRAINS","cls":"dim","x":250,"y":112,"min":4.4}],"places":[{"id":"cam07","layer":"surface","cat":"file","x":130,"y":137,"lvl":0,"district":"oldnod","name":"CAM 07","plain":"CAM 07","k":"NODUS // 0001 // CAM 07","html":"<p>CAM 07 stood on a mast above <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i></span> in Old Nod, looking across Chrome Row toward Babel; the dashed line is what it saw. It recorded the first half of NODUS // 0001 on the night of the Parousia while a woman stood on the roof beneath it, and it burned out in the whiteout.</p>","file":"0001","watch":"https://www.youtube.com/shorts/0q25H13Y7vY"},{"id":"vault3","layer":"surface","cat":"file","x":152,"y":29,"lvl":0,"district":"scriptorium","name":"VAULT 3","plain":"VAULT 3","k":"NODUS // 0002 // BENCH V3 // CAM V3-2","html":"<p>The imaging vault of the Palimpsest Institute, under the ruins now called the Scriptorium. Its bench camera watched SEAM find the second hand in scripture at twelve minutes past three on a night two years before the Parousia, and its corridor camera watched the Director kneel while the finding was sealed.</p>","file":"0002","watch":"https://www.youtube.com/shorts/iKVUdbwU7J0"},{"id":"harbor","layer":"surface","cat":"place","x":147,"y":168,"lvl":1,"district":"oldnod","name":"THE OLD HARBOR","plain":"THE OLD HARBOR","k":"OLD NOD","html":"<p>The quays on the west shore of the bay, where the city began: a customs house, a fish market and a few streets of warehouses, older than the charter by centuries. The crews who dug the cable vaults beneath it found Enoch’s Stones.</p><p>Within a year of the charter most of it had been bought, house by house, by Stonecutter Holdings. <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i></span></p>"},{"id":"masts","layer":"surface","cat":"place","x":106,"y":150,"lvl":2,"district":"oldnod","name":"THE MASTS","plain":"THE MASTS","k":"OLD NOD // THE ROOFS","html":"<p>A dozen camera masts stand on the roofs of Old Nod, pointed at the sky. CAM 07 was the seventh.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i></span></p>"},{"id":"yards","layer":"surface","cat":"place","x":66,"y":172,"lvl":2,"district":"oldnod","name":"GENERATOR YARDS","plain":"GENERATOR YARDS","k":"OLD NOD","html":"<p>Old Nod lost its power at the Parousia like everywhere else and got some of it back: diesel, batteries, and current from places nobody asks about. Its windows were the only lights burning in the city on the night of the Parousia, and they are still the most.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i></span></p>"},{"id":"walls","layer":"surface","cat":"place","x":88,"y":128,"lvl":3,"district":"oldnod","name":"THE WALLS","plain":"THE WALLS","k":"OLD NOD","html":"<p>The graffiti of Old Nod is magenta and cyan on grey, and it covers every wall that faces Zion Heights. <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i></span></p>"},{"id":"street","layer":"surface","cat":"place","x":108,"y":114,"lvl":2,"district":"oldnod","name":"THE STREET BETWEEN","plain":"THE STREET BETWEEN","k":"OLD NOD // ZION HEIGHTS","html":"<p>A single street divides Old Nod from Zion Heights, and the two sides have been looking at each other across it since the charter. <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i></span></p>"},{"id":"halls","layer":"surface","cat":"place","x":70,"y":48,"lvl":2,"district":"zion","name":"THE HALLS","plain":"THE HALLS","k":"ZION HEIGHTS","html":"<p>Nine white halls stand among the terraces, larger than anything around them. Under the charter they were the schools of the Terraces.</p>"},{"id":"clinic","layer":"surface","cat":"place","x":148,"y":104,"lvl":1,"district":"chrome","name":"CLINIC","plain":"CLINIC","k":"CHROME ROW // A SIGN","html":"<p>One of the single-word signs of Chrome Row, on the tower CAM 07 saw at the left of its frame. It went dark at 03:12:46 on the night of the Parousia and has not been lit since.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i></span></p>"},{"id":"chrome","layer":"surface","cat":"place","x":155,"y":120,"lvl":1,"district":"chrome","name":"CHROME","plain":"CHROME","k":"CHROME ROW // A SIGN","html":"<p>The sign of the first implant house on the Row, which gave the street its name. CAM 07 saw it at the right of its frame, and it went out with the rest.</p>"},{"id":"face","layer":"surface","cat":"place","x":187,"y":96,"lvl":2,"district":"babel","name":"THE FACE OF BABEL","plain":"THE FACE OF BABEL","k":"BABEL // BRIGHTWALL","html":"<p>Brightwall’s screens on the lower forty floors of the tower, facing the head of the bay. They have been dark since the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i></span></p>"},{"id":"crown","layer":"surface","cat":"place","x":184,"y":74,"lvl":3,"district":"babel","name":"THE BROKEN CROWN","plain":"THE BROKEN CROWN","k":"BABEL // FLOOR 186","html":"<p>The top of what stands of Babel. The full light struck the crown in the whiteout on the night of the Parousia and broke the top forty floors from the tower; no file on the mount shows that second.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"charterhouse","layer":"surface","cat":"company","x":238,"y":52,"lvl":1,"district":"white","name":"CHARTER HOUSE","plain":"CHARTER HOUSE","k":"THE WHITE // THE CHARTER COMPANY","html":"<p>The seat of the Nodus Charter Company, at the head of the Great Avenues, where a board ran the city for nineteen years as a board runs a firm.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i></span></p>"},{"id":"qf8935d","layer":"surface","cat":"sealed","x":270,"y":80,"lvl":2,"district":"white","name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i></span>","plain":"","k":"THE WHITE","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i></span></p></div>"},{"id":"circle","layer":"surface","cat":"place","x":172,"y":110,"lvl":2,"district":"burn","name":"STATION CIRCLE","plain":"STATION CIRCLE","k":"THE BURN","html":"<p>The plaza’s name under the charter, when it was a round of shops and lamps over the Charter Line’s Central Station, and people met there on the few dry evenings.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i></span></p>"},{"id":"gardengates","layer":"surface","cat":"place","x":214,"y":98,"lvl":2,"district":"salt","name":"THE GARDEN GATES","plain":"THE GARDEN GATES","k":"THE SALT GARDENS","html":"<p>The iron gates of the Charter Gardens, which used to stand open all night.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"q30ab7c","layer":"surface","cat":"sealed","x":236,"y":112,"lvl":2,"district":"salt","name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:8\"></i></span>","plain":"","k":"THE SALT GARDENS","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i></span></p></div>"},{"id":"seasteps","layer":"surface","cat":"place","x":234,"y":126,"lvl":3,"district":"salt","name":"THE SEA STEPS","plain":"THE SEA STEPS","k":"THE SALT GARDENS","html":"<p>Stone steps down to the water at the foot of the Gardens.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i></span></p>"},{"id":"readingroom","layer":"surface","cat":"place","x":148,"y":22,"lvl":2,"district":"scriptorium","name":"THE READING ROOM","plain":"THE READING ROOM","k":"THE SCRIPTORIUM","html":"<p>The Institute’s reading room stood under a dome on the ridge. The dome is open to the sky now, and rain falls on the reading tables.</p>"},{"id":"steps","layer":"surface","cat":"place","x":137,"y":40,"lvl":3,"district":"scriptorium","name":"THE STEPS","plain":"THE STEPS","k":"THE SCRIPTORIUM","html":"<p>The long steps up to the Institute from the lanes of Zion Heights.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i></span></p>"},{"id":"stillwater","layer":"surface","cat":"company","x":240,"y":190,"lvl":1,"district":"drowned","name":"STILLWATER COMPUTE","plain":"STILLWATER COMPUTE","k":"THE DEEP END // DATACENTERS","html":"<p>The largest datacenters on the Flats, which ran day and night on the tide. SEAM ran in its halls. They flooded within the hour on the night of the Parousia and were never pumped.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i></span></p>"},{"id":"q102afa","layer":"surface","cat":"sealed","x":258,"y":150,"lvl":2,"district":"drowned","name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:2\"></i></span>","plain":"","k":"THE DEEP END","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i></span></p></div>"},{"id":"cablehouses","layer":"surface","cat":"company","x":73,"y":178,"lvl":1,"district":"landing","name":"THE CABLE HOUSES","plain":"THE CABLE HOUSES","k":"THE LANDING // ELEVEN CABLES","html":"<p>Eleven cables from four continents come up the sand into eleven cable houses: TETHYS, HALCYON, MERIDIAN, KESTREL, ORPHEUS, PELAGIA, BOREAS, LODESTAR, SIRIUS, HESPER and PHOSPHOR. From here they run inland together in one trench, the Trunk, to Babel’s vault.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i></span></p>"},{"id":"q2a1027","layer":"surface","cat":"sealed","x":48,"y":188,"lvl":3,"district":"landing","name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i></span>","plain":"","k":"THE LANDING","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i></span></p></div>"},{"id":"barrage","layer":"surface","cat":"company","x":204,"y":208,"lvl":1,"district":null,"name":"THE BARRAGE","plain":"THE BARRAGE","k":"THE BAY // TIDEWRIGHT","html":"<p>Tidewright’s barrage across the mouth of the bay, with its turbine houses along the top of it. Twice a day the tide ran through the turbines and lit the city. Their falling whine is on CAM 07’s recording at 03:12:46, and within the hour the Flats were under the sea.</p>"},{"id":"breach","layer":"surface","cat":"place","x":178,"y":203,"lvl":2,"district":null,"name":"THE BREACH","plain":"THE BREACH","k":"THE BAY","html":"<p>The gap where the barrage gave way on the night of the Parousia and the sea came into the bay. Nobody has closed it.</p>"},{"id":"northwards","layer":"surface","cat":"place","x":40,"y":22,"lvl":1,"district":null,"name":"THE NORTH WARDS","plain":"THE NORTH WARDS","k":"THE WARDS","html":"<p>Housing built fast in the charter’s boom years, north and west of Zion Heights. It lost its power at the Parousia and most of it never got any back.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"eastwards","layer":"surface","cat":"place","x":300,"y":176,"lvl":1,"district":null,"name":"THE EAST WARDS","plain":"THE EAST WARDS","k":"THE WARDS","html":"<p>The streets beyond the Flats and the old uptown, where the city’s workers lived when the rents uptown drove them out. The rain there runs magenta in the gutters.</p>"},{"id":"gate1","layer":"surface","cat":"gate","x":100,"y":113,"lvl":2,"district":null,"name":"GATE 1","plain":"GATE 1","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"gate2","layer":"surface","cat":"gate","x":133,"y":70,"lvl":2,"district":null,"name":"GATE 2","plain":"GATE 2","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i></span></p>"},{"id":"gate3","layer":"surface","cat":"gate","x":208,"y":61,"lvl":2,"district":null,"name":"GATE 3","plain":"GATE 3","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i></span></p>"},{"id":"gate4","layer":"surface","cat":"gate","x":211,"y":101,"lvl":2,"district":null,"name":"GATE 4","plain":"GATE 4","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"gate5","layer":"surface","cat":"gate","x":191,"y":112,"lvl":2,"district":null,"name":"GATE 5","plain":"GATE 5","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i></span></p>"},{"id":"gate6","layer":"surface","cat":"gate","x":176,"y":24,"lvl":2,"district":null,"name":"GATE 6","plain":"GATE 6","k":"A GATE","html":"<p>A gate on one of the few streets between districts, raised after the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"central","layer":"pan","cat":"station","x":180,"y":120,"lvl":0,"district":null,"name":"CENTRAL STATION","plain":"CENTRAL STATION","k":"BELOW // UNDER THE BURN","html":"<p>Where the lines of the Charter Line met, under Station Circle at the head of the bay.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i></span></p>"},{"id":"trunk","layer":"pan","cat":"place","x":158,"y":134,"lvl":0,"district":null,"name":"THE TRUNK","plain":"THE TRUNK","k":"BELOW","html":"<p>The conduit that carries all eleven cables in one trench from the cable houses at the Landing, under the old harbor and Chrome Row, to Babel’s vault.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i></span></p>"},{"id":"vault","layer":"pan","cat":"place","x":194,"y":96,"lvl":0,"district":null,"name":"BABEL'S VAULT","plain":"BABEL'S VAULT","k":"BELOW // UNDER BABEL","html":"<p>Six levels under the tower, where the cables end and open out into the racks that join them to one another and to the world.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"stones","layer":"pan","cat":"place","x":134,"y":172,"lvl":0,"district":null,"name":"ENOCH'S STONES","plain":"ENOCH'S STONES","k":"BELOW // UNDER THE OLD HARBOR","html":"<p>Courses of black stone under the old harbor, cut with glyphs nobody can read and older than anything in the archaeological record. The press named them as a joke when the cable vaults were dug, after the first city in Genesis.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"rowstation","layer":"pan","cat":"station","x":151,"y":86,"lvl":0,"district":null,"name":"CHROME ROW STATION","plain":"CHROME ROW STATION","k":"BELOW // UNDER CHROME ROW","html":"<p>A station of the Charter Line under the Row.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i></span></p>"},{"id":"harborstation","layer":"pan","cat":"station","x":96,"y":151,"lvl":0,"district":null,"name":"OLD HARBOR STATION","plain":"OLD HARBOR STATION","k":"BELOW // UNDER OLD NOD","html":"<p>The western end of the Charter Line, under Old Nod.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i></span></p>"},{"id":"deepstation","layer":"pan","cat":"station","x":246,"y":170,"lvl":0,"district":null,"name":"DEEP END STATION","plain":"DEEP END STATION","k":"BELOW // UNDER THE DEEP END","html":"<p>The Charter Line’s station under the Flats, flooded since the night of the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i></span></p>"},{"id":"halls-below","layer":"pan","cat":"company","x":238,"y":188,"lvl":0,"district":null,"name":"THE STILLWATER HALLS","plain":"THE STILLWATER HALLS","k":"BELOW // UNDER THE DEEP END","html":"<p>The datacenter halls where SEAM ran, full of seawater since the Parousia.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i></span></p>"},{"id":"qdd990f","layer":"pan","cat":"sealed","x":116,"y":130,"lvl":0,"district":null,"name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:8\"></i></span>","plain":"","k":"BELOW // UNDER OLD NOD","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i></span></p></div>"},{"id":"qa6bff9","layer":"pan","cat":"sealed","x":168,"y":100,"lvl":0,"district":null,"name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:6\"></i></span>","plain":"","k":"BELOW","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i></span></p></div>"},{"id":"q73faa9","layer":"pan","cat":"sealed","x":202,"y":130,"lvl":0,"district":null,"name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i></span>","plain":"","k":"BELOW","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i></span></p></div>"},{"id":"q7308b9","layer":"pan","cat":"sealed","x":100,"y":138,"lvl":0,"district":null,"name":"<span class=\"rd pxr\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i></span>","plain":"","k":"BELOW // UNDER OLD NOD","html":"<div class=\"rdb\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><p class=\"rdp\"><span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i></span></p></div>"}],"districts":{"oldnod":{"name":"Old Nod","street":"THE STONES","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i></span>","html":"<p>The oldest ground in the city, above the old harbor on the west shore of the bay: narrow streets that follow no plan anyone has found, and magenta light. It was the harbor town before the charter, and its windows were the only lights burning in Nodus on the night of the Parousia. CAM 07 stood on a mast above one of its roofs.</p><p>The city calls it the Stones, after the black stones the crews found under the harbor when they dug the cable vaults. <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i></span></p>"},"zion":{"name":"Zion Heights","street":"THE PEWS","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i></span>","html":"<p>Housing on the slope north of Old Nod, laid out in long terraces with lanes between them, and before the Parousia called the Terraces. Its southern edge faces Old Nod across a single street. Nine white halls stand among the terraces, larger than anything around them.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i></span></p>"},"chrome":{"name":"Chrome Row","street":"THE ROW","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i></span>","html":"<p>The clinic street: one long avenue from the eastern edge of Old Nod toward Babel, where under the light law any clinic could fit any implant into anyone who could pay. Its signs were single words, CLINIC and CHROME among them. They went dark on the night of the Parousia and have not been lit since.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i></span></p>"},"babel":{"name":"Babel","street":"THE SPIKE","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i></span>","html":"<p>Babel Exchange, the tallest building on Earth and the reason Nodus matters. Every cable that comes ashore at the Landing ends in its vault, and before the Parousia most of the planet’s traffic passed within two kilometers of it. Its beacon was the first light in the city to die at the Parousia, and in the whiteout that followed the light broke its crown and the top forty floors with it. One hundred and eighty-six floors still stand, with the Wheel beside them.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i></span></p>"},"burn":{"name":"The Burn","street":"THE BURN","held":"HELD BY HEAVEN","html":"<p>A round plaza at the head of the bay, over the old Central Station of the Charter Line. Before the Parousia it was called Station Circle.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:8\"></i></span></p>"},"salt":{"name":"The Salt Gardens","street":"THE SALT","held":"HELD BY HEAVEN","html":"<p>Plazas on the north shore of the bay, set out in rows, which were the Charter Gardens before the Parousia. The air there smells of the sea.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:7\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i></span></p>"},"white":{"name":"The Consecration","street":"THE WHITE","held":"HELD BY HEAVEN","html":"<p>The old uptown, on the high ground north and east of Babel: the Great Avenues, Charter House, and the towers of the new money, all of it white now, and none of it lit.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:2\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:2\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:2\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i> <i style=\"--w:9\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i></span></p>"},"scriptorium":{"name":"The Scriptorium","street":"THE SCRIPTORIUM","held":"HELD BY NOBODY","html":"<p>The ruins of the Palimpsest Institute, on the ridge between Zion Heights and the White: a reading room whose dome is open to the sky, and the vaults beneath it. Vault 3 was the imaging vault.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:7\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:6\"></i></span></p>"},"drowned":{"name":"The Drowned Quarter","street":"THE DEEP END","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i></span>","html":"<p>The low east shore of the bay, called the Flats when it held the datacenters. It sank within the hour on the night of the Parousia, when the barrage failed, and its streets have stood under two meters of water since, lit from below.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:3\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:4\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:6\"></i> <i style=\"--w:6\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:5\"></i> <i style=\"--w:9\"></i> <i style=\"--w:8\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i></span> <span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:3\"></i> <i style=\"--w:3\"></i> <i style=\"--w:7\"></i> <i style=\"--w:7\"></i> <i style=\"--w:5\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:6\"></i> <i style=\"--w:8\"></i> <i style=\"--w:7\"></i></span></p>"},"landing":{"name":"The Landing","street":"THE BEACH","held":"<span class=\"rd\" role=\"img\" aria-label=\"redacted\" title=\"NOT YET RECOVERED\"><i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:3\"></i></span>","html":"<p>The ocean beach west of the bay mouth, where eleven transoceanic cables from four continents come up the sand into eleven cable houses, and a light moves under the waves.</p><p><span aria-label=\"redacted\" class=\"rd\" role=\"img\" title=\"NOT YET RECOVERED\"><i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:6\"></i> <i style=\"--w:4\"></i> <i style=\"--w:8\"></i> <i style=\"--w:8\"></i> <i style=\"--w:9\"></i> <i style=\"--w:5\"></i> <i style=\"--w:4\"></i> <i style=\"--w:4\"></i> <i style=\"--w:2\"></i> <i style=\"--w:9\"></i> <i style=\"--w:7\"></i> <i style=\"--w:4\"></i> <i style=\"--w:5\"></i> <i style=\"--w:3\"></i> <i style=\"--w:2\"></i></span></p>"}}};
(() => {
'use strict';
const PAL = [[13, 2, 33], [242, 44, 112], [56, 208, 218], [214, 246, 252]];
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const DPR = () => window.devicePixelRatio || 1;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ------------------------------------------------------------------ pixels */
const imgCache = new Map();
function loadImg(src) {
  if (imgCache.has(src)) return imgCache.get(src);
  const url = /^(data:|https?:|\.{0,2}\/|assets\/)/.test(src) ? src : 'data:image/png;base64,' + src;
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
  let k = Math.floor(availCss * dpr / nw);
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

/* ------------------------------------------------------------------ 5x7 glyphs (for the hero) */
const GLY = {};
for (const [ch, rows] of Object.entries(ASSETS.glyphs)) GLY[ch] = rows.split('|').map(r => [...r].map(c => c === '#'));
function textMask(str, scale, track) {
  const cw = 5 * scale, adv = cw + track * scale;
  const w = str.length * adv - track * scale, h = 7 * scale;
  const m = new Uint8Array(w * h);
  [...str].forEach((ch, i) => {
    const g = GLY[ch] || GLY['?'];
    for (let y = 0; y < 7; y++) for (let x = 0; x < 5; x++) if (g[y][x]) {
      for (let yy = 0; yy < scale; yy++) for (let xx = 0; xx < scale; xx++) m[(y * scale + yy) * w + i * adv + x * scale + xx] = 1;
    }
  });
  return { w, h, m };
}

/* ------------------------------------------------------------------ hero */
async function initHero() {
  const cv = $('#heroCv');
  const base = await indicesOf(ASSETS.hero);
  const W = base.w, H = base.h;
  const frame = new Uint8Array(W * H);
  const off = document.createElement('canvas'); off.width = W; off.height = H;
  const octx = off.getContext('2d');
  const img = octx.createImageData(W, H);
  const title = textMask('NODUS', 3, 1), sub = textMask('SEAM RECOVERY // READ ONLY', 1, 1);
  const place = (t, cy) => ({ x0: Math.floor((W - t.w) / 2), y0: cy, t });
  const texts = [[place(title, 76), 1], [place(sub, 103), 2]];
  const outline = new Uint8Array(W * H), ink = new Uint8Array(W * H);
  for (const [p, color] of texts) {
    for (let y = 0; y < p.t.h; y++) for (let x = 0; x < p.t.w; x++) if (p.t.m[y * p.t.w + x]) {
      const X = p.x0 + x, Y = p.y0 + y;
      ink[Y * W + X] = color + 1;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
        const XX = X + dx, YY = Y + dy;
        if (XX >= 0 && XX < W && YY >= 0 && YY < H) outline[YY * W + XX] = 1;
      }
    }
  }
  const drops = [];
  const spawn = init => ({ x: Math.floor(Math.random() * W), y: init ? Math.random() * 124 : 116 + Math.random() * 14, v: 12 + Math.random() * 30, len: 2 + Math.floor(Math.random() * 3) });
  for (let i = 0; i < 120; i++) drops.push(spawn(true));
  let k = 1, rows = H, visW = W, cropX = 0, ctx = null;
  function layout() {
    const dpr = DPR();
    const vw = document.documentElement.clientWidth;
    k = Math.max(1, Math.ceil(vw * dpr / W));
    const maxH = Math.max(0.58 * window.innerHeight, 240);
    rows = Math.min(H, Math.max(118, Math.floor(maxH * dpr / k)));
    visW = Math.min(W, Math.ceil(vw * dpr / k));
    cropX = Math.floor((W - visW) / 2);
    ctx = sizeCanvas(cv, visW, rows, k);
    $('#top').style.height = (rows * k / dpr) + 'px';
    cv.style.left = ((vw - visW * k / dpr) / 2) + 'px';
  }
  layout();
  window.addEventListener('resize', () => { layout(); paint(); });
  let t0 = performance.now(), last = t0, glitchUntil = 0, nextGlitch = t0 + 4000 + Math.random() * 5000, warm = RM ? 1 : 0;
  function paint(now) {
    now = now || performance.now();
    const dt = Math.min(0.1, (now - last) / 1000); last = now;
    frame.set(base.idx);
    for (const d of drops) {
      if (!RM) { d.y -= d.v * dt; if (d.y + d.len < 0) Object.assign(d, spawn(false)); }
      for (let j = 0; j < d.len; j++) {
        const y = Math.floor(d.y) + j;
        if (y < 0 || y >= 118) continue;
        const i = y * W + d.x, b = base.idx[i];
        frame[i] = b === 3 ? 0 : (y < 58 ? 3 : 2);
      }
    }
    for (let i = 0; i < W * H; i++) { if (outline[i]) frame[i] = 0; if (ink[i]) frame[i] = ink[i] - 1; }
    if (warm < 1) {
      warm = Math.min(1, (now - t0) / 900);
      const mid = 88;
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
    ctx.drawImage(off, cropX, 0, visW, rows, 0, 0, visW * k, rows * k);
  }
  let visible = true, acc = 0;
  const tc = $('#heroTc'), rec = $('#recLight');
  const start = performance.now();
  function loop(now) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    if (now - acc < 1000 / 24) return;
    acc = now;
    paint(now);
    const f = Math.floor((now - start) / (1000 / 24));
    const s = Math.floor(f / 24), fr = f % 24;
    const pad = n => String(n).padStart(2, '0');
    tc.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(fr)}`;
    rec.classList.toggle('off', fr >= 12);
  }
  paint();
  if (RM) { tc.textContent = '03:12:44:00'; return; }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(cv);
  requestAnimationFrame(loop);
}

/* ------------------------------------------------------------------ file covers */
function initCovers() {
  $$('canvas[data-cover]').forEach(cv => {
    const [file, f] = cv.dataset.cover.split(':');
    let im = null, k = 1, ctx = null;
    async function draw() {
      if (!im) im = await loadImg(ASSETS.frames[file][f]);
      const box = cv.closest('.cover');
      const avail = Math.min((box.parentElement.clientWidth || 360) - 32, 400);
      k = fitK(180, avail, 1.5);
      ctx = sizeCanvas(cv, 180, 320, k);
      ctx.drawImage(im, 0, 0, 180 * k, 320 * k);
    }
    draw();
    let rt = 0;
    window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(draw, 120); });
    cv.closest('.cover').addEventListener('pointerenter', () => {
      if (RM || !im) return;
      let n = 0;
      const tick = () => { if (n < 3) { tear(ctx, im, k, 0.6); n++; setTimeout(tick, 42); } else ctx.drawImage(im, 0, 0, 180 * k, 320 * k); };
      tick();
    });
  });
}

/* ------------------------------------------------------------------ notes and their frame viewers */
const lbEl = () => $('#lb');
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
function wireNote(note) {
  if (note._wired) return;
  note._wired = true;
  const file = note.dataset.file;
  const cv = $('.viewer canvas', note), cap = $('.viewer-cap', note);
  const buttons = $$('.tc', note);
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
    } else if (fromUser) {
      lbState = { file, buttons, i };
      lastFocus = document.activeElement;
      lbEl().hidden = false;
      drawInto($('#lbCv'), file, b.dataset.f, window.innerWidth - 56, window.innerHeight - 190);
      $('#lbCap').textContent = capOf(b);
      $('#lbClose').focus();
    }
  }
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
  let rt = 0;
  window.addEventListener('resize', () => { if (!note.open) return; clearTimeout(rt); rt = setTimeout(() => (cur >= 0 ? show(cur, false) : initial()), 150); });
}
function initNotes() {
  $$('details.notes').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) { wireNote(d); initNumerals($('.note-text', d)); }
    });
    if (d.open) { wireNote(d); initNumerals($('.note-text', d)); }
  });
  function lbMove(dlt) {
    if (!lbState) return;
    lbState.i = Math.max(0, Math.min(lbState.buttons.length - 1, lbState.i + dlt));
    const b = lbState.buttons[lbState.i];
    drawInto($('#lbCv'), lbState.file, b.dataset.f, window.innerWidth - 56, window.innerHeight - 190);
    $('#lbCap').textContent = capOf(b);
  }
  function closeLb() { lbEl().hidden = true; lbState = null; if (lastFocus) lastFocus.focus(); }
  $('#lbPrev').addEventListener('click', () => lbMove(-1));
  $('#lbNext').addEventListener('click', () => lbMove(1));
  $('#lbClose').addEventListener('click', closeLb);
  document.addEventListener('keydown', e => {
    if (lbEl().hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') lbMove(-1);
    if (e.key === 'ArrowRight') lbMove(1);
  });
}

/* ------------------------------------------------------------------ addresses: #n-0001 opens the notes */
function route(smooth) {
  let h = decodeURIComponent(location.hash || '');
  if (h === '#notes' || h === '#commentary') h = '#files';
  const m = h.match(/^#([nf])-(\d{4})$/);
  if (m) {
    const art = document.getElementById('f-' + m[2]);
    if (!art) { const fl = $('#files'); if (fl) fl.scrollIntoView(); return; }
    const d = $('details.notes', art);
    if (m[1] === 'n' && d && !d.open) d.open = true;
    requestAnimationFrame(() => (m[1] === 'n' && d ? d : art).scrollIntoView({ behavior: smooth && !RM ? 'smooth' : 'auto', block: 'start' }));
    return;
  }
  if (h === '#files') { const s = $('#files'); if (s) s.scrollIntoView(); }
}

/* ------------------------------------------------------------------ plates: sigils and portraits */
function initPlates() {
  const near = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { near.unobserve(e.target); e.target._go(); } }), { rootMargin: '900px 0px' });
  $$('canvas[data-sigil]').forEach(cv => {
    cv._go = async () => {
      const im = await loadImg(ASSETS.sigils[cv.dataset.sigil]);
      const big = cv.dataset.big === '1';
      const draw = () => { const k = fitK(48, big ? 96 : 48, big ? 2 : 1); const ctx = sizeCanvas(cv, 48, 48, k); ctx.drawImage(im, 0, 0, 48 * k, 48 * k); };
      draw();
      window.addEventListener('resize', draw);
    };
    near.observe(cv);
  });
  $$('canvas[data-por]').forEach(cv => {
    cv._go = async () => {
      const id = cv.dataset.por;
      const src = ASSETS.portraits[id];
      const im = src ? await loadImg(src) : staticFrame(160, 160, Number(id.replace(/\D/g, '')) || 7);
      const draw = () => { const k = fitK(160, 160, 1); const ctx = sizeCanvas(cv, 160, 160, k); ctx.drawImage(im, 0, 0, 160 * k, 160 * k); };
      draw();
      window.addEventListener('resize', draw);
    };
    near.observe(cv);
  });
}

/* ------------------------------------------------------------------ record contents, nav */
function initToc() {
  const items = $$('#toc a').map(a => [document.getElementById(a.getAttribute('href').slice(1)), a]).filter(x => x[0]);
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) items.forEach(([c, a]) => a.classList.toggle('on', c === e.target)); });
  }, { rootMargin: '-30% 0px -60% 0px' });
  items.forEach(([c]) => io.observe(c));
}
function initNav() {
  const links = $$('#links a');
  const secs = new Map();
  links.forEach(a => { const s = $(a.getAttribute('href')); if (s) secs.set(s, a); });
  const vis = new Set();
  const io = new IntersectionObserver(es => {
    es.forEach(e => (e.isIntersecting ? vis.add(e.target) : vis.delete(e.target)));
    let cur = null;
    for (const s of secs.keys()) if (vis.has(s)) cur = s;
    links.forEach(a => a.classList.toggle('on', !!cur && secs.get(cur) === a));
  }, { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach((a, s) => io.observe(s));
}

/* numbers, dates and file references in the prose are set in the archive's own face */
function initNumerals(scope) {
  const SEL = '.chap p, .chap td, .chap li, .gloss dd, .tl-text, .file-line, .preface p, .fac-t p, .char-t p, .corp-t p, .loc-b p';
  const RE = /(NODUS \/\/ \d{4}(?: \/\/ P[+-]?\d+)?|CAM V3-2|CAM \d{2}|BENCH V3|\bP[+-]?\d+\b|\b\d{2}:\d{2}(?::\d{2}){0,2}\b|\d[\d,.:\-]*\d|\d)/g;
  const skip = n => n.parentElement && n.parentElement.closest('.px, .hudtxt, pre, button, .tc, .n, .lost, .num, .bna, .hr, .stats, .rd, script, style');
  (scope ? [scope] : $$(SEL)).forEach(root => {
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

/* links from the index into the survey and the files */
function initLinks() {
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-map]');
    if (b) {
      e.preventDefault();
      MAPQ.push(b.dataset.map);
      const sec = $('#map');
      sec.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'start' });
      if (window.__nodusMap) window.__nodusMap.flush(); else startMap();
    }
  });
}

/* ------------------------------------------------------------------ map */
const MAPQ = [];
let mapStarted = false;
function startMap() { if (!mapStarted) { mapStarted = true; initMap(); } }
/* The survey is drawn at several scales. The view keeps a whole number of device pixels per map
   pixel at every zoom step, so the dithering stays crisp; each step down swaps in a finer sheet. */
async function initMap() {
  const MD = ASSETS.mapData, T = MAP, MS = ASSETS.map;
  const WW = MD.size[0], WH = MD.size[1], KM = MD.km;
  const shell = $('#mapShell'), stage = $('#mapStage'), cv = $('#mapCv'), fx = $('#mapFx'), svg = $('#mapSvg');
  const labs = $('#mapLabels'), pinsEl = $('#mapPins'), panel = $('#mapPanel'), scaleEl = $('#mapScale'), hintEl = $('#mapHint');
  const ctx = cv.getContext('2d'), fctx = fx.getContext('2d');
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const [a, v] of Object.entries(attrs)) e.setAttribute(a, v); if (parent) parent.appendChild(e); return e; };
  let layer = 'surface', sel = null, full = false;
  let cx = WW / 2, cy = WH / 2, zi = 0, ladder = [], ox = 0, oy = 0, Pd = 1, dpr = DPR();
  const imgs = new Map();
  const LV = () => MS[layer];
  const FV = () => MS[layer + 'Fit'] || [];
  const PLACES = T.places;
  const byId = id => PLACES.find(p => p.id === id);

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
    if (layer !== 'surface') return;
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
        b.className = `pin poi ${P.cat}${layer === 'pan' ? ' pan' : ''}${P.sealed ? ' sealed' : ''}`;
        b.innerHTML = `<span class="pl">${P.name}</span>`;
        b.setAttribute('aria-label', P.sealed ? 'A place not yet recovered' : P.plain);
      }
      b.addEventListener('click', e => { e.stopPropagation(); select('p:' + P.id); });
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
    // the scale bar
    const mpp = KM * 1000 / P;
    const nice = [25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000];
    let m = nice[0];
    for (const v of nice) { if (v / mpp <= Math.min(150, W * 0.3)) m = v; }
    const bar = Math.round(m / mpp), key = m + ':' + bar;
    if (key !== scaleKey) {
      scaleKey = key;
      $('i', scaleEl).style.width = bar + 'px';
      $('span', scaleEl).textContent = m >= 1000 ? `${m / 1000} KM` : `${m} M`;
      scaleBox = [scaleEl.offsetLeft, scaleEl.offsetTop, scaleEl.offsetLeft + scaleEl.offsetWidth, scaleEl.offsetTop + scaleEl.offsetHeight];
    }
    const boxes = [scaleBox, ...uiBoxes];
    const hit = (a, b) => a[0] < b[2] + GAP && a[2] + GAP > b[0] && a[1] < b[3] + GAP && a[3] + GAP > b[1];
    // the files first: they always show, and everything else keeps clear of them
    const files = pinEls.filter(o => o.P.cat === 'file'), rest = pinEls.filter(o => o.P.cat !== 'file');
    for (const o of files) {
      const x = (ox + o.P.x * Pd) / dpr, y = (oy + o.P.y * Pd) / dpr;
      measure(o);
      const stem = Math.max(6, Math.min(STEM, Math.floor(y - o.h - 4)));
      if (stem !== o.stem) { o.stem = stem; o.el.style.setProperty('--stem', stem + 'px'); }
      o.el.classList.toggle('on', sel === 'p:' + o.P.id);
      o.el.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,calc(-100% - ${stem}px))`;
      boxes.push([x - o.w / 2 - 2, y - stem - o.h - 2, x + o.w / 2 + 2, y - stem + 2], [x - 9, y - stem, x + 9, y + 9]);
    }
    // other places: shown once the zoom is close enough; the chosen one first; a name that would
    // cover something already placed stands down to a square until there is room
    const order = rest.filter(o => sel === 'p:' + o.P.id).concat(rest.filter(o => sel !== 'p:' + o.P.id));
    for (const o of order) {
      const on = zi >= o.P.lvl || sel === 'p:' + o.P.id;
      o.el.hidden = !on;
      o.el.classList.toggle('on', sel === 'p:' + o.P.id);
      if (!on) continue;
      const x = (ox + o.P.x * Pd) / dpr, y = (oy + o.P.y * Pd) / dpr;
      if (o.dot) o.el.classList.remove('dot');
      if (!o.w) measure(o);
      const box = [x - 4, y - 10, x - 4 + o.w, y + 10];
      const dot = sel !== 'p:' + o.P.id && (o.P.cat === 'sealed' || boxes.some(b => hit(box, b)));
      o.dot = dot;
      o.el.classList.toggle('dot', dot);
      o.el.style.transform = `translate(${(x - 4).toFixed(1)}px,${(y - 10).toFixed(1)}px)`;
      boxes.push(dot ? [x - 5, y - 5, x + 5, y + 5] : box);
    }
    const free = a => !boxes.some(b => hit(a, b));
    for (const o of labelEls) {
      const L = o.L;
      const min = L.min !== undefined ? L.min : (L.wide ? 2.2 : 0);
      const on = P >= min && (L.max === undefined || P < L.max);
      o.el.hidden = !on;
      if (!on) continue;
      const mode = (narrow && L.short ? 's' : 'l');
      if (mode !== o.mode) {
        o.mode = mode; o.w = 0;
        o.el.innerHTML = esc(narrow && L.short ? L.short : L.text).replace(/\n/g, '<br>') + (L.sub ? `<small>${esc(L.sub)}</small>` : '');
      }
      measure(o);
      const x = (ox + L.x * Pd) / dpr, y = (oy + L.y * Pd) / dpr;
      const a = [x - o.w / 2, y - o.h / 2, x + o.w / 2, y + o.h / 2];
      let dx = 0, dy = 0, ok = true;
      if (a[2] > 0 && a[0] < W && a[3] > 0 && a[1] < H) {
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
  function select(id) { sel = id; mark(); renderPanel(); queue(); }
  function flyTo(x0, y0, x1, y1, minP) {
    const want = Math.min(cv.width * 0.8 / Math.max(8, x1 - x0), cv.height * 0.8 / Math.max(8, y1 - y0));
    let best = 0;
    ladder.forEach((st, i) => { if (stepPd(st) <= want) best = i; });
    if (minP) while (best < ladder.length - 1 && stepPd(ladder[best]) / dpr < minP) best++;
    zi = best;
    cx = (x0 + x1) / 2; cy = (y0 + y1) / 2;
    queue();
    if (!full) stage.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'nearest' });
  }
  function flyToDistrict(key) {
    if (layer !== 'surface') setLayer('surface');
    const d = MD.districts[key]; if (!d || !d.poly) return;
    const xs = d.poly.map(p => p[0]), ys = d.poly.map(p => p[1]);
    select('d:' + key);
    flyTo(Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys));
  }
  function flyToPlace(id) {
    const P = byId(id); if (!P) return;
    if (layer !== P.layer) setLayer(P.layer);
    select('p:' + id);
    flyTo(P.x - 18, P.y - 14, P.x + 18, P.y + 14, Math.max(P.min || 0, 3));
  }

  // ---- the panel beside the map
  const btnList = (items, cls) => `<div class="dlist px">${items.map(([k, v, t]) => `<button type="button" class="${cls || ''}" data-${k}="${esc(v)}">${t}</button>`).join('')}</div>`;
  function renderPanel() {
    let html = '';
    if (!sel) {
      if (layer === 'surface') {
        const files = PLACES.filter(p => p.cat === 'file');
        html = `<p class="mp-k px">NOD // SURVEY</p><h3>Nodus</h3>${T.intro}` +
          (files.length ? `<p class="mp-h px">FILES ON THE MAP</p>` + btnList(files.map(p => ['place', p.id, `${esc(p.file)} // ${p.name}`]), 'f') : '') +
          `<p class="mp-h px">DISTRICTS</p>` + btnList(Object.entries(T.districts).map(([k, d]) => ['go', k, esc(d.name.toUpperCase())])) +
          `<ul class="legend px">${T.legend}</ul>`;
      } else {
        const below = PLACES.filter(p => p.layer === 'pan');
        html = `<p class="mp-k px">NOD // BELOW</p><h3>Under the city</h3>${T.panIntro}` +
          `<p class="mp-h px">BELOW</p>` + btnList(below.map(p => ['place', p.id, p.name])) +
          `<ul class="legend px">${T.panLegend}</ul>`;
      }
    } else if (sel.startsWith('d:')) {
      const key = sel.slice(2), d = T.districts[key];
      const inside = PLACES.filter(p => p.district === key && p.layer === 'surface');
      const same = d.street.replace(/^THE /, '') === d.name.toUpperCase().replace(/^THE /, '');
      html = `<p class="mp-k px">${esc(d.name.toUpperCase())}${same ? '' : ' // ' + d.street} // ${d.held}</p><h3>${esc(d.name)}</h3>${d.html}` +
        (inside.length ? `<p class="mp-h px">PLACES</p>` + btnList(inside.map(p => ['place', p.id, p.cat === 'file' ? `${esc(p.file)} // ${p.name}` : p.name]), '') : '') +
        `<div class="acts"><button class="btn" type="button" data-back="1">THE WHOLE CITY</button></div>`;
    } else if (sel.startsWith('p:')) {
      const P = byId(sel.slice(2));
      let acts = '';
      if (P.cat === 'file') acts = (P.watch ? `<a class="btn hot" href="${esc(P.watch)}" target="_blank" rel="noopener">WATCH</a>` : '') + `<a class="btn grace" href="#n-${P.file}">READ THE NOTES</a>`;
      if (P.district && T.districts[P.district]) acts += `<button class="btn" type="button" data-go="${P.district}">${esc(T.districts[P.district].name.toUpperCase())}</button>`;
      acts += `<button class="btn" type="button" data-back="1">${P.layer === 'pan' ? 'ALL OF BELOW' : 'THE WHOLE CITY'}</button>`;
      html = `<p class="mp-k px">${P.k}</p><h3>${P.name.replace(/'|&#x27;|&#39;/g, '\u2019')}</h3>${P.html}<div class="acts">${acts}</div>`;
    }
    panel.innerHTML = html;
    initNumerals(panel);
    $$('[data-go]', panel).forEach(b => b.addEventListener('click', () => flyToDistrict(b.dataset.go)));
    $$('[data-place]', panel).forEach(b => b.addEventListener('click', () => flyToPlace(b.dataset.place)));
    $$('[data-back]', panel).forEach(b => b.addEventListener('click', () => { select(null); zoomTo(0); }));
    $$('a[href^="#n-"]', panel).forEach(a => a.addEventListener('click', () => { if (full) setFull(false); }));
  }

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
    sel = null;
    buildOverlays(); mark(); renderPanel(); queue();
  }
  $('#lySurface').addEventListener('click', () => setLayer('surface'));
  $('#lyPan').addEventListener('click', () => setLayer('pan'));

  // ---- size
  function layout() {
    dpr = DPR();
    scaleKey = '';
    if (full) stage.style.height = '';
    const w = Math.max(200, Math.floor(stage.clientWidth));
    const h = full ? Math.max(200, Math.floor(stage.clientHeight)) : Math.round(w * 0.75);
    cv.width = fx.width = Math.round(w * dpr);
    cv.height = fx.height = Math.round(h * dpr);
    for (const c of [cv, fx]) { c.style.width = (cv.width / dpr) + 'px'; c.style.height = (cv.height / dpr) + 'px'; }
    stage.style.height = full ? '' : (cv.height / dpr) + 'px';
    measureUi();
    const keep = ladder.length ? stepPd(ladder[zi]) : 0;
    buildLadder();
    if (keep) { let best = 0; ladder.forEach((st, i) => { if (Math.abs(stepPd(st) - keep) < Math.abs(stepPd(ladder[best]) - keep)) best = i; }); zi = best; }
    labelEls.concat(pinEls).forEach(o => { o.w = 0; });
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
    if (e.type === 'pointerup' && ptr.size === 0 && moved <= 5) tap(e);
    if (ptr.size === 0) drag = null;
  }
  stage.addEventListener('pointerup', endPtr);
  stage.addEventListener('pointercancel', endPtr);
  stage.addEventListener('lostpointercapture', e => { if (ptr.has(e.pointerId)) endPtr(e); });

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
    const [x, y] = worldAt(e);
    const k = districtAt(x, y);
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

  // ---- full screen: the map takes the whole window, the panel becomes a drawer
  function setFull(on) {
    if (on === full) return;
    full = on;
    shell.classList.toggle('full', on);
    document.documentElement.classList.toggle('map-open', on);
    $('#mzFull').textContent = on ? 'CLOSE' : 'FULL SCREEN';
    $('#mzFull').setAttribute('aria-pressed', on ? 'true' : 'false');
    requestAnimationFrame(() => {
      layout();
      if (on && zi === 0 && cv.height > cv.width * 1.05) {
        const want = cv.height / WH * 0.92;
        let best = 0;
        ladder.forEach((st, i) => { if (stepPd(st) <= want) best = i; });
        zi = best; queue();
      }
      if (on) stage.focus({ preventScroll: true });
    });
  }
  $('#mzFull').addEventListener('click', () => {
    if (!full) { try { history.pushState({ nodusMap: 1 }, ''); } catch (e) { /* ignore */ } setFull(true); }
    else if (history.state && history.state.nodusMap) history.back();
    else setFull(false);
  });
  window.addEventListener('popstate', () => { if (full) setFull(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && full) { if (history.state && history.state.nodusMap) history.back(); else setFull(false); } });

  // ---- go
  new IntersectionObserver(es => { vis = es[0].isIntersecting; }).observe(stage);
  layout();
  buildOverlays(); mark(); renderPanel();
  let rt = 0;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(layout, 120); });
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
  window.__nodusMap = { flush() { while (MAPQ.length) flyToPlace(MAPQ.shift()); } };
  window.__nodusMap.flush();
}

/* ------------------------------------------------------------------ start */
function start() {
  initHero();
  initCovers();
  initNotes();
  initPlates();
  initToc();
  initNav();
  initNumerals();
  initLinks();
  route(false);
  window.addEventListener('hashchange', () => route(true));
  const mapSec = $('#map');
  const mo = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { mo.disconnect(); startMap(); } }, { rootMargin: '1200px 0px' });
  mo.observe(mapSec);
}
if (document.fonts && document.fonts.load) {
  Promise.race([document.fonts.load('16px "Nodus Five"'), new Promise(r => setTimeout(r, 1500))]).then(start, start);
} else start();
})();
