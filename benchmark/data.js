window.BENCHMARK_DATA = {
  "lastUpdate": 1637236260731,
  "repoUrl": "https://github.com/terminusdb/terminusdb",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sean.leather@gmail.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b17b0af9f934cf6d213cadbee004fb2c3283eb8",
          "message": "Merge pull request #700 from terminusdb/benchmark_improvement\n\nci: add benchmarking with external machine",
          "timestamp": "2021-10-19T16:38:50+02:00",
          "tree_id": "3178258d02e97713821b4e04d68d533c7b46d169",
          "url": "https://github.com/terminusdb/terminusdb/commit/0b17b0af9f934cf6d213cadbee004fb2c3283eb8"
        },
        "date": 1634654585608,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 195.845,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 656.702,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 666.986,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 346.012,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 381.52,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 143.719,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 44.881,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 42.789,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f3af50a7e1727ae672e7cb38330f77ada7c4262",
          "message": "Merge pull request #712 from terminusdb/ci_latest_docker_fix\n\nci: push docker latest tag when a version is pushed",
          "timestamp": "2021-10-20T10:41:41+02:00",
          "tree_id": "f8793d4ed5d2fd8f9e6576d1db68c6e8bba3c764",
          "url": "https://github.com/terminusdb/terminusdb/commit/6f3af50a7e1727ae672e7cb38330f77ada7c4262"
        },
        "date": 1634719507140,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 223.063,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 718.368,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 730.374,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 367.997,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 437.527,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 162.827,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 47.555,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 39.668,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a87342f57234b7d9499037501f2ea0e9955cce0d",
          "message": "Merge pull request #713 from terminusdb/change-pull-request-template\n\nUpdate pull_request_template.md",
          "timestamp": "2021-10-20T10:54:39+02:00",
          "tree_id": "134f62f3c380c191411101baacd6ab6ed36cd582",
          "url": "https://github.com/terminusdb/terminusdb/commit/a87342f57234b7d9499037501f2ea0e9955cce0d"
        },
        "date": 1634720287112,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 238.056,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 826.029,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 797.022,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 392.154,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 438.962,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 173.627,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 90.519,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 56.819,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf3abab7b6deab567998e461ddb3e9fb437a1515",
          "message": "Merge pull request #707 from terminusdb/speed_up\n\nSpeed up using thread local tabling",
          "timestamp": "2021-10-20T11:06:43+02:00",
          "tree_id": "8cc154d71eb27f0555c8c25e94f9ec2684b34b73",
          "url": "https://github.com/terminusdb/terminusdb/commit/bf3abab7b6deab567998e461ddb3e9fb437a1515"
        },
        "date": 1634721012973,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 222.084,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 669.631,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 698.071,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 387.607,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 384.516,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 162.472,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 73.319,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 58.926,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robin@datachemist.com",
            "name": "rrooij",
            "username": "rrooij"
          },
          "committer": {
            "email": "sean.leather@gmail.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "distinct": true,
          "id": "d801cbb42fb813d6c1b9ecbf8a5acb04bb7a2275",
          "message": "benchmark: only run one job at a time\n\nIf we want reliable benchmarks, multiple benchmarks shouldn't\nbe run at the same time because this would lead to degraded\nperformance on these benchmarks",
          "timestamp": "2021-10-20T11:51:14+02:00",
          "tree_id": "147c45ee4060d12506dd93fcfa91d21414f5e38d",
          "url": "https://github.com/terminusdb/terminusdb/commit/d801cbb42fb813d6c1b9ecbf8a5acb04bb7a2275"
        },
        "date": 1634723679735,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 200.12,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 645.491,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 648.761,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 339.69,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 391.097,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 148.275,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 50.53,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 47.91,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "sean.leather@gmail.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "distinct": true,
          "id": "f0ab0e71926995d9409057d8b66f7fdb953d1b9a",
          "message": "Bump version to v10.0.9",
          "timestamp": "2021-10-20T11:54:35+02:00",
          "tree_id": "b51d52f2ffd8e99de3599bec63f4c995e121e29e",
          "url": "https://github.com/terminusdb/terminusdb/commit/f0ab0e71926995d9409057d8b66f7fdb953d1b9a"
        },
        "date": 1634723885664,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 208.17,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 675.8,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 687.837,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 349.482,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 372.419,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 134.009,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.317,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 43.21,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b2a54fdf45bb2311b7700a8b6fdf71d59d52b9f8",
          "message": "Merge pull request #724 from terminusdb/fix647\n\nDisallow empty keys",
          "timestamp": "2021-10-20T20:10:51+02:00",
          "tree_id": "2e43c8539580352b858597041d31aa76ff9ee075",
          "url": "https://github.com/terminusdb/terminusdb/commit/b2a54fdf45bb2311b7700a8b6fdf71d59d52b9f8"
        },
        "date": 1634753659303,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 205.898,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 667.183,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 663.202,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 336.37,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 368.062,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 136.183,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 44.028,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 40.778,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d682c0ef45d38194cc2f5a96f3682c41766a90f4",
          "message": "Merge pull request #722 from terminusdb/schema_refactor\n\nSchema refactor for better tabling performance and mem use",
          "timestamp": "2021-10-21T12:37:05+02:00",
          "tree_id": "85aacde20cf806ebfca05e7e20ea2046e361fa6d",
          "url": "https://github.com/terminusdb/terminusdb/commit/d682c0ef45d38194cc2f5a96f3682c41766a90f4"
        },
        "date": 1634812844968,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 280.965,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 936.474,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 919.34,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 474.897,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 456.712,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 140.919,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 50.152,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 48.83,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "942f8444a2972c355fe2490e7c1a38f3376ea58a",
          "message": "Merge pull request #725 from terminusdb/fix515",
          "timestamp": "2021-10-22T09:34:17+02:00",
          "tree_id": "11c14831356d11f2e83f1e14385ac10a97aed5ce",
          "url": "https://github.com/terminusdb/terminusdb/commit/942f8444a2972c355fe2490e7c1a38f3376ea58a"
        },
        "date": 1634888260498,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 208.168,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 682.391,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 655.155,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 343.87,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 355.459,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 118.037,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 50.142,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 43.17,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rrooij@users.noreply.github.com",
            "name": "Robin de Rooij",
            "username": "rrooij"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12266b9861104364bf7802fcab010d97514b7a48",
          "message": "Merge pull request #726 from terminusdb/benchmark-trigger\n\nSome workflow improvements",
          "timestamp": "2021-10-22T10:37:08+02:00",
          "tree_id": "fa8f50c0bfdbc9e903f7d97c77dccfde513d7e4d",
          "url": "https://github.com/terminusdb/terminusdb/commit/12266b9861104364bf7802fcab010d97514b7a48"
        },
        "date": 1634892038185,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 245.344,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 775.608,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 753.836,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 401.952,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 391.395,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 112.657,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 48.438,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 45.349,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88ba563df2ed2580051b362aca2c235b4e854e8e",
          "message": "Merge pull request #731 from terminusdb/non-docker-devel\n\nTest stable and devel SWI-Prolog",
          "timestamp": "2021-10-26T15:21:12+02:00",
          "tree_id": "46d9a5cd29a17194354a5cb8f22d389dbe56c977",
          "url": "https://github.com/terminusdb/terminusdb/commit/88ba563df2ed2580051b362aca2c235b4e854e8e"
        },
        "date": 1635254710904,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 233.875,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 716.415,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 741.459,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 395.856,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 380.506,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 502.515,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 44.47,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.833,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1e47c281783786291cce88378171a7272ebf865f",
          "message": "Do not drop incoming links on delete (#737)\n\nFixes #736",
          "timestamp": "2021-10-28T13:09:28+02:00",
          "tree_id": "af4cfae2d5ef4a1c8013d8ddd6e449aed54d9a8d",
          "url": "https://github.com/terminusdb/terminusdb/commit/1e47c281783786291cce88378171a7272ebf865f"
        },
        "date": 1635419596169,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 217.144,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 673.474,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 682.43,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 345.713,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 389.382,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 462.137,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 45.65,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 42.231,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cd90b82df217674584ed2590b66d97429c3b7b29",
          "message": "Update tests package dependencies (#738)\n\ncd tests; rm package-lock.json; npm install",
          "timestamp": "2021-10-28T13:22:50+02:00",
          "tree_id": "18ac1f965075802ac9fe646cdb955b88228ca186",
          "url": "https://github.com/terminusdb/terminusdb/commit/cd90b82df217674584ed2590b66d97429c3b7b29"
        },
        "date": 1635420401335,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 226.11,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 743.639,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 707.661,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 355.931,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 388.053,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 471.426,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 45.275,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 40.523,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8042ae5541a544c37b58e1bc6c99e7164f30b28",
          "message": "Merge pull request #740 from terminusdb/non-docker-fail-fast-false\n\nnon-docker: Run all jobs even when some jobs fail",
          "timestamp": "2021-10-28T13:24:47+02:00",
          "tree_id": "2696d46d7b1be0829b8e20d3bd1a90a18e8cb661",
          "url": "https://github.com/terminusdb/terminusdb/commit/f8042ae5541a544c37b58e1bc6c99e7164f30b28"
        },
        "date": 1635420632461,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 212.242,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 662.963,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 691.389,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 356.475,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 374.074,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 471.519,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.306,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 43.406,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "19dded0c21ec77e806b39708b22c3a3ff1fd5533",
          "message": "Improve errors for @fields in @key (#739)\n\n* Fixes #727\r\n* Add new error checks for @fields\r\n* Remove duplicate unit test",
          "timestamp": "2021-10-28T13:37:40+02:00",
          "tree_id": "cfd2d3ce0ef6433b11829c13835748e6e4cf5d7c",
          "url": "https://github.com/terminusdb/terminusdb/commit/19dded0c21ec77e806b39708b22c3a3ff1fd5533"
        },
        "date": 1635421286340,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 208.236,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 649.393,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 669.93,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 333.218,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 361.697,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 468.064,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 47.885,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 44.837,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b355825976e26a0cfd7356e2bb1b3a538563b1eb",
          "message": "Merge pull request #744 from terminusdb/raise_version_to_10.0.10\n\nraise version to 10.0.10",
          "timestamp": "2021-10-28T14:40:42+02:00",
          "tree_id": "2960d466cbc28936796e2a269af033c70eb6581c",
          "url": "https://github.com/terminusdb/terminusdb/commit/b355825976e26a0cfd7356e2bb1b3a538563b1eb"
        },
        "date": 1635425071846,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 216.606,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 652.306,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 658.517,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 344.239,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 373.851,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 464.148,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 50.267,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 40.821,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3848275ec648d5f6a1d85e2ec7e685c947c9ca92",
          "message": "Merge pull request #751 from terminusdb/replace-check-content-type\n\nCheck content-type in /api/document",
          "timestamp": "2021-11-01T15:39:12+01:00",
          "tree_id": "f276e0cc510175574c8e6d3db375ef28731ccddc",
          "url": "https://github.com/terminusdb/terminusdb/commit/3848275ec648d5f6a1d85e2ec7e685c947c9ca92"
        },
        "date": 1635777783774,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 208.53,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 637.01,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 669.056,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 331.337,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 354.087,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 455.631,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 48.537,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 42.87,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "857a07342678eee4addf459d6298a13caf0ceab2",
          "message": "Merge pull request #745 from terminusdb/tests-verify-return\n\ntests: Use .then() with verify functions",
          "timestamp": "2021-11-01T15:44:38+01:00",
          "tree_id": "7100cfa13814ea492461f9dd86ebbb4a2defcc77",
          "url": "https://github.com/terminusdb/terminusdb/commit/857a07342678eee4addf459d6298a13caf0ceab2"
        },
        "date": 1635778101176,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 201.014,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 614.133,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 618.321,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 320.169,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 334.109,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 427.785,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 47.224,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 40.164,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cab88095f1df22c93923cdbff582a6f9c109c5d",
          "message": "Merge pull request #750 from terminusdb/insert_or_update\n\nAdding update or insert functionality",
          "timestamp": "2021-11-08T12:08:30+01:00",
          "tree_id": "cd19c374521409d561a0c63c4be2a0e87994a920",
          "url": "https://github.com/terminusdb/terminusdb/commit/8cab88095f1df22c93923cdbff582a6f9c109c5d"
        },
        "date": 1636369948732,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 224.603,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 699.336,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 695.904,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 362.75,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 375.747,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 489.756,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 45.69,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 46.298,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8427ed599e20b32b944b6f92623d7b3df4c72d3",
          "message": "Merge pull request #732 from terminusdb/document_path\n\nDocument path",
          "timestamp": "2021-11-09T17:34:56+01:00",
          "tree_id": "ac41e23e85284277c04889798270741192c4c6a8",
          "url": "https://github.com/terminusdb/terminusdb/commit/e8427ed599e20b32b944b6f92623d7b3df4c72d3"
        },
        "date": 1636475930346,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 221.611,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 695.528,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 694.33,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 358.089,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 381.45,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 483.545,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 45.763,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 43.52,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d16496759d00075bb55acb2bb774a1669814204a",
          "message": "Merge pull request #758 from terminusdb/bad-field-values-json\n\nHandle various schema @id and @type",
          "timestamp": "2021-11-11T16:09:13+01:00",
          "tree_id": "bc2f29fcf61b5a860ac37012618805da15bda61e",
          "url": "https://github.com/terminusdb/terminusdb/commit/d16496759d00075bb55acb2bb774a1669814204a"
        },
        "date": 1636643592229,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 253.501,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 795.535,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 766.826,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 394.139,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 436.488,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 506.21,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 48.97,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.675,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "761f75cecb9ad137358b930d2dbd461d940ff3b9",
          "message": "Merge pull request #761 from terminusdb/raise_store_version_to_0.19.4\n\nraise store version to 0.19.4",
          "timestamp": "2021-11-11T16:16:36+01:00",
          "tree_id": "0687cdcf32866d243780021a8353128398a2da2c",
          "url": "https://github.com/terminusdb/terminusdb/commit/761f75cecb9ad137358b930d2dbd461d940ff3b9"
        },
        "date": 1636644075344,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 288.463,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 801.74,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 826.925,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 463.127,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 475.947,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 523.947,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 48.218,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 45.309,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60a0845013f21def6af2f5bb34fc232aa457dcf4",
          "message": "Merge pull request #755 from terminusdb/predicate_any\n\nAdding \"any\" path pattern ( '.' in regex )",
          "timestamp": "2021-11-11T16:31:39+01:00",
          "tree_id": "45dac717dbeb00e3b1cfa67e089bdee761748439",
          "url": "https://github.com/terminusdb/terminusdb/commit/60a0845013f21def6af2f5bb34fc232aa457dcf4"
        },
        "date": 1636644932750,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 225.965,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 675.18,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 690.818,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 355.656,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 385.733,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 496.588,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 47.226,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.461,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0371a4daa71609d3c58496394f0fb774a8a13dc6",
          "message": "Merge pull request #759 from terminusdb/optimize\n\nOptimize",
          "timestamp": "2021-11-11T16:51:54+01:00",
          "tree_id": "85cf5894c2f86a07602243ac5751d165c59c3ae5",
          "url": "https://github.com/terminusdb/terminusdb/commit/0371a4daa71609d3c58496394f0fb774a8a13dc6"
        },
        "date": 1636646146663,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 216.49,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 657.978,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 668.278,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 335.911,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 354.295,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 462.574,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 45.295,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.132,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6d4e9eb8e701d085de3d4fb8ed5e951edb6b54d",
          "message": "Merge pull request #766 from terminusdb/version_bump\n\nBump version",
          "timestamp": "2021-11-15T11:07:42+01:00",
          "tree_id": "0f2ccc0d96a0ccc33a25b595b01a83d12bdf0afc",
          "url": "https://github.com/terminusdb/terminusdb/commit/e6d4e9eb8e701d085de3d4fb8ed5e951edb6b54d"
        },
        "date": 1636971102434,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 236.712,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 699.655,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 727.789,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 371.059,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 384.873,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 488.064,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 46.11,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 45.818,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "98eff00c0252032b96cff14053547bccf10bb812",
          "message": "Merge pull request #764 from terminusdb/document-param-checks-and-tests\n\nImprove input checking for document GET/DELETE",
          "timestamp": "2021-11-16T12:59:14+01:00",
          "tree_id": "9ad8f69f7bbaaa908175c74e99569a85bd4e3f5a",
          "url": "https://github.com/terminusdb/terminusdb/commit/98eff00c0252032b96cff14053547bccf10bb812"
        },
        "date": 1637064195763,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 247.171,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 802.087,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 785.888,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 394.718,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 411.499,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 529.679,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 50.551,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.137,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@terminusdb.com",
            "name": "Sean Leather",
            "username": "spl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a9a55ca4fac5f0ecf0e6d6de8504d620f008efd8",
          "message": "Merge pull request #773 from terminusdb/make-docs\n\nImprove Makefile",
          "timestamp": "2021-11-16T14:07:37+02:00",
          "tree_id": "3526cde2ed5a78a2cb30f1744e988d683b396909",
          "url": "https://github.com/terminusdb/terminusdb/commit/a9a55ca4fac5f0ecf0e6d6de8504d620f008efd8"
        },
        "date": 1637064694776,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 233.558,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 728.066,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 721.022,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 366.551,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 404.368,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 493.742,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.519,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 42.971,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7772f64e843bdba808d15642c53577eadcec077",
          "message": "Merge pull request #770 from terminusdb/frames\n\nadd generation for all frames",
          "timestamp": "2021-11-16T15:59:31+01:00",
          "tree_id": "a4eddd4f19a69e2da9faea1cf3b8cb4d73572170",
          "url": "https://github.com/terminusdb/terminusdb/commit/e7772f64e843bdba808d15642c53577eadcec077"
        },
        "date": 1637075014472,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 236.033,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 758.149,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 770.247,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 400.615,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 398.518,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 509.662,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 46.352,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 44.431,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f1c4ae7b20eb2aefcce3f7d600738f6c635fab9",
          "message": "Merge pull request #781 from terminusdb/schema-check-error\n\nFix #780",
          "timestamp": "2021-11-17T16:46:45+01:00",
          "tree_id": "1bf4b433a11a409e01d693ed08acc96a15d1b99b",
          "url": "https://github.com/terminusdb/terminusdb/commit/1f1c4ae7b20eb2aefcce3f7d600738f6c635fab9"
        },
        "date": 1637164244922,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 253.672,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 792.245,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 809.3,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 395.217,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 449.542,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 556.024,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.62,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 42.307,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gavin@terminusdb.com",
            "name": "Gavin Mendel-Gleason",
            "username": "GavinMendelGleason"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c117d1347c2dbc9872975b515b31f3d6ed3e28ae",
          "message": "Merge pull request #783 from terminusdb/missing-field-checks\n\nImprove missing field checks",
          "timestamp": "2021-11-18T10:26:00+01:00",
          "tree_id": "d03b2f1f0eeff25fac7aef32f657096fd68074b7",
          "url": "https://github.com/terminusdb/terminusdb/commit/c117d1347c2dbc9872975b515b31f3d6ed3e28ae"
        },
        "date": 1637227798494,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 247.694,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 720.57,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 757.296,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 392.176,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 423.085,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 513.565,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.536,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 40.563,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthijs@terminusdb.com",
            "name": "Matthijs van Otterdijk",
            "username": "matko"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cb190c841d15184380e5fa1220fe4cdd04df562",
          "message": "Merge pull request #782 from terminusdb/choice\n\nChoice",
          "timestamp": "2021-11-18T12:47:01+01:00",
          "tree_id": "810f5f43f7ab0e19615d0cc037019edfe111cc8c",
          "url": "https://github.com/terminusdb/terminusdb/commit/8cb190c841d15184380e5fa1220fe4cdd04df562"
        },
        "date": 1637236259530,
        "tool": "generic",
        "benches": [
          {
            "name": "/api/db::DELETE:http_req_duration:p(90)",
            "value": 239.078,
            "unit": "ms"
          },
          {
            "name": "/api/db::POST:http_req_duration:p(90)",
            "value": 744.294,
            "unit": "ms"
          },
          {
            "name": "/api/db:prefixes:POST:http_req_duration:p(90)",
            "value": 772.919,
            "unit": "ms"
          },
          {
            "name": "/api/document:one:POST:http_req_duration:p(90)",
            "value": 386.697,
            "unit": "ms"
          },
          {
            "name": "/api/document:person:POST:http_req_duration:p(90)",
            "value": 426.516,
            "unit": "ms"
          },
          {
            "name": "/api/document:woql:POST:http_req_duration:p(90)",
            "value": 494.344,
            "unit": "ms"
          },
          {
            "name": "/api/info::GET:http_req_duration:p(90)",
            "value": 49.55,
            "unit": "ms"
          },
          {
            "name": "/api/ok::GET:http_req_duration:p(90)",
            "value": 41.075,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}