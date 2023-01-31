import Files from '../lib/fs'
let file = new Files()
let fs =  (context,counter) =>{

    return {
        ls: () => {
            context.echo(file.getPath())
        },
        cd: (arg) => {
            context.echo(file.changeDir(arg))
        },
        mkdir: (arg)=>{
            context.echo(file.mkdir(arg))
        }
    }
}


export {fs}