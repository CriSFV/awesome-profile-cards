"use strict";const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),defaultImg="./assets/images/card-pic.jpg";function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){data.photo=fr.result,previewImage(),setlocalHost()}function previewImage(){""===data.photo?profileImage.style.backgroundImage=`url(${defaultImg})`:(profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`)}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const allTitle=document.querySelectorAll(".js_collapsable"),allSection=document.querySelectorAll(".js_section"),allArrows=document.querySelectorAll(".js_iconEnd");function arrowReverse(e){const t=e.currentTarget.querySelector(".js_iconEnd");t.classList.contains("arrowReverse")?t.classList.remove("arrowReverse"):t.classList.add("arrowReverse")}function closeOpenCollapsables(e){e.currentTarget.parentNode.querySelector(".js_section").classList.toggle("hidden")}function startAgain(){for(const e of allSection)e.classList.add("hidden");for(const e of allArrows)e.classList.remove("arrowReverse")}function handleClickCollapsable(e){startAgain(),arrowReverse(e),closeOpenCollapsables(e)}for(const e of allTitle)e.addEventListener("click",handleClickCollapsable);const coloursDesign=document.querySelectorAll(".js_design"),paintColor=document.querySelectorAll(".js_designColor");function paintPreview(e){const t=parseInt(e.target.id);1===t?paintDefault():2===t?paintRed():paintYellow()}function paintRed(){for(const e of paintColor)e.classList.remove("defaultpalette"),e.classList.remove("yellowpalette"),e.classList.add("redpalette")}function paintYellow(){for(const e of paintColor)e.classList.remove("defaultpalette"),e.classList.remove("redpalette"),e.classList.add("yellowpalette")}function paintDefault(){for(const e of paintColor)e.classList.remove("yellowpalette"),e.classList.remove("redpalette"),e.classList.add("defaultpalette")}for(const e of coloursDesign)e.addEventListener("click",paintPreview);const previewName=document.querySelector(".js_previewName"),previewDescription=document.querySelector(".js_previewDescription"),previewEmail=document.querySelector(".js_previewEmail"),previewPhone=document.querySelector(".js_previewPhone"),previewLinkedin=document.querySelector(".js_previewLinkedin"),previewGithub=document.querySelector(".js_previewGithub"),allImputs=document.querySelectorAll(".js_allInputs"),resetButton=document.querySelector(".js_resetButton"),form=document.querySelector(".js_form");let data={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:""};function fillCard(e){const t=parseInt(e.palette);if(""!==e.name||""!==e.job)1===t?paintDefault():2===t?paintRed():paintYellow(),previewName.innerHTML=e.name,previewDescription.innerHTML=e.job,previewPhone.href="phone:"+e.phone,previewEmail.setAttribute("href","mailto:"+e.email),previewLinkedin.setAttribute("href","https://www.linkedin.com/in/"+e.linkedin+"/"),previewGithub.setAttribute("href","https://github.com/"+e.github);else{previewName.innerHTML="Nombre Apellidos",previewDescription.innerHTML="Descripción",previewPhone.href="#",previewEmail.setAttribute("href","#"),previewLinkedin.setAttribute("href","#"),previewGithub.setAttribute("href","#"),1===t||""===t?paintDefault():2===t?paintRed():paintYellow();for(const e of allImputs)e.value=""}}function setInLocalStorage(){const e=JSON.stringify(data);localStorage.setItem("dataUser",e)}function handleFillData(e){if("palette"===e.target.name){const t=e.target.name,r=e.target.value;data[t]=r}else{const t=e.target.id,r=e.target.value;data[t]=r}setInLocalStorage(),fillCard(data)}function handleResetBtn(){data={palette:"",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},localStorage.clear(),location.reload(),fillCard(data)}form.addEventListener("change",handleFillData),resetButton.addEventListener("click",handleResetBtn);const createButton=document.querySelector(".js_shareButton"),urlCard=document.querySelector(".js_urlCard"),notCreated=document.querySelector(".js_notCreate"),twitterBtn=document.querySelector(".js_twiterBtn");let responseLink;function createCard(){fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",body:JSON.stringify(data),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{responseLink=e.cardURL,!0===e.success?(notCreated.classList.remove("hidden"),notCreated.innerHTML="Tu tarjeta ha sido creada",urlCard.innerHTML=`<a href="${e.cardURL}">Pincha aquí, ${data.name} <i class="far fa-smile-wink"></i> </a>`,twitterBtn.classList.remove("hidden"),twitterBtn.innerHTML=`<a class= "twitter__link js_twitterLink" href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${responseLink}" target="_blank"><i class="fab fa-twitter"></i> Compartir en Twiter</a>`):(notCreated.classList.remove("hidden"),notCreated.innerHTML="No hemos podido crear la tarjeta",urlCard.innerHTML='<i class="far fa-sad-tear"></i> Introduzca todos los campos obligatorios')})}function handleTwitter(){twitterBtn.href=`"https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${responseLink}"`}function handleCreateBtn(e){e.preventDefault(),createCard(),document.querySelector(".js_createdCard").classList.remove("hidden")}twitterBtn.addEventListener("click",handleTwitter),createButton.addEventListener("click",handleCreateBtn);