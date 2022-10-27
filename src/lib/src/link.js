import Router from "./router.js";

export default function link(link, props){  
    window.history.pushState( null, null, link);
    Router({ [link]: props} )
 }