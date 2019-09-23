---
title: Getting Started with KintoHub
sidebar_label: Getting Started
---

KintoHub is a __cloud-native workflow__ which manages your entire application’s lifecycle from source to production.

Get started in seconds and __build__, __combine__, __deploy__ and __manage__ APIs, microservices, databases, tasks and more in clicks versus weeks.

Explore all features on the [KintoHub website](https://www.kintohub.com).

## Try an example app

Quickly see KintoHub in action by _trying out a project_ with one of our _example app templates_ in your favorite language of choice:

<!-- Icons from: https://konpa.github.io/devicon/ -->

[<span class="float-left-padding center"><svg viewBox="0 0 128 128" width=75 height=75>
<path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
</svg>  
Node.js</span>](introduction/try-deploying/nodejs-app.md)

[<span class="float-left-padding center"><svg viewBox="0 0 128 128" width=75 height=75>
<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/><radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"/><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"/></radialGradient><path opacity=".444" fill="url(#c)" enable-background="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/></svg>  
Python</span>](introduction/try-deploying/python-app.md)

[<span class="float-left-padding center"><svg viewBox="0 0 128 128" width=75 height=75>
<path fill="#5382A1" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"></path><path fill="#F8981D" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"></path><path fill="#5382A1" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"></path><path fill="#F8981D" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"></path><path fill="#5382A1" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"></path>
</svg>  
Java</span>](introduction/try-deploying/java-app.md)

[<span class="float-left-padding center"><svg id="Layer_1" data-name="Layer 1" viewBox="0 0 64 64" width=75 height=75><defs><style>.cls-1{fill:#5c2d91;}.cls-2,.cls-3{fill:#fff;}.cls-2{opacity:0.1;}</style></defs><title>logo_NET</title><circle class="cls-1" cx="32" cy="32" r="32"/><path class="cls-2" d="M9.82,9A32,32,0,1,0,55,54.18Z"/><path class="cls-3" d="M7.4,41.25a1.35,1.35,0,0,1-1-.42,1.38,1.38,0,0,1-.41-1,1.4,1.4,0,0,1,.41-1,1.34,1.34,0,0,1,1-.43,1.37,1.37,0,0,1,1,.43,1.39,1.39,0,0,1,.42,1,1.37,1.37,0,0,1-.42,1A1.38,1.38,0,0,1,7.4,41.25Z"/><path class="cls-3" d="M27.27,41H24.65L15.28,26.46a6.06,6.06,0,0,1-.58-1.14h-.08a18.71,18.71,0,0,1,.1,2.5V41H12.59V22.77h2.77l9.12,14.28q.57.89.74,1.22h.05a19.29,19.29,0,0,1-.13-2.68V22.77h2.13Z"/><path class="cls-3" d="M41.69,41H32V22.77h9.24V24.7H34.18v6.06h6.58v1.92H34.18V39h7.52Z"/><path class="cls-3" d="M56,24.7H50.7V41H48.57V24.7H43.33V22.77H56Z"/></svg>  
.NET</span>](introduction/try-deploying/dotnet-app.md)

[<span class="float-left-padding center"><svg viewBox="0 0 128 128" width=75 height=75>
<path fill="#6181B6" d="M64 33.039c-33.74 0-61.094 13.862-61.094 30.961s27.354 30.961 61.094 30.961 61.094-13.862 61.094-30.961-27.354-30.961-61.094-30.961zm-15.897 36.993c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34h14.04c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515-.759 1.357-1.75 2.624-2.972 3.748zm21.311 2.968l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528l-3.031 15.241h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zM38.934 54h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458s-2.772-1.721-5.546-1.721z"></path>
</svg>  
PHP</span>](introduction/try-deploying/php-app.md)

[<span class="float-left-padding center"><svg width=75 height=75 viewBox="-22 -22 300 300" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="84.7503645%" y1="111.399353%" x2="58.2543962%" y2="64.5837087%" id="linearGradient-1">
            <stop stop-color="#FB7655" offset="0%"></stop>
            <stop stop-color="#FB7655" offset="0%"></stop>
            <stop stop-color="#E42B1E" offset="41%"></stop>
            <stop stop-color="#990000" offset="99%"></stop>
            <stop stop-color="#990000" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="116.651024%" y1="60.8903211%" x2="1.74616041%" y2="19.2879503%" id="linearGradient-2">
            <stop stop-color="#871101" offset="0%"></stop>
            <stop stop-color="#871101" offset="0%"></stop>
            <stop stop-color="#911209" offset="99%"></stop>
            <stop stop-color="#911209" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="75.7744024%" y1="219.327131%" x2="38.9781357%" y2="7.82868176%" id="linearGradient-3">
            <stop stop-color="#871101" offset="0%"></stop>
            <stop stop-color="#871101" offset="0%"></stop>
            <stop stop-color="#911209" offset="99%"></stop>
            <stop stop-color="#911209" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50.012428%" y1="7.23449921%" x2="66.4830414%" y2="79.1354134%" id="linearGradient-4">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E57252" offset="23%"></stop>
            <stop stop-color="#DE3B20" offset="46%"></stop>
            <stop stop-color="#A60003" offset="99%"></stop>
            <stop stop-color="#A60003" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="46.1741749%" y1="16.347907%" x2="49.9323342%" y2="83.0468449%" id="linearGradient-5">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4714E" offset="23%"></stop>
            <stop stop-color="#BE1A0D" offset="56%"></stop>
            <stop stop-color="#A80D00" offset="99%"></stop>
            <stop stop-color="#A80D00" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="36.9653573%" y1="15.5936471%" x2="49.5282324%" y2="92.4776332%" id="linearGradient-6">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E46342" offset="18%"></stop>
            <stop stop-color="#C82410" offset="40%"></stop>
            <stop stop-color="#A80D00" offset="99%"></stop>
            <stop stop-color="#A80D00" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="13.6086166%" y1="58.3456855%" x2="85.7636612%" y2="-46.7167814%" id="linearGradient-7">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#C81F11" offset="54%"></stop>
            <stop stop-color="#BF0905" offset="99%"></stop>
            <stop stop-color="#BF0905" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="27.6242038%" y1="21.1345847%" x2="50.7445145%" y2="79.0557818%" id="linearGradient-8">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#DE4024" offset="31%"></stop>
            <stop stop-color="#BF190B" offset="99%"></stop>
            <stop stop-color="#BF190B" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-20.6671297%" y1="122.281897%" x2="104.241521%" y2="-6.34211007%" id="linearGradient-9">
            <stop stop-color="#BD0012" offset="0%"></stop>
            <stop stop-color="#BD0012" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="7%"></stop>
            <stop stop-color="#FFFFFF" offset="17%"></stop>
            <stop stop-color="#C82F1C" offset="27%"></stop>
            <stop stop-color="#820C01" offset="33%"></stop>
            <stop stop-color="#A31601" offset="46%"></stop>
            <stop stop-color="#B31301" offset="72%"></stop>
            <stop stop-color="#E82609" offset="99%"></stop>
            <stop stop-color="#E82609" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="58.7919609%" y1="65.2049657%" x2="11.9636556%" y2="50.1275621%" id="linearGradient-10">
            <stop stop-color="#8C0C01" offset="0%"></stop>
            <stop stop-color="#8C0C01" offset="0%"></stop>
            <stop stop-color="#990C00" offset="54%"></stop>
            <stop stop-color="#A80D0E" offset="99%"></stop>
            <stop stop-color="#A80D0E" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="79.3194899%" y1="62.7538068%" x2="23.088288%" y2="17.8876818%" id="linearGradient-11">
            <stop stop-color="#7E110B" offset="0%"></stop>
            <stop stop-color="#7E110B" offset="0%"></stop>
            <stop stop-color="#9E0C00" offset="99%"></stop>
            <stop stop-color="#9E0C00" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="92.8800277%" y1="74.1223655%" x2="59.8414537%" y2="39.7039965%" id="linearGradient-12">
            <stop stop-color="#79130D" offset="0%"></stop>
            <stop stop-color="#79130D" offset="0%"></stop>
            <stop stop-color="#9E120B" offset="99%"></stop>
            <stop stop-color="#9E120B" offset="100%"></stop>
        </linearGradient>
        <radialGradient cx="32.0008013%" cy="40.2100469%" fx="32.0008013%" fy="40.2100469%" r="69.5729556%" id="radialGradient-13">
            <stop stop-color="#A80D00" offset="0%"></stop>
            <stop stop-color="#A80D00" offset="0%"></stop>
            <stop stop-color="#7E0E08" offset="99%"></stop>
            <stop stop-color="#7E0E08" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="13.5493795%" cy="40.859922%" fx="13.5493795%" fy="40.859922%" r="88.3861936%" id="radialGradient-14">
            <stop stop-color="#A30C00" offset="0%"></stop>
            <stop stop-color="#A30C00" offset="0%"></stop>
            <stop stop-color="#800E08" offset="99%"></stop>
            <stop stop-color="#800E08" offset="100%"></stop>
        </radialGradient>
        <linearGradient x1="56.5701955%" y1="101.716594%" x2="3.10480737%" y2="11.9932603%" id="linearGradient-15">
            <stop stop-color="#8B2114" offset="0%"></stop>
            <stop stop-color="#8B2114" offset="0%"></stop>
            <stop stop-color="#9E100A" offset="43%"></stop>
            <stop stop-color="#B3100C" offset="99%"></stop>
            <stop stop-color="#B3100C" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="30.8698732%" y1="35.5989756%" x2="92.4707626%" y2="100.693616%" id="linearGradient-16">
            <stop stop-color="#B31000" offset="0%"></stop>
            <stop stop-color="#B31000" offset="0%"></stop>
            <stop stop-color="#910F08" offset="44%"></stop>
            <stop stop-color="#791C12" offset="99%"></stop>
            <stop stop-color="#791C12" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
        <path d="M197.467337,167.763618 L51.9461307,254.173266 L240.368563,241.387417 L254.880804,51.3929648 L197.467337,167.763618 Z" fill="url(#linearGradient-1)"></path>
        <path d="M240.677307,241.257487 L224.482412,129.479397 L180.369367,187.729045 L240.677307,241.257487 Z" fill="url(#linearGradient-2)"></path>
        <path d="M240.896,241.257487 L122.249648,231.943719 L52.5764824,253.930131 L240.896,241.257487 Z" fill="url(#linearGradient-3)"></path>
        <path d="M52.7437186,253.954573 L82.3831156,156.854673 L17.161005,170.800884 L52.7437186,253.954573 Z" fill="url(#linearGradient-4)"></path>
        <path d="M180.357789,188.050653 L153.085427,81.2253266 L75.0375879,154.384724 L180.357789,188.050653 Z" fill="url(#linearGradient-5)"></path>
        <path d="M248.693065,82.7304523 L174.916181,22.4739698 L154.371859,88.8924623 L248.693065,82.7304523 Z" fill="url(#linearGradient-6)"></path>
        <path d="M214.190955,0.990552764 L170.799598,24.9696482 L143.424322,0.668944724 L214.190955,0.990552764 Z" fill="url(#linearGradient-7)"></path>
        <path d="M0,203.37206 L18.1772864,170.220704 L3.47336683,130.727236 L0,203.37206 Z" fill="url(#linearGradient-8)"></path>
        <path d="M2.49567839,129.479397 L17.2896482,171.442814 L81.5726633,157.020623 L154.963618,88.8139899 L175.675176,23.0271357 L143.062834,0 L87.617608,20.7501508 C70.1491457,36.9977889 36.2516583,69.1457286 35.0295477,69.7503518 C33.8203015,70.3678392 12.6456281,110.388744 2.49567839,129.479397 L2.49567839,129.479397 Z" fill="#FFFFFF"></path>
        <path d="M54.441809,54.0944724 C92.3015075,16.5563819 141.108744,-5.62170854 159.839196,13.2759799 C178.55807,32.1736683 158.707136,78.0992965 120.847437,115.624523 C82.9877387,153.149749 34.7851256,176.54995 16.0675377,157.652261 C-2.66291457,138.767437 16.5821106,91.6196985 54.441809,54.0944724 L54.441809,54.0944724 Z" fill="url(#linearGradient-9)"></path>
        <path d="M52.7437186,253.91598 L82.1515578,156.507337 L179.817487,187.883417 C144.504925,220.996181 105.230151,248.988945 52.7437186,253.91598 L52.7437186,253.91598 Z" fill="url(#linearGradient-10)"></path>
        <path d="M155.092261,88.6223116 L180.164824,187.934874 C209.662714,156.918995 236.137487,123.574673 249.103437,82.3316583 L155.092261,88.6223116 L155.092261,88.6223116 Z" fill="url(#linearGradient-11)"></path>
        <path d="M248.847437,82.8333668 C258.881608,52.5507538 261.197186,9.1079397 213.880925,1.04201005 L175.056402,22.4868342 L248.847437,82.8333668 L248.847437,82.8333668 Z" fill="url(#linearGradient-12)"></path>
        <path d="M0,202.934673 C1.38934673,252.913849 37.4480402,253.658693 52.8080402,254.097367 L17.3282412,171.236985 L0,202.934673 L0,202.934673 Z" fill="#9E1209"></path>
        <path d="M155.232482,88.7766834 C177.899417,102.708744 223.58191,130.688643 224.508141,131.203216 C225.947658,132.013668 244.203417,100.418894 248.345729,82.5632161 L155.232482,88.7766834 L155.232482,88.7766834 Z" fill="url(#radialGradient-13)"></path>
        <path d="M82.1129648,156.507337 L121.426332,232.355377 C144.672161,219.748342 162.875176,204.388342 179.547337,187.934874 L82.1129648,156.507337 L82.1129648,156.507337 Z" fill="url(#radialGradient-14)"></path>
        <path d="M17.1738693,171.339899 L11.6036181,237.668342 C22.1137688,252.024925 36.5732663,253.272764 51.7403015,252.153568 C40.7670352,224.842613 18.8462312,170.233568 17.1738693,171.339899 L17.1738693,171.339899 Z" fill="url(#linearGradient-15)"></path>
        <path d="M174.826131,22.6540704 L252.925427,33.6144724 C248.757387,15.9517588 235.957387,4.55396985 214.139497,0.990552764 L174.826131,22.6540704 L174.826131,22.6540704 Z" fill="url(#linearGradient-16)"></path>
    </g>
</svg>  
Ruby</span>](introduction/try-deploying/ruby-app.md)

[<span class="float-left-padding center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 95.643" width="75" height="75" fill="#00acd7"><path d="M19.32 28.96c-.5 0-.623-.25-.374-.623l2.617-3.365c.25-.374.872-.623 1.37-.623H67.43c.5 0 .623.374.374.748l-2.12 3.24c-.25.374-.872.748-1.246.748l-45.12-.125zM.5 40.427c-.5 0-.623-.25-.374-.623l2.617-3.365c.25-.374.872-.623 1.37-.623H60.95c.5 0 .748.374.623.748l-.997 2.99c-.125.5-.623.748-1.122.748L.5 40.427zm30.163 11.467c-.5 0-.623-.374-.374-.748l1.745-3.116c.25-.374.748-.748 1.246-.748h24.928c.5 0 .748.374.748.872l-.25 2.99c0 .5-.5.872-.872.872l-27.172-.125zm129.38-25.178L139.1 32.2c-1.87.5-1.994.623-3.615-1.246-1.87-2.12-3.24-3.5-5.858-4.736-7.852-3.864-15.456-2.742-22.56 1.87-8.476 5.484-12.838 13.586-12.714 23.682.125 9.97 6.98 18.198 16.827 19.57 8.476 1.122 15.58-1.87 21.19-8.226 1.122-1.37 2.12-2.867 3.365-4.612H111.68c-2.617 0-3.24-1.62-2.368-3.74 1.62-3.864 4.612-10.345 6.357-13.586.374-.748 1.246-1.994 3.116-1.994h45.37c-.25 3.365-.25 6.73-.748 10.096-1.37 8.974-4.736 17.2-10.22 24.43-8.974 11.84-20.69 19.195-35.523 21.19-12.215 1.62-23.557-.748-33.53-8.226C74.9 79.69 69.675 70.466 68.304 59c-1.62-13.586 2.368-25.8 10.595-36.52 8.85-11.592 20.566-18.946 34.9-21.563 11.716-2.12 22.934-.748 33.03 6.107 6.606 4.362 11.342 10.345 14.46 17.575.748 1.122.25 1.745-1.246 2.12z"/><path d="M201.297 95.643c-11.342-.25-21.688-3.5-30.413-10.97-7.354-6.357-11.966-14.46-13.46-24.056-2.244-14.085 1.62-26.55 10.096-37.642 9.1-11.966 20.067-18.198 34.9-20.815 12.714-2.244 24.68-.997 35.523 6.357 9.847 6.73 15.954 15.83 17.575 27.795 2.12 16.827-2.742 30.537-14.334 42.254-8.226 8.35-18.322 13.586-29.914 15.954-3.365.623-6.73.748-9.97 1.122zm29.665-50.355c-.125-1.62-.125-2.867-.374-4.113-2.244-12.34-13.586-19.32-25.427-16.577-11.592 2.617-19.07 9.97-21.812 21.688-2.244 9.722 2.493 19.57 11.467 23.557 6.855 2.99 13.71 2.617 20.317-.748 9.847-5.1 15.206-13.087 15.83-23.807z"/></svg>  
Go</span>](introduction/try-deploying/go-app.md)

[<span class="float-left-padding center"><img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Elixir_programming_language_logo.png" height=75 alt="Elixir" style="display: inline-block" />  
Elixir</span>](introduction/try-deploying/elixir-app.md)

<div style="clear: both"></div>

## The KintoHub Workflow

KintoHub makes it easy to deploy cloud-native applications by _simplifying the workflow from source to production_. It's a quick 4-step process:

1. __Build your source code__ into [KintoBlocks](kintoblocks/introduction.md), to give them cloud-native powers.
2. __Combine KintoBlocks__ into a [Project](deployments/introduction.md), to prepare a release.
3. Hit a single __Deploy__ button to push your code to the cloud.
4. Your app is immediately __ready to access__ and you can call its APIs.

![The KintoHub workflow; build KintoBlocks, add to Deployments, deploy and call APIs](assets/introduction/getting-started/kintohub-workflow.svg)

The KintoHub workflow in action:
	
<video autoplay loop muted width="100%">
    <source src="/docs/assets/introduction/workflow-intro.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>