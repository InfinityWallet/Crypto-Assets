const fs = require("pn/fs");
const svg2png = require("svg2png");

//FILE NAMES + ARG CONFIG
const mainFolder = "Cryptos";
//#Logo name to convert from
const infoFolderSvg = "logo.svg";
//#Logo name to convert to
const infoFolderPng = "logo.png";
//#Allowed Arguments
const argCommands = ["missing", "all"];
//#PNG Img Sizes
const pngWidth = 512;
const pngHeight = 512;
//Errors Array
const errorsSvg = [];
const errorsFolder = [];


//Check Passed Argument
function Arguments(){
  var argument = process.argv.slice(2);
  if(typeof argument !== 'undefined' && argCommands.includes(argument[0]) === true){
    GenerateInit(argument[0]);
  } else {
    console.log('\x1b[31m%s\x1b[0m', "Invalid Arugment please use one of the following ["+argCommands+"]")
  }
}

//Initalize PNG Generating
async function GenerateInit(arg){
  try{

    var cryptoFolder = fs.readdirSync('./'+mainFolder);

    if(cryptoFolder.length !== 0){

      for (const chainsFolder of cryptoFolder) {

        var chain = fs.readdirSync('./'+mainFolder+'/'+chainsFolder);

        if(chain.length !== 0){

          if (checkIfContainsOnly("info", chain) === true){

            if(checkIfFileExists('./'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderSvg) === true){

              if (arg === "missing") {
                if(checkIfFileExists('./'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderPng) === false){
                  await convertSvgToPng(chainsFolder, chain, './'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderSvg, './'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderPng);
                }
              } else {
                await convertSvgToPng(chainsFolder, chain, './'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderSvg, './'+mainFolder+'/'+chainsFolder+'/info/'+infoFolderPng);
              }

            } else {
              //SVG Error Array
              errorsSvg.push("./"+mainFolder+"/"+chainsFolder+"/info/"+infoFolderSvg);
            }

          } else {

            for (const tokensFolder of chain) {

              if(checkIfFileExists('./'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderSvg) === true){

                if (arg === "missing") {
                  if(checkIfFileExists('./'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderPng) === false){
                    await convertSvgToPng(chainsFolder, tokensFolder, './'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderSvg, './'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderPng)
                  }
                } else {
                  await convertSvgToPng(chainsFolder, tokensFolder, './'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderSvg, './'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderPng)
                }

              } else {
                //SVG Error Array
                errorsSvg.push('./'+mainFolder+'/'+chainsFolder+'/'+tokensFolder+'/'+infoFolderSvg);
              }

            }
          }

        } else {
          //Folder Empty Error Array
          errorsFolder.push('./'+mainFolder+'/'+chainsFolder);
        }

      }

      finished();

    } else {
      //Folder Empty Error Array
      errorsFolder.push('./'+mainFolder);
      finished();
    }

  } catch(e) {
    console.log(e)
  }
}

//Check if file exists
function checkIfFileExists(file){
  if(fs.existsSync(file) === false){
    return false;
  } else {
    return true;
  }
}

//Check if exists in the array and is the only one(s)
function checkIfContainsOnly(checkingArray, checkAgainstArray){
  return checkAgainstArray.every(elem => checkingArray.includes(elem))
}

//Generate the PNG from the SVG file
function convertSvgToPng(chain, token, from, to){
  return new Promise((resolve, reject) => {

    var sourceBuffer = require("fs").readFileSync(from);

    svg2png(sourceBuffer, { width: pngWidth, height: pngHeight })
    .then((buffer) => {
      fs.writeFile(to, buffer);
      console.log('\x1b[32m',"PNG Generated - ", '\x1b[37m', chain+" "+token);
      resolve();
    })
    .catch((e) => {
      console.error('\x1b[31m', "Error Generating PNG - ", '\x1b[37m', chain+" "+token+" : "+e);
      reject();
    });

  });
}

//Finished
function finished(){
  console.log('\x1b[32m%s\x1b[0m', "======================================")
  console.log('\x1b[32m%s\x1b[0m', "FINISHED");
  console.log('\x1b[32m%s\x1b[0m', "======================================")
  showErrors("Fix Empty Folders", errorsFolder);
  showErrors("Fix SVG Missing Errors", errorsSvg);
}

//Show errors
function showErrors(title, errors){
  if(errors.length !== 0){
    var i = 1;
    console.log('\x1b[31m%s\x1b[0m', "======================================")
    console.log('\x1b[31m%s\x1b[0m', title);
    console.log('\x1b[31m%s\x1b[0m', "======================================")
    for (const error of errors) {
      console.log('\x1b[31m', i+"= ", '\x1b[37m', error)
      i++
    }
    console.log('\x1b[31m%s\x1b[0m',"======================================")
  }
}

//Initalize the Generating of the PNGs
Arguments();
