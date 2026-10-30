'use strict';
function createDeckBus(session,onMessage){
 const name='bi-presenter-'+session;let channel=null;try{if(typeof BroadcastChannel!=='undefined')channel=new BroadcastChannel(name);}catch{}
 const deliver=value=>{if(value&&typeof value==='object')onMessage(value);};
 if(channel)channel.onmessage=e=>deliver(e.data);else window.addEventListener('storage',e=>{if(e.key===name+'-event'&&e.newValue){try{deliver(JSON.parse(e.newValue).message);}catch{}}});
 return {send(message){if(channel)channel.postMessage(message);else try{localStorage.setItem(name+'-event',JSON.stringify({nonce:Date.now()+Math.random(),message}));}catch{}},saveState(state){try{localStorage.setItem(name+'-state',JSON.stringify(state));}catch{}},readState(){try{return JSON.parse(localStorage.getItem(name+'-state'));}catch{return null;}}};
}
