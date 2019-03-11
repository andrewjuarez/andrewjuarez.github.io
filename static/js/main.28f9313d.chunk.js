(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),s=a(1),o=a(2),l=a(4),m=a(3),d=a(5),u=a(8),h=a.n(u),p=(a(15),function(){return i.a.createElement("div",{className:"name-card"},i.a.createElement("h1",null,"Andrew Juarez"),i.a.createElement("div",{className:"ui breadcrumb"},i.a.createElement("a",{className:"section",href:"https://www.linkedin.com/in/andrewjuarezca/"},i.a.createElement("i",{className:"linkedin icon"})),i.a.createElement("div",{className:"divider"},"|"),i.a.createElement("a",{className:"section",href:"https://github.com/andrewjuarez"},i.a.createElement("i",{className:"github square icon"}))),i.a.createElement("hr",null))}),v=function(){return i.a.createElement("div",{className:"ui card fluid"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},"Who am I?"),i.a.createElement("div",{className:"description"},"A computer science major specializing in networked systems at the University of California, Irvine. I build software, break things, and learn from my mistakes.")))},f=function(){return i.a.createElement("div",{className:"ui card fluid"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},"Let's Connect"),i.a.createElement("div",{className:"description"},"Wanna chat? Contact me through \xa0",i.a.createElement("a",{href:"https://www.linkedin.com/in/andrewjuarezca"},"LinkedIn"),"\xa0 if you have any questions regarding projects, consulting, or networking.",i.a.createElement("div",{className:"ui list"},i.a.createElement("div",{className:"item"})))))},b=(a(16),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).renderGitLink=function(){return a.state.github&&""!==a.state.github?i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"github icon"}),i.a.createElement("div",{className:"content"},i.a.createElement("a",{href:a.state.github},"\xa0Github"))):void 0},a.renderDevpostLink=function(){return a.state.devpost&&""!==a.state.devpost?i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"code icon"}),i.a.createElement("div",{className:"content"},i.a.createElement("a",{href:a.state.devpost},"Devpost"))):void 0},a.renderLinks=function(){return i.a.createElement("div",{className:"links-list ui list"},a.renderDevpostLink(),a.renderGitLink())},a.state={name:e.name,description:e.description,github:e.github,devpost:e.devpost},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"hackathon ui card fluid"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},this.state.name),i.a.createElement("div",{className:"description"},this.state.description,this.renderLinks())))}}]),t}(i.a.Component)),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={count:0,hackathons:[{name:"HackUCI 2019",description:"Given 36 hours we wanted to build an IDE that helps                professors and TA's easily administer coding assignments",github:"https://github.com/andrewjuarez/codetutor",devpost:"https://devpost.com/software/code-tutor"},{name:"SB Hacks 2019",description:"Ever notice that everytime you log onto Facebook to look                something up you get distracted and before you know it you just wasted                an hour and a half looking at memes and notifications from your aunt Sally?                We aimed at creating an event platform for college students to elimate the                distractions. Events are sorted and displayed by relevance such as 'professional networking'                'parties', 'free food', etc.",github:"https://github.com/andrewjuarez/sbhacksv-server",devpost:"https://devpost.com/software/youni"},{name:"LA Hacks 2018",description:"We built a a chat bot web application using Google Diagflow with the intention                of educating millenials on financial literacy.",github:"https://github.com/jeanietwo/botbucks"},{name:"Hack UCI 2018",description:"My first hackathon. Formed a team with the idea of creating a mobile app that                authenticates users with the Facebook API. We then wanted to pull their friends list from                Facebook showing which ones are in the immediate area and available to grab lunch or coffee.                This app is ideal for someone who is visiting another town for a doctor appointment and has                free time available for catching up with old friends or colleagues."}]},a.renderList=function(){return a.state.hackathons.map(function(e){return i.a.createElement(b,{name:e.name,description:e.description,github:e.github,devpost:e.devpost})})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",null,this.state.hackathons.length," hackathons attended"),this.renderList())}}]),t}(i.a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"row"},i.a.createElement(p,null)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column eight wide"},i.a.createElement(v,null),i.a.createElement(f,null)),i.a.createElement("div",{className:"column eight wide"},i.a.createElement("img",{className:"headshot ui medium circular image",src:h.a,alt:"Andrew"}))),i.a.createElement(g,null)))}}]),t}(i.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(E,null)}}]),t}(i.a.Component);c.a.render(i.a.createElement(w,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a.p+"static/media/headshot-cropped.4d0711f1.jpg"},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.28f9313d.chunk.js.map