/**
 * # Module dependency and load-order manager
 *
 * Uses RequireJS to specify all modules used in the application, and what
 * their dependencies are. RequireJS uses this information to load all modules
 * in the correct order.
 *
 * Also informs RequireJS of all used files so it can compile/minify them for
 * production use
 */
requirejs.config(
	{ baseUrl: 'BarenJS'
	, paths:
		{ 
		'baren': 'Baren'
		, 'renlinear': 'lib/render/renlinear'
		, 'renmatrix': 'lib/render/renmatrix'
		, 'renmaximatrix': 'lib/render/renmaximatrix'
		, 'code128': 'lib/barcodes/code128'
		, 'hibccode128': 'lib/barcodes/hibccode128'
		, 'hibcmicropdf417': 'lib/barcodes/hibcmicropdf417'
		, 'hibcpdf417': 'lib/barcodes/hibcpdf417'
		, 'micropdf417': 'lib/barcodes/micropdf417'
		, 'pdf417': 'lib/barcodes/pdf417'
		, 'azteccode': 'lib/barcodes/azteccode'
		, 'hibcqrcode': 'lib/barcodes/hibcqrcode'
		, 'qrcode': 'lib/barcodes/qrcode'
		}
	, shim:
		{ 
		'renlinear': { 'deps': [ 'baren' ] }
		,'renmatrix': { 'deps': [ 'baren' ] }
		,'renmaximatrix': { 'deps': [ 'baren' ] }
		,'code128': { 'deps': [ 'renlinear' ] }
		,'hibccode128': { 'deps': [ 'renlinear' ] }
		,'hibcmicropdf417': { 'deps': [ 'renmatrix' ] }
		,'hibcpdf417': { 'deps': [ 'renmatrix' ] }
		,'micropdf417': { 'deps': [ 'renmatrix' ] }
		,'pdf417': { 'deps': [ 'renmatrix' ] }
		,'azteccode': { 'deps': [ 'renmatrix' ] }
		,'hibcqrcode': { 'deps': [ 'renmatrix' ] }
		,'qrcode': { 'deps': [ 'renmatrix' ] }
		}
	}
)