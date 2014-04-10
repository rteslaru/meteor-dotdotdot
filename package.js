Package.describe({
  summary: "A jQuery plugin for advanced cross-browser ellipsis on multiple line content"
});

Package.on_use(function (api, where) {
  api.add_files('lib/jquery.dotdotdot.js', ['client']);
});

