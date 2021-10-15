#!/bin/bash

URL_SHORTNER_PATH=C:/Users/deepak.yadav/Desktop/PERSONAL/ALL_FOLDERS/personal_projects/url-shortner
SCRIPTS_PATH_REL=scripts
GIT_BASH_PATH=C:/Program\ Files/Git

projects=("ui" "server")

for project in ${projects[@]}
do
	cat<<-EOF >"${URL_SHORTNER_PATH}/${SCRIPTS_PATH_REL}/temp/temp_${project}.sh"
	#!/bin/bash
	cd "${URL_SHORTNER_PATH}/${project}"
	echo "****************** Currently in $(pwd) ******************"
	echo "Starting ${project^^}"
	echo
	npm start
	rm ${URL_SHORTNER_PATH}/${SCRIPTS_PATH_REL}/temp/temp_$project.sh
	sleep 5
	EOF
	
	start "" "${GIT_BASH_PATH}/git-bash.exe" -c "${URL_SHORTNER_PATH}/${SCRIPTS_PATH_REL}/temp/temp_${project}.sh"
done

exit