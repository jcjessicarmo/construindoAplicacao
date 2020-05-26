function temParam(param){
    return process.argv.indexOf(param)!== -1
}

if(temParam('--producao')){
    console.log('Atençaõ total!')
}else {
    console.log('Tranquilo!')
}