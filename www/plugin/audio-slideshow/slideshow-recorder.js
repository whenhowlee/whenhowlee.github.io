


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>reveal.js/slideshow-recorder.js at audio-slideshow · rajgoel/reveal.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="rajgoel/reveal.js" name="twitter:title" /><meta content="reveal.js - The HTML Presentation Framework" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/4448455?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/4448455?v=3&amp;s=400" property="og:image" /><meta content="rajgoel/reveal.js" property="og:title" /><meta content="https://github.com/rajgoel/reveal.js" property="og:url" /><meta content="reveal.js - The HTML Presentation Framework" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="7761CAA1:0968:75BCEDA:55067FF2" name="octolytics-dimension-request_id" /><meta content="11130522" name="octolytics-actor-id" /><meta content="whenhowlee" name="octolytics-actor-login" /><meta content="a2517f8317bdb795081f00e381d3f650c7cb23f4cecd3b64991029cdd5af7a3b" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="gsuOE9tBl4Q2ZPCdPBStAyWtkzeGT4c26u6TNvk2TTA+UBMYMEW7i1Op+Z36tuGyuNsGNUb7T9h00UzNYqLlNA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-85e4ac99403eefa73664d9b122f27095fee8b7333e67f34fa34480ae497f7555.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-901780fdaaa6b0f56b2004899a7a24194bf4217cc7864291a9f68fa3a9264fdf.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="8060cc7a9543870628764b4fdb4264ea">

      
  <meta name="description" content="reveal.js - The HTML Presentation Framework">
  <meta name="go-import" content="github.com/rajgoel/reveal.js git https://github.com/rajgoel/reveal.js.git">

  <meta content="4448455" name="octolytics-dimension-user_id" /><meta content="rajgoel" name="octolytics-dimension-user_login" /><meta content="15249409" name="octolytics-dimension-repository_id" /><meta content="rajgoel/reveal.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="1861458" name="octolytics-dimension-repository_parent_id" /><meta content="hakimel/reveal.js" name="octolytics-dimension-repository_parent_nwo" /><meta content="1861458" name="octolytics-dimension-repository_network_root_id" /><meta content="hakimel/reveal.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/rajgoel/reveal.js/commits/audio-slideshow.atom" rel="alternate" title="Recent Commits to reveal.js:audio-slideshow" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public fork page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/rajgoel/reveal.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/rajgoel/reveal.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/whenhowlee" data-ga-click="Header, go to profile, text:username">
      <img alt="whenhowlee" class="avatar" data-user="11130522" height="20" src="https://avatars3.githubusercontent.com/u/11130522?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">whenhowlee</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="rajgoel/reveal.js">This repository</span>
    </li>
      <li>
        <a href="/rajgoel/reveal.js/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xjn1eMB7GeFdtmYf9jbVnDVz+oGtMxpsycGcGQOV1HpBkYq9soiqtI5Wf+Kt2fbXMcx59MNb8IfNFD1rygEEtg==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="L7jDHvz/dGXlwJ57ew/B9YU7NAT11i5/1J8c0/w1SUBEvGM54MnPRjvu5EcG0z2d21Hm/ORqXiRq9DKewnHcgw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="15249409" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/rajgoel/reveal.js/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/rajgoel/reveal.js/watchers">
          3
        </a>
        
        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/rajgoel/reveal.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oMXLFcNPetwajwoZjiCsbfa9W1aWV+N0mnc3mkeHYpbx9dWBOwdUfl1MmBaZS96B6d5YsqbfVwZi+hWI7Ul3pw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar rajgoel/reveal.js"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/rajgoel/reveal.js/stargazers">
          2
        </a>
</form>
    <form accept-charset="UTF-8" action="/rajgoel/reveal.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kwgqkkZufaE9b3RFoB+mTs2rFQ/sUugE4OIlOh2gaSdYxD6umOSEcUQMpYATh+A5NDAf7FxAU94a7cxrl4tIyg==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star rajgoel/reveal.js"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/rajgoel/reveal.js/stargazers">
          2
        </a>
</form>  </div>

  </li>

        <li>
          <form accept-charset="UTF-8" action="/rajgoel/reveal.js/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LcASRjRS+WfBh8yMihHD+IWd7gmlvbhNiovZmwJ8Ld/Lt6qZgqvPfCWvYnX71aVCXdAXeDjL2yUrrRd8dOZ/JQ==" /></div>
            <button
                type="submit"
                class="minibutton with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of rajgoel/reveal.js to your account"
                aria-label="Fork your own copy of rajgoel/reveal.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
            <a href="/rajgoel/reveal.js/network" class="social-count">5,980</a>
</form>        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/rajgoel" class="url fn" itemprop="url" rel="author"><span itemprop="title">rajgoel</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/rajgoel/reveal.js" class="js-current-repository" data-pjax="#js-repo-pjax-container">reveal.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/hakimel/reveal.js">hakimel/reveal.js</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/rajgoel/reveal.js/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/rajgoel/reveal.js/tree/audio-slideshow" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /rajgoel/reveal.js/tree/audio-slideshow">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/rajgoel/reveal.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /rajgoel/reveal.js/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/rajgoel/reveal.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /rajgoel/reveal.js/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/rajgoel/reveal.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /rajgoel/reveal.js/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/rajgoel/reveal.js/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /rajgoel/reveal.js/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/rajgoel/reveal.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /rajgoel/reveal.js/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/rajgoel/reveal.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:rajgoel/reveal.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/rajgoel/reveal.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="https://windows.github.com" class="minibutton sidebar-button" title="Save rajgoel/reveal.js to your computer and use it in GitHub Desktop." aria-label="Save rajgoel/reveal.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/rajgoel/reveal.js/archive/audio-slideshow.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of rajgoel/reveal.js as a zip file"
                   title="Download the contents of rajgoel/reveal.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/rajgoel/reveal.js/blob/cd7181a4746cdb6c62036534585dc819b502fd6c/plugin/audio-slideshow/slideshow-recorder.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:c664af253467e206978b7dbd11575a19 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="audio-slideshow"
    title="audio-slideshow"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">audio-slideshow</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/animate/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="animate"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="animate">
                animate
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/rajgoel/reveal.js/blob/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="audio-slideshow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="audio-slideshow">
                audio-slideshow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/dev/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="dev"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev">
                dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/embed/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="embed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="embed">
                embed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/gh-pages/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/master/plugin/audio-slideshow/slideshow-recorder.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.6.1/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.1">2.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.6.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0">2.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.5.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.0">2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.4.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.3.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0">2.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.2.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.1.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.0.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.4.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.3.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.2.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.1.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.0.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/0.3.0/plugin/audio-slideshow/slideshow-recorder.js"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/rajgoel/reveal.js/find/audio-slideshow"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">reveal.js</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow/plugin" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">plugin</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow/plugin/audio-slideshow" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">audio-slideshow</span></a></span><span class="separator">/</span><strong class="final-path">slideshow-recorder.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="rajgoel" class="avatar" data-user="4448455" height="24" src="https://avatars2.githubusercontent.com/u/4448455?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/rajgoel" rel="author">rajgoel</a></span>
        <time datetime="2015-03-12T20:58:33Z" is="relative-time">Mar 12, 2015</time>
        <div class="commit-title">
            <a href="/rajgoel/reveal.js/commit/cd7181a4746cdb6c62036534585dc819b502fd6c" class="message" data-pjax="true" title="Update slideshow-recorder.js

Stripped debugging leftover">Update slideshow-recorder.js</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="rajgoel" data-user="4448455" height="24" src="https://avatars2.githubusercontent.com/u/4448455?v=3&amp;s=48" width="24" />
            <a href="/rajgoel">rajgoel</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">
      <div class="button-group">
        <a href="/rajgoel/reveal.js/raw/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/rajgoel/reveal.js/blame/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/rajgoel/reveal.js/commits/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="https://windows.github.com" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/rajgoel/reveal.js/edit/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BVr50v7QF0tYuwAEVqLopiotuylCIQNli7w+C85DwQiItB5fuf/SsOCDtlggnuDsgJrMzGyORrRO5UPTE/eSaQ==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/rajgoel/reveal.js/delete/audio-slideshow/plugin/audio-slideshow/slideshow-recorder.js" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="wn+Bx5Kw/p1feAM6bEtnL0q3/dQEdZ3pCMXmIFy5SXOHdQRtCse733f54vrTLHi7p4N6/SOk5eTR7QdpvRa8mg==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        350 lines (304 sloc)
        <span class="file-info-divider"></span>
      94.282 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c">** Author: Asvin Goel, goel@telematique.eu</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">** The slide show recorder is a plugin for reveal.js allowing to</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">** record audio for a slide deck. </span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">** Version: 0.2</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">** </span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c">** License: MIT license (see LICENSE.md)</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">** Credits:</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">** - Muaz Khan for RecordRTC.js </span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c">** - Stuart Knightley for JSzip.js</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c">******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line"><span class="pl-s">var</span> Recorder <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    audio<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    audioStream<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">    recordRTC<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    zip<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">    indices<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">    recordedAudio<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">    canvas<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">    isRecording<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">    isPaused<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    initialize <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">initialize</span>() {</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	<span class="pl-v">this</span>.audio <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Audio</span>();</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">	<span class="pl-v">this</span>.audio.autoplay <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	<span class="pl-v">this</span>.zip <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">JSZip</span>();</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">	<span class="pl-c">// Create canvas on which red circle can be drawn</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">	<span class="pl-v">this</span>.canvas <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>canvas<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">	<span class="pl-v">this</span>.canvas.<span class="pl-sc">className</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>recorder<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">	<span class="pl-v">this</span>.canvas.<span class="pl-s3">setAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>position: fixed; top: 25px; right: 50px;<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">	<span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> <span class="pl-k">=</span> <span class="pl-c1">25</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">	<span class="pl-v">this</span>.canvas.<span class="pl-sc">height</span> <span class="pl-k">=</span> <span class="pl-c1">25</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">	<span class="pl-s3">document</span>.querySelector( <span class="pl-s1"><span class="pl-pds">&#39;</span>.reveal<span class="pl-pds">&#39;</span></span> ).<span class="pl-s3">appendChild</span>( <span class="pl-v">this</span>.canvas );</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    }, </td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">    toggleRecording<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">toggleRecording</span>( <span class="pl-vpf">override</span> ) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">	<span class="pl-s">var</span> wasRecording <span class="pl-k">=</span> <span class="pl-v">this</span>.isRecording;</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	<span class="pl-k">if</span>( <span class="pl-k">typeof</span> override <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">		<span class="pl-v">this</span>.isRecording <span class="pl-k">=</span> override;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">		<span class="pl-v">this</span>.isPaused <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">	<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">		<span class="pl-v">this</span>.isRecording <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-v">this</span>.isRecording;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">	<span class="pl-c">// turn of recording if overview is shown or screen is black</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">	<span class="pl-v">this</span>.isRecording <span class="pl-k">=</span> ( <span class="pl-v">this</span>.isRecording <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>Reveal.isOverview() <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>Reveal.isPaused() );</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-k">!</span>wasRecording <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.isRecording ) {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">		<span class="pl-v">this</span>.<span class="pl-sc">start</span>();</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">	<span class="pl-k">else</span> <span class="pl-k">if</span> ( wasRecording <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-v">this</span>.isRecording) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">		<span class="pl-v">this</span>.<span class="pl-s3">stop</span>();</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">    start <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">start</span>() {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">	<span class="pl-s3">window</span>.onbeforeunload <span class="pl-k">=</span> confirmExit;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">  	<span class="pl-st">function</span> <span class="pl-en">confirmExit</span>()</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">  	{</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">    		<span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>You have attempted to leave this page. All unsaved audio recordings will be lost. Are you sure you want to exit this page?<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">	<span class="pl-v">this</span>.indices <span class="pl-k">=</span> Reveal.getIndices();</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">	<span class="pl-c">// determine audio element for slide</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">	<span class="pl-s">var</span> id <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.v;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-v">this</span>.indices.f <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) id <span class="pl-k">=</span> id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.f;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">	<span class="pl-v">this</span>.recordedAudio <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( id );</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-v">this</span>.recordedAudio ) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">		<span class="pl-s3">alert</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>Audio player is not found. Please check that audio-slideshow plugin is loaded!<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-v">this</span>.audioStream <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-v">this</span>.recordRTC ) { </td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">		<span class="pl-s3">navigator</span>.getUserMedia( { audio<span class="pl-k">:</span> <span class="pl-c1">true</span>, video<span class="pl-k">:</span> <span class="pl-c1">false</span> }, <span class="pl-st">function</span>( <span class="pl-vpf">stream</span> ) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-s3">window</span>.IsChrome ) stream <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">window.MediaStream</span>( stream.getAudioTracks() );</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">			Recorder.audioStream <span class="pl-k">=</span> stream;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">			Recorder.recordRTC <span class="pl-k">=</span> <span class="pl-s3">window</span>.RecordRTC( stream, { type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>audio<span class="pl-pds">&#39;</span></span> }, { bufferSize<span class="pl-k">:</span> <span class="pl-c1">256</span> } );</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">			Recorder.recordRTC.startRecording();</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">			<span class="pl-c">// Draw red circle over auto slide control</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">			<span class="pl-s">var</span> context <span class="pl-k">=</span> Recorder.canvas.getContext( <span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">			context.beginPath();</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">			context.arc( ( Recorder.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ), ( Recorder.canvas.<span class="pl-sc">height</span> / <span class="pl-c1">2</span> ), ( Recorder.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ) <span class="pl-k">-</span> <span class="pl-c1">3</span>, <span class="pl-c1">0</span>, <span class="pl-s3">Math</span>.<span class="pl-sc">PI</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">			context.lineWidth <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">			context.fillStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#f00<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">			context.fill();</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">			context.strokeStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#f00<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">			context.stroke();</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">		}, <span class="pl-st">function</span>( <span class="pl-vpf">error</span> ) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">			<span class="pl-s3">alert</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>Something went wrong in accessing the microphone. (error code <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> error.<span class="pl-sc">code</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">		} );</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">	<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">		<span class="pl-v">this</span>.audio.<span class="pl-sc">src</span> <span class="pl-k">=</span> URL.createObjectURL( <span class="pl-v">this</span>.audioStream );</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">		<span class="pl-v">this</span>.audio.volume <span class="pl-k">=</span> <span class="pl-c1">0.0</span>;</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">		<span class="pl-v">this</span>.recordRTC.startRecording();</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">		<span class="pl-c">// Draw red circle over auto slide control</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">		<span class="pl-s">var</span> context <span class="pl-k">=</span> <span class="pl-v">this</span>.canvas.getContext( <span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">		context.beginPath();</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">		context.arc( ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ), ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">height</span> / <span class="pl-c1">2</span> ), ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ) <span class="pl-k">-</span> <span class="pl-c1">3</span>, <span class="pl-c1">0</span>, <span class="pl-s3">Math</span>.<span class="pl-sc">PI</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">		context.lineWidth <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">		context.fillStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#f00<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">		context.fill();</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">		context.strokeStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#f00<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">		context.stroke();</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">    stop <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">stop</span>() {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">	<span class="pl-v">this</span>.audio.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-v">this</span>.recordRTC ) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">		<span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.v;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">		<span class="pl-k">if</span> ( ( <span class="pl-k">typeof</span> <span class="pl-v">this</span>.indices.f <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>) ) <span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.f;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">		<span class="pl-v">this</span>.recordRTC.stopRecording( <span class="pl-st">function</span>( <span class="pl-vpf">url</span> ) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">			<span class="pl-c">// add audio URL to slide</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">			Recorder.recordedAudio.<span class="pl-sc">src</span> <span class="pl-k">=</span> url;</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">			<span class="pl-c">// add audio to zip</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">			<span class="pl-s">var</span> blob <span class="pl-k">=</span> Recorder.recordRTC.getBlob();</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">			Recorder.<span class="pl-sc">filename</span> <span class="pl-k">=</span> Recorder.<span class="pl-sc">filename</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> blob.<span class="pl-sc">type</span>.<span class="pl-s3">split</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> ).<span class="pl-s3">pop</span>();</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">			<span class="pl-s">var</span> reader <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">window.FileReader</span>();</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">			reader.readAsBinaryString(blob); </td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">			<span class="pl-s3">reader</span>.<span class="pl-en">onloadend</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">				blobBinaryString <span class="pl-k">=</span> reader.result; </td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">				Recorder.zip.file( Recorder.<span class="pl-sc">filename</span>, blobBinaryString, { binary<span class="pl-k">:</span> <span class="pl-c1">true</span> } );</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">				Recorder.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">		} );</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		<span class="pl-v">this</span>.indices <span class="pl-k">=</span> <span class="pl-c1">null</span>;	</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">		</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">	<span class="pl-c">// Remove red circle over auto slide control</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">	<span class="pl-s">var</span> context <span class="pl-k">=</span> <span class="pl-v">this</span>.canvas.getContext( <span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">	context.clearRect ( <span class="pl-c1">0</span> , <span class="pl-c1">0</span> , <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> , <span class="pl-v">this</span>.canvas.<span class="pl-sc">height</span> );</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">    next <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">next</span>() {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">	<span class="pl-c">// Remove red or yellow circle</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">	<span class="pl-s">var</span> context <span class="pl-k">=</span> <span class="pl-v">this</span>.canvas.getContext( <span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">	context.clearRect ( <span class="pl-c1">0</span> , <span class="pl-c1">0</span> , <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> , <span class="pl-v">this</span>.canvas.<span class="pl-sc">height</span> );</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">	<span class="pl-v">this</span>.audio.<span class="pl-sc">src</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-v">this</span>.recordRTC ) {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">		<span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.v;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">		<span class="pl-k">if</span> ( ( <span class="pl-k">typeof</span> <span class="pl-v">this</span>.indices.f <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>) ) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">			<span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">filename</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.indices.f;</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">		<span class="pl-v">this</span>.recordRTC.stopRecording( <span class="pl-st">function</span>( <span class="pl-vpf">url</span> ) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">			<span class="pl-c">// add audio URL to slide</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">			Recorder.recordedAudio.<span class="pl-sc">src</span> <span class="pl-k">=</span> url;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">			<span class="pl-c">// add audio to zip</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">			<span class="pl-s">var</span> blob <span class="pl-k">=</span> Recorder.recordRTC.getBlob();</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">			Recorder.<span class="pl-sc">filename</span> <span class="pl-k">=</span> Recorder.<span class="pl-sc">filename</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> blob.<span class="pl-sc">type</span>.<span class="pl-s3">split</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> ).<span class="pl-s3">pop</span>();</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">			<span class="pl-s">var</span> reader <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">window.FileReader</span>();</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">			reader.readAsBinaryString(blob); </td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">			<span class="pl-s3">reader</span>.<span class="pl-en">onloadend</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">				blobBinaryString <span class="pl-k">=</span> reader.result; </td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">				Recorder.zip.file( Recorder.<span class="pl-sc">filename</span>, blobBinaryString, { binary<span class="pl-k">:</span> <span class="pl-c1">true</span> } );</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">				Recorder.<span class="pl-sc">filename</span> <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span>Recorder.isPaused ) Recorder.<span class="pl-sc">start</span>();</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">		} );		</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">	<span class="pl-k">if</span> ( <span class="pl-v">this</span>.isPaused ) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line"> 		<span class="pl-c">// Draw yellow circle over auto slide control</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">		<span class="pl-s">var</span> context <span class="pl-k">=</span> <span class="pl-v">this</span>.canvas.getContext( <span class="pl-s1"><span class="pl-pds">&#39;</span>2d<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">		context.beginPath();</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">		context.arc( ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ), ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">height</span> / <span class="pl-c1">2</span> ), ( <span class="pl-v">this</span>.canvas.<span class="pl-sc">width</span> / <span class="pl-c1">2</span> ) <span class="pl-k">-</span> <span class="pl-c1">3</span>, <span class="pl-c1">0</span>, <span class="pl-s3">Math</span>.<span class="pl-sc">PI</span> <span class="pl-k">*</span> <span class="pl-c1">2</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">		context.lineWidth <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">		context.fillStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#ff0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">		context.fill();</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">		context.strokeStyle <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>#ff0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">		context.stroke();</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">	</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">    downloadZip <span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">downloadZip</span>() {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">	<span class="pl-s">var</span> a <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">	<span class="pl-s3">document</span>.<span class="pl-sc">body</span>.<span class="pl-s3">appendChild</span>(a);	</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">	<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">	  a.download <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audio.zip<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">	  a.<span class="pl-sc">href</span> <span class="pl-k">=</span> <span class="pl-s3">window</span>.<span class="pl-sc">URL</span>.createObjectURL( <span class="pl-v">this</span>.zip.generate( {type<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>blob<span class="pl-pds">&quot;</span></span>} ) );</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">  	} <span class="pl-k">catch</span>( error ) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line"> 	  a.innerHTML <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> (<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> error <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line"> 	}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">	a.<span class="pl-s3">click</span>();</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">	<span class="pl-s3">document</span>.<span class="pl-sc">body</span>.<span class="pl-s3">removeChild</span>(a);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">};</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>fragmentshown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Recorder.isRecording ) {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">			<span class="pl-k">if</span> ( recordedAudioExists( Reveal.getIndices() ) ) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> ( Recorder.isPaused ) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">				<span class="pl-c">// resume recording</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">false</span>;				</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">				Recorder.<span class="pl-sc">start</span>();</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>fragmenthidden<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Recorder.isRecording ) {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">			<span class="pl-k">if</span> ( recordedAudioExists( Reveal.getIndices() ) ) {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> ( Recorder.isPaused ) {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">				<span class="pl-c">// resume recording</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">false</span>;				</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">				Recorder.<span class="pl-sc">start</span>();</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>overviewshown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">		Recorder.toggleRecording( <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>paused<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">		Recorder.toggleRecording( <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>ready<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">		Recorder.initialize();</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>slidechanged<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Recorder.isRecording ) {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">			<span class="pl-k">if</span> ( recordedAudioExists( Reveal.getIndices() ) ) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> ( Recorder.isPaused ) {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">				<span class="pl-c">// resume recording</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">				Recorder.isPaused <span class="pl-k">=</span> <span class="pl-c1">false</span>;				</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">				Recorder.<span class="pl-sc">start</span>();</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">				Recorder.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">			</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">recordedAudioExists</span>( <span class="pl-vpf">indices</span> ) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">		<span class="pl-s">var</span> id <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.v;</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">		<span class="pl-k">if</span> ( indices.f <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) id <span class="pl-k">=</span> id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.f;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">		<span class="pl-k">return</span> ( <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( id ).<span class="pl-sc">src</span>.<span class="pl-s3">substring</span>(<span class="pl-c1">0</span>,<span class="pl-c1">4</span>) <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>blob<span class="pl-pds">&quot;</span></span>); </td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line"><span class="pl-c">/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line"><span class="pl-c">** RecordRTC.js</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line"><span class="pl-c">******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line"><span class="pl-c">// Last time updated at Feb 12, 2015, 08:32:23</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line"><span class="pl-c">// links:</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line"><span class="pl-c">// Open-Sourced: https://github.com/muaz-khan/RecordRTC</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line"><span class="pl-c">// http://cdn.WebRTC-Experiment.com/RecordRTC.js</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line"><span class="pl-c">// Browsers Support::</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line"><span class="pl-c">// Chrome (all versions) [ audio ]</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line"><span class="pl-c">// Firefox ( &gt;= 29 ) [ audio in ogg ]</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line"><span class="pl-c">// Opera (all versions) [ same as chrome ]</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line"><span class="pl-c">// Android (Chrome) [ no audio ]</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line"><span class="pl-c">// Android (Opera) [ no audio ]</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line"><span class="pl-c">// Android (Firefox) [ no audio ]</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line"><span class="pl-c">//------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line"><span class="pl-c">// Muaz Khan     - www.MuazKhan.com</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line"><span class="pl-c">// MIT License   - www.WebRTC-Experiment.com/licence</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line"><span class="pl-c">//------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line"><span class="pl-c">// Note: RecordRTC.js is using other libraries; you need to accept their licences as well.</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line"><span class="pl-c">//------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line"><span class="pl-c">// 1. RecordRTC.js</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line"><span class="pl-c">// 3. Cross-Browser-Declarations.js</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line"><span class="pl-c">// 4. Storage.js</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line"><span class="pl-c">// 5. MediaStreamRecorder.js</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line"><span class="pl-c">// 6. StereoRecorder.js</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line"><span class="pl-c">// 7. StereoAudioRecorder.js</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line"><span class="pl-c">//------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line"><span class="pl-c">// ____________</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line"><span class="pl-c">// RecordRTC.js</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line"><span class="pl-c"> * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a JavaScript-based media-recording library for modern web-browsers (supporting WebRTC getUserMedia API). It is optimized for different devices and browsers to bring all client-side (pluginfree) recording solutions in single place.</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line"><span class="pl-c"> * @summary JavaScript audio/video recording library runs top over WebRTC getUserMedia API.</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line"><span class="pl-c"> * @license {@link https://www.webrtc-experiment.com/licence/|MIT}</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line"><span class="pl-c"> * @author {@link https://www.MuazKhan.com|Muaz Khan}</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line"><span class="pl-c"> * @typedef RecordRTC</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line"><span class="pl-c"> * @class</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line"><span class="pl-c"> * @example</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line"><span class="pl-c"> * var recordRTC = RecordRTC(mediaStream, {</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line"><span class="pl-c"> *     type: &#39;video&#39; // audio or video or gif or canvas</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line"><span class="pl-c"> * });</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line"><span class="pl-c"> * // or, you can even use keyword &quot;new&quot;</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line"><span class="pl-c"> * var recordRTC = new RecordRTC(mediaStream[, config]);</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line"><span class="pl-c"> * @see For further information:</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line"><span class="pl-c"> * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">function RecordRTC(e,o){function t(){o.disableLogs||console.debug(&quot;started recording &quot;+o.type+&quot; stream.&quot;);var t=isChrome?window.StereoRecorder:window.MediaStreamRecorder;return o.recorderType&amp;&amp;(t=o.recorderType),s=new t(e),s=mergeProps(s,o),s.onAudioProcessStarted=function(){o.onAudioProcessStarted&amp;&amp;o.onAudioProcessStarted()},s.onGifPreview=function(e){o.onGifPreview&amp;&amp;o.onGifPreview(e)},s.record(),d}function r(e){function t(){for(var t in s)d&amp;&amp;(d[t]=s[t]),r&amp;&amp;(r[t]=s[t]);var n=s.blob;if(e){var i=URL.createObjectURL(n);e(i)}o.disableLogs||console.debug(n.type,&quot;-&gt;&quot;,bytesToSize(n.size)),o.autoWriteToDisk&amp;&amp;a(function(e){var t={};t[o.type+&quot;Blob&quot;]=e})}if(!s)return console.warn(c);var r=this;o.disableLogs||console.warn(&quot;Stopped recording &quot;+o.type+&quot; stream.&quot;),&quot;gif&quot;!==o.type?s.stop(t):(s.stop(),t())}function n(){return s?void(s.pause?s.pause():o.disableLogs||console.warn(&#39;This recording library is having no &quot;pause&quot; method.&#39;)):console.warn(c)}function i(){return s?void(s.resume?s.resume():o.disableLogs||console.warn(&#39;This recording library is having no &quot;resume&quot; method.&#39;)):console.warn(c)}function a(e,t){function r(e){var o=URL.createObjectURL(new Blob([e.toString(),&quot;this.onmessage =  function (e) {readFile(e.data);}&quot;],{type:&quot;application/javascript&quot;})),t=new Worker(o);return URL.revokeObjectURL(o),t}if(!e)throw&quot;Pass a callback function over getDataURL.&quot;;var n=t?t.blob:s.blob;if(!n)return o.disableLogs||console.warn(&quot;Blob encoder did not yet finished its job.&quot;),void setTimeout(function(){a(e,t)},1e3);if(window.Worker){var i=r(function(e){postMessage((new FileReaderSync).readAsDataURL(e))});i.onmessage=function(o){e(o.data)},i.postMessage(n)}else{var d=new FileReader;d.readAsDataURL(n),d.onload=function(o){e(o.target.result)}}}if(o=o||{},!e)throw&quot;MediaStream is mandatory.&quot;;o.type||(o.type=&quot;audio&quot;);var s,d=this,c=&#39;It seems that &quot;startRecording&quot; is not invoked for &#39;+o.type+&quot; recorder.&quot;,u={startRecording:t,stopRecording:r,pauseRecording:n,resumeRecording:i,getBlob:function(){return s?s.blob:console.warn(c)},getDataURL:a,toURL:function(){return s?URL.createObjectURL(s.blob):console.warn(c)},save:function(e){if(!s){var o=this;return setTimeout(function(){o.save(e)},2e3),console.warn(c)}var t=document.createElement(&quot;a&quot;);t.href=URL.createObjectURL(s.blob),t.target=&quot;_blank&quot;,t.download=(e||Math.round(9999999999*Math.random())+888888888)+&quot;.&quot;+s.blob.type.split(&quot;/&quot;)[1];var r=new MouseEvent(&quot;click&quot;,{view:window,bubbles:!0,cancelable:!0});t.dispatchEvent(r),(window.URL||window.webkitURL).revokeObjectURL(t.href)},blob:null,bufferSize:0,sampleRate:0,buffer:null,view:null};if(!this)return u;for(var f in u)this[f]=u[f];return u}function mergeProps(e,o){o=reformatProps(o);for(var t in o)&quot;function&quot;!=typeof o[t]&amp;&amp;(e[t]=o[t]);return e}function reformatProps(e){var o={};for(var t in e)if(-1!==t.indexOf(&quot;-&quot;)){var r=t.split(&quot;-&quot;),n=r[0]+r[1].split(&quot;&quot;)[0].toUpperCase()+r[1].substr(1);o[n]=e[t]}else o[t]=e[t];return o}function bytesToSize(e){var o=1e3,t=[&quot;Bytes&quot;,&quot;KB&quot;,&quot;MB&quot;,&quot;GB&quot;,&quot;TB&quot;];if(0===e)return&quot;0 Bytes&quot;;var r=parseInt(Math.floor(Math.log(e)/Math.log(o)),10);return(e/Math.pow(o,r)).toPrecision(3)+&quot; &quot;+t[r]}function MediaStreamRecorder(e){var o=this;if(o.mimeType&amp;&amp;&quot;video/webm&quot;!==o.mimeType&amp;&amp;e.getVideoTracks&amp;&amp;e.getVideoTracks().length){var t=new AudioContext,r=t.createMediaStreamSource(e),n=t.createMediaStreamDestination();r.connect(n),e=n.stream}var i=!1;this.record=function(){a=new window.MediaRecorder(e),a.ondataavailable=function(e){if(!i){if(!e.data.size)return void(o.disableLogs||console.warn(&quot;Recording of&quot;,e.data.type,&quot;failed.&quot;));i=!0,o.blob=new Blob([e.data],{type:e.data.type||o.mimeType||&quot;audio/ogg&quot;}),o.callback&amp;&amp;o.callback()}},a.onerror=function(e){o.disableLogs||console.warn(e),a.stop(),o.record(0)},a.start(0),o.onAudioProcessStarted&amp;&amp;o.onAudioProcessStarted()},this.stop=function(e){a&amp;&amp;(this.callback=e,&quot;recording&quot;===a.state&amp;&amp;a.stop())},this.pause=function(){a&amp;&amp;&quot;recording&quot;===a.state&amp;&amp;(a.pause(),this.disableLogs||console.debug(&quot;Paused recording.&quot;))},this.resume=function(){a&amp;&amp;&quot;paused&quot;===a.state&amp;&amp;(a.resume(),this.disableLogs||console.debug(&quot;Resumed recording.&quot;))};var a}function StereoRecorder(e){var o=this;this.record=function(){t=new StereoAudioRecorder(e,this),t.onAudioProcessStarted=function(){o.onAudioProcessStarted&amp;&amp;o.onAudioProcessStarted()},t.record()},this.stop=function(e){t&amp;&amp;t.stop(function(){for(var r in t)o[r]=t[r];e&amp;&amp;e()})},this.pause=function(){t&amp;&amp;t.pause()},this.resume=function(){t&amp;&amp;t.resume()};var t}function StereoAudioRecorder(e,o){function t(e,o){function t(e){function o(e,o){for(var t=new Float64Array(o),r=0,n=e.length,i=0;n&gt;i;i++){var a=e[i];t.set(a,r),r+=a.length}return t}function t(e,o){for(var t=e.length+o.length,r=new Float64Array(t),n=0,i=0;t&gt;i;)r[i++]=e[n],r[i++]=o[n],n++;return r}function r(e,o,t){for(var r=t.length,n=0;r&gt;n;n++)e.setUint8(o+n,t.charCodeAt(n))}var n=e.leftBuffers,i=e.rightBuffers,a=e.sampleRate;n=o(n[0],n[1]),i=o(i[0],i[1]);var s=t(n,i),d=s.length,c=44+2*d,u=new ArrayBuffer(c),f=new DataView(u);r(f,0,&quot;RIFF&quot;);var l=4;f.setUint32(l,44+2*d,!0),r(f,8,&quot;WAVE&quot;),r(f,12,&quot;fmt &quot;),f.setUint32(16,16,!0),f.setUint16(20,1,!0),f.setUint16(22,2,!0),f.setUint32(24,a,!0),f.setUint32(28,a*l,!0),f.setUint16(32,l,!0),f.setUint16(34,16,!0),r(f,36,&quot;data&quot;),f.setUint32(40,2*d,!0);for(var w,b=44,p=0;d&gt;p;p++,b+=2){var g=Math.max(-1,Math.min(1,s[p])),v=0&gt;g?32768*g:32767*g;e.leftChannel?(v!==w&amp;&amp;f.setInt16(b,v,!0),w=v):f.setInt16(b,v,!0)}postMessage({buffer:u,view:f})}var n=r(t);n.onmessage=function(e){o(e.data.buffer,e.data.view)},n.postMessage(e)}function r(e){var o=URL.createObjectURL(new Blob([e.toString(),&quot;this.onmessage =  function (e) {&quot;+e.name+&quot;(e.data);}&quot;],{type:&quot;application/javascript&quot;})),t=new Worker(o);return URL.revokeObjectURL(o),t}if(!e.getAudioTracks().length)throw&quot;Your stream has no audio tracks.&quot;;var n=this,i=[],a=[],s=!1,d=0;this.record=function(){i.length=a.length=0,d=0,s=!0},this.stop=function(e){s=!1,u.disconnect(),t({sampleRate:w,leftChannel:o.leftChannel,leftBuffers:[i,d],rightBuffers:[a,d]},function(o,t){n.blob=new Blob([t],{type:&quot;audio/wav&quot;}),n.buffer=new ArrayBuffer(t),n.view=t,n.sampleRate=w,n.bufferSize=l,n.length=d,e&amp;&amp;e(),p=!1})},Storage.AudioContextConstructor||(Storage.AudioContextConstructor=new Storage.AudioContext);var c=Storage.AudioContextConstructor,u=c.createMediaStreamSource(e),f=[0,256,512,1024,2048,4096,8192,16384],l=&quot;undefined&quot;==typeof o.bufferSize?4096:o.bufferSize;-1===f.indexOf(l)&amp;&amp;(o.disableLogs||console.warn(&quot;Legal values for buffer-size are &quot;+JSON.stringify(f,null,&quot;	&quot;)));var w=&quot;undefined&quot;!=typeof o.sampleRate?o.sampleRate:c.sampleRate||44100;if((22050&gt;w||w&gt;96e3)&amp;&amp;(o.disableLogs||console.warn(&quot;sample-rate must be under range 22050 and 96000.&quot;)),c.createJavaScriptNode)__stereoAudioRecorderJavacriptNode=c.createJavaScriptNode(l,2,2);else{if(!c.createScriptProcessor)throw&quot;WebAudio API has no support on this browser.&quot;;__stereoAudioRecorderJavacriptNode=c.createScriptProcessor(l,2,2)}u.connect(__stereoAudioRecorderJavacriptNode),l=__stereoAudioRecorderJavacriptNode.bufferSize,o.disableLogs||(console.log(&quot;sample-rate&quot;,w),console.log(&quot;buffer-size&quot;,l));var b=!1;this.pause=function(){b=!0,o.disableLogs||console.debug(&quot;Paused recording.&quot;)},this.resume=function(){b=!1,o.disableLogs||console.debug(&quot;Resumed recording.&quot;)};var p=!1;__stereoAudioRecorderJavacriptNode.onaudioprocess=function(o){if(!b){if(e.ended)return void(__stereoAudioRecorderJavacriptNode.onaudioprocess=function(){});if(!s)return void u.disconnect();p||(p=!0,n.onAudioProcessStarted&amp;&amp;n.onAudioProcessStarted());var t=o.inputBuffer.getChannelData(0),r=o.inputBuffer.getChannelData(1);i.push(new Float32Array(t)),a.push(new Float32Array(r)),d+=l}},__stereoAudioRecorderJavacriptNode.connect(c.destination)}window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame),window.AudioContext||(window.AudioContext=window.webkitAudioContext||window.mozAudioContext),window.URL=window.URL||window.webkitURL,navigator.getUserMedia=navigator.webkitGetUserMedia||navigator.mozGetUserMedia,window.webkitMediaStream&amp;&amp;(window.MediaStream=window.webkitMediaStream);var isChrome=!!navigator.webkitGetUserMedia;0===location.href.indexOf(&quot;file:&quot;)&amp;&amp;console.error(&quot;Please load this HTML file on HTTP or HTTPS.&quot;);var Storage={AudioContext:window.AudioContext||window.webkitAudioContext},__stereoAudioRecorderJavacriptNode;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line"><span class="pl-c">/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line"><span class="pl-c">** jszip.js</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line"><span class="pl-c">******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line"><span class="pl-c">JSZip - A Javascript class for generating and reading zip files</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line"><span class="pl-c">&lt;http://stuartk.com/jszip&gt;</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line"><span class="pl-c">(c) 2009-2014 Stuart Knightley &lt;stuart [at] stuartk.com&gt;</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line"><span class="pl-c">Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line"><span class="pl-c">JSZip uses the library pako released under the MIT license :</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line"><span class="pl-c">https://github.com/nodeca/pako/blob/master/LICENSE</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">!function(a){if(&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module)module.exports=a();else if(&quot;function&quot;==typeof define&amp;&amp;define.amd)define([],a);else{var b;&quot;undefined&quot;!=typeof window?b=window:&quot;undefined&quot;!=typeof global?b=global:&quot;undefined&quot;!=typeof self&amp;&amp;(b=self),b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i=&quot;function&quot;==typeof require&amp;&amp;require;if(!h&amp;&amp;i)return i(g,!0);if(f)return f(g,!0);throw new Error(&quot;Cannot find module &#39;&quot;+g+&quot;&#39;&quot;)}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f=&quot;function&quot;==typeof require&amp;&amp;require,g=0;g&lt;d.length;g++)e(d[g]);return e}({1:[function(a,b,c){&quot;use strict&quot;;var d=&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;;c.encode=function(a){for(var b,c,e,f,g,h,i,j=&quot;&quot;,k=0;k&lt;a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b&gt;&gt;2,g=(3&amp;b)&lt;&lt;4|c&gt;&gt;4,h=(15&amp;c)&lt;&lt;2|e&gt;&gt;6,i=63&amp;e,isNaN(c)?h=i=64:isNaN(e)&amp;&amp;(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j},c.decode=function(a){var b,c,e,f,g,h,i,j=&quot;&quot;,k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,&quot;&quot;);k&lt;a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f&lt;&lt;2|g&gt;&gt;4,c=(15&amp;g)&lt;&lt;4|h&gt;&gt;2,e=(3&amp;h)&lt;&lt;6|i,j+=String.fromCharCode(b),64!=h&amp;&amp;(j+=String.fromCharCode(c)),64!=i&amp;&amp;(j+=String.fromCharCode(e));return j}},{}],2:[function(a,b){&quot;use strict&quot;;function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}c.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=c},{}],3:[function(a,b,c){&quot;use strict&quot;;c.STORE={magic:&quot;\x00\x00&quot;,compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a(&quot;./flate&quot;)},{&quot;./flate&quot;:8}],4:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./utils&quot;),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if(&quot;undefined&quot;==typeof a||!a.length)return 0;var e=&quot;string&quot;!==c.getTypeOf(a);&quot;undefined&quot;==typeof b&amp;&amp;(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j&gt;i;i++)h=e?a[i]:a.charCodeAt(i),g=255&amp;(b^h),f=d[g],b=b&gt;&gt;&gt;8^f;return-1^b}},{&quot;./utils&quot;:21}],5:[function(a,b){&quot;use strict&quot;;function c(){this.data=null,this.length=0,this.index=0}var d=a(&quot;./utils&quot;);c.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length&lt;a||0&gt;a)throw new Error(&quot;End of data reached (data length = &quot;+this.length+&quot;, asked index = &quot;+a+&quot;). Corrupted zip ?&quot;)},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b&gt;=this.index;b--)c=(c&lt;&lt;8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return d.transformTo(&quot;string&quot;,this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a&gt;&gt;25&amp;127)+1980,(a&gt;&gt;21&amp;15)-1,a&gt;&gt;16&amp;31,a&gt;&gt;11&amp;31,a&gt;&gt;5&amp;63,(31&amp;a)&lt;&lt;1)}},b.exports=c},{&quot;./utils&quot;:21}],6:[function(a,b,c){&quot;use strict&quot;;c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.comment=null},{}],7:[function(a,b,c){&quot;use strict&quot;;var d=a(&quot;./utils&quot;);c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo(&quot;uint8array&quot;,a)},c.uint8Array2String=function(a){return d.transformTo(&quot;string&quot;,a)},c.string2Blob=function(a){var b=d.transformTo(&quot;arraybuffer&quot;,a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{&quot;./utils&quot;:21}],8:[function(a,b,c){&quot;use strict&quot;;var d=&quot;undefined&quot;!=typeof Uint8Array&amp;&amp;&quot;undefined&quot;!=typeof Uint16Array&amp;&amp;&quot;undefined&quot;!=typeof Uint32Array,e=a(&quot;pako&quot;);c.uncompressInputType=d?&quot;uint8array&quot;:&quot;array&quot;,c.compressInputType=d?&quot;uint8array&quot;:&quot;array&quot;,c.magic=&quot;\b\x00&quot;,c.compress=function(a){return e.deflateRaw(a)},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:24}],9:[function(a,b){&quot;use strict&quot;;function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root=&quot;&quot;,a&amp;&amp;this.load(a,b),void(this.clone=function(){var a=new c;for(var b in this)&quot;function&quot;!=typeof this[b]&amp;&amp;(a[b]=this[b]);return a})):new c(a,b)}var d=a(&quot;./base64&quot;);c.prototype=a(&quot;./object&quot;),c.prototype.load=a(&quot;./load&quot;),c.support=a(&quot;./support&quot;),c.defaults=a(&quot;./defaults&quot;),c.utils=a(&quot;./deprecatedPublicUtils&quot;),c.base64={encode:function(a){return d.encode(a)},decode:function(a){return d.decode(a)}},c.compressions=a(&quot;./compressions&quot;),b.exports=c},{&quot;./base64&quot;:1,&quot;./compressions&quot;:3,&quot;./defaults&quot;:6,&quot;./deprecatedPublicUtils&quot;:7,&quot;./load&quot;:10,&quot;./object&quot;:13,&quot;./support&quot;:17}],10:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./base64&quot;),d=a(&quot;./zipEntries&quot;);b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&amp;&amp;(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g&lt;e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,createFolders:b.createFolders});return f.zipComment.length&amp;&amp;(this.comment=f.zipComment),this}},{&quot;./base64&quot;:1,&quot;./zipEntries&quot;:22}],11:[function(a,b){(function(a){&quot;use strict&quot;;b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,&quot;undefined&quot;!=typeof Buffer?Buffer:void 0)},{}],12:[function(a,b){&quot;use strict&quot;;function c(a){this.data=a,this.length=this.data.length,this.index=0}var d=a(&quot;./uint8ArrayReader&quot;);c.prototype=new d,c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{&quot;./uint8ArrayReader&quot;:18}],13:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./support&quot;),d=a(&quot;./utils&quot;),e=a(&quot;./crc32&quot;),f=a(&quot;./signature&quot;),g=a(&quot;./defaults&quot;),h=a(&quot;./base64&quot;),i=a(&quot;./compressions&quot;),j=a(&quot;./compressedObject&quot;),k=a(&quot;./nodeBuffer&quot;),l=a(&quot;./utf8&quot;),m=a(&quot;./stringWriter&quot;),n=a(&quot;./uint8ArrayWriter&quot;),o=function(a){if(a._data instanceof j&amp;&amp;(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,&quot;uint8array&quot;===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&amp;&amp;a._data.set(b,0)}return a._data},p=function(a){var b=o(a),e=d.getTypeOf(b);return&quot;string&quot;===e?!a.options.binary&amp;&amp;c.nodebuffer?k(b,&quot;utf-8&quot;):a.asBinary():b},q=function(a){var b=o(this);return null===b||&quot;undefined&quot;==typeof b?&quot;&quot;:(this.options.base64&amp;&amp;(b=h.decode(b)),b=a&amp;&amp;this.options.binary?A.utf8decode(b):d.transformTo(&quot;string&quot;,b),a||this.options.binary||(b=d.transformTo(&quot;string&quot;,A.utf8encode(b))),b)},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};r.prototype={asText:function(){return q.call(this,!0)},asBinary:function(){return q.call(this,!1)},asNodeBuffer:function(){var a=p(this);return d.transformTo(&quot;nodebuffer&quot;,a)},asUint8Array:function(){var a=p(this);return d.transformTo(&quot;uint8array&quot;,a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var s=function(a,b){var c,d=&quot;&quot;;for(c=0;b&gt;c;c++)d+=String.fromCharCode(255&amp;a),a&gt;&gt;&gt;=8;return d},t=function(){var a,b,c={};for(a=0;a&lt;arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&amp;&amp;&quot;undefined&quot;==typeof c[b]&amp;&amp;(c[b]=arguments[a][b]);return c},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&amp;&amp;void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date,null!==a.compression&amp;&amp;(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),c.createFolders&amp;&amp;(e=w(a))&amp;&amp;x.call(this,e,!0),c.dir||null===b||&quot;undefined&quot;==typeof b)c.base64=!1,c.binary=!1,b=null;else if(&quot;string&quot;===f)c.binary&amp;&amp;!c.base64&amp;&amp;c.optimizedBinaryString!==!0&amp;&amp;(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error(&quot;The data of &#39;&quot;+a+&quot;&#39; is in an unsupported format !&quot;);&quot;arraybuffer&quot;===f&amp;&amp;(b=d.transformTo(&quot;uint8array&quot;,b))}var g=new r(a,b,c);return this.files[a]=g,g},w=function(a){&quot;/&quot;==a.slice(-1)&amp;&amp;(a=a.substring(0,a.length-1));var b=a.lastIndexOf(&quot;/&quot;);return b&gt;0?a.substring(0,b):&quot;&quot;},x=function(a,b){return&quot;/&quot;!=a.slice(-1)&amp;&amp;(a+=&quot;/&quot;),b=&quot;undefined&quot;!=typeof b?b:!1,this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},y=function(a,b){var c,f=new j;return a._data instanceof j?(f.uncompressedSize=a._data.uncompressedSize,f.crc32=a._data.crc32,0===f.uncompressedSize||a.dir?(b=i.STORE,f.compressedContent=&quot;&quot;,f.crc32=0):a._data.compressionMethod===b.magic?f.compressedContent=a._data.getCompressedContent():(c=a._data.getContent(),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c)))):(c=p(a),(!c||0===c.length||a.dir)&amp;&amp;(b=i.STORE,c=&quot;&quot;),f.uncompressedSize=c.length,f.crc32=e(c),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c))),f.compressedSize=f.compressedContent.length,f.compressionMethod=b.magic,f},z=function(a,b,c,g){var h,i,j,k,m=(c.compressedContent,d.transformTo(&quot;string&quot;,l.utf8encode(b.name))),n=b.comment||&quot;&quot;,o=d.transformTo(&quot;string&quot;,l.utf8encode(n)),p=m.length!==b.name.length,q=o.length!==n.length,r=b.options,t=&quot;&quot;,u=&quot;&quot;,v=&quot;&quot;;j=b._initialMetadata.dir!==b.dir?b.dir:r.dir,k=b._initialMetadata.date!==b.date?b.date:r.date,h=k.getHours(),h&lt;&lt;=6,h|=k.getMinutes(),h&lt;&lt;=5,h|=k.getSeconds()/2,i=k.getFullYear()-1980,i&lt;&lt;=4,i|=k.getMonth()+1,i&lt;&lt;=5,i|=k.getDate(),p&amp;&amp;(u=s(1,1)+s(e(m),4)+m,t+=&quot;up&quot;+s(u.length,2)+u),q&amp;&amp;(v=s(1,1)+s(this.crc32(o),4)+o,t+=&quot;uc&quot;+s(v.length,2)+v);var w=&quot;&quot;;w+=&quot;\n\x00&quot;,w+=p||q?&quot;\x00\b&quot;:&quot;\x00\x00&quot;,w+=c.compressionMethod,w+=s(h,2),w+=s(i,2),w+=s(c.crc32,4),w+=s(c.compressedSize,4),w+=s(c.uncompressedSize,4),w+=s(m.length,2),w+=s(t.length,2);var x=f.LOCAL_FILE_HEADER+w+m+t,y=f.CENTRAL_FILE_HEADER+&quot;\x00&quot;+w+s(o.length,2)+&quot;\x00\x00\x00\x00&quot;+(j===!0?&quot;\x00\x00\x00&quot;:&quot;\x00\x00\x00\x00&quot;)+s(g,4)+m+t+o;return{fileRecord:x,dirRecord:y,compressedObject:c}},A={load:function(){throw new Error(&quot;Load method is not defined. Is the file jszip-load.js included ?&quot;)},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&amp;&amp;(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&amp;&amp;a(c,e)&amp;&amp;f.push(e));return f},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&amp;&amp;e.test(a)})}return this.filter(function(b,c){return!c.dir&amp;&amp;b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&amp;&amp;a.test(b)});var b=this.root+a,c=x.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||(&quot;/&quot;!=a.slice(-1)&amp;&amp;(a+=&quot;/&quot;),b=this.files[a]),b&amp;&amp;!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d&lt;c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=t(a||{},{base64:!0,compression:&quot;STORE&quot;,type:&quot;base64&quot;,comment:null}),d.checkSupport(a.type);var b,c,e=[],g=0,j=0,k=d.transformTo(&quot;string&quot;,this.utf8encode(a.comment||this.comment||&quot;&quot;));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+&quot; is not a valid compression method !&quot;);var r=y.call(this,o,q),u=z.call(this,l,o,r,g);g+=u.fileRecord.length+r.compressedSize,j+=u.dirRecord.length,e.push(u)}var v=&quot;&quot;;v=f.CENTRAL_DIRECTORY_END+&quot;\x00\x00\x00\x00&quot;+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var w=a.type.toLowerCase();for(b=&quot;uint8array&quot;===w||&quot;arraybuffer&quot;===w||&quot;blob&quot;===w||&quot;nodebuffer&quot;===w?new n(g+j+v.length):new m(g+j+v.length),c=0;c&lt;e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c&lt;e.length;c++)b.append(e[c].dirRecord);b.append(v);var x=b.finalize();switch(a.type.toLowerCase()){case&quot;uint8array&quot;:case&quot;arraybuffer&quot;:case&quot;nodebuffer&quot;:return d.transformTo(a.type.toLowerCase(),x);case&quot;blob&quot;:return d.arrayBuffer2Blob(d.transformTo(&quot;arraybuffer&quot;,x));case&quot;base64&quot;:return a.base64?h.encode(x):x;default:return x}},crc32:function(a,b){return e(a,b)},utf8encode:function(a){return d.transformTo(&quot;string&quot;,l.utf8encode(a))},utf8decode:function(a){return l.utf8decode(a)}};b.exports=A},{&quot;./base64&quot;:1,&quot;./compressedObject&quot;:2,&quot;./compressions&quot;:3,&quot;./crc32&quot;:4,&quot;./defaults&quot;:6,&quot;./nodeBuffer&quot;:11,&quot;./signature&quot;:14,&quot;./stringWriter&quot;:16,&quot;./support&quot;:17,&quot;./uint8ArrayWriter&quot;:19,&quot;./utf8&quot;:20,&quot;./utils&quot;:21}],14:[function(a,b,c){&quot;use strict&quot;;c.LOCAL_FILE_HEADER=&quot;PK&quot;,c.CENTRAL_FILE_HEADER=&quot;PK&quot;,c.CENTRAL_DIRECTORY_END=&quot;PK&quot;,c.ZIP64_CENTRAL_DIRECTORY_LOCATOR=&quot;PK&quot;,c.ZIP64_CENTRAL_DIRECTORY_END=&quot;PK&quot;,c.DATA_DESCRIPTOR=&quot;PK\b&quot;},{}],15:[function(a,b){&quot;use strict&quot;;function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0}var d=a(&quot;./dataReader&quot;),e=a(&quot;./utils&quot;);c.prototype=new d,c.prototype.byteAt=function(a){return this.data.charCodeAt(a)},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{&quot;./dataReader&quot;:5,&quot;./utils&quot;:21}],16:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./utils&quot;),d=function(){this.data=[]};d.prototype={append:function(a){a=c.transformTo(&quot;string&quot;,a),this.data.push(a)},finalize:function(){return this.data.join(&quot;&quot;)}},b.exports=d},{&quot;./utils&quot;:21}],17:[function(a,b,c){(function(a){&quot;use strict&quot;;if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer=&quot;undefined&quot;!=typeof ArrayBuffer&amp;&amp;&quot;undefined&quot;!=typeof Uint8Array,c.nodebuffer=&quot;undefined&quot;!=typeof a,c.uint8array=&quot;undefined&quot;!=typeof Uint8Array,&quot;undefined&quot;==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:&quot;application/zip&quot;}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob(&quot;application/zip&quot;).size}catch(d){c.blob=!1}}}}).call(this,&quot;undefined&quot;!=typeof Buffer?Buffer:void 0)},{}],18:[function(a,b){&quot;use strict&quot;;function c(a){a&amp;&amp;(this.data=a,this.length=this.data.length,this.index=0)}var d=a(&quot;./dataReader&quot;);c.prototype=new d,c.prototype.byteAt=function(a){return this.data[a]},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f&gt;=0;--f)if(this.data[f]===b&amp;&amp;this.data[f+1]===c&amp;&amp;this.data[f+2]===d&amp;&amp;this.data[f+3]===e)return f;return-1},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b},b.exports=c},{&quot;./dataReader&quot;:5}],19:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./utils&quot;),d=function(a){this.data=new Uint8Array(a),this.index=0};d.prototype={append:function(a){0!==a.length&amp;&amp;(a=c.transformTo(&quot;uint8array&quot;,a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=d},{&quot;./utils&quot;:21}],20:[function(a,b,c){&quot;use strict&quot;;for(var d=a(&quot;./utils&quot;),e=a(&quot;./support&quot;),f=a(&quot;./nodeBuffer&quot;),g=new Array(256),h=0;256&gt;h;h++)g[h]=h&gt;=252?6:h&gt;=248?5:h&gt;=240?4:h&gt;=224?3:h&gt;=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h&gt;f;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;h&gt;f+1&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),i+=128&gt;c?1:2048&gt;c?2:65536&gt;c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i&gt;g;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;h&gt;f+1&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),128&gt;c?b[g++]=c:2048&gt;c?(b[g++]=192|c&gt;&gt;&gt;6,b[g++]=128|63&amp;c):65536&gt;c?(b[g++]=224|c&gt;&gt;&gt;12,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c):(b[g++]=240|c&gt;&gt;&gt;18,b[g++]=128|c&gt;&gt;&gt;12&amp;63,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c);return b},j=function(a,b){var c;for(b=b||a.length,b&gt;a.length&amp;&amp;(b=a.length),c=b-1;c&gt;=0&amp;&amp;128===(192&amp;a[c]);)c--;return 0&gt;c?b:0===c?b:c+g[a[c]]&gt;b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h&gt;b;)if(e=a[b++],128&gt;e)i[c++]=e;else if(f=g[e],f&gt;4)i[c++]=65533,b+=f-1;else{for(e&amp;=2===f?31:3===f?15:7;f&gt;1&amp;&amp;h&gt;b;)e=e&lt;&lt;6|63&amp;a[b++],f--;f&gt;1?i[c++]=65533:65536&gt;e?i[c++]=e:(e-=65536,i[c++]=55296|e&gt;&gt;10&amp;1023,i[c++]=56320|1023&amp;e)}return i.length!==c&amp;&amp;(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,&quot;utf-8&quot;):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo(&quot;nodebuffer&quot;,a).toString(&quot;utf-8&quot;);a=d.transformTo(e.uint8array?&quot;uint8array&quot;:&quot;array&quot;,a);for(var b=[],c=0,f=a.length,g=65536;f&gt;c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h}return b.join(&quot;&quot;)}},{&quot;./nodeBuffer&quot;:11,&quot;./support&quot;:17,&quot;./utils&quot;:21}],21:[function(a,b,c){&quot;use strict&quot;;function d(a){return a}function e(a,b){for(var c=0;c&lt;a.length;++c)b[c]=255&amp;a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case&quot;uint8array&quot;:String.fromCharCode.apply(null,new Uint8Array(0));break;case&quot;nodebuffer&quot;:String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k=&quot;&quot;,l=0;l&lt;a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;e&gt;g&amp;&amp;b&gt;1;)try{d.push(&quot;array&quot;===f||&quot;nodebuffer&quot;===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join(&quot;&quot;)}function g(a,b){for(var c=0;c&lt;a.length;c++)b[c]=a[c];return b}var h=a(&quot;./support&quot;),i=a(&quot;./compressions&quot;),j=a(&quot;./nodeBuffer&quot;);c.string2binary=function(a){for(var b=&quot;&quot;,c=0;c&lt;a.length;c++)b+=String.fromCharCode(255&amp;a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a){c.checkSupport(&quot;blob&quot;);try{return new Blob([a],{type:&quot;application/zip&quot;})}catch(b){try{var d=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,e=new d;return e.append(a),e.getBlob(&quot;application/zip&quot;)}catch(b){throw new Error(&quot;Bug : can&#39;t construct the Blob.&quot;)}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=&quot;&quot;),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return&quot;string&quot;==typeof a?&quot;string&quot;:&quot;[object Array]&quot;===Object.prototype.toString.call(a)?&quot;array&quot;:h.nodebuffer&amp;&amp;j.test(a)?&quot;nodebuffer&quot;:h.uint8array&amp;&amp;a instanceof Uint8Array?&quot;uint8array&quot;:h.arraybuffer&amp;&amp;a instanceof ArrayBuffer?&quot;arraybuffer&quot;:void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+&quot; is not supported by this browser&quot;)},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d=&quot;&quot;;for(c=0;c&lt;(a||&quot;&quot;).length;c++)b=a.charCodeAt(c),d+=&quot;\\x&quot;+(16&gt;b?&quot;0&quot;:&quot;&quot;)+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&amp;&amp;i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return&quot;[object RegExp]&quot;===Object.prototype.toString.call(a)}},{&quot;./compressions&quot;:3,&quot;./nodeBuffer&quot;:11,&quot;./support&quot;:17}],22:[function(a,b){&quot;use strict&quot;;function c(a,b){this.files=[],this.loadOptions=b,a&amp;&amp;this.load(a)}var d=a(&quot;./stringReader&quot;),e=a(&quot;./nodeBufferReader&quot;),f=a(&quot;./uint8ArrayReader&quot;),g=a(&quot;./utils&quot;),h=a(&quot;./signature&quot;),i=a(&quot;./zipEntry&quot;),j=a(&quot;./support&quot;),k=a(&quot;./object&quot;);c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error(&quot;Corrupted zip or bug : unexpected signature (&quot;+g.pretty(b)+&quot;, expected &quot;+g.pretty(a)+&quot;)&quot;)},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d&gt;e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount&gt;1)throw new Error(&quot;Multi-volumes zip are not supported&quot;)},readLocalFiles:function(){var a,b;for(a=0;a&lt;this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a)throw new Error(&quot;Corrupted zip : can&#39;t find end of central directory&quot;);if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error(&quot;Corrupted zip : can&#39;t find the ZIP64 end of central directory locator&quot;);this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader=&quot;string&quot;!==b||j.uint8array?&quot;nodebuffer&quot;===b?new e(a):new f(g.transformTo(&quot;uint8array&quot;,a)):new d(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=c},{&quot;./nodeBufferReader&quot;:12,&quot;./object&quot;:13,&quot;./signature&quot;:14,&quot;./stringReader&quot;:15,&quot;./support&quot;:17,&quot;./uint8ArrayReader&quot;:18,&quot;./utils&quot;:21,&quot;./zipEntry&quot;:23}],23:[function(a,b){&quot;use strict&quot;;function c(a,b){this.options=a,this.loadOptions=b}var d=a(&quot;./stringReader&quot;),e=a(&quot;./utils&quot;),f=a(&quot;./compressedObject&quot;),g=a(&quot;./object&quot;);c.prototype={isEncrypted:function(){return 1===(1&amp;this.bitFlag)},useUTF8:function(){return 2048===(2048&amp;this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error(&quot;Bug : uncompressed data size mismatch&quot;);return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error(&quot;Bug or corrupted zip : didn&#39;t get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)&quot;);if(b=e.findCompression(this.compressionMethod),null===b)throw new Error(&quot;Corrupted zip : compression &quot;+e.pretty(this.compressionMethod)+&quot; unknown (inner file : &quot;+this.fileName+&quot;)&quot;);if(this.decompressed=new f,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&amp;&amp;(this.decompressed=e.transformTo(&quot;string&quot;,this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error(&quot;Corrupted zip : CRC32 mismatch&quot;)},readCentralPart:function(a){if(this.versionMadeBy=a.readString(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error(&quot;Encrypted zip are not supported&quot;);this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength),this.dir=16&amp;this.externalFileAttributes?!0:!1},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&amp;&amp;(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&amp;&amp;(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&amp;&amp;(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&amp;&amp;(this.diskNumberStart=a.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index&lt;e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&amp;&amp;(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&amp;&amp;(this.fileComment=b)}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null}},b.exports=c},{&quot;./compressedObject&quot;:2,&quot;./object&quot;:13,&quot;./stringReader&quot;:15,&quot;./utils&quot;:21}],24:[function(a,b){&quot;use strict&quot;;var c=a(&quot;./lib/utils/common&quot;).assign,d=a(&quot;./lib/deflate&quot;),e=a(&quot;./lib/inflate&quot;),f=a(&quot;./lib/zlib/constants&quot;),g={};c(g,d,e,f),b.exports=g},{&quot;./lib/deflate&quot;:25,&quot;./lib/inflate&quot;:26,&quot;./lib/utils/common&quot;:27,&quot;./lib/zlib/constants&quot;:30}],25:[function(a,b,c){&quot;use strict&quot;;function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}function f(a,b){return b=b||{},b.gzip=!0,d(a,b)}var g=a(&quot;./zlib/deflate.js&quot;),h=a(&quot;./utils/common&quot;),i=a(&quot;./utils/strings&quot;),j=a(&quot;./zlib/messages&quot;),k=a(&quot;./zlib/zstream&quot;),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:&quot;&quot;},a||{});var b=this.options;b.raw&amp;&amp;b.windowBits&gt;0?b.windowBits=-b.windowBits:b.gzip&amp;&amp;b.windowBits&gt;0&amp;&amp;b.windowBits&lt;16&amp;&amp;(b.windowBits+=16),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&amp;&amp;g.deflateSetHeader(this.strm,b.header)</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input=&quot;string&quot;==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&amp;&amp;(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&amp;&amp;c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&amp;&amp;d===m)&amp;&amp;this.onData(&quot;string&quot;===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out))}while((e.avail_in&gt;0||0===e.avail_out)&amp;&amp;c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0},s.prototype.onData=function(a){this.chunks.push(a)},s.prototype.onEnd=function(a){a===n&amp;&amp;(this.result=&quot;string&quot;===this.options.to?this.chunks.join(&quot;&quot;):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f},{&quot;./utils/common&quot;:27,&quot;./utils/strings&quot;:28,&quot;./zlib/deflate.js&quot;:32,&quot;./zlib/messages&quot;:37,&quot;./zlib/zstream&quot;:39}],26:[function(a,b,c){&quot;use strict&quot;;function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}var f=a(&quot;./zlib/inflate.js&quot;),g=a(&quot;./utils/common&quot;),h=a(&quot;./utils/strings&quot;),i=a(&quot;./zlib/constants&quot;),j=a(&quot;./zlib/messages&quot;),k=a(&quot;./zlib/zstream&quot;),l=a(&quot;./zlib/gzheader&quot;),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:&quot;&quot;},a||{});var b=this.options;b.raw&amp;&amp;b.windowBits&gt;=0&amp;&amp;b.windowBits&lt;16&amp;&amp;(b.windowBits=-b.windowBits,0===b.windowBits&amp;&amp;(b.windowBits=-15)),!(b.windowBits&gt;=0&amp;&amp;b.windowBits&lt;16)||a&amp;&amp;a.windowBits||(b.windowBits+=32),b.windowBits&gt;15&amp;&amp;b.windowBits&lt;48&amp;&amp;0===(15&amp;b.windowBits)&amp;&amp;(b.windowBits|=15),this.err=0,this.msg=&quot;&quot;,this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l,f.inflateGetHeader(this.strm,this.header)};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input=&quot;string&quot;==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&amp;&amp;(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&amp;&amp;c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&amp;&amp;(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&amp;&amp;d===i.Z_FINISH)&amp;&amp;(&quot;string&quot;===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&amp;&amp;g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)))}while(l.avail_in&gt;0&amp;&amp;c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&amp;&amp;(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0},m.prototype.onData=function(a){this.chunks.push(a)},m.prototype.onEnd=function(a){a===i.Z_OK&amp;&amp;(this.result=&quot;string&quot;===this.options.to?this.chunks.join(&quot;&quot;):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d},{&quot;./utils/common&quot;:27,&quot;./utils/strings&quot;:28,&quot;./zlib/constants&quot;:30,&quot;./zlib/gzheader&quot;:33,&quot;./zlib/inflate.js&quot;:35,&quot;./zlib/messages&quot;:37,&quot;./zlib/zstream&quot;:39}],27:[function(a,b,c){&quot;use strict&quot;;var d=&quot;undefined&quot;!=typeof Uint8Array&amp;&amp;&quot;undefined&quot;!=typeof Uint16Array&amp;&amp;&quot;undefined&quot;!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(&quot;object&quot;!=typeof c)throw new TypeError(c+&quot;must be non-object&quot;);for(var d in c)c.hasOwnProperty(d)&amp;&amp;(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&amp;&amp;a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d&gt;f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c&gt;b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c&gt;b;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;d&gt;f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],28:[function(a,b,c){&quot;use strict&quot;;function d(a,b){if(65537&gt;b&amp;&amp;(a.subarray&amp;&amp;g||!a.subarray&amp;&amp;f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c=&quot;&quot;,d=0;b&gt;d;d++)c+=String.fromCharCode(a[d]);return c}var e=a(&quot;./common&quot;),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;256&gt;j;j++)i[j]=j&gt;=252?6:j&gt;=248?5:j&gt;=240?4:j&gt;=224?3:j&gt;=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h&gt;f;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;h&gt;f+1&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),i+=128&gt;c?1:2048&gt;c?2:65536&gt;c?3:4;for(b=new e.Buf8(i),g=0,f=0;i&gt;g;f++)c=a.charCodeAt(f),55296===(64512&amp;c)&amp;&amp;h&gt;f+1&amp;&amp;(d=a.charCodeAt(f+1),56320===(64512&amp;d)&amp;&amp;(c=65536+(c-55296&lt;&lt;10)+(d-56320),f++)),128&gt;c?b[g++]=c:2048&gt;c?(b[g++]=192|c&gt;&gt;&gt;6,b[g++]=128|63&amp;c):65536&gt;c?(b[g++]=224|c&gt;&gt;&gt;12,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c):(b[g++]=240|c&gt;&gt;&gt;18,b[g++]=128|c&gt;&gt;&gt;12&amp;63,b[g++]=128|c&gt;&gt;&gt;6&amp;63,b[g++]=128|63&amp;c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d&gt;c;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h&gt;c;)if(f=a[c++],128&gt;f)j[e++]=f;else if(g=i[f],g&gt;4)j[e++]=65533,c+=g-1;else{for(f&amp;=2===g?31:3===g?15:7;g&gt;1&amp;&amp;h&gt;c;)f=f&lt;&lt;6|63&amp;a[c++],g--;g&gt;1?j[e++]=65533:65536&gt;f?j[e++]=f:(f-=65536,j[e++]=55296|f&gt;&gt;10&amp;1023,j[e++]=56320|1023&amp;f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b&gt;a.length&amp;&amp;(b=a.length),c=b-1;c&gt;=0&amp;&amp;128===(192&amp;a[c]);)c--;return 0&gt;c?b:0===c?b:c+i[a[c]]&gt;b?c:b}},{&quot;./common&quot;:27}],29:[function(a,b){&quot;use strict&quot;;function c(a,b,c,d){for(var e=65535&amp;a|0,f=a&gt;&gt;&gt;16&amp;65535|0,g=0;0!==c;){g=c&gt;2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f&lt;&lt;16|0}b.exports=c},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(a,b){&quot;use strict&quot;;function c(){for(var a,b=[],c=0;256&gt;c;c++){a=c;for(var d=0;8&gt;d;d++)a=1&amp;a?3988292384^a&gt;&gt;&gt;1:a&gt;&gt;&gt;1;b[c]=a}return b}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g&gt;h;h++)a=a&gt;&gt;&gt;8^f[255&amp;(a^b[h])];return-1^a}var e=c();b.exports=d},{}],32:[function(a,b,c){&quot;use strict&quot;;function d(a,b){return a.msg=G[b],b}function e(a){return(a&lt;&lt;1)-(a&gt;4?9:0)}function f(a){for(var b=a.length;--b&gt;=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c&gt;a.avail_out&amp;&amp;(c=a.avail_out),0!==c&amp;&amp;(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&amp;&amp;(b.pending_out=0))}function h(a,b){D._tr_flush_block(a,a.block_start&gt;=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b&gt;&gt;&gt;8&amp;255,a.pending_buf[a.pending++]=255&amp;b}function k(a,b,c,d){var e=a.avail_in;return e&gt;d&amp;&amp;(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&amp;&amp;(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart&gt;a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length&gt;=a.good_match&amp;&amp;(e&gt;&gt;=2),h&gt;a.lookahead&amp;&amp;(h=a.lookahead);do if(c=b,j[c+g]===o&amp;&amp;j[c+g-1]===n&amp;&amp;j[c]===j[f]&amp;&amp;j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;j[++f]===j[++c]&amp;&amp;m&gt;f);if(d=ib-(m-f),f=m-ib,d&gt;g){if(a.match_start=b,g=d,d&gt;=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&amp;k])&gt;i&amp;&amp;0!==--e);return g&lt;=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart&gt;=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d&gt;=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d&gt;=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert&gt;=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[f+1])&amp;a.hash_mask;a.insert&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[f+hb-1])&amp;a.hash_mask,a.prev[f&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert&lt;hb)););}while(a.lookahead&lt;jb&amp;&amp;0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c&gt;a.pending_buf_size-5&amp;&amp;(c=a.pending_buf_size-5);;){if(a.lookahead&lt;=1){if(m(a),0===a.lookahead&amp;&amp;b===H)return sb;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart&gt;=d)&amp;&amp;(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start&gt;=a.w_size-jb&amp;&amp;(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart&gt;a.block_start&amp;&amp;(h(a,!1),0===a.strm.avail_out)?sb:sb}function o(a,b){for(var c,d;;){if(a.lookahead&lt;jb){if(m(a),a.lookahead&lt;jb&amp;&amp;b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead&gt;=hb&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+hb-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&amp;&amp;a.strstart-c&lt;=a.w_size-jb&amp;&amp;(a.match_length=l(a,c)),a.match_length&gt;=hb)if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length&lt;=a.max_lazy_match&amp;&amp;a.lookahead&gt;=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+hb-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+1])&amp;a.hash_mask;else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&amp;&amp;(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=a.strstart&lt;hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?sb:tb}function p(a,b){for(var c,d,e;;){if(a.lookahead&lt;jb){if(m(a),a.lookahead&lt;jb&amp;&amp;b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead&gt;=hb&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+hb-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&amp;&amp;a.prev_length&lt;a.max_lazy_match&amp;&amp;a.strstart-c&lt;=a.w_size-jb&amp;&amp;(a.match_length=l(a,c),a.match_length&lt;=5&amp;&amp;(a.strategy===S||a.match_length===hb&amp;&amp;a.strstart-a.match_start&gt;4096)&amp;&amp;(a.match_length=hb-1)),a.prev_length&gt;=hb&amp;&amp;a.match_length&lt;=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart&lt;=e&amp;&amp;(a.ins_h=(a.ins_h&lt;&lt;a.hash_shift^a.window[a.strstart+hb-1])&amp;a.hash_mask,c=a.prev[a.strstart&amp;a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&amp;&amp;(h(a,!1),0===a.strm.avail_out))return sb}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&amp;&amp;h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&amp;&amp;(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart&lt;hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?sb:tb}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead&lt;=ib){if(m(a),a.lookahead&lt;=ib&amp;&amp;b===H)return sb;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead&gt;=hb&amp;&amp;a.strstart&gt;0&amp;&amp;(e=a.strstart-1,d=g[e],d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;d===g[++e]&amp;&amp;f&gt;e);a.match_length=ib-(f-e),a.match_length&gt;a.lookahead&amp;&amp;(a.match_length=a.lookahead)}if(a.match_length&gt;=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&amp;&amp;(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?sb:tb}function r(a,b){for(var c;;){if(0===a.lookahead&amp;&amp;(m(a),0===a.lookahead)){if(b===H)return sb;break}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&amp;&amp;(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&amp;&amp;(h(a,!1),0===a.strm.avail_out)?sb:tb}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function u(a){var b;return a&amp;&amp;a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap&lt;0&amp;&amp;(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O)}function v(a){var b=u(a);return b===M&amp;&amp;s(a.state),b}function w(a,b){return a&amp;&amp;a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&amp;&amp;(b=6),0&gt;e?(h=0,e=-e):e&gt;15&amp;&amp;(h=2,e-=16),1&gt;f||f&gt;Z||c!==Y||8&gt;e||e&gt;15||0&gt;b||b&gt;9||0&gt;g||g&gt;V)return d(a,O);8===e&amp;&amp;(e=9);var i=new t;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1&lt;&lt;i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1&lt;&lt;i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1&lt;&lt;f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize&gt;&gt;1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a)}function y(a,b){return x(a,b,Y,$,_,W)}function z(a,b){var c,h,k,l;if(!a||!a.state||b&gt;L||0&gt;b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&amp;&amp;0!==a.avail_in||h.status===rb&amp;&amp;b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&amp;h.gzhead.time),i(h,h.gzhead.time&gt;&gt;8&amp;255),i(h,h.gzhead.time&gt;&gt;16&amp;255),i(h,h.gzhead.time&gt;&gt;24&amp;255),i(h,9===h.level?2:h.strategy&gt;=T||h.level&lt;2?4:0),i(h,255&amp;h.gzhead.os),h.gzhead.extra&amp;&amp;h.gzhead.extra.length&amp;&amp;(i(h,255&amp;h.gzhead.extra.length),i(h,h.gzhead.extra.length&gt;&gt;8&amp;255)),h.gzhead.hcrc&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy&gt;=T||h.level&lt;2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8&lt;&lt;4)&lt;&lt;8,n=-1;n=h.strategy&gt;=T||h.level&lt;2?0:h.level&lt;6?1:6===h.level?2:3,m|=n&lt;&lt;6,0!==h.strstart&amp;&amp;(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&amp;&amp;(j(h,a.adler&gt;&gt;&gt;16),j(h,65535&amp;a.adler)),a.adler=1}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex&lt;(65535&amp;h.gzhead.extra.length)&amp;&amp;(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&amp;h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&amp;&amp;(h.gzindex=0,h.status=nb)}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&amp;&amp;(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex&lt;h.gzhead.name.length?255&amp;h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&amp;&amp;(h.gzindex=0,h.status=ob)}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&amp;&amp;(h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex&lt;h.gzhead.comment.length?255&amp;h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&amp;&amp;h.pending&gt;k&amp;&amp;(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&amp;&amp;(h.status=pb)}else h.status=pb;if(h.status===pb&amp;&amp;(h.gzhead.hcrc?(h.pending+2&gt;h.pending_buf_size&amp;&amp;g(a),h.pending+2&lt;=h.pending_buf_size&amp;&amp;(i(h,255&amp;a.adler),i(h,a.adler&gt;&gt;8&amp;255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M}else if(0===a.avail_in&amp;&amp;e(b)&lt;=e(c)&amp;&amp;b!==K)return d(a,Q);if(h.status===rb&amp;&amp;0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&amp;&amp;h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&amp;&amp;(h.status=rb),o===sb||o===ub)return 0===a.avail_out&amp;&amp;(h.last_flush=-1),M;if(o===tb&amp;&amp;(b===I?D._tr_align(h):b!==L&amp;&amp;(D._tr_stored_block(h,0,0,!1),b===J&amp;&amp;(f(h.head),0===h.lookahead&amp;&amp;(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M}return b!==K?M:h.wrap&lt;=0?N:(2===h.wrap?(i(h,255&amp;a.adler),i(h,a.adler&gt;&gt;8&amp;255),i(h,a.adler&gt;&gt;16&amp;255),i(h,a.adler&gt;&gt;24&amp;255),i(h,255&amp;a.total_in),i(h,a.total_in&gt;&gt;8&amp;255),i(h,a.total_in&gt;&gt;16&amp;255),i(h,a.total_in&gt;&gt;24&amp;255)):(j(h,a.adler&gt;&gt;&gt;16),j(h,65535&amp;a.adler)),g(a),h.wrap&gt;0&amp;&amp;(h.wrap=-h.wrap),0!==h.pending?M:N)}function A(a){var b;return a&amp;&amp;a.state?(b=a.state.status,b!==lb&amp;&amp;b!==mb&amp;&amp;b!==nb&amp;&amp;b!==ob&amp;&amp;b!==pb&amp;&amp;b!==qb&amp;&amp;b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O}var B,C=a(&quot;../utils/common&quot;),D=a(&quot;./trees&quot;),E=a(&quot;./adler32&quot;),F=a(&quot;./crc32&quot;),G=a(&quot;./messages&quot;),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo=&quot;pako deflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:27,&quot;./adler32&quot;:29,&quot;./crc32&quot;:31,&quot;./messages&quot;:37,&quot;./trees&quot;:38}],33:[function(a,b){&quot;use strict&quot;;function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=&quot;&quot;,this.comment=&quot;&quot;,this.hcrc=0,this.done=!1}b.exports=c},{}],34:[function(a,b){&quot;use strict&quot;;var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1&lt;&lt;e.lenbits)-1,u=(1&lt;&lt;e.distbits)-1;a:do{15&gt;q&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,p+=B[f++]&lt;&lt;q,q+=8),v=r[p&amp;t];b:for(;;){if(w=v&gt;&gt;&gt;24,p&gt;&gt;&gt;=w,q-=w,w=v&gt;&gt;&gt;16&amp;255,0===w)C[h++]=65535&amp;v;else{if(!(16&amp;w)){if(0===(64&amp;w)){v=r[(65535&amp;v)+(p&amp;(1&lt;&lt;w)-1)];continue b}if(32&amp;w){e.mode=d;break a}a.msg=&quot;invalid literal/length code&quot;,e.mode=c;break a}x=65535&amp;v,w&amp;=15,w&amp;&amp;(w&gt;q&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8),x+=p&amp;(1&lt;&lt;w)-1,p&gt;&gt;&gt;=w,q-=w),15&gt;q&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,p+=B[f++]&lt;&lt;q,q+=8),v=s[p&amp;u];c:for(;;){if(w=v&gt;&gt;&gt;24,p&gt;&gt;&gt;=w,q-=w,w=v&gt;&gt;&gt;16&amp;255,!(16&amp;w)){if(0===(64&amp;w)){v=s[(65535&amp;v)+(p&amp;(1&lt;&lt;w)-1)];continue c}a.msg=&quot;invalid distance code&quot;,e.mode=c;break a}if(y=65535&amp;v,w&amp;=15,w&gt;q&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8,w&gt;q&amp;&amp;(p+=B[f++]&lt;&lt;q,q+=8)),y+=p&amp;(1&lt;&lt;w)-1,y&gt;k){a.msg=&quot;invalid distance too far back&quot;,e.mode=c;break a}if(p&gt;&gt;&gt;=w,q-=w,w=h-i,y&gt;w){if(w=y-w,w&gt;m&amp;&amp;e.sane){a.msg=&quot;invalid distance too far back&quot;,e.mode=c;break a}if(z=0,A=o,0===n){if(z+=l-w,x&gt;w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(w&gt;n){if(z+=l+n-w,w-=n,x&gt;w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x&gt;n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,x&gt;w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x&gt;2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&amp;&amp;(C[h++]=A[z++],x&gt;1&amp;&amp;(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x&gt;2);x&amp;&amp;(C[h++]=C[z++],x&gt;1&amp;&amp;(C[h++]=C[z++]))}break}}break}}while(g&gt;f&amp;&amp;j&gt;h);x=q&gt;&gt;3,f-=x,q-=x&lt;&lt;3,p&amp;=(1&lt;&lt;q)-1,a.next_in=f,a.next_out=h,a.avail_in=g&gt;f?5+(g-f):5-(f-g),a.avail_out=j&gt;h?257+(j-h):257-(h-j),e.hold=p,e.bits=q}},{}],35:[function(a,b,c){&quot;use strict&quot;;function d(a){return(a&gt;&gt;&gt;24&amp;255)+(a&gt;&gt;&gt;8&amp;65280)+((65280&amp;a)&lt;&lt;8)+((255&amp;a)&lt;&lt;24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&amp;&amp;a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg=&quot;&quot;,b.wrap&amp;&amp;(a.adler=1&amp;b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F}function g(a){var b;return a&amp;&amp;a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F}function h(a,b){var c,d;return a&amp;&amp;a.state?(d=a.state,0&gt;b?(c=0,b=-b):(c=(b&gt;&gt;4)+1,48&gt;b&amp;&amp;(b&amp;=15)),b&amp;&amp;(8&gt;b||b&gt;15)?F:(null!==d.window&amp;&amp;d.wbits!==b&amp;&amp;(d.window=null),d.wrap=c,d.wbits=b,g(a))):F}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==C&amp;&amp;(a.state=null),c):F}function j(a){return i(a,rb)}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144&gt;b;)a.lens[b++]=8;for(;256&gt;b;)a.lens[b++]=9;for(;280&gt;b;)a.lens[b++]=7;for(;288&gt;b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32&gt;b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&amp;&amp;(f.wsize=1&lt;&lt;f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d&gt;=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e&gt;d&amp;&amp;(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&amp;&amp;(f.wnext=0),f.whave&lt;f.wsize&amp;&amp;(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&amp;&amp;0!==a.avail_in)return F;c=a.state,c.mode===V&amp;&amp;(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break}for(;16&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(2&amp;c.wrap&amp;&amp;35615===m){c.check=0,Bb[0]=255&amp;m,Bb[1]=m&gt;&gt;&gt;8&amp;255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break}if(c.flags=0,c.head&amp;&amp;(c.head.done=!1),!(1&amp;c.wrap)||(((255&amp;m)&lt;&lt;8)+(m&gt;&gt;8))%31){a.msg=&quot;incorrect header check&quot;,c.mode=lb;break}if((15&amp;m)!==J){a.msg=&quot;unknown compression method&quot;,c.mode=lb;break}if(m&gt;&gt;&gt;=4,n-=4,wb=(15&amp;m)+8,0===c.wbits)c.wbits=wb;else if(wb&gt;c.wbits){a.msg=&quot;invalid window size&quot;,c.mode=lb;break}c.dmax=1&lt;&lt;wb,a.adler=c.check=1,c.mode=512&amp;m?T:V,m=0,n=0;break;case L:for(;16&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(c.flags=m,(255&amp;c.flags)!==J){a.msg=&quot;unknown compression method&quot;,c.mode=lb;break}if(57344&amp;c.flags){a.msg=&quot;unknown header flags set&quot;,c.mode=lb;break}c.head&amp;&amp;(c.head.text=m&gt;&gt;8&amp;1),512&amp;c.flags&amp;&amp;(Bb[0]=255&amp;m,Bb[1]=m&gt;&gt;&gt;8&amp;255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.head&amp;&amp;(c.head.time=m),512&amp;c.flags&amp;&amp;(Bb[0]=255&amp;m,Bb[1]=m&gt;&gt;&gt;8&amp;255,Bb[2]=m&gt;&gt;&gt;16&amp;255,Bb[3]=m&gt;&gt;&gt;24&amp;255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.head&amp;&amp;(c.head.xflags=255&amp;m,c.head.os=m&gt;&gt;8),512&amp;c.flags&amp;&amp;(Bb[0]=255&amp;m,Bb[1]=m&gt;&gt;&gt;8&amp;255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&amp;c.flags){for(;16&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.length=m,c.head&amp;&amp;(c.head.extra_len=m),512&amp;c.flags&amp;&amp;(Bb[0]=255&amp;m,Bb[1]=m&gt;&gt;&gt;8&amp;255,c.check=t(c.check,Bb,2,0)),m=0,n=0}else c.head&amp;&amp;(c.head.extra=null);c.mode=P;case P:if(1024&amp;c.flags&amp;&amp;(q=c.length,q&gt;i&amp;&amp;(q=i),q&amp;&amp;(c.head&amp;&amp;(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&amp;c.flags&amp;&amp;(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&amp;c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&amp;&amp;wb&amp;&amp;c.length&lt;65536&amp;&amp;(c.head.name+=String.fromCharCode(wb));while(wb&amp;&amp;i&gt;q);if(512&amp;c.flags&amp;&amp;(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&amp;&amp;(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&amp;c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&amp;&amp;wb&amp;&amp;c.length&lt;65536&amp;&amp;(c.head.comment+=String.fromCharCode(wb));while(wb&amp;&amp;i&gt;q);if(512&amp;c.flags&amp;&amp;(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&amp;&amp;(c.head.comment=null);c.mode=S;case S:if(512&amp;c.flags){for(;16&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m!==(65535&amp;c.check)){a.msg=&quot;header crc mismatch&quot;,c.mode=lb;break}m=0,n=0}c.head&amp;&amp;(c.head.hcrc=c.flags&gt;&gt;9&amp;1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m&gt;&gt;&gt;=7&amp;n,n-=7&amp;n,c.mode=ib;break}for(;3&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}switch(c.last=1&amp;m,m&gt;&gt;&gt;=1,n-=1,3&amp;m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m&gt;&gt;&gt;=2,n-=2;break a}break;case 2:c.mode=$;break;case 3:a.msg=&quot;invalid block type&quot;,c.mode=lb}m&gt;&gt;&gt;=2,n-=2;break;case X:for(m&gt;&gt;&gt;=7&amp;n,n-=7&amp;n;32&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if((65535&amp;m)!==(m&gt;&gt;&gt;16^65535)){a.msg=&quot;invalid stored block lengths&quot;,c.mode=lb;break}if(c.length=65535&amp;m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q&gt;i&amp;&amp;(q=i),q&gt;j&amp;&amp;(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=V;break;case $:for(;14&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(c.nlen=(31&amp;m)+257,m&gt;&gt;&gt;=5,n-=5,c.ndist=(31&amp;m)+1,m&gt;&gt;&gt;=5,n-=5,c.ncode=(15&amp;m)+4,m&gt;&gt;&gt;=4,n-=4,c.nlen&gt;286||c.ndist&gt;30){a.msg=&quot;too many length or distance symbols&quot;,c.mode=lb;break}c.have=0,c.mode=_;case _:for(;c.have&lt;c.ncode;){for(;3&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.lens[Cb[c.have++]]=7&amp;m,m&gt;&gt;&gt;=3,n-=3}for(;c.have&lt;19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg=&quot;invalid code lengths set&quot;,c.mode=lb;break}c.have=0,c.mode=ab;case ab:for(;c.have&lt;c.nlen+c.ndist;){for(;Ab=c.lencode[m&amp;(1&lt;&lt;c.lenbits)-1],qb=Ab&gt;&gt;&gt;24,rb=Ab&gt;&gt;&gt;16&amp;255,sb=65535&amp;Ab,!(n&gt;=qb);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(16&gt;sb)m&gt;&gt;&gt;=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m&gt;&gt;&gt;=qb,n-=qb,0===c.have){a.msg=&quot;invalid bit length repeat&quot;,c.mode=lb;break}wb=c.lens[c.have-1],q=3+(3&amp;m),m&gt;&gt;&gt;=2,n-=2}else if(17===sb){for(zb=qb+3;zb&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=qb,n-=qb,wb=0,q=3+(7&amp;m),m&gt;&gt;&gt;=3,n-=3}else{for(zb=qb+7;zb&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=qb,n-=qb,wb=0,q=11+(127&amp;m),m&gt;&gt;&gt;=7,n-=7}if(c.have+q&gt;c.nlen+c.ndist){a.msg=&quot;invalid bit length repeat&quot;,c.mode=lb;break}for(;q--;)c.lens[c.have++]=wb}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg=&quot;invalid code -- missing end-of-block&quot;,c.mode=lb;break}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg=&quot;invalid literal/lengths set&quot;,c.mode=lb;break}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg=&quot;invalid distances set&quot;,c.mode=lb;break}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i&gt;=6&amp;&amp;j&gt;=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&amp;&amp;(c.back=-1);break}for(c.back=0;Ab=c.lencode[m&amp;(1&lt;&lt;c.lenbits)-1],qb=Ab&gt;&gt;&gt;24,rb=Ab&gt;&gt;&gt;16&amp;255,sb=65535&amp;Ab,!(n&gt;=qb);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(rb&amp;&amp;0===(240&amp;rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&amp;(1&lt;&lt;tb+ub)-1)&gt;&gt;tb)],qb=Ab&gt;&gt;&gt;24,rb=Ab&gt;&gt;&gt;16&amp;255,sb=65535&amp;Ab,!(n&gt;=tb+qb);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=tb,n-=tb,c.back+=tb}if(m&gt;&gt;&gt;=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break}if(32&amp;rb){c.back=-1,c.mode=V;break}if(64&amp;rb){a.msg=&quot;invalid literal/length code&quot;,c.mode=lb;break}c.extra=15&amp;rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.length+=m&amp;(1&lt;&lt;c.extra)-1,m&gt;&gt;&gt;=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&amp;(1&lt;&lt;c.distbits)-1],qb=Ab&gt;&gt;&gt;24,rb=Ab&gt;&gt;&gt;16&amp;255,sb=65535&amp;Ab,!(n&gt;=qb);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(0===(240&amp;rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&amp;(1&lt;&lt;tb+ub)-1)&gt;&gt;tb)],qb=Ab&gt;&gt;&gt;24,rb=Ab&gt;&gt;&gt;16&amp;255,sb=65535&amp;Ab,!(n&gt;=tb+qb);){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}m&gt;&gt;&gt;=tb,n-=tb,c.back+=tb}if(m&gt;&gt;&gt;=qb,n-=qb,c.back+=qb,64&amp;rb){a.msg=&quot;invalid distance code&quot;,c.mode=lb;break}c.offset=sb,c.extra=15&amp;rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}c.offset+=m&amp;(1&lt;&lt;c.extra)-1,m&gt;&gt;&gt;=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset&gt;c.dmax){a.msg=&quot;invalid distance too far back&quot;,c.mode=lb;break}c.mode=gb;case gb:if(0===j)break a;</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">if(q=p-j,c.offset&gt;q){if(q=c.offset-q,q&gt;c.whave&amp;&amp;c.sane){a.msg=&quot;invalid distance too far back&quot;,c.mode=lb;break}q&gt;c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q&gt;c.length&amp;&amp;(q=c.length),pb=c.window}else pb=f,ob=h-c.offset,q=c.length;q&gt;j&amp;&amp;(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&amp;&amp;(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32&gt;n;){if(0===i)break a;i--,m|=e[g++]&lt;&lt;n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&amp;&amp;(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg=&quot;incorrect data check&quot;,c.mode=lb;break}m=0,n=0}c.mode=jb;case jb:if(c.wrap&amp;&amp;c.flags){for(;32&gt;n;){if(0===i)break a;i--,m+=e[g++]&lt;&lt;n,n+=8}if(m!==(4294967295&amp;c.total)){a.msg=&quot;incorrect length check&quot;,c.mode=lb;break}m=0,n=0}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&amp;&amp;c.mode&lt;lb&amp;&amp;(c.mode&lt;ib||b!==z))&amp;&amp;l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&amp;&amp;p&amp;&amp;(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&amp;&amp;0===p||b===z)&amp;&amp;xb===C&amp;&amp;(xb=I),xb)}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&amp;&amp;(b.window=null),a.state=null,C}function o(a,b){var c;return a&amp;&amp;a.state?(c=a.state,0===(2&amp;c.wrap)?F:(c.head=b,b.done=!1,C)):F}var p,q,r=a(&quot;../utils/common&quot;),s=a(&quot;./adler32&quot;),t=a(&quot;./crc32&quot;),u=a(&quot;./inffast&quot;),v=a(&quot;./inftrees&quot;),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo=&quot;pako inflate (from Nodeca project)&quot;},{&quot;../utils/common&quot;:27,&quot;./adler32&quot;:29,&quot;./crc32&quot;:31,&quot;./inffast&quot;:34,&quot;./inftrees&quot;:36}],36:[function(a,b){&quot;use strict&quot;;var c=a(&quot;../utils/common&quot;),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d&gt;=D;D++)P[D]=0;for(E=0;o&gt;E;E++)P[b[n+E]]++;for(H=C,G=d;G&gt;=1&amp;&amp;0===P[G];G--);if(H&gt;G&amp;&amp;(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G&gt;F&amp;&amp;0===P[F];F++);for(F&gt;H&amp;&amp;(H=F),K=1,D=1;d&gt;=D;D++)if(K&lt;&lt;=1,K-=P[D],0&gt;K)return-1;if(K&gt;0&amp;&amp;(a===g||1!==G))return-1;for(Q[1]=0,D=1;d&gt;D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o&gt;E;E++)0!==b[n+E]&amp;&amp;(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1&lt;&lt;H,w=L-1,a===h&amp;&amp;L&gt;e||a===i&amp;&amp;L&gt;f)return 1;for(var T=0;;){T++,z=D-J,r[E]&lt;y?(A=0,B=r[E]):r[E]&gt;y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1&lt;&lt;D-J,u=1&lt;&lt;I,F=u;do u-=t,p[x+(M&gt;&gt;J)+u]=z&lt;&lt;24|A&lt;&lt;16|B|0;while(0!==u);for(t=1&lt;&lt;D-1;M&amp;t;)t&gt;&gt;=1;if(0!==t?(M&amp;=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]]}if(D&gt;H&amp;&amp;(M&amp;w)!==v){for(0===J&amp;&amp;(J=H),x+=F,I=D-J,K=1&lt;&lt;I;G&gt;I+J&amp;&amp;(K-=P[I+J],!(0&gt;=K));)I++,K&lt;&lt;=1;if(L+=1&lt;&lt;I,a===h&amp;&amp;L&gt;e||a===i&amp;&amp;L&gt;f)return 1;v=M&amp;w,p[v]=H&lt;&lt;24|I&lt;&lt;16|x-q|0}}return 0!==M&amp;&amp;(p[x+M]=D-J&lt;&lt;24|64&lt;&lt;16|0),s.bits=H,0}},{&quot;../utils/common&quot;:27}],37:[function(a,b){&quot;use strict&quot;;b.exports={2:&quot;need dictionary&quot;,1:&quot;stream end&quot;,0:&quot;&quot;,&quot;-1&quot;:&quot;file error&quot;,&quot;-2&quot;:&quot;stream error&quot;,&quot;-3&quot;:&quot;data error&quot;,&quot;-4&quot;:&quot;insufficient memory&quot;,&quot;-5&quot;:&quot;buffer error&quot;,&quot;-6&quot;:&quot;incompatible version&quot;}},{}],38:[function(a,b,c){&quot;use strict&quot;;function d(a){for(var b=a.length;--b&gt;=0;)a[b]=0}function e(a){return 256&gt;a?gb[a]:gb[256+(a&gt;&gt;&gt;7)]}function f(a,b){a.pending_buf[a.pending++]=255&amp;b,a.pending_buf[a.pending++]=b&gt;&gt;&gt;8&amp;255}function g(a,b,c){a.bi_valid&gt;V-c?(a.bi_buf|=b&lt;&lt;a.bi_valid&amp;65535,f(a,a.bi_buf),a.bi_buf=b&gt;&gt;V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b&lt;&lt;a.bi_valid&amp;65535,a.bi_valid+=c)}function h(a,b,c){g(a,c[2*b],c[2*b+1])}function i(a,b){var c=0;do c|=1&amp;a,a&gt;&gt;&gt;=1,c&lt;&lt;=1;while(--b&gt;0);return c&gt;&gt;&gt;1}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid&gt;=8&amp;&amp;(a.pending_buf[a.pending++]=255&amp;a.bi_buf,a.bi_buf&gt;&gt;=8,a.bi_valid-=8)}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U&gt;=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T&gt;c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f&gt;o&amp;&amp;(f=o,p++),i[2*d+1]=f,d&gt;j||(a.bl_count[f]++,g=0,d&gt;=n&amp;&amp;(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&amp;&amp;(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p&gt;0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e&gt;j||(i[2*e+1]!==f&amp;&amp;(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U&gt;=d;d++)f[d]=g=g+c[d-1]&lt;&lt;1;for(e=0;b&gt;=e;e++){var h=a[2*e+1];0!==h&amp;&amp;(a[2*e]=i(f[h]++,h))}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1&gt;d;d++)for(ib[d]=c,a=0;a&lt;1&lt;&lt;_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16&gt;d;d++)for(jb[d]=e,a=0;a&lt;1&lt;&lt;ab[d];a++)gb[e++]=d;for(e&gt;&gt;=7;R&gt;d;d++)for(jb[d]=e&lt;&lt;7,a=0;a&lt;1&lt;&lt;ab[d]-7;a++)gb[256+e++]=d;for(b=0;U&gt;=b;b++)f[b]=0;for(a=0;143&gt;=a;)eb[2*a+1]=8,a++,f[8]++;for(;255&gt;=a;)eb[2*a+1]=9,a++,f[9]++;for(;279&gt;=a;)eb[2*a+1]=7,a++,f[7]++;for(;287&gt;=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R&gt;a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W)}function n(a){var b;for(b=0;Q&gt;b;b++)a.dyn_ltree[2*b]=0;for(b=0;R&gt;b;b++)a.dyn_dtree[2*b]=0;for(b=0;S&gt;b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function o(a){a.bi_valid&gt;8?f(a,a.bi_buf):a.bi_valid&gt;0&amp;&amp;(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function p(a,b,c,d){o(a),d&amp;&amp;(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]&lt;a[f]||a[e]===a[f]&amp;&amp;d[b]&lt;=d[c]}function r(a,b,c){for(var d=a.heap[c],e=c&lt;&lt;1;e&lt;=a.heap_len&amp;&amp;(e&lt;a.heap_len&amp;&amp;q(b,a.heap[e+1],a.heap[e],a.depth)&amp;&amp;e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e&lt;&lt;=1;a.heap[c]=d}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]&lt;&lt;8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&amp;&amp;(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&amp;&amp;(d-=jb[i],g(a,d,j)));while(k&lt;a.last_lit);h(a,X,b)}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i&gt;c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len&lt;2;)e=a.heap[++a.heap_len]=2&gt;j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&amp;&amp;(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len&gt;&gt;1;c&gt;=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]&gt;=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len&gt;=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count)}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&amp;&amp;(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c&gt;=d;d++)e=g,g=b[2*(d+1)+1],++h&lt;i&amp;&amp;e===g||(j&gt;h?a.bl_tree[2*e]+=h:0!==e?(e!==f&amp;&amp;a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10&gt;=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&amp;&amp;(k=138,l=3),d=0;c&gt;=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j&lt;k&amp;&amp;e===i)){if(l&gt;j){do h(a,e,a.bl_tree);while(0!==--j)}else 0!==e?(e!==f&amp;&amp;(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10&gt;=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4)}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b&gt;=3&amp;&amp;0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d&gt;e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1)}function y(a){var b,c=4093624447;for(b=0;31&gt;=b;b++,c&gt;&gt;&gt;=1)if(1&amp;c&amp;&amp;0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P&gt;b;b++)if(0!==a.dyn_ltree[2*b])return H;return G}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a)}function A(a,b,c,d){g(a,(J&lt;&lt;1)+(d?1:0),3),p(a,b,c,!0)}function B(a){g(a,K&lt;&lt;1,3),h(a,X,eb),j(a)}function C(a,b,c,d){var e,f,h=0;a.level&gt;0?(a.strm.data_type===I&amp;&amp;(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7&gt;&gt;&gt;3,f=a.static_len+3+7&gt;&gt;&gt;3,e&gt;=f&amp;&amp;(e=f)):e=f=c+5,e&gt;=c+4&amp;&amp;-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K&lt;&lt;1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L&lt;&lt;1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&amp;&amp;o(a)}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b&gt;&gt;&gt;8&amp;255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&amp;b,a.pending_buf[a.l_buf+a.last_lit]=255&amp;c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1}var E=a(&quot;../utils/common&quot;),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&amp;&amp;a.length},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B},{&quot;../utils/common&quot;:27}],39:[function(a,b){&quot;use strict&quot;;function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=&quot;&quot;,this.state=null,this.data_type=2,this.adler=0}b.exports=c},{}]},{},[9])(9)});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06859s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-70c417717c6c19f325c76c40de062c2e005f8cfec564283d7818b5b0fe8c0d27.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9adb85255293205044bdded05300662b60a3fe712cb26ee7e5ca313a9f2ce3f7.js"></script>
      
      

  </body>
</html>

