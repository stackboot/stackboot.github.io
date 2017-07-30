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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �w��
crypto/rc4rc4strconv��
$$ exports $$
pv0rc4crypto/rc4Cipher s � i  j  
Resetc8   &xorKeyStreamGenericc8dst2srcF  XORKeyStreamc8dst2srcL  KeySizeError 
ErrorkN    	NewCipher key2 8 6 AA=$packages["strconv"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B��B=$pkg.Cipher=$newType(0,$kindStruct,"rc4.Cipher",true,"crypto/rc4",true,function(s_,i_,j_){this.$val=this;if(arguments.length===0){this.s=F.zero();this.i=0;this.j=0;return;}this.s=s_;this.i=i_;this.j=j_;});� E.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"xorKeyStreamGeneric",name:"xorKeyStreamGeneric",pkg:"crypto/rc4",typ:$funcType([G,G],[],false)},{prop:"XORKeyStream",name:"XORKeyStream",pkg:"",typ:$funcType([G,G],[],false)}];��B.init("crypto/rc4",[{prop:"s",name:"s",exported:false,typ:F,tag:""},{prop:"i",name:"i",exported:false,typ:$Uint8,tag:""},{prop:"j",name:"j",exported:false,typ:$Uint8,tag:""}]);Ciphercrypto/rc4.Ciphercrypto/rc4.Ecrypto/rc4.Fcrypto/rc4.G CXC=$pkg.KeySizeError=$newType(4,$kindInt,"rc4.KeySizeError",true,"crypto/rc4",true,null);QC.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];KeySizeErrorcrypto/rc4.KeySizeError EE=$ptrType(B);Ecrypto/rc4.Cipher FF=$arrayType($Uint32,256);F GG=$sliceType($Uint8);G (crypto/rc4.KeySizeError).Error��C.prototype.Error=function(){var $ptr,a;a=this.$val;  ?return"crypto/rc4: invalid key size "+A.Itoa(((a>>0)));    };$ptrType(C).prototype.Error=function(){return new C(this.$get()).Error();};KeySizeErrorcrypto/rc4.KeySizeErrorstrconv.Itoa crypto/rc4.NewCipherD�PD=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;  0b=a.$length;    if(b<1||b>256){  Wreturn[E.nil,new C(((b>>0)))];    }  {c=new B.ptr(F.zero(),0,0);  �d=0;while(true){if(!(d<256)){break;}  �(e=c.s,((d<0||d>=e.length)?($throwRuntimeError("index out of range"),undefined):e[d]=((d>>>0))));  �d=d+(1)>>0;    }  �f=0;  �g=0;while(true){if(!(g<256)){break;}  �f=f+(((((h=c.s,((g<0||g>=h.length)?($throwRuntimeError("index out of range"),undefined):h[g]))<<24>>>24))+(i=(j=g%b,j===j?j:$throwRuntimeError("integer divide by zero")),((i<0||i>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+i]))<<24>>>24))<<24>>>24;  k=(l=c.s,((f<0||f>=l.length)?($throwRuntimeError("index out of range"),undefined):l[f]));m=(n=c.s,((g<0||g>=n.length)?($throwRuntimeError("index out of range"),undefined):n[g]));(o=c.s,((g<0||g>=o.length)?($throwRuntimeError("index out of range"),undefined):o[g]=k));(p=c.s,((f<0||f>=p.length)?($throwRuntimeError("index out of range"),undefined):p[f]=m));  �g=g+(1)>>0;    }  +return[c,$ifaceNil];    };$pkg.NewCipher=D;	NewCiphercrypto/rc4.Ciphercrypto/rc4.Ecrypto/rc4.Fcrypto/rc4.KeySizeErrorcrypto/rc4.NewCipher (*crypto/rc4.Cipher).Reset�2B.ptr.prototype.Reset=function(){var $ptr,a,b,c,d,e,f,g;a=this;  �b=a.s;c=0;while(true){if(!(c<256)){break;}d=c;  �(e=a.s,((d<0||d>=e.length)?($throwRuntimeError("index out of range"),undefined):e[d]=0));    c++;}  �f=0;g=0;a.i=f;a.j=g;    };B.prototype.Reset=function(){return this.$val.Reset();};Ciphercrypto/rc4.Cipher ((*crypto/rc4.Cipher).xorKeyStreamGeneric�<B.ptr.prototype.xorKeyStreamGeneric=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;c=this;  Jd=c.i;e=c.j;f=d;g=e;  \h=b;i=0;while(true){if(!(i<h.$length)){break;}j=i;k=((i<0||i>=h.$length)?($throwRuntimeError("index out of range"),undefined):h.$array[h.$offset+i]);  vf=f+(1)<<24>>>24;  g=g+((((l=c.s,((f<0||f>=l.length)?($throwRuntimeError("index out of range"),undefined):l[f]))<<24>>>24)))<<24>>>24;  �m=(n=c.s,((g<0||g>=n.length)?($throwRuntimeError("index out of range"),undefined):n[g]));o=(p=c.s,((f<0||f>=p.length)?($throwRuntimeError("index out of range"),undefined):p[f]));(q=c.s,((f<0||f>=q.length)?($throwRuntimeError("index out of range"),undefined):q[f]=m));(r=c.s,((g<0||g>=r.length)?($throwRuntimeError("index out of range"),undefined):r[g]=o));  �((j<0||j>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+j]=((k^(((s=c.s,t=((((u=c.s,((f<0||f>=u.length)?($throwRuntimeError("index out of range"),undefined):u[f]))+(v=c.s,((g<0||g>=v.length)?($throwRuntimeError("index out of range"),undefined):v[g]))>>>0)<<24>>>24)),((t<0||t>=s.length)?($throwRuntimeError("index out of range"),undefined):s[t]))<<24>>>24)))<<24>>>24));    i++;}  �w=f;x=g;c.i=w;c.j=x;    };B.prototype.xorKeyStreamGeneric=function(a,b){return this.$val.xorKeyStreamGeneric(a,b);};CipherxorKeyStreamGeneric~crypto/rc4.Cipher !(*crypto/rc4.Cipher).XORKeyStream��B.ptr.prototype.XORKeyStream=function(a,b){var $ptr,a,b,c;c=this;  �c.xorKeyStreamGeneric(a,b);    };B.prototype.XORKeyStream=function(a,b){return this.$val.XORKeyStream(a,b);};Ciphercrypto/rc4.Ciphercrypto/rc4.xorKeyStreamGeneric~ ��{"Base":2237,"Files":[{"Name":"/var/folders/9p/ctjxkz953zz07jwm707kprth0000gq/T/gopherjs_playground.h6UDJCyeV3/goroot/src/crypto/rc4/rc4.go","Base":1,"Size":1785,"Lines":[0,55,109,159,160,233,258,270,271,341,380,381,398,399,457,478,496,508,510,511,533,534,573,636,638,639,717,768,814,829,852,882,885,899,927,948,951,968,996,1028,1062,1065,1081,1083,1084,1152,1173,1200,1222,1235,1238,1255,1257,1258,1327,1397,1413,1416,1486,1552,1608,1626,1651,1660,1681,1715,1763,1766,1783],"Infos":null},{"Name":"/var/folders/9p/ctjxkz953zz07jwm707kprth0000gq/T/gopherjs_playground.h6UDJCyeV3/goroot/src/crypto/rc4/rc4_ref.go","Base":1787,"Size":449,"Lines":[0,55,109,159,160,206,207,219,220,294,365,414,447],"Infos":null}]}
 