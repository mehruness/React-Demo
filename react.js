var { Router,
  Route,
  IndexRoute,
  IndexLink,
  hashHistory,
  Link } = ReactRouter;

var Home = React.createClass({ displayName: "Home",
  render: function () {
    return (
      React.createElement("div", { className: "content" },
      React.createElement("h2", null, "Welkom"),
      React.createElement("p", null, "Deze site is volledig gemaakt in Javascript en CSS."),
	  React.createElement("p", null, "Dus geen HTML elements gemaakt in dit HTML bestand."),					  
	  React.createElement("p", null, "De content word weergegeven in alleen de Body element."),
	  React.createElement("p", null, "Hij is ook automatisch responsive voor alle devices zonder media queries in CSS!"),
	  React.createElement('span', null, '❤️'),		
	  React.createElement('img',  { src: "react.png", style: { width: '100px', height: '100px', } },  ),	
	  		  
      React.createElement("p", null, "Powered by React.")));


  } });


var Contact = React.createClass({ displayName: "Contact",
  render: function () {
    return (
      React.createElement("div", { className: "content" },
      React.createElement("h2", null, "Contact:"),
	  React.createElement('button',{ style: { border: '2px solid green', backgroundColor: 'black',   }  }, React.createElement("a",  {href: 'mailto:m.romeijn01@gmail.com', style: { color: 'white', hover: 'red',  }  }, 'Klik hier om mij te benaderen!'   ),    ),					  
      React.createElement("p", null, "")));
     



  } });


var Content = React.createClass({ displayName: "Info",
  render: function () {
    return (
      React.createElement("div", { className: "content"  }, 
	  					  
      React.createElement("h2", null, "Info:"),
						  
	  React.createElement("table", { style: { backgroundColor: 'black', border: 'solid 1px white' } }  , 
	  React.createElement("tr",null,  
	  React.createElement("td", { style: { color: 'green', border: 'solid 1px white' } } ,"Voordelen:"), React.createElement("td", { style: { color: 'red', border: 'solid 1px white' } }  ,"Nadelen:"),    ),  
	  React.createElement("tr",null,  React.createElement("td",{ style: { border: 'solid 1px white' } },"React voelt klein, licht en overzichtelijk."), React.createElement("td", { style: { border: 'solid 1px white' } } ,"JSX. Jammer dat er een nét-niet-HTML taal gebruikt wordt."),   ), 
	  React.createElement("tr",null,  React.createElement("td",{ style: { border: 'solid 1px white' } } ,"De virtual DOM van React biedt performance winst ten opzichte van directe DOM rendering."), React.createElement("td",{ style: { border: 'solid 1px white' } },""),   ),
	  React.createElement("tr",null,  React.createElement("td",{ style: { border: 'solid 1px white' } },"React biedt vrijheid doordat het niet overal een mening over heeft (in tegenstelling tot Angular)."), React.createElement("td",{ style: { border: 'solid 1px white' } },""),   ),
	  React.createElement("tr",null,  React.createElement("td",{ style: { border: 'solid 1px white' } },"Met create-react-app zet je snel en eenvoudig een React skelet op volgens alle conventies."), React.createElement("td",{ style: { border: 'solid 1px white' } },"De scheiding tussen view en control vervaagt door het aanbrengen van de templates (JSX) in Javascript classes (of functies)."),   ),						  
						 ),
						  
      React.createElement("p", { style: { color: "white" } },  "Je hebt deze kennis nodig om dit te maken:"),
      
						  
	  React.createElement("div", { style: { backgroundColor: 'black',  borderRadius: '10', border: '2px solid white', width: '250px' } }, 					  
      React.createElement("ul", null,
      React.createElement("li", { style: { color: "white" } }, "HTML"),
      React.createElement("li", { style: { color: "green" } }, "CSS"),
      React.createElement("li", { style: { color: "grey" } }, "Javascript"),
      React.createElement("li", { style: { color: "blue" } }, "React javascript library")))));
   
      


  } });

var test = React.createClass({ displayName: "test",
  render: function () {
    return (
      React.createElement("div",  { className: "content"  }, 
	  					  
      React.createElement("h2", null, "Testen:"),
      React.createElement("p", { style: { color: "white" } },  "Vormen:"),
	  React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'silver', opacity: '1' , margin: '10px',
  }
}),		
	  React.createElement('div', { style: { width: '200px', height: '100px', backgroundColor: 'dimgrey', opacity: '1' , margin: '10px',
  }
}),	
					  
      React.createElement('div', { style: { width: '100px', height: '100px', backgroundColor: 'green', borderRadius: '100' , margin: '10px',
  }
}),	
	  React.createElement('div', { style: { width: '0px', height: '0px', backgroundColor: 'transparent', borderLeft: '50px solid transparent' , borderRight: '50px solid transparent' , borderBottom: '100px solid red' ,  margin: '10px',
  }
}),		
	  React.createElement('div', { style: { width: '0px', height: '0px', backgroundColor: 'transparent', borderLeft: '60px solid yellow' , borderRight: '60px solid transparent' , borderTop: '60px solid yellow' , borderBottom: '60px solid yellow', borderTopLeftRadius: '60px', borderTopRightRadius: '60px', borderBottomLeftRadius: '60px', borderBottomRightRadius: '60px' , margin: '10px',
  }
}),	
	  	  React.createElement('div', { style: { width: '80px', height: '80px', backgroundColor: 'transparent', borderRadius: '50', boxShadow: '15px 15px 0 0 white' , margin: '10px',
  }
}),	
	      React.createElement('div', { style: { width: '100px', height: '0px', backgroundColor: 'transparent',  border: '1px black solid' , margin: '20px',
  }
}),
		  React.createElement("strong", null, " Alert test "  ),		  
						  
      
         React.createElement("form", { style: { width: '50%' }, onSubmit: onSubmit },
      React.createElement("p", null,
      React.createElement("label", { style: { display: 'block', margin: '10px 0 5px', fontWeight: '400' } }, "Naam:"),
      React.createElement("input", { name: "email", type: "text" })),

      React.createElement("p", null,
      React.createElement("label", { style: { display: 'block', margin: '10px 0 5px', fontWeight: '400' } }, "Leeftijd:"),
      React.createElement("input", { name: "password", type: "text" })),
      React.createElement("Textarea", { placeholder: "Een tekst........", }),
      React.createElement("p", null,
      React.createElement("button", { type: "submit" }, "Verzend")))));
      


  } });

var destination = document.querySelector("#container");
var App = React.createClass({ displayName: "App",
  render: function () {
    return (
      React.createElement("div", null,
	  React.createElement("div", { style: { backgroundColor: "grey", borderRadius: '4'  } },				  
      React.createElement("h1",{ style: { color: "white", textShadow: '2px 5px black' } },`React voorbeeld`),  React.createElement('a', { href: "https://reactjs.org/", style: { color: 'white' } }, "Naar React"  )),
      React.createElement("ul", { className: "header" },
      React.createElement("li", null, React.createElement(IndexLink, { to: "/", activeClassName: "active" }, "Home")),
      React.createElement("li", null, React.createElement(Link, { to: "/content", activeClassName: "active" }, "Info")),
	  React.createElement("li", null, React.createElement(Link, { to: "/test", activeClassName: "active" }, "Testen")),					  
      React.createElement("li", null, React.createElement(Link, { to: "/contact", activeClassName: "active" }, "Contact"))),

      React.createElement("div", { className: "content" },
      this.props.children)));



  } });


	


function onSubmit(event) {
  event.preventDefault();
  const emailInput = event.target.email.value;
  const passwordInput = event.target.password.value;
  const temp = `Je naam is ${emailInput} en je bent ${passwordInput} jaar oud! Bedankt voor het invullen.`;
  alert(temp);
}

ReactDOM.render(
React.createElement(Router, { history: hashHistory },
React.createElement(Route, { path: "/", component: App },
React.createElement(IndexRoute, { component: Home }),
React.createElement(Route, { path: "content", component: Content }),
React.createElement(Route, { path: "test", component: test }),					
React.createElement(Route, { path: "contact", component: Contact }))),


destination);	
