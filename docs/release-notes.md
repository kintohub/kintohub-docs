---
title: Release Notes
---

## Beta-0.1.0
September 2019

**IT'S LIVE!**

* Beta is here! With loads of improvements making KintoHub faster than it's ever been.

**Accounts & Admin**

* Pro tier is now available to upgrade towards. Get more storage and serverless memory along with plenty of other benefits. Check it out here: https://www.kintohub.com/pricing/

**Kintoblocks**

* No Changes

**Logs**

* No Changes

**Websites**

* Upon deployment SSL will be done automatically from now on.

**Deployments**

* New confirmation was added. Showing exactly what changes you're about to deploy before finalizing it.
* Dependency settings will no longer take you to a new page. Now it will be in a popup on the side.
* Able to configure how much memory a block uses.

**General Changes**

* A huge refactor was done. We rebuilt a lot of the core services and have vastly increased the speed of KintoHub. Making your deployments faster than ever.

## Alpha-0.5.0
July 2019

This release was mainly focused on squashing tons of bugs that have been bothering us and our users. 


* New website has launched! Looking better than ever. 

**Accounts & Admin**

* No Changes

**Kintoblocks**

* No Changes

**Logs**

* No Changes

**Deployments**
* Removed the extra kintoblocks list from the bottom of the manage page. Making it overall a lot less cluttered.
* Moved the endpoints feature into the original kintoblock list.
 
**Bug Fixes**
 
* Logs will now properly display for static website.
* If you have an existing repository with more webhooks, new branches will update correctly within the sidebar.
* Using bitbucket repo, dynamic website will properly deploy now.
* Should now be able to redeploy a failed deployment properly.
* Deployments will no longer fail after shut down.
* Search should properly work within kintodocs again 🙂
* Text has been changed to be correct if docs for a build is not found.
* Properly be able to delete a kintoblock when it's deactivated in a shutdown deplyoment.
* Removed the issue of not being able to create a static website with bitbucket as a new repo.
* "Inappropriate validation error" Will no longer appear if you try to deploy a new kintoblock within a post shutdown environment.
* Should now properly be able to promote one environment to another.
* Upon redeploying a failed block it will no longer redeploy all blocks just the failed one. 
* Deployments should properly display success state for all  kintoblocks if it's true now.
* If a deployment is made by removing an existing kb & adding a new one. It will display it as such in the status and history section.
 
## Alpha-0.4.0
June 2019

**Accounts & Admin**

* No Changes

**Deployments**

* Removed per deployment logs. 

**Logs**

* Reduced the space between logs
* Date is now included within the time for each log.
* Added instance ID & Instance ID Filter.
* Moved the dropdown for blocks within the url. 

**Kintoblocks**
   
* **New Feature** Ability to make your kintoblock public to the world.
* **New Feature** Finally able to delete your kintoblock! 
* **New Feature** Basic auth has been added for website kintoblocks. 

**Squashed Bugs**
* Delete environment will properly call shutdown block.
* "Reset to default values" button will now properly appear for custom service kintoblocks.
* Workspace name will no longer be duplicated if you ever shared a workspace with the same name.
* Public & Webhook url has been fixed within deployment manage.
* No longer able to reset your password multiple times using one link. 

## Alpha-0.3.0
May 2019

**Accounts & Admin**

* No Changes

**Deployments**
* Ability to set helm arguments within the KintoBlock Configuration Page.

**KintoBlocks**

* **New Feature** Github Apps! You can now specify only one or many repositories in KintoHub to have access using Github's new GithubApps Authentication. **You will need to relink your account to github in your workspace settings once you login!**

**Websites**
* Static Websites are now available.
* Website kintoblocks now have a unique Hash within each url.

**Custom Services**
* Helm arguments are officially implemented.

## Alpha-0.2.0
April 2019

**Accounts & Admin**

* No Changes

**API Gateway & Service Access**

* Kintohub auth now uses Kinto-Authorization instead of Authorization header.

**Deployments**

* No Changes

**KintoBlocks**

* **New Feature** Copy and paste environment variables
* Refresh Lastest Commits is now Rebuild Latest Commit, always building new feature.

**Workspaces**

* No new changes

**Infrastructure**

* Minor improvements on build workflows
* Request / API Refactor and Support


**BUGS**

* Fix issue where services sometimes showed shutdown when they were not.
* Fix issue where you can't switch between deployments, random page crash


## Alpha-0.1.0
March 2019

**Accounts & Admin**

* No Changes

**Deployments**

* Dedicated “copy” button displayed below the title of deployment for “ClientID” and “Secret Key”.
* Dedicated “copy” button displayed under the “API Access section”  for “ClientID” and “Secret Key”.
* New sections added under “API Access section”. 
* External access - For accessing KintoBlock API endpoint.
* Internal access - For accessing KintoBlock API endpoint locally.
* Public & Webhook access - For accessing KintoBlock API endpoint with an Authentication Token.
* Environment delete option - User needs to have at least two environments to do delete.
* Quick scroll link on environment card  - Clicking on the link navigates to delete option.
* Configure KintoBlocks - “Reset to default values” button. 
* “Delete Deployment” option in card drop down. Clicking on it gives a pop up to enter the text “deleted” with two buttons “Do nothing” and “Delete Deployment”.

**KintoBlocks**

* By default "None" option is selected in "Doc Format" field during creation of KintoBlock. User can enable ApiDoc for KintoBlock by selecting "ApiDoc" option in "Doc Format" field.

**Workspaces**

* No new changes

**Infrastructure**

* General improved security update

**BUGS**

* Fix Token Refresh / Login Issue
