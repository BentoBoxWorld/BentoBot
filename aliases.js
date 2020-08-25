const aliases = require("./configs/aliases.json")

exports.find_project_for_alias = function(alias) {
  let project = alias.toLowerCase()
  if (project in aliases) {
    return aliases[project]
  } else {
    return alias;
  }
}
