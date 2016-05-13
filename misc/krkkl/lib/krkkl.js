/* start module: krkkl */
$pyjs['loaded_modules']['krkkl'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['krkkl']['__was_initialized__']) return $pyjs['loaded_modules']['krkkl'];
	var $m = $pyjs['loaded_modules']['krkkl'];
	$m['__repr__'] = function() { return '<module: krkkl>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'krkkl';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['json'] = $p['___import___']('json', null);
	$m['random'] = $p['___import___']('random', null);
	$p['__import_all__']('math', null, $m, null, false);
	$p['__import_all__']('time', null, $m, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['ListBox'] = $p['___import___']('pyjamas.ui.ListBox.ListBox', null, null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Color'] = $p['___import___']('pyjamas.Canvas.Color', null, null, false);
	$m['GWTCanvas'] = $p['___import___']('pyjamas.Canvas.GWTCanvas.GWTCanvas', null, null, false);
	$m['Krkkl'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'krkkl';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['canvas'] = null;
			self['run'] = false;
			self['width'] = 400;
			self['height'] = 400;
			self['demoName'] = 'Krkkl';
			self['count'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub3,$sub2,$sub1,$mul4,$mul3,$mul2,$mul1,$sub4;
			self['width'] = $p['__op_sub']($sub1=$m['RootPanel']()['getClientWidth'](),$sub2=(typeof ($mul1=2)==typeof ($mul2=$m['RootPanel']()['getAbsoluteLeft']()) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
			self['height'] = $p['__op_sub']($sub3=$m['RootPanel']()['getClientHeight'](),$sub4=(typeof ($mul3=2)==typeof ($mul4=$m['RootPanel']()['getAbsoluteTop']()) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			self['canvas'] = $m['GWTCanvas']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['canvas']['addStyleName']('gwt-canvas');
			$m['RootPanel']()['add']($p['getattr'](self, 'canvas'));
			$p['printFunc']([$p['sprintf']('onModuleLoad %d x %d', $p['tuple']([$p['getattr'](self, 'width'), $p['getattr'](self, 'height')]))], 1);
			$p['getattr']($m['Window']['getDocumentRoot'](), 'style')['backgroundColor'] = '#111';
			self['canvas']['setBackgroundColor']($p['getattr']($m['Color'], 'BLACK'));
			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['initConfig']();
			$m['Timer'](1, self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'demoName');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $sub8,$mul8,$mul7,$mul6,$mul5,$sub7,$sub6,$sub5;
			self['width'] = $p['__op_sub']($sub5=$m['RootPanel']()['getClientWidth'](),$sub6=(typeof ($mul5=2)==typeof ($mul6=$m['RootPanel']()['getAbsoluteLeft']()) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)));
			self['height'] = $p['__op_sub']($sub7=$m['RootPanel']()['getClientHeight'](),$sub8=(typeof ($mul7=2)==typeof ($mul8=$m['RootPanel']()['getAbsoluteTop']()) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
			self['canvas']['resize']($p['getattr'](self, 'width'), $p['getattr'](self, 'height'));
			self['initConfig']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('renderingLoop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,$add1;
			self['canvas']['saveContext']();
			self['canvas']['setFont']('bold 16px Verdana');
			self['canvas']['setFillStyle']($p['getattr']($m['Color'], 'WHITE'));
			self['canvas']['fillText']($p['sprintf']('Krkkl %s %d %d', $p['tuple']([$p['getattr'](self, 'count'), $p['getattr'](self, 'width'), $p['getattr'](self, 'height')])), 0, 20);
			self['count'] = $p['__op_add']($add1=$p['getattr'](self, 'count'),$add2=1);
			self['canvas']['restoreContext']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['renderingLoop'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(timer) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
			}

			self['animateOneFrame']();
			timer['schedule'](30);
			return null;
		}
	, 1, [null,null,['self'],['timer']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('randint', function(v1, v2) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				v1 = arguments[1];
				v2 = arguments[2];
			}

			return $m['random']['randint'](v1, v2);
		}
	, 1, [null,null,['self'],['v1'],['v2']]);
		$cls_definition['randint'] = $method;
		$method = $pyjs__bind_method2('initConfig', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,$iter1_type,$div10,$div11,$div12,$sub9,$iter1_array,$iter1_nextval,$sub12,$sub11,$sub10,$div8,$div9,$mul9,$div2,$div3,$div1,$div6,$div7,$div4,$div5,$mul14,$mul13,$mul12,$mul11,$mul10,k,$add3,$add6,$iter1_idx,$add4,$add5;
			self['clear'] = true;
			self['speed'] = 1;
			self['colors'] = $p['dict']([['type', 'smooth']]);
			self['keepdir'] = $p['list']([0.2, 0.2, 0.4, 0.2, 0.2, 0.4]);
			self['numrows'] = $m['random']['randint'](40, 180);
			self['reset'] = 'wrap';
			self['colorinc'] = $m['random']['uniform'](0.2, 3.0);
			self['colors'] = $p['dict']([['type', 'smooth']]);
			self['colorindex'] = 0;
			self['colorfade'] = 100;
			self['thiscolor'] = $p['list']([0.0, 0.0, 0.0]);
			self['nextcolor'] = $p['list']([0.0, 0.0, 0.0]);
			self['resetcolor'] = $p['list']([0.0, 0.0, 0.0]);
			self['lastPos'] = $m['random']['randint'](0, 5);
			self['sizey'] = (typeof ($div1=$p['getattr'](self, 'height'))==typeof ($div2=$p['getattr'](self, 'numrows')) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			self['sizex'] = (typeof ($mul9=(typeof sin == "undefined"?$m['sin']:sin)((typeof ($div3=(typeof pi == "undefined"?$m['pi']:pi))==typeof ($div4=3) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4))))==typeof ($mul10=$p['getattr'](self, 'sizey')) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10));
			self['steps'] = $p['__op_add']($add3=$p['float_int']($p['__op_sub']($sub9=(typeof sqrt == "undefined"?$m['sqrt']:sqrt)((typeof sqrt == "undefined"?$m['sqrt']:sqrt)($p['getattr'](self, 'numrows'))),$sub10=1)),$add4=1);
			self['steps'] = $p['float_int']($p['__op_sub']($sub11=$p['pow'](2, $p['getattr'](self, 'steps')),$sub12=1));
			self['steps'] = (typeof ($mul11=$p['getattr'](self, 'steps'))==typeof ($mul12=$p['getattr'](self, 'steps')) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12));
			self['steps'] = $p['max'](1, $p['float_int']((typeof ($mul13=$p['getattr'](self, 'speed'))==typeof ($mul14=$p['getattr'](self, 'steps')) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14))));
			self['nx'] = $p['float_int']((typeof ($div5=$p['getattr'](self, 'width'))==typeof ($div6=$p['getattr'](self, 'sizex')) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6)));
			self['ny'] = $p['float_int']((typeof ($div7=$p['getattr'](self, 'height'))==typeof ($div8=$p['getattr'](self, 'sizey')) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8)));
			self['cx'] = $p['float_int']((typeof ($div9=$p['getattr'](self, 'nx'))==typeof ($div10=2) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)));
			self['cy'] = $p['float_int']((typeof ($div11=$p['getattr'](self, 'ny'))==typeof ($div12=2) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)));
			self['x'] = $p['getattr'](self, 'cx');
			self['y'] = $p['getattr'](self, 'cy');
			self['r'] = $p['getattr'](self, 'resetcolor')['__getitem__'](0);
			self['g'] = $p['getattr'](self, 'resetcolor')['__getitem__'](1);
			self['b'] = $p['getattr'](self, 'resetcolor')['__getitem__'](2);
			$p['printFunc'](['config={'], 1);
			$iter1_iter = $p['list'](['reset', 'colorinc', 'colors', 'numrows', 'keepdir', 'speed']);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				k = $iter1_nextval['$nextval'];
				$p['printFunc']([$p['sprintf']("'%s': %s,", $p['tuple']([k, $p['__op_add']($add5='',$add6=$m['json']['dumps']($p['getattr'](self, k)))]))], 1);
			}
			$p['printFunc'](['}'], 1);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['initConfig'] = $method;
		$method = $pyjs__bind_method2('drawCube', function(xi, yi, c, skip) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xi = arguments[1];
				yi = arguments[2];
				c = arguments[3];
				skip = arguments[4];
			}
			var $sub22,$sub23,$sub20,$sub26,$sub27,$sub24,$sub25,$sub28,$sub29,$mul30,$sub21,$mod1,$mod2,$mul34,$div14,$div15,$add22,$div13,$mul28,$mul29,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$sub30,$sub19,$sub18,$sub13,$sub17,$mul15,$sub15,$sub14,$add14,$mul35,$sub16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$mul17,$mul16,$mul36,$add15,h,$add16,$mul19,$mul18,$add21,s,$add7,w,$add20,y,x,$add8,$add9,$mul31,$div16,$mul33,$mul32;
			h = $p['getattr'](self, 'sizey');
			w = $p['getattr'](self, 'sizex');
			s = (typeof ($div13=h)==typeof ($div14=2) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14));
			x = (typeof ($mul15=xi)==typeof ($mul16=w) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16));
			y = $p['__op_sub']($sub13=$p['getattr'](self, 'height'),$sub14=(typeof ($mul17=yi)==typeof ($mul18=h) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)));
			if ($p['bool']($p['op_eq']((typeof ($mod1=xi)==typeof ($mod2=2) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)), 1))) {
				y = $p['__op_add']($add7=y,$add8=(typeof ($div15=h)==typeof ($div16=2) && typeof $div15=='number' && $div16 !== 0?
					$div15/$div16:
					$p['op_div']($div15,$div16)));
			}
			if ($p['bool'](!$p['op_eq'](skip, 0))) {
				self['canvas']['setFillStyle']($m['Color']['Color']((typeof ($mul19=c['__getitem__'](0))==typeof ($mul20=255) && typeof $mul19=='number'?
					$mul19*$mul20:
					$p['op_mul']($mul19,$mul20)), (typeof ($mul21=c['__getitem__'](1))==typeof ($mul22=255) && typeof $mul21=='number'?
					$mul21*$mul22:
					$p['op_mul']($mul21,$mul22)), (typeof ($mul23=c['__getitem__'](2))==typeof ($mul24=255) && typeof $mul23=='number'?
					$mul23*$mul24:
					$p['op_mul']($mul23,$mul24))));
				self['canvas']['beginPath']();
				self['canvas']['moveTo'](x, y);
				self['canvas']['lineTo']($p['__op_add']($add9=x,$add10=w), $p['__op_sub']($sub15=y,$sub16=s));
				self['canvas']['lineTo'](x, $p['__op_sub']($sub17=y,$sub18=h));
				self['canvas']['lineTo']($p['__op_sub']($sub19=x,$sub20=w), $p['__op_sub']($sub21=y,$sub22=s));
				self['canvas']['closePath']();
				self['canvas']['fill']();
			}
			if ($p['bool'](!$p['op_eq'](skip, 1))) {
				self['canvas']['setFillStyle']($m['Color']['Color']((typeof ($mul25=c['__getitem__'](0))==typeof ($mul26=155) && typeof $mul25=='number'?
					$mul25*$mul26:
					$p['op_mul']($mul25,$mul26)), (typeof ($mul27=c['__getitem__'](1))==typeof ($mul28=155) && typeof $mul27=='number'?
					$mul27*$mul28:
					$p['op_mul']($mul27,$mul28)), (typeof ($mul29=c['__getitem__'](2))==typeof ($mul30=155) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30))));
				self['canvas']['beginPath']();
				self['canvas']['moveTo'](x, y);
				self['canvas']['lineTo']($p['__op_sub']($sub23=x,$sub24=w), $p['__op_sub']($sub25=y,$sub26=s));
				self['canvas']['lineTo']($p['__op_sub']($sub27=x,$sub28=w), $p['__op_add']($add11=y,$add12=s));
				self['canvas']['lineTo'](x, $p['__op_add']($add13=y,$add14=h));
				self['canvas']['closePath']();
				self['canvas']['fill']();
			}
			if ($p['bool'](!$p['op_eq'](skip, 2))) {
				self['canvas']['setFillStyle']($m['Color']['Color']((typeof ($mul31=c['__getitem__'](0))==typeof ($mul32=55) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32)), (typeof ($mul33=c['__getitem__'](1))==typeof ($mul34=55) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34)), (typeof ($mul35=c['__getitem__'](2))==typeof ($mul36=55) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36))));
				self['canvas']['beginPath']();
				self['canvas']['moveTo'](x, y);
				self['canvas']['lineTo']($p['__op_add']($add15=x,$add16=w), $p['__op_sub']($sub29=y,$sub30=s));
				self['canvas']['lineTo']($p['__op_add']($add17=x,$add18=w), $p['__op_add']($add19=y,$add20=s));
				self['canvas']['lineTo'](x, $p['__op_add']($add21=y,$add22=h));
				self['canvas']['closePath']();
				self['canvas']['fill']();
			}
			return null;
		}
	, 1, [null,null,['self'],['xi'],['yi'],['c'],['skip']]);
		$cls_definition['drawCube'] = $method;
		$method = $pyjs__bind_method2('nextColor', function(nextPos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nextPos = arguments[1];
			}
			var $mul50,$mul57,$mul56,$mul40,$add44,$mul41,$mod5,$mod4,$mod7,$mod6,$add27,$mod3,$sub40,$sub41,$sub42,$mul43,$sub43,$mod8,$sub45,$add28,$mul60,$add35,$mul48,$mul49,$mul64,$mul63,$mul44,$mul45,$mul47,$add25,$add24,$mul42,$add26,$mul55,$sub39,$sub46,$add43,nextindex,$sub44,$mul61,$sub31,$add29,$sub33,$sub32,$sub35,$sub34,$sub37,$sub36,$mul46,$sub38,$mul59,$add39,$add42,$mul51,$mul66,$mul62,$add38,$mul58,$add40,$add32,$mul52,$add30,$add31,$add36,$add37,$add34,$mul54,$mul53,$add41,$mul39,$mul38,$add33,$mul65,$mul37,$add23;
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'colors')['__getitem__']('type'), 'smooth'))) {
				self['smoothColor'](nextPos);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'colors')['__getitem__']('type'), 'random'))) {
				self['colorfade'] = $p['__op_add']($add23=$p['getattr'](self, 'colorfade'),$add24=$p['getattr'](self, 'colorinc'));
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'colorfade'), 100))|1) == 1))) {
					self['colorfade'] = $p['__op_sub']($sub31=$p['getattr'](self, 'colorfade'),$sub32=100);
					self['thiscolor'] = $p['getattr'](self, 'nextcolor');
					self['nextcolor'] = $p['list']([$m['random']['random'](), $m['random']['random'](), $m['random']['random']()]);
				}
				self['r'] = $p['__op_add']($add25=(typeof ($mul37=$p['getattr'](self, 'thiscolor')['__getitem__'](0))==typeof ($mul38=$p['__op_sub']($sub33=100,$sub34=$p['getattr'](self, 'colorfade'))) && typeof $mul37=='number'?
					$mul37*$mul38:
					$p['op_mul']($mul37,$mul38)),$add26=(typeof ($mul39=$p['getattr'](self, 'colorfade'))==typeof ($mul40=$p['getattr'](self, 'nextcolor')['__getitem__'](0)) && typeof $mul39=='number'?
					$mul39*$mul40:
					$p['op_mul']($mul39,$mul40)));
				self['g'] = $p['__op_add']($add27=(typeof ($mul41=$p['getattr'](self, 'thiscolor')['__getitem__'](1))==typeof ($mul42=$p['__op_sub']($sub35=100,$sub36=$p['getattr'](self, 'colorfade'))) && typeof $mul41=='number'?
					$mul41*$mul42:
					$p['op_mul']($mul41,$mul42)),$add28=(typeof ($mul43=$p['getattr'](self, 'colorfade'))==typeof ($mul44=$p['getattr'](self, 'nextcolor')['__getitem__'](1)) && typeof $mul43=='number'?
					$mul43*$mul44:
					$p['op_mul']($mul43,$mul44)));
				self['b'] = $p['__op_add']($add29=(typeof ($mul45=$p['getattr'](self, 'thiscolor')['__getitem__'](2))==typeof ($mul46=$p['__op_sub']($sub37=100,$sub38=$p['getattr'](self, 'colorfade'))) && typeof $mul45=='number'?
					$mul45*$mul46:
					$p['op_mul']($mul45,$mul46)),$add30=(typeof ($mul47=$p['getattr'](self, 'colorfade'))==typeof ($mul48=$p['getattr'](self, 'nextcolor')['__getitem__'](2)) && typeof $mul47=='number'?
					$mul47*$mul48:
					$p['op_mul']($mul47,$mul48)));
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'colors')['__getitem__']('type'), 'eval'))) {
				var $tupleassign1 = $p['__ass_unpack']((typeof eval == "undefined"?$m['eval']:eval)($p['getattr'](self, 'colors')['__getitem__']('eval')), 3, null);
				self['r'] = $tupleassign1[0];
				self['g'] = $tupleassign1[1];
				self['b'] = $tupleassign1[2];
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'colors')['__getitem__']('type'), 'list'))) {
				self['colorindex'] = (typeof ($mod3=$p['__op_add']($add31=$p['getattr'](self, 'colorindex'),$add32=1))==typeof ($mod4=$p['len']($p['getattr'](self, 'colors')['__getitem__']('list'))) && typeof $mod3=='number'?
					(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
					$p['op_mod']($mod3,$mod4));
				self['r'] = (typeof ($mul49=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](0))==typeof ($mul50=100) && typeof $mul49=='number'?
					$mul49*$mul50:
					$p['op_mul']($mul49,$mul50));
				self['g'] = (typeof ($mul51=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](1))==typeof ($mul52=100) && typeof $mul51=='number'?
					$mul51*$mul52:
					$p['op_mul']($mul51,$mul52));
				self['b'] = (typeof ($mul53=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](2))==typeof ($mul54=100) && typeof $mul53=='number'?
					$mul53*$mul54:
					$p['op_mul']($mul53,$mul54));
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'colors')['__getitem__']('type'), 'smoothlist'))) {
				self['colorfade'] = $p['__op_add']($add33=$p['getattr'](self, 'colorfade'),$add34=$p['getattr'](self, 'colorinc'));
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'colorfade'), 100) == 1))) {
					self['colorfade'] = $p['__op_sub']($sub39=$p['getattr'](self, 'colorfade'),$sub40=100);
					self['colorindex'] = (typeof ($mod5=$p['__op_add']($add35=$p['getattr'](self, 'colorindex'),$add36=1))==typeof ($mod6=$p['len']($p['getattr'](self, 'colors')['__getitem__']('list'))) && typeof $mod5=='number'?
						(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
						$p['op_mod']($mod5,$mod6));
				}
				nextindex = (typeof ($mod7=$p['__op_add']($add37=$p['getattr'](self, 'colorindex'),$add38=1))==typeof ($mod8=$p['len']($p['getattr'](self, 'colors')['__getitem__']('list'))) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8));
				self['r'] = $p['__op_add']($add39=(typeof ($mul55=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](0))==typeof ($mul56=$p['__op_sub']($sub41=100,$sub42=$p['getattr'](self, 'colorfade'))) && typeof $mul55=='number'?
					$mul55*$mul56:
					$p['op_mul']($mul55,$mul56)),$add40=(typeof ($mul57=$p['getattr'](self, 'colorfade'))==typeof ($mul58=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__'](nextindex)['__getitem__'](0)) && typeof $mul57=='number'?
					$mul57*$mul58:
					$p['op_mul']($mul57,$mul58)));
				self['g'] = $p['__op_add']($add41=(typeof ($mul59=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](1))==typeof ($mul60=$p['__op_sub']($sub43=100,$sub44=$p['getattr'](self, 'colorfade'))) && typeof $mul59=='number'?
					$mul59*$mul60:
					$p['op_mul']($mul59,$mul60)),$add42=(typeof ($mul61=$p['getattr'](self, 'colorfade'))==typeof ($mul62=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__'](nextindex)['__getitem__'](1)) && typeof $mul61=='number'?
					$mul61*$mul62:
					$p['op_mul']($mul61,$mul62)));
				self['b'] = $p['__op_add']($add43=(typeof ($mul63=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__']($p['getattr'](self, 'colorindex'))['__getitem__'](2))==typeof ($mul64=$p['__op_sub']($sub45=100,$sub46=$p['getattr'](self, 'colorfade'))) && typeof $mul63=='number'?
					$mul63*$mul64:
					$p['op_mul']($mul63,$mul64)),$add44=(typeof ($mul65=$p['getattr'](self, 'colorfade'))==typeof ($mul66=$p['getattr'](self, 'colors')['__getitem__']('list')['__getitem__'](nextindex)['__getitem__'](2)) && typeof $mul65=='number'?
					$mul65*$mul66:
					$p['op_mul']($mul65,$mul66)));
			}
			return null;
		}
	, 1, [null,null,['self'],['nextPos']]);
		$cls_definition['nextColor'] = $method;
		$method = $pyjs__bind_method2('smoothColor', function(nextPos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nextPos = arguments[1];
			}
			var $mod20,$sub57,ci,$sub56,$mod17,$sub48,$sub49,$mod16,$sub53,$mod9,$sub52,$mod13,$add49,$add48,$add47,$add46,$sub50,$sub47,$mod15,$mod14,$sub55,$sub54,$mod11,$mod10,$sub51,$mod12,$mod19,$mod18,$sub58,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add45;
			ci = $p['getattr'](self, 'colorinc');
			if ($p['bool']($p['op_eq'](nextPos, 0))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'b'), $p['__op_sub']($sub47=100,$sub48=ci)) == -1))) {
					self['b'] = (typeof ($mod9=$p['__op_add']($add45=$p['getattr'](self, 'b'),$add46=ci))==typeof ($mod10=100) && typeof $mod9=='number'?
						(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
						$p['op_mod']($mod9,$mod10));
				}
				else {
					self['b'] = 100;
				}
			}
			if ($p['bool']($p['op_eq'](nextPos, 1))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'r'), $p['__op_sub']($sub49=100,$sub50=ci)) == -1))) {
					self['r'] = (typeof ($mod11=$p['__op_add']($add47=$p['getattr'](self, 'r'),$add48=ci))==typeof ($mod12=100) && typeof $mod11=='number'?
						(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
						$p['op_mod']($mod11,$mod12));
				}
				else {
					self['r'] = 100;
				}
			}
			if ($p['bool']($p['op_eq'](nextPos, 2))) {
				if ($p['bool'](($p['cmp']($p['getattr'](self, 'g'), $p['__op_sub']($sub51=100,$sub52=ci)) == -1))) {
					self['g'] = (typeof ($mod13=$p['__op_add']($add49=$p['getattr'](self, 'g'),$add50=ci))==typeof ($mod14=100) && typeof $mod13=='number'?
						(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
						$p['op_mod']($mod13,$mod14));
				}
				else {
					self['g'] = 100;
				}
			}
			if ($p['bool']($p['op_eq'](nextPos, 3))) {
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'b'), ci))|1) == 1))) {
					self['b'] = (typeof ($mod15=$p['__op_sub']($sub53=$p['__op_add']($add51=$p['getattr'](self, 'b'),$add52=100),$sub54=ci))==typeof ($mod16=100) && typeof $mod15=='number'?
						(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
						$p['op_mod']($mod15,$mod16));
				}
				else {
					self['b'] = 0;
				}
			}
			if ($p['bool']($p['op_eq'](nextPos, 4))) {
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'r'), ci))|1) == 1))) {
					self['r'] = (typeof ($mod17=$p['__op_sub']($sub55=$p['__op_add']($add53=$p['getattr'](self, 'r'),$add54=100),$sub56=ci))==typeof ($mod18=100) && typeof $mod17=='number'?
						(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
						$p['op_mod']($mod17,$mod18));
				}
				else {
					self['r'] = 0;
				}
			}
			if ($p['bool']($p['op_eq'](nextPos, 5))) {
				if ($p['bool'](((($p['cmp']($p['getattr'](self, 'g'), ci))|1) == 1))) {
					self['g'] = (typeof ($mod19=$p['__op_sub']($sub57=$p['__op_add']($add55=$p['getattr'](self, 'g'),$add56=100),$sub58=ci))==typeof ($mod20=100) && typeof $mod19=='number'?
						(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
						$p['op_mod']($mod19,$mod20));
				}
				else {
					self['g'] = 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['nextPos']]);
		$cls_definition['smoothColor'] = $method;
		$method = $pyjs__bind_method2('nextCube', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod21,$mod22,$mod23,$mod24,$mod25,$mod26,$mod27,$mod28,skip,$sub83,$sub84,$sub80,$sub81,$sub68,$sub69,$sub66,$sub67,$sub64,$sub65,$sub62,$sub63,$sub60,$sub61,nextPos,$add64,$add66,$add61,$add60,$add63,$add62,$div17,$sub82,$add65,$or4,$or1,$or3,$or2,$sub59,$sub79,$sub78,$sub75,$sub74,$sub77,$sub76,$sub71,$sub70,$sub73,$sub72,$div21,$div20,$div22,$div18,$add57,$add58,$add59,$div19;
			skip = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			if ($p['bool'](($p['cmp']($m['random']['random'](), $p['getattr'](self, 'keepdir')['__getitem__']($p['getattr'](self, 'lastPos'))) == -1))) {
				nextPos = $p['getattr'](self, 'lastPos');
			}
			else if ($p['bool'](($p['cmp']($m['random']['random'](), $p['getattr'](self, 'keepdir')) == -1))) {
				nextPos = $p['getattr'](self, 'lastPos');
			}
			else {
				nextPos = $m['random']['randint'](0, 5);
			}
			self['lastPos'] = nextPos;
			if ($p['bool']($p['op_eq'](nextPos, 0))) {
				self['y'] = $p['__op_add']($add57=$p['getattr'](self, 'y'),$add58=1);
			}
			if ($p['bool']($p['op_eq'](nextPos, 1))) {
				if ($p['bool']($p['op_eq']((typeof ($mod21=$p['getattr'](self, 'x'))==typeof ($mod22=2) && typeof $mod21=='number'?
					(($mod21=$mod21%$mod22)<0&&$mod22>0?$mod21+$mod22:$mod21):
					$p['op_mod']($mod21,$mod22)), 1))) {
					self['y'] = $p['__op_sub']($sub59=$p['getattr'](self, 'y'),$sub60=1);
				}
				self['x'] = $p['__op_add']($add59=$p['getattr'](self, 'x'),$add60=1);
			}
			if ($p['bool']($p['op_eq'](nextPos, 2))) {
				if ($p['bool']($p['op_eq']((typeof ($mod23=$p['getattr'](self, 'x'))==typeof ($mod24=2) && typeof $mod23=='number'?
					(($mod23=$mod23%$mod24)<0&&$mod24>0?$mod23+$mod24:$mod23):
					$p['op_mod']($mod23,$mod24)), 1))) {
					self['y'] = $p['__op_sub']($sub61=$p['getattr'](self, 'y'),$sub62=1);
				}
				self['x'] = $p['__op_sub']($sub63=$p['getattr'](self, 'x'),$sub64=1);
			}
			if ($p['bool']($p['op_eq'](nextPos, 3))) {
				self['y'] = $p['__op_sub']($sub65=$p['getattr'](self, 'y'),$sub66=1);
				skip = 0;
			}
			if ($p['bool']($p['op_eq'](nextPos, 4))) {
				if ($p['bool']($p['op_eq']((typeof ($mod25=$p['getattr'](self, 'x'))==typeof ($mod26=2) && typeof $mod25=='number'?
					(($mod25=$mod25%$mod26)<0&&$mod26>0?$mod25+$mod26:$mod25):
					$p['op_mod']($mod25,$mod26)), 0))) {
					self['y'] = $p['__op_add']($add61=$p['getattr'](self, 'y'),$add62=1);
				}
				self['x'] = $p['__op_sub']($sub67=$p['getattr'](self, 'x'),$sub68=1);
				skip = 2;
			}
			if ($p['bool']($p['op_eq'](nextPos, 5))) {
				if ($p['bool']($p['op_eq']((typeof ($mod27=$p['getattr'](self, 'x'))==typeof ($mod28=2) && typeof $mod27=='number'?
					(($mod27=$mod27%$mod28)<0&&$mod28>0?$mod27+$mod28:$mod27):
					$p['op_mod']($mod27,$mod28)), 0))) {
					self['y'] = $p['__op_add']($add63=$p['getattr'](self, 'y'),$add64=1);
				}
				self['x'] = $p['__op_add']($add65=$p['getattr'](self, 'x'),$add66=1);
				skip = 1;
			}
			self['nextColor'](nextPos);
			if ($p['bool'](($p['bool']($or1=($p['cmp']($p['getattr'](self, 'x'), 1) == -1))?$or1:($p['bool']($or2=($p['cmp']($p['getattr'](self, 'y'), 2) == -1))?$or2:($p['bool']($or3=($p['cmp']($p['getattr'](self, 'x'), $p['__op_sub']($sub69=$p['getattr'](self, 'nx'),$sub70=1)) == 1))?$or3:($p['cmp']($p['getattr'](self, 'y'), $p['__op_sub']($sub71=$p['getattr'](self, 'ny'),$sub72=1)) == 1)))))) {
				$p['printFunc']([$p['sprintf']('%d,%d %s', $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'reset')]))], 1);
				if ($p['bool']($p['op_eq']($p['getattr'](self, 'reset'), 'center'))) {
					self['x'] = $p['getattr'](self, 'cx');
					self['y'] = $p['getattr'](self, 'cy');
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'reset'), 'random'))) {
					self['x'] = $m['random']['randint'](0, $p['__op_sub']($sub73=$p['getattr'](self, 'nx'),$sub74=1));
					self['y'] = $m['random']['randint'](0, $p['__op_sub']($sub75=$p['getattr'](self, 'ny'),$sub76=1));
				}
				else if ($p['bool']($p['op_eq']($p['getattr'](self, 'reset'), 'wrap'))) {
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), 1) == -1))) {
						self['x'] = $p['__op_sub']($sub77=$p['getattr'](self, 'nx'),$sub78=1);
					}
					else if ($p['bool'](($p['cmp']($p['getattr'](self, 'x'), $p['__op_sub']($sub79=$p['getattr'](self, 'nx'),$sub80=1)) == 1))) {
						self['x'] = 1;
					}
					if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), 2) == -1))) {
						self['y'] = $p['__op_sub']($sub81=$p['getattr'](self, 'ny'),$sub82=1);
					}
					else if ($p['bool'](($p['cmp']($p['getattr'](self, 'y'), $p['__op_sub']($sub83=$p['getattr'](self, 'ny'),$sub84=1)) == 1))) {
						self['y'] = 2;
					}
				}
				$p['printFunc']([$p['sprintf']('%d,%d %d %d', $p['tuple']([$p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['getattr'](self, 'nx'), $p['getattr'](self, 'ny')]))], 1);
				self['r'] = $p['getattr'](self, 'resetcolor')['__getitem__'](0);
				self['g'] = $p['getattr'](self, 'resetcolor')['__getitem__'](1);
				self['b'] = $p['getattr'](self, 'resetcolor')['__getitem__'](2);
				self['lastPos'] = $m['random']['randint'](0, 5);
			}
			self['drawCube']($p['getattr'](self, 'x'), $p['getattr'](self, 'y'), $p['list']([(typeof ($div17=$p['getattr'](self, 'r'))==typeof ($div18=100.0) && typeof $div17=='number' && $div18 !== 0?
				$div17/$div18:
				$p['op_div']($div17,$div18)), (typeof ($div19=$p['getattr'](self, 'g'))==typeof ($div20=100.0) && typeof $div19=='number' && $div20 !== 0?
				$div19/$div20:
				$p['op_div']($div19,$div20)), (typeof ($div21=$p['getattr'](self, 'b'))==typeof ($div22=100.0) && typeof $div21=='number' && $div22 !== 0?
				$div21/$div22:
				$p['op_div']($div21,$div22))]), skip);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['nextCube'] = $method;
		$method = $pyjs__bind_method2('animateOneFrame', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$iter2_array;
			$iter2_iter = $p['range']($p['getattr'](self, 'steps'));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				self['nextCube']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['animateOneFrame'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Krkkl', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('./public/Krkkl.html');
		$m['app'] = $m['Krkkl']();
		$m['app']['onModuleLoad']();
		$m['Window']['addWindowResizeListener']($m['app']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end krkkl */


/* end module: krkkl */


/*
PYJS_DEPS: ['pyjd', 'sys', 'json', 'random', 'math', 'time', 'pyjamas.Window', 'pyjamas', 'pyjamas.ui.Composite.Composite', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.ListBox.ListBox', 'pyjamas.ui.ListBox', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.Canvas.Color', 'pyjamas.Canvas', 'pyjamas.Canvas.GWTCanvas.GWTCanvas', 'pyjamas.Canvas.GWTCanvas']
*/
