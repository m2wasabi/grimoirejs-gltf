curl -X POST -d "repositoryURL=$CIRCLE_REPOSITORY_URL&currentBranch=$CIRCLE_BRANCH&currentBuildNumber=$CIRCLE_BUILD_NUM&previousBuildNumber=$CIRCLE_PREVIOUS_BUILD_NUM&sha1=$CIRCLE_SHA1" $E2E_TRIGGER