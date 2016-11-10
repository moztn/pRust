Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  transition: 'slide',
  dependencies: [
    { src: 'js/remote-code.js' },
    {src: 'components/moz-reveal.js/lib/js/classList.js', condition: function () {
        return !document.body.classList;
      }},
    {src: 'components/moz-reveal.js/plugin/highlight/highlight.js', async: true, condition: function () {
        return !!document.querySelector('pre code');
      }, callback: function () {
        hljs.initHighlightingOnLoad();
        fetchAllCode();
      }},
    {src: 'components/moz-reveal.js/plugin/zoom-js/zoom.js', async: true},
    {src: 'components/moz-reveal.js/plugin/notes/notes.js', async: true}
  ]
});