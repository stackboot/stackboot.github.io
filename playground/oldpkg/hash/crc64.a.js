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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �-f��
hash/crc64crc64hash�R
$$ exports $$
pv0
crc64hash/crc64	Checksum data2tab
Table �   ECMA$# B�וWl�ISO$#p�	MakeTable poly > 	New tab> Hash64hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum64      Size$!>	Update crctab>p2  AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BQB=$pkg.Table=$newType(2048,$kindArray,"crc64.Table",true,"hash/crc64",true,null);B.init($Uint64,256);Tablehash/crc64.Table H��H=$pkg.digest=$newType(0,$kindStruct,"crc64.digest",true,"hash/crc64",false,function(crc_,tab_){this.$val=this;if(arguments.length===0){this.crc=new $Uint64(0,0);this.tab=P.nil;return;}this.crc=crc_;this.tab=tab_;});��R.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([Q],[$Int,$error],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([Q],[Q],false)}];��H.init("hash/crc64",[{prop:"crc",name:"crc",exported:false,typ:$Uint64,tag:""},{prop:"tab",name:"tab",exported:false,typ:P,tag:""}]);digesthash/crc64.Phash/crc64.Qhash/crc64.Rhash/crc64.Tablehash/crc64.digest MM=$arrayType($Uint64,256);M NN=$arrayType(B,8);Nhash/crc64.Table OO=$ptrType(N);Ohash/crc64.N PP=$ptrType(B);Phash/crc64.Table QQ=$sliceType($Uint8);Q RR=$ptrType(H);Rhash/crc64.digest Cslicing8TableISO Dslicing8TableECMA '    C=G(F(new $Uint64(3623878656,0)));hash/crc64.makeSlicingBy8Tablehash/crc64.makeTablehash/crc64.slicing8TableISO 0    D=G(F(new $Uint64(3379320725,3615952706)));hash/crc64.makeSlicingBy8Tablehash/crc64.makeTablehash/crc64.slicing8TableECMA hash/crc64.MakeTableE�CE=function(a){var $ptr,a,b,c,d;    b=a;    if((c=new $Uint64(3623878656,0),(b.$high===c.$high&&b.$low===c.$low))){  return(C.nilCheck,C[0]);    }else if((d=new $Uint64(3379320725,3615952706),(b.$high===d.$high&&b.$low===d.$low))){  5return(D.nilCheck,D[0]);    }else{  ^return F(a);    }    };$pkg.MakeTable=E;	MakeTablehash/crc64.MakeTablehash/crc64.makeTablehash/crc64.slicing8TableECMAhash/crc64.slicing8TableISO hash/crc64.makeTableF�F=function(a){var $ptr,a,b,c,d,e,f,g;  �b=M.zero();  �c=0;while(true){if(!(c<256)){break;}  �d=(new $Uint64(0,c));  �e=0;while(true){if(!(e<8)){break;}    if((f=new $Uint64(d.$high&0,(d.$low&1)>>>0),(f.$high===0&&f.$low===1))){  d=(g=$shiftRightUint64(d,1),new $Uint64(g.$high^a.$high,(g.$low^a.$low)>>>0));    }else{  :d=$shiftRightUint64(d,(1));    }  �e=e+(1)>>0;    }  Ob.nilCheck,((c<0||c>=b.length)?($throwRuntimeError("index out of range"),undefined):b[c]=d);  �c=c+(1)>>0;    }  ^return b;    };	makeTablehash/crc64.Mhash/crc64.makeTable hash/crc64.makeSlicingBy8TableG��G=function(a){var $ptr,a,b,c,d,e,f,g,h,i;  �b=N.zero();  �B.copy(b[0],a);  �c=0;while(true){if(!(c<256)){break;}  �d=(a.nilCheck,((c<0||c>=a.length)?($throwRuntimeError("index out of range"),undefined):a[c]));  �e=1;while(true){if(!(e<8)){break;}  d=(f=(g=new $Uint64(d.$high&0,(d.$low&255)>>>0),(a.nilCheck,(($flatten64(g)<0||$flatten64(g)>=a.length)?($throwRuntimeError("index out of range"),undefined):a[$flatten64(g)]))),h=$shiftRightUint64(d,8),new $Uint64(f.$high^h.$high,(f.$low^h.$low)>>>0));  2(i=((e<0||e>=b.length)?($throwRuntimeError("index out of range"),undefined):b[e]),((c<0||c>=i.length)?($throwRuntimeError("index out of range"),undefined):i[c]=d));  e=e+(1)>>0;    }  �c=c+(1)>>0;    }  Rreturn b;    };makeSlicingBy8Tablehash/crc64.Mhash/crc64.Nhash/crc64.Tablehash/crc64.makeSlicingBy8Table hash/crc64.NewIUI=function(a){var $ptr,a;  �return new H.ptr(new $Uint64(0,0),a);    };$pkg.New=I;Newhash/crc64.Newhash/crc64.digest (*hash/crc64.digest).Size}H.ptr.prototype.Size=function(){var $ptr,a;a=this;  �return 8;    };H.prototype.Size=function(){return this.$val.Size();};digesthash/crc64.digest (*hash/crc64.digest).BlockSize��H.ptr.prototype.BlockSize=function(){var $ptr,a;a=this;  return 1;    };H.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc64.digest (*hash/crc64.digest).Reset��H.ptr.prototype.Reset=function(){var $ptr,a;a=this;  <a.crc=new $Uint64(0,0);    };H.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc64.digest hash/crc64.updateJ�xJ=function(a,b,c){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �a=new $Uint64(~a.$high,~a.$low>>>0);  �while(true){if(!(c.$length>=64)){break;}  �d=O.nil;    if($equal(b,(D.nilCheck,D[0]),B)){  	+d=D;    }else if($equal(b,(C.nilCheck,C[0]),B)){  	xd=C;    }else if(c.$length>16384){  	�d=G(b);    }else{  
0break;    }  
[while(true){if(!(c.$length>8)){break;}  
oa=(e=(f=(g=(h=(i=(j=(k=(l=(new $Uint64(0,(0>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+0]))),m=$shiftLeft64((new $Uint64(0,(1>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+1]))),8),new $Uint64(l.$high|m.$high,(l.$low|m.$low)>>>0)),n=$shiftLeft64((new $Uint64(0,(2>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+2]))),16),new $Uint64(k.$high|n.$high,(k.$low|n.$low)>>>0)),o=$shiftLeft64((new $Uint64(0,(3>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+3]))),24),new $Uint64(j.$high|o.$high,(j.$low|o.$low)>>>0)),p=$shiftLeft64((new $Uint64(0,(4>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+4]))),32),new $Uint64(i.$high|p.$high,(i.$low|p.$low)>>>0)),q=$shiftLeft64((new $Uint64(0,(5>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+5]))),40),new $Uint64(h.$high|q.$high,(h.$low|q.$low)>>>0)),r=$shiftLeft64((new $Uint64(0,(6>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+6]))),48),new $Uint64(g.$high|r.$high,(g.$low|r.$low)>>>0)),s=$shiftLeft64((new $Uint64(0,(7>=c.$length?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+7]))),56),new $Uint64(f.$high|s.$high,(f.$low|s.$low)>>>0)),new $Uint64(a.$high^e.$high,(a.$low^e.$low)>>>0));  a=(t=(u=(v=(w=(x=(y=(z=(aa=(d.nilCheck,d[7]),ab=new $Uint64(a.$high&0,(a.$low&255)>>>0),(($flatten64(ab)<0||$flatten64(ab)>=aa.length)?($throwRuntimeError("index out of range"),undefined):aa[$flatten64(ab)])),ac=(ad=(d.nilCheck,d[6]),ae=(af=$shiftRightUint64(a,8),new $Uint64(af.$high&0,(af.$low&255)>>>0)),(($flatten64(ae)<0||$flatten64(ae)>=ad.length)?($throwRuntimeError("index out of range"),undefined):ad[$flatten64(ae)])),new $Uint64(z.$high^ac.$high,(z.$low^ac.$low)>>>0)),ag=(ah=(d.nilCheck,d[5]),ai=(aj=$shiftRightUint64(a,16),new $Uint64(aj.$high&0,(aj.$low&255)>>>0)),(($flatten64(ai)<0||$flatten64(ai)>=ah.length)?($throwRuntimeError("index out of range"),undefined):ah[$flatten64(ai)])),new $Uint64(y.$high^ag.$high,(y.$low^ag.$low)>>>0)),ak=(al=(d.nilCheck,d[4]),am=(an=$shiftRightUint64(a,24),new $Uint64(an.$high&0,(an.$low&255)>>>0)),(($flatten64(am)<0||$flatten64(am)>=al.length)?($throwRuntimeError("index out of range"),undefined):al[$flatten64(am)])),new $Uint64(x.$high^ak.$high,(x.$low^ak.$low)>>>0)),ao=(ap=(d.nilCheck,d[3]),aq=(ar=$shiftRightUint64(a,32),new $Uint64(ar.$high&0,(ar.$low&255)>>>0)),(($flatten64(aq)<0||$flatten64(aq)>=ap.length)?($throwRuntimeError("index out of range"),undefined):ap[$flatten64(aq)])),new $Uint64(w.$high^ao.$high,(w.$low^ao.$low)>>>0)),as=(at=(d.nilCheck,d[2]),au=(av=$shiftRightUint64(a,40),new $Uint64(av.$high&0,(av.$low&255)>>>0)),(($flatten64(au)<0||$flatten64(au)>=at.length)?($throwRuntimeError("index out of range"),undefined):at[$flatten64(au)])),new $Uint64(v.$high^as.$high,(v.$low^as.$low)>>>0)),aw=(ax=(d.nilCheck,d[1]),ay=(az=$shiftRightUint64(a,48),new $Uint64(az.$high&0,(az.$low&255)>>>0)),(($flatten64(ay)<0||$flatten64(ay)>=ax.length)?($throwRuntimeError("index out of range"),undefined):ax[$flatten64(ay)])),new $Uint64(u.$high^aw.$high,(u.$low^aw.$low)>>>0)),ba=(bb=(d.nilCheck,d[0]),bc=$shiftRightUint64(a,56),(($flatten64(bc)<0||$flatten64(bc)>=bb.length)?($throwRuntimeError("index out of range"),undefined):bb[$flatten64(bc)])),new $Uint64(t.$high^ba.$high,(t.$low^ba.$low)>>>0));  +c=$subslice(c,8);    }    }  ^bd=c;be=0;while(true){if(!(be<bd.$length)){break;}bf=((be<0||be>=bd.$length)?($throwRuntimeError("index out of range"),undefined):bd.$array[bd.$offset+be]);  va=(bg=(bh=(((a.$low<<24>>>24))^bf)<<24>>>24,(b.nilCheck,((bh<0||bh>=b.length)?($throwRuntimeError("index out of range"),undefined):b[bh]))),bi=$shiftRightUint64(a,8),new $Uint64(bg.$high^bi.$high,(bg.$low^bi.$low)>>>0));    be++;}  �return new $Uint64(~a.$high,~a.$low>>>0);    };updatehash/crc64.Nhash/crc64.Ohash/crc64.Tablehash/crc64.makeSlicingBy8Tablehash/crc64.slicing8TableECMAhash/crc64.slicing8TableISOhash/crc64.update hash/crc64.UpdateKKK=function(a,b,c){var $ptr,a,b,c;  'return J(a,b,c);    };$pkg.Update=K;Updatehash/crc64.Updatehash/crc64.update (*hash/crc64.digest).Write��H.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f;b=0;c=$ifaceNil;d=this;  |d.crc=J(d.crc,d.tab,a);    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };H.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc64.digesthash/crc64.update (*hash/crc64.digest).Sum64��H.ptr.prototype.Sum64=function(){var $ptr,a;a=this;  �return a.crc;    };H.prototype.Sum64=function(){return this.$val.Sum64();};digesthash/crc64.digest (*hash/crc64.digest).Sum��H.ptr.prototype.Sum=function(a){var $ptr,a,b,c;b=this;  c=b.Sum64();  return $append(a,(($shiftRightUint64(c,56).$low<<24>>>24)),(($shiftRightUint64(c,48).$low<<24>>>24)),(($shiftRightUint64(c,40).$low<<24>>>24)),(($shiftRightUint64(c,32).$low<<24>>>24)),(($shiftRightUint64(c,24).$low<<24>>>24)),(($shiftRightUint64(c,16).$low<<24>>>24)),(($shiftRightUint64(c,8).$low<<24>>>24)),((c.$low<<24>>>24)));    };H.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc64.digest hash/crc64.ChecksumLXL=function(a,b){var $ptr,a,b;  )return J(new $Uint64(0,0),b,a);    };$pkg.Checksum=L;Checksumhash/crc64.Checksumhash/crc64.update �x{"Base":3912,"Files":[{"Name":"/var/folders/9p/ctjxkz953zz07jwm707kprth0000gq/T/gopherjs_playground.h6UDJCyeV3/goroot/src/hash/crc64/crc64.go","Base":1,"Size":3910,"Lines":[0,55,109,159,160,235,309,325,339,340,354,355,398,413,414,441,449,511,537,538,584,611,613,614,697,720,721,727,784,842,844,845,917,969,1006,1021,1032,1062,1074,1105,1115,1140,1143,1145,1146,1183,1200,1228,1247,1274,1293,1321,1333,1347,1352,1356,1369,1372,1382,1384,1385,1432,1458,1479,1507,1521,1548,1582,1609,1613,1616,1637,1639,1640,1699,1720,1732,1744,1746,1747,1810,1860,1927,1987,1988,2032,2033,2079,2080,2119,2120,2175,2187,2259,2279,2307,2343,2378,2420,2454,2522,2551,2593,2604,2613,2617,2648,2667,2748,2826,2862,2898,2935,2972,3009,3046,3083,3111,3124,3128,3131,3164,3187,3225,3228,3241,3243,3244,3310,3365,3393,3395,3396,3450,3483,3503,3505,3506,3555,3556,3597,3613,3731,3733,3734,3782,3832],"Infos":null}]}
 