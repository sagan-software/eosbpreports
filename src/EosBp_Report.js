// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Eos_Types = require("@sagan-software/bs-eos/src/Eos_Types.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");

function encode(t) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "producer",
                Eos_Types.AccountName[/* encode */1](t[/* producer */0])
              ],
              /* :: */[
                /* tuple */[
                  "url",
                  t[/* url */1].toString()
                ],
                /* :: */[
                  /* tuple */[
                    "latitude",
                    t[/* latitude */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "longitude",
                      t[/* longitude */3]
                    ],
                    /* :: */[
                      /* tuple */[
                        "node_type",
                        t[/* nodeType */4]
                      ],
                      /* :: */[
                        /* tuple */[
                          "info_status",
                          Json_encode.nullable((function (prim) {
                                  return prim;
                                }), t[/* infoStatus */5])
                        ],
                        /* :: */[
                          /* tuple */[
                            "server_version",
                            Json_encode.nullable((function (prim) {
                                    return prim;
                                  }), t[/* serverVersion */6])
                          ],
                          /* :: */[
                            /* tuple */[
                              "chain_id",
                              Json_encode.nullable((function (prim) {
                                      return prim;
                                    }), t[/* chainId */7])
                            ],
                            /* :: */[
                              /* tuple */[
                                "head_block_num",
                                Json_encode.nullable((function (prim) {
                                        return prim;
                                      }), t[/* headBlockNum */8])
                              ],
                              /* :: */[
                                /* tuple */[
                                  "head_block_time",
                                  Json_encode.nullable(Eos_Types.BlockTimestamp[/* encode */1], t[/* headBlockTime */9])
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "last_irreversible_block_num",
                                    Json_encode.nullable((function (prim) {
                                            return prim;
                                          }), t[/* lastIrreversibleBlockNum */10])
                                  ],
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var Node = /* module */[/* encode */encode];

exports.Node = Node;
/* Eos_Types Not a pure module */
