import React from "react";

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume']

    return (
        <header>
            <li>
                <h1>Vu Tang</h1>
            </li>
            <nav>
                {tabs.map(tab => (
                    <li key={tab}>
                        <a
                            href={'#' + tab}
                            onClick={() => props.setCurrentTab(tab)}
                            className=".."
                        >
                            {tab}
                        </a>
                    </li>
                ))}

            </nav>
        </header>
    )
}

export default Nav;