(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6MZL":function(e,t,a){},EDuE:function(e,t,a){},FRpb:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=(a("HDCr"),a("2loE")),s=a.n(c),o=function(e){var t=e.author,a=e.tagline;return l.a.createElement("div",{className:"bio-main w-75"},l.a.createElement("img",{src:s.a,style:{maxWidth:"100px"},className:"profile-img",alt:""}),l.a.createElement("h3",{className:"mt-2 author-bio"},t),l.a.createElement("small",{className:"text-muted"},a))},m=a("ma3e"),i=function(e){var t=e.contacts;return l.a.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},l.a.createElement("a",{className:"text-secondary p-2",href:t.linkedin},l.a.createElement("span",{title:"Linked In"},l.a.createElement(m.f,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.github},l.a.createElement("span",{title:"GitHub"},l.a.createElement(m.e,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.stackoverflow},l.a.createElement("span",{title:"Stack Overflow"},l.a.createElement(m.g,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.freecodecamp},l.a.createElement("span",{title:"freeCodeCamp"},l.a.createElement(m.d,{size:26,style:{color:"secondary"}}))),l.a.createElement("a",{className:"text-secondary p-2",href:t.twitter},l.a.createElement("span",{title:"Twitter"},l.a.createElement(m.i,{size:26,style:{color:"secondary"}}))))},d=a("o+pQ"),E=function(e){var t=e.labels,a=e.posts,n=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,"Tech Topics"),l.a.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,n){t.forEach((function(t){e===t.tag&&a.push(l.a.createElement(d.a,{key:n,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(n)))};t.a=function(){return l.a.createElement(r.StaticQuery,{query:"1507474683",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar-main border-right"},l.a.createElement(o,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),l.a.createElement(i,{contacts:e.site.siteMetadata.contacts}),l.a.createElement("div",{className:"page-links"},l.a.createElement(r.Link,{to:"/"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),l.a.createElement(r.Link,{to:"/about"},l.a.createElement("span",{className:"text-dark d-block py-1"},"About")),l.a.createElement(r.Link,{to:"/archive"},l.a.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),l.a.createElement("div",{className:"tech-tags mt-4"},l.a.createElement(E,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},HDCr:function(e,t,a){},JBOV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=(a("+eM2"),a("EDuE"),a("Bl7J")),s=a("vrFN"),o=a("FRpb"),m=a("o+pQ");t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.data.site.siteMetadata.labels,n=e.pageContext,i=n.currentPage,d=1===i,E=i===n.numPages,u=i-1==1?"/":"/"+(i-1).toString(),p="/"+(i+1).toString();return l.a.createElement(c.a,null,l.a.createElement(s.a,{title:"Home",keywords:["gatsby","javascript","react","web development","blog","graphql"]}),l.a.createElement("div",{className:"index-main"},l.a.createElement("div",{className:"sidebar px-4 py-2"},l.a.createElement(o.a,null)),l.a.createElement("div",{className:"post-list-main"},t.map((function(e){var t=e.node.frontmatter.tags;return l.a.createElement("div",{key:e.node.id,className:"container mt-5"},l.a.createElement(r.Link,{to:e.node.fields.slug,className:"text-dark"},l.a.createElement("h2",{className:"title"},e.node.frontmatter.title)),l.a.createElement("small",{className:"d-block text-info"},l.a.createElement("i",null,"Posted on ",e.node.frontmatter.date)),l.a.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),l.a.createElement(r.Link,{to:e.node.fields.slug,className:"text-primary"},l.a.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),l.a.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,n){a.forEach((function(a){e===a.tag&&t.push(l.a.createElement(m.a,{key:n,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))}))})),t}(t)))})),l.a.createElement("div",{className:"text-center mt-4"},!d&&l.a.createElement(r.Link,{to:u,rel:"prev",style:{textDecoration:"none"}},l.a.createElement("span",{className:"text-dark"},"← Previous Page")),!E&&l.a.createElement(r.Link,{to:p,rel:"next",style:{textDecoration:"none"}},l.a.createElement("span",{className:"text-dark ml-5"},"Next Page →"))))))}},"o+pQ":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=(a("6MZL"),a("Wbzz"));t.a=function(e){var t=e.tag,a=e.tech,n=e.name,c=e.size,s=e.color;return l.a.createElement("div",{className:"d-inline-block p-1"},l.a.createElement(r.Link,{to:"/tags/"+t+"/"},l.a.createElement("button",{className:"tech-tag text-white"},l.a.createElement("p",{className:"d-inline"},a," "),l.a.createElement("div",{className:"d-inline",style:{fontSize:c,color:s}},l.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:c,height:c,style:{fill:""+s}},l.a.createElement("title",null,a),l.a.createElement("path",{d:n}))))))}}}]);
//# sourceMappingURL=component---src-templates-post-list-js-73043c047e37ee75062f.js.map