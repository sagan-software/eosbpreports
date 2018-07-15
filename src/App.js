// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Helmet = require("@sagan-software/bs-react-helmet/src/Helmet.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Home$ReactTemplate = require("./Home.js");
var Route$ReactTemplate = require("./Route.js");
var MaterialUi_CssBaseline = require("@jsiebern/bs-material-ui/src/MaterialUi_CssBaseline.bs.js");

function reducer(action, _) {
  return /* Update */Block.__(0, [/* record */[/* route */action[0]]]);
}

var component = ReasonReact.reducerComponent("App-ReactTemplate");

function make($staropt$star, _) {
  var route = $staropt$star !== undefined ? $staropt$star : /* Home */0;
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* route */0];
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Helmet.make(/* array */[
                                  React.createElement("html", {
                                        prefix: "og: http://ogp.me/ns#"
                                      }),
                                  React.createElement("meta", {
                                        content: "",
                                        name: "description"
                                      }),
                                  React.createElement("meta", {
                                        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                                        name: "viewport"
                                      }),
                                  React.createElement("link", {
                                        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
                                        rel: "stylesheet"
                                      })
                                ])), ReasonReact.element(undefined, undefined, MaterialUi_CssBaseline.make(/* array */[])), typeof match === "number" ? (
                            match !== 0 ? "Error: Not found" : ReasonReact.element(undefined, undefined, Home$ReactTemplate.make(/* array */[]))
                          ) : "Producer: " + (String(match[0]) + ""));
            }),
          /* initialState */(function () {
              return /* record */[/* route */route];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */reducer,
          /* subscriptions */(function (self) {
              return /* :: */[
                      /* Sub */[
                        (function () {
                            return ReasonReact.Router[/* watchUrl */1]((function (url) {
                                          return Curry._1(self[/* send */3], /* ChangeRoute */[Route$ReactTemplate.fromUrl(url)]);
                                        }));
                          }),
                        ReasonReact.Router[/* unwatchUrl */2]
                      ],
                      /* [] */0
                    ];
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.reducer = reducer;
exports.component = component;
exports.make = make;
/* component Not a pure module */
