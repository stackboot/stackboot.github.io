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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �F���net/http/internalinternalbufiobyteserrorsfmtio�=
$$ exports $$
pv0internal"net/http/internalErrLineTooLong6*FlushAfterChunkWriter   Writer
bufio
bufioerr6 buf2 n wrWriterioio 
Write p2nerr6   
Resetb>wD  
Flushb>  6 Availableb>   Bufferedb>   
Writeb>p2nnerr6 WriteByteb>c2 6 WriteRuneb>r4sizeerr6 WriteStringb>s   6 ReadFromb>rReader Read p2nerr6  n
err6   LocalhostCert2LocalhostKey2	 NewChunkedReader rr r 	 NewChunkedWriter wD WriteCloserCloser 
Close   6  D   "AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�aG=$pkg.chunkedReader=$newType(0,$kindStruct,"internal.chunkedReader",true,"net/http/internal",false,function(r_,n_,err_,buf_,checkEnd_){this.$val=this;if(arguments.length===0){this.r=Q.nil;this.n=new $Uint64(0,0);this.err=$ifaceNil;this.buf=R.zero();this.checkEnd=false;return;}this.r=r_;this.n=n_;this.err=err_;this.buf=buf_;this.checkEnd=checkEnd_;});�U.methods=[{prop:"beginChunk",name:"beginChunk",pkg:"net/http/internal",typ:$funcType([],[],false)},{prop:"chunkHeaderAvailable",name:"chunkHeaderAvailable",pkg:"net/http/internal",typ:$funcType([],[$Bool],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)}];�3G.init("net/http/internal",[{prop:"r",name:"r",exported:false,typ:Q,tag:""},{prop:"n",name:"n",exported:false,typ:$Uint64,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"buf",name:"buf",exported:false,typ:R,tag:""},{prop:"checkEnd",name:"checkEnd",exported:false,typ:$Bool,tag:""}]);chunkedReadernet/http/internal.Pnet/http/internal.Qnet/http/internal.Rnet/http/internal.Unet/http/internal.chunkedReader M��M=$pkg.chunkedWriter=$newType(0,$kindStruct,"internal.chunkedWriter",true,"net/http/internal",false,function(Wire_){this.$val=this;if(arguments.length===0){this.Wire=$ifaceNil;return;}this.Wire=Wire_;});��V.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];IM.init("",[{prop:"Wire",name:"Wire",exported:true,typ:E.Writer,tag:""}]);chunkedWriter	io.Writernet/http/internal.Pnet/http/internal.Vnet/http/internal.chunkedWriter N��N=$pkg.FlushAfterChunkWriter=$newType(0,$kindStruct,"internal.FlushAfterChunkWriter",true,"net/http/internal",true,function(Writer_){this.$val=this;if(arguments.length===0){this.Writer=W.nil;return;}this.Writer=Writer_;});@N.init("",[{prop:"Writer",name:"",exported:true,typ:W,tag:""}]);FlushAfterChunkWriterbufio.Writer'net/http/internal.FlushAfterChunkWriternet/http/internal.W PP=$sliceType($Uint8);P QQ=$ptrType(A.Reader);Qbufio.Reader RR=$arrayType($Uint8,2);R SS=$sliceType($emptyInterface);S TT=$ptrType(N);T'net/http/internal.FlushAfterChunkWriter UU=$ptrType(G);Unet/http/internal.chunkedReader VV=$ptrType(M);Vnet/http/internal.chunkedWriter WW=$ptrType(A.Writer);Wbufio.Writer ErrLineTooLong LocalhostCert LocalhostKey 7    $pkg.ErrLineTooLong=C.New("header line too long");
errors.New net/http/internal.ErrLineTooLong �N    $pkg.LocalhostCert=(new P($stringToBytes("-----BEGIN CERTIFICATE-----\nMIICEzCCAXygAwIBAgIQMIMChMLGrR+QvmQvpwAU6zANBgkqhkiG9w0BAQsFADAS\nMRAwDgYDVQQKEwdBY21lIENvMCAXDTcwMDEwMTAwMDAwMFoYDzIwODQwMTI5MTYw\nMDAwWjASMRAwDgYDVQQKEwdBY21lIENvMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\niQKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9SjY1bIw4\niA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZBl2+XsDul\nrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQABo2gwZjAO\nBgNVHQ8BAf8EBAMCAqQwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDwYDVR0TAQH/BAUw\nAwEB/zAuBgNVHREEJzAlggtleGFtcGxlLmNvbYcEfwAAAYcQAAAAAAAAAAAAAAAA\nAAAAATANBgkqhkiG9w0BAQsFAAOBgQCEcetwO59EWk7WiJsG4x8SY+UIAA+flUI9\ntyC4lNhbcF2Idq9greZwbYCqTTTr2XiRNSMLCOjKyI7ukPoPjo16ocHj+P3vZGfs\nh1fIw3cSS2OolhloGw/XM6RWPWtPAlGykKLciQrBru5NAPvCMsb/I1DAceTiotQM\nfblo6RBxUQ==\n-----END CERTIFICATE-----")));LocalhostCertnet/http/internal.LocalhostCertnet/http/internal.P ��    $pkg.LocalhostKey=(new P($stringToBytes("-----BEGIN RSA PRIVATE KEY-----\nMIICXgIBAAKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9\nSjY1bIw4iA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZB\nl2+XsDulrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQAB\nAoGAGRzwwir7XvBOAy5tM/uV6e+Zf6anZzus1s1Y1ClbjbE6HXbnWWF/wbZGOpet\n3Zm4vD6MXc7jpTLryzTQIvVdfQbRc6+MUVeLKwZatTXtdZrhu+Jk7hx0nTPy8Jcb\nuJqFk541aEw+mMogY/xEcfbWd6IOkp+4xqjlFLBEDytgbIECQQDvH/E6nk+hgN4H\nqzzVtxxr397vWrjrIgPbJpQvBsafG7b0dA4AFjwVbFLmQcj2PprIMmPcQrooz8vp\njy4SHEg1AkEA/v13/5M47K9vCxmb8QeD/asydfsgS5TeuNi8DoUBEmiSJwma7FXY\nfFUtxuvL7XvjwjN5B30pNEbc6Iuyt7y4MQJBAIt21su4b3sjXNueLKH85Q+phy2U\nfQtuUE9txblTu14q3N7gHRZB4ZMhFYyDy8CKrN2cPg/Fvyt0Xlp/DoCzjA0CQQDU\ny2ptGsuSmgUtWj3NM9xuwYPm+Z/F84K6+ARYiZ6PYj013sovGKUFfYAqVXVlxtIX\nqyUBnu3X9ps8ZfjLZO7BAkEAlT4R5Yl6cGhaJQYZHOde3JEMhNRcVFMO8dJDaFeo\nf9Oeos0UUothgiDktdQHxdNEwLjQf7lJJBzV+5OtwswCWA==\n-----END RSA PRIVATE KEY-----")));LocalhostKeynet/http/internal.LocalhostKeynet/http/internal.P "net/http/internal.NewChunkedReaderF��F=function(a){var $ptr,a,b,c,d;  �b=$assertType(a,Q,true);c=b[0];d=b[1];    if(!d){  �c=A.NewReader(a);    }  �return new G.ptr(c,new $Uint64(0,0),$ifaceNil,R.zero(),false);    };$pkg.NewChunkedReader=F;NewChunkedReaderbufio.NewReaderbufio.Reader"net/http/internal.NewChunkedReadernet/http/internal.Qnet/http/internal.Rnet/http/internal.chunkedReader -(*net/http/internal.chunkedReader).beginChunk�ZG.ptr.prototype.beginChunk=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=P.nil;  �d=H(a.r);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;b=c[0];a.err=c[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  6$s=-1;return;    }  Ae=O(b);a.n=e[0];a.err=e[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  y$s=-1;return;    }    if((f=a.n,(f.$high===0&&f.$low===0))){  �a.err=E.EOF;    }    $s=-1;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.beginChunk};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.beginChunk=function(){return this.$val.beginChunk();};chunkedReaderbeginChunk~io.EOFnet/http/internal.Pnet/http/internal.chunkedReadernet/http/internal.parseHexUintnet/http/internal.readChunkLine 7(*net/http/internal.chunkedReader).chunkHeaderAvailable��G.ptr.prototype.chunkHeaderAvailable=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �b=a.r.Buffered();  �if(b>0){$s=1;continue;}$s=2;continue;    case 1:  d=a.r.Peek(b);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];   $s=-1;return B.IndexByte(e,10)>=0;    case 2:  L$s=-1;return false;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.chunkHeaderAvailable};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.chunkHeaderAvailable=function(){return this.$val.chunkHeaderAvailable();};chunkedReaderchunkHeaderAvailable~bytes.IndexBytenet/http/internal.chunkedReader '(*net/http/internal.chunkedReader).Read�		G.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;  �case 1:if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=2;continue;}  �if(d.checkEnd){$s=3;continue;}$s=4;continue;    case 3:    if(b>0&&d.r.Buffered()<2){  q$s=2;continue;    }  �f=E.ReadFull(d.r,$subslice(new P(d.buf),0,2));$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;d.err=e[1];    if($interfaceIsEqual(d.err,$ifaceNil)){    if(!(($bytesToString(new P(d.buf)))==="\r\n")){  �d.err=C.New("malformed chunked encoding");  $s=2;continue;    }    }  2d.checkEnd=false;    case 4:  Lif((g=d.n,(g.$high===0&&g.$low===0))){$s=6;continue;}$s=7;continue;    case 6:  ^if(!(b>0)){h=false;$s=10;continue s;}i=d.chunkHeaderAvailable();$s=11;case 11:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=!i;case 10:if(h){$s=8;continue;}$s=9;continue;    case 8:  �$s=2;continue;    case 9:  �$r=d.beginChunk();$s=12;case 12:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  	$s=1;continue;    case 7:    if(a.$length===0){  	$$s=2;continue;    }  	0j=a;    if((k=(new $Uint64(0,j.$length)),l=d.n,(k.$high>l.$high||(k.$high===l.$high&&k.$low>l.$low)))){  	]j=$subslice(j,0,$flatten64(d.n));    }  	zm=0;  	�o=d.r.Read(j);$s=13;case 13:if($c){$c=false;o=o.$blk();}if(o&&o.$blk!==undefined){break s;}n=o;m=n[0];d.err=n[1];  	�b=b+(m)>>0;  	�a=$subslice(a,m);  	�d.n=(p=d.n,q=(new $Uint64(0,m)),new $Uint64(p.$high-q.$high,p.$low-q.$low));    if((r=d.n,(r.$high===0&&r.$low===0))&&$interfaceIsEqual(d.err,$ifaceNil)){  
Nd.checkEnd=true;    }    $s=1;continue;case 2:    s=b;t=d.err;b=s;c=t;$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Read=function(a){return this.$val.Read(a);};chunkedReader
errors.Newio.ReadFullnet/http/internal.Pnet/http/internal.beginChunk~'net/http/internal.chunkHeaderAvailable~net/http/internal.chunkedReader net/http/internal.readChunkLineH��H=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  vc=a.ReadSlice(10);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){    if($interfaceIsEqual(e,E.EOF)){   e=E.ErrUnexpectedEOF;    }else if($interfaceIsEqual(e,A.ErrBufferFull)){  fe=$pkg.ErrLineTooLong;    }  �$s=-1;return[P.nil,e];    }    if(d.$length>=4096){  �$s=-1;return[P.nil,$pkg.ErrLineTooLong];    }  �d=I(d);  �f=K(d);d=f[0];e=f[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  &$s=-1;return[P.nil,e];    }  :$s=-1;return[d,$ifaceNil];    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};readChunkLinebufio.ErrBufferFullio.EOFio.ErrUnexpectedEOF net/http/internal.ErrLineTooLongnet/http/internal.Pnet/http/internal.readChunkLine&net/http/internal.removeChunkExtension(net/http/internal.trimTrailingWhitespace (net/http/internal.trimTrailingWhitespaceI� I=function(a){var $ptr,a,b;  {while(true){if(!(a.$length>0&&J((b=a.$length-1>>0,((b<0||b>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+b]))))){break;}  �a=$subslice(a,0,(a.$length-1>>0));    }  �return a;    };trimTrailingWhitespacenet/http/internal.isASCIISpace(net/http/internal.trimTrailingWhitespace net/http/internal.isASCIISpaceJQJ=function(a){var $ptr,a;  �return(a===32)||(a===9)||(a===10)||(a===13);    };isASCIISpacenet/http/internal.isASCIISpace &net/http/internal.removeChunkExtensionK��K=function(a){var $ptr,a,b;  b=B.IndexByte(a,59);    if(b===-1){  Lreturn[a,$ifaceNil];    }  �return[$subslice(a,0,b),$ifaceNil];    };removeChunkExtensionbytes.IndexByte&net/http/internal.removeChunkExtension "net/http/internal.NewChunkedWriterLQL=function(a){var $ptr,a;  Nreturn new M.ptr(a);    };$pkg.NewChunkedWriter=L;NewChunkedWriter"net/http/internal.NewChunkedWriternet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Write��M.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;d=this;    if(a.$length===0){    e=0;f=$ifaceNil;b=e;c=f;$s=-1;return[b,c];    }  �h=D.Fprintf(d.Wire,"%x\r\n",new S([new $Int(a.$length)]));$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;c=g[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    i=0;j=c;b=i;c=j;$s=-1;return[b,c];    }  �l=d.Wire.Write(a);$s=2;case 2:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;b=k[0];c=k[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  $s=-1;return[b,c];    }    if(!((b===a.$length))){  ?c=E.ErrShortWrite;  X$s=-1;return[b,c];    }  fn=E.WriteString(d.Wire,"\r\n");$s=3;case 3:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;c=m[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �$s=-1;return[b,c];    }  �o=$assertType(d.Wire,T,true);p=o[0];q=o[1];  �if(q){$s=4;continue;}$s=5;continue;    case 4:  �r=p.Writer.Flush();$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}c=r;    case 5:  �$s=-1;return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Write=function(a){return this.$val.Write(a);};chunkedWriterfmt.Fprintfio.ErrShortWriteio.WriteString'net/http/internal.FlushAfterChunkWriternet/http/internal.Snet/http/internal.Tnet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Close�<M.ptr.prototype.Close=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  )c=E.WriteString(a.Wire,"0\r\n");$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  U$s=-1;return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Close=function(){return this.$val.Close();};chunkedWriterio.WriteStringnet/http/internal.chunkedWriter net/http/internal.parseHexUintO��O=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;b=new $Uint64(0,0);c=$ifaceNil;  d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+e]);    if(48<=g&&g<=57){  `g=g-48<<24>>>24;    }else if(97<=g&&g<=102){  �g=(g-97<<24>>>24)+10<<24>>>24;    }else if(65<=g&&g<=70){  �g=(g-65<<24>>>24)+10<<24>>>24;    }else{    h=new $Uint64(0,0);i=C.New("invalid byte in chunk length");b=h;c=i;return[b,c];    }    if(f===16){    j=new $Uint64(0,0);k=C.New("http chunk length too large");b=j;c=k;return[b,c];    }  ab=$shiftLeft64(b,(4));  kb=(l=(new $Uint64(0,g)),new $Uint64(b.$high|l.$high,(b.$low|l.$low)>>>0));    e++;}  ~return[b,c];    };parseHexUint
errors.Newnet/http/internal.parseHexUint ��{"Base":8795,"Files":[{"Name":"/var/folders/9p/ctjxkz953zz07jwm707kprth0000gq/T/gopherjs_playground.h6UDJCyeV3/goroot/src/net/http/internal/chunked.go","Base":1,"Size":6534,"Lines":[0,55,109,159,160,221,222,289,311,328,329,338,347,356,366,373,379,381,382,444,445,501,502,587,640,715,718,793,857,904,933,943,969,972,1002,1004,1005,1033,1057,1099,1115,1133,1195,1197,1198,1238,1258,1275,1311,1331,1340,1343,1378,1398,1407,1410,1426,1444,1447,1449,1450,1505,1527,1539,1565,1607,1610,1624,1626,1627,1689,1710,1729,1766,1824,1879,1900,1910,1915,1980,2017,2072,2083,2089,2094,2117,2121,2138,2182,2232,2267,2277,2282,2301,2313,2317,2336,2345,2349,2361,2393,2415,2419,2432,2463,2473,2486,2507,2562,2600,2634,2656,2660,2663,2681,2683,2684,2727,2773,2825,2878,2932,2961,2978,3018,3079,3100,3129,3170,3194,3198,3216,3219,3249,3278,3281,3312,3346,3363,3381,3384,3399,3401,3402,3449,3496,3515,3518,3528,3530,3531,3564,3620,3622,3623,3683,3699,3717,3741,3769,3809,3863,3896,3913,3929,3932,3993,4052,4073,4095,4097,4098,4179,4260,4328,4331,4398,4461,4527,4596,4632,4684,4710,4712,4713,4788,4850,4878,4894,4896,4897,4949,5028,5091,5156,5157,5227,5248,5264,5267,5268,5337,5353,5356,5403,5412,5415,5436,5461,5470,5473,5532,5541,5544,5597,5616,5619,5627,5629,5630,5671,5715,5727,5729,5730,5799,5867,5937,6002,6067,6103,6118,6120,6121,6173,6196,6207,6236,6251,6280,6300,6329,6349,6360,6416,6420,6435,6490,6494,6504,6521,6524,6532],"Infos":null},{"Name":"/var/folders/9p/ctjxkz953zz07jwm707kprth0000gq/T/gopherjs_playground.h6UDJCyeV3/goroot/src/net/http/internal/testcert.go","Base":6536,"Size":2258,"Lines":[0,55,109,159,160,177,178,234,300,334,471,527,592,657,722,787,852,917,982,1047,1112,1177,1242,1255,1283,1284,1338,1397,1462,1527,1592,1657,1722,1787,1852,1917,1982,2047,2112,2177,2226],"Infos":null}]}
 