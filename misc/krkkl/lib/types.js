/* start module: types */
$pyjs['loaded_modules']['types'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['types']['__was_initialized__']) return $pyjs['loaded_modules']['types'];
	var $m = $pyjs['loaded_modules']['types'];
	$m['__repr__'] = function() { return '<module: types>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'types';
	$m['__name__'] = __mod_name__;
	var $lambda1,$pyjs_try_err;

	$m['sys'] = $p['___import___']('sys', null);
	$m['NoneType'] = $p['type'](null);
	$m['TypeType'] = $p['type'];
	$m['ObjectType'] = $p['object'];
	$m['IntType'] = $p['float_int'];
	$m['LongType'] = $p['float_int'];
	$m['FloatType'] = $p['float'];
	$m['BooleanType'] = $p['bool'];
	try {
		$m['ComplexType'] = $p['complex'];
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
		$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		if (($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	$m['StringType'] = $p['str'];
	try {
		$m['UnicodeType'] = (typeof unicode == "undefined"?$m['unicode']:unicode);
		$m['StringTypes'] = $p['tuple']([$m['StringType'], $m['UnicodeType']]);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
		$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
		if (($pyjs_try_err_name == $p['NameError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['NameError'])) {
			$m['StringTypes'] = $p['tuple']([$m['StringType']]);
		} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
	}
	$m['BufferType'] = (typeof buffer == "undefined"?$m['buffer']:buffer);
	$m['TupleType'] = $p['tuple'];
	$m['ListType'] = $p['list'];
	$m['$assign1'] = $p['dict'];
	$m['DictType'] = $m['$assign1'];
	$m['DictionaryType'] = $m['$assign1'];
	$m['_f'] = function() {

 		return null;
	};
	$m['_f']['__name__'] = '_f';

	$m['_f']['__bind_type__'] = 0;
	$m['_f']['__args__'] = [null,null];
	$m['FunctionType'] = $p['type']($m['_f']);
	var 	$lambda1 = function() {

		return null;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = [null,null];
	$m['LambdaType'] = $p['type']($lambda1);
	$m['CodeType'] = $p['getattr']((typeof __builtins__ == "undefined"?$m['__builtins__']:__builtins__), 'CodeType');
	$m['_g'] = function() {

var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration']();
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
													($p['isinstance']($exc_value, $exc_type)
													 ? $exc_value : $exc_type($exc_value)));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$p['GeneratorExit']();
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $p['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$yield_value = 1;
				$yielding = true;
				$generator_state[0] = 1;
				return $yield_value;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
			}

			return;
		};
		return $generator;
	};
	$m['_g']['__name__'] = '_g';

	$m['_g']['__bind_type__'] = 0;
	$m['_g']['__args__'] = [null,null];
	$m['GeneratorType'] = $p['type']($m['_g']());
	$m['_C'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'types';
		$method = $pyjs__bind_method2('_m', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_m'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_C', $p['tuple']($bases), $data);
	})();
	$m['ClassType'] = $p['type']($m['_C']);
	$m['UnboundMethodType'] = $p['type']($p['getattr']($m['_C'], '_m'));
	$m['_x'] = $m['_C']();
	$m['InstanceType'] = $p['type']($m['_x']);
	$m['MethodType'] = $p['type']($p['getattr']($m['_x'], '_m'));
	$m['BuiltinFunctionType'] = $p['type']($p['len']);
	$m['BuiltinMethodType'] = $p['type']($p['getattr']($p['list']([]), 'append'));
	$m['ModuleType'] = $p['type']($m['sys']);
	$m['FileType'] = (typeof file == "undefined"?$m['file']:file);
	$m['XRangeType'] = $p['xrange'];
	$m['TracebackType'] = $p['getattr']((typeof __builtins__ == "undefined"?$m['__builtins__']:__builtins__), 'TracebackType');
	$m['FrameType'] = $p['getattr']((typeof __builtins__ == "undefined"?$m['__builtins__']:__builtins__), 'FrameType');
	$m['SliceType'] = $p['slice'];
	$m['EllipsisType'] = $p['type']($p['Ellipsis']);
	$m['NotImplementedType'] = $p['type']($p['NotImplemented']);
	$m['GetSetDescriptorType'] = $p['getattr']((typeof __builtins__ == "undefined"?$m['__builtins__']:__builtins__), 'CodeType');
	$m['MemberDescriptorType'] = $p['getattr']((typeof __builtins__ == "undefined"?$m['__builtins__']:__builtins__), 'CodeType');
	$p['_del']($m['sys']);
	$p['_del']($m['_f']);
	$p['_del']($m['_g']);
	$p['_del']($m['_C']);
	$p['_del']($m['_x']);
	return this;
}; /* end types */


/* end module: types */


/*
PYJS_DEPS: ['sys']
*/
