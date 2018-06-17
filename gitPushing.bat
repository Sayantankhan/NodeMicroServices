::::
:::: done by Sayantan Khan.
::::
@ECHO OFF

for %%* in (.) do set CurrDirName=%%~nx*
echo %CurrDirName%

SET repo_name=%1

if [%repo_name] EQU [] (
    echo "Repo name (hit enter to use '$dir_name')?"
    set /p repo_name=
)