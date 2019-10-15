
import React, { Component } from "react";

import navigationStyles from "../modules/navigation.module.scss";

class Nav extends Component {
    render() {

        var ns = navigationStyles

    return (
        <div>
            <nav>
                <div className={ns.container}>
                    <h1 className={ns.title}>
                        Pearl
                    </h1>
                </div>
                <ul className={ns.navigationList}>
                    <a className={ns.link} href="#/">
                     <li>
                        <h4>Our Work</h4>
                    </li>
                   </a>
                   <a className={ns.link} href="#/">
                     <li>
                        <h4>Clients</h4>
                    </li>
                   </a>
                   <a  className={ns.link}href="#/">
                     <li>
                        <h4>Team</h4>
                    </li>
                   </a>
                   <a className={ns.link} href="#/">
                     <li>
                        <h4>Sign-Up</h4>
                    </li>
                   </a>
                </ul>
            </nav>
      </div>
    );
  }
}



export default Nav;