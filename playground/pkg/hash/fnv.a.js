����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �'t��hash/fnvfnvhash�
$$ exports $$
pv0fnvhash/fnv	
New32   Hash32hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum32      	New32a   : 	
New64   Hash64>
Sum64      	New64a   \ &AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BLB=$pkg.sum32=$newType(4,$kindUint32,"fnv.sum32",true,"hash/fnv",false,null);��J.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum32
hash/fnv.J
hash/fnv.Nhash/fnv.sum32 CNC=$pkg.sum32a=$newType(4,$kindUint32,"fnv.sum32a",true,"hash/fnv",false,null);��K.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum32a
hash/fnv.K
hash/fnv.Nhash/fnv.sum32a DLD=$pkg.sum64=$newType(8,$kindUint64,"fnv.sum64",true,"hash/fnv",false,null);��L.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum64
hash/fnv.L
hash/fnv.Nhash/fnv.sum64 ENE=$pkg.sum64a=$newType(8,$kindUint64,"fnv.sum64a",true,"hash/fnv",false,null);��M.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum64a
hash/fnv.M
hash/fnv.Nhash/fnv.sum64a JJ=$ptrType(B);Jhash/fnv.sum32 KK=$ptrType(C);Khash/fnv.sum32a LL=$ptrType(D);Lhash/fnv.sum64 MM=$ptrType(E);Mhash/fnv.sum64a NN=$sliceType($Uint8);N hash/fnv.New32F��F=function(){var $ptr,a,b;  �a=2166136261;  �return(b||(b=new J(function(){return a;},function($v){a=$v;})));    };$pkg.New32=F;New32
hash/fnv.Jhash/fnv.New32hash/fnv.sum32 hash/fnv.New32aG��G=function(){var $ptr,a,b;  �a=2166136261;  �return(b||(b=new K(function(){return a;},function($v){a=$v;})));    };$pkg.New32a=G;New32a
hash/fnv.Khash/fnv.New32ahash/fnv.sum32a hash/fnv.New64H��H=function(){var $ptr,a,b;  Ea=new D(3421674724,2216829733);  Yreturn(b||(b=new L(function(){return a;},function($v){a=$v;})));    };$pkg.New64=H;New64
hash/fnv.Lhash/fnv.New64hash/fnv.sum64 hash/fnv.New64aI��I=function(){var $ptr,a,b;  �a=new E(3421674724,2216829733);  return(b||(b=new M(function(){return a;},function($v){a=$v;})));    };$pkg.New64a=I;New64a
hash/fnv.Mhash/fnv.New64ahash/fnv.sum64a (*hash/fnv.sum32).ResetX$ptrType(B).prototype.Reset=function(){var $ptr,a;a=this;  8a.$set(2166136261);    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).ResetX$ptrType(C).prototype.Reset=function(){var $ptr,a;a=this;  ca.$set(2166136261);    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Resetj$ptrType(D).prototype.Reset=function(){var $ptr,a;a=this;  �a.$set(new D(3421674724,2216829733));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Resetj$ptrType(E).prototype.Reset=function(){var $ptr,a;a=this;  �a.$set(new E(3421674724,2216829733));    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Sum32\$ptrType(B).prototype.Sum32=function(){var $ptr,a;a=this;  �return((a.$get()>>>0));    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum32\$ptrType(C).prototype.Sum32=function(){var $ptr,a;a=this;  "return((a.$get()>>>0));    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum64x$ptrType(D).prototype.Sum64=function(){var $ptr,a,b;a=this;  Xreturn((b=a.$get(),new $Uint64(b.$high,b.$low)));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum64x$ptrType(E).prototype.Sum64=function(){var $ptr,a,b;a=this;  �return((b=a.$get(),new $Uint64(b.$high,b.$low)));    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Write�e$ptrType(B).prototype.Write=function(a){var $ptr,a,b,c,d,e,f;b=this;  �c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �c=$imul(c,(16777619))>>>0;  c=(c^(((f>>>0))))>>>0;    e++;}  $b.$set(c);  /return[a.$length,$ifaceNil];    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Write�e$ptrType(C).prototype.Write=function(a){var $ptr,a,b,c,d,e,f;b=this;  |c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �c=(c^(((f>>>0))))>>>0;  �c=$imul(c,(16777619))>>>0;    e++;}  �b.$set(c);  �return[a.$length,$ifaceNil];    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Write��$ptrType(D).prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g;b=this;  "c=b.$get();  .d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  Ic=$mul64(c,(new D(256,435)));  [c=(g=(new D(0,f)),new D(c.$high^g.$high,(c.$low^g.$low)>>>0));    e++;}  pb.$set(c);  {return[a.$length,$ifaceNil];    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Write��$ptrType(E).prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g;b=this;  �c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);  �c=(g=(new E(0,f)),new E(c.$high^g.$high,(c.$low^g.$low)>>>0));  	c=$mul64(c,(new E(256,435)));    e++;}  	b.$set(c);  	"return[a.$length,$ifaceNil];    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).SizeM$ptrType(B).prototype.Size=function(){var $ptr,a;a=this;  	Yreturn 4;    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).SizeM$ptrType(C).prototype.Size=function(){var $ptr,a;a=this;  	�return 4;    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).SizeM$ptrType(D).prototype.Size=function(){var $ptr,a;a=this;  	�return 8;    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).SizeM$ptrType(E).prototype.Size=function(){var $ptr,a;a=this;  	�return 8;    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).BlockSizeR$ptrType(B).prototype.BlockSize=function(){var $ptr,a;a=this;  
return 1;    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).BlockSizeR$ptrType(C).prototype.BlockSize=function(){var $ptr,a;a=this;  
1return 1;    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).BlockSizeR$ptrType(D).prototype.BlockSize=function(){var $ptr,a;a=this;  
_return 1;    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).BlockSizeR$ptrType(E).prototype.BlockSize=function(){var $ptr,a;a=this;  
�return 1;    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Sum��$ptrType(B).prototype.Sum=function(a){var $ptr,a,b,c;b=this;  
�c=((b.$get()>>>0));  
�return $append(a,(((c>>>24>>>0)<<24>>>24)),(((c>>>16>>>0)<<24>>>24)),(((c>>>8>>>0)<<24>>>24)),((c<<24>>>24)));    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum��$ptrType(C).prototype.Sum=function(a){var $ptr,a,b,c;b=this;  Ac=((b.$get()>>>0));  Rreturn $append(a,(((c>>>24>>>0)<<24>>>24)),(((c>>>16>>>0)<<24>>>24)),(((c>>>8>>>0)<<24>>>24)),((c<<24>>>24)));    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum��$ptrType(D).prototype.Sum=function(a){var $ptr,a,b,c,d;b=this;  �d=((c=b.$get(),new $Uint64(c.$high,c.$low)));  �return $append(a,(($shiftRightUint64(d,56).$low<<24>>>24)),(($shiftRightUint64(d,48).$low<<24>>>24)),(($shiftRightUint64(d,40).$low<<24>>>24)),(($shiftRightUint64(d,32).$low<<24>>>24)),(($shiftRightUint64(d,24).$low<<24>>>24)),(($shiftRightUint64(d,16).$low<<24>>>24)),(($shiftRightUint64(d,8).$low<<24>>>24)),((d.$low<<24>>>24)));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum��$ptrType(E).prototype.Sum=function(a){var $ptr,a,b,c,d;b=this;  rd=((c=b.$get(),new $Uint64(c.$high,c.$low)));  �return $append(a,(($shiftRightUint64(d,56).$low<<24>>>24)),(($shiftRightUint64(d,48).$low<<24>>>24)),(($shiftRightUint64(d,40).$low<<24>>>24)),(($shiftRightUint64(d,32).$low<<24>>>24)),(($shiftRightUint64(d,24).$low<<24>>>24)),(($shiftRightUint64(d,16).$low<<24>>>24)),(($shiftRightUint64(d,8).$low<<24>>>24)),((d.$low<<24>>>24)));    };sum64ahash/fnv.sum64a �.{"Base":3323,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/hash/fnv/fnv.go","Base":1,"Size":3321,"Lines":[0,55,109,159,160,237,297,304,367,379,380,389,397,399,400,407,422,437,452,467,469,470,478,501,534,555,581,583,584,631,698,725,749,760,762,763,812,879,907,932,943,945,946,993,1060,1087,1111,1122,1124,1125,1174,1241,1269,1294,1305,1307,1308,1351,1394,1437,1480,1481,1535,1589,1643,1697,1698,1748,1760,1786,1804,1823,1826,1837,1860,1862,1863,1914,1926,1952,1972,1990,1993,2004,2027,2029,2030,2080,2092,2118,2136,2155,2158,2169,2192,2194,2195,2246,2258,2284,2304,2322,2325,2336,2359,2361,2362,2403,2444,2485,2526,2527,2573,2619,2665,2711,2712,2752,2769,2835,2837,2838,2879,2896,2962,2964,2965,3005,3022,3140,3142,3143,3184,3201,3319],"Infos":null}]}
 