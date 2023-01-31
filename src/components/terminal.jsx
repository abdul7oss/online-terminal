import React from 'react'
import $ from 'jquery'

import 'jquery.terminal'
import 'jquery.terminal/css/jquery.terminal.css'
import commands from '../commands'
const intro={
        
    // DANGER: high
    // Don't mess with this part or else all HELL will fall loose.

    
    prompt:".----------------.  .----------------.  .----------------.  .----------------.  .----------------.\n " +
    "| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |\n "+
    "| |  _______     | || |      __      | || |   ________   | || |     _____    | || | ____    ____ | |\n "+
    "| | |_   __ \\    | || |     /  \\     | || |  |  __   _|  | || |    |_   _|   | || ||_   \\  /   _|| |\n "+
    "| |   | |__) |   | || |    / /\\ \\    | || |  |_/  / /    | || |      | |     | || |  |   \\/   |  | |\n "+
    "| |   |  __ /    | || |   / ____ \\   | || |     .'.' _   | || |      | |     | || |  | |\\  /| |  | |\n "+
    "| |  _| |  \\ \\_  | || | _/ /    \\ \\_ | || |   _/ /__/ |  | || |     _| |_    | || | _| |_\\/_| |_ | |\n "+
    "| | |____| |___| | || ||____|  |____|| || |  |________|  | || |    |_____|   | || ||_____||_____|| |\n "+
    "| |              | || |              | || |              | || |              | || |              | |\n "+
    "| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |\n"+
     "'----------------'  '----------------'  '----------------'  '----------------'  '----------------' \n" +
    "[[b;#44D549;]razim@localhost~$] ",
    greetings: 
                "Type  [[b;#FFFFFF;]help] to get started \n" +
               "> The shell is basically a program that takes your commands from the keyboard and sends them to the operating system to perform.\n" +
               "> The [[b;#44D544;]Terminal] is a program that launches a shell for you.\n" +
               "> Type [[b;#ff3300;]help] to see the list of [[b;#44D544;]commands/tasks].\n\n" +
               '> Start with [[b;#ff3300;]echo "any string"].\n',
    onBlur: function() {
        // prevent loosing focus
        return false;
    }       
}
export default class Terminal extends React.Component{

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.terminal(commands(this.$el),intro)
    }


    render(){
        return <div  style= {{display:'block',position:'absolute',width:'100%'}} ref={el => this.el = el} /> 
    }
}