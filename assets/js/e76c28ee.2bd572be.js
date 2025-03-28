"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[7318],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}},96777:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"self-host/docker/upgrade-deployment","title":"OpenSign\u2122 Self-Hosted \'Upgrade Deployment\' Guide Using Docker on Linux, macOS, or Windows","description":"This guide provides step-by-step instructions to upgrade the deployment of OpenSign using Docker.","source":"@site/docs/self-host/docker/upgrade-deployment.md","sourceDirName":"self-host/docker","slug":"/self-host/docker/upgrade-deployment","permalink":"/docs/self-host/docker/upgrade-deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/docker/upgrade-deployment.md","tags":[],"version":"current","frontMatter":{"title":"OpenSign\u2122 Self-Hosted \'Upgrade Deployment\' Guide Using Docker on Linux, macOS, or Windows"},"sidebar":"selfhostSidebar","previous":{"title":"Self-host OpenSign\u2122 with Docker on Linux/MacOS/Windows","permalink":"/docs/self-host/docker/run-locally"},"next":{"title":"Cloud Storage","permalink":"/docs/category/cloud-storage"}}');var t=o(74848),i=o(28453);const r={title:"OpenSign\u2122 Self-Hosted 'Upgrade Deployment' Guide Using Docker on Linux, macOS, or Windows"},l=void 0,c={},d=[{value:"Step 1: Open the Terminal",id:"step-1-open-the-terminal",level:3},{value:"Step 2: Pull the Latest Docker Images",id:"step-2-pull-the-latest-docker-images",level:3},{value:"Running on a custom domain",id:"running-on-a-custom-domain",level:2},{value:"Running locally",id:"running-locally",level:2},{value:"Step 3: Start the Updated OpenSign Deployment",id:"step-3-start-the-updated-opensign-deployment",level:3},{value:"Running Docker Compose in Detached Mode",id:"running-docker-compose-in-detached-mode",level:3},{value:"Troubleshooting:",id:"troubleshooting",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide provides step-by-step instructions to upgrade the deployment of OpenSign using Docker."}),"\n",(0,t.jsx)(n.h3,{id:"step-1-open-the-terminal",children:"Step 1: Open the Terminal"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Windows:"})," Press Win + X and select Windows PowerShell or Windows Terminal from the menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"macOS:"}),'  Go to Applications > Utilities > Terminal or search for "Terminal" using Spotlight (Cmd + Space).']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Linux:"}),"  Open the terminal from the application menu or by pressing Ctrl + Alt + T."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"step-2-pull-the-latest-docker-images",children:"Step 2: Pull the Latest Docker Images"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Before executing the commands below, make sure Docker is running on your machine."}),"\n",(0,t.jsxs)(n.li,{children:["Ensure that you are in the same directory where you executed the ",(0,t.jsx)(n.code,{children:"build"})," or ",(0,t.jsx)(n.code,{children:"compose"})," Docker command."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Run the following command to pull the latest OpenSign Docker images:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"}),"  If you've made any custom changes to your docker-compose.yml file, they will be lost when running the command below. This command is intended only for those who haven't made any custom modifications to their docker-compose.yml file."]}),"\n",(0,t.jsx)(n.h2,{id:"running-on-a-custom-domain",children:"Running on a custom domain"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"linux/MacOS"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"export HOST_URL=https://opensign.yourdomain.com && curl --remote-name-all https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && docker compose pull\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," (Powershell)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'$env:HOST_URL="https://opensign.yourdomain.com"; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml -OutFile docker-compose.yml; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile -OutFile Caddyfile; docker compose pull\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," (Command Prompt)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"set HOST_URL=https://opensign.yourdomain.com && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && docker compose pull\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This command will fetch the most recent versions of the Docker images required by OpenSign."}),"\n",(0,t.jsx)(n.li,{children:"Wait for the pulling process to complete. You should see messages indicating the progress and completion of the download."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-locally",children:"Running locally"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"linux/MacOS"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl --remote-name-all https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && docker compose pull\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," (Powershell)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml -OutFile docker-compose.yml; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile -OutFile Caddyfile; docker compose pull\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Windows"})," (Command Prompt)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && docker compose pull\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This command will fetch the most recent versions of the Docker images required by OpenSign."}),"\n",(0,t.jsx)(n.li,{children:"Wait for the pulling process to complete. You should see messages indicating the progress and completion of the download."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"550",alt:"Pulling completed",src:"https://github.com/user-attachments/assets/1b708b04-e6e6-45a0-9625-94e420a68343"}),"\n",(0,t.jsx)(n.h3,{id:"step-3-start-the-updated-opensign-deployment",children:"Step 3: Start the Updated OpenSign Deployment"}),"\n",(0,t.jsx)(n.p,{children:"After the images have been successfully pulled, run the following command to start the updated OpenSign deployment:"}),"\n",(0,t.jsx)(n.h3,{id:"running-docker-compose-in-detached-mode",children:"Running Docker Compose in Detached Mode"}),"\n",(0,t.jsx)(n.p,{children:"To start your Docker Compose services in detached mode (running in the background), use the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Explanation:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"docker-compose up: This command starts the services defined in your docker-compose.yml file."}),"\n",(0,t.jsx)(n.li,{children:"-d: The detached mode flag, which runs the containers in the background and frees up your terminal."}),"\n",(0,t.jsx)(n.li,{children:"If you want to view the logs, avoid using the -d flag."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"550",alt:"Docker compose up",src:"https://github.com/user-attachments/assets/c573baaf-f70d-468e-a531-75b85a275647"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": The docker compose pull command ensures that you have the latest version of the Docker images, while the docker compose up command applies any updates and starts the containers."]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you encounter any errors, check Docker logs by running docker compose logs to get more details."}),"\n",(0,t.jsx)(n.li,{children:"Verify that your environment variables and Docker configuration files are set correctly."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you require more help, feel free to reach out to our customer support on ",(0,t.jsx)(n.a,{href:"mailto:support@opensignlabs.com",children:"support@opensignlabs.com"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For instant help and support, ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://discord.com/invite/xe9TDuyAyj",children:"join our Discord community!"})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);