


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>reveal.js/audio-slideshow.js at audio-slideshow · rajgoel/reveal.js</title>
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

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="DCF96563:51F7:4F30B6B:55067FBC" name="octolytics-dimension-request_id" /><meta content="11130522" name="octolytics-actor-id" /><meta content="whenhowlee" name="octolytics-actor-login" /><meta content="a2517f8317bdb795081f00e381d3f650c7cb23f4cecd3b64991029cdd5af7a3b" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="FOiIE6qHig2AIEDSfiqnCcZjbPYq+SufKbeV8lrO95R2Ni5WAhi7+LkgUWXOvOL2FaMJ8bOHT0FR3Ea4wF1D9g==" name="csrf-token" />

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
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="grEVlGW9AVUADSQMTAombKx6s7CFMEuHnaRVGnqLVZAIEMhEnFXRM+kslFoB7JhHwp99KyvN1nIHuZIgYHtdBQ==" /></div>
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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oqH6KdQwib/j8uE2+q1BO8pGS5JDQbeP7wOkwo3vNCSkTkVp7Pibpa1bqMR9RbDysvnh/oy55w46TPA9EWetNA==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="15249409" />

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

    <form accept-charset="UTF-8" action="/rajgoel/reveal.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1sB42mtQHMmu1nimo3ItFzLq7a81La+8yJVRf+r67MB8G32GwgeGfZ5E+aDnMofeHtxt0jLGcsK7aG3CU/wa/g==" /></div>
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
    <form accept-charset="UTF-8" action="/rajgoel/reveal.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UYfxo4qMeD5+J8seFM2aP9tuRp5DLB7wNBIszDYdfGTRU/lWcM9pXCzlI0SBPG1a1vgFzHz4EeiDxzK1W+Irdg==" /></div>
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
          <form accept-charset="UTF-8" action="/rajgoel/reveal.js/fork" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eIlDJI2VUYvcPnuIrtQ6rv3xZcVk4eK3/JnoE1JWD4qvhF8S1HfBAV5GQQ0EJu+hsFvVWq/6jtY+lTneka5zrA==" /></div>
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
          

<a href="/rajgoel/reveal.js/blob/cd7181a4746cdb6c62036534585dc819b502fd6c/plugin/audio-slideshow/audio-slideshow.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:4950798ce3d24cc2b934cba38bacb0a7 -->

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
               href="/rajgoel/reveal.js/blob/animate/plugin/audio-slideshow/audio-slideshow.js"
               data-name="animate"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="animate">
                animate
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/rajgoel/reveal.js/blob/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js"
               data-name="audio-slideshow"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="audio-slideshow">
                audio-slideshow
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/dev/plugin/audio-slideshow/audio-slideshow.js"
               data-name="dev"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="dev">
                dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/embed/plugin/audio-slideshow/audio-slideshow.js"
               data-name="embed"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="embed">
                embed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/gh-pages/plugin/audio-slideshow/audio-slideshow.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/rajgoel/reveal.js/blob/master/plugin/audio-slideshow/audio-slideshow.js"
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
              <a href="/rajgoel/reveal.js/tree/2.6.1/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.1">2.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.6.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.6.0">2.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.5.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.5.0">2.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.4.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.4.0">2.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.3.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.3.0">2.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.2.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.2.0">2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.1.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/2.0.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.4.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="1.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.4.0">1.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.3.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.2.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.1.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/1.0.0/plugin/audio-slideshow/audio-slideshow.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/rajgoel/reveal.js/tree/0.3.0/plugin/audio-slideshow/audio-slideshow.js"
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
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">reveal.js</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow/plugin" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">plugin</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/rajgoel/reveal.js/tree/audio-slideshow/plugin/audio-slideshow" class="" data-branch="audio-slideshow" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">audio-slideshow</span></a></span><span class="separator">/</span><strong class="final-path">audio-slideshow.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="rajgoel" class="avatar" data-user="4448455" height="24" src="https://avatars2.githubusercontent.com/u/4448455?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/rajgoel" rel="author">rajgoel</a></span>
        <time datetime="2015-03-12T20:19:57Z" is="relative-time">Mar 12, 2015</time>
        <div class="commit-title">
            <a href="/rajgoel/reveal.js/commit/101fd3a71e28d7743205caea575e07a91b2a2944" class="message" data-pjax="true" title="Update audio-slideshow.js

Something went wrong with my tests before, now audio playback should advance as expected">Update audio-slideshow.js</a>
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
        <a href="/rajgoel/reveal.js/raw/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/rajgoel/reveal.js/blame/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/rajgoel/reveal.js/commits/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw"
           href="https://windows.github.com" aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/rajgoel/reveal.js/edit/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js" aria-label="Clicking this button will fork this project so you can edit the file" class="tooltipped tooltipped-s inline-form edit-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4Dy93aien4OTBujUO6Aoh+0uGP0ubQ2+Ghd1kBAkRHOb2Jji8UONdsaPBCbFCtA6g6d96F6Aw7527YehN5fKlA==" /></div>
              <button class="web-edit-button"
                      type="submit"
                      data-hotkey="e"
                      data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/rajgoel/reveal.js/delete/audio-slideshow/plugin/audio-slideshow/audio-slideshow.js" aria-label="Fork this project and delete file" class="tooltipped tooltipped-s inline-form delete-file-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Bool8mGsRyspE0eXvgsMlPfRi2N4TscmL1hgZP3eVKJjiCFcaPNnnrEo7qsdaFAMO0FruYj4WV3Caj8Sx6zvGg==" /></div>
            <button class="web-edit-button"
                    type="submit"
                    data-disable-with>
              <span class="octicon octicon-trashcan "></span>
            </button>
</form>      </a>
    </div><!-- /.actions -->
    <div class="file-info">
        199 lines (176 sloc)
        <span class="file-info-divider"></span>
      9.012 kb
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
        <td id="LC4" class="blob-code js-file-line"><span class="pl-c">** Audio slideshow is a plugin for reveal.js allowing to</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-c">** automatically play audio files for a slide deck. After an audio </span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="pl-c">** file has completed playing the next slide or fragment is  </span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-c">** automatically shown and the respective audio file is played. </span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-c">** If no audio file is available, a blank audio file with default</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="pl-c">** duration is played instead.</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="pl-c">** Version: 0.2</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="pl-c">** </span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="pl-c">** License: MIT license (see LICENSE.md)</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="pl-c">******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">(<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">	<span class="pl-c">// default parameters</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">	<span class="pl-s">var</span> prefix <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audio/<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">	<span class="pl-s">var</span> suffix <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>.ogg<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">	<span class="pl-s">var</span> defaultDuration <span class="pl-k">=</span> <span class="pl-c1">5</span>; <span class="pl-c">// value in seconds</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">	<span class="pl-s">var</span> playerOpacity <span class="pl-k">=</span> .<span class="pl-c1">05</span>; <span class="pl-c">// opacity when the mouse is far from to the audioplayer</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">	<span class="pl-s">var</span> startAtFragment <span class="pl-k">=</span> <span class="pl-c1">false</span>; <span class="pl-c">// when moving to a slide start at the current fragment or at the start of the slide</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">	<span class="pl-c">// ------------------</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">	<span class="pl-s">var</span> silence;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">	<span class="pl-s">var</span> currentAudio <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">	<span class="pl-s">var</span> previousAudio <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>fragmentshown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;fragmentshown &quot;);</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">		selectAudio();</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>fragmenthidden<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;fragmenthidden &quot;);</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">		selectAudio();</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>ready<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">		setup();</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;ready &quot;);</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">		selectAudio();</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>slidechanged<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;slidechanged &quot;);</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">		<span class="pl-s">var</span> indices <span class="pl-k">=</span> Reveal.getIndices();</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">		<span class="pl-k">if</span> ( <span class="pl-k">!</span>startAtFragment <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> indices.f <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> indices.f <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">			<span class="pl-c">// hide fragments when slide is shown</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">			Reveal.slide(indices.h, indices.v, <span class="pl-k">-</span><span class="pl-c1">1</span>);		</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">		selectAudio();</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>paused<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">		currentAudio.pause();</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>resumed<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>overviewshown<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">		currentAudio.pause();</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">		<span class="pl-s3">document</span>.querySelector(<span class="pl-s1"><span class="pl-pds">&quot;</span>.audio-controls<span class="pl-pds">&quot;</span></span>).<span class="pl-sc">style</span>.<span class="pl-sc">visibility</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">	Reveal.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>overviewhidden<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">		<span class="pl-s3">document</span>.querySelector(<span class="pl-s1"><span class="pl-pds">&quot;</span>.audio-controls<span class="pl-pds">&quot;</span></span>).<span class="pl-sc">style</span>.<span class="pl-sc">visibility</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>visible<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">	} );</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">selectAudio</span>( <span class="pl-vpf">previousAudio</span> ) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">		<span class="pl-k">if</span> ( currentAudio ) {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">			currentAudio.pause();</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">			currentAudio.<span class="pl-sc">style</span>.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">		<span class="pl-s">var</span> indices <span class="pl-k">=</span> Reveal.getIndices();</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">		<span class="pl-s">var</span> id <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> indices.v;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">		<span class="pl-k">if</span> ( indices.f <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) id <span class="pl-k">=</span> id <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> indices.f;</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">		currentAudio <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( id );</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">		currentAudio.<span class="pl-sc">style</span>.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>block<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">		<span class="pl-k">if</span> ( previousAudio <span class="pl-k">&amp;&amp;</span> currentAudio.<span class="pl-sc">id</span> <span class="pl-k">!=</span> previousAudio.<span class="pl-sc">id</span> ) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">			currentAudio.volume <span class="pl-k">=</span> previousAudio.volume;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">			currentAudio.muted <span class="pl-k">=</span> previousAudio.muted;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;Play &quot; + currentAudio.id);</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">			currentAudio.play();</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">setup</span>() {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Reveal.getConfig().audioPrefix ) prefix <span class="pl-k">=</span> Reveal.getConfig().audioPrefix;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Reveal.getConfig().audioSuffix ) suffix <span class="pl-k">=</span> Reveal.getConfig().audioSuffix;</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Reveal.getConfig().audioDefaultDuration ) defaultDuration <span class="pl-k">=</span> Reveal.getConfig().audioDefaultDuration;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Reveal.getConfig().audioPlayerOpacity ) playerOpacity <span class="pl-k">=</span> Reveal.getConfig().audioPlayerOpacity;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">		<span class="pl-k">if</span> ( <span class="pl-s1"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-s3">window</span> <span class="pl-k">||</span> <span class="pl-s3">navigator</span>.msMaxTouchPoints ) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">			opacity <span class="pl-k">=</span> <span class="pl-c1">1</span>;		</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">		<span class="pl-k">if</span> ( Reveal.getConfig().audioStartAtFragment ) startAtFragment <span class="pl-k">=</span> Reveal.getConfig().audioStartAtFragment;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">		<span class="pl-c">// set style so that audio controls are shown on hover </span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">		<span class="pl-s">var</span> css<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&#39;</span>.audio-controls&gt;audio { opacity:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> playerOpacity <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>;} .audio-controls:hover&gt;audio { opacity:1;}<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">		style<span class="pl-k">=</span><span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">		<span class="pl-k">if</span> ( style.styleSheet ) {</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">		    style.styleSheet.cssText<span class="pl-k">=</span>css;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">		<span class="pl-k">else</span> { </td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">		    style.<span class="pl-s3">appendChild</span>( <span class="pl-s3">document</span>.<span class="pl-s3">createTextNode</span>( css ) );</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">		}		</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">		<span class="pl-s3">document</span>.<span class="pl-s3">getElementsByTagName</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span> )[<span class="pl-c1">0</span>].<span class="pl-s3">appendChild</span>( style );</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">		silence <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">SilentAudio</span>( defaultDuration ); <span class="pl-c">// create the wave file</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">		<span class="pl-s">var</span> divElement <span class="pl-k">=</span>  <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">		divElement.<span class="pl-sc">className</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audio-controls<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">		divElement.<span class="pl-s3">setAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>width: 50%; height:75px; position: fixed; left: 25%; bottom: 4px;z-index: 10;<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">		<span class="pl-s3">document</span>.querySelector( <span class="pl-s1"><span class="pl-pds">&quot;</span>.reveal<span class="pl-pds">&quot;</span></span> ).<span class="pl-s3">appendChild</span>( divElement );</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">		<span class="pl-c">// create audio players for all slides</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">		<span class="pl-s">var</span> horizontalSlides <span class="pl-k">=</span> <span class="pl-s3">document</span>.querySelectorAll( <span class="pl-s1"><span class="pl-pds">&#39;</span>.reveal .slides&gt;section<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">		<span class="pl-k">for</span>( <span class="pl-s">var</span> h <span class="pl-k">=</span> <span class="pl-c1">0</span>, len1 <span class="pl-k">=</span> horizontalSlides.<span class="pl-sc">length</span>; h <span class="pl-k">&lt;</span> len1; h<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">			<span class="pl-s">var</span> verticalSlides <span class="pl-k">=</span> horizontalSlides[ h ].querySelectorAll( <span class="pl-s1"><span class="pl-pds">&#39;</span>section<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>verticalSlides.<span class="pl-sc">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">				setupAllAudioElements( divElement, h, <span class="pl-c1">0</span>, horizontalSlides[ h ].querySelectorAll( <span class="pl-s1"><span class="pl-pds">&#39;</span>.fragment<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">				<span class="pl-k">for</span>( <span class="pl-s">var</span> v <span class="pl-k">=</span> <span class="pl-c1">0</span>, len2 <span class="pl-k">=</span> verticalSlides.<span class="pl-sc">length</span>; v <span class="pl-k">&lt;</span> len2; v<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">					setupAllAudioElements( divElement, h, v, verticalSlides[ v ].querySelectorAll( <span class="pl-s1"><span class="pl-pds">&#39;</span>.fragment<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">setupAllAudioElements</span>( <span class="pl-vpf">container</span>, <span class="pl-vpf">h</span>, <span class="pl-vpf">v</span>, <span class="pl-vpf">fragments</span> ) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">		setupAudioElement( container, h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> v);</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">		<span class="pl-k">for</span>( <span class="pl-s">var</span> f <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> fragments.<span class="pl-sc">length</span>; f <span class="pl-k">&lt;</span> len; f<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">			setupAudioElement( container, h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> v <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> fragments[ f ].<span class="pl-s3">getAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>data-fragment-index<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">	<span class="pl-st">function</span> <span class="pl-en">setupAudioElement</span>( <span class="pl-vpf">container</span>, <span class="pl-vpf">indices</span> ) {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">		<span class="pl-s">var</span> audioElement <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>audio<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">		audioElement.<span class="pl-s3">setAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>style<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&quot;</span>position: relative; top: 20px; left: 10%; width: 80%;<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">		audioElement.<span class="pl-sc">id</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices;</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">		audioElement.<span class="pl-sc">style</span>.<span class="pl-sc">display</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">		audioElement.<span class="pl-s3">setAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>controls<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">		audioElement.<span class="pl-s3">setAttribute</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>preload<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">		audioElement.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>ended<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">			<span class="pl-s">var</span> previousAudio <span class="pl-k">=</span> currentAudio;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">			Reveal.<span class="pl-sc">next</span>();</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">			selectAudio( previousAudio );</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">		} );</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">		audioElement.addEventListener( <span class="pl-s1"><span class="pl-pds">&#39;</span>play<span class="pl-pds">&#39;</span></span>, <span class="pl-st">function</span>( <span class="pl-vpf">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">			<span class="pl-c">// preload next audio element so that it is available after slide change</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">			<span class="pl-s">var</span> indices <span class="pl-k">=</span> Reveal.getIndices();	</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">			<span class="pl-s">var</span> nextId <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> indices.v;		</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">			<span class="pl-k">if</span> ( indices.f <span class="pl-k">!=</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> indices.f <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">				nextId <span class="pl-k">=</span> nextId <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (indices.f <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">				nextId <span class="pl-k">=</span> nextId <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">			<span class="pl-s">var</span> nextAudio <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( nextId );</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>nextAudio ) {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">				nextId <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> indices.h <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (indices.v<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">				nextAudio <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( nextId );			</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span>nextAudio ) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">					nextId <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>audioplayer-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (indices.h<span class="pl-k">+</span><span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>.0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">					nextAudio <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">getElementById</span>( nextId );</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">				}			</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">			<span class="pl-k">if</span> ( nextAudio ) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line"><span class="pl-c">//console.debug( &quot;Preload: &quot; + nextAudio.id );</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">				nextAudio.<span class="pl-s3">load</span>();		</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">		} );</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">		<span class="pl-s">var</span> audioSource <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>source<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">		audioSource.<span class="pl-sc">src</span><span class="pl-k">=</span> prefix <span class="pl-k">+</span> indices <span class="pl-k">+</span> suffix;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">		audioElement.<span class="pl-s3">appendChild</span>( audioSource );</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">		<span class="pl-s">var</span> sourceOfSilence<span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>( <span class="pl-s1"><span class="pl-pds">&#39;</span>source<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">		sourceOfSilence.<span class="pl-sc">src</span><span class="pl-k">=</span> silence.dataURI;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">		audioElement.<span class="pl-s3">appendChild</span>( sourceOfSilence ); <span class="pl-c">// use this if audio file does not exist</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">		container.<span class="pl-s3">appendChild</span>( audioElement );</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">})();</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line"><span class="pl-c">/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line"><span class="pl-c">** Create SilentAudio </span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line"><span class="pl-c">** based on: RIFFWAVE.js v0.03</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line"><span class="pl-c">** http://www.codebase.es/riffwave/riffwave.js </span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line"><span class="pl-c">** Usage: </span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line"><span class="pl-c">** silence = new SilentAudio( 10 ); // create 10 seconds wave file</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line"><span class="pl-c">**</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line"><span class="pl-c">******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">var FastBase64={chars:&quot;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=&quot;,encLookup:[],Init:function(){for(var e=0;4096&gt;e;e++)this.encLookup[e]=this.chars[e&gt;&gt;6]+this.chars[63&amp;e]},Encode:function(e){for(var h=e.length,a=&quot;&quot;,t=0;h&gt;2;)n=e[t]&lt;&lt;16|e[t+1]&lt;&lt;8|e[t+2],a+=this.encLookup[n&gt;&gt;12]+this.encLookup[4095&amp;n],h-=3,t+=3;if(h&gt;0){var s=(252&amp;e[t])&gt;&gt;2,i=(3&amp;e[t])&lt;&lt;4;if(h&gt;1&amp;&amp;(i|=(240&amp;e[++t])&gt;&gt;4),a+=this.chars[s],a+=this.chars[i],2==h){var r=(15&amp;e[t++])&lt;&lt;2;r|=(192&amp;e[t])&gt;&gt;6,a+=this.chars[r]}1==h&amp;&amp;(a+=&quot;=&quot;),a+=&quot;=&quot;}return a}};FastBase64.Init();var SilentAudio=function(e){function h(e){return[255&amp;e,e&gt;&gt;8&amp;255,e&gt;&gt;16&amp;255,e&gt;&gt;24&amp;255]}function a(e){return[255&amp;e,e&gt;&gt;8&amp;255]}function t(e){for(var h=[],a=0,t=e.length,s=0;t&gt;s;s++)h[a++]=255&amp;e[s],h[a++]=e[s]&gt;&gt;8&amp;255;return h}this.data=[],this.wav=[],this.dataURI=&quot;&quot;,this.header={chunkId:[82,73,70,70],chunkSize:0,format:[87,65,86,69],subChunk1Id:[102,109,116,32],subChunk1Size:16,audioFormat:1,numChannels:1,sampleRate:8e3,byteRate:0,blockAlign:0,bitsPerSample:8,subChunk2Id:[100,97,116,97],subChunk2Size:0},this.Make=function(e){for(var s=0;s&lt;e*this.header.sampleRate;s++)this.data[s]=0;this.header.blockAlign=this.header.numChannels*this.header.bitsPerSample&gt;&gt;3,this.header.byteRate=this.header.blockAlign*this.sampleRate,this.header.subChunk2Size=this.data.length*(this.header.bitsPerSample&gt;&gt;3),this.header.chunkSize=36+this.header.subChunk2Size,this.wav=this.header.chunkId.concat(h(this.header.chunkSize),this.header.format,this.header.subChunk1Id,h(this.header.subChunk1Size),a(this.header.audioFormat),a(this.header.numChannels),h(this.header.sampleRate),h(this.header.byteRate),a(this.header.blockAlign),a(this.header.bitsPerSample),this.header.subChunk2Id,h(this.header.subChunk2Size),16==this.header.bitsPerSample?t(this.data):this.data),this.dataURI=&quot;data:audio/wav;base64,&quot;+FastBase64.Encode(this.wav)},this.Make(e)};</td>
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
      <li>&copy; 2015 <span title="0.05541s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
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

