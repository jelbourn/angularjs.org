angular.module('download-data', [])

.value('BRANCHES', [
    {
      branch: '1.2.*', version: '${CDN_VERSION_1_2}',
      title: '1.2.x (legacy)',
      cssClass: 'branch-1-2-x'
    },
    {
      branch: '1.3.*', version: '${CDN_VERSION_1_3}',
      title: '1.3.x (stable)',
      cssClass: 'branch-1-3-x'
    },
    {
      branch: '1.4.*', version: '${CDN_VERSION_1_4}',
      title: '1.4.x (next)',
      cssClass: 'branch-1-4-x'
    }
])

.value('BUILDS', [
    { name: 'Minified' },
    { name: 'Uncompressed' },
    { name: 'Zip' }
])

.value('DOWNLOAD_INFO', {
  branchesInfo:
    "<dl class='dl-horizontal'>"+
    "  <dt>Legacy 1.2.x</dt>"+
    "  <dd>This branch is in maintenance mode. It is stable and the API will not undergo any further changes. New releases will only contain bug-fixes.</dd>"+
    "  <dt>Stable 1.3.x</dt>"+
    "  <dd>This is the latest stable branch, with regular bug fixes, performance improvements and small features added.</dd>"+
    "  <dt>Next 1.4.x</dt>"+
    "  <dd>This is the master development branch, with new features, bug fixes and performance improvements. Breaking changes are allowed in this branch.</dd>"+
    "</dl>",

  buildsInfo:
    "<dl class='dl-horizontal'>"+
    "  <dt>Minified</dt>"+
    "  <dd>Minified and obfuscated version of the AngularJS base code. Use this in your deployed application (but only if you can't use Google's CDN)</dd>"+
    "  <dt>Uncompressed</dt>"+
    "  <dd>The main AngularJS source code, as is. Useful for debugging and development purpose, but should ideally not be used in your deployed application</dd>"+
    "  <dt>Zipped</dt>"+
    "  <dd>The zipped version of the Angular Build, which contains both the builds of AngularJS, as well as documentation and other extras</dd>"+
    "</dl>",

  cdnInfo:
    "While downloading and using the AngularJS source code is great for development, "+
    "we recommend that you source the script from Google's CDN (Content Delivery Network) in your deployed, customer facing app whenever possible. "+
    "You get the following advantages for doing so:"+
    "<ul>"+
    "  <li><strong>Better Caching :</strong> If you host AngularJS yourself, your users will have to download the source code atleast once. But if the browser sees that you are referring to Google CDN's version of AngularJS, and your user has visited another app which uses AngularJS, then he can avail the benefits of caching, and thus reduce one download, speeding up his overall experience!</li>"+
    "  <li><strong>Decreased Latency :</strong> Google's CDN distributes your static content across the globe, in various diverse, physical locations. It increases the odds that the user gets a version of AngularJS served from a location near him, thus reducing overall latency.</li>"+
    "  <li><strong>Increased Parallelism : </strong>Using Google's CDN reduces one request to your domain. Depending on the browser, the number of parallel requests it can make to a domain is restricted (as low as 2 in IE 7). So it can make a gigantic difference in loading times for users of those browsers.</li>"+
    "</ul>",

  bowerInfo:
    "Bower is a package manager for client-side JavaScript components.<br><br>"+
    "For more info please see: <a href='https://github.com/bower/bower'>https://github.com/bower/bower</a>"
});