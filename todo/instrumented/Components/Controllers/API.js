function cov_wv1im8tcf() {
  var path = "/home/abhishek/Desktop/E2E/todo/src/Components/Controllers/API.js";
  var hash = "63e8dc0c5662ad96aada917ef1e98d15f8389bb1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/abhishek/Desktop/E2E/todo/src/Components/Controllers/API.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 4,
          column: 35
        }
      },
      "1": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 36
        }
      },
      "2": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "3": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 22,
          column: 7
        }
      },
      "4": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 31,
          column: 7
        }
      },
      "5": {
        start: {
          line: 36,
          column: 4
        },
        end: {
          line: 40,
          column: 6
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchData",
        decl: {
          start: {
            line: 6,
            column: 16
          },
          end: {
            line: 6,
            column: 25
          }
        },
        loc: {
          start: {
            line: 7,
            column: 0
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "deleteData",
        decl: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 11,
            column: 26
          }
        },
        loc: {
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      },
      "2": {
        name: "changeStatus",
        decl: {
          start: {
            line: 16,
            column: 16
          },
          end: {
            line: 16,
            column: 28
          }
        },
        loc: {
          start: {
            line: 17,
            column: 0
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      },
      "3": {
        name: "addData",
        decl: {
          start: {
            line: 25,
            column: 16
          },
          end: {
            line: 25,
            column: 23
          }
        },
        loc: {
          start: {
            line: 26,
            column: 0
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 26
      },
      "4": {
        name: "editData",
        decl: {
          start: {
            line: 34,
            column: 16
          },
          end: {
            line: 34,
            column: 24
          }
        },
        loc: {
          start: {
            line: 35,
            column: 0
          },
          end: {
            line: 42,
            column: 1
          }
        },
        line: 35
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "63e8dc0c5662ad96aada917ef1e98d15f8389bb1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wv1im8tcf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_wv1im8tcf();
import React from 'react';
import axios from 'axios';
const URL = (cov_wv1im8tcf().s[0]++, 'http://localhost:8080');
export function fetchData() {
  cov_wv1im8tcf().f[0]++;
  cov_wv1im8tcf().s[1]++;
  return axios.get(URL + '/select');
}
export function deleteData(id) {
  cov_wv1im8tcf().f[1]++;
  cov_wv1im8tcf().s[2]++;
  return axios.delete(URL + '/' + id);
}
export function changeStatus(props) {
  cov_wv1im8tcf().f[2]++;
  cov_wv1im8tcf().s[3]++;
  return axios.patch(URL + '/' + props.id, {
    summary: props.summary,
    note: props.note,
    status: !props.status
  });
}
export function addData(props) {
  cov_wv1im8tcf().f[3]++;
  cov_wv1im8tcf().s[4]++;
  return axios.put(URL, {
    summary: props.summary,
    note: props.note,
    status: false
  });
}
export function editData(props) {
  cov_wv1im8tcf().f[4]++;
  cov_wv1im8tcf().s[5]++;
  return axios.patch(URL + '/' + props.id, {
    summary: props.summary,
    note: props.note,
    status: props.status
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFQSS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiVVJMIiwiZmV0Y2hEYXRhIiwiZ2V0IiwiZGVsZXRlRGF0YSIsImlkIiwiZGVsZXRlIiwiY2hhbmdlU3RhdHVzIiwicHJvcHMiLCJwYXRjaCIsInN1bW1hcnkiLCJub3RlIiwic3RhdHVzIiwiYWRkRGF0YSIsInB1dCIsImVkaXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFFQSxNQUFNQyxHQUFHLDRCQUFHLHVCQUFILENBQVQ7QUFFQSxPQUFPLFNBQVNDLFNBQVQsR0FDUDtBQUFBO0FBQUE7QUFDSSxTQUFPRixLQUFLLENBQUNHLEdBQU4sQ0FBVUYsR0FBRyxHQUFDLFNBQWQsQ0FBUDtBQUNIO0FBRUQsT0FBTyxTQUFTRyxVQUFULENBQW9CQyxFQUFwQixFQUNQO0FBQUE7QUFBQTtBQUNJLFNBQU9MLEtBQUssQ0FBQ00sTUFBTixDQUFhTCxHQUFHLEdBQUMsR0FBSixHQUFRSSxFQUFyQixDQUFQO0FBQ0g7QUFFRCxPQUFPLFNBQVNFLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQ1A7QUFBQTtBQUFBO0FBQ0ksU0FBT1IsS0FBSyxDQUFDUyxLQUFOLENBQVlSLEdBQUcsR0FBQyxHQUFKLEdBQVFPLEtBQUssQ0FBQ0gsRUFBMUIsRUFBNkI7QUFDaENLLElBQUFBLE9BQU8sRUFBRUYsS0FBSyxDQUFDRSxPQURpQjtBQUVoQ0MsSUFBQUEsSUFBSSxFQUFFSCxLQUFLLENBQUNHLElBRm9CO0FBR2hDQyxJQUFBQSxNQUFNLEVBQUUsQ0FBQ0osS0FBSyxDQUFDSTtBQUhpQixHQUE3QixDQUFQO0FBS0g7QUFFRCxPQUFPLFNBQVNDLE9BQVQsQ0FBaUJMLEtBQWpCLEVBQ1A7QUFBQTtBQUFBO0FBQ0ksU0FBT1IsS0FBSyxDQUFDYyxHQUFOLENBQVViLEdBQVYsRUFBYztBQUNqQlMsSUFBQUEsT0FBTyxFQUFFRixLQUFLLENBQUNFLE9BREU7QUFFakJDLElBQUFBLElBQUksRUFBRUgsS0FBSyxDQUFDRyxJQUZLO0FBR2pCQyxJQUFBQSxNQUFNLEVBQUU7QUFIUyxHQUFkLENBQVA7QUFLSDtBQUVELE9BQU8sU0FBU0csUUFBVCxDQUFrQlAsS0FBbEIsRUFDUDtBQUFBO0FBQUE7QUFDSSxTQUFPUixLQUFLLENBQUNTLEtBQU4sQ0FBWVIsR0FBRyxHQUFDLEdBQUosR0FBUU8sS0FBSyxDQUFDSCxFQUExQixFQUE2QjtBQUNoQ0ssSUFBQUEsT0FBTyxFQUFFRixLQUFLLENBQUNFLE9BRGlCO0FBRWhDQyxJQUFBQSxJQUFJLEVBQUVILEtBQUssQ0FBQ0csSUFGb0I7QUFHaENDLElBQUFBLE1BQU0sRUFBRUosS0FBSyxDQUFDSTtBQUhrQixHQUE3QixDQUFQO0FBTUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaERhdGEoKVxue1xuICAgIHJldHVybiBheGlvcy5nZXQoVVJMKycvc2VsZWN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhKGlkKVxue1xuICAgIHJldHVybiBheGlvcy5kZWxldGUoVVJMKycvJytpZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdGF0dXMocHJvcHMpXG57XG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKFVSTCsnLycrcHJvcHMuaWQse1xuICAgICAgICBzdW1tYXJ5OiBwcm9wcy5zdW1tYXJ5LCBcbiAgICAgICAgbm90ZTogcHJvcHMubm90ZSxcbiAgICAgICAgc3RhdHVzOiAhcHJvcHMuc3RhdHVzXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhKHByb3BzKVxue1xuICAgIHJldHVybiBheGlvcy5wdXQoVVJMLHtcbiAgICAgICAgc3VtbWFyeTogcHJvcHMuc3VtbWFyeSwgXG4gICAgICAgIG5vdGU6IHByb3BzLm5vdGUsXG4gICAgICAgIHN0YXR1czogZmFsc2VcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXREYXRhKHByb3BzKVxue1xuICAgIHJldHVybiBheGlvcy5wYXRjaChVUkwrJy8nK3Byb3BzLmlkLHtcbiAgICAgICAgc3VtbWFyeTogcHJvcHMuc3VtbWFyeSwgXG4gICAgICAgIG5vdGU6IHByb3BzLm5vdGUsXG4gICAgICAgIHN0YXR1czogcHJvcHMuc3RhdHVzXG4gICAgfSlcbiAgICBcbn0iXX0=