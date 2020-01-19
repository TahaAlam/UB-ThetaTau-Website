import React from 'react'

class Header extends React.Component {
    
    render() {
        return (
            <section id="tintedheader" className="section">
                <div className="inner">
                    <h1>
                        University at Buffalo Theta Tau | Mu Gamma Chapter
                    </h1>
                    <p>
                        A co-ed professional engineering fraternity
                    </p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
