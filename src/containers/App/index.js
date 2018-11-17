
 import React from 'react';
 import ReactDOM from "react-dom";
 import styles from "../../index.css";
 import Clock from '../../components/Clock'; // ../../components/Clock men dol ?
// now you are at src/containers/App, if you write './components/Clock' this is called a relative path
// which means the compiler will search for "src/containers/app/components/clock", so if you want
// to go back in directory you type "../", when we write '../../' this means we'll go back two times
// one outside App folder, and the other outside containers folders, now we're at src, so we can write 
// after that /components/Clock, 
// meaning: inside App , '../../components/Clock' => src/compnents/clock
// makes sence ? sense* :D Big no , el microphone mwgod ..... leh el ktaba we ell8bata de bs :D

  class Index extends React.Component { 
     render() {
        return (
            <div className={styles.index}>
                Hello React!
                <Clock s={5} m={59} h={11} />
            </div>
            );
     }
	
}

export default Index ;
// create-react-app