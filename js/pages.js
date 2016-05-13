var pages = {
   home:{
      border:'#0e0e1e',
      fontIndex:0,
      thumbs:[
         {thumb:"home/projects", page:'projects', text:'projects'},
         {thumb:"home/cv",       url:'./cv.html', text:'curriculum vitae'}
      ]},
   projects:{
      fontIndex:0,
      thumbs:[
         {thumb:"projects/kiki",        page:'kiki',  text:'kiki the nanobot'},
         {thumb:"projects/web",         page:'web',   text:'web projects'},
         {thumb:"projects/3d",          page:'3d',    text:'3d models'},
         {thumb:"projects/krank",       page:'krank'},
         {thumb:"projects/kraut",       page:'kraut'},
         {thumb:"projects/paint",       page:'paint'},
         {thumb:"projects/krix",        page:'krix'},
         {thumb:"projects/misc",        page:'misc'},
         {thumb:"projects/electronics", page:'electronics'},
      ]},
   misc:{
      thumbs:[
         {thumb:"misc/krap",       link:'krap',     url:'http://monsterkodi.net/misc/krap'},
         {thumb:"misc/koogel",     link:'koogel',   url:'http://monsterkodi.net/koogel'},
         {thumb:"misc/k",          link:'k',        url:'http://monsterkodi.net/misc/k'},
         {thumb:"misc/kork",       link:'kork',     url:'http://kork.sf.net'},
         {thumb:"misc/kodisein",   link:'kodisein', url:'http://kodisein.sf.net'},
         {thumb:"misc/mp3ql",      link:'mp3ql',    url:'http://mp3ql.sf.net'},
         {thumb:"misc/krieg",      link:'krieg',    url:'http://monsterkodi.net/misc/krieg/'},
         {thumb:"misc/krkkl",      link:'krkkl',    page:'krkkl'}
      ]},
   krkkl:{
      thumbs:[
         {thumb:"krkkl/krkkl1",   text:'screenshot',      view:'img/krkkl/krkkl_1.png'},
         {thumb:"krkkl/krkkl2",   text:'screenshot',      view:'img/krkkl/krkkl_2.png'},
         {thumb:"krkkl/krkkl3",   text:'screenshot',      view:'img/krkkl/krkkl_3.png'},
         {thumb:"krkkl/krkkl4",   text:'demo',            url:'/misc/krkkl/krkkl.html'},
         {thumb:"krkkl/krkkl5",   text:'screenshot',      view:'img/krkkl/krkkl_5.png'},
         {thumb:"krkkl/krkkl6",   text:'screenshot',      view:'img/krkkl/krkkl_6.png'},
         {thumb:"misc/zip",       text:'mac screensaver', url:'img/krkkl/Krkkl.saver.zip'}
      ]},
   paint:{
      fontIndex:1,
      border:'#222222',
      thumbs:[
         {thumb: "paint/blue",          text:'blue',            view:'img/paint/blue.png'},
         {thumb: "paint/pink",          text:'pink',            view:'img/paint/pink.png'},
         {thumb: "paint/hiro_l",        text:'hiro l',          view:'img/paint/hiro_l.png'},
         {thumb: "paint/hiro_r",        text:'hiro r',          view:'img/paint/hiro_r.png'},
         {thumb: "paint/long",          text:'long',            view:'img/paint/long.png'},
         {thumb: "paint/shell",         text:'shell',           view:'img/paint/shell.png'},
         {thumb: "paint/trefoil",       text:'trefoil',         view:'img/paint/trefoil.jpg'},
         {thumb: "paint/eye",           text:'eye',             view:'img/paint/eye.jpg'},
         {thumb: "paint/sirpinsky",     text:'sirpinsky',       view:'img/paint/sirpinsky.jpg'},
         {thumb: "paint/icosahedron",   text:'icosahedron',     view:'img/paint/icosahedron.jpg'},
         {thumb: "paint/pentagon",      text:'pentagon',        view:'img/paint/pentagon.jpg'},
         {thumb: "paint/rgb",           text:'rgb',             view:'img/paint/rgb.jpg'},
         {thumb: "paint/cubes",         text:'cubes',           view:'img/paint/cubes.jpg'},
         {thumb: "paint/foetus",        text:'foetus',          view:'img/paint/foetus.jpg'},
         {thumb: "paint/dodecahedron",  text:'dodecahedron',    view:'img/paint/dodecahedron.jpg'},
         {thumb: "paint/colorblind",    text:'colorblind',      view:'img/paint/colorblind.jpg'}
      ]},
   kraut:{
      thumbs:[
         {thumb:"kraut/kraut",   link:'kraut homepage', url:'http://monsterkodi.net/kraut/'},
         {thumb:"kraut/kraut_1", link:'kraut homepage', url:'http://monsterkodi.net/kraut/'},
         {thumb:"kraut/kraut_2", link:'kraut homepage', url:'http://monsterkodi.net/kraut/'},
         {thumb:"kraut/kraut_4", link:'kraut homepage', url:'http://monsterkodi.net/kraut/', textstyle:'image_l_s'},
         {thumb:"kraut/kraut_5", link:'kraut homepage', url:'http://monsterkodi.net/kraut/', textstyle:'image_l_s'},
         {thumb:"kraut/kraut_3", link:'kraut home',     url:'http://monsterkodi.net/kraut/', textstyle:'image_l_xs'}
      ]},
   krank:{
      thumbs:[
         {thumb:"krank/krank_1", link:'krank homepage', url:'http://krank.sourceforge.net/'},
         {thumb:"krank/krank_2", link:'krank homepage', url:'http://krank.sourceforge.net/'},
         {thumb:"krank/krank_3", link:'krank homepage', url:'http://krank.sourceforge.net/'},
         {thumb:"krank/krank_5", link:'krank homepage', url:'http://krank.sourceforge.net/'},
         {thumb:"krank/krank_4", link:'krank homepage', url:'http://krank.sourceforge.net/', textstyle:'image_l_s'},
         {thumb:"krank/krank_6", link:'krank homepage', url:'http://krank.sourceforge.net/', textstyle:'image_l_xs'}
      ]},
   kiki:{
      thumbs:[
         {thumb:"kiki/kiki_1", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_2", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_3", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_4", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_5", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_6", link:'kiki homepage', url:'http://kiki.sourceforge.net/'},
         {thumb:"kiki/kiki_7", link:'kiki homepage', url:'http://kiki.sourceforge.net/'}
      ]},
   krix:{
      thumbs:[
         {thumb:"krix/album",      text:'album',       view:'img/krix/album.png'},
         {thumb:"krix/artists",    text:'artists',     view:'img/krix/artists.png'},
         {thumb:"krix/screenshot", text:'krix',        view:'img/krix/screenshot.png'},
         {thumb:"krix/fullscreen", text:'fullscreen',  view:'img/krix/fullscreen.png'},
         {thumb:"krix/playlist",   text:'playlist',    view:'img/krix/playlist.png'},
         {thumb:"krix/comparison", text:'comparison',  view:'img/krix/comparison.png'},
         {thumb:"krix/prefs",      text:'preferences', view:'img/krix/prefs.png'},
         {thumb:"projects/krix",   link:'krix home',    url:'http://krix.sf.net'},
      ]},
   web:{
      fontIndex:1,
      thumbs:[
         {thumb:"web/immerwinter", link:'immerwinter.org',          url:'http://immerwinter.org'},
         {thumb:"web/parakapa",    link:'parasitaere kapazitaeten', url:'http://monsterkodi.net/parasitaere-kapazitaeten'},
         {thumb:"web/klogger",     link:'klogger homepage',         url:'http://monsterkodi.net/klogger'},
         {thumb:"web/kodisampler", link:'kodisampler',              url:'http://monsterkodi.net/kodisampler'}
      ]},
   electronics:{
      fontIndex:1,
      border:'#1d1300',
      thumbs:[
         {thumb:"electronic/dispenser1",  text:'dispenser',       page:'dispenser'},
         {thumb:"electronic/dds",         text:'dds',             view:'img/electronics/dds1.jpg'},
         {thumb:"electronic/etools",      text:'tools',           page:'etools'},
         {thumb:"electronic/clock",       text:'clock',           view:'img/electronics/clock1.jpg'},
         {thumb:"electronic/lightcube",   text:'lightcube',       view:'img/electronics/lightcube1.jpg'},
         {thumb:"electronic/amp6",        text:'amp',             page:'amp'},
         {thumb:"electronic/wip",         text:'wip',             page:'wip'}
      ]},
   '3d':{
      fontIndex:1,
      thumbs:[
         {thumb:"3d/elk",      text:'elk with flower', scrollColor:'945e23', view:'img/3d/elk.png'},
         {thumb:"3d/krap",     text:'krap',            scrollColor:'ffc600', view:'img/3d/krap.png'},
         {thumb:"3d/worm",     text:'worm',            scrollColor:'00711f', view:'img/3d/worm.png'},
         {thumb:"3d/kalamari", text:'kalamari',        scrollColor:'3f3965', view:'img/3d/kalamari.png'},
         {thumb:"3d/kerl",     text:'kerl',            scrollColor:'922604', view:'img/3d/kerl.png'},
         {thumb:"3d/kajak",    text:'kajak',           scrollColor:'ffc600', view:'img/3d/kajak.png'}
      ]},
   '3d_print':{
      fontIndex:1,
      thumbs:[
         {thumb:"3d/elk_print",   text:'elk with flower', scrollColor:'945e23', view:'img/3d/elk_3000x3000.jpg'},
         {thumb:"3d/krap",        text:'krap',            scrollColor:'ffc600', view:'img/3d/krap_3000x3000.jpg'},
         {thumb:"3d/krap_single", text:'krap single',     scrollColor:'ffc600', view:'img/3d/krap_single_3000x3000.jpg'},
         {thumb:"3d/worm_print",  text:'worm',            scrollColor:'00711f', view:'img/3d/worm_3000x3000.jpg'},
         {thumb:"3d/kerl_print",  text:'kerl',            scrollColor:'922604', view:'img/3d/kerl_3000x3000.jpg'},
         {thumb:"3d/kajak_print", text:'kajak',           scrollColor:'ffc600', view:'img/3d/kajak_3000x3000.jpg'}
      ]},
   'hamburg':{
      fontIndex:1,
      thumbs:[
         {thumb:"hamburg/regal1",   text:'regal1', scrollColor:'945e23', view:'img/hamburg/regal1.jpg'},
         {thumb:"hamburg/regal6",   text:'regal6', scrollColor:'945e23', view:'img/hamburg/regal6.jpg'},
         {thumb:"hamburg/lampe1",   text:'lampe1', scrollColor:'945e23', view:'img/hamburg/lampe1.png'},
         {thumb:"hamburg/lampe2",   text:'lampe2', scrollColor:'945e23', view:'img/hamburg/lampe2.png'},
         {thumb:"hamburg/arbeitsplatz",  text:'arbeitsplatz',  scrollColor:'945e23', view:'img/hamburg/arbeitsplatz.png'},
         {thumb:"hamburg/arbeitsplatz2", text:'arbeitsplatz2', scrollColor:'945e23', view:'img/hamburg/arbeitsplatz2.jpg'}
      ]},
   'yukon':{
      fontIndex:1,
      thumbs:[
         {thumb:"yukon/yukon_river02",   text:'river', scrollColor:'945e23', page:'yukon_river'},
         {thumb:"yukon/yukon_camp06",    text:'camp',  scrollColor:'945e23', page:'yukon_camp'},
         {thumb:"yukon/yukon_misc04",    text:'misc',  scrollColor:'945e23', page:'yukon_misc'},
         {thumb:"yukon/yukon_food05",    text:'food',  scrollColor:'945e23', page:'yukon_food'},
      ]},
   'yukon_river':{
      fontIndex:1,
      thumbs:[
         {thumb:"yukon/yukon_river01",   text:'river01', scrollColor:'945e23', view:'img/yukon/yukon_river01.jpg'},
         {thumb:"yukon/yukon_river02",   text:'river02', scrollColor:'945e23', view:'img/yukon/yukon_river02.jpg'},
         {thumb:"yukon/yukon_river03",   text:'river03', scrollColor:'945e23', view:'img/yukon/yukon_river03.jpg'},
         {thumb:"yukon/yukon_river04",   text:'river04', scrollColor:'945e23', view:'img/yukon/yukon_river04.jpg'},
         {thumb:"yukon/yukon_river05",   text:'river05', scrollColor:'945e23', view:'img/yukon/yukon_river05.jpg'},
         {thumb:"yukon/yukon_river06",   text:'river06', scrollColor:'945e23', view:'img/yukon/yukon_river06.jpg'},
         {thumb:"yukon/yukon_river07",   text:'river07', scrollColor:'945e23', view:'img/yukon/yukon_river07.jpg'},
         {thumb:"yukon/yukon_river08",   text:'river08', scrollColor:'945e23', view:'img/yukon/yukon_river08.jpg'},
         {thumb:"yukon/yukon_river09",   text:'river09', scrollColor:'945e23', view:'img/yukon/yukon_river09.jpg'},
         {thumb:"yukon/yukon_river10",   text:'river10', scrollColor:'945e23', view:'img/yukon/yukon_river10.jpg'},
         {thumb:"yukon/yukon_river11",   text:'river11', scrollColor:'945e23', view:'img/yukon/yukon_river11.jpg'},
         {thumb:"yukon/yukon_river12",   text:'river12', scrollColor:'945e23', view:'img/yukon/yukon_river12.jpg'},
         {thumb:"yukon/yukon_river13",   text:'river13', scrollColor:'945e23', view:'img/yukon/yukon_river13.jpg'},
         {thumb:"yukon/yukon_river14",   text:'river14', scrollColor:'945e23', view:'img/yukon/yukon_river14.jpg'},
         {thumb:"yukon/yukon_river15",   text:'river15', scrollColor:'945e23', view:'img/yukon/yukon_river15.jpg'},
         {thumb:"yukon/yukon_river16",   text:'river16', scrollColor:'945e23', view:'img/yukon/yukon_river16.jpg'},
      ]},
   'yukon_camp':{
      fontIndex:1,
      thumbs:[
         {thumb:"yukon/yukon_camp01",   text:'camp01', scrollColor:'945e23', view:'img/yukon/yukon_camp01.jpg'},
         {thumb:"yukon/yukon_camp02",   text:'camp02', scrollColor:'945e23', view:'img/yukon/yukon_camp02.jpg'},
         {thumb:"yukon/yukon_camp03",   text:'camp03', scrollColor:'945e23', view:'img/yukon/yukon_camp03.jpg'},
         {thumb:"yukon/yukon_camp04",   text:'camp04', scrollColor:'945e23', view:'img/yukon/yukon_camp04.jpg'},
         {thumb:"yukon/yukon_camp05",   text:'camp05', scrollColor:'945e23', view:'img/yukon/yukon_camp05.jpg'},
         {thumb:"yukon/yukon_camp06",   text:'camp06', scrollColor:'945e23', view:'img/yukon/yukon_camp06.jpg'},
         {thumb:"yukon/yukon_camp07",   text:'camp07', scrollColor:'945e23', view:'img/yukon/yukon_camp07.jpg'},
         {thumb:"yukon/yukon_camp08",   text:'camp08', scrollColor:'945e23', view:'img/yukon/yukon_camp08.jpg'},
         {thumb:"yukon/yukon_camp09",   text:'camp09', scrollColor:'945e23', view:'img/yukon/yukon_camp09.jpg'},
         {thumb:"yukon/yukon_camp10",   text:'camp10', scrollColor:'945e23', view:'img/yukon/yukon_camp10.jpg'},
         {thumb:"yukon/yukon_camp11",   text:'camp11', scrollColor:'945e23', view:'img/yukon/yukon_camp11.jpg'},
      ]},
   'yukon_misc':{
      fontIndex:1,
      thumbs:[
         {thumb:"yukon/yukon_misc01",   text:'misc01', scrollColor:'945e23', view:'img/yukon/yukon_misc01.jpg'},
         {thumb:"yukon/yukon_misc02",   text:'misc02', scrollColor:'945e23', view:'img/yukon/yukon_misc02.jpg'},
         {thumb:"yukon/yukon_misc03",   text:'misc03', scrollColor:'945e23', view:'img/yukon/yukon_misc03.jpg'},
         {thumb:"yukon/yukon_misc04",   text:'misc04', scrollColor:'945e23', view:'img/yukon/yukon_misc04.jpg'},
         {thumb:"yukon/yukon_misc05",   text:'misc05', scrollColor:'945e23', view:'img/yukon/yukon_misc05.jpg'},
         {thumb:"yukon/yukon_misc06",   text:'misc06', scrollColor:'945e23', view:'img/yukon/yukon_misc06.jpg'},
         {thumb:"yukon/yukon_misc07",   text:'misc07', scrollColor:'945e23', view:'img/yukon/yukon_misc07.jpg'},
         {thumb:"yukon/yukon_misc08",   text:'misc08', scrollColor:'945e23', view:'img/yukon/yukon_misc08.jpg'},
         {thumb:"yukon/yukon_misc09",   text:'misc09', scrollColor:'945e23', view:'img/yukon/yukon_misc09.jpg'},
         {thumb:"yukon/yukon_misc10",   text:'misc10', scrollColor:'945e23', view:'img/yukon/yukon_misc10.jpg'},
         {thumb:"yukon/yukon_misc11",   text:'misc11', scrollColor:'945e23', view:'img/yukon/yukon_misc11.jpg'},
         {thumb:"yukon/yukon_misc12",   text:'misc12', scrollColor:'945e23', view:'img/yukon/yukon_misc12.jpg'},
      ]},
   'yukon_food':{
      fontIndex:1,
      thumbs:[
         {thumb:"yukon/yukon_cook01",   text:'cook01', scrollColor:'945e23', view:'img/yukon/yukon_cook01.jpg'},
         {thumb:"yukon/yukon_cook02",   text:'cook02', scrollColor:'945e23', view:'img/yukon/yukon_cook02.jpg'},
         {thumb:"yukon/yukon_food01",   text:'food01', scrollColor:'945e23', view:'img/yukon/yukon_food01.jpg'},
         {thumb:"yukon/yukon_food02",   text:'food02', scrollColor:'945e23', view:'img/yukon/yukon_food02.jpg'},
         {thumb:"yukon/yukon_food03",   text:'food03', scrollColor:'945e23', view:'img/yukon/yukon_food03.jpg'},
         {thumb:"yukon/yukon_food04",   text:'food04', scrollColor:'945e23', view:'img/yukon/yukon_food04.jpg'},
         {thumb:"yukon/yukon_food05",   text:'food05', scrollColor:'945e23', view:'img/yukon/yukon_food05.jpg'},
         {thumb:"yukon/yukon_food06",   text:'food06', scrollColor:'945e23', view:'img/yukon/yukon_food06.jpg'},
         {thumb:"yukon/yukon_food07",   text:'food07', scrollColor:'945e23', view:'img/yukon/yukon_food07.jpg'},
         {thumb:"yukon/yukon_food08",   text:'food08', scrollColor:'945e23', view:'img/yukon/yukon_food08.jpg'},
         {thumb:"yukon/yukon_food09",   text:'food09', scrollColor:'945e23', view:'img/yukon/yukon_food09.jpg'},
         {thumb:"yukon/yukon_food10",   text:'food10', scrollColor:'945e23', view:'img/yukon/yukon_food10.jpg'},
         {thumb:"yukon/yukon_food11",   text:'food11', scrollColor:'945e23', view:'img/yukon/yukon_food11.jpg'},
      ]},
   'dispenser':{
      fontIndex:1,
      thumbs:[
         {thumb:"electronic/dispenser1b", text:'disp1',     view:'img/electronics/dispenser1.jpg'},
         {thumb:"electronic/dispenser2",  text:'disp2',     view:'img/electronics/dispenser2.jpg'},
         {thumb:"electronic/dispenser3",  text:'disp3',     view:'img/electronics/dispenser3.jpg'},
      ]},
   'etools':{
      fontIndex:1,
      thumbs:[
         {thumb:"electronic/negarail",    text:'negarail',        view:'img/electronics/negarail.jpg'},
         {thumb:"electronic/coilvoltage", text:'coilvoltage',     view:'img/electronics/coilvoltage.png'},
         {thumb:"electronic/toolchain",   text:'toolchain',       view:'img/electronics/toolchain.jpg'},
      ]},
   'amp':{
      fontIndex:1,
      thumbs:[
         {thumb:"electronic/amp1",   text:'amp1', scrollColor:'945e23', view:'img/electronics/amp1.jpg'},
         {thumb:"electronic/amp2",   text:'amp2', scrollColor:'945e23', view:'img/electronics/amp2.jpg'},
         {thumb:"electronic/amp3",   text:'amp3', scrollColor:'945e23', view:'img/electronics/amp3.jpg'},
         {thumb:"electronic/amp4",   text:'amp4', scrollColor:'945e23', view:'img/electronics/amp4.jpg'},
         {thumb:"electronic/amp5",   text:'amp5', scrollColor:'945e23', view:'img/electronics/amp5.jpg'},
         {thumb:"electronic/amp6",   text:'amp6', scrollColor:'945e23', view:'img/electronics/amp6.jpg'},
         {thumb:"electronic/amp7",   text:'amp7', scrollColor:'945e23', view:'img/electronics/amp7.jpg'},
         {thumb:"electronic/amp8",   text:'amp8', scrollColor:'945e23', view:'img/electronics/amp8.jpg'},
         {thumb:"electronic/amp9",   text:'amp9', scrollColor:'945e23', view:'img/electronics/amp9.jpg'}
      ]},
   'wip':{
      fontIndex:1,
      thumbs:[
         {thumb:"electronic/supply2_0",   text:'supply2_0', scrollColor:'945e23', view:'img/electronics/supply2_0.jpg'},
         {thumb:"electronic/supply2_1",   text:'supply2_1', scrollColor:'945e23', view:'img/electronics/supply2_1.jpg'},
         {thumb:"electronic/supply2_2",   text:'supply2_2', scrollColor:'945e23', view:'img/electronics/supply2_2.jpg'},
         {thumb:"electronic/supply2_3",   text:'supply2_3', scrollColor:'945e23', view:'img/electronics/supply2_3.jpg'},
         {thumb:"electronic/preamp_0",   text:'preamp_0', scrollColor:'945e23', view:'img/electronics/preamp_0.jpg'},
         {thumb:"electronic/preamp_1",   text:'preamp_1', scrollColor:'945e23', view:'img/electronics/preamp_1.jpg'},
         {thumb:"electronic/preamp_2",   text:'preamp_2', scrollColor:'945e23', view:'img/electronics/preamp_2.jpg'}
      ]}
};
