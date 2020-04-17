# idm-show

By Omar AL FALEH (omar@morscad.com)  
_April 17, 2020_  

This repo is made of two main branches: `submission_website` for the submission website, and `master` for the ongoing development of the final show site.  
  
To build locally, checkout the needed branch, update `package.json` so that the `homepage` attribute reflects the right directory structure of where your site will be deployed .the url prefix doesn’t really matter, only sub-folders of the final deployment destination matters.  
Use `/` or delete the `homepage` attribute if the project is to be deployed on a server root. 

  
Then, on the commandline, type `npm i` which will install all needed dependencies (you will only need to do this once per git pull)  and then you can run `npm start` to run the server locally on `http://localhost/3000` or `npm run build` to generate the static files in a folder called `build` which can be deployed anywhere.

