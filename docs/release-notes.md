---
title: Release Notes
---

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
