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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �xn��encoding/csvcsvbufiobyteserrorsfmtiostringsunicodeunicode/utf8��
$$ exports $$
pv0csvencoding/csvErrBareQuote6ErrFieldCount6ErrQuote6 ErrTrailingComma6	NewReader rReaderioio Read p2nerr6   Reader 
Comma4 Comment4 FieldsPerRecord LazyQuotes  TrailingComma   TrimLeadingSpace  line  column  r Reader
bufio
bufiobuf2 rd: r w err6 lastByte lastRuneSize $
ResetbJr:  
resetbJbuf2r:  fillbJ   readErrbJ  6 PeekbJn 2 6 DiscardbJndiscardederr6 ReadbJp2nerr6 ReadBytebJ  2 6 UnreadBytebJ  6 ReadRunebJ r4sizeerr6 UnreadRunebJ  6 BufferedbJ   ReadSlicebJ
delim2line2err6 ReadLinebJ line2isPrefix err6 ReadBytesbJ
delim2 2 6 ReadStringbJ
delim2   6 WriteTobJwWriter 
Write p2nerr6  n
err6 writeBufbJw� 
 6  lineBuffer Buffer
bytes
bytesbuf2 off bootstrap�2 lastReadreadOp  .
Bytesb�  2 Stringb�    Lenb�   Capb�   Truncateb�n  
Resetb�   growb�n  Growb�n  
Writeb�p2nerr6 WriteStringb�s nerr6 ReadFromb�r:n
err6 WriteTob�w�n
err6 WriteByteb�c2 6 WriteRuneb�r4nerr6 Readb�p2nerr6 Nextb�n 2 ReadByteb�  2 6 ReadRuneb� r4sizeerr6 UnreadRuneb�  6 UnreadByteb�  6 ReadBytesb�
delim2line2err6 readSliceb�
delim2line2err6 ReadStringb�
delim2line err6  fieldIndexes  
errorrDerr6 6 ReadrD record err6 ReadAllrD records err6 readRunerD  4 6 skiprD
delim4 6 parseRecordrD fields err6 parseFieldrD haveField 
delim4err6  	NewWriter w� Writer 
Comma4 UseCRLF  w Writererr6 buf2 n wr� 
Resetb�w�  
Flushb�  6 Availableb�   Bufferedb�   
Writeb�p2nnerr6 WriteByteb�c2 6 WriteRuneb�r4sizeerr6 WriteStringb�s   6 ReadFromb�r:n
err6  

Writew�record  6 
Flushw�   
Errorw�  6 WriteAllw�records  6  fieldNeedsQuotesw�
field     ParseError Line Column Err6 
Errore�    D�-AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GG=$packages["strings"];a    $r=G.$init();$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} FF=$packages["unicode"];a    $r=F.$init();$s=7;case 7:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} HH=$packages["unicode/utf8"];a    $r=H.$init();$s=8;case 8:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} I�I=$pkg.ParseError=$newType(0,$kindStruct,"csv.ParseError",true,"encoding/csv",true,function(Line_,Column_,Err_){this.$val=this;if(arguments.length===0){this.Line=0;this.Column=0;this.Err=$ifaceNil;return;}this.Line=Line_;this.Column=Column_;this.Err=Err_;});QV.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];��I.init("",[{prop:"Line",name:"Line",exported:true,typ:$Int,tag:""},{prop:"Column",name:"Column",exported:true,typ:$Int,tag:""},{prop:"Err",name:"Err",exported:true,typ:$error,tag:""}]);
ParseErrorencoding/csv.ParseErrorencoding/csv.V J�J=$pkg.Reader=$newType(0,$kindStruct,"csv.Reader",true,"encoding/csv",true,function(Comma_,Comment_,FieldsPerRecord_,LazyQuotes_,TrailingComma_,TrimLeadingSpace_,line_,column_,r_,lineBuffer_,fieldIndexes_){this.$val=this;if(arguments.length===0){this.Comma=0;this.Comment=0;this.FieldsPerRecord=0;this.LazyQuotes=false;this.TrailingComma=false;this.TrimLeadingSpace=false;this.line=0;this.column=0;this.r=O.nil;this.lineBuffer=new B.Buffer.ptr(P.nil,0,Q.zero(),0);this.fieldIndexes=R.nil;return;}this.Comma=Comma_;this.Comment=Comment_;this.FieldsPerRecord=FieldsPerRecord_;this.LazyQuotes=LazyQuotes_;this.TrailingComma=TrailingComma_;this.TrimLeadingSpace=TrimLeadingSpace_;this.line=line_;this.column=column_;this.r=r_;this.lineBuffer=lineBuffer_;this.fieldIndexes=fieldIndexes_;});�fW.methods=[{prop:"error",name:"error",pkg:"encoding/csv",typ:$funcType([$error],[$error],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([],[S,$error],false)},{prop:"ReadAll",name:"ReadAll",pkg:"",typ:$funcType([],[T,$error],false)},{prop:"readRune",name:"readRune",pkg:"encoding/csv",typ:$funcType([],[$Int32,$error],false)},{prop:"skip",name:"skip",pkg:"encoding/csv",typ:$funcType([$Int32],[$error],false)},{prop:"parseRecord",name:"parseRecord",pkg:"encoding/csv",typ:$funcType([],[S,$error],false)},{prop:"parseField",name:"parseField",pkg:"encoding/csv",typ:$funcType([],[$Bool,$Int32,$error],false)}];��J.init("encoding/csv",[{prop:"Comma",name:"Comma",exported:true,typ:$Int32,tag:""},{prop:"Comment",name:"Comment",exported:true,typ:$Int32,tag:""},{prop:"FieldsPerRecord",name:"FieldsPerRecord",exported:true,typ:$Int,tag:""},{prop:"LazyQuotes",name:"LazyQuotes",exported:true,typ:$Bool,tag:""},{prop:"TrailingComma",name:"TrailingComma",exported:true,typ:$Bool,tag:""},{prop:"TrimLeadingSpace",name:"TrimLeadingSpace",exported:true,typ:$Bool,tag:""},{prop:"line",name:"line",exported:false,typ:$Int,tag:""},{prop:"column",name:"column",exported:false,typ:$Int,tag:""},{prop:"r",name:"r",exported:false,typ:O,tag:""},{prop:"lineBuffer",name:"lineBuffer",exported:false,typ:B.Buffer,tag:""},{prop:"fieldIndexes",name:"fieldIndexes",exported:false,typ:R,tag:""}]);Reader	bytes.Bufferencoding/csv.Oencoding/csv.Pencoding/csv.Qencoding/csv.Rencoding/csv.Readerencoding/csv.Sencoding/csv.Tencoding/csv.W L��L=$pkg.Writer=$newType(0,$kindStruct,"csv.Writer",true,"encoding/csv",true,function(Comma_,UseCRLF_,w_){this.$val=this;if(arguments.length===0){this.Comma=0;this.UseCRLF=false;this.w=U.nil;return;}this.Comma=Comma_;this.UseCRLF=UseCRLF_;this.w=w_;});��X.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([S],[$error],false)},{prop:"Flush",name:"Flush",pkg:"",typ:$funcType([],[],false)},{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$error],false)},{prop:"WriteAll",name:"WriteAll",pkg:"",typ:$funcType([T],[$error],false)},{prop:"fieldNeedsQuotes",name:"fieldNeedsQuotes",pkg:"encoding/csv",typ:$funcType([$String],[$Bool],false)}];��L.init("encoding/csv",[{prop:"Comma",name:"Comma",exported:true,typ:$Int32,tag:""},{prop:"UseCRLF",name:"UseCRLF",exported:true,typ:$Bool,tag:""},{prop:"w",name:"w",exported:false,typ:U,tag:""}]);Writerencoding/csv.Sencoding/csv.Tencoding/csv.Uencoding/csv.Writerencoding/csv.X NN=$sliceType($emptyInterface);N OO=$ptrType(A.Reader);Obufio.Reader PP=$sliceType($Uint8);P QQ=$arrayType($Uint8,64);Q RR=$sliceType($Int);R SS=$sliceType($String);S TT=$sliceType(S);Tencoding/csv.S UU=$ptrType(A.Writer);Ubufio.Writer VV=$ptrType(I);Vencoding/csv.ParseError WW=$ptrType(J);Wencoding/csv.Reader XX=$ptrType(L);Xencoding/csv.Writer ErrTrailingComma ErrBareQuote ErrQuote ErrFieldCount C    $pkg.ErrTrailingComma=C.New("extra delimiter at end of line");encoding/csv.ErrTrailingComma
errors.New <    $pkg.ErrBareQuote=C.New("bare \" in non-quoted-field");encoding/csv.ErrBareQuote
errors.New 3    $pkg.ErrQuote=C.New("extraneous \" in field");encoding/csv.ErrQuote
errors.New @    $pkg.ErrFieldCount=C.New("wrong number of fields in line");encoding/csv.ErrFieldCount
errors.New  (*encoding/csv.ParseError).Error�EI.ptr.prototype.Error=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  Rb=D.Sprintf("line %d, column %d: %s",new N([new $Int(a.Line),new $Int(a.Column),a.Err]));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;    }return;}if($f===undefined){$f={$blk:I.ptr.prototype.Error};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};I.prototype.Error=function(){return this.$val.Error();};
ParseErrorencoding/csv.Nencoding/csv.ParseErrorfmt.Sprintf encoding/csv.NewReaderK��K=function(a){var $ptr,a;  �return new J.ptr(44,0,0,false,false,false,0,0,A.NewReader(a),new B.Buffer.ptr(P.nil,0,Q.zero(),0),R.nil);    };$pkg.NewReader=K;	NewReader	bufio.NewReaderbufio.Readerbytes.Bufferencoding/csv.NewReaderencoding/csv.Oencoding/csv.Pencoding/csv.Qencoding/csv.Rencoding/csv.Reader (*encoding/csv.Reader).error��J.ptr.prototype.error=function(a){var $ptr,a,b;b=this;  hreturn new I.ptr(b.line,b.column,a);    };J.prototype.error=function(a){return this.$val.error(a);};Readererror~encoding/csv.ParseErrorencoding/csv.Reader (*encoding/csv.Reader).Read�mJ.ptr.prototype.Read=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=S.nil;b=$ifaceNil;c=this;  Dcase 1:  Le=c.parseRecord();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;a=d[0];b=d[1];    if(!(a===S.nil)){  �$s=2;continue;    }    if(!($interfaceIsEqual(b,$ifaceNil))){    f=S.nil;g=b;a=f;b=g;$s=-1;return[a,b];    }    $s=1;continue;case 2:    if(c.FieldsPerRecord>0){    if(!((a.$length===c.FieldsPerRecord))){   c.column=0;    h=a;i=c.error($pkg.ErrFieldCount);a=h;b=i;$s=-1;return[a,b];    }    }else if(c.FieldsPerRecord===0){  }c.FieldsPerRecord=a.$length;    }    j=a;k=$ifaceNil;a=j;b=k;$s=-1;return[a,b];    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.Read=function(){return this.$val.Read();};Readerencoding/csv.ErrFieldCountencoding/csv.Readerencoding/csv.Sencoding/csv.error~encoding/csv.parseRecord~ (*encoding/csv.Reader).ReadAll��J.ptr.prototype.ReadAll=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=T.nil;b=$ifaceNil;c=this;  �case 1:  �e=c.Read();$s=3;case 3:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];g=d[1];    if($interfaceIsEqual(g,E.EOF)){    h=a;i=$ifaceNil;a=h;b=i;$s=-1;return[a,b];    }    if(!($interfaceIsEqual(g,$ifaceNil))){    j=T.nil;k=g;a=j;b=k;$s=-1;return[a,b];    }  ra=$append(a,f);    $s=1;continue;case 2:    $s=-1;return[a,b];}return;}if($f===undefined){$f={$blk:J.ptr.prototype.ReadAll};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.ReadAll=function(){return this.$val.ReadAll();};Readerencoding/csv.Readerencoding/csv.Sencoding/csv.Tio.EOF (*encoding/csv.Reader).readRune��J.ptr.prototype.readRune=function(){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  �c=a.r.ReadRune();$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[2];  cif(d===13){$s=2;continue;}$s=3;continue;    case 2:  ug=a.r.ReadRune();$s=4;case 4:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=g;d=f[0];e=f[2];    if($interfaceIsEqual(e,$ifaceNil)){    if(!((d===10))){  �a.r.UnreadRune();  �d=13;    }    }    case 3:  �a.column=a.column+(1)>>0;  �$s=-1;return[d,e];    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.readRune};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.readRune=function(){return this.$val.readRune();};Reader	readRune~encoding/csv.Reader (*encoding/csv.Reader).skip��J.ptr.prototype.skip=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  vcase 1:  ~d=b.readRune();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];f=c[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  �$s=-1;return f;    }    if(e===a){  �$s=-1;return $ifaceNil;    }    $s=1;continue;case 2:    $s=-1;return $ifaceNil;}return;}if($f===undefined){$f={$blk:J.ptr.prototype.skip};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.skip=function(a){return this.$val.skip(a);};Readerskip~encoding/csv.Readerencoding/csv.readRune~ "(*encoding/csv.Reader).parseRecord�
�J.ptr.prototype.parseRecord=function(){var $ptr,a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=S.nil;b=$ifaceNil;c=this;  c.line=c.line+(1)>>0;  'c.column=-1;  �e=c.r.ReadRune();$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;f=d[0];b=d[2];    if(!($interfaceIsEqual(b,$ifaceNil))){    g=S.nil;h=b;a=g;b=h;$s=-1;return[a,b];    }  if(!((c.Comment===0))&&(f===c.Comment)){$s=2;continue;}$s=3;continue;    case 2:    i=S.nil;k=c.skip(10);$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;a=i;b=j;$s=-1;return[a,b];    case 3:  [c.r.UnreadRune();  nc.lineBuffer.Reset();  �c.fieldIndexes=$subslice(c.fieldIndexes,0,0);  �case 5:  �l=c.lineBuffer.Len();  �n=c.parseField();$s=7;case 7:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;o=m[0];p=m[1];q=m[2];    if(o){  9c.fieldIndexes=$append(c.fieldIndexes,l);    }    if((p===10)||$interfaceIsEqual(q,E.EOF)){    if(c.fieldIndexes.$length===0){    r=S.nil;s=q;a=r;b=s;$s=-1;return[a,b];    }  �$s=6;continue;    }    if(!($interfaceIsEqual(q,$ifaceNil))){    t=S.nil;u=q;a=t;b=u;$s=-1;return[a,b];    }    $s=5;continue;case 6:  v=c.fieldIndexes.$length;  gw=c.lineBuffer.String();  �a=$makeSlice(S,v);  �x=c.fieldIndexes;y=0;while(true){if(!(y<x.$length)){break;}z=y;aa=((y<0||y>=x.$length)?($throwRuntimeError("index out of range"),undefined):x.$array[x.$offset+y]);    if(z===(v-1>>0)){  �((z<0||z>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+z]=$substring(w,aa));    }else{   ((z<0||z>=a.$length)?($throwRuntimeError("index out of range"),undefined):a.$array[a.$offset+z]=$substring(w,aa,(ab=c.fieldIndexes,ac=z+1>>0,((ac<0||ac>=ab.$length)?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+ac]))));    }    y++;}    ad=a;ae=$ifaceNil;a=ad;b=ae;$s=-1;return[a,b];    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.parseRecord};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.parseRecord=function(){return this.$val.parseRecord();};ReaderparseRecord~encoding/csv.Readerencoding/csv.Sencoding/csv.parseField~encoding/csv.skip~io.EOF !(*encoding/csv.Reader).parseField�TJ.ptr.prototype.parseField=function(){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;ai=$f.ai;aj=$f.aj;ak=$f.ak;al=$f.al;am=$f.am;an=$f.an;ao=$f.ao;ap=$f.ap;aq=$f.aq;ar=$f.ar;as=$f.as;at=$f.at;au=$f.au;av=$f.av;aw=$f.aw;ax=$f.ax;ay=$f.ay;az=$f.az;b=$f.b;ba=$f.ba;bb=$f.bb;bc=$f.bc;bd=$f.bd;be=$f.be;bf=$f.bf;bg=$f.bg;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=false;b=0;c=$ifaceNil;d=this;  !Of=d.readRune();$s=1;case 1:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;g=e[0];c=e[1];  !hcase 2:if(!($interfaceIsEqual(c,$ifaceNil)&&d.TrimLeadingSpace&&!((g===10))&&F.IsSpace(g))){$s=3;continue;}  !�i=d.readRune();$s=4;case 4:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;g=h[0];c=h[1];    $s=2;continue;case 3:    if($interfaceIsEqual(c,E.EOF)&&!((d.column===0))){    j=true;k=0;l=c;a=j;b=k;c=l;$s=-1;return[a,b,c];    }    if(!($interfaceIsEqual(c,$ifaceNil))){    m=false;n=0;o=c;a=m;b=n;c=o;$s=-1;return[a,b,c];    }    p=g;  "Iif(p===(d.Comma)){$s=6;continue;}if(p===(10)){$s=7;continue;}if(p===(34)){$s=8;continue;}$s=9;continue;    case 6:    $s=10;continue;    case 7:    if(d.column===0){    q=false;r=g;s=$ifaceNil;a=q;b=r;c=s;$s=-1;return[a,b,c];    }    t=true;u=g;v=$ifaceNil;a=t;b=u;c=v;$s=-1;return[a,b,c];    case 8:  #case 11:  #(x=d.readRune();$s=13;case 13:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}w=x;g=w[0];c=w[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    if($interfaceIsEqual(c,E.EOF)){    if(d.LazyQuotes){    y=true;z=0;aa=c;a=y;b=z;c=aa;$s=-1;return[a,b,c];    }    ab=false;ac=0;ad=d.error($pkg.ErrQuote);a=ab;b=ac;c=ad;$s=-1;return[a,b,c];    }    ae=false;af=0;ag=c;a=ae;b=af;c=ag;$s=-1;return[a,b,c];    }    ah=g;  #�if(ah===(34)){$s=15;continue;}if(ah===(10)){$s=16;continue;}$s=17;continue;    case 15:  $aj=d.readRune();$s=18;case 18:if($c){$c=false;aj=aj.$blk();}if(aj&&aj.$blk!==undefined){break s;}ai=aj;g=ai[0];c=ai[1];    if(!($interfaceIsEqual(c,$ifaceNil))||(g===d.Comma)){  $N$s=12;continue s;    }    if(g===10){    ak=true;al=g;am=$ifaceNil;a=ak;b=al;c=am;$s=-1;return[a,b,c];    }    if(!((g===34))){    if(!d.LazyQuotes){  $�d.column=d.column-(1)>>0;    an=false;ao=0;ap=d.error($pkg.ErrQuote);a=an;b=ao;c=ap;$s=-1;return[a,b,c];    }  %$d.lineBuffer.WriteRune(34);    }    $s=17;continue;    case 16:  %Xd.line=d.line+(1)>>0;  %ed.column=-1;    case 17:    case 14:  %{d.lineBuffer.WriteRune(g);    $s=11;continue;case 12:    $s=10;continue;case 9:  %�case 19:  %�d.lineBuffer.WriteRune(g);  %�ar=d.readRune();$s=21;case 21:if($c){$c=false;ar=ar.$blk();}if(ar&&ar.$blk!==undefined){break s;}aq=ar;g=aq[0];c=aq[1];    if(!($interfaceIsEqual(c,$ifaceNil))||(g===d.Comma)){  &!$s=20;continue;    }    if(g===10){    as=true;at=g;au=$ifaceNil;a=as;b=at;c=au;$s=-1;return[a,b,c];    }    if(!d.LazyQuotes&&(g===34)){    av=false;aw=0;ax=d.error($pkg.ErrBareQuote);a=av;b=aw;c=ax;$s=-1;return[a,b,c];    }    $s=19;continue;case 20:    case 10:    case 5:    if(!($interfaceIsEqual(c,$ifaceNil))){    if($interfaceIsEqual(c,E.EOF)){    ay=true;az=0;ba=c;a=ay;b=az;c=ba;$s=-1;return[a,b,c];    }    bb=false;bc=0;bd=c;a=bb;b=bc;c=bd;$s=-1;return[a,b,c];    }    be=true;bf=g;bg=$ifaceNil;a=be;b=bf;c=bg;$s=-1;return[a,b,c];    }return;}if($f===undefined){$f={$blk:J.ptr.prototype.parseField};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.ai=ai;$f.aj=aj;$f.ak=ak;$f.al=al;$f.am=am;$f.an=an;$f.ao=ao;$f.ap=ap;$f.aq=aq;$f.ar=ar;$f.as=as;$f.at=at;$f.au=au;$f.av=av;$f.aw=aw;$f.ax=ax;$f.ay=ay;$f.az=az;$f.b=b;$f.ba=ba;$f.bb=bb;$f.bc=bc;$f.bd=bd;$f.be=be;$f.bf=bf;$f.bg=bg;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};J.prototype.parseField=function(){return this.$val.parseField();};ReaderparseField~encoding/csv.ErrBareQuoteencoding/csv.ErrQuoteencoding/csv.Readerencoding/csv.error~encoding/csv.readRune~io.EOFunicode.IsSpace encoding/csv.NewWriterM`M=function(a){var $ptr,a;  *�return new L.ptr(44,false,A.NewWriter(a));    };$pkg.NewWriter=M;	NewWriterbufio.NewWriterbufio.Writerencoding/csv.NewWriterencoding/csv.Uencoding/csv.Writer (*encoding/csv.Writer).Write�'L.ptr.prototype.Write=function(a){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  +�c=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  +�if(e>0){$s=3;continue;}$s=4;continue;    case 3:  +�h=b.w.WriteRune(b.Comma);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[1];    if(!($interfaceIsEqual(i,$ifaceNil))){  ,$s=-1;return i;    }    case 4:  ,�if(!b.fieldNeedsQuotes(f)){$s=6;continue;}$s=7;continue;    case 6:  ,�k=b.w.WriteString(f);$s=8;case 8:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;l=j[1];    if(!($interfaceIsEqual(l,$ifaceNil))){  ,�$s=-1;return l;    }  ,�d++;$s=1;continue;    case 7:  -m=b.w.WriteByte(34);$s=9;case 9:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}n=m;    if(!($interfaceIsEqual(n,$ifaceNil))){  -8$s=-1;return n;    }  -Jo=f;p=0;case 10:if(!(p<o.length)){$s=11;continue;}q=$decodeRune(o,p);r=q[0];  -ls=$ifaceNil;    t=r;  -�if(t===(34)){$s=13;continue;}if(t===(13)){$s=14;continue;}if(t===(10)){$s=15;continue;}$s=16;continue;    case 13:  -�v=b.w.WriteString("\"\"");$s=18;case 18:if($c){$c=false;v=v.$blk();}if(v&&v.$blk!==undefined){break s;}u=v;s=u[1];    $s=17;continue;    case 14:  -�if(!b.UseCRLF){$s=19;continue;}$s=20;continue;    case 19:  -�w=b.w.WriteByte(13);$s=21;case 21:if($c){$c=false;w=w.$blk();}if(w&&w.$blk!==undefined){break s;}s=w;    case 20:    $s=17;continue;    case 15:  .if(b.UseCRLF){$s=22;continue;}$s=23;continue;    case 22:  ."y=b.w.WriteString("\r\n");$s=25;case 25:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}x=y;s=x[1];    $s=24;continue;case 23:  .Uz=b.w.WriteByte(10);$s=26;case 26:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}s=z;    case 24:    $s=17;continue;case 16:  .�ab=b.w.WriteRune(r);$s=27;case 27:if($c){$c=false;ab=ab.$blk();}if(ab&&ab.$blk!==undefined){break s;}aa=ab;s=aa[1];    case 17:    case 12:    if(!($interfaceIsEqual(s,$ifaceNil))){  .�$s=-1;return s;    }    p+=q[1];$s=10;continue;case 11:  .�ac=b.w.WriteByte(34);$s=28;case 28:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}ad=ac;    if(!($interfaceIsEqual(ad,$ifaceNil))){  /$s=-1;return ad;    }    d++;$s=1;continue;case 2:  /ae=$ifaceNil;  /#if(b.UseCRLF){$s=29;continue;}$s=30;continue;    case 29:  /4ag=b.w.WriteString("\r\n");$s=32;case 32:if($c){$c=false;ag=ag.$blk();}if(ag&&ag.$blk!==undefined){break s;}af=ag;ae=af[1];    $s=31;continue;case 30:  /aah=b.w.WriteByte(10);$s=33;case 33:if($c){$c=false;ah=ah.$blk();}if(ah&&ah.$blk!==undefined){break s;}ae=ah;    case 31:  /$s=-1;return ae;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Write=function(a){return this.$val.Write(a);};Writerencoding/csv.Writerencoding/csv.fieldNeedsQuotes~ (*encoding/csv.Writer).Flush��L.ptr.prototype.Flush=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  0'b=a.w.Flush();$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}b;    $s=-1;return;}return;}if($f===undefined){$f={$blk:L.ptr.prototype.Flush};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Flush=function(){return this.$val.Flush();};Writerencoding/csv.Writer (*encoding/csv.Writer).Error�/L.ptr.prototype.Error=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=this;  0�c=a.w.Write(P.nil);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  0�$s=-1;return d;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.Error};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.Error=function(){return this.$val.Error();};Writerencoding/csv.Pencoding/csv.Writer (*encoding/csv.Writer).WriteAll��L.ptr.prototype.WriteAll=function(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  1Uc=a;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  1xf=b.Write(e);$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;    if(!($interfaceIsEqual(g,$ifaceNil))){  1�$s=-1;return g;    }    d++;$s=1;continue;case 2:  1�h=b.w.Flush();$s=4;case 4:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}$s=-1;return h;    }return;}if($f===undefined){$f={$blk:L.ptr.prototype.WriteAll};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};L.prototype.WriteAll=function(a){return this.$val.WriteAll(a);};Writerencoding/csv.Writer '(*encoding/csv.Writer).fieldNeedsQuotes�cL.ptr.prototype.fieldNeedsQuotes=function(a){var $ptr,a,b,c,d;b=this;    if(a===""){  5+return false;    }    if(a==="\\."||G.ContainsRune(a,b.Comma)||G.ContainsAny(a,"\"\r\n")){  5�return true;    }  5�c=H.DecodeRuneInString(a);d=c[0];  5�return F.IsSpace(d);    };L.prototype.fieldNeedsQuotes=function(a){return this.$val.fieldNeedsQuotes(a);};WriterfieldNeedsQuotes~encoding/csv.Writerstrings.ContainsAnystrings.ContainsRuneunicode.IsSpaceunicode/utf8.DecodeRuneInString �]{"Base":13817,"Files":[{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/encoding/csv/reader.go","Base":1,"Size":10027,"Lines":[0,55,109,159,160,228,299,325,328,406,481,531,534,558,561,607,610,678,681,759,824,827,896,965,975,978,993,996,1028,1031,1056,1059,1096,1099,1169,1212,1215,1262,1265,1279,1282,1328,1331,1388,1391,1406,1429,1432,1446,1449,1465,1490,1502,1503,1512,1521,1530,1540,1547,1553,1564,1566,1567,1615,1663,1688,1735,1797,1831,1833,1834,1872,1943,1945,1946,2011,2017,2100,2162,2219,2284,2286,2287,2338,2341,2417,2491,2525,2528,2531,2552,2586,2629,2641,2715,2779,2849,2894,2908,2973,3038,3116,3190,3265,3324,3345,3418,3470,3490,3555,3631,3700,3723,3724,3736,3748,3770,3850,3919,3998,4052,4077,4117,4184,4204,4206,4207,4260,4298,4315,4329,4358,4361,4363,4364,4412,4454,4475,4493,4513,4528,4531,4533,4534,4587,4640,4703,4765,4809,4875,4930,4937,4969,4990,4999,5003,5021,5040,5044,5047,5048,5076,5116,5161,5202,5206,5242,5276,5279,5299,5301,5302,5353,5390,5469,5547,5560,5621,5628,5654,5675,5698,5702,5720,5739,5743,5779,5782,5784,5785,5857,5933,5976,6020,6050,6051,6113,6175,6241,6258,6288,6306,6325,6346,6360,6365,6369,6372,6384,6400,6402,6403,6474,6516,6523,6549,6567,6581,6585,6604,6618,6622,6625,6627,6628,6688,6750,6810,6868,6939,6949,6964,6965,7024,7083,7117,7118,7148,7165,7183,7186,7187,7227,7254,7257,7275,7276,7298,7335,7336,7382,7389,7417,7418,7460,7477,7525,7529,7530,7568,7601,7621,7626,7635,7639,7640,7658,7677,7681,7684,7685,7720,7795,7872,7949,8020,8037,8068,8105,8106,8144,8169,8195,8206,8251,8255,8258,8259,8279,8281,8282,8351,8431,8453,8525,8550,8627,8652,8655,8656,8693,8715,8718,8735,8758,8761,8762,8775,8790,8812,8813,8825,8876,8897,8922,8926,8949,8950,8961,8979,8988,8996,9022,9041,9064,9087,9113,9120,9160,9166,9191,9196,9211,9224,9251,9288,9306,9312,9332,9358,9364,9383,9407,9424,9465,9472,9502,9535,9541,9555,9568,9586,9591,9621,9625,9626,9636,9656,9664,9694,9720,9756,9766,9771,9790,9815,9820,9855,9898,9903,9907,9910,9911,9928,9949,9972,9976,9999,10002,10003,10025],"Infos":null},{"Name":"/var/folders/wr/htz9c2dd0fsf9rzzvqgs3v3m0000gp/T/gopherjs_playground.jKfmqZLWX7/goroot/src/encoding/csv/writer.go","Base":10029,"Size":3787,"Lines":[0,55,109,159,160,172,173,182,191,197,208,219,235,237,238,288,291,360,435,515,518,551,554,630,651,710,767,790,792,793,845,883,900,914,943,946,948,949,1025,1093,1141,1173,1186,1239,1254,1259,1263,1264,1319,1376,1410,1463,1478,1483,1495,1499,1544,1558,1562,1563,1592,1609,1624,1637,1672,1686,1706,1737,1743,1757,1776,1814,1827,1858,1864,1876,1907,1912,1931,1946,1951,1955,1956,2001,2015,2019,2022,2037,2053,2088,2098,2126,2129,2141,2143,2144,2207,2270,2297,2310,2312,2313,2392,2425,2451,2463,2465,2466,2545,2599,2633,2658,2676,2690,2694,2697,2717,2719,2720,2794,2854,2917,2990,3066,3139,3211,3280,3335,3410,3450,3507,3562,3580,3595,3598,3698,3712,3715,3716,3757,3785],"Infos":null}]}
 