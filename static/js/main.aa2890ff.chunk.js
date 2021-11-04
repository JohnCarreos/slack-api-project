(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{116:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},178:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(47),i=n.n(c),r=(n(157),n(158),n(8)),l=n(60),o=n(19),d=n(281),h=n(288),u=n(267),j=n(275),b=n(289),m=n(282),p=n(286),O=n(287),g=n(285),x=n(129),v=n(279),f=n(29),C=n.n(f);var S,y,k=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(s){return console.log(s),t}})),a=Object(r.a)(n,2),c=a[0],i=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(s){console.log(s)}}]},I=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(s.useEffect)((function(){a(!0),setTimeout((function(){a(!1)}),3e3)}),[]);var c=k("headers",[]),i=Object(r.a)(c,2),l=(i[0],i[1]),o=k("userID",[]),d=Object(r.a)(o,2),h=(d[0],d[1]),u=Object(s.useState)(""),j=Object(r.a)(u,2),b=j[0],m=j[1],p=Object(s.useState)(""),O=Object(r.a)(p,2),g=O[0],x=O[1],v=Object(s.useState)(""),f=Object(r.a)(v,2),S=f[0],y=f[1],I=Object(s.useState)(!1),U=Object(r.a)(I,2),w=U[0],T=U[1],M=Object(s.useState)(!1),E=Object(r.a)(M,2),N=E[0],D=E[1],R=k("status",{isLoggedIn:!1,signedOut:!1}),A=Object(r.a)(R,2),B=(A[0],A[1]),W=Object(s.useState)({passwordsDoNotMatch:!1,invalidEmailFormat:!1,emailIsEmpty:!1,passwordIsEmpty:!1,passwordTooShort:!1}),F=Object(r.a)(W,2),z=F[0],P=F[1],L=Object(s.useState)({successful:!1,failed:!1}),_=Object(r.a)(L,2),G=_[0],H=_[1],V=Object(s.useState)({successful:!1,failed:!1}),J=Object(r.a)(V,2),Y=J[0],q=J[1],X=function(){C()({url:"https://slackapi.avionschool.com/api/v1/auth",data:{email:S,password:b,password_confirmation:g},headers:{},method:"POST"}).then((function(){H({successful:!0}),K()})).catch((function(e){console.log(e),H({failed:!0})}))},K=function(){y(""),m(""),x("")},Q=function(){a(!0),setTimeout((function(){a(!1),D(!0)}),2e3),B({isLoggedIn:!0,signedOut:!1})};return{password:b,setPassword:m,email:S,setEmail:y,logIn:function(e){e.preventDefault(),S?b?S.includes(".")?C()({url:"https://slackapi.avionschool.com/api/v1/auth/sign_in",data:{email:S,password:b},headers:{},method:"POST"}).then((function(e){h(e.data.data.id),l(e.headers),Q(),K()})).catch((function(e){console.log(e),q({failed:!0})})):P({invalidEmailFormat:!0}):P({passwordIsEmpty:!0}):P({emailIsEmpty:!0})},setIsLogin:q,isLogin:Y,isRegistering:w,setIsRegistering:T,secondPassword:g,setSecondPassword:x,register:function(e){e.preventDefault(),S.includes(".")?b&&g?b!==g?P({passwordsDoNotMatch:!0}):b.length<6?P({passwordTooShort:!0}):X():P({passwordIsEmpty:!0}):P({invalidEmailFormat:!0})},registerUser:X,isRegister:G,setIsRegister:H,validInfo:z,setValidInfo:P,setLoading:a,loading:n,transition:Q,route:N,setRoute:D}},U=(n(178),n(69)),w=n(94),T=n(119),M=n(2),E=Object(x.a)(),N=function(){var e=I(),t=e.password,n=e.setPassword,s=e.secondPassword,a=e.setSecondPassword,c=e.email,i=e.setEmail,r=e.logIn,l=e.isLogin,x=e.setIsLogin,f=e.isRegistering,C=e.setIsRegistering,S=e.register,y=e.isRegister,k=e.setIsRegister,N=e.setValidInfo,D=e.validInfo,R=e.loading,A=e.route;return Object(M.jsxs)(M.Fragment,{children:[A&&Object(M.jsx)(o.a,{to:"/chat"}),R?Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"loader",children:[Object(M.jsx)(U.HashLoader,{loading:R,color:"purple",size:80}),Object(M.jsx)("h3",{children:"Loading..."})]})}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"background"}),Object(M.jsxs)(w.Fade,{up:!0,children:[Object(M.jsxs)("div",{className:"heading-container",children:[Object(M.jsxs)("span",{className:"heading",children:[Object(M.jsx)(T.a,{}),"Avion Slack App"]}),Object(M.jsx)("span",{className:"website",children:"avionschool.slack.com"})]}),Object(M.jsx)(v.a,{theme:E,children:Object(M.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(M.jsx)(u.a,{}),Object(M.jsxs)(p.a,{sx:{marginTop:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(M.jsx)(d.a,{sx:{m:1,bgcolor:"purple"}}),Object(M.jsx)(O.a,{component:"h1",variant:"h5",children:f?"Register ":"Sign in"}),Object(M.jsxs)(p.a,{component:"form",onClick:function(){x(!1),k(!1),N(!1)},noValidate:!0,sx:{mt:1},children:[Object(M.jsx)(j.a,{onChange:function(e){return i(e.target.value)},value:c,margin:"normal",fullWidth:!0,label:"Email Address",type:"text",autoFocus:!0}),Object(M.jsx)(j.a,{onChange:function(e){return n(e.target.value)},value:t,margin:"normal",fullWidth:!0,label:"Password",type:"password"}),f&&Object(M.jsxs)(w.Fade,{up:!0,children:[" ",Object(M.jsx)(j.a,{onChange:function(e){return a(e.target.value)},value:s,margin:"normal",fullWidth:!0,label:"Re-type Password",type:"password"})," "]}),l.failed&&Object(M.jsx)("span",{className:"failed",children:"Invalid email or password"}),y.successful&&Object(M.jsx)("span",{className:"success",children:"Registration Success!"}),y.failed&&Object(M.jsx)("span",{className:"failed",children:"Email already taken"}),D.invalidEmailFormat&&Object(M.jsx)("span",{className:"failed",children:"Invalid email format"}),D.emailIsEmpty&&Object(M.jsx)("span",{className:"failed",children:"Email is required"}),D.passwordIsEmpty&&Object(M.jsx)("span",{className:"failed",children:"Password is required"}),D.passwordsDoNotMatch&&Object(M.jsx)("span",{className:"failed",children:"Passwords do not match"})]}),Object(M.jsx)(h.a,{onClick:function(e){f?S(e):r(e)},type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"purple"},children:f?"Sign up":"Sign In"}),Object(M.jsx)(m.a,{container:!0,children:Object(M.jsx)(m.a,{item:!0,children:Object(M.jsx)(b.a,{style:{cursor:"pointer"},onClick:function(){return C(!f)},variant:"body2",children:f?"Already have an account? Sign in":"Don't have an account? Sign Up"})})})]}),Object(M.jsxs)(O.a,{className:"copyright",variant:"body2",color:"text.secondary",align:"center",sx:{mt:3,mb:2},children:["Copyright \xa9 ",Object(M.jsx)("span",{color:"inherit",children:"Avion School Slack App"})," ",(new Date).getFullYear(),"."]})]})})]})]})]})},D=function(e){var t=e.loading;return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)("div",{className:"loader",children:[Object(M.jsx)(U.HashLoader,{loading:t,color:"purple",size:80}),Object(M.jsx)("h3",{children:"Almost there..."})]})})},R=n(17),A=n(48),B=function(){var e=k("headers",[]),t=Object(r.a)(e,1)[0],n=k("userID",[]),a=Object(r.a)(n,1)[0],c=Object(s.useState)([]),i=Object(r.a)(c,2),l=i[0],o=i[1],d=Object(s.useState)([]),h=Object(r.a)(d,2),u=h[0],j=h[1],b=Object(s.useState)(!1),m=Object(r.a)(b,2),p=m[0],O=m[1],g=Object(s.useState)(""),x=Object(r.a)(g,2),v=x[0],f=x[1],I=Object(s.useState)([]),U=Object(r.a)(I,2),w=U[0],T=U[1],M=Object(s.useState)(!1),E=Object(r.a)(M,2),N=E[0],D=E[1],B=Object(s.useState)([]),W=Object(r.a)(B,2),F=W[0],z=W[1],P=Object(s.useState)([]),L=Object(r.a)(P,2),_=L[0],G=L[1],H=Object(s.useState)([]),V=Object(r.a)(H,2),J=V[0],Y=V[1],q=Object(s.useState)({home:!0,channel:!1}),X=Object(r.a)(q,2),K=X[0],Q=X[1],Z=k("status",{isLoggedIn:!1,signedOut:!1}),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=l.filter((function(e){return!e.email.includes(t.uid)})),se=Object(s.useState)({success:!1,failed:!1}),ae=Object(r.a)(se,2),ce=ae[0],ie=ae[1],re=Object(s.useState)(""),le=Object(r.a)(re,2),oe=le[0],de=le[1],he=Object(s.useState)(!1),ue=Object(r.a)(he,2),je=ue[0],be=ue[1],me=Object(s.useState)(!1),pe=Object(r.a)(me,2),Oe=pe[0],ge=pe[1],xe=Object(s.useState)([]),ve=Object(r.a)(xe,2),fe=ve[0],Ce=ve[1],Se=Object(s.useState)({openSB:!1,vertical:"top",horizontal:"center"}),ye=Object(r.a)(Se,2),ke=ye[0],Ie=ye[1];Object(s.useEffect)((function(){O(!0),setTimeout((function(){O(!1)}),2e3)}),[]),Object(s.useEffect)((function(){C()({url:"https://slackapi.avionschool.com/api/v1/users",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){o(e.data.data)})).catch((function(e){console.log(e)}));C()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){return j(e.data.data)})).catch((function(e){console.log(e)})),De()}),[t]);var Ue=function(e){C()({url:"https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e,"&receiver_class=Channel"),data:{},method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){T(e.data.data)})).catch((function(e){console.log(e)}))},we=function(e){C()({url:"https://slackapi.avionschool.com/api/v1/messages?receiver_id=".concat(e.id,"&receiver_class=User"),method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){T(e.data.data)})).catch((function(e){console.log(e)}))},Te=Object(s.useState)({currentTime:"",currentDate:""}),Me=Object(r.a)(Te,2),Ee=Me[0],Ne=Me[1],De=function(){var e=new Date,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday",setInterval((function(){var n=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),s=t[e.getDay()];Ne({currentTime:n,currentDate:s})}),1e3)};return{loading:p,headers:t,users:l,channels:u,handleClickOpenChannel:function(){be(!je)},openChannel:je,inviteUserToAChannel:function(e,n,s){var a,c=l.filter((function(t){return t.email===e}));C()({url:"https://slackapi.avionschool.com/api/v1/channel/add_member",data:{id:"".concat(fe.id),member_id:"".concat(null===(a=c[0])||void 0===a?void 0:a.id)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,uid:t.uid,client:t.client}}).then((function(e){e.data.errors?de(e.data.errors):(Ie(Object(A.a)(Object(A.a)({},ke),{},{openSB:!0})),s(""),de(""),n()),console.log(e)})).catch((function(e){console.error(e)}))},createNewChannelWithUser:function(e,n,s){C()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{name:"".concat(e),user_ids:[a]},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){var a;if(C()({url:"https://slackapi.avionschool.com/api/v1/channels",data:{},method:"GET",headers:{"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}}).then((function(e){return j(e.data.data)})).catch((function(e){console.log(e)})),null===(a=e.data.data)||void 0===a?void 0:a.id)Ie(Object(A.a)(Object(A.a)({},ke),{},{openSB:!0})),n(),s("");else{var c=e.data.errors;ie({failed:Object(R.a)(c).join(". ")})}})).catch((function(e){console.log(e)}))},handleClickOpenUsers:function(){ge(!Oe)},openUsers:Oe,handleDrawerToggle:function(){D(!N)},mobileOpen:N,allMessagesRetrieved:w,message:v,setMessage:f,selectedChannel:fe,setSelectedChannel:Ce,createMessageInAChannel:function(e){C()({url:"https://slackapi.avionschool.com/api/v1/messages",data:{receiver_id:"".concat(fe.id),receiver_class:"Channel",body:"".concat(e)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then(Ue(fe.id)).catch((function(e){console.log(e)}))},intervalRetrieveMessages:function(e){clearTimeout(S),clearTimeout(y),G([]),Ue(e),S=setInterval((function(){Ue(e)}),1500)},userID:a,returnToHome:function(){Q({home:!0,channel:!1}),clearTimeout(S),clearTimeout(y),T([]),Ce([]),G([])},sortByEmail:function(e){var t=ne.filter((function(t){return t.email.includes(e)}));z(t)},searchResults:F,selectedUser:_,createDirectMessageToAUser:function(e){C()({url:"https://slackapi.avionschool.com/api/v1/messages",data:{receiver_id:"".concat(_.id),receiver_class:"User",body:"".concat(e)},method:"POST",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).catch((function(e){console.log(e)}))},intervalRetrieveMessagesWithUser:function(e){clearTimeout(S),clearTimeout(y),Ce([]),G(e),we(e),z([]),y=setInterval((function(){we(e)}),1500)},currentDateAndTime:Ee,isCreateChannel:ce,setIsCreateChannel:ie,userInviteError:oe,setUserInviteError:de,stateSB:ke,setStateSB:Ie,retrieveChannelUsers:function(e){C()({url:"https://slackapi.avionschool.com/api/v1/channels/".concat(e),method:"GET",headers:{"access-token":t["access-token"],expiry:t.expiry,client:t.client,uid:t.uid}}).then((function(e){var t=e.data.data.channel_members.map((function(e){return e.user_id})),n=l.filter((function(e){return t.includes(e.id)}));Y(n),Q({home:!1,channel:!0})})).catch((function(e){console.log(e)}))},channelMembers:J,usersDisplayed:K,signOut:function(){Q({home:!0,channel:!1}),clearTimeout(S),clearTimeout(y),T([]),Ce([]),G([]),te({isLoggedIn:!1,signedOut:!0})},userStatus:ee,setMobileOpen:D}},W=n(283),F=n(274),z=n(292),P=n(290),L=n(291),_=n(123),G=n.n(_),H=n(122),V=n.n(H),J=n(298),Y=n(301),q=n(300),X=n(299),K=function(e){var t=e.open,n=e.handleClose,a=e.dialogTitleText,c=e.inviteUserToAChannel,i=e.label,l=e.type,o=e.createNewChannelWithUser,d=e.intervalRetrieveMessagesWithUser,u=e.sortByEmail,b=e.searchResults,m=e.isCreateChannel,p=e.setIsCreateChannel,O=e.userInviteError,g=e.setUserInviteError,x=e.setGetChannel,v=e.setGetEmail,f=Object(s.useState)(""),C=Object(r.a)(f,2),S=C[0],y=C[1];return Object(M.jsx)("div",{children:Object(M.jsxs)(J.a,{open:t,onClose:n,children:[Object(M.jsx)(X.a,{sx:{pb:1},children:a}),Object(M.jsxs)(q.a,{children:[u&&Object(M.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:i,type:l,fullWidth:!0,variant:"standard",onChange:function(e){y(e.target.value),u(S)},value:S}),b&&Object(M.jsx)(P.a,{className:"list-results",children:b.map((function(e){return Object(M.jsx)(F.a,{sx:{pl:4},onClick:function(){d(e),n(),y("")},children:Object(M.jsx)(L.a,{primary:"".concat(e.uid)})},e.id)}))}),c&&Object(M.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:i,type:l,fullWidth:!0,variant:"standard",onChange:function(e){y(e.target.value)},value:S}),O&&Object(M.jsx)("span",{style:{color:"red"},children:O}),o&&Object(M.jsx)(j.a,{autoFocus:!0,margin:"dense",id:"name",label:i,type:l,fullWidth:!0,variant:"standard",onChange:function(e){y(e.target.value)},value:S}),(null===m||void 0===m?void 0:m.failed)&&Object(M.jsx)("span",{style:{color:"red"},children:Object(R.a)(m.failed)})]}),Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(h.a,{onClick:function(){n(),y(""),m&&p(!1),O&&g("")},children:"Cancel"}),c&&Object(M.jsx)(h.a,{onClick:function(){v(S),c(S,n,y),setTimeout((function(){v("")}),4e3)},children:"Invite"}),o&&Object(M.jsx)(h.a,{sx:{alignItems:"center"},onClick:function(){x(S),o(S,n,y),setTimeout((function(){x("")}),4e3)},children:"Create"})]})]})})},Q=n(121),Z=n.n(Q),$=n(125),ee=n.n($),te=n(124),ne=n.n(te);function se(e){var t=e.open,n=e.handleClose,s=e.Avatar,a=e.signOut,c=e.headers.uid.toString();return Object(M.jsx)("div",{children:Object(M.jsxs)(J.a,{open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(M.jsx)(X.a,{id:"alert-dialog-title",children:"Are you sure want to sign out?"}),Object(M.jsxs)(q.a,{style:{display:"flex",alignItems:"center"},children:[Object(M.jsx)(s,{style:{marginRight:"10px",backgroundColor:"purple"},children:"".concat(c[0].toUpperCase())}),c]}),Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(h.a,{onClick:n,children:"No"}),Object(M.jsx)(h.a,{onClick:function(){a(),n()},autoFocus:!0,children:"Yes"})]})]})})}var ae=n(120),ce=function(e){e.handleClickOpenChannel,e.openChannel;var t=e.channels,n=e.createNewChannelWithUser,c=(e.handleClickOpenUsers,e.users),i=(e.openUsers,e.setSelectedChannel),l=e.intervalRetrieveMessages,h=e.returnToHome,u=e.sortByEmail,j=e.searchResults,b=e.intervalRetrieveMessagesWithUser,m=e.isCreateChannel,p=e.setIsCreateChannel,O=e.setGetChannel,g=e.retrieveChannelUsers,x=e.userStatus,v=e.headers,f=e.signOut,C=e.setMobileOpen,S=Object(s.useState)(!1),y=Object(r.a)(S,2),k=y[0],I=y[1],U=Object(s.useState)(!1),w=Object(r.a)(U,2),T=w[0],E=w[1],N=a.a.useState(!1),D=Object(r.a)(N,2),R=D[0],A=D[1];return Object(M.jsxs)(M.Fragment,{children:[x.signedOut&&Object(M.jsx)(o.a,{to:"/"}),Object(M.jsxs)(z.a,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},sx:{bgcolor:"purple"},children:[Object(M.jsx)("span",{style:{color:"white"},children:"Avion Slack App"}),Object(M.jsx)(ae.a,{className:"toolbar-close-button",onClick:function(){return C(!1)}})]}),Object(M.jsxs)("div",{className:"sidebar-container channel-list",children:[Object(M.jsxs)("div",{className:"side-navigation",style:{backgroundColor:"#b491c8"},children:[Object(M.jsxs)(P.a,{children:[Object(M.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){h()},children:[Object(M.jsx)(Z.a,{}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"Home"})]}),Object(M.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){I(!0)},children:[Object(M.jsx)(V.a,{}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"Add"}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"Channel"})]}),Object(M.jsxs)(F.a,{className:"side-navigation-item",onClick:function(){E(!0)},children:[Object(M.jsx)(G.a,{}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"Direct"}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"Message"})]})]}),Object(M.jsx)(P.a,{children:Object(M.jsxs)(F.a,{className:"side-navigation-item sign-out-button",onClick:function(){A(!0)},children:[Object(M.jsx)(ne.a,{}),Object(M.jsx)("span",{children:"Sign Out"})]})})]}),Object(M.jsxs)("div",{className:"main-sidebar",children:[Object(M.jsxs)(P.a,{children:[Object(M.jsxs)("div",{style:{display:"flex"},children:[Object(M.jsx)(ee.a,{sx:{mt:.5,mr:1}}),Object(M.jsx)(L.a,{primary:"Channels (".concat(t?t.length:0,")")})]}),Object(M.jsx)(P.a,{component:"div",disablePadding:!0,children:t?t.map((function(e){return Object(M.jsx)("div",{children:Object(M.jsx)(F.a,{sx:{pl:4},onClick:function(){l(e.id),i(e),g(e.id)},children:Object(M.jsx)(L.a,{primary:"# ".concat(e.name)})})},e.id)})):Object(M.jsx)(F.a,{sx:{pl:4},children:Object(M.jsx)(L.a,{primary:"No users Available"})})})]}),Object(M.jsx)(P.a,{})]})]}),Object(M.jsx)(K,{open:k,handleClose:function(){I(!1)},dialogTitleText:"Enter New Channel Name You Want to Create",label:"Channel Name",type:"text",createNewChannelWithUser:n,isCreateChannel:m,setIsCreateChannel:p,setGetChannel:O}),Object(M.jsx)(K,{open:T,handleClose:function(){E(!1)},dialogTitleText:"Who do you want to send a message to?",label:"Email",type:"text",users:c,sortByEmail:u,searchResults:j,intervalRetrieveMessagesWithUser:b}),Object(M.jsx)(se,{open:R,setOpen:A,handleClickOpen:function(){A(!0)},handleClose:function(){A(!1)},Avatar:d.a,userStatus:x,headers:v,signOut:f})]})},ie=n(127),re=n.n(ie),le=n(294),oe=n(126),de=n.n(oe),he=n(293),ue=(n(116),function(e){var t=e.drawerWidth,n=e.headers,a=e.handleDrawerToggle,c=e.channels,i=e.selectedChannel,l=e.inviteUserToAChannel,o=e.userID,d=e.selectedUser,h=e.currentDateAndTime,u=e.userInviteError,j=e.setUserInviteError,b=e.setGetEmail,m=Object(s.useState)(!1),O=Object(r.a)(m,2),g=O[0],x=O[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(he.a,{className:"appbar",position:"fixed",sx:{width:{sm:"calc(100% - ".concat(t,"px)")},ml:{sm:"".concat(t,"px")}},children:Object(M.jsxs)(z.a,{className:"top-toolbar",style:{backgroundColor:"purple"},children:[Object(M.jsx)(le.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:a,sx:{mr:2,display:{sm:"none"}},children:Object(M.jsx)(de.a,{})}),i.name?Object(M.jsx)(p.a,{onClick:function(){x(!0)},children:Object(M.jsxs)(F.a,{className:"invite-button",children:[Object(M.jsx)(re.a,{style:{fontSize:"1.5rem",marginRight:"0.5rem"}}),Object(M.jsx)("span",{className:"invite",children:"Invite"})]})}):Object(M.jsxs)(p.a,{style:{display:"flex",flexDirection:"column"},children:[Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"".concat(h.currentDate)}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"".concat(h.currentTime)})]}),(i.name||d.email)&&Object(M.jsx)(p.a,{children:Object(M.jsx)(F.a,{children:Object(M.jsxs)("span",{style:{fontSize:"0.9rem"},className:"topbar-small",children:[i.name&&Object(M.jsxs)("span",{children:[Object(M.jsx)("span",{className:"top-bar-channel",children:"Channel:"})," ",Object(M.jsx)("span",{children:i.name})]})," ",d.email&&"Chat with ".concat(d.email)]})})}),Object(M.jsxs)(p.a,{className:"top-bar-email",children:[Object(M.jsx)("span",{style:{fontSize:"0.75rem",paddingRight:"2px"},children:"".concat(n.uid)}),Object(M.jsx)("span",{style:{fontSize:"0.75rem"},children:"ID: ".concat(o)})]})]})}),Object(M.jsx)(K,{open:g,handleClose:function(){x(!1)},dialogTitleText:i&&"Enter email to invite to ".concat(i.name),channels:c,type:"text",label:"Email",inviteUserToAChannel:l,userInviteError:u,setUserInviteError:j,setGetEmail:b})]})}),je=n(277);function be(e){var t=e.stateSB,n=e.setStateSB,s=e.messageSB,a=t.vertical,c=t.horizontal,i=t.openSB;return Object(M.jsx)(je.a,{open:i,autoHideDuration:3e3,anchorOrigin:{vertical:a,horizontal:c},onClose:function(){return n(Object(A.a)(Object(A.a)({},t),{},{openSB:!1}))},message:s},a+c)}var me=n(128),pe=n.n(me),Oe=n(99),ge=function(e){var t=e.allMessagesRetrieved,n=e.setMessage,s=e.message,a=e.createMessageInAChannel,c=e.selectedChannel,i=e.selectedUser,r=e.createDirectMessageToAUser,l=e.stateSB,o=e.setStateSB,h=e.getChannel,u=e.getEmail;return Object(M.jsxs)(M.Fragment,{children:[h&&Object(M.jsx)(be,{stateSB:l,messageSB:"Successfully Created Channel: ".concat(h,"!"),setStateSB:o}),u&&Object(M.jsx)(be,{stateSB:l,messageSB:"Successfully Added User: ".concat(u,"!"),setStateSB:o}),Object(M.jsxs)(p.a,{component:"main",className:"chat-body",children:[Object(M.jsx)(z.a,{}),Object(M.jsx)(p.a,{style:{display:"flex",flexDirection:"column",width:"600px"},children:(null===t||void 0===t?void 0:t.length)>=1?t.map((function(e){return Object(M.jsx)("div",{children:Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(M.jsx)("div",{style:{padding:"12.5px 0",marginRight:"25px"},children:Object(M.jsx)(d.a,{style:{backgroundColor:"purple"},children:e.sender.email.slice(0,1).toUpperCase()})}),Object(M.jsxs)("div",{style:{padding:"15px 0 12.5px 0"},children:[Object(M.jsxs)("p",{style:{margin:"0"},children:[" ","".concat(e.sender.email.split("@")[0]," says:")]}),Object(M.jsx)("p",{style:{margin:"0"},children:e.body}),Object(M.jsx)("p",{style:{margin:"0",fontSize:"12px"},children:"".concat(pe()(e.created_at).fromNow())})]})]})},e.id)})):c.name&&Object(M.jsxs)("span",{className:"greetings",children:["Channel: ",c.name," has no messages."]})||i.email&&Object(M.jsxs)("span",{className:"greetings",children:["You have no chat history with ",i.email.split("@")[0],". Send him/her a message!"]})||Object(M.jsx)("span",{className:"greetings",children:"Welcome to Avion Slack App! Hop on a channel or send a DM to get started!\ud83d\udc40"})}),c.name&&Object(M.jsxs)(p.a,{className:"message-area-container",component:"form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(s),n("")},children:[Object(M.jsx)(j.a,{className:"message-area",id:"outlined-basic",label:"Enter your message here",variant:"outlined",onChange:function(e){return n(e.target.value)},value:s}),Object(M.jsx)("div",{className:"send-message-button",onClick:function(e){e.preventDefault(),a(s),n("")},children:Object(M.jsx)(Oe.a,{size:40})})]}),i.email&&Object(M.jsxs)(p.a,{className:"message-area-container",component:"form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),r(s),n("")},children:[Object(M.jsx)(j.a,{className:"message-area",id:"outlined-basic",label:"Enter your message here",variant:"outlined",onChange:function(e){return n(e.target.value)},value:s}),Object(M.jsx)("div",{className:"send-message-button",onClick:function(e){e.preventDefault(),r(s),n("")},children:Object(M.jsx)(Oe.a,{size:40})})]})]})]})},xe=n(295),ve=n(280),fe=n(296),Ce=function(e){var t=e.users,n=e.channelMembers,s=e.usersDisplayed;return Object(M.jsxs)(W.a,{className:"right-side-bar",sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"permanent",anchor:"right",children:[Object(M.jsx)(z.a,{}),Object(M.jsx)(xe.a,{}),s.home&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fe.a,{children:"ALL USERS"}),Object(M.jsx)(P.a,{style:{overflowX:"hidden"},className:"channel-list",children:t.slice(0,100).map((function(e){return Object(M.jsxs)(ve.a,{children:[Object(M.jsx)(d.a,{style:{marginRight:"10px",backgroundColor:"purple"},children:e.email.slice(0,1).toUpperCase()}),Object(M.jsx)(L.a,{style:{margin:0,width:"100%"},primary:"".concat(e.uid.split("@")[0])})]},e.id)}))})]}),s.channel&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fe.a,{children:"Channel Members"}),Object(M.jsx)(P.a,{style:{overflowX:"hidden"},className:"channel-list",children:n.map((function(e){return Object(M.jsxs)(ve.a,{children:[Object(M.jsx)(d.a,{style:{marginRight:"10px",backgroundColor:"purple"},children:e.email.slice(0,1).toUpperCase()}),Object(M.jsx)(L.a,{style:{margin:0,width:"100%"},primary:"".concat(e.email.split("@")[0])})]},e.id)}))})]}),Object(M.jsx)(xe.a,{})]})},Se=function(e){var t=e.headers,n=e.users,a=e.channels,c=e.handleClickOpenChannel,i=e.openChannel,l=e.inviteUserToAChannel,o=e.createNewChannelWithUser,d=e.handleClickOpenUsers,h=e.openUsers,j=e.handleDrawerToggle,b=e.mobileOpen,m=e.allMessagesRetrieved,O=e.message,g=e.setMessage,x=e.isAChannelSelected,v=e.selectedChannel,f=e.setSelectedChannel,C=e.createMessageInAChannel,S=e.intervalRetrieveMessages,y=e.userID,k=e.returnToHome,I=e.sortByEmail,U=e.searchResults,w=e.selectedUser,T=e.createDirectMessageToAUser,E=e.intervalRetrieveMessagesWithUser,N=e.currentDateAndTime,D=e.isCreateChannel,R=e.setIsCreateChannel,A=e.userInviteError,B=e.setUserInviteError,F=e.stateSB,z=e.setStateSB,P=e.retrieveChannelUsers,L=e.channelMembers,_=e.usersDisplayed,G=e.userStatus,H=e.signOut,V=e.setMobileOpen,J=320,Y=Object(s.useState)(""),q=Object(r.a)(Y,2),X=q[0],K=q[1],Q=Object(s.useState)(""),Z=Object(r.a)(Q,2),$=Z[0],ee=Z[1];return Object(M.jsx)(M.Fragment,{children:Object(M.jsxs)(p.a,{children:[Object(M.jsx)(u.a,{}),Object(M.jsx)(ue,{drawerWidth:J,headers:t,handleDrawerToggle:j,isAChannelSelected:x,selectedChannel:v,inviteUserToAChannel:l,userID:y,selectedUser:w,currentDateAndTime:N,userInviteError:A,setUserInviteError:B,setGetEmail:ee}),Object(M.jsxs)(p.a,{component:"nav",sx:{width:{sm:J},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(M.jsx)(W.a,{variant:"temporary",open:b,onClose:j,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:J}},children:Object(M.jsx)(ce,{handleClickOpenChannel:c,openChannel:i,createNewChannelWithUser:o,handleClickOpenUsers:d,users:n,openUsers:h,setSelectedChannel:f,intervalRetrieveMessages:S,returnToHome:k,sortByEmail:I,searchResults:U,intervalRetrieveMessagesWithUser:E,channels:a,isCreateChannel:D,setIsCreateChannel:R,setGetChannel:K,retrieveChannelUsers:P,userStatus:G,headers:t,signOut:H,setMobileOpen:V})}),Object(M.jsx)(W.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:J}},open:!0,children:Object(M.jsx)(ce,{handleClickOpenChannel:c,openChannel:i,createNewChannelWithUser:o,handleClickOpenUsers:d,users:n,openUsers:h,setSelectedChannel:f,intervalRetrieveMessages:S,returnToHome:k,sortByEmail:I,searchResults:U,intervalRetrieveMessagesWithUser:E,channels:a,isCreateChannel:D,setIsCreateChannel:R,setGetChannel:K,retrieveChannelUsers:P,userStatus:G,headers:t,signOut:H,setMobileOpen:V})})]}),Object(M.jsx)(Ce,{users:n,channelMembers:L,usersDisplayed:_}),Object(M.jsx)(ge,{allMessagesRetrieved:m,setMessage:g,message:O,createMessageInAChannel:C,selectedChannel:v,selectedUser:w,createDirectMessageToAUser:T,stateSB:F,setStateSB:z,getChannel:X,getEmail:$})]})})},ye=function(){var e=B(),t=e.headers,n=e.users,s=e.channels,a=e.handleClickOpenChannel,c=e.openChannel,i=e.inviteUserToAChannel,r=e.createNewChannelWithUser,l=e.handleClickOpenUsers,o=e.openUsers,d=e.handleDrawerToggle,h=e.mobileOpen,u=e.allMessagesRetrieved,j=e.message,b=e.setMessage,m=e.isAChannelSelected,p=e.selectedChannel,O=e.setSelectedChannel,g=e.createMessageInAChannel,x=e.intervalRetrieveMessages,v=e.userID,f=e.returnToHome,C=e.sortByEmail,S=e.searchResults,y=e.selectedUser,k=e.createDirectMessageToAUser,I=e.intervalRetrieveMessagesWithUser,U=e.loading,w=e.currentDateAndTime,T=e.isCreateChannel,E=e.setIsCreateChannel,N=e.userInviteError,R=e.setUserInviteError,A=e.stateSB,W=e.setStateSB,F=e.retrieveChannelUsers,z=e.channelMembers,P=e.usersDisplayed,L=e.userStatus,_=e.signOut,G=e.setMobileOpen;return Object(M.jsx)(M.Fragment,{children:U?Object(M.jsx)(D,{loading:U}):Object(M.jsx)(Se,{headers:t,users:n,channels:s,handleClickOpenChannel:a,openChannel:c,inviteUserToAChannel:i,createNewChannelWithUser:r,handleClickOpenUsers:l,openUsers:o,handleDrawerToggle:d,mobileOpen:h,allMessagesRetrieved:u,message:j,setMessage:b,isAChannelSelected:m,selectedChannel:p,setSelectedChannel:O,createMessageInAChannel:g,intervalRetrieveMessages:x,userID:v,returnToHome:f,sortByEmail:C,searchResults:S,selectedUser:y,createDirectMessageToAUser:k,intervalRetrieveMessagesWithUser:I,currentDateAndTime:w,isCreateChannel:T,setIsCreateChannel:E,userInviteError:N,setUserInviteError:R,stateSB:A,setStateSB:W,retrieveChannelUsers:F,channelMembers:z,usersDisplayed:P,userStatus:L,signOut:_,setMobileOpen:G})})},ke=function(){var e=k("status"),t=Object(r.a)(e,1)[0];return Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(l.a,{children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{exact:!0,path:"/",component:function(){return(null===t||void 0===t?void 0:t.isLoggedIn)?Object(M.jsx)(o.a,{to:"/chat"}):Object(M.jsx)(N,{})}}),Object(M.jsx)(o.b,{exact:!0,path:"/chat",component:ye,children:Object(M.jsx)(ye,{})})]})})})},Ie=function(){return Object(M.jsx)(ke,{})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,302)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(Ie,{})}),document.getElementById("root")),Ue()}},[[226,1,2]]]);
//# sourceMappingURL=main.aa2890ff.chunk.js.map