Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide',
  dependencies: [
    {src: 'http://github.mozilla-tunisia.org/reveal.js/lib/js/classList.js', condition: function () {
        return !document.body.classList;
      }},
    {src: 'http://github.mozilla-tunisia.org/reveal.js/plugin/highlight/highlight.js', async: true, condition: function () {
        return !!document.querySelector('pre code');
      }, callback: function () {
        hljs.initHighlightingOnLoad();
      }},
    {src: 'http://github.mozilla-tunisia.org/reveal.js/plugin/zoom-js/zoom.js', async: true},
    {src: 'http://github.mozilla-tunisia.org/reveal.js/plugin/notes/notes.js', async: true}
  ]
});