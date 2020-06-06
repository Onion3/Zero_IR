/*
Copyright (C): 2020, Shenzhen Onion3 Tech
modified by Sean
*/

/**
 * IR remote
 */
//% icon="\uf1eb" weight=19 color=50
namespace Zero_IR {

    /**
    * initialization
    */
    //% blockId=Zero_IR_init
    //% blockGap=20 weight=90
    //% block="connect ir receiver to %pin"
    //% shim=Zero_IR::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=Zero_IR_received_event
    //% blockGap=20 weight=89
    //% block="on |%btn| button pressed"
    //% shim=Zero_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
  
  }
  