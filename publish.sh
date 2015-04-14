#!/usr/bin/env bash

##
# Configuration options
##
BUCKET='s3://upcontent.com'
SITE_DIR='public/'
export AWS_DEFAULT_PROFILE='upcontent'

##
# Color stuff
##
NORMAL=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2; tput bold)
YELLOW=$(tput setaf 3)

function red() {
    echo "$RED$*$NORMAL"
}

function green() {
    echo "$GREEN$*$NORMAL"
}

function yellow() {
    echo "$YELLOW$*$NORMAL"
}

##
# Actual script
##

#yellow '--> Gzipping all html files'
#find $SITE_DIR \( -iname '*.html' \) -exec gzip -9 -n {} \; -exec mv {}.gz {} \;

#yellow '--> Gzipping all JS files'
#find $SITE_DIR \( -iname '*.js' \) -exec gzip -9 -n {} \; -exec mv {}.gz {} \;

#yellow '--> Gzipping all CSS files'
#find $SITE_DIR \( -iname '*.css' \) -exec gzip -9 -n {} \; -exec mv {}.gz {} \;

# yellow '--> Getting diff…'
# aws s3 sync --size-only $SITE_DIR $BUCKET --dryrun | awk "/s3:\/\/nerderati.com/ {print $5}"
#
# exit 0

yellow '--> Uploading js/css files'
aws s3 sync --size-only --delete --exclude '*.*' --include '*.css' --include '*.js' --cache-control='max-age=300' $SITE_DIR $BUCKET

yellow '--> Uploading images (jpg, png, ico)'
aws s3 sync --size-only --delete --exclude '*.*' --include '*.svg' --include '*.png' --include '*.jpg' --include '*.ico' --cache-control='max-age=300' $SITE_DIR $BUCKET

# Sync html files (Cache: 2 hours)
yellow '--> Uploading html files (except index.html) with 2 hour max-age'
aws s3 sync --size-only --delete --exclude '*.*' --exclude 'index.html' --include '*.html' --content-type='text/html' --cache-control='max-age=300, must-revalidate' $SITE_DIR $BUCKET

yellow '--> Uploading index.html with 1 hour max-age'
aws s3 sync --size-only --delete --exclude '*.*' --include 'index.html' --content-type='text/html' --cache-control='max-age=300, must-revalidate' $SITE_DIR $BUCKET

yellow '--> Upload sitemap and feed'
aws s3 sync --size-only --delete --exclude '*.*' --include '*.xml' --cache-control='max-age=300, must-revalidate' $SITE_DIR $BUCKET


# Sync everything else
yellow '--> Syncing everything else'
aws s3 sync --size-only --delete --exclude '*.*' --include 'humans.txt' --include 'robots.txt' $SITE_DIR $BUCKET

green '--> Done!'

unset AWS_DEFAULT_PROFILE
